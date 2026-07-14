# Operation Mode Badge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show every operation's current activation mode as a compact corner badge inside its card slot label.

**Architecture:** Keep activation mode ownership in `activationModeForRow()` and derive a presentation-only badge in `renderSlotButton()`. A fixed abbreviation map produces stable labels, while browser smoke verifies DOM ownership, immediate MODE updates, accessibility, and responsive geometry. The badge has no command of its own, but remains hoverable for its full MODE tooltip and lets clicks bubble to the slot pill. No workspace data or schema changes are introduced.

**Tech Stack:** Vanilla JavaScript, CSS Grid, Chrome DevTools Protocol browser smoke, static GitHub Pages.

## Global Constraints

- Every assigned and unassigned operation displays a MODE badge, including `DEFAULT` as `DEF`.
- The badge is a non-interactive child of `.slot-pill` at its top-right corner.
- The complete normalized MODE remains available through `title` and `aria-label`.
- Existing key label, optional `#code`, disclosure, inline detail, CTX, conflict, import/export, sync, and v4 behavior remain unchanged.
- Validate phone, iPad portrait, iPad landscape, 2K, and 4K layouts.

---

### Task 1: Add The Failing Browser Contract

**Files:**
- Modify: `scripts/verify-sync-browser-smoke.mjs:346-531`
- Modify: `scripts/verify-sync-browser-smoke.mjs:691-846`

**Interfaces:**
- Consumes: existing `.binding-card`, `.slot-pill`, and inline MODE select DOM contracts.
- Produces: smoke state fields `modeBadgeCount`, `modeBadgeInsideSlotCount`, `scenario1ModeBadge`, and responsive `overflowModeBadges`.

- [x] **Step 1: Add badge observations to `state()`**

```js
modeBadgeCount: document.querySelectorAll("#bindingRows .operation-mode-badge").length,
modeBadgeInsideSlotCount: document.querySelectorAll("#bindingRows .slot-pill > .operation-mode-badge").length,
scenario1ModeBadge: (() => {
  const badge = document.querySelector('[data-row-id="scenario-1"] .operation-mode-badge');
  return badge ? {
    text: badge.textContent || "",
    mode: badge.dataset.mode || "",
    title: badge.title || "",
    ariaLabel: badge.getAttribute("aria-label") || "",
  } : null;
})(),
```

- [x] **Step 2: Assert the initial `DEFAULT` badge and immediate MODE update**

```js
if (state().modeBadgeCount !== state().historicalCardCount
  || state().modeBadgeInsideSlotCount !== state().historicalCardCount
  || JSON.stringify(state().scenario1ModeBadge) !== JSON.stringify({
    text: "DEF",
    mode: "DEFAULT",
    title: "MODE: DEFAULT",
    ariaLabel: "触发模式 DEFAULT",
  })) {
  throw new Error("Every slot pill must expose its complete DEFAULT mode badge: " + JSON.stringify(state()));
}

await openDetail("scenario-1");
select(".inline-card-detail .activation-mode-select", "DOUBLE_TAP");
await waitFor(
  (current) => current.scenario1ModeBadge?.text === "2T"
    && current.scenario1ModeBadge.mode === "DOUBLE_TAP",
  "mode badge follows inline MODE change",
);
select(".inline-card-detail .activation-mode-select", "DEFAULT");
await waitFor(
  (current) => current.scenario1ModeBadge?.text === "DEF"
    && current.scenario1ModeBadge.mode === "DEFAULT",
  "mode badge returns to DEFAULT without changing later conflict semantics",
);
```

- [x] **Step 3: Add responsive containment observations**

```js
overflowModeBadges: Array.from(document.querySelectorAll(".slot-pill > .operation-mode-badge"))
  .filter((badge) => {
    const slot = badge.parentElement.getBoundingClientRect();
    const value = badge.getBoundingClientRect();
    return value.left < slot.left - 1
      || value.right > slot.right + 1
      || value.top < slot.top - 1
      || value.bottom > slot.bottom + 1;
  })
  .map((badge) => badge.closest(".binding-card")?.dataset.rowId || "unknown"),
overlappingModeBadges: Array.from(document.querySelectorAll(".slot-pill > .operation-mode-badge"))
  .filter((badge) => {
    const value = badge.getBoundingClientRect();
    return Array.from(badge.parentElement.querySelectorAll(".slot-pill-label, .slot-pill-code"))
      .some((content) => {
        const target = content.getBoundingClientRect();
        return value.left < target.right
          && value.right > target.left
          && value.top < target.bottom
          && value.bottom > target.top;
      });
  })
  .map((badge) => badge.closest(".binding-card")?.dataset.rowId || "unknown"),
```

Add this assertion to `assertResponsiveGeometry()`:

```js
if (result.overflowModeBadges.length) {
  throw new Error(`${viewport.name} MODE badges escape slot pills: ${JSON.stringify(result.overflowModeBadges)}`);
}
if (result.overlappingModeBadges.length) {
  throw new Error(`${viewport.name} MODE badges overlap labels or codes: ${JSON.stringify(result.overlappingModeBadges)}`);
}
```

- [x] **Step 4: Run the smoke test to verify RED**

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: FAIL because `.operation-mode-badge` does not exist and `modeBadgeCount` is `0`.

