## ADDED Requirements

### Requirement: Sync uses complete workspace snapshots
The system SHALL synchronize the complete workspace payload rather than an individual profile.

#### Scenario: Push includes complete workspace
- **WHEN** the user pushes to a configured remote sync target
- **THEN** the remote payload SHALL include all profiles, shared `deviceConfig`, active profile id, and workspace-level UI settings.

#### Scenario: Pull applies complete workspace
- **WHEN** the user pulls a valid remote workspace
- **THEN** the system SHALL replace the local workspace with the pulled workspace only after user confirmation.

### Requirement: GitHub repository sync provider
The system SHALL provide a GitHub repository file sync provider configured by owner, repository, branch, and file path.

#### Scenario: Configure GitHub provider
- **WHEN** the user saves GitHub sync settings
- **THEN** the system SHALL persist the provider type, owner, repo, branch, and path as sync configuration separate from the workspace payload.

#### Scenario: Test configured provider
- **WHEN** the user tests a GitHub sync configuration with a token
- **THEN** the system SHALL verify repository access and report whether the configured remote file is readable, missing, or inaccessible.

#### Scenario: Missing remote file is allowed for setup
- **WHEN** the configured remote file does not exist but repository access is valid
- **THEN** the system SHALL treat the sync target as valid for first push setup.

### Requirement: Token storage is ephemeral by default
The system SHALL NOT persist GitHub tokens in long-lived localStorage by default.

#### Scenario: Default token handling
- **WHEN** the user enters a GitHub token without selecting a remember option
- **THEN** the system SHALL keep the token only for the current page lifetime.

#### Scenario: Session token handling
- **WHEN** the user chooses to remember the GitHub token for the browser session
- **THEN** the system SHALL store the token only in session-scoped browser storage.

#### Scenario: Sync configuration excludes token
- **WHEN** the system saves sync provider configuration
- **THEN** the saved configuration SHALL NOT contain the GitHub token value.

### Requirement: GitHub token setup guidance
The system SHALL guide the user to create a minimally scoped GitHub token for repository file sync.

#### Scenario: Token creation link is available
- **WHEN** the user opens sync settings for GitHub
- **THEN** the system SHALL provide a GitHub fine-grained personal access token creation link with supported prefilled values for token name, expiration, and `contents=write`.

#### Scenario: Repository selection remains user controlled
- **WHEN** the user follows the token creation link
- **THEN** the system SHALL rely on GitHub for resource owner and repository selection rather than storing or requesting broader account permissions in the planner.

### Requirement: Push uses remote revision checks
The system SHALL prevent ordinary push from overwriting a remote file that changed after the last known sync revision.

#### Scenario: Push succeeds when remote revision matches
- **WHEN** the user pushes and the current remote file `sha` matches the locally stored `lastRemoteSha`
- **THEN** the system SHALL write the local workspace to the remote file and update the stored remote revision metadata.

#### Scenario: Push creates missing remote file
- **WHEN** the user pushes and the configured remote file is missing
- **THEN** the system SHALL create the remote file with the local workspace payload and store the new remote revision metadata.

#### Scenario: Push is blocked on remote conflict
- **WHEN** the user pushes and the current remote file `sha` differs from the locally stored `lastRemoteSha`
- **THEN** the system SHALL keep both local and remote data unchanged and show a conflict notice.

#### Scenario: Force push requires explicit confirmation
- **WHEN** the user chooses to force push after a conflict
- **THEN** the system SHALL require explicit confirmation before overwriting the remote file.

### Requirement: Pull validates remote workspace before overwrite
The system SHALL validate pulled remote content as a supported workspace before replacing local state.

#### Scenario: Pull valid workspace
- **WHEN** the remote file contains a valid v2 workspace or migratable v1 workspace
- **THEN** the system SHALL show an overwrite confirmation and apply the parsed workspace only after confirmation.

#### Scenario: Pull invalid workspace
- **WHEN** the remote file contains invalid JSON or unsupported workspace data
- **THEN** the system SHALL keep the local workspace unchanged and show a non-blocking error notice.

#### Scenario: Pull missing remote file
- **WHEN** the user pulls and the configured remote file is missing
- **THEN** the system SHALL keep the local workspace unchanged and show setup guidance for first push.

### Requirement: Sync remains manual and local-first
The system SHALL run online sync only from explicit user actions.

#### Scenario: Local edits do not auto push
- **WHEN** the user changes bindings, notes, locks, profile metadata, UI settings, or device codes
- **THEN** the system SHALL save locally without automatically pushing to the remote provider.

#### Scenario: Sync unavailable does not block local use
- **WHEN** the sync provider is not configured or a network request fails
- **THEN** the system SHALL preserve normal local editing, local saving, import, and export behavior.
