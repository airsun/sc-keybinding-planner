import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("../binding-planner/workspace-core.js");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function testCatalogNormalization() {
  const seed = {
    gameRows: [
      {
        id: "game-101",
        order: 101,
        nameEn: "Open canopy",
        actionId: "1372",
        actionKey: "1372",
        activationMode: "1372",
      },
      {
        id: "game-102",
        order: 102,
        nameEn: "Eject",
        actionId: "1372",
        actionKey: "1372",
        activationMode: "1372",
      },
      {
        id: "game-103",
        order: 103,
        nameEn: "Set quantum mode",
        actionId: "v_set_quantum_mode",
        actionKey: "v_set_quantum_mode",
        activationMode: "PRESS",
      },
    ],
    scenarioRows: [
      {
        id: "scenario-1",
        order: 1,
        nameEn: "Quantum mode in combat",
        actionId: "v_set_quantum_mode",
        actionKey: "v_set_quantum_mode",
      },
    ],
    defaultBindings: {
      v_set_quantum_mode: {
        actionKey: "v_set_quantum_mode",
        slot: { slotType: "button", hand: "right", control: "A1", layer: "base" },
        enabled: true,
      },
    },
  };

  const normalized = core.normalizeSeed(seed);
  const [canopy, eject, quantum] = normalized.gameRows;

  assert.notEqual(canopy.actionKey, eject.actionKey, "unrelated corrupt rows must not share a key");
  assert.match(canopy.actionKey, /^game:/);
  assert.match(eject.actionKey, /^game:/);
  assert.equal(canopy.actionId, "");
  assert.equal(eject.actionId, "");
  assert.equal(canopy.activationMode, "DEFAULT");
  assert.equal(eject.activationMode, "DEFAULT");
  assert.equal(quantum.actionKey, "v_set_quantum_mode");
  assert.equal(normalized.scenarioRows[0].actionKey, "v_set_quantum_mode");
  assert.equal(normalized.defaultBindings.v_set_quantum_mode.activationMode, "DEFAULT");
  assert.equal(seed.gameRows[0].actionKey, "1372", "normalization must not mutate generated input");
}

function v2Fixture() {
  return {
    schemaVersion: 2,
    activeProfileId: "flight",
    deviceConfig: { leftDevice: "VKB-L", rightDevice: "VKB-R" },
    profiles: {
      flight: {
        id: "flight",
        name: "Flight",
        createdAt: "2026-01-01T00:00:00.000Z",
        updatedAt: "2026-01-02T00:00:00.000Z",
        actionModes: { valid_action: "double tap", "1372": "HOLD" },
        bindings: {
          valid_action: {
            actionKey: "valid_action",
            slot: { slotType: "button", hand: "left", control: "A1", layer: "base" },
            enabled: true,
            locked: true,
            note: "keep me",
          },
          "1372": {
            actionKey: "1372",
            slot: { slotType: "button", hand: "right", control: "A3_left", layer: "base" },
            enabled: true,
            locked: false,
            note: "ambiguous",
          },
        },
      },
      ground: {
        id: "ground",
        name: "Ground",
        createdAt: "2026-01-03T00:00:00.000Z",
        updatedAt: "2026-01-04T00:00:00.000Z",
        bindings: {
          ground_action: {
            actionKey: "ground_action",
            slot: { slotType: "button", hand: "right", control: "B1", layer: "shift" },
            activationMode: "LONG_PRESS",
            enabled: false,
            locked: false,
            note: "ground",
          },
        },
      },
    },
    uiSettings: { selectedRowId: "game-16", customFlag: true },
    extensionData: { preserve: true },
  };
}

