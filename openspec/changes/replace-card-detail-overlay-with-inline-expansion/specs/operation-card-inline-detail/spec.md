## ADDED Requirements

### Requirement: Historical direct-operation cards remain the collapsed baseline
The planner SHALL render each collapsed operation card using the pre-MODE/CTX three-column layout with action identity, note access, description, status rail, hand, layer, slot, clear, and lock controls directly available. A collapsed card MUST NOT render MODE, CTX, relationship mini-cards, or relationship resolution actions.

#### Scenario: User works from a collapsed card
- **WHEN** an operation card is not expanded
- **THEN** its direct binding controls remain usable in their historical layout
- **AND** no MODE, CTX, relationship, or conflict editor is present inside that collapsed card

#### Scenario: User opens advanced editing
- **WHEN** the user activates the card's disclosure button
- **THEN** that card becomes selected and expands in place
- **AND** the base card controls remain visible and operable

### Requirement: Advanced operation editing expands inside one card
The planner SHALL render MODE, CTX, relationship classification, and applicable relationship actions in a full-width detail row inside the selected operation card. The planner MUST allow no more than one inline detail to be expanded at a time and MUST NOT mount a floating detail overlay.

#### Scenario: Expanded card exposes advanced editors
- **WHEN** a card detail is expanded
- **THEN** exactly one MODE editor and one CTX editor are rendered inside that card
- **AND** shared, context-reuse, or true-conflict information and actions are rendered when applicable

#### Scenario: User opens another card directly
- **WHEN** one card is expanded and the user activates another card's disclosure button
- **THEN** the first detail closes
- **AND** only the newly selected card remains expanded

#### Scenario: User collapses detail
- **WHEN** the user activates Collapse or presses Escape while a detail is expanded
- **THEN** the advanced detail closes without clearing the operation binding or changing persisted workspace data

### Requirement: Detail navigation follows the current visible sequence
The planner SHALL derive Previous, Next, position, and boundary state from the same list-mode, status-filter, and search-filter sequence used to render operation cards. Navigation MUST NOT wrap at the first or last visible operation.

#### Scenario: User advances to the next operation
- **WHEN** the user activates Next and a following visible operation exists
- **THEN** the current detail closes and the following operation expands
- **AND** selection, stick highlight, current slot, and center-list scroll synchronize with the target operation

#### Scenario: User navigates at a boundary
- **WHEN** the expanded operation is first or last in the visible sequence
- **THEN** the unavailable Previous or Next control is disabled
- **AND** activating it does not wrap to the opposite boundary

#### Scenario: Filtering removes the expanded operation
- **WHEN** list mode, status filter, search, Profile, import, or pull makes the expanded operation unavailable
- **THEN** the inline detail closes
- **AND** the planner does not automatically expand a replacement operation

### Requirement: Directional motion reinforces card relocation
The planner SHALL use a thin selection frame and brief directional collapse/expand motion when Previous or Next changes the expanded operation. Next MUST exit upward and enter from below; Previous MUST exit downward and enter from above. Navigation input MUST be locked during the transition.

#### Scenario: User navigates forward
- **WHEN** the user activates Next
- **THEN** the current detail moves slightly upward while collapsing
- **AND** the target frame and detail enter from below within 140-180ms

#### Scenario: User navigates backward
- **WHEN** the user activates Previous
- **THEN** the current detail moves slightly downward while collapsing
- **AND** the target frame and detail enter from above within 140-180ms

#### Scenario: User prefers reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** directional translation and opacity animation are disabled
- **AND** selection, expansion, and scrolling still update correctly

#### Scenario: User activates navigation repeatedly
- **WHEN** the user activates Previous or Next more than once during one transition
- **THEN** only the first valid navigation command changes the expanded operation

### Requirement: Inline detail is responsive and ephemeral
The planner SHALL keep the inline detail in normal center-list flow without horizontal document overflow or side-panel displacement across phone, iPad portrait, Sidecar/iPad landscape, 2K, and 4K viewports. Expansion and transition state MUST NOT be written to workspace schema v4, local workspace persistence, export, import, or online sync payloads.

#### Scenario: Detail opens across target displays
- **WHEN** an operation detail opens at any supported target viewport
- **THEN** the detail remains inside its card and center column
- **AND** visible controls do not overlap or create horizontal document overflow

#### Scenario: Workspace is exported or synchronized while detail is open
- **WHEN** the user exports, pushes, or otherwise serializes the workspace
- **THEN** no expanded-row, transition-direction, transition-lock, or inline-detail field appears in the payload
