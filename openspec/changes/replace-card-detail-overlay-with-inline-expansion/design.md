## Context

The planner currently renders 58px compact summaries and mounts one absolute detail overlay over the center list. That implementation made the list scan efficiently but removed the established three-column direct editing workflow and detached advanced editing from the operation card's physical position. The correction must retain the current MODE, CTX, relationship, Profile, sync, and schema-v4 logic while replacing only their presentation and ephemeral navigation state.

Commit `f91cedb` is the collapsed-card composition reference because it predates MODE and CTX controls while preserving action identity, description, note, status rail, hand, layer, slot, clear, and lock operations.

## Goals / Non-Goals

**Goals:**

- Restore the historical direct-operation card composition without MODE or CTX controls in the collapsed state.
- Render MODE, CTX, relationship classification, and relationship actions in one in-flow expansion belonging to the selected card.
- Provide filtered, non-wrapping Previous/Next navigation with a thin selection frame, directional motion, target scrolling, and rapid-input locking.
- Preserve all existing data and sync contracts and the current Sidecar/iPad, phone, 2K, and 4K workspace behavior.

**Non-Goals:**

- Changing workspace schema v4, Profile structure, device configuration, activation-mode values, context taxonomy, conflict inference, or sync provider behavior.
- Introducing Device Preset or a separate relationship rule editor.
- Retaining compact summaries or any floating/absolute detail surface.
- Persisting expansion, transition direction, or animation state.

## Decisions

### Restore the historical card before adding detail

`renderBindingCard()` will return to the `f91cedb` three-column structure. The only collapsed-state addition is a narrow disclosure icon in a fixed far-right binding-control column after `CLR/REL`; the slot-name track contracts slightly to make room. This keeps the action-name area unchanged and prevents the advanced editor from redefining the base card again.

Alternative considered: adapt the compact row into an accordion. Rejected because it would preserve the exact layout and operability regression being corrected.

### Append detail inside the card's normal flow

The expanded detail will be a full-width grid row inside the same `article.binding-card`. Only the expanded card grows; the center list handles the added height through its existing scroll container. Side panels and center-column width do not move.

Alternative considered: insert a sibling row after the card. Rejected because selection framing and assistive ownership would be weaker. A fixed overlay is explicitly removed.

### Reuse existing advanced editor helpers

The detail composes `renderActivationModeSelect()`, `renderContextPicker()`, and `renderRelationshipMiniCard()`. Basic hand/layer/slot/clear/lock controls remain in the base card and are not duplicated. Conflict and relationship operations are excluded from collapsed `renderBindingConsole()` and rendered only in detail.

### Keep one shared visible sequence

`visibleRows()` remains the source for list rendering, position labels, boundaries, and target selection. Filter/search changes that remove the expanded row close the detail; they do not silently expand another operation.

### Use two-phase directional navigation

Previous/Next first animates the mounted detail out, then renders the adjacent visible operation expanded with the inverse entry offset. A short transition lock ignores repeated navigation input until the target is rendered. Reduced-motion mode uses immediate state changes and scrolling.

Alternative considered: render the target immediately and animate only entry. Rejected because it does not communicate directional relocation clearly enough.

### Keep UI motion ephemeral

`expandedRowId`, transition direction, lock, and pending target scroll are module variables outside workspace state. Profile switches, imports, pulls, or empty filters reconcile or close this state. No new serialization or migration path is introduced.

## Risks / Trade-offs

- [Expanded detail increases list height] -> Keep one detail open, center the target card after navigation, and use the existing independent list scroll container.
- [Full re-render can interrupt animation] -> Animate the mounted outgoing detail before changing `expandedRowId`; apply an entry class to the newly rendered target.
- [Rapid navigation can skip rows] -> Lock Previous/Next for the 140-180ms transition window and test double activation.
- [Relationship controls can trigger card selection accidentally] -> Stop propagation on disclosure, navigation, MODE, CTX, and relationship actions.
- [Responsive detail can overflow narrow widths] -> Use container-query layout reduction, bounded controls, fixed typography, and the existing five-viewport browser matrix.
- [Thin frame can lose semantic conflict/lock color] -> Preserve conflict and locked selectors at higher specificity and restrict the animated frame to a subtle pseudo-element.

## Migration Plan

1. Replace browser smoke expectations before implementation and confirm failure against the current compact/overlay UI.
2. Remove overlay DOM and compact/overlay styling while restoring historical cards.
3. Add inline detail, navigation, motion, and responsive styling using existing data helpers.
4. Run full schema, sync, import/export, CTX reuse, conflict, Profile, viewport, and visual regression checks.
5. Deploy through the existing GitHub Pages workflow with bumped asset cache keys.

Rollback is a normal revert of the implementation commit; workspace JSON remains compatible because no stored data changes.

## Open Questions

None. The collapsed baseline, advanced-detail ownership, navigation sequence, motion direction, and persistence boundary are confirmed.
