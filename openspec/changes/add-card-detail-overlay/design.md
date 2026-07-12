## Context

The static planner keeps both stick panels visible around a scrollable operation list. The current cards render every editing control inline, so the Sidecar center column becomes visually dense even though the responsive workspace itself does not overflow.

The implementation must reuse the existing row order, filter/search logic, selected-row state, binding controls, and relationship classification. It must not alter schema v4 or the synchronized workspace payload.

## Goals / Non-Goals

**Goals:**

- Keep the default operation list compact and fast to scan.
- Place the complete editing workflow in a same-width overlay over the list viewport.
- Preserve the mounted list, filter state, and scroll position beneath the overlay.
- Navigate previous/next using exactly the currently visible row sequence.
- Synchronize navigation with selection, stick highlights, and underlying list scroll.
- Maintain touch ergonomics on iPad Pro and Sidecar while remaining restrained on 2K and 4K.

**Non-Goals:**

- No workspace schema or sync payload changes.
- No modal or drawer over a stick panel.
- No cyclic previous/next behavior.
- No Device Preset work.
- No duplicated filter or conflict-classification implementation.

## Decisions

### Use a card-stage with two persistent layers

Wrap the existing scroll container and a new detail section in `card-stage`. The list remains the scrollable base layer. The overlay uses `position: absolute; inset: 0` inside the stage, so opening detail does not change list geometry or page height.

Replacing the list DOM was rejected because it loses scroll anchoring and makes navigation restoration fragile. Inline accordion expansion was rejected because it shifts rows during repeated navigation. A modal was rejected because it blocks stick interaction.

### Derive one visible-row sequence

Extract the current list/filter/search checks into `visibleRows()`. Both compact rendering and detail previous/next consume this function. This prevents detail order from diverging from what the user can see.

Group headers remain rendering-only and never appear in the navigation sequence.

### Keep detail state ephemeral

Use local variables for detail-open state and pending scroll restoration. Do not add these values to `state.uiSettings`, localStorage, export, or sync. `selectedRowId` remains the existing shared selection signal because stick highlighting and binding operations already depend on it.

### Reuse existing editing primitives

The detail body composes the existing MODE, CTX, description, relationship mini-card, hand/layer, slot, clear, lock, and note helpers. Compact rows render summaries only and do not create hidden duplicate form controls.

### Synchronize the covered list after every detail selection

Opening or navigating detail updates `selectedRowId`, rerenders the workspace, then sets the list scroll position so the compact row is centered. The detail layer remains fixed while the base list scrolls underneath. Closing detail reveals the selected row at that position.

Tabs, filters, and search remain accessible above the overlay. When their result sequence excludes the selected row, detail moves to the first result; when the result is empty, detail closes.

## Risks / Trade-offs

- [Full render replaces the list before scroll synchronization] -> Capture the target row id and center it after the new compact DOM is mounted.
- [Overlay controls accidentally trigger the base card] -> Keep the overlay as a sibling layer and mark the base list inert while open.
- [Filter changes leave stale navigation indices] -> Recompute `visibleRows()` on every render and navigation action.
- [Compact summaries hide important problems] -> Retain status color, relationship label/count, MODE/CTX summary, and slot identity in every compact row.
- [iPad controls become too small] -> Enforce 44px minimum detail navigation targets for coarse pointers.

## Migration Plan

1. Deploy the new markup, styles, and rendering behavior without data migration.
2. Existing saved workspaces load unchanged and begin in compact list mode.
3. Rollback is a static asset rollback; no workspace data requires conversion.

## Open Questions

None.
