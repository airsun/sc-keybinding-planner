## ADDED Requirements

### Requirement: Workspace provides an explicit CTX catalog
The system SHALL persist a context catalog whose entries have stable ids, display labels, and optional exclusive-group ids.

#### Scenario: Workspace lacks a context catalog
- **WHEN** a v1, v2, or v3 workspace is migrated
- **THEN** schema v4 adds the built-in CTX catalog without changing `deviceConfig` or Profile identity

### Requirement: Every action has a CTX assignment
The system SHALL expose a CTX setting for bound and unbound actions inside each Profile, defaulting to `GLOBAL` when no explicit assignment exists.

#### Scenario: Existing binding is migrated
- **WHEN** a binding has no `contextIds`
- **THEN** migration stores `contextIds: ["global"]`

#### Scenario: Unbound action CTX is selected
- **WHEN** the user selects CTX values before assigning a physical slot
- **THEN** the Profile stores those values and copies them to the binding when the action is assigned

### Requirement: CTX exclusivity is conservative
The system SHALL consider two context sets mutually exclusive only when every cross-set pair belongs to the same explicit exclusive group and uses different context ids.

#### Scenario: Mining and Salvage share one exclusive group
- **WHEN** two different actions use the same slot and activation mode with CTX `Mining` and `Salvage`
- **THEN** the relationship is `context-reuse`

#### Scenario: GLOBAL overlaps a specific context
- **WHEN** one action uses `GLOBAL` and another uses `Mining`
- **THEN** the relationship remains `true-conflict`

#### Scenario: Context evidence is incomplete
- **WHEN** the selected context sets overlap, use different exclusive groups, or contain unknown ids
- **THEN** the relationship remains `true-conflict`

### Requirement: Canonical actions are shared
The system SHALL treat scenario rows with the same canonical action key as references to one shared binding rather than separate occupants.

#### Scenario: Same action appears in multiple chapters
- **WHEN** two scenario rows use the same canonical action key
- **THEN** both rows show the same binding and the relationship mini-card identifies the action as shared

### Requirement: Activation modes coexist independently
The system SHALL allow different actions to use the same physical slot and layer when their activation modes differ.

#### Scenario: Tap and hold use one key
- **WHEN** one action uses `TAP` and another uses `HOLD` on the same slot
- **THEN** neither action is classified as a true conflict

### Requirement: Same-slot relationships use three visible states
The system SHALL present canonical sharing as `共享`, proven context-exclusive reuse as `CTX 复用`, and unresolved same-mode overlap as `冲突` in the existing mini-card region.

#### Scenario: Shared relationship is displayed
- **WHEN** a bound canonical action appears in multiple scenario rows
- **THEN** the mini-card shows `共享` and the number or names of the references without a destructive action

#### Scenario: CTX reuse is displayed
- **WHEN** different same-slot actions have mutually exclusive contexts
- **THEN** the mini-card shows `CTX 复用`, related action CTX labels, and an edit-CTX command

#### Scenario: True conflict is displayed
- **WHEN** different same-slot, same-mode actions are not proven context-exclusive
- **THEN** the mini-card shows `冲突` and retains CTX adjustment and unbind-other resolution commands

### Requirement: Only true conflicts drive problem behavior
The system SHALL restrict red conflict styling, problem filtering, locked-occupant blocking, replacement confirmation, and destructive resolution to `true-conflict` relationships.

#### Scenario: CTX reuse shares a locked slot
- **WHEN** a locked binding and another binding reuse the same slot with proven mutually exclusive contexts
- **THEN** the lock does not block the CTX-reused binding and neither appears in the problem filter

#### Scenario: Unresolved overlap shares a locked slot
- **WHEN** a locked binding and another binding overlap without proven exclusivity
- **THEN** the existing locked-conflict protection remains active

### Requirement: CTX is edited in the operation card
The system SHALL provide a compact per-action CTX control beside MODE and apply changes without navigating to a separate settings page.

#### Scenario: User applies multiple CTX values
- **WHEN** the user opens the CTX control, selects one or more specific contexts, and applies
- **THEN** the Profile stores the normalized context ids and the mini-card classification updates immediately

#### Scenario: User selects GLOBAL
- **WHEN** the user selects `GLOBAL`
- **THEN** specific context selections are cleared and the action is treated as potentially active everywhere
