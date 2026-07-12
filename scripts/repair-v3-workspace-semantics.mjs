#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("../binding-planner/workspace-core.js");

const CONTEXT_BY_ACTION = Object.freeze({
  "pc_interaction_select": "interaction",
  "scenario:2:item": "interaction",
  "scenario:61:operator-mode": "flight",
  "v_eject": "flight",
  "v_emergency_exit": "flight",
  "v_ifcs_toggle_esp": "flight",
  "v_master_mode_cycle": "flight",
  "v_mfd_movement_up_short": "mfd",
  "v_mfd_soft_select_mfd_primary_short": "mfd",
  "v_mining_throttle": "mining",
  "v_mining_use_consumable1": "mining",
  "v_salvage_beam_spacing_rel": "salvage",
  "v_salvage_cycle_modifiers_focused": "salvage",
  "v_salvage_focus_left": "salvage",
  "v_salvage_toggle_fire_focused": "salvage",
  "v_salvage_toggle_fire_fracture": "salvage",
  "v_salvage_toggle_gimbal_mode": "salvage",
  "v_set_mining_mode": "mining",
  "v_set_salvage_mode": "salvage",
  "v_speed_range_abs": "flight",
  "v_target_cycle_subitem_fwd": "flight",
  "v_toggle_landing_system": "flight",
  "v_toggle_mining_laser_fire": "mining",
  "v_toggle_mining_laser_type": "mining",
  "v_toggle_mining_mode": "mining",
  "v_toggle_salvage_mode": "salvage",
  "v_transform_cycle": "flight",
  "v_ui_prev_scan_page": "mfd",
  "v_weapon_bombing_hud_range_reset": "missile",
  "v_weapon_convergence_distance_rel_decrease": "flight",
  "v_weapon_cycle_missile_fwd": "missile",
  "v_weapon_launch_missile": "missile",
  "v_weapon_launch_missile_cinematic": "missile",
  "v_weapon_preset_fire_guns0": "flight",
  "v_weapon_preset_fire_guns2": "flight",
  "v_weapon_preset_next": "flight",
  "v_weapon_toggle_launch_missile": "missile",
});

const EXPLICIT_MODE_DECISIONS = Object.freeze({
  v_emergency_exit: {
    mode: "HOLD",
    reason: "Keep landing gear on TAP while requiring a deliberate hold for emergency exit.",
  },
  v_weapon_bombing_hud_range_reset: {
    mode: "DOUBLE_TAP",
    reason: "Keep missile camera on TAP and separate the bombing HUD reset on the same control.",
  },
  v_set_mining_mode: {
    mode: "HOLD",
    reason: "Keep toggle mining mode on PRESS and separate the direct set action.",
  },
  v_set_salvage_mode: {
    mode: "HOLD",
    reason: "Keep toggle salvage mode on PRESS and separate the direct set action.",
  },
});

const [, , sourceArg, outputArg, reportArg] = process.argv;
if (!sourceArg || !outputArg || !reportArg) {
  console.error(
    "Usage: node scripts/repair-v3-workspace-semantics.mjs <source-v3.json> <output-v4.json> <report.json>",
  );
  process.exit(2);
}

const sourcePath = path.resolve(sourceArg);
const outputPath = path.resolve(outputArg);
const reportPath = path.resolve(reportArg);
const source = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const dataText = await fs.readFile(new URL("../binding-planner/data.js", import.meta.url), "utf8");
const window = {};
new Function("window", dataText)(window);
const seed = core.normalizeSeed(window.VKB_PLANNER_SEED);
const rows = [...seed.gameRows, ...seed.scenarioRows];
const rowByActionKey = new Map(rows.map((row) => [row.actionKey, row]));
const gameModesByAction = new Map();

for (const row of seed.gameRows) {
  if (!gameModesByAction.has(row.actionKey)) gameModesByAction.set(row.actionKey, new Set());
  gameModesByAction.get(row.actionKey).add(row.activationMode);
}

function decorate(binding) {
  return {
    ...binding,
    canonicalActionKey: rowByActionKey.get(binding.actionKey)?.canonicalActionKey || binding.actionKey,
  };
}

