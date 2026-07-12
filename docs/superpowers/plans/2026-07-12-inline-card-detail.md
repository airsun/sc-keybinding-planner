# Inline Operation Card Detail Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Restore the pre-MODE/CTX operation card layout and move MODE, CTX, relationship, and conflict editing into a directional inline card expansion.

**Architecture:** `visibleRows()` remains the single filtered sequence. Each normal `binding-card` keeps its historical three-column composition and conditionally appends one full-width inline detail row. Ephemeral expansion and transition state coordinate Previous/Next navigation, while existing MODE, CTX, relationship, conflict, binding, Profile, import/export, and sync helpers remain the only data paths.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js browser smoke over Chrome DevTools Protocol, OpenSpec.

## Global Constraints

- Use commit `f91cedb` as the collapsed-card layout and direct-control reference.
- Do not render MODE, CTX, relationship mini-cards, or conflict actions in the collapsed card.
- Do not change workspace schema v4, Profile data, binding semantics, import/export, or online sync payloads.
- Remove the compact-card list and floating detail overlay introduced by `5e5451e`.
- Keep both stick panels visible and the center list independently scrollable on Sidecar/iPad landscape.
- Keep expansion row, transition direction, and transition lock ephemeral.
- Previous/Next uses current list mode, status filter, and search query without wrapping.
- Respect `prefers-reduced-motion: reduce`.

---

### Task 1: Correction Change And Failing Browser Contract

**Files:**
- Create: `openspec/changes/replace-card-detail-overlay-with-inline-expansion/`
- Modify: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Consumes: Existing CDP helpers, `state()`, `responsiveGeometryExpression()`, and viewport matrix.
- Produces: OpenSpec requirements and browser assertions for historical cards, inline detail, directional navigation, and ephemeral state.

- [x] **Step 1: Create the correction OpenSpec artifacts**

Create proposal, design, delta spec, and task checklist describing removal of `operation-card-detail-overlay` behavior and addition of `operation-card-inline-detail` behavior. The delta SHALL require original direct card controls, one inline expansion, filtered Previous/Next, directional motion, and no schema changes.

- [x] **Step 2: Replace compact/overlay observations**

Update `state()` with these production-facing observations:

```js
historicalCardCount: document.querySelectorAll("#bindingRows .binding-card:not(.compact-card)").length,
collapsedModeControlCount: document.querySelectorAll("#bindingRows .binding-card:not(.detail-expanded) .activation-mode-select").length,
collapsedContextControlCount: document.querySelectorAll("#bindingRows .binding-card:not(.detail-expanded) .context-picker-button").length,
directBindingControlCount: document.querySelectorAll("#bindingRows .binding-card .binding-controls").length,
floatingDetailExists: Boolean(document.querySelector("#cardDetailOverlay")),
expandedCardCount: document.querySelectorAll("#bindingRows .binding-card.detail-expanded").length,
expandedRowId: document.querySelector("#bindingRows .binding-card.detail-expanded")?.dataset.rowId || "",
inlineModeControlCount: document.querySelectorAll(".inline-card-detail .activation-mode-select").length,
inlineContextControlCount: document.querySelectorAll(".inline-card-detail .context-picker-button").length,
inlinePosition: document.querySelector(".inline-detail-position")?.textContent || "",
detailStatePersisted: Object.keys(workspace.uiSettings || {}).some((key) => /detail|expanded|transition/i.test(key)),
```

- [x] **Step 3: Add failing inline-navigation interactions**

Exercise this sequence:

```js
click('[data-row-id="scenario-1"] [data-inline-detail-command="toggle"]');
await waitFor((current) => current.expandedRowId === "scenario-1", "open inline detail");
click('[data-inline-detail-command="next"]');
await waitFor(
  (current) => current.expandedRowId === "scenario-2"
    && current.selectedRowId === "scenario-2"
    && current.currentStickSlotCount > 0
    && current.selectedRowCentered,
  "inline detail next navigation",
);
```

Also assert exactly one inline MODE/CTX editor, no floating overlay, no compact cards, no persisted expansion state, non-wrapping boundaries, and close-on-empty-filter behavior.

- [x] **Step 4: Run the browser smoke and verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: FAIL because the current UI still renders compact cards and `#cardDetailOverlay` and has no inline disclosure control.

---

### Task 2: Restore Historical Card Composition

**Files:**
- Modify: `binding-planner/index.html`
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/styles.css`

**Interfaces:**
- Consumes: `visibleRows()`, `renderBindingConsole()`, and existing direct binding-control helpers.
- Produces: `renderBindingCard(row, status, visibleIndex, visibleCount)` and restored `.card-wrap > #bindingRows` structure.

- [x] **Step 1: Remove the floating overlay DOM**

Replace the card stage with the historical list mount:

