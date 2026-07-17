(function initWorkspaceCore(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.VKB_WORKSPACE_CORE = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createWorkspaceCore() {
  "use strict";

  const WORKSPACE_SCHEMA_VERSION = 4;
  const WORKSPACE_SEMANTIC_REVISION = 1;
  const DEFAULT_ACTIVATION_MODE = "DEFAULT";
  const DEFAULT_CONTEXT_ID = "global";
  const DEFAULT_CONTEXT_CATALOG = Object.freeze({
    global: { id: "global", label: "GLOBAL", exclusiveGroup: "" },
    "on-foot": { id: "on-foot", label: "On Foot", exclusiveGroup: "control-domain" },
    vehicle: { id: "vehicle", label: "Vehicle", exclusiveGroup: "control-domain" },
    interaction: { id: "interaction", label: "Interaction", exclusiveGroup: "interaction-layer" },
    mfd: { id: "mfd", label: "MFD", exclusiveGroup: "interaction-layer" },
    flight: { id: "flight", label: "Flight", exclusiveGroup: "operator-mode" },
    missile: { id: "missile", label: "Missile", exclusiveGroup: "operator-mode" },
    mining: { id: "mining", label: "Mining", exclusiveGroup: "operator-mode" },
    salvage: { id: "salvage", label: "Salvage", exclusiveGroup: "operator-mode" },
    turret: { id: "turret", label: "Turret", exclusiveGroup: "operator-mode" },
  });
  const CORRUPT_ACTION_KEYS = new Set(["1372"]);
  const LEGACY_DEFAULT_LOCK_NOTE = "默认 6DOF 轴，保持不变";
  const LEGACY_DEFAULT_EDITABLE_SLOTS = Object.freeze({
    v_pitch: { slotType: "axis", hand: "right", control: "main_y" },
    v_roll: { slotType: "axis", hand: "right", control: "main_x" },
    v_yaw: { slotType: "axis", hand: "right", control: "main_twist" },
    v_strafe_lateral: { slotType: "axis", hand: "left", control: "main_x" },
    v_strafe_longitudinal: { slotType: "axis", hand: "left", control: "main_y" },
    v_strafe_vertical: { slotType: "axis", hand: "left", control: "main_twist" },
    v_toggle_landing_system: { slotType: "button", hand: "left", control: "base_f1", layer: "base" },
    v_toggle_vtol: { slotType: "button", hand: "left", control: "base_f2", layer: "base" },
    v_transform_cycle: { slotType: "button", hand: "left", control: "base_f3", layer: "base" },
  });

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

  function normalizeContextCatalog(value) {
    const result = clone(DEFAULT_CONTEXT_CATALOG);
    for (const [key, entry] of Object.entries(value || {})) {
      const id = cleanText(entry?.id || key).toLowerCase();
      if (!id) continue;
      result[id] = {
        id,
        label: cleanText(entry?.label) || id,
        exclusiveGroup: cleanText(entry?.exclusiveGroup),
      };
    }
    return result;
  }

  function normalizeContextIds(value, catalog = DEFAULT_CONTEXT_CATALOG) {
    const normalizedCatalog = normalizeContextCatalog(catalog);
    const source = Array.isArray(value) ? value : value ? [value] : [];
    const result = [];
    for (const item of source) {
      const id = cleanText(item).toLowerCase();
      if (!normalizedCatalog[id] || result.includes(id)) continue;
      result.push(id);
    }
    if (!result.length || result.includes(DEFAULT_CONTEXT_ID)) return [DEFAULT_CONTEXT_ID];
    return result;
  }

  function areContextSetsExclusive(left, right, catalog = DEFAULT_CONTEXT_CATALOG) {
    const normalizedCatalog = normalizeContextCatalog(catalog);
    const leftIds = normalizeContextIds(left, normalizedCatalog);
    const rightIds = normalizeContextIds(right, normalizedCatalog);
    if (leftIds.includes(DEFAULT_CONTEXT_ID) || rightIds.includes(DEFAULT_CONTEXT_ID)) return false;
    return leftIds.every((leftId) => rightIds.every((rightId) => {
      const leftEntry = normalizedCatalog[leftId];
      const rightEntry = normalizedCatalog[rightId];
      return Boolean(
        leftId !== rightId &&
        leftEntry?.exclusiveGroup &&
        leftEntry.exclusiveGroup === rightEntry?.exclusiveGroup,
      );
    }));
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

  function normalizeBinding(binding, fallbackActionKeyValue, catalog = DEFAULT_CONTEXT_CATALOG) {
    const next = clone(binding) || {};
    const requestedKey = cleanText(next.actionKey || fallbackActionKeyValue);
    if (!isValidActionKey(requestedKey)) return null;
    return {
      ...next,
      actionKey: requestedKey,
      activationMode: normalizeActivationMode(next.activationMode),
      contextIds: normalizeContextIds(next.contextIds, catalog),
    };
  }

  function releaseLegacyDefaultControlLock(binding) {
    const legacySlot = LEGACY_DEFAULT_EDITABLE_SLOTS[binding?.actionKey];
    if (!legacySlot
      || binding.locked !== true
      || binding.slot?.slotType !== legacySlot.slotType
      || binding.slot?.hand !== legacySlot.hand
      || binding.slot?.control !== legacySlot.control
      || (legacySlot.slotType === "button" && (binding.slot?.layer || "base") !== legacySlot.layer)) {
      return binding;
    }
    return {
      ...binding,
      locked: false,
      note: cleanText(binding.note) === LEGACY_DEFAULT_LOCK_NOTE ? "" : binding.note,
    };
  }

  function normalizeDefaultBindings(bindings, catalog = DEFAULT_CONTEXT_CATALOG) {
    if (Array.isArray(bindings)) {
      return bindings
        .map((binding) => normalizeBinding(binding, binding?.actionKey, catalog))
        .filter(Boolean);
    }
    const result = {};
    for (const [key, binding] of Object.entries(bindings || {})) {
      const normalized = normalizeBinding(binding, key, catalog);
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
      defaultBindings: normalizeDefaultBindings(seed.defaultBindings, DEFAULT_CONTEXT_CATALOG),
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

  function normalizeActionContexts(actionContexts, catalog) {
    const result = {};
    for (const [actionKey, contextIds] of Object.entries(actionContexts || {})) {
      if (!isValidActionKey(actionKey)) continue;
      const normalized = normalizeContextIds(contextIds, catalog);
      if (!(normalized.length === 1 && normalized[0] === DEFAULT_CONTEXT_ID)) {
        result[actionKey] = normalized;
      }
    }
    return result;
  }

  function normalizeProfile(profile, fallbackId, catalog, options = {}) {
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
      const normalized = normalizeBinding(binding, key, catalog);
      if (normalized) {
        bindings[normalized.actionKey] = options.releaseLegacyDefaultLocks
          ? releaseLegacyDefaultControlLock(normalized)
          : normalized;
      }
    }

    return {
      ...next,
      id: cleanText(next.id || fallbackId),
      bindings,
      repairQueue,
      actionModes: normalizeActionModes(next.actionModes),
      actionContexts: normalizeActionContexts(next.actionContexts, catalog),
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
    if (![1, 2, 3, WORKSPACE_SCHEMA_VERSION].includes(schemaVersion)) {
      throw new TypeError(`Unsupported workspace schema: ${source.schemaVersion ?? "missing"}.`);
    }
    const contextCatalog = normalizeContextCatalog(source.contextCatalog);
    const sourceSemanticRevision = Number(source.semanticRevision) || 0;
    const profilesSource = legacyProfiles(source);
    const profiles = {};
    for (const [key, profile] of Object.entries(profilesSource)) {
      const normalized = normalizeProfile(profile, key, contextCatalog, {
        releaseLegacyDefaultLocks: sourceSemanticRevision < WORKSPACE_SEMANTIC_REVISION,
      });
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
      semanticRevision: WORKSPACE_SEMANTIC_REVISION,
      activeProfileId,
      profiles,
      contextCatalog,
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
      contextIds: normalizeContextIds(
        options?.contextIds || profile.actionContexts[actionKey] || issue.binding?.contextIds,
        workspace.contextCatalog,
      ),
    };
    const activationMode = profile.bindings[actionKey].activationMode;
    if (activationMode === DEFAULT_ACTIVATION_MODE) {
      delete profile.actionModes[actionKey];
    } else {
      profile.actionModes[actionKey] = activationMode;
    }
    const contextIds = profile.bindings[actionKey].contextIds;
    if (contextIds.length === 1 && contextIds[0] === DEFAULT_CONTEXT_ID) {
      delete profile.actionContexts[actionKey];
    } else {
      profile.actionContexts[actionKey] = clone(contextIds);
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

  function classifyBindingRelationship(left, right, catalog = DEFAULT_CONTEXT_CATALOG) {
    if (!left?.slot || !right?.slot || physicalSlotKey(left.slot) !== physicalSlotKey(right.slot)) {
      return "different-slot";
    }
    if (normalizeActivationMode(left.activationMode) !== normalizeActivationMode(right.activationMode)) {
      return "activation-reuse";
    }
    const leftCanonicalKey = cleanText(left.canonicalActionKey || left.actionKey);
    const rightCanonicalKey = cleanText(right.canonicalActionKey || right.actionKey);
    if (leftCanonicalKey && leftCanonicalKey === rightCanonicalKey) return "shared";
    if (areContextSetsExclusive(left.contextIds, right.contextIds, catalog)) return "context-reuse";
    return "true-conflict";
  }

  return Object.freeze({
    WORKSPACE_SCHEMA_VERSION,
    WORKSPACE_SEMANTIC_REVISION,
    DEFAULT_ACTIVATION_MODE,
    DEFAULT_CONTEXT_CATALOG,
    DEFAULT_CONTEXT_ID,
    areContextSetsExclusive,
    bindingConflictKey,
    classifyBindingRelationship,
    isNumericPlaceholder,
    migrateWorkspace,
    normalizeActivationMode,
    normalizeContextIds,
    normalizeSeed,
    physicalSlotKey,
    resolveRepairItem,
  });
});
