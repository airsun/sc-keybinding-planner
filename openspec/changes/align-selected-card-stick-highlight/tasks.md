## 1. Browser Contract

- [x] 1.1 Add failing browser observations for exact selected-card-to-slot matching, unbound selection, and no-visible-selection behavior
- [x] 1.2 Add list-mode exact-`actionKey` mapping and search/status-filter hidden-selection clearing assertions
- [x] 1.3 Add Profile, import, pull, repair reveal, undo, and inline-detail navigation synchronization assertions
- [x] 1.4 Add manual layer browsing, binding-layer return indicator, axis independence, one-shot pulse, no-replay, and reduced-motion assertions

## 2. Selection Reconciliation

- [x] 2.1 Add a visible-selected-row resolver based on the same list, filter, and search sequence used by card rendering
- [x] 2.2 Centralize selection, exact-action list mapping, pending-target clearing, and bound hand/layer reveal in shared helpers
- [x] 2.3 Reconcile selection before stick panels and cards render so hidden rows cannot remain actionable
- [x] 2.4 Route card focus, inline navigation, Profile changes, import, pull, repair reveal, conflict reveal, and undo through the shared selection path

## 3. Exact Current-Slot Derivation

- [x] 3.1 Remove current-selection inference from occupancy status and compare rendered slots directly with the visible selected binding through `sameSlot()`
- [x] 3.2 Preserve exact shared-`actionKey`, axis, occupied, locked, conflict, context-reuse, shared, and uncalibrated semantics
- [x] 3.3 Add a binding-layer indicator when manual browsing hides a selected layer-bound slot without mutating the binding
- [x] 3.4 Ensure hardware-slot activation warns and performs no mutation when selection has been cleared

## 4. Stable Highlight And Motion

- [x] 4.1 Replace perpetual `.slot.current` CRT flicker with a stable selected-slot outer frame
- [x] 4.2 Add module-only selection-arrival state and a brief one-shot pulse that does not restart on unrelated renders
- [x] 4.3 Compose current selection with locked, conflict, occupied, shared/context-reuse, and uncalibrated status styling
- [x] 4.4 Disable the one-shot pulse under `prefers-reduced-motion: reduce` while retaining the stable frame

## 5. Compatibility And Verification

- [x] 5.1 Verify pulse and marker state are absent from local persistence, schema-v4 export/import, and online-sync payloads
- [x] 5.2 Run JavaScript syntax, workspace repair, sync core, v4 candidate, browser smoke, and strict OpenSpec checks
- [x] 5.3 Inspect selected, unbound, cross-layer, locked/conflict, Sidecar, phone, 2K, and reduced-motion visual states
- [x] 5.4 Bump planner asset cache keys and verify the existing GitHub Pages build contract
