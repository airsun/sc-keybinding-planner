## ADDED Requirements

### Requirement: New workspace starts with one complete Profile
The system SHALL initialize a workspace without saved state using one Profile with id `default`, display name `Default`, and the complete seed binding set.

#### Scenario: First launch
- **WHEN** the planner loads without a saved workspace
- **THEN** it creates only the `Default` Profile and selects it

### Requirement: Existing Profiles are preserved
The system SHALL preserve existing Profile ids, names, ordering, bindings, notes, locks, activation modes, and repair queues during schema v4 migration.

#### Scenario: Existing scenario-named Profiles are imported
- **WHEN** a v1, v2, or v3 workspace contains `Flight`, `Ground`, `Combat`, or `Mining` Profiles
- **THEN** migration keeps those Profiles unchanged rather than renaming or combining them

### Requirement: Profile remains independent from runtime context
The system SHALL treat CTX assignment as binding data inside a Profile and SHALL NOT create or switch Profiles in response to CTX selection.

#### Scenario: User changes an action CTX
- **WHEN** the user changes an action from `GLOBAL` to `Mining`
- **THEN** the active Profile remains selected and only that Profile's action context setting changes

### Requirement: Device configuration remains workspace-global
The system SHALL keep the existing `deviceConfig` outside Profile records for this change.

#### Scenario: Profile changes
- **WHEN** the user switches or creates a Profile
- **THEN** joystick ids, button codes, shift offsets, and axis codes remain unchanged
