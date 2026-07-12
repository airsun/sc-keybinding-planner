## ADDED Requirements

### Requirement: Workspace stores multiple profiles
The system SHALL persist a workspace containing an active profile id, a shared device configuration, workspace-level UI settings, and a map of named binding profiles.

#### Scenario: New workspace is initialized
- **WHEN** the app loads without saved local state
- **THEN** it SHALL create a workspace with `schemaVersion` 2, a shared `deviceConfig`, workspace-level `uiSettings`, and multiple profiles.

#### Scenario: Workspace is saved
- **WHEN** the user changes bindings, notes, locks, profile selection, profile metadata, UI settings, or device codes
- **THEN** the system SHALL persist the updated workspace to localStorage.

### Requirement: Default profiles are available
The system SHALL initialize new workspaces with default `Flight`, `Ground`, `Combat`, and `Mining` profiles.

#### Scenario: Default profile set is created
- **WHEN** a new workspace is generated from seed data
- **THEN** it SHALL include profiles for `Flight`, `Ground`, `Combat`, and `Mining`.

#### Scenario: Default active profile is selected
- **WHEN** a new workspace is generated
- **THEN** the active profile SHALL be `Flight` unless seed data specifies another valid active profile.

### Requirement: Profile-specific binding data
The system SHALL store bindings, lock state, and binding notes inside each profile.

#### Scenario: Binding differs between profiles
- **WHEN** the user binds an action in one profile and switches to another profile
- **THEN** the other profile SHALL show its own binding for that action, not the previous profile's binding.

#### Scenario: Lock is profile-scoped
- **WHEN** a binding is locked in one profile
- **THEN** that lock SHALL prevent edits only within that profile and SHALL NOT prevent another profile from binding the same action or physical control differently.

#### Scenario: Note is profile-scoped
- **WHEN** the user edits a binding note in one profile
- **THEN** that note SHALL appear only for that profile's binding.

### Requirement: Device configuration is shared globally
The system SHALL keep joystick device ids, button codes, shift offsets, and axis codes in shared workspace-level `deviceConfig`.

#### Scenario: Code edit affects every profile
- **WHEN** the user edits a control code in one profile
- **THEN** the updated code SHALL be visible when switching to every other profile.

#### Scenario: Profile switch preserves hardware mapping
- **WHEN** the user switches profiles
- **THEN** the system SHALL NOT replace or reset `deviceConfig`.

### Requirement: Profile management controls
The system SHALL provide compact controls to switch profiles, duplicate the current profile, rename profiles, and delete profiles.

#### Scenario: Switch profile
- **WHEN** the user selects a different profile
- **THEN** the app SHALL update the active profile, refresh the binding cards, and refresh both joystick occupancy panels.

#### Scenario: Duplicate current profile
- **WHEN** the user creates a new profile
- **THEN** the system SHALL duplicate the current profile's bindings, locks, and notes into the new profile by default.

#### Scenario: Rename profile
- **WHEN** the user renames a profile
- **THEN** the system SHALL update that profile's display name without changing its id, bindings, locks, or notes.

#### Scenario: Delete profile
- **WHEN** the user deletes a profile and more than one profile exists
- **THEN** the system SHALL remove that profile and switch to another valid profile if the deleted profile was active.

#### Scenario: Last profile cannot be deleted
- **WHEN** the user attempts to delete the only remaining profile
- **THEN** the system SHALL keep the profile and show a non-blocking toast notice.

### Requirement: Workspace import and export
The system SHALL export and import a single JSON file representing the whole workspace.

#### Scenario: Export workspace
- **WHEN** the user exports JSON
- **THEN** the downloaded file SHALL include all profiles, shared `deviceConfig`, active profile id, and workspace-level UI settings.

#### Scenario: Import v2 workspace
- **WHEN** the user imports a valid v2 workspace JSON
- **THEN** the system SHALL request overwrite confirmation through a toast action and, when confirmed, replace the current workspace.

#### Scenario: Import invalid workspace
- **WHEN** the user imports invalid JSON or JSON missing required workspace data
- **THEN** the system SHALL keep the current workspace and show a non-blocking error toast.

### Requirement: Single-profile migration
The system SHALL migrate existing v1 single-profile saved data and imported v1 JSON into a v2 workspace.

#### Scenario: Existing localStorage v1 state
- **WHEN** the app loads a saved object with `schemaVersion` 1
- **THEN** it SHALL create a v2 workspace preserving the v1 `deviceConfig`, `bindings`, `profileName`, and compatible `uiSettings`.

#### Scenario: Imported v1 JSON
- **WHEN** the user imports a valid v1 profile JSON
- **THEN** the system SHALL convert it into a v2 workspace and place the imported bindings into one profile.
