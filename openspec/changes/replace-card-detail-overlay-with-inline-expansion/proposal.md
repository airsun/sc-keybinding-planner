## Why

The compact operation list and floating detail overlay replaced the planner's established direct card workflow and made card editing less spatially grounded. The list needs to return to its pre-MODE/CTX card layout while advanced MODE, CTX, relationship, and conflict editing remains available through an inline expansion anchored to the operation being edited.

## What Changes

- Remove compact operation summaries and the same-width floating detail overlay introduced by `add-card-detail-overlay`.
- Restore the original three-column operation card layout and direct hand, layer, slot, clear, lock, note, and description interactions.
- Add one disclosure button to each card; only the selected card may expand inline.
- Move MODE, CTX, shared/context-reuse/true-conflict classification, and relationship actions into the inline detail.
- Add filtered, non-wrapping Previous/Next navigation with directional collapse/expand motion, a thin selection frame, target scrolling, and transition locking.
- Keep expansion and motion state ephemeral with no workspace schema, Profile, import/export, or online-sync changes.

## Capabilities

### New Capabilities
- `operation-card-inline-detail`: Historical direct-operation cards with one in-flow advanced editor, filtered directional navigation, and responsive selection feedback.

### Modified Capabilities

None. This correction supersedes the unarchived `operation-card-detail-overlay` change rather than changing an archived main capability.

## Impact

- `binding-planner/index.html`: removes overlay mount points and restores the direct list structure.
- `binding-planner/app.js`: restores normal card composition and adds ephemeral inline-detail state, advanced editor composition, and directional navigation.
- `binding-planner/styles.css`: removes compact/overlay styling and adds in-flow detail, thin selection frame, and reduced-motion behavior.
- `scripts/verify-sync-browser-smoke.mjs`: replaces overlay contracts with historical-card, inline-detail, navigation, transition, persistence, and responsive assertions.
- Workspace schema v4 and all existing data/sync logic remain unchanged.
