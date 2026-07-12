#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("../binding-planner/workspace-core.js");

function usage() {
  console.error("Usage: node scripts/repair-workspace-export.mjs <input.json> <output.json>");
}

function summarize(workspace) {
  const profiles = Object.values(workspace.profiles || {});
  return {
    schemaVersion: workspace.schemaVersion,
    profileCount: profiles.length,
    bindingCount: profiles.reduce((sum, profile) => sum + Object.keys(profile.bindings || {}).length, 0),
    repairCount: profiles.reduce((sum, profile) => sum + (profile.repairQueue || []).length, 0),
    numericActiveKeys: profiles.flatMap((profile) => (
      Object.keys(profile.bindings || {}).filter((key) => core.isNumericPlaceholder(key))
    )),
  };
}

const [, , inputArg, outputArg] = process.argv;
if (!inputArg || !outputArg) {
  usage();
  process.exitCode = 2;
} else {
  const inputPath = path.resolve(inputArg);
  const outputPath = path.resolve(outputArg);
  if (inputPath === outputPath) {
    throw new Error("Input and output paths must be different; repair never overwrites the source export.");
  }

  const source = JSON.parse(await fs.readFile(inputPath, "utf8"));
  const repaired = core.migrateWorkspace(source);
  const summary = summarize(repaired);
  if (summary.numericActiveKeys.length) {
    throw new Error(`Repair left numeric active keys: ${summary.numericActiveKeys.join(", ")}`);
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(repaired, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ inputPath, outputPath, ...summary }, null, 2));
}
