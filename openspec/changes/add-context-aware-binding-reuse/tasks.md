## 1. Core Regression Coverage

- [x] 1.1 Add failing tests for schema v4 migration and one-Default-Profile initialization
- [x] 1.2 Add failing tests for context normalization and conservative set exclusivity
- [x] 1.3 Add failing tests for shared, activation coexistence, CTX reuse, and true-conflict classification

## 2. Workspace Core

- [x] 2.1 Add the built-in CTX catalog and schema v1-v4 migration
- [x] 2.2 Normalize binding `contextIds` and Profile `actionContexts`
- [x] 2.3 Expose pure context-exclusivity and binding-relationship APIs

## 3. Application Model

- [x] 3.1 Initialize only one `Default` Profile for new workspaces
- [x] 3.2 Preserve CTX assignments through Profile copy, import, export, local persistence, repair, and GitHub sync
- [x] 3.3 Replace raw occupant-count conflict checks with relationship classification
- [x] 3.4 Restrict lock blocking, replacement, problem filtering, and unbind-other behavior to true conflicts

## 4. Card Interaction

- [x] 4.1 Add a compact multi-select CTX popover beside MODE for every operation
- [x] 4.2 Generalize the conflict mini-card to shared, CTX reuse, and true-conflict states
- [x] 4.3 Show related action and CTX evidence with state-appropriate commands
- [x] 4.4 Keep desktop and mobile cards free of overlap and horizontal overflow

## 5. Migration And Verification

- [x] 5.1 Extend workspace repair/export verification for schema v4 and GLOBAL migration
- [x] 5.2 Extend browser smoke for Default Profile, CTX editing, three-state mini-cards, and problem filtering
- [x] 5.3 Run core, sync, repaired-export, browser, syntax, and strict OpenSpec validation
- [x] 5.4 Update user documentation to distinguish Profile, MODE, and CTX
- [ ] 5.5 Commit, push main, and verify the GitHub Pages deployment workflow
