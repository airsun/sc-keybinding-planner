# Context-Aware Binding Reuse Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Profile represent one complete binding strategy and classify same-slot relationships through explicit game contexts as shared, CTX reuse, or true conflict.

**Architecture:** Extend the existing browser/Node-compatible `workspace-core.js` with schema v4 context normalization and pure classification functions. Keep application state and UI orchestration in `app.js`, using a compact CTX popover and a generalized relationship mini-card without adding a new settings page.

**Tech Stack:** Static HTML/CSS/JavaScript, Node assertion scripts, Chrome CDP browser smoke, OpenSpec CLI, GitHub Pages Actions.

## Global Constraints

- Preserve all v1-v3 Profile ids, names, bindings, notes, locks, activation modes, and repair queues.
- Existing bindings migrate conservatively to `contextIds: ["global"]`.
- Keep workspace-global `deviceConfig`; Device Presets are out of scope.
- Do not infer CTX from scenario chapter names or fuzzy action names.
- Only true conflicts may trigger red styling or destructive resolution.

---

### Task 1: Context Core Contract

**Files:**
- Modify: `scripts/verify-workspace-repair.mjs`
- Modify: `binding-planner/workspace-core.js`

**Interfaces:**
- Produces: `DEFAULT_CONTEXT_CATALOG`, `normalizeContextIds(ids, catalog)`, `areContextSetsExclusive(left, right, catalog)`, and `classifyBindingRelationship(left, right, catalog)`.

- [x] **Step 1: Write failing schema and classifier assertions**

Add assertions that schema v3 bindings migrate to v4 `GLOBAL`, Mining versus Salvage returns `context-reuse`, GLOBAL versus Mining returns `true-conflict`, and TAP versus HOLD returns `activation-reuse`.

- [x] **Step 2: Run the test and verify RED**

Run: `node scripts/verify-workspace-repair.mjs`

Expected: FAIL because schema version 4 and context APIs do not exist.

- [x] **Step 3: Implement the pure core APIs**

Use the exact relationship result vocabulary:

```js
"different-slot"
"activation-reuse"
"shared"
"context-reuse"
"true-conflict"
```

Normalize missing, invalid, or empty context sets to `["global"]` and require every cross-set pair to share one non-empty exclusive group with different ids.

- [x] **Step 4: Run the test and verify GREEN**

Run: `node scripts/verify-workspace-repair.mjs`

Expected: `workspace repair verification passed`.

### Task 2: Workspace And Profile Semantics

**Files:**
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/workspace-core.js`
- Modify: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Consumes: core context normalization APIs.
- Produces: one new-workspace `Default` Profile and per-Profile `actionContexts`.

- [x] **Step 1: Add a failing browser assertion for one Default Profile**

Assert a clean browser session contains exactly one Profile option with value `default` and label `Default`.

- [x] **Step 2: Run browser smoke and verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: FAIL because four scenario-named defaults still exist.

- [x] **Step 3: Change initialization and Profile normalization**

Create only `{ id: "default", name: "Default" }` on empty state. Preserve imported Profiles and copy `actionContexts` when duplicating a Profile.

- [x] **Step 4: Run core and browser checks**

Run: `node scripts/verify-workspace-repair.mjs && node scripts/verify-sync-browser-smoke.mjs`

Expected: both commands exit 0.

### Task 3: Relationship-Aware Conflict Behavior

**Files:**
- Modify: `binding-planner/app.js`
- Modify: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Produces: `relationshipForRow(row, occupancyMap)` and true-conflict-only occupant filtering.

- [x] **Step 1: Add failing behavior assertions**

Cover canonical duplicate scenario rows, mutually exclusive same-slot actions, GLOBAL overlap, different activation modes, locked CTX reuse, and the problem filter.

- [x] **Step 2: Run tests and verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: FAIL because occupant counts still drive conflict status.

- [x] **Step 3: Route status and mutations through classification**

Replace `occupants.length > 1` decisions in status, slot rendering, assignment, replacement, and resolution with pairwise `true-conflict` checks. Do not delete or block `context-reuse` occupants.

- [x] **Step 4: Run browser smoke and verify GREEN**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: all relationship behavior steps complete.

### Task 4: CTX Controls And Mini-Card

**Files:**
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/styles.css`
- Modify: `binding-planner/index.html`

**Interfaces:**
- Consumes: Profile `actionContexts` and relationship classification.
- Produces: card-local CTX popover and mini-card state/evidence rendering.

- [x] **Step 1: Add browser selectors and failing UI assertions**

Assert every visible operation has one CTX control; applying Mining persists after reload; shared and CTX reuse are non-red; true conflict remains red.

- [x] **Step 2: Implement the CTX popover**

Use checkboxes plus an Apply command. `GLOBAL` clears specific contexts, specific contexts clear `GLOBAL`, and empty apply normalizes back to `GLOBAL`.

- [x] **Step 3: Generalize the mini-card**

Render `共享`, `CTX 复用`, or `冲突`, related action/context evidence, and only state-appropriate commands in the current mini-card footprint.

- [x] **Step 4: Verify desktop and mobile layout**

Check 1280x720 and 390x844 for zero card/control overflow, visible CTX controls, and coherent mini-card stacking.

### Task 5: Closeout And Deployment

**Files:**
- Modify: `docs/sc-dual-vkb-scenario-config.md`
- Modify: `openspec/changes/add-context-aware-binding-reuse/tasks.md`

**Interfaces:**
- Produces: validated artifacts, committed main branch, and Pages deployment evidence.

- [x] **Step 1: Run the complete verification suite**

```bash
node scripts/verify-workspace-repair.mjs
node scripts/verify-sync-core.mjs
node scripts/verify-sync-browser-smoke.mjs
openspec validate add-context-aware-binding-reuse --strict
git diff --check
```

- [x] **Step 2: Update documentation and checklist**

Document Profile as a complete strategy, MODE as gesture, CTX as runtime scope, and the three mini-card states. Mark OpenSpec tasks only after their evidence passes.

- [ ] **Step 3: Commit and push**

Stage only product code, docs, plan, tests, and the new OpenSpec change. Push `main`; the existing Pages workflow path filter will trigger on `binding-planner/**`.

- [ ] **Step 4: Verify deployment**

Use GitHub Actions status to confirm the `Deploy GitHub Pages` workflow for the pushed commit completes successfully and report the published URL.