function testWorkspaceMigration() {
  const source = v2Fixture();
  const before = clone(source);
  const migrated = core.migrateWorkspace(source);

  assert.equal(migrated.schemaVersion, 4);
  assert.deepEqual(Object.keys(migrated.profiles), ["flight", "ground"]);
  assert.equal(migrated.activeProfileId, "flight");
  assert.deepEqual(migrated.deviceConfig, source.deviceConfig);
  assert.deepEqual(migrated.uiSettings, source.uiSettings);
  assert.deepEqual(migrated.extensionData, source.extensionData);
  assert.equal(migrated.profiles.flight.bindings["1372"], undefined);
  assert.equal(migrated.profiles.flight.bindings.valid_action.note, "keep me");
  assert.equal(migrated.profiles.flight.bindings.valid_action.locked, true);
  assert.equal(migrated.profiles.flight.bindings.valid_action.activationMode, "DEFAULT");
  assert.deepEqual(migrated.profiles.flight.bindings.valid_action.contextIds, ["global"]);
  assert.deepEqual(migrated.profiles.flight.actionModes, { valid_action: "DOUBLE_TAP" });
  assert.deepEqual(migrated.profiles.flight.actionContexts, {});
  assert.equal(migrated.contextCatalog.mining.exclusiveGroup, "operator-mode");
  assert.equal(migrated.profiles.ground.bindings.ground_action.activationMode, "LONG_PRESS");
  assert.equal(migrated.profiles.flight.repairQueue.length, 1);
  assert.equal(migrated.profiles.ground.repairQueue.length, 0);
  assert.equal(migrated.profiles.flight.repairQueue[0].sourceActionKey, "1372");
  assert.deepEqual(migrated.profiles.flight.repairQueue[0].binding, source.profiles.flight.bindings["1372"]);
  assert.deepEqual(source, before, "migration must not mutate the source workspace");
  assert.deepEqual(core.migrateWorkspace(migrated), migrated, "migration must be idempotent");

  const v1 = {
    schemaVersion: 1,
    profileName: "Legacy Flight",
    activeProfileId: "flight",
    deviceConfig: source.deviceConfig,
    bindings: clone(source.profiles.ground.bindings),
    uiSettings: source.uiSettings,
  };
  const migratedV1 = core.migrateWorkspace(v1);
  assert.equal(migratedV1.profiles.flight.name, "Legacy Flight");
  assert.equal(migratedV1.profiles.flight.bindings.ground_action.activationMode, "LONG_PRESS");
  assert.throws(() => core.migrateWorkspace({ ...source, schemaVersion: 99 }), /Unsupported workspace schema/);
}

function testRepairResolution() {
  const migrated = core.migrateWorkspace(v2Fixture());
  const issue = migrated.profiles.flight.repairQueue[0];
  const resolved = core.resolveRepairItem(migrated, {
    profileId: "flight",
    issueId: issue.id,
    actionKey: "canopy_open",
    activationMode: "DOUBLE_TAP",
  });

  assert.equal(resolved.profiles.flight.repairQueue.length, 0);
  assert.equal(resolved.profiles.flight.bindings.canopy_open.actionKey, "canopy_open");
  assert.equal(resolved.profiles.flight.bindings.canopy_open.activationMode, "DOUBLE_TAP");
  assert.deepEqual(resolved.profiles.flight.bindings.canopy_open.contextIds, ["global"]);
  assert.deepEqual(resolved.profiles.flight.bindings.canopy_open.slot, issue.binding.slot);
  assert.equal(resolved.profiles.flight.bindings.canopy_open.note, "ambiguous");
  assert.deepEqual(resolved.profiles.ground, migrated.profiles.ground);
  assert.equal(migrated.profiles.flight.repairQueue.length, 1, "resolution must not mutate input");

  const withCollision = clone(migrated);
  withCollision.profiles.flight.bindings.target = {
    actionKey: "target",
    slot: { slotType: "button", hand: "left", control: "B2", layer: "base" },
    activationMode: "DEFAULT",
  };
  assert.throws(
    () => core.resolveRepairItem(withCollision, {
      profileId: "flight",
      issueId: issue.id,
      actionKey: "target",
      activationMode: "DEFAULT",
    }),
    (error) => error?.code === "TARGET_BINDING_EXISTS",
  );
  const replaced = core.resolveRepairItem(withCollision, {
    profileId: "flight",
    issueId: issue.id,
    actionKey: "target",
    activationMode: "DEFAULT",
    replaceExisting: true,
  });
  assert.deepEqual(replaced.profiles.flight.bindings.target.slot, issue.binding.slot);
}

function testConflictIdentity() {
  const slot = { slotType: "button", hand: "right", control: "A3_left", layer: "base" };
  const defaultKey = core.bindingConflictKey({ slot, activationMode: "DEFAULT" });
  assert.equal(defaultKey, core.bindingConflictKey({ slot, activationMode: "DEFAULT" }));
  assert.notEqual(defaultKey, core.bindingConflictKey({ slot, activationMode: "LONG_PRESS" }));
  assert.equal(core.normalizeActivationMode("1372"), "DEFAULT");
  assert.equal(core.normalizeActivationMode(""), "DEFAULT");
  assert.equal(core.normalizeActivationMode("double_tap"), "DOUBLE_TAP");
}

