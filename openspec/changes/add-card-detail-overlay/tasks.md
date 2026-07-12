## 1. Detail Contract Tests

- [x] 1.1 Add browser smoke assertions for compact rows and absence of inline editing controls
- [x] 1.2 Add browser smoke interactions for opening and closing the same-width detail overlay
- [x] 1.3 Add filter-aware Previous/Next, selected-row, stick-highlight, and underlying-scroll assertions
- [x] 1.4 Run the new smoke assertions and confirm they fail against the current UI

## 2. Compact List And Detail Overlay

- [x] 2.1 Add the persistent card-stage, list scroll layer, and detail overlay mount point
- [x] 2.2 Extract one visible-row sequence shared by list rendering and detail navigation
- [x] 2.3 Replace full inline cards with compact status, MODE/CTX, and slot summaries
- [x] 2.4 Compose the complete existing editing workflow inside the detail overlay

## 3. Navigation And State Synchronization

- [x] 3.1 Implement open, close, Previous, and Next detail commands with non-wrapping boundaries
- [x] 3.2 Synchronize detail selection with stick highlights and centered underlying-row scroll
- [x] 3.3 Reconcile detail selection after list mode, filter, search, Profile, import, and pull changes
- [x] 3.4 Keep detail state out of workspace persistence, export, and sync payloads

## 4. Responsive Styling

- [x] 4.1 Add restrained compact-row geometry across iPad, Sidecar, 2K, and 4K
- [x] 4.2 Add same-width overlay geometry with internal scrolling and no center-column shift
- [x] 4.3 Add at least 44px coarse-pointer navigation targets

## 5. Verification And Delivery

- [x] 5.1 Run workspace repair, sync core, candidate workspace, syntax, and strict OpenSpec checks
- [x] 5.2 Run browser behavior and full viewport matrix smoke
- [x] 5.3 Inspect iPad landscape/Sidecar and 4K screenshots for density, overlap, and scroll synchronization
- [x] 5.4 Commit and push main, then verify the GitHub Pages workflow and published asset version
