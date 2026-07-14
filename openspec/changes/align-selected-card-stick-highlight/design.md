## Context

The planner stores operation selection as module state (`selectedRowId`) mirrored into `uiSettings`, while each rendered stick slot derives `current` indirectly from the slot's occupancy list and the selected row's `actionKey`. Card clicks normally call `focusBinding()` and synchronize the bound hand and layer, but several other paths assign `selectedRowId` directly. List/filter/search changes can also remove the selected card without clearing selection. Because the selection bar is hidden, these paths leave no visible explanation for a continuing or disappearing infinite CRT flicker.

The correction spans selection state, derived slot state, Profile/import/pull transitions, and motion styling. It must preserve workspace schema v4 and the existing meanings of occupied, locked, conflict, uncalibrated, shared, and context-reuse bindings.

## Goals / Non-Goals

**Goals:**

- Give the selected-card frame and hardware-slot frame one testable source of truth.
- Reveal an exact bound hand/control/layer when a user selects a visible operation.
- Prevent a hidden or unbound operation from leaving a misleading current-slot marker.
- Preserve deliberate layer browsing without moving or rewriting the selected binding.
- Make selection persistent enough for normal reload behavior but keep attention animation ephemeral.
- Cover every state transition that can change selection visibility or the selected binding.

**Non-Goals:**

- Changing binding occupancy, conflict, activation-mode, context-reuse, or canonical-action semantics.
- Persisting animation, last-selection cause, or layer-browsing state beyond existing UI settings.
- Reading live joystick input or using the marker as a hardware activity indicator.
- Changing workspace schema v4, Profile data, device calibration, import/export, or sync formats.
- Redesigning the stick-panel layout or operation-card layout.

## Decisions

### Derive current state from the exact selected binding

A selection helper will resolve a selected row only when that row belongs to the current visible sequence. The current-slot predicate will compare the rendered slot directly with `bindingForRow(selectedVisibleRow)?.slot` through `sameSlot()`. Occupancy remains responsible only for occupied, locked, conflict, and layer bars.

This separates two different facts: “a binding occupies this slot” and “the visible selected operation is bound to this exact slot.” It also retains correct behavior for repeated scenario rows because rows sharing an `actionKey` resolve the same binding without treating unrelated occupants as selection.

Alternative considered: keep the occupancy lookup and add more guards. Rejected because selection would remain coupled to conflict/context occupancy and every future occupancy change could alter selection feedback.

### Reconcile selection before rendering either panel or cards

One reconciliation path will run before stick panels and operation cards render. It will accept the current visible sequence and apply these rules:

1. Keep the selected row when it remains visible.
2. On an explicit list-mode change, map to a visible row with the same exact `actionKey` when one exists.
3. Otherwise clear selection when search, status filtering, list mode, Profile data, import, pull, or repair results make the selected row unavailable.
4. Close inline detail when its owner is no longer visible, using the existing detail reconciliation contract.

Selection-producing actions will use one helper instead of assigning `selectedRowId` directly. The helper will optionally reveal a binding's hand/layer for direct card selection, inline navigation, Profile selection refresh, import/pull restoration, repair reveal, and undo. Clearing selection will also clear pending hand/layer targets so clicking a hardware slot cannot mutate a hidden operation.

Alternative considered: retain hidden selection and restore a sticky selection bar. Rejected because it expands the UI and still allows the card frame and stick frame to refer to different visible contexts.

### Treat layer synchronization as reveal-on-selection, not a permanent lock

Selecting or restoring a bound row sets the bound hand's visible layer to the binding layer. A subsequent user activation of Base/S1/S2 is an explicit browsing override and does not alter the binding or immediately snap back. While browsing another layer, no slot receives the exact current marker; the layer switch indicates which layer contains the selected binding so the user can return in one action. Axis bindings remain visible because they are layer-independent.

Alternative considered: force the panel back to the binding layer on every render. Rejected because it would make the layer controls unusable while a bound card is selected.

Alternative considered: highlight the same physical control on every layer. Rejected because it would falsely mark a different logical button code as the selected binding.

### Separate stable selection from transient attention

The exact slot receives a stable `.current` frame for as long as it is displayed and selected. A separate ephemeral arrival class runs one short pulse only when selection moves or is restored to a different exact slot. Ordinary renders such as note edits, code visibility, or resize must not restart the pulse. `prefers-reduced-motion: reduce` disables the pulse while retaining the stable frame.

The perpetual stepped CRT animation is removed from `.current`. Conflict, locked, occupied, and uncalibrated styles remain composable with the stable frame, with current selection owning the outer frame and semantic status owning its existing inner/status indicators.

Alternative considered: retain infinite flicker but add a legend. Rejected because continuous motion still reads as live input or unresolved attention and creates needless visual noise.

### Keep serialized data compatible

`selectedRowId` continues to use the existing `uiSettings` field. Pulse cause/revision is module-only state and is not added to snapshots. Reconciliation may persist a cleared or list-mapped `selectedRowId`, but no schema or migration changes are required.

## Risks / Trade-offs

- [Clearing a filtered-out selection changes previous persistence behavior] -> Make the rule explicit, clear pending assignment state at the same time, and cover accidental hardware-click prevention in browser tests.
- [List mapping could choose the wrong semantic operation] -> Map only identical `actionKey`, never `canonicalActionKey`; otherwise clear selection.
- [Full renders could replay a one-shot pulse] -> Track the last pulsed exact slot/selection transition outside serialized state and add a no-replay assertion.
- [Manual layer browsing can temporarily hide the selected-slot frame] -> Mark the binding's layer switch distinctly and provide a direct return action without changing the binding.
- [Current plus conflict/lock selectors can overwrite each other] -> Assign the outer frame to current selection and retain status color in inner fill, occupancy bars, or status-specific selectors; verify combined states visually.
- [Initialization order can access Profile bindings before normalization] -> Run reconciliation only after workspace normalization and `activeProfile()` setup, using the same safe lookup helpers as card rendering.

## Migration Plan

1. Add failing browser-contract checks for selection visibility, exact slot/layer matching, transition reconciliation, one-shot motion, and reduced motion.
2. Introduce centralized visible-selection resolution and direct exact-slot derivation without changing binding data.
3. Route direct selection and state-transition paths through the shared reconciliation helper.
4. Replace infinite current-slot animation with stable-frame, one-shot arrival, binding-layer indicator, and reduced-motion styles.
5. Run syntax, browser smoke, workspace repair/sync, import/export, responsive, and strict OpenSpec validation.
6. Deploy through the existing Pages workflow with the normal asset cache-key bump.

Rollback is a normal implementation revert. Existing workspace JSON remains readable because the schema and binding representation do not change.

## Open Questions

None. Hidden selection is cleared, list-mode mapping uses exact `actionKey`, manual layer browsing is respected, and selected-slot motion is one-shot.
