## ADDED Requirements

### Requirement: Workspace provides an explicit CTX catalog
The system SHALL persist a context catalog whose entries have stable ids, display labels, and an optional Position, Tool Mode, or Focus dimension.

#### Scenario: Workspace lacks a context catalog
- **WHEN** a v1, v2, or v3 workspace is migrated
- **THEN** schema v4 adds the built-in CTX catalog without changing `deviceConfig` or Profile identity

### Requirement: Every action has a CTX assignment
The system SHALL expose a CTX setting for bound and unbound actions inside each Profile, defaulting to `Pilot + Vehicle Weapons + Normal` when no explicit assignment exists.

#### Scenario: Existing binding is migrated
- **WHEN** a binding has no `contextIds`
- **THEN** migration stores the default Position, Tool Mode, and Focus assignment

#### Scenario: Unbound action CTX is selected
- **WHEN** the user selects CTX values before assigning a physical slot
- **THEN** the Profile stores those values and copies them to the binding when the action is assigned

### Requirement: CTX exclusivity is conservative
The system SHALL consider two context sets mutually exclusive only when both sets explicitly select different values in at least one shared dimension. Missing dimensions and `UNSCOPED` remain wildcards and cannot prove reuse.

#### Scenario: Mining and Salvage share one exclusive group
- **WHEN** two different actions use the same slot and activation mode with CTX `Mining` and `Salvage`
- **THEN** the relationship is `context-reuse`

#### Scenario: UNSCOPED overlaps a specific context
- **WHEN** one action uses `UNSCOPED` and another uses `Mining`
- **THEN** the relationship remains `true-conflict`

#### Scenario: Context evidence is incomplete
- **WHEN** the selected context sets have no shared dimension, select the same value in every shared dimension, or contain unknown ids
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
The system SHALL provide an always-visible grouped per-action CTX control beside MODE and apply changes without navigating to a separate settings page.

#### Scenario: User applies multiple CTX values
- **WHEN** the user opens the CTX control, selects one or more specific contexts, and applies
- **THEN** the Profile stores the normalized context ids and the mini-card classification updates immediately

#### Scenario: User clears CTX
- **WHEN** the user activates `CLEAR CTX · UNSCOPED`
- **THEN** dimension selections are cleared and the action is treated as potentially active everywhere

### Requirement: Expanded MODE and CTX controls are balanced
The system SHALL render MODE and CTX as equal-weight columns in the expanded operation card.

#### Scenario: User expands an operation card
- **WHEN** the detail region opens
- **THEN** all supported MODE values are visible without a dropdown and each value shows both its abbreviation and full name
- **AND** CTX values are grouped under Position, Tool Mode, and Focus with one directly clickable option per value

### Requirement: Expanded card distinguishes description and binding note
The system SHALL show the action description as read-only reference content and the current binding note as a separate editable field.

#### Scenario: Bound action detail is open
- **WHEN** the user edits the binding note
- **THEN** the note is persisted on that binding in the active Profile and synchronized with existing note controls

#### Scenario: Unbound action detail is open
- **WHEN** no binding exists for the action
- **THEN** the description remains visible and the note field clearly indicates that a binding is required

### Requirement: Temporary view changes preserve edit position

The planner SHALL keep the current edit location as non-persisted presentation state while search, filtering, or list navigation temporarily changes which operation cards are rendered.

#### Scenario: Search temporarily hides an expanded card
- **WHEN** the user edits an expanded operation card, enters a search that hides it, and then clears or changes the search so the action is visible
- **THEN** the same action is selected and expanded again at its prior relative position in the operation scroll container
- **AND** the hidden action cannot be mutated through a hardware-slot click while it is absent

#### Scenario: List tab shows the canonical action in another row
- **WHEN** the user switches between scenario and game lists while editing an action represented in both lists
- **THEN** the visible canonical action row inherits the edit selection and expansion
- **AND** returning to the original list restores the preferred original row and card position

#### Scenario: Edit position remains presentation-only
- **WHEN** search, filtering, or list navigation records or restores an edit position
- **THEN** no edit-anchor, expanded-card, transition, or scroll-position field is added to the workspace, export, or sync payload

### Requirement: Workspace is bounded across target displays
The system SHALL provide explicit responsive workspace modes for phone, iPad Pro portrait, iPad Pro landscape or Sidecar, 2K, and 4K displays without viewport-dependent font scaling.

#### Scenario: iPad Pro portrait opens the planner
- **WHEN** the viewport is `1024x1366`
- **THEN** the action list is full width, both stick panels remain available below it, and the document has no horizontal overflow

#### Scenario: iPad Pro landscape or Sidecar opens the planner
- **WHEN** the viewport is `1366x1024`
- **THEN** both stick panels and the action list remain simultaneously visible without card overflow

#### Scenario: Wide desktop opens the planner
- **WHEN** the viewport is `2560x1440` or `3840x2160`
- **THEN** the centered workspace remains at or below `2400px` and controller rails do not stretch indefinitely

#### Scenario: iPad uses touch input
- **WHEN** the viewport reports a coarse pointer
- **THEN** MODE, CTX, filters, and card commands expose touch-sized controls without changing text size based on viewport width
