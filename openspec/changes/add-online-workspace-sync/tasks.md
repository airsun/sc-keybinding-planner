## 1. Sync State and Workspace Boundaries

- [x] 1.1 Add sync configuration storage separate from the existing workspace storage key.
- [x] 1.2 Add helpers to build a complete workspace snapshot for sync without embedding sync config or token values.
- [x] 1.3 Add helpers to apply a pulled workspace through the existing workspace parser and selected-row fallback logic.
- [x] 1.4 Add in-memory token handling and optional sessionStorage token persistence.

## 2. GitHub Provider

- [x] 2.1 Add a sync provider boundary with `test`, `read`, and `write` operations.
- [x] 2.2 Implement GitHub repo-file read using the REST Contents API and remote file `sha`.
- [x] 2.3 Implement GitHub repo-file create and update using Base64 workspace JSON payloads.
- [x] 2.4 Map GitHub response states into app-level outcomes: readable, missing, inaccessible, conflict, and network failure.
- [x] 2.5 Add remote revision checks so ordinary push is blocked when the remote `sha` differs from `lastRemoteSha`.

## 3. Sync UI

- [x] 3.1 Add a compact topbar sync control that opens a sync dialog without crowding existing profile controls.
- [x] 3.2 Add sync settings fields for provider, owner, repo, branch, path, token, and session token remember option.
- [x] 3.3 Add a fine-grained GitHub token creation link with supported prefilled name, expiration, and `contents=write`.
- [x] 3.4 Add test connection, pull, push, and force push actions with clear status text.
- [x] 3.5 Use existing toast/dialog patterns for overwrite confirmation, force push confirmation, success, and error feedback.

## 4. Sync Flows

- [x] 4.1 Implement test connection for valid repository access, missing file setup state, inaccessible target, and invalid token.
- [x] 4.2 Implement pull with remote JSON validation and confirmation before local overwrite.
- [x] 4.3 Implement ordinary push success for matching remote revision and first-push remote file creation.
- [x] 4.4 Implement conflict handling that keeps local and remote data unchanged when remote revision changed.
- [x] 4.5 Implement force push with explicit confirmation and remote revision metadata update after success.
- [x] 4.6 Ensure failed network/API operations leave local workspace and sync metadata unchanged unless the failure response proves a new safe metadata state.

## 5. Verification

- [x] 5.1 Add or update lightweight validation coverage for sync config persistence, token storage boundaries, provider response mapping, and conflict detection.
- [x] 5.2 Verify JavaScript syntax for app and any new sync module.
- [x] 5.3 Manually smoke-test sync dialog setup, missing-file first push, pull overwrite confirmation, ordinary push conflict blocking, force push confirmation, and local editing while sync is unconfigured.
- [x] 5.4 Confirm existing import/export and multi-profile switching still work after sync UI is added.
