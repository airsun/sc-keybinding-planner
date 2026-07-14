## Why

The left and right stick panels continuously flicker a hardware slot, but the marker is inferred through occupancy and can remain active when the selected operation card is hidden or when Profile and layer state no longer shows that binding. The planner needs one explicit selection-to-slot contract so users can trust that the highlighted hardware control is the binding of the operation they can currently see and edit.

## What Changes

- Make the visible selected operation card the single source of truth for the current hardware-slot highlight.
- Highlight only the selected card's exact bound hand, control, and layer; an unbound selection or no visible selection highlights no hardware slot.
- Reconcile selection and stick-panel context after list, filter, search, Profile, import, pull, repair, and inline-detail navigation changes.
- Automatically reveal a selected binding's hand and layer when selection changes, while allowing an intentional later layer switch to browse other assignments without silently changing the binding.
- Replace the perpetual CRT flicker for a selected binding with a stable selected-slot frame and a brief one-shot attention pulse; keep occupied, locked, conflict, uncalibrated, and pending-assignment semantics visually distinct.
- Add deterministic browser-contract coverage for direct selection, shared action rows, hidden selections, unbound actions, layer browsing, Profile changes, import/pull restoration, and reduced motion.

## Capabilities

### New Capabilities

- `selected-binding-stick-highlight`: Defines how visible operation selection, exact binding slots, stick hand/layer context, and selected-slot motion remain synchronized.

### Modified Capabilities

None. No archived main capability currently defines selected-card-to-stick-highlight behavior.

## Impact

- `binding-planner/app.js`: centralizes selection reconciliation and derives the current marker directly from the selected binding slot.
- `binding-planner/styles.css`: separates stable selection styling from transient attention motion and extends reduced-motion handling.
- `scripts/verify-sync-browser-smoke.mjs`: adds selection/highlight synchronization and persistence-boundary assertions.
- Workspace schema v4, bindings, device configuration, Profile payloads, import/export, and online-sync formats remain unchanged.
