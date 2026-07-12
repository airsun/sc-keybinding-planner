## Why

The planner now supports multiple binding profiles inside one local workspace, but moving that workspace between browsers or devices still requires manual JSON export and import. Users need a controlled online sync path that preserves the local-first model while reducing copy-file friction.

## What Changes

- Add manual online sync for the complete v2 workspace snapshot, including all profiles, shared `deviceConfig`, active profile id, and workspace-level UI settings.
- Introduce a sync provider boundary with a first implementation backed by a GitHub repository file.
- Add sync settings for GitHub owner, repo, branch, path, and token entry.
- Store provider configuration and remote revision metadata locally, but do not persist GitHub tokens in long-lived localStorage by default.
- Add manual pull, push, force push, and test connection flows with confirmation before destructive overwrite.
- Detect remote revision conflicts using the GitHub file `sha` and block ordinary push when the remote changed after the last known sync.
- Allow first push to create the remote workspace file when it does not exist.
- Leave auto sync, field-level merge, multi-user collaboration, OAuth app flows, and cloud server implementation out of scope for this change.

## Capabilities

### New Capabilities
- `online-workspace-sync`: Manual remote synchronization for the complete planner workspace through a provider abstraction, initially using a GitHub repository file.

### Modified Capabilities
None.

## Impact

- Affected app code: `binding-planner/app.js`, `binding-planner/index.html`, `binding-planner/styles.css`, and a possible new sync provider module.
- Affected persistence: adds sync configuration and last remote revision metadata to browser storage; existing workspace schema remains compatible.
- Affected network/API surface: browser calls to GitHub REST Contents API for one configured repository file.
- Affected security posture: user-provided GitHub fine-grained personal access tokens are required for GitHub sync; tokens are ephemeral by default.
- No new backend service, account system, realtime channel, or automatic background sync.