function auditConflicts(workspace) {
  const byProfile = {};
  const items = [];
  for (const [profileId, profile] of Object.entries(workspace.profiles)) {
    const occupancy = new Map();
    for (const binding of Object.values(profile.bindings)) {
      if (!binding.enabled || !binding.slot) continue;
      const key = core.bindingConflictKey(binding);
      if (!occupancy.has(key)) occupancy.set(key, []);
      occupancy.get(key).push(binding);
    }

    let count = 0;
    for (const [slot, bindings] of occupancy.entries()) {
      for (let leftIndex = 0; leftIndex < bindings.length; leftIndex += 1) {
        for (let rightIndex = leftIndex + 1; rightIndex < bindings.length; rightIndex += 1) {
          const left = bindings[leftIndex];
          const right = bindings[rightIndex];
          if (core.classifyBindingRelationship(
            decorate(left),
            decorate(right),
            workspace.contextCatalog,
          ) !== "true-conflict") continue;
          count += 1;
          items.push({ profileId, slot, actions: [left.actionKey, right.actionKey] });
        }
      }
    }
    byProfile[profileId] = count;
  }
  return { count: items.length, byProfile, items };
}

function inferredGameMode(actionKey) {
  const modes = [...(gameModesByAction.get(actionKey) || [])];
  if (modes.length !== 1 || modes[0] === core.DEFAULT_ACTIVATION_MODE) return null;
  return modes[0];
}

const workspace = core.migrateWorkspace(source);
const before = auditConflicts(workspace);
const conflictActions = new Set(before.items.flatMap((item) => item.actions));
const missingContextMappings = [...conflictActions].filter((actionKey) => !CONTEXT_BY_ACTION[actionKey]);
if (missingContextMappings.length) {
  throw new Error(`Missing explicit CTX mapping for: ${missingContextMappings.join(", ")}`);
}

const inferredModeAssignments = {};
const explicitModeAssignments = {};
const contextAssignments = {};
for (const [profileId, profile] of Object.entries(workspace.profiles)) {
  profile.actionModes ||= {};
  profile.actionContexts ||= {};
  for (const actionKey of conflictActions) {
    const binding = profile.bindings[actionKey];
    if (!binding) continue;

    const contextId = CONTEXT_BY_ACTION[actionKey];
    binding.contextIds = [contextId];
    profile.actionContexts[actionKey] = [contextId];
    contextAssignments[actionKey] = contextId;

    const inferredMode = inferredGameMode(actionKey);
    if (inferredMode) {
      binding.activationMode = inferredMode;
      profile.actionModes[actionKey] = inferredMode;
      inferredModeAssignments[actionKey] = inferredMode;
    }

    const explicitDecision = EXPLICIT_MODE_DECISIONS[actionKey];
    if (explicitDecision) {
      binding.activationMode = explicitDecision.mode;
      profile.actionModes[actionKey] = explicitDecision.mode;
      explicitModeAssignments[actionKey] = explicitDecision;
    }
  }
}

const after = auditConflicts(workspace);
if (after.count !== 0) {
  throw new Error(`Semantic repair left ${after.count} true-conflict pairs.`);
}

const activeBindings = Object.values(workspace.profiles)
  .reduce((sum, profile) => sum + Object.keys(profile.bindings).length, 0);
const repairItems = Object.values(workspace.profiles)
  .reduce((sum, profile) => sum + profile.repairQueue.length, 0);
const report = {
  sourceFile: path.basename(sourcePath),
  outputFile: path.basename(outputPath),
  sourceSchemaVersion: source.schemaVersion,
  targetSchemaVersion: workspace.schemaVersion,
  profileCount: Object.keys(workspace.profiles).length,
  activeBindings,
  repairItems,
  trueConflictsBefore: before.count,
  trueConflictsBeforeByProfile: before.byProfile,
  trueConflictsAfter: after.count,
  contextAssignments,
  inferredModeAssignments,
  explicitModeAssignments,
  guarantees: [
    "Original source file is not modified.",
    "Profile ids, names, timestamps, bindings, slots, notes, locks, and repair queue entries are preserved.",
    "Only MODE and CTX values on actions participating in a source conflict are enriched.",
  ],
};

await fs.writeFile(outputPath, `${JSON.stringify(workspace, null, 2)}\n`, "utf8");
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report, null, 2));