function testContextRelationships() {
  const catalog = core.DEFAULT_CONTEXT_CATALOG;
  const slot = { slotType: "button", hand: "right", control: "TRG1", layer: "base" };
  const base = {
    actionKey: "weapon_fire",
    canonicalActionKey: "weapon_fire",
    slot,
    activationMode: "DEFAULT",
    contextIds: ["flight"],
  };

  assert.deepEqual(core.normalizeContextIds(undefined, catalog), ["global"]);
  assert.deepEqual(core.normalizeContextIds(["mining", "mining", "unknown"], catalog), ["mining"]);
  assert.deepEqual(core.normalizeContextIds(["mining", "global"], catalog), ["global"]);
  assert.equal(core.areContextSetsExclusive(["mining"], ["salvage"], catalog), true);
  assert.equal(core.areContextSetsExclusive(["global"], ["mining"], catalog), false);
  assert.equal(core.areContextSetsExclusive(["mining", "salvage"], ["flight", "missile"], catalog), true);
  assert.equal(core.areContextSetsExclusive(["mining", "salvage"], ["flight", "salvage"], catalog), false);

  assert.equal(core.classifyBindingRelationship(base, {
    ...base,
    actionKey: "weapon_fire_alias",
  }, catalog), "shared");
  assert.equal(core.classifyBindingRelationship(base, {
    ...base,
    actionKey: "mining_fire",
    canonicalActionKey: "mining_fire",
    activationMode: "HOLD",
    contextIds: ["mining"],
  }, catalog), "activation-reuse");
  assert.equal(core.classifyBindingRelationship(base, {
    ...base,
    actionKey: "mining_fire",
    canonicalActionKey: "mining_fire",
    contextIds: ["mining"],
  }, catalog), "context-reuse");
  assert.equal(core.classifyBindingRelationship({ ...base, contextIds: ["global"] }, {
    ...base,
    actionKey: "mining_fire",
    canonicalActionKey: "mining_fire",
    contextIds: ["mining"],
  }, catalog), "true-conflict");
  assert.equal(core.classifyBindingRelationship(base, {
    ...base,
    actionKey: "other",
    canonicalActionKey: "other",
    slot: { ...slot, control: "TRG2" },
  }, catalog), "different-slot");
}

function testLegacyDefaultControlLocksAreReleasedOnce() {
  const slot = { slotType: "axis", hand: "right", control: "main_y" };
  const workspace = {
    schemaVersion: 4,
    activeProfileId: "default",
    profiles: {
      default: {
        id: "default",
        name: "Default",
        bindings: {
          v_pitch: {
            actionKey: "v_pitch",
            slot,
            enabled: true,
            locked: true,
            note: "默认 6DOF 轴，保持不变",
          },
          v_toggle_landing_system: {
            actionKey: "v_toggle_landing_system",
            slot: { slotType: "button", hand: "left", control: "base_f1", layer: "base" },
            enabled: true,
            locked: true,
            note: "",
          },
          custom_pitch: {
            actionKey: "custom_pitch",
            slot,
            enabled: true,
            locked: true,
            note: "用户主动锁定",
          },
        },
      },
    },
  };
  const migrated = core.migrateWorkspace(workspace);

  assert.equal(migrated.profiles.default.bindings.v_pitch.locked, false);
  assert.equal(migrated.profiles.default.bindings.v_pitch.note, "");
  assert.equal(migrated.profiles.default.bindings.v_toggle_landing_system.locked, false);
  assert.equal(migrated.profiles.default.bindings.custom_pitch.locked, true);
  assert.equal(migrated.profiles.default.bindings.custom_pitch.note, "用户主动锁定");
  assert.deepEqual(core.migrateWorkspace(migrated), migrated, "axis lock release must be idempotent");

  const relocked = clone(migrated);
  relocked.profiles.default.bindings.v_pitch.locked = true;
  relocked.profiles.default.bindings.v_toggle_landing_system.locked = true;
  const preserved = core.migrateWorkspace(relocked);
  assert.equal(preserved.profiles.default.bindings.v_pitch.locked, true);
  assert.equal(preserved.profiles.default.bindings.v_toggle_landing_system.locked, true);
}

function testRealSeedInvariant() {
  global.window = {};
  require("../binding-planner/data.js");
  const raw = global.window.VKB_PLANNER_SEED;
  const normalized = core.normalizeSeed(raw);
  const polluted = raw.gameRows.filter((row) => row.actionKey === "1372");

  assert.equal(Array.isArray(normalized.defaultBindings), true, "default binding container shape must be preserved");
  assert.equal(normalized.defaultBindings.length, raw.defaultBindings.length);
  assert.equal(polluted.length, 89, "fixture should still expose the diagnosed source defect");
  assert.equal(new Set(polluted.map((row) => row.nameEn || row.nameZh)).size, 89);
  assert.equal(new Set(normalized.gameRows.filter((row) => polluted.some((bad) => bad.id === row.id)).map((row) => row.actionKey)).size, 89);
  assert.equal(normalized.gameRows.filter((row) => /^\d+$/.test(String(row.actionKey))).length, 0);
  assert.equal(normalized.gameRows.filter((row) => /^\d+$/.test(String(row.actionId))).length, 0);
  assert.equal(normalized.gameRows.filter((row) => /^\d+$/.test(String(row.activationMode))).length, 0);
}

assert.equal(core.WORKSPACE_SCHEMA_VERSION, 4);
testCatalogNormalization();
testWorkspaceMigration();
testRepairResolution();
testConflictIdentity();
testContextRelationships();
testLegacyDefaultControlLocksAreReleasedOnce();
testRealSeedInvariant();

console.log("workspace repair verification passed");
