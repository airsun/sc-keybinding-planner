## 1. Workspace Data Model

- [x] 1.1 Add v2 workspace constructors for default `Flight`, `Ground`, `Combat`, and `Mining` profiles.
- [x] 1.2 Add helpers to get and update the active profile and active profile bindings.
- [x] 1.3 Update localStorage load/save to persist `schemaVersion: 2`, `activeProfileId`, `profiles`, shared `deviceConfig`, and workspace-level `uiSettings`.
- [x] 1.4 Implement v1 localStorage migration into a v2 workspace while preserving bindings, locks, notes, device config, profile name, and compatible UI settings.

## 2. Binding Behavior

- [x] 2.1 Replace direct reads and writes of `state.bindings` with active-profile binding helpers.
- [x] 2.2 Ensure occupancy, conflicts, lock checks, clear binding, notes, and card rendering use only the active profile's bindings.
- [x] 2.3 Ensure joystick code edits continue to update shared `deviceConfig` and are visible across profile switches.
- [x] 2.4 Ensure profile switching refreshes binding cards and both joystick panels without resetting list/filter/code/layer UI state.

## 3. Profile UI

- [x] 3.1 Add compact topbar controls for active profile selection.
- [x] 3.2 Add duplicate-current-profile creation with generated unique ids and default copied bindings, locks, and notes.
- [x] 3.3 Add profile rename behavior without changing profile ids or binding data.
- [x] 3.4 Add profile deletion with last-profile protection and active-profile fallback.
- [x] 3.5 Use toast feedback for profile create, rename, delete, blocked delete, and global device-code reminders.

## 4. Import / Export

- [x] 4.1 Update export to download a whole-workspace JSON file containing all profiles and shared device config.
- [x] 4.2 Update import validation to accept v2 workspaces and v1 single-profile JSON.
- [x] 4.3 Add toast-based overwrite confirmation before replacing the current workspace.
- [x] 4.4 Ensure imported v1 JSON becomes a v2 workspace with one profile and preserved device config, bindings, locks, notes, and compatible UI settings.

## 5. Verification

- [x] 5.1 Add or update lightweight validation for v2 workspace shape, default profiles, and v1 migration.
- [x] 5.2 Verify `binding-planner/app.js` and `binding-planner/data.js` pass JavaScript syntax checks.
- [x] 5.3 Manually smoke-test switching profiles, duplicate, rename, delete, import/export, lock isolation, and shared device-code behavior in the browser.
