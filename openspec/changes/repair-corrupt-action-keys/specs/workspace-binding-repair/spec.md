## ADDED Requirements

### Requirement: Catalog action identities are isolated
The system SHALL reject numeric placeholder values as runtime action identities and SHALL assign deterministic distinct keys to unrelated affected operations while preserving valid shared action identities.

#### Scenario: Unrelated rows contain the same numeric placeholder
- **WHEN** two semantically different catalog rows contain `1372` as their action identity
- **THEN** the normalized rows have distinct non-numeric action keys and assigning one row does not bind the other

#### Scenario: Context rows intentionally reuse a valid action
- **WHEN** multiple rows refer to the same valid game action identifier
- **THEN** the normalized rows retain the same canonical action key

### Requirement: Workspace migration preserves valid configuration
The system SHALL migrate v1 and v2 workspaces to schema v3 without changing profile identity, profile metadata, device configuration, UI settings, or valid binding payload fields.

#### Scenario: V2 workspace contains valid profiles and bindings
- **WHEN** the workspace is imported, loaded locally, or pulled from remote storage
- **THEN** every valid profile and binding is present in the v3 workspace with an explicit activation mode

#### Scenario: Migration runs repeatedly
- **WHEN** an already migrated v3 workspace is normalized again
- **THEN** active bindings and pending repair counts remain unchanged

### Requirement: Ambiguous bindings are quarantined per profile
The system SHALL remove a corrupt numeric-key binding from active lookup and preserve its complete payload in a repair queue belonging to the same profile.

#### Scenario: One profile contains bindings 1372
- **WHEN** a v2 workspace contains `bindings["1372"]` in one profile
- **THEN** only that profile receives one repair queue item and no active binding retains key `1372`

#### Scenario: Other profiles do not contain the corrupt key
- **WHEN** sibling profiles contain only valid bindings
- **THEN** those profiles receive no repair item and their bindings remain unchanged apart from schema defaults

### Requirement: User explicitly resolves quarantined bindings
The system SHALL let the user select one real operation and activation mode for each repair queue item before converting it into an active binding.

#### Scenario: Target operation is unbound
- **WHEN** the user resolves a queued item to an unbound operation
- **THEN** one active binding is created with the preserved slot and metadata and the queue item is removed

#### Scenario: Target operation is already bound
- **WHEN** the user attempts to resolve a queued item to an already bound operation
- **THEN** the existing binding is not replaced until the user explicitly confirms replacement

### Requirement: Conflict identity includes activation mode
The system SHALL define binding conflict identity as the physical slot and layer plus activation mode, where `DEFAULT` is an explicit mode.

#### Scenario: Same slot and same mode
- **WHEN** two operations use the same physical slot, layer, and activation mode
- **THEN** the system marks them as a conflict

#### Scenario: Same slot and different modes
- **WHEN** two operations use the same physical slot and layer with different activation modes
- **THEN** the system treats them as valid reuse rather than a conflict

### Requirement: Export repair is non-destructive
The system SHALL provide a deterministic repair command that reads an existing workspace export and writes a separate schema v3 file using the same migration rules as the application.

#### Scenario: Repair the supplied export
- **WHEN** the v2 export is passed to the repair command
- **THEN** the output contains the same four profiles, no active `1372` key, and one preserved repair item in the `Flight` profile
