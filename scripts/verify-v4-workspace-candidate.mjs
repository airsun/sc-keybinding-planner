#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("../binding-planner/workspace-core.js");

const [, , sourceArg, candidateArg] = process.argv;
if (!sourceArg || !candidateArg) {
  console.error("Usage: node scripts/verify-v4-workspace-candidate.mjs <source-v3.json> <candidate-v4.json>");
  process.exit(2);
}

const source = JSON.parse(await fs.readFile(path.resolve(sourceArg), "utf8"));
const candidate = JSON.parse(await fs.readFile(path.resolve(candidateArg), "utf8"));
const dataText = await fs.readFile(new URL("../binding-planner/data.js", import.meta.url), "utf8");
const window = {};
new Function("window", dataText)(window);
const seed = core.normalizeSeed(window.VKB_PLANNER_SEED);
const rows = [...seed.gameRows, ...seed.scenarioRows];
const rowByActionKey = new Map(rows.map((row) => [row.actionKey, row]));
const allowedModes = new Set([core.DEFAULT_ACTIVATION_MODE, ...rows.map((row) => row.activationMode)]);
const sourceV4 = core.migrateWorkspace(source);
const candidateV4 = core.migrateWorkspace(candidate);

assert.equal(candidate.schemaVersion, core.WORKSPACE_SCHEMA_VERSION);
assert.equal(candidateV4.activeProfileId, sourceV4.activeProfileId);
assert.equal(candidateV4.updatedAt, sourceV4.updatedAt, "semantic repair must be reproducible");
assert.deepEqual(candidateV4.deviceConfig, sourceV4.deviceConfig);
assert.deepEqual(candidateV4.uiSettings, sourceV4.uiSettings);
assert.deepEqual(Object.keys(candidateV4.profiles), Object.keys(sourceV4.profiles));
assert.deepEqual(core.migrateWorkspace(candidateV4), candidateV4, "candidate migration must be idempotent");

const controls = {};
for (const [hand, config] of Object.entries(candidateV4.deviceConfig.hands || {})) {
  controls[hand] = new Map((config.controls || []).map((control) => [control.id, control]));
}

let activeBindings = 0;
let repairItems = 0;
let trueConflicts = 0;
for (const [profileId, sourceProfile] of Object.entries(sourceV4.profiles)) {
  const profile = candidateV4.profiles[profileId];
  assert.ok(profile, `missing profile ${profileId}`);
  assert.equal(profile.name, sourceProfile.name);
  assert.equal(profile.createdAt, sourceProfile.createdAt);
  assert.equal(profile.updatedAt, sourceProfile.updatedAt);
  assert.deepEqual(profile.repairQueue, sourceProfile.repairQueue);
  assert.deepEqual(Object.keys(profile.bindings), Object.keys(sourceProfile.bindings));

  const occupancy = new Map();
  for (const [actionKey, binding] of Object.entries(profile.bindings)) {
    const sourceBinding = sourceProfile.bindings[actionKey];
    assert.ok(sourceBinding, `${profileId} added unexpected binding ${actionKey}`);
    assert.equal(binding.actionKey, actionKey);
    assert.deepEqual(binding.slot, sourceBinding.slot);
    assert.equal(binding.enabled, sourceBinding.enabled);
    assert.equal(binding.locked, sourceBinding.locked);
    assert.equal(binding.note, sourceBinding.note);
    assert.ok(rowByActionKey.has(actionKey), `${profileId} contains unknown action ${actionKey}`);
    assert.equal(core.isNumericPlaceholder(actionKey), false, `${profileId} contains numeric action ${actionKey}`);
    assert.ok(allowedModes.has(binding.activationMode), `${profileId} contains unsupported MODE for ${actionKey}`);
    assert.deepEqual(
      core.normalizeContextIds(binding.contextIds, candidateV4.contextCatalog),
      binding.contextIds,
      `${profileId} contains invalid CTX for ${actionKey}`,
    );
    if (binding.activationMode === core.DEFAULT_ACTIVATION_MODE) {
      assert.equal(profile.actionModes[actionKey], undefined);
    } else {
      assert.equal(profile.actionModes[actionKey], binding.activationMode);
    }
    if (core.isDefaultContextIds(binding.contextIds, candidateV4.contextCatalog)) {
      assert.equal(profile.actionContexts[actionKey], undefined);
    } else {
      assert.deepEqual(profile.actionContexts[actionKey], binding.contextIds);
    }

    const slot = binding.slot;
    const control = controls[slot?.hand]?.get(slot?.control);
    const validSlot = Boolean(
      slot && control && (
        (slot.slotType === "axis" && control.kind === "axis") ||
        (slot.slotType === "button" && control.kind !== "axis" && ["base", "shift1", "shift2"].includes(slot.layer || "base"))
      )
    );
    assert.equal(validSlot, true, `${profileId} contains invalid slot for ${actionKey}`);

    const key = core.bindingConflictKey(binding);
    if (!occupancy.has(key)) occupancy.set(key, []);
    occupancy.get(key).push(binding);
    activeBindings += 1;
  }

  for (const bindings of occupancy.values()) {
    for (let leftIndex = 0; leftIndex < bindings.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < bindings.length; rightIndex += 1) {
        const decorate = (binding) => ({
          ...binding,
          canonicalActionKey: rowByActionKey.get(binding.actionKey)?.canonicalActionKey || binding.actionKey,
        });
        if (core.classifyBindingRelationship(
          decorate(bindings[leftIndex]),
          decorate(bindings[rightIndex]),
          candidateV4.contextCatalog,
        ) === "true-conflict") {
          trueConflicts += 1;
        }
      }
    }
  }
  repairItems += profile.repairQueue.length;
}

assert.equal(trueConflicts, 0, `candidate contains ${trueConflicts} true-conflict pairs`);

console.log(JSON.stringify({
  schemaVersion: candidateV4.schemaVersion,
  profileCount: Object.keys(candidateV4.profiles).length,
  activeBindings,
  repairItems,
  trueConflicts,
}, null, 2));
