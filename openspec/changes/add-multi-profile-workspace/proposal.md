## Why

The planner currently stores one binding profile per browser state, which makes it awkward to keep separate flight, ground, combat, and mining configurations without repeatedly exporting and importing JSON files. Users need profile switching inside the same single-page workspace while preserving the existing local-first, one-file portability model.

## What Changes

- Introduce a multi-profile workspace data model with an active profile and multiple named profiles.
- Initialize new workspaces with default `Flight`, `Ground`, `Combat`, and `Mining` profiles.
- Keep `deviceConfig` global across profiles so joystick button codes, shift offsets, axis codes, and device identifiers remain one shared hardware layer.
- Store bindings, locks, and notes per profile so each profile can diverge independently.
- Add profile switching, duplicate-from-current creation, rename, and delete affordances in the compact topbar style.
- Export and import the whole workspace as one JSON file.
- Migrate existing v1 single-profile saved data and imported JSON into a v2 workspace with one default profile.
- Require import overwrite confirmation through the existing toast pattern, not native browser dialogs.

## Capabilities

### New Capabilities
- `multi-profile-workspace`: Local workspace support for multiple binding profiles sharing one hardware/device configuration.

### Modified Capabilities

None.

## Impact

- Affected app code: `binding-planner/app.js`, `binding-planner/index.html`, `binding-planner/styles.css`, `binding-planner/data.js`.
- Affected persistence: localStorage schema changes from single-profile v1 state to multi-profile v2 workspace.
- Affected JSON IO: export/import becomes whole-workspace oriented while retaining v1 import migration.
- No new runtime dependencies, server APIs, accounts, or network storage.