```html
<div id="cardWrap" class="card-wrap">
  <div id="bindingRows" class="binding-cards" aria-label="绑定清单"></div>
</div>
```

Remove `#cardStage`, `#cardDetailOverlay`, overlay navigation, heading, position, and body nodes. Bump CSS and app cache keys.

- [x] **Step 2: Restore normal card rendering**

Replace `renderCompactBindingCard()` and `renderDetailedBindingCard()` with:

```js
function renderBindingCard(row, status, visibleIndex, visibleCount) {
  const binding = bindingForRow(row);
  const card = document.createElement("article");
  card.className = "binding-card";
  card.dataset.rowId = row.id;
  if (row.id === selectedRowId) card.classList.add("selected");
  if (binding?.locked) card.classList.add("locked-card");
  if (status.reason === "conflict") card.classList.add("has-conflict");
  card.addEventListener("click", () => focusBinding(row));

  const actionCell = renderHistoricalActionCell(row, binding);
  const description = renderHistoricalDescription(row);
  const controls = renderBindingConsole(row, binding, status, { includeRelationship: false });
  card.append(actionCell, description, controls);
  return card;
}
```

The action cell contains title, note, secondary identity, subgroup, and one disclosure button. It does not contain MODE or CTX.

- [x] **Step 3: Keep relationship operations out of collapsed controls**

Change the binding console contract:

```js
function renderBindingConsole(row, binding, status, options = {}) {
  // Always render status rail plus hand/layer/slot/clear/lock controls.
  // Render relationship content only when options.includeRelationship is true.
}
```

Collapsed cards pass `{ includeRelationship: false }`; the inline detail owns relationship rendering.

- [x] **Step 4: Remove compact and overlay CSS**

Delete `.compact-*`, `.card-stage`, `.card-detail-overlay`, overlay header/body, and overlay container-query rules added after the `Compact operation list` marker. Restore normal `.binding-card` rules as the active layout without adding a compact height cap.

- [x] **Step 5: Run smoke and confirm the baseline assertions advance**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: historical cards and no-overlay assertions PASS; inline disclosure assertions still FAIL.

---

### Task 3: Inline Detail State And Editing

**Files:**
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/styles.css`

**Interfaces:**
- Produces: `expandedRowId`, `renderInlineCardDetail(row, status, index, total)`, `toggleInlineDetail(rowId)`, `reconcileExpandedDetail(entries)`, and `syncExpandedCard(rowId, behavior)`.

- [x] **Step 1: Add ephemeral expansion state**

Add outside persisted `state`:

```js
let expandedRowId = null;
let detailTransitionDirection = null;
let detailTransitionLocked = false;
let pendingExpandedScrollRowId = null;
```

Do not add corresponding keys to `uiSettings`, workspace export, or sync configuration.

- [x] **Step 2: Render the inline detail inside the selected card**

Append detail only when `row.id === expandedRowId`:

```js
if (row.id === expandedRowId) {
  card.classList.add("detail-expanded");
  card.append(renderInlineCardDetail(row, status, visibleIndex, visibleCount));
}
```

`renderInlineCardDetail()` renders a header with Collapse/Previous/position/Next and a body containing `renderActivationModeSelect(row)`, `renderContextPicker(row)`, and `renderRelationshipMiniCard(row, binding, status)` when a relationship exists.

- [x] **Step 3: Implement disclosure and reconciliation**

```js
function toggleInlineDetail(rowId) {
  expandedRowId = expandedRowId === rowId ? null : rowId;
  detailTransitionDirection = null;
  pendingExpandedScrollRowId = expandedRowId;
  const row = expandedRowId ? findRow(expandedRowId) : null;
  if (row) focusBinding(row);
  else render();
}

