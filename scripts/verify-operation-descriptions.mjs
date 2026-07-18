#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(
  fs.readFileSync(path.join(root, "binding-planner", "data.js"), "utf8"),
  context,
  { filename: "binding-planner/data.js" },
);

const seed = context.window.VKB_PLANNER_SEED;
const gameRows = Array.isArray(seed.gameRows) ? seed.gameRows : [];
const scenarioRows = Array.isArray(seed.scenarioRows) ? seed.scenarioRows : [];
const rows = [...gameRows, ...scenarioRows];
const sources = new Map((Array.isArray(seed.referenceCatalog) ? seed.referenceCatalog : [])
  .filter((source) => source?.id)
  .map((source) => [source.id, source]));
const errors = [];

if (gameRows.length !== 684) errors.push(`Expected 684 game rows, received ${gameRows.length}.`);
if (scenarioRows.length !== 112) errors.push(`Expected 112 scenario rows, received ${scenarioRows.length}.`);
if (sources.size !== 6) errors.push(`Expected 6 source references, received ${sources.size}.`);

for (const source of sources.values()) {
  if (!source.label || !/^https:\/\/(support\.)?robertsspaceindustries\.com\//.test(source.url || "")) {
    errors.push(`Source ${source.id} is not a complete official RSI/CIG reference.`);
  }
}

for (const row of rows) {
  const description = String(row.description || "").trim();
  if (!description) errors.push(`${row.id} has no description.`);
  if (/执行.+中的操作|控制.*适用于/.test(description)) {
    errors.push(`${row.id} still uses a legacy template description.`);
  }
  if ([...description].length > 100) errors.push(`${row.id} description exceeds the concise 100-character limit.`);
  if (!Array.isArray(row.sourceRefs) || !row.sourceRefs.length) errors.push(`${row.id} has no source reference.`);
  for (const id of row.sourceRefs || []) if (!sources.has(id)) errors.push(`${row.id} references missing source ${id}.`);
}

for (const row of scenarioRows) {
  if (!String(row.description || "").includes("此处对应「")) {
    errors.push(`${row.id} does not state its scenario-stage value.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Operation descriptions verified: ${gameRows.length} game rows, ${scenarioRows.length} scenario rows, ${sources.size} official sources.`);
