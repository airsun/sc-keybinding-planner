## Why

The planner currently treats `Flight`, `Ground`, `Combat`, and `Mining` as separate default Profiles even though every Profile starts with the same complete binding set. It also labels every same-slot, same-activation overlap as a conflict because bindings have no game-context scope, so legitimate runtime mode reuse cannot be represented accurately.

## What Changes

- Initialize new workspaces with one complete `Default` Profile instead of four scenario-named copies; existing Profile names and data remain unchanged.
- Add a workspace CTX catalog with explicit exclusivity groups and per-action CTX assignment inside each Profile.
- Migrate existing bindings and unbound action settings conservatively to `GLOBAL` context under schema v4.
- Classify same-slot relationships as `shared`, `context-reuse`, or `true-conflict` using canonical action identity, activation mode, and proven CTX exclusivity.
- Show the classification and CTX editor in the existing card/mini-card region; only true conflicts remain in the problem filter or destructive conflict flow.
- Add bounded responsive workspace modes for iPad Pro portrait/landscape, Sidecar, 2K, and 4K displays instead of stretching or clipping the three-column cockpit.
- Keep the current workspace-global `deviceConfig`; Device Presets are explicitly deferred.

## Capabilities

### New Capabilities
- `profile-strategy-semantics`: Profile initialization and migration semantics for complete user binding strategies rather than runtime scenarios.
- `context-aware-binding-reuse`: CTX catalog, per-action context assignment, conservative relationship classification, and inline mini-card interaction.

### Modified Capabilities

None.

## Impact

- Workspace schema advances from v3 to v4 while preserving v1-v3 imports and all existing Profile data.
- `binding-planner/workspace-core.js` gains context normalization and pure relationship classification APIs.
- `binding-planner/app.js`, `index.html`, and `styles.css` gain CTX editing and three-state relationship presentation.
- Export, import, local persistence, and GitHub sync continue to move the whole workspace JSON.
- Existing test and browser smoke scripts gain migration, classification, filtering, and inline editing coverage.
- Responsive smoke coverage uses explicit `1024x1366`, `1366x1024`, `2560x1440`, and `3840x2160` viewports in addition to the phone regression.
