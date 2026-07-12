## Context

The current planner is a static local-first app. It persists one v2 workspace in `localStorage` and exports/imports that same workspace as a single JSON file. A workspace contains all binding profiles plus shared hardware configuration, so sync must operate on the whole workspace snapshot rather than an individual profile.

The first online sync target should avoid introducing an account system or backend service. GitHub repository contents fit that shape: a user can create a fine-grained personal access token scoped to one repository with `contents:write`, and the file API exposes a `sha` that can serve as a remote revision for conflict detection.

## Goals / Non-Goals

**Goals:**
- Add manual push and pull for the complete v2 workspace snapshot.
- Keep the planner usable offline and fully functional without sync configuration.
- Use a provider boundary so GitHub repo-file sync is the first provider, while a cloud API provider can be added later without changing workspace semantics.
- Keep GitHub tokens ephemeral by default and avoid long-lived token persistence in `localStorage`.
- Detect remote changes and prevent ordinary push from overwriting a newer remote file.
- Allow first push to create the configured remote file if it does not exist.

**Non-Goals:**
- No auto sync, background polling, realtime collaboration, or multi-user editing.
- No field-level merge between local and remote workspaces.
- No OAuth app, GitHub App, or device-flow authentication in the first version.
- No cloud server provider implementation in the first version.
- No encryption layer for the remote JSON in this change.

## Decisions

### Sync complete workspace snapshots

Remote sync reads and writes the same v2 workspace JSON used by export/import. It includes every profile, shared `deviceConfig`, `activeProfileId`, and workspace-level `uiSettings`.

Rationale: profile bindings depend on shared hardware mapping. Syncing only one profile would let bindings drift from button codes, shift offsets, and device identifiers on another device.

Alternative considered: per-profile remote sync. Rejected because it would require hardware mapping reconciliation and merge semantics that the current app does not have.

### Keep sync connection state outside the workspace

Add a separate sync configuration storage record, for example:

```js
{
  provider: "github-repo",
  owner: "user",
  repo: "repo",
  branch: "main",
  path: "sc-dual-vkb-binding-workspace.json",
  lastRemoteSha: "abc123",
  lastSyncAt: "2026-07-05T16:00:00.000Z"
}
```

The remote file and exported JSON remain workspace payloads, not sync configuration bundles.

Rationale: a workspace should describe the binding plan, not the user's private sync endpoint. This keeps export/import portable and prevents accidental sharing of remote config.

Alternative considered: embedding sync metadata in the workspace. Rejected because importing someone else's workspace could silently adopt their remote path or stale revision.

### Use a provider interface with GitHub repo-file implementation

Define a small adapter boundary:

```js
provider.test(config, token)
provider.read(config, token) -> { workspace, remoteSha, notFound }
provider.write(config, token, workspace, expectedSha?) -> { remoteSha }
```

The first provider calls GitHub REST Contents API:
- `GET /repos/{owner}/{repo}/contents/{path}?ref={branch}` to read content and current `sha`.
- `PUT /repos/{owner}/{repo}/contents/{path}` to create or update the file.
- Include `sha` on update; omit it only when creating a missing file.

Rationale: GitHub's file `sha` is enough for optimistic conflict detection. A provider boundary avoids baking GitHub-specific response shapes into UI flows.

Alternative considered: Gist provider first. Rejected because Gist write access is a user-level permission, while repo-file sync can be scoped to one selected repository.

### Token handling is explicit and local

The app SHALL ask the user for a GitHub token in sync settings. Default behavior stores the token only in JavaScript memory. A checkbox may store it in `sessionStorage` for the browser session. The app SHALL NOT store the token in long-lived `localStorage`.

The settings dialog should provide a token creation link to GitHub's fine-grained PAT page with prefilled values where supported:
- name: `SC VKB Workspace Sync`
- expiration: suggested finite lifetime, such as 90 or 180 days
- permission: `contents=write`

The user still selects the resource owner and exact repository on GitHub.

Rationale: browser storage is not a secure credential vault. The feature should make the credential boundary visible rather than hiding a long-lived PAT in local app state.

Alternative considered: OAuth/device flow. Rejected for the first version because it requires app registration and introduces a different auth surface before the sync model is proven.

### Manual sync with revision gates

The UI offers:
- `Test Connection`: verify token and repository/path access.
- `Pull`: fetch remote workspace, validate it with the existing workspace parser, and confirm before replacing local state.
- `Push`: read current remote metadata, then write only if the remote `sha` matches `lastRemoteSha` or the file is missing.
- `Force Push`: overwrite after explicit confirmation when the remote changed.

Rationale: manual commands match the current import/export mental model. Revision gates prevent accidental cross-device overwrites without requiring automatic merge.

Alternative considered: auto sync on every save. Rejected because local edits are frequent and the current app has no conflict resolution UX.

### Treat missing remote file as setup state

If the remote file is missing, `Test Connection` can still succeed for repository access, and first `Push` may create the file. `Pull` from a missing file should show a non-destructive notice.

Rationale: requiring users to pre-create a JSON file adds setup friction and does not improve safety.

## Risks / Trade-offs

- **Risk: Token exposure through browser storage or injected scripts.** -> Mitigation: keep tokens out of long-lived localStorage, show token storage scope clearly, and avoid third-party script dependencies.
- **Risk: Remote overwrite loses edits from another device.** -> Mitigation: compare `lastRemoteSha` with current remote `sha`, block ordinary push on mismatch, and require explicit force push.
- **Risk: GitHub API failures or rate limits interrupt sync.** -> Mitigation: keep local workspace as source of truth until a sync operation succeeds and show actionable toast/dialog errors.
- **Risk: Remote JSON may be invalid or from an older schema.** -> Mitigation: reuse the existing workspace parser and v1 migration path before applying pulled data.
- **Risk: Sync controls crowd the topbar.** -> Mitigation: add one compact sync icon/button that opens a dialog; keep detailed controls inside the dialog.

## Migration Plan

1. Add sync configuration storage separate from the workspace storage key.
2. Add a GitHub repo sync provider and small sync coordinator around workspace snapshot read/write.
3. Add a sync settings dialog and compact topbar entry point.
4. Add manual test, pull, push, and force push flows.
5. Preserve current export/import behavior unchanged.
6. Rollback by removing sync configuration; local workspace data remains under the existing storage key.

## Open Questions

None. First push should be allowed to create the configured remote workspace file.
