(function initWorkspaceCore(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.VKB_WORKSPACE_CORE = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createWorkspaceCore() {
  "use strict";

  const WORKSPACE_SCHEMA_VERSION = 3;
  const DEFAULT_ACTIVATION_MODE = "DEFAULT";
  const CORRUPT_ACTION_KEYS = new Set(["1372"]);

  function clone(value) {
    if (value === undefined) return undefined;
    return JSON.parse(JSON.stringify(value));
  }

  function cleanText(value) {
    return String(value ?? "").trim();
  }

  function isNumericPlaceholder(value) {
    const text = cleanText(value);
    return Boolean(text) && /^\d+$/.test(text);
  }

  function isValidActionKey(value) {
    const text = cleanText(value);
    return Boolean(text) && !isNumericPlaceholder(text);
  }

  function normalizeActivationMode(value) {
    const text = cleanText(value);
    if (!text || isNumericPlaceholder(text)) return DEFAULT_ACTIVATION_MODE;
    return text.toUpperCase().replace(/[\s-]+/g, "_");
  }

  function slug(value) {
    const normalized = cleanText(value)
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return normalized || "action";
  }

  function fallbackActionKey(row, listType) {
    const type = cleanText(listType || row.listType || "game").toLowerCase() || "game";
    const order = cleanText(row.order || row.id || "unknown").replace(/[^a-zA-Z0-9_-]+/g, "-");
    const name = row.nameEn || row.nameZh || row.id || "action";
    return `${type}:${order || "unknown"}:${slug(name)}`;
  }

  function normalizeRows(rows, listType) {
    const usedFallbacks = new Map();
    return (Array.isArray(rows) ? rows : []).map((sourceRow) => {
      const row = clone(sourceRow) || {};
      const actionId = isValidActionKey(row.actionId) ? cleanText(row.actionId) : "";
      let actionKey = isValidActionKey(row.actionKey)
        ? cleanText(row.actionKey)
        : actionId;

      if (!actionKey) {
        const base = fallbackActionKey(row, listType);
        const count = usedFallbacks.get(base) || 0;
        usedFallbacks.set(base, count + 1);
        actionKey = count === 0 ? base : `${base}:${count + 1}`;
      }

      return {
        ...row,
        actionId,
        actionKey,
        activationMode: normalizeActivationMode(row.activationMode),
      };
    });
  }

  function normalizeBinding(binding, fallbackActionKeyValue) {
    const next = clone(binding) || {};
    const requestedKey = cleanText(next.actionKey || fallbackActionKeyValue);
    if (!isValidActionKey(requestedKey)) return null;
    return {
      ...next,
      actionKey: requestedKey,
      activationMode: normalizeActivationMode(next.activationMode),
    };
  }

  function normalizeDefaultBindings(bindings) {
    if (Array.isArray(bindings)) {
      return bindings
        .map((binding) => normalizeBinding(binding, binding?.actionKey))
        .filter(Boolean);
    }
    const result = {};
    for (const [key, binding] of Object.entries(bindings || {})) {
      const normalized = normalizeBinding(binding, key);
      if (normalized) result[normalized.actionKey] = normalized;
    }
    return result;
  }

  function normalizeSeed(sourceSeed) {
    const seed = clone(sourceSeed) || {};
    return {
      ...seed,
      gameRows: normalizeRows(seed.gameRows, "game"),
      scenarioRows: normalizeRows(seed.scenarioRows, "scenario"),
      defaultBindings: normalizeDefaultBindings(seed.defaultBindings),
    };
  }

  function repairIssueId(sourceActionKey) {
    return `ambiguous-action-key:${cleanText(sourceActionKey)}`;
  }

  function normalizeRepairQueue(queue) {
    const seen = new Set();
    const result = [];
    for (const rawItem of Array.isArray(queue) ? queue : []) {
      if (!rawItem || typeof rawItem !== "object") continue;
      const sourceActionKey = cleanText(rawItem.sourceActionKey || rawItem.binding?.actionKey);
      const id = cleanText(rawItem.id) || repairIssueId(sourceActionKey || "unknown");
      if (seen.has(id)) continue;
      seen.add(id);
      result.push({
        ...clone(rawItem),
        id,
        sourceActionKey,
        binding: clone(rawItem.binding) || {},
      });
    }
    return result;
  }

  function normalizeActionModes(actionModes) {
    const result = {};
    for (const [actionKey, mode] of Object.entries(actionModes || {})) {
      if (!isValidActionKey(actionKey)) continue;
      const normalized = normalizeActivationMode(mode);
      if (normalized !== DEFAULT_ACTIVATION_MODE) result[actionKey] = normalized;
    }
    return result;
  }

  function normalizeProfile(profile, fallbackId) {
    const next = clone(profile) || {};
    const bindings = {};
    const repairQueue = normalizeRepairQueue(next.repairQueue);

    for (const [key, binding] of Object.entries(next.bindings || {})) {
      if (CORRUPT_ACTION_KEYS.has(cleanText(key)) || isNumericPlaceholder(key)) {
        const id = repairIssueId(key);
        if (!repairQueue.some((item) => item.id === id)) {
          repairQueue.push({
            id,
            sourceActionKey: cleanText(key),
            binding: clone(binding) || {},
          });
        }
        continue;
      }
      const normalized = normalizeBinding(binding, key);
      if (normalized) bindings[normalized.actionKey] = normalized;
    }

    return {
      ...next,
      id: cleanText(next.id || fallbackId),
      bindings,
      repairQueue,
      actionModes: normalizeActionModes(next.actionModes),
    };
  }

  function legacyProfiles(workspace) {
    if (workspace.profiles && typeof workspace.profiles === "object") return workspace.profiles;
    const id = cleanText(workspace.activeProfileId) || "flight";
    return {
      [id]: {
        id,
        name: cleanText(workspace.profileName || workspace.name) || "Flight",
        createdAt: workspace.createdAt,
        updatedAt: workspace.updatedAt,
        bindings: clone(workspace.bindings) || {},
      },
    };
  }

  function migrateWorkspace(sourceWorkspace) {
    if (!sourceWorkspace || typeof sourceWorkspace !== "object" || Array.isArray(sourceWorkspace)) {
      throw new TypeError("Workspace payload must be an object.");
    }

    const source = clone(sourceWorkspace);
    const schemaVersion = Number(source.schemaVersion);
    if (![1, 2, WORKSPACE_SCHEMA_VERSION].includes(schemaVersion)) {
      throw new TypeError(`Unsupported workspace schema: ${source.schemaVersion ?? "missing"}.`);
    }
    const profilesSource = legacyProfiles(source);
    const profiles = {};
    for (const [key, profile] of Object.entries(profilesSource)) {
      const normalized = normalizeProfile(profile, key);
      if (normalized.id) profiles[normalized.id] = normalized;
    }
    if (Object.keys(profiles).length === 0) {
      throw new TypeError("Workspace payload must contain at least one profile.");
    }

    const requestedActiveId = cleanText(source.activeProfileId);
    const activeProfileId = profiles[requestedActiveId]
      ? requestedActiveId
      : Object.keys(profiles)[0];

    const result = {
      ...source,
      schemaVersion: WORKSPACE_SCHEMA_VERSION,
      activeProfileId,
      profiles,
    };
    delete result.bindings;
    return result;
  }

  function resolutionError(message, code) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function resolveRepairItem(sourceWorkspace, options) {
    const workspace = migrateWorkspace(sourceWorkspace);
    const profileId = cleanText(options?.profileId);
    const issueId = cleanText(options?.issueId);
    const actionKey = cleanText(options?.actionKey);
    const profile = workspace.profiles[profileId];

    if (!profile) throw resolutionError("Profile not found.", "PROFILE_NOT_FOUND");
    if (!isValidActionKey(actionKey)) {
      throw resolutionError("A valid target action is required.", "INVALID_TARGET_ACTION");
    }

    const issueIndex = profile.repairQueue.findIndex((item) => item.id === issueId);
    if (issueIndex < 0) throw resolutionError("Repair item not found.", "REPAIR_ITEM_NOT_FOUND");
    if (profile.bindings[actionKey] && !options?.replaceExisting) {
      throw resolutionError("Target action already has a binding.", "TARGET_BINDING_EXISTS");
    }

    const issue = profile.repairQueue[issueIndex];
    profile.bindings[actionKey] = {
      ...clone(issue.binding),
      actionKey,
      activationMode: normalizeActivationMode(options?.activationMode),
    };
    const activationMode = profile.bindings[actionKey].activationMode;
    if (activationMode === DEFAULT_ACTIVATION_MODE) {
      delete profile.actionModes[actionKey];
    } else {
      profile.actionModes[actionKey] = activationMode;
    }
    profile.repairQueue.splice(issueIndex, 1);
    return workspace;
  }

  function physicalSlotKey(slot) {
    const value = slot || {};
    return [value.slotType, value.hand, value.control, value.layer]
      .map((part) => cleanText(part))
      .join(":");
  }

  function bindingConflictKey(binding) {
    return `${physicalSlotKey(binding?.slot)}:${normalizeActivationMode(binding?.activationMode)}`;
  }

  return Object.freeze({
    WORKSPACE_SCHEMA_VERSION,
    DEFAULT_ACTIVATION_MODE,
    bindingConflictKey,
    isNumericPlaceholder,
    migrateWorkspace,
    normalizeActivationMode,
    normalizeSeed,
    physicalSlotKey,
    resolveRepairItem,
  });
});
