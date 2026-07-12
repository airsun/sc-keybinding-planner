## ADDED Requirements

### Requirement: Operation list is compact by default
The system SHALL render each operation in the default list as a compact summary containing identity, status, MODE/CTX summaries, and current slot information without exposing the full editing form.

#### Scenario: User scans operations
- **WHEN** the operation list is displayed
- **THEN** each row omits description, relationship actions, hand/layer controls, clear, lock, and editable MODE/CTX controls

#### Scenario: Operation has a relationship or problem
- **WHEN** an operation is shared, uses CTX reuse, or has a true conflict
- **THEN** its compact row retains a visible relationship status and count without rendering the full relationship mini-card

### Requirement: Detail overlays the existing list viewport
The system SHALL open a same-width detail layer above the mounted operation list while keeping the stick panels and list toolbar available.

#### Scenario: User opens operation detail
- **WHEN** the user activates a compact operation row
- **THEN** a detail layer covers the list viewport without changing center-column width or removing the underlying list

#### Scenario: User edits an operation in detail
- **WHEN** detail is open
- **THEN** MODE, CTX, description, relationship evidence/actions, hand/layer controls, slot, note, clear, and lock remain available

#### Scenario: User binds from a stick panel
- **WHEN** detail is open and the user activates a bindable stick control
- **THEN** the detailed operation receives the binding and the detail layer remains synchronized with the resulting state

### Requirement: Detail navigation follows visible list order
The system SHALL derive Previous and Next navigation from the current list mode, status filter, and search query.

#### Scenario: User navigates to the next operation
- **WHEN** the user activates Next in detail
- **THEN** the next visible operation becomes selected, detail content updates, stick highlights update, and the corresponding underlying row scrolls into view

#### Scenario: User reaches a navigation boundary
- **WHEN** the current operation is the first or last visible result
- **THEN** Previous or Next respectively is disabled and navigation does not wrap

#### Scenario: Current operation is filtered out
- **WHEN** a toolbar or search change removes the current operation while detail is open
- **THEN** detail selects the first remaining visible result, or closes when no results remain

### Requirement: Closing detail restores list context
The system SHALL reveal the selected compact row at the scroll position synchronized during detail navigation.

#### Scenario: User closes detail after navigation
- **WHEN** the user activates Back after using Previous or Next
- **THEN** the detail layer closes and the selected compact row is visible in the underlying list

### Requirement: Detail presentation state is local
The system SHALL keep detail-open state and overlay scroll state outside workspace persistence and synchronization.

#### Scenario: Workspace is exported or synchronized
- **WHEN** detail is open and the workspace is exported, saved, or pushed
- **THEN** the payload contains no detail-mode or overlay-scroll fields

### Requirement: Detail controls remain touch-usable
The system SHALL keep detail navigation usable across phone, iPad portrait, iPad landscape/Sidecar, 2K, and 4K layouts without horizontal overflow.

#### Scenario: Coarse pointer opens detail
- **WHEN** the browser reports a coarse pointer
- **THEN** Back, Previous, and Next expose interaction targets at least 44 pixels high
