## Why

The operation cards currently expose summary, configuration, relationship evidence, and destructive controls at the same time. In an iPad Pro Sidecar-sized center column this turns the list into a dense sequence of forms, making scanning and repeated binding work slow even though the overall three-column workspace fits.

## What Changes

- Make the default operation list compact and summary-first across all viewport sizes.
- Add a same-width detail overlay above the existing list viewport while keeping the list DOM and scroll position underneath.
- Move MODE, CTX, description, relationship evidence, hand/layer selection, slot, note, lock, and clear controls into the detail overlay.
- Add previous/next navigation based on the current list mode, search query, and status filter.
- Synchronize detail navigation with selected-row state, stick highlights, and the underlying list scroll position.
- Keep detail-open state local to the current browser session rather than exporting or syncing it.

## Capabilities

### New Capabilities
- `operation-card-detail-overlay`: Compact operation-list summaries plus a same-width detail overlay with filter-aware navigation and synchronized selection/scroll behavior.

### Modified Capabilities

None.

## Impact

- `binding-planner/app.js`: shared visible-row derivation, compact-card rendering, detail overlay lifecycle, and previous/next navigation.
- `binding-planner/styles.css`: restrained row layout, overlay geometry, detail controls, and iPad/coarse-pointer sizing.
- `binding-planner/index.html`: detail-overlay mount point and asset cache keys.
- `scripts/verify-sync-browser-smoke.mjs`: compact/detail behavior, navigation, scroll synchronization, and responsive geometry assertions.
- Workspace schema, Profile data, CTX semantics, import/export, and GitHub sync payloads are unchanged.
