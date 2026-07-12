## Why

The generated action catalog contains numeric placeholder value `1372` as the action identity for 89 unrelated game operations, so assigning any one of them mutates every other card that shares the key. Existing workspace exports may already contain an ambiguous `bindings["1372"]` value and must be repaired without losing valid profiles or silently assigning that value to the wrong operation.

## What Changes

- Normalize catalog rows before use so numeric placeholder identifiers cannot become binding keys or activation modes.
- Introduce workspace schema v3 with an explicit `DEFAULT` activation mode for existing bindings.
- Migrate ambiguous `1372` bindings into a per-profile repair queue while preserving their complete binding payload.
- Provide a repair workflow that lets the user assign each quarantined binding to one real operation and activation mode.
- Make conflict identity include both the physical slot/layer and activation mode.
- Add a deterministic CLI repair path for existing exported workspace JSON files.

## Capabilities

### New Capabilities
- `workspace-binding-repair`: Catalog identity validation, v3 workspace migration, ambiguous-binding quarantine and resolution, and activation-mode-aware conflict identity.

### Modified Capabilities

None.

## Impact

- `binding-planner/data.js` is treated as untrusted generated input and normalized before application use.
- `binding-planner/app.js` and `binding-planner/index.html` gain schema v3 migration and repair interactions.
- Exported and synchronized workspaces use schema v3; v1 and v2 imports remain supported.
- Existing valid profile metadata, device settings, UI settings, and non-corrupt bindings remain intact.
- New verification and repair scripts cover the real exported workspace supplied for this incident.