function reconcileExpandedDetail(entries) {
  if (!expandedRowId) return;
  if (!entries.some(({ row }) => row.id === expandedRowId)) expandedRowId = null;
}
```

Disclosure and every detail control stop propagation.

- [x] **Step 4: Center expanded cards after render**

Implement `syncExpandedCard()` with `scrollIntoView({ block: "center", behavior })`, using `"auto"` under reduced motion and `"smooth"` otherwise. Schedule it with `requestAnimationFrame()` only when `pendingExpandedScrollRowId` is set.

- [x] **Step 5: Run smoke for inline editing**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: disclosure, single expansion, inline MODE/CTX, context reuse, and ephemeral-state assertions PASS; directional navigation assertions may still FAIL.

---

### Task 4: Directional Previous/Next Transition

**Files:**
- Modify: `binding-planner/app.js`
- Modify: `binding-planner/styles.css`
- Test: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Produces: `navigateInlineDetail(direction)`, `waitForDetailExit(direction)`, `.detail-enter-next`, `.detail-enter-previous`, and transition lock behavior.

- [x] **Step 1: Implement non-wrapping filtered navigation**

```js
async function navigateInlineDetail(direction) {
  if (detailTransitionLocked || !expandedRowId) return;
  const entries = visibleRows();
  const index = entries.findIndex(({ row }) => row.id === expandedRowId);
  const target = entries[index + direction]?.row;
  if (!target) return;
  detailTransitionLocked = true;
  await waitForDetailExit(direction);
  detailTransitionDirection = direction > 0 ? "next" : "previous";
  expandedRowId = target.id;
  pendingExpandedScrollRowId = target.id;
  focusBinding(target);
  window.setTimeout(() => { detailTransitionLocked = false; }, detailMotionDuration());
}
```

- [x] **Step 2: Animate outgoing and incoming detail**

Use Web Animations for the mounted outgoing detail and CSS for the newly rendered target:

```js
detail.animate(
  [
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: `translateY(${direction > 0 ? -8 : 8}px)` },
  ],
  { duration: detailMotionDuration(), easing: "ease-in", fill: "forwards" },
);
```

The incoming detail uses the opposite offset. `detailMotionDuration()` returns `0` when reduced motion is active and otherwise a value between 140 and 180ms.

- [x] **Step 3: Add the thin selection frame**

Style `.binding-card.detail-expanded` with a 1px outline and restrained corner accents. Add a single pseudo-element tracer animation; do not add a nested decorative card or change side-panel geometry. True-conflict and locked states retain their semantic colors.

- [x] **Step 4: Verify boundaries, direction, and rapid input**

Assert disabled Previous/Next boundaries, exactly one expanded card, no persisted detail state, and transition locking. Click Next twice during the transition and assert only one row advances.

- [x] **Step 5: Run behavior smoke**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: all inline-detail behavior and existing workflow steps PASS.

---

### Task 5: Responsive Styling And Visual Verification

**Files:**
- Modify: `binding-planner/styles.css`
- Modify: `scripts/verify-sync-browser-smoke.mjs`

**Interfaces:**
- Consumes: Existing phone, iPad portrait, iPad landscape, 2K, and 4K viewport matrix.
- Produces: stable collapsed-card geometry, in-flow expanded detail geometry, and screenshot evidence.

- [x] **Step 1: Extend responsive geometry observations**

Capture collapsed card controls, expanded card/detail rectangles, horizontal overflow, side panel rectangles, and coarse-pointer detail control heights. Remove the compact-card `max <= 76px` assertion.

- [x] **Step 2: Add responsive detail layout**

Use a two- or three-column detail grid at wider center-column sizes and one column below the existing container breakpoint. Keep typography fixed-size, controls bounded, and detail content in normal flow.

- [x] **Step 3: Verify the full viewport matrix**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: PASS for phone `390x844`, iPad portrait `1024x1366`, Sidecar/iPad landscape `1366x1024`, 2K `2560x1440`, and 4K `3840x2160`, with no document/detail horizontal overflow.

- [x] **Step 4: Inspect screenshots**

Capture Sidecar collapsed, Sidecar expanded, and 4K expanded states. Confirm the original card controls remain visible, the detail pushes only its own card/list flow, the frame is thin, and Previous/Next visibly relocates selection.

---

### Task 6: Regression, Commit, And Publication

**Files:**
- Modify: `openspec/changes/replace-card-detail-overlay-with-inline-expansion/tasks.md`

**Interfaces:**
- Produces: completed OpenSpec checklist, fresh regression evidence, pushed commits, and successful Pages publication.

- [x] **Step 1: Run full verification**

```bash
node scripts/verify-workspace-repair.mjs
node scripts/verify-sync-core.mjs
node scripts/verify-v4-workspace-candidate.mjs repaired/sc-dual-vkb-binding-workspace.v3.json repaired/sc-dual-vkb-binding-workspace.v4.json
node --check binding-planner/app.js
node --check scripts/verify-sync-browser-smoke.mjs
node scripts/verify-sync-browser-smoke.mjs
openspec validate replace-card-detail-overlay-with-inline-expansion --strict
git diff --check
```

Expected: all commands exit `0`; the v4 candidate remains 4 Profiles, 372 active bindings, 1 repair item, and 0 true conflicts.

- [x] **Step 2: Stage only scoped files**

Stage planner source, smoke tests, the correction OpenSpec change, and this plan. Do not stage `.claude/`, `.codex/`, `.superpowers/`, or `repaired/`.

- [x] **Step 3: Commit and push main**

```bash
git commit -m "feat: replace overlay with inline card detail"
git push origin main
```

- [x] **Step 4: Verify GitHub Pages**

Wait for `.github/workflows/pages.yml` to succeed for the implementation commit, then verify the public HTML serves the new CSS and app cache keys.