### Task 2: Render And Style The Badge

**Files:**
- Modify: `binding-planner/app.js:8-15`
- Modify: `binding-planner/app.js:1015-1022`
- Modify: `binding-planner/app.js:2091-2126`
- Modify: `binding-planner/styles.css:5721-5760`
- Modify: `binding-planner/index.html:7,251`
- Modify: `scripts/verify-sync-browser-smoke.mjs:169-181`

**Interfaces:**
- Consumes: `activationModeForRow(row): string` and `workspaceCore.normalizeActivationMode(value): string`.
- Produces: `modeBadgeLabel(mode): string` and `.operation-mode-badge[data-mode]`.

- [x] **Step 1: Add the stable badge map and fallback**

```js
const activationModeBadgeLabels = Object.freeze({
  DEFAULT: "DEF",
  TAP: "TAP",
  PRESS: "PRS",
  HOLD: "HLD",
  DOUBLE_TAP: "2T",
  ALL: "ALL",
  SMART_TOGGLE: "STG",
  HOLD_TOGGLE: "HTG",
  HOLD_NO_RETRIGGER: "HNR",
  DELAYED_PRESS: "D-P",
  DELAYED_PRESS_MEDIUM: "DPM",
  DELAYED_HOLD: "D-H",
  DELAYED_HOLD_NO_RETRIGGER: "DHN",
});

function modeBadgeLabel(mode) {
  const normalized = workspaceCore.normalizeActivationMode(mode);
  return activationModeBadgeLabels[normalized]
    || normalized.replace(/[^A-Z0-9]/g, "").slice(0, 4)
    || "DEF";
}
```

- [x] **Step 2: Append the badge from `renderSlotButton()`**

```js
const mode = activationModeForRow(row);
const modeBadge = makeEl("span", "operation-mode-badge", modeBadgeLabel(mode));
modeBadge.dataset.mode = mode;
modeBadge.title = `MODE: ${mode}`;
modeBadge.setAttribute("aria-label", `触发模式 ${mode}`);
button.append(light, label, modeBadge);
```

Keep the existing optional `.slot-pill-code` append after this block.

- [x] **Step 3: Style a contained corner badge**

```css
.slot-pill {
  position: relative;
  padding-right: 31px;
}

.operation-mode-badge {
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 1;
  min-width: 20px;
  max-width: 27px;
  height: 12px;
  overflow: hidden;
  border: 1px solid rgba(243, 154, 47, 0.58);
  padding: 0 2px;
  color: var(--amber);
  background: rgba(2, 8, 4, 0.94);
  font: 700 7px/10px var(--mono);
  text-align: center;
  text-overflow: clip;
  white-space: nowrap;
}
```

- [x] **Step 4: Bump `styles.css` and `app.js` cache keys**

Change `styles.css?v=retro-82` to `retro-83` and `app.js?v=retro-43` to `retro-44` in `binding-planner/index.html`. Update the smoke HTML injection needle and replacement to `retro-44`.

- [x] **Step 5: Run syntax and browser checks to verify GREEN**

Run: `node --check binding-planner/app.js`

Expected: exit `0`.

Run: `node --check scripts/verify-sync-browser-smoke.mjs`

Expected: exit `0`.

Run: `node scripts/verify-sync-browser-smoke.mjs`

Expected: JSON output with `"ok": true`; all five responsive viewports report empty `overflowModeBadges`.

### Task 3: Visual QA, Regression, And Delivery

**Files:**
- Modify: `docs/superpowers/plans/2026-07-14-operation-mode-badge.md`

**Interfaces:**
- Consumes: completed `.operation-mode-badge` rendering and browser contract.
- Produces: verified published GitHub Pages assets `retro-83` and `retro-44`.

- [x] **Step 1: Inspect visual output**

Serve `binding-planner/` locally and inspect collapsed and expanded cards at `390x844` and `1366x1024`. Confirm the badge reads as a corner marker, does not cover the key label or `#code`, and updates to `2T` after changing MODE.

- [x] **Step 2: Run the complete regression set**

Run each command separately:

```bash
node scripts/verify-workspace-repair.mjs
node scripts/verify-sync-core.mjs
node scripts/verify-v4-workspace-candidate.mjs repaired/sc-dual-vkb-binding-workspace.v3.json repaired/sc-dual-vkb-binding-workspace.v4.json
node --check binding-planner/app.js
node --check scripts/verify-sync-browser-smoke.mjs
node scripts/verify-sync-browser-smoke.mjs
git diff --check
```

Expected: all commands exit `0`; v4 remains schema `4`, four Profiles, 372 active bindings, one repair item, and zero true conflicts.

- [ ] **Step 3: Mark this plan complete and commit scoped files**

```bash
git add binding-planner/app.js binding-planner/index.html binding-planner/styles.css scripts/verify-sync-browser-smoke.mjs docs/superpowers/plans/2026-07-14-operation-mode-badge.md
git commit -m "feat: show operation mode badges"
```

- [ ] **Step 4: Push and verify GitHub Pages**

Run: `git push origin main`

Expected: `main -> main` succeeds.

Check the latest `pages.yml` run and the public planner HTML. Expected: workflow conclusion `success`, with `styles.css?v=retro-83` and `app.js?v=retro-44` in the published page.
