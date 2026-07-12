# Responsive Workspace Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the binding planner usable without clipping or uncontrolled stretching on phone, iPad Pro portrait/landscape, Sidecar, 2K, and 4K viewports.

**Architecture:** Extend the existing Chrome CDP smoke with a deterministic responsive geometry matrix, then add one final CSS contract layer that overrides the accumulated legacy breakpoints. Keep all behavior and workspace data unchanged; only `styles.css`, its cache key, and responsive verification change.

**Tech Stack:** Static HTML/CSS, Node.js, Chrome DevTools Protocol, existing browser smoke, OpenSpec.

## Global Constraints

- Validate `390x844`, `1024x1366`, `1366x1024`, `2560x1440`, and `3840x2160`.
- At `1024x1366`, list comes first and both stick panels remain available below it without horizontal overflow.
- At `1366x1024`, both stick panels and the list remain visible simultaneously.
- At `2560x1440` and `3840x2160`, workspace width remains at or below `2400px`.
- Do not scale font size with viewport width.
- Coarse-pointer operation controls use touch-sized targets.
- Do not alter Profile, MODE, CTX, sync, export, or schema behavior.

---

### Task 1: Responsive Geometry Regression

**Files:**
- Modify: `scripts/verify-sync-browser-smoke.mjs`
- Modify: `openspec/changes/add-context-aware-binding-reuse/tasks.md`

**Interfaces:**
- Consumes: existing `evaluate(cdp, expression)` and CDP client.
- Produces: `verifyResponsiveMatrix(cdp): Promise<Array<LayoutResult>>` included in smoke output.

- [x] **Step 1: Add viewport cases and geometry collection**

Add a helper that calls `Emulation.setDeviceMetricsOverride`, reloads the page, and returns bounded measurements:

```js
const responsiveViewports = [
  { name: "phone", width: 390, height: 844 },
  { name: "ipad-portrait", width: 1024, height: 1366, touch: true },
  { name: "ipad-landscape", width: 1366, height: 1024, touch: true },
  { name: "2k", width: 2560, height: 1440 },
  { name: "4k", width: 3840, height: 2160 },
];
```

Collect `documentWidth`, `bodyWidth`, `workspaceWidth`, list/panel rectangles, overflow-card ids, relationship overflow ids, and operation-control heights.

- [x] **Step 2: Add explicit assertions**

Fail when any document/card overflows, when iPad portrait is not operation-first, when iPad landscape loses either stick panel, when wide workspace exceeds `2400px`, or when touch controls are below `36px`.

- [x] **Step 3: Run smoke and verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: FAIL on current CSS because `1024x1366` has a `1100px` document and the 2K/4K workspace exceeds `2400px`.

---

### Task 2: Final Responsive Contract Layer

**Files:**
- Modify: `binding-planner/styles.css`
- Modify: `binding-planner/index.html`

**Interfaces:**
- Consumes: existing `.workspace`, `.list-zone`, `#leftPanel`, `#rightPanel`, `.binding-card`, and operation-control selectors.
- Produces: three bounded layout modes with no JavaScript state.

- [x] **Step 1: Add the wide and cockpit defaults at the end of CSS**

Use a centered, bounded workspace and explicit rail sizes:

```css
.workspace {
  width: min(100%, 2400px);
  margin-inline: auto;
  grid-template-columns: minmax(280px, 320px) minmax(0, 1fr) minmax(280px, 320px);
}

@media (min-width: 1920px) {
  .workspace {
    width: min(calc(100% - 32px), 2400px);
    grid-template-columns: minmax(360px, 400px) minmax(0, 1fr) minmax(360px, 400px);
  }
}
```

- [x] **Step 2: Add operation-first iPad portrait layout**

At `max-width: 1180px`, make the workspace two columns, place `.list-zone` at grid row 1 across both columns, and place `#leftPanel`/`#rightPanel` in row 2. Restore normal document scrolling and bound all cards/relationship consoles to `min-width: 0`.

Below `700px`, stack both panels into one column while retaining existing phone card behavior.

- [x] **Step 3: Add coarse-pointer sizing**

Within `@media (pointer: coarse)`, set MODE/CTX controls, filters, tabs, and card action buttons to at least `36px` without changing their font-size through viewport units.

- [x] **Step 4: Bump the stylesheet cache key**

Change `styles.css?v=retro-78` to `styles.css?v=retro-79` in `binding-planner/index.html`.

- [x] **Step 5: Run the responsive smoke and verify GREEN**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: PASS with all five responsive cases included in JSON output.

---

### Task 3: Visual And Deployment Closeout

**Files:**
- Modify: `openspec/changes/add-context-aware-binding-reuse/tasks.md`
- Modify: `docs/superpowers/plans/2026-07-12-responsive-workspace.md`

**Interfaces:**
- Produces: screenshot evidence, verified regression suite, pushed commits, and a successful Pages run.

- [x] **Step 1: Inspect real screenshots**

Use the local app at all four requested non-phone sizes. Confirm that controls do not overlap, relationship evidence remains readable, both panels are present where required, and wide screens retain bounded reading width.

- [x] **Step 2: Run the complete verification suite**

```bash
node scripts/verify-workspace-repair.mjs
node scripts/verify-sync-core.mjs
node scripts/verify-repaired-export.mjs /Users/gunegg/Downloads/sc-dual-vkb-binding-workspace.json /tmp/sc-dual-vkb-binding-workspace.v4.json
node scripts/verify-sync-browser-smoke.mjs
openspec validate add-context-aware-binding-reuse --strict
git diff --check
```

- [ ] **Step 3: Commit and push implementation**

Stage only responsive implementation, tests, plan, and OpenSpec tasks. Commit to `main` and push to `origin/main`.

- [ ] **Step 4: Repair Pages deployment permission and verify**

Allow `main` in the repository's `github-pages` environment deployment branch policy, rerun `Deploy GitHub Pages`, and verify the run conclusion is `success` before marking OpenSpec tasks 5.5 and 6.5 complete.
