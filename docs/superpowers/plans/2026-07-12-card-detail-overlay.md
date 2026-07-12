# Operation Card Detail Overlay Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace dense inline operation forms with a compact list and a same-width detail overlay whose Previous/Next navigation synchronizes selection and underlying scroll.

**Architecture:** `visibleRows()` becomes the single filtered sequence. A persistent `card-stage` contains the existing scrollable compact list and a sibling absolute detail layer. Detail state is local JavaScript state; existing binding helpers and `selectedRowId` remain the editing and stick-highlight contracts.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js browser smoke over Chrome DevTools Protocol, OpenSpec.

## Global Constraints

- Do not change workspace schema v4, Profile data, import/export, or online-sync payloads.
- Keep both stick panels visible and interactive while detail is open.
- Keep detail-open and overlay scroll state ephemeral.
- Previous/Next must use current list mode, status filter, and search query with no wrap.
- Verify phone, iPad portrait, iPad landscape/Sidecar, 2K, and 4K.

---

### Task 1: Browser Contract

**Files:**
- Modify: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Consumes: Existing CDP helpers, `state()`, viewport matrix.
- Produces: Assertions for `.binding-card.compact-card`, `#cardDetailOverlay`, `[data-detail-command]`, selected row, and list scroll.

- [x] **Step 1: Add compact and overlay observations**

Extend browser state with compact-card count, inline control count, detail open/title/index, selected compact row, current stick slot, and `#cardWrap.scrollTop`.

- [x] **Step 2: Add detail navigation interactions**

Open a compact row, assert complete controls are in the overlay, activate Next, assert selected row and scroll synchronization, then close and verify the selected compact row remains visible.

- [x] **Step 3: Run smoke and verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`
Expected: FAIL because compact rows and `#cardDetailOverlay` do not exist.

### Task 2: Persistent Layers And Compact Rows

**Files:**
- Modify: `binding-planner/index.html`
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/styles.css`

**Interfaces:**
- Produces: `visibleRows()`, `renderCompactBindingCard(row, status)`, `renderCardDetail()`, and the `card-stage` DOM contract.

- [x] **Step 1: Add card-stage markup**

Wrap `#cardWrap` and add `#cardDetailOverlay` as sibling layers inside `#cardStage`.

- [x] **Step 2: Extract visible rows**

Move list mode, status-filter, and search matching into `visibleRows(occupancyMap)` returning `{ row, status }` entries used by rendering and navigation.

- [x] **Step 3: Render compact summaries**

Render identity, status/relationship, MODE, CTX, and slot summaries only. Activating the row calls `openCardDetail(row.id)`.

- [x] **Step 4: Compose full detail**

Reuse the existing MODE, CTX, relationship, hand/layer, slot, note, clear, and lock helpers inside one detailed operation panel.

### Task 3: Overlay Navigation And Synchronization

**Files:**
- Modify: `binding-planner/app.js`

**Interfaces:**
- Produces: `openCardDetail(rowId)`, `closeCardDetail()`, `navigateCardDetail(direction)`, and `syncUnderlyingRow(rowId)`.

- [x] **Step 1: Add ephemeral detail state**

Track only `detailOpen` and pending row synchronization outside `state`; do not add fields to `uiSettings`.

- [x] **Step 2: Add filter-aware navigation**

Recompute `visibleRows()` on every detail render, disable boundaries, select the first result when the current row disappears, and close on an empty result.

- [x] **Step 3: Synchronize the base list**

After the compact list is mounted, center the selected compact row by setting `#cardWrap.scrollTop`; update stick panels through the normal `render()` path.

- [x] **Step 4: Verify GREEN**

Run: `node scripts/verify-sync-browser-smoke.mjs`
Expected: PASS for compact/detail/navigation assertions and existing workflows.

### Task 4: Responsive Detail Styling

**Files:**
- Modify: `binding-planner/styles.css`
- Modify: `binding-planner/index.html`
- Test: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Consumes: `card-stage`, compact-card, and detail overlay classes.
- Produces: stable same-width geometry and touch targets.

- [x] **Step 1: Style compact rows**

Use bounded columns and a 56-64px minimum row height without viewport-scaled typography.

- [x] **Step 2: Style the overlay**

Use absolute inset geometry, opaque cockpit background, internal detail scrolling, and no impact on list or page dimensions.

- [x] **Step 3: Add coarse-pointer sizing**

Set detail Back/Previous/Next controls to at least 44px high under `@media (pointer: coarse)`.

- [x] **Step 4: Bump cache keys**

Update CSS and app script query keys in `binding-planner/index.html`.

### Task 5: Verification And Publication

**Files:**
- Modify: `openspec/changes/add-card-detail-overlay/tasks.md`

**Interfaces:**
- Produces: completed change checklist, fresh regression evidence, pushed commit, and successful Pages deployment.

- [x] **Step 1: Run full verification**

```bash
node scripts/verify-workspace-repair.mjs
node scripts/verify-sync-core.mjs
node scripts/verify-v4-workspace-candidate.mjs repaired/sc-dual-vkb-binding-workspace.v3.json repaired/sc-dual-vkb-binding-workspace.v4.json
node --check binding-planner/app.js
node scripts/verify-sync-browser-smoke.mjs
openspec validate add-card-detail-overlay --strict
git diff --check
```

- [x] **Step 2: Inspect screenshots**

Capture iPad landscape/Sidecar and 4K list/detail states. Confirm compact density, overlay width equality, no horizontal overflow, stick accessibility, and selected-row restoration.

- [x] **Step 3: Commit and push**

Stage only this change's source, tests, OpenSpec artifacts, and docs; commit to `main` and push `origin/main`.

- [x] **Step 4: Verify publication**

Wait for `Deploy GitHub Pages` to succeed and verify the public page serves the new cache keys.
