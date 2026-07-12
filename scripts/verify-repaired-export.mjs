#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("../binding-planner/workspace-core.js");

const [, , sourceArg, repairedArg] = process.argv;
if (!sourceArg || !repairedArg) {
  console.error("Usage: node scripts/verify-repaired-export.mjs <source.json> <repaired.json>");
  process.exitCode = 2;
} else {
  const source = JSON.parse(await fs.readFile(path.resolve(sourceArg), "utf8"));
  const repaired = JSON.parse(await fs.readFile(path.resolve(repairedArg), "utf8"));

  assert.equal(repaired.schemaVersion, core.WORKSPACE_SCHEMA_VERSION);
  assert.equal(repaired.activeProfileId, source.activeProfileId);
  assert.deepEqual(repaired.deviceConfig, source.deviceConfig);
  assert.deepEqual(repaired.uiSettings, source.uiSettings);
  assert.deepEqual(Object.keys(repaired.profiles), Object.keys(source.profiles));
  assert.equal(repaired.contextCatalog.global.label, "GLOBAL");
  assert.equal(repaired.contextCatalog.mining.exclusiveGroup, "operator-mode");

  let activeBindings = 0;
  let repairItems = 0;
  for (const [profileId, sourceProfile] of Object.entries(source.profiles)) {
    const repairedProfile = repaired.profiles[profileId];
    assert.ok(repairedProfile, `Missing profile ${profileId}`);
    assert.equal(repairedProfile.name, sourceProfile.name);
    assert.equal(repairedProfile.createdAt, sourceProfile.createdAt);
    assert.equal(repairedProfile.updatedAt, sourceProfile.updatedAt);
    const expectedActionContexts = {};
    for (const [actionKey, contextIds] of Object.entries(sourceProfile.actionContexts || {})) {
      const normalized = core.normalizeContextIds(contextIds, repaired.contextCatalog);
      if (!(normalized.length === 1 && normalized[0] === core.DEFAULT_CONTEXT_ID)) {
        expectedActionContexts[actionKey] = normalized;
      }
    }
    assert.deepEqual(repairedProfile.actionContexts, expectedActionContexts);

    const expectedRepairCount = Object.hasOwn(sourceProfile.bindings, "1372") ? 1 : 0;
    assert.equal(repairedProfile.repairQueue.length, expectedRepairCount);
    assert.equal(
      Object.keys(repairedProfile.bindings).length + repairedProfile.repairQueue.length,
      Object.keys(sourceProfile.bindings).length,
    );

    for (const [actionKey, binding] of Object.entries(sourceProfile.bindings)) {
      if (actionKey === "1372") {
        assert.deepEqual(repairedProfile.repairQueue[0].binding, binding);
        continue;
      }
      assert.deepEqual(repairedProfile.bindings[actionKey], {
        ...binding,
        activationMode: core.normalizeActivationMode(binding.activationMode),
        contextIds: core.normalizeContextIds(binding.contextIds, repaired.contextCatalog),
      });
    }

    assert.equal(
      Object.keys(repairedProfile.bindings).some((key) => core.isNumericPlaceholder(key)),
      false,
      `${profileId} contains an active numeric action key`,
    );
    activeBindings += Object.keys(repairedProfile.bindings).length;
    repairItems += repairedProfile.repairQueue.length;
  }

  console.log(JSON.stringify({
    schemaVersion: repaired.schemaVersion,
    profileCount: Object.keys(repaired.profiles).length,
    activeBindings,
    repairItems,
  }, null, 2));
}
