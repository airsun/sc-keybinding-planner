## ADDED Requirements

### Requirement: Visible operation selection is the highlight source
The planner SHALL derive the current hardware-slot marker exclusively from the operation card selected in the current visible sequence. A slot MUST be current only when its complete hand, control, slot type, and applicable layer equal the selected operation's binding slot.

#### Scenario: User selects a bound operation
- **WHEN** the user selects a visible operation whose binding is on a displayed stick layer
- **THEN** exactly that bound hardware slot receives the current marker
- **AND** no other occupied slot becomes current

#### Scenario: Repeated row shares the same binding
- **WHEN** the user selects a visible scenario row with the same exact `actionKey` as another row
- **THEN** the shared action's single binding slot becomes current
- **AND** the selected-card frame remains on the row the user selected

#### Scenario: User selects an unbound operation
- **WHEN** the visible selected operation has no binding slot
- **THEN** no hardware slot receives the current marker
- **AND** the selected card remains in pending-assignment state

#### Scenario: There is no visible selection
- **WHEN** no operation card is selected in the current visible sequence
- **THEN** no hardware slot receives the current marker
- **AND** clicking a hardware slot does not mutate a hidden operation

### Requirement: Selection visibility is reconciled across list changes
The planner SHALL reconcile `selectedRowId` against the same list mode, status filter, and search result sequence used to render operation cards before rendering current-slot state. The planner MUST NOT retain an actionable hidden selection.

#### Scenario: List mode contains the same action
- **WHEN** the user changes list mode and a visible target row has the same exact `actionKey` as the previously selected row
- **THEN** that target row becomes selected
- **AND** its binding becomes the source of the current marker

#### Scenario: List mode has no exact action match
- **WHEN** the user changes list mode and no visible target row has the same exact `actionKey`
- **THEN** selection is cleared
- **AND** no current hardware-slot marker remains

#### Scenario: Search hides the selected row
- **WHEN** a search query removes the selected operation from the visible sequence
- **THEN** selection and pending assignment target are cleared
- **AND** no hardware slot remains current

#### Scenario: Status filter hides the selected row
- **WHEN** a status filter removes the selected operation from the visible sequence
- **THEN** selection and pending assignment target are cleared
- **AND** no hardware slot remains current

### Requirement: Selection transitions reveal the bound stick context
The planner SHALL reveal the exact hand and layer of a visible selected binding after direct card selection, inline-detail navigation, Profile change, import, pull, repair reveal, or binding undo. Layer-independent axis bindings MUST remain current regardless of the button-layer selector.

#### Scenario: User selects a binding on another hand or layer
- **WHEN** the user selects a visible operation bound to a hand or button layer that is not currently displayed
- **THEN** the corresponding hand panel displays the binding's layer
- **AND** the exact binding slot becomes current

#### Scenario: Inline navigation selects another operation
- **WHEN** Previous or Next moves inline detail to another bound operation
- **THEN** the target card becomes selected
- **AND** its exact hand, layer, and hardware slot are revealed

#### Scenario: Active Profile changes the selected action's binding
- **WHEN** the active Profile changes while the selected row remains visible
- **THEN** the current marker moves to that Profile's exact binding slot
- **AND** no marker remains on the previous Profile's slot

#### Scenario: Imported or pulled workspace restores selection
- **WHEN** import or pull restores a visible selected row with a binding
- **THEN** the planner reveals that binding's exact hand, layer, and slot
- **AND** the restored marker is derived from the imported or pulled active Profile

#### Scenario: Restored selection is not visible
- **WHEN** Profile change, import, pull, or repair leaves the restored selected row outside the current visible sequence
- **THEN** selection is cleared
- **AND** no hardware slot receives the current marker

### Requirement: Manual layer browsing does not rewrite selection
The planner SHALL allow the user to browse Base, S1, or S2 after selecting a bound operation without changing that binding. When the displayed layer differs from the selected button binding's layer, no different logical slot MUST be presented as current, and the binding's layer selector MUST remain identifiable as the return target.

#### Scenario: User browses away from the binding layer
- **WHEN** the user manually activates a different layer after selecting a layer-bound operation
- **THEN** the operation binding remains unchanged
- **AND** the same physical control on the browsed layer is not marked current
- **AND** the selector for the binding's layer identifies where the selected binding resides

#### Scenario: User returns to the binding layer
- **WHEN** the user activates the indicated binding layer
- **THEN** the selected operation's exact hardware slot becomes current again
- **AND** the binding data remains unchanged

#### Scenario: Selected binding is an axis
- **WHEN** the selected operation is bound to a layer-independent axis and the user changes the button layer
- **THEN** that axis remains current
- **AND** no button binding is changed

### Requirement: Current-slot feedback is stable and motion-bounded
The planner SHALL display a stable selected-slot frame while an exact binding slot is current. Selection arrival motion MUST be brief and one-shot, MUST NOT replay for unrelated renders, and MUST be disabled when reduced motion is requested. Perpetual flicker MUST NOT represent selected binding state.

#### Scenario: Selection arrives at a new exact slot
- **WHEN** a selection transition reveals a different exact binding slot
- **THEN** that slot receives one brief attention pulse
- **AND** a stable current frame remains after the pulse completes

#### Scenario: Unrelated render occurs
- **WHEN** the planner re-renders without changing the selected row or its exact binding slot
- **THEN** the current frame remains stable
- **AND** the arrival pulse does not restart

#### Scenario: User prefers reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active and selection moves to a bound operation
- **THEN** the exact slot receives the stable current frame immediately
- **AND** no selection-arrival animation runs

#### Scenario: Current slot also has semantic status
- **WHEN** the selected binding is locked, conflicting, shared, context-reused, or uncalibrated
- **THEN** the stable outer current frame remains identifiable
- **AND** existing semantic status remains distinguishable without adding another perpetual animation

### Requirement: Highlight state does not change workspace contracts
The planner SHALL keep selection-arrival and current-marker presentation state out of workspace schema v4, Profile bindings, export payloads, import migrations, and online-sync payloads. Existing `uiSettings.selectedRowId` compatibility MUST be preserved.

#### Scenario: Workspace is serialized while a slot is current
- **WHEN** the user saves, exports, or pushes a workspace while a slot is current or pulsing
- **THEN** no pulse, current-marker, selection-cause, or animation-revision field appears in the payload
- **AND** `uiSettings.selectedRowId` remains the only existing persisted selection field

#### Scenario: Older schema-v4 workspace is loaded
- **WHEN** the planner loads a compatible schema-v4 workspace created before this change
- **THEN** no migration is required for highlight presentation state
- **AND** visible selection and current slot are reconciled from the existing row and binding data
