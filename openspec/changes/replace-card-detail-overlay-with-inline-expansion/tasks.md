## 1. Browser Contract

- [x] 1.1 Replace compact-card and floating-overlay observations with historical-card and inline-detail observations
- [x] 1.2 Add disclosure, single-expansion, filtered boundary, selection, stick-highlight, and target-scroll interactions
- [x] 1.3 Add directional transition, rapid-input lock, reduced-motion, and ephemeral-state assertions
- [x] 1.4 Run the updated browser smoke and confirm it fails against the floating-overlay implementation

## 2. Historical Card Restoration

- [x] 2.1 Remove card-stage and floating-overlay markup and bump planner asset cache keys
- [x] 2.2 Restore the pre-MODE/CTX three-column card composition and direct binding controls
- [x] 2.3 Add a disclosure button without changing the base card's independent control behavior
- [x] 2.4 Remove compact-card and floating-overlay styling

## 3. Inline Advanced Detail

- [x] 3.1 Add ephemeral expanded-row, transition-direction, transition-lock, and pending-scroll state
- [x] 3.2 Render MODE, CTX, relationship classification, and relationship actions inside one full-width card detail
- [x] 3.3 Reconcile expansion after filter, search, list mode, Profile, import, and pull changes
- [x] 3.4 Keep all inline-detail state out of workspace persistence, export, import, and sync payloads

## 4. Directional Navigation And Motion

- [x] 4.1 Implement filtered non-wrapping Previous/Next navigation and boundary controls
- [x] 4.2 Animate outgoing and incoming detail in the correct vertical direction with rapid-input locking
- [x] 4.3 Add a thin selected-card frame and reduced-motion behavior
- [x] 4.4 Center the target card and synchronize selected row, current slot, and stick highlight

## 5. Responsive Verification

- [x] 5.1 Update responsive geometry assertions for historical and expanded cards
- [x] 5.2 Verify phone, iPad portrait, Sidecar/iPad landscape, 2K, and 4K without horizontal overflow or overlap
- [x] 5.3 Inspect Sidecar collapsed/expanded and 4K expanded screenshots

## 6. Regression And Delivery

- [x] 6.1 Run workspace repair, sync, v4 candidate, syntax, browser, strict OpenSpec, and diff checks
- [ ] 6.2 Commit and push the scoped implementation to main
- [ ] 6.3 Verify the GitHub Pages workflow and published planner asset versions
