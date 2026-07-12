# Inline Operation Card Detail Design

## Goal

Restore the operation list to the pre-MODE/CTX card layout represented by commit `f91cedb`, then add MODE, CTX, relationship, and conflict editing as an inline expansion inside the selected card.

The change must remove the compact-card list and same-width floating overlay introduced by `5e5451e`. It must not change workspace schema v4, Profile data, binding semantics, import/export, or online sync payloads.

## Collapsed Card Contract

Every collapsed card keeps the original three-column layout and direct binding workflow:

- action name, secondary action identity, subgroup, note access, and description;
- status rail and selected/locked/conflict visual states;
- hand selection (`L/R`), layer selection (`Base/S1/S2`), current slot, clear, and lock controls;
- the original card width, column proportions, and responsive behavior.

The collapsed card does not render MODE, CTX, relationship mini-cards, or conflict resolution controls. It adds one small chevron disclosure button in the action area. The button opens or closes the card detail without turning the entire card into a disclosure control, so existing card controls remain independently operable.

## Inline Detail Structure

Only one card may be expanded. The detail is a full-width row inside the same `<article class="binding-card">`, below the original card content. Expanding a card selects it through the existing `selectedRowId` path so stick highlights and pending binding behavior remain coherent.

The expanded detail contains:

1. A compact navigation header with Collapse, Previous, current position, and Next controls.
2. A MODE editor using the existing activation-mode options and persistence path.
3. A CTX editor using the existing context picker and action-context persistence path.
4. A relationship area using the existing `shared`, `context-reuse`, and `true-conflict` classification.
5. Existing relationship actions such as editing CTX or unbinding other bindings, shown only when applicable.

The detail does not duplicate basic hand, layer, slot, clear, or lock controls. Those remain in the collapsed portion of the card and stay usable while the detail is open.

## Navigation And Sequence

Previous and Next use the same visible-row sequence as the list: current list mode, status filter, and search query. Navigation does not wrap at either boundary.

When navigation starts:

1. The current detail collapses in the navigation direction.
2. The target row becomes `selectedRowId` and is rendered expanded.
3. The target card scrolls into the central portion of the list viewport.
4. Stick highlights and current slot state update through the normal render path.

If a filter, search, Profile switch, import, or pull removes the expanded row from the visible sequence, the detail closes instead of automatically opening another row. Expanded row and transition direction are ephemeral UI state and are never persisted.

## Selection Frame And Motion

An expanded card receives a thin 1px selection frame with restrained corner accents. The frame uses the existing amber/green cockpit palette and must remain legible for locked and true-conflict states.

Motion is directional and brief:

- Next: current detail moves slightly upward while collapsing; the target frame and detail enter from below.
- Previous: current detail moves slightly downward while collapsing; the target frame and detail enter from above.
- Direct disclosure: detail expands vertically without directional translation.

The transition duration is 140-180ms. It animates opacity, a small vertical transform, and detail grid-row expansion. It must not animate page-scale layout or resize the side stick panels. Under `prefers-reduced-motion: reduce`, scrolling is immediate and translation/opacity animation is disabled.

## DOM And State Boundaries

- Remove `#cardStage`, `#cardDetailOverlay`, overlay header/body nodes, and compact-card rendering.
- Restore `#cardWrap > #bindingRows` as the list structure.
- Restore the original `renderBindingCard()` composition and append an inline detail only for the expanded row.
- Keep one shared `visibleRows()` helper for filtering and navigation.
- Track only `expandedRowId`, pending transition direction, and transition lock outside persisted workspace state.
- Reuse existing MODE, CTX, relationship, and conflict helpers instead of creating parallel data paths.

## Interaction Safety

- Disclosure, navigation, MODE, CTX, relationship, and conflict buttons stop propagation so they do not accidentally enter slot assignment.
- Navigation is locked for the short collapse/expand transition to prevent skipped or duplicated transitions.
- A removed or invalid target closes detail safely and leaves the existing selected row contract intact.
- Keyboard users can activate disclosure with the button, use navigation controls, and press Escape to collapse the expanded detail.

## Responsive Behavior

- Collapsed cards must match the historical card geometry rather than the compact 58px rows.
- Expanded detail participates in normal list flow and may increase only the selected card height.
- Sidecar/iPad landscape keeps both stick panels visible and the center list independently scrollable.
- Phone, iPad portrait, Sidecar/iPad landscape, 2K, and 4K must have no horizontal overflow or overlapping controls.
- Coarse-pointer disclosure and detail navigation targets are at least 44px high without enlarging unrelated original card controls.

## Verification

Browser smoke must prove:

- collapsed cards retain original direct controls and contain no MODE or CTX editor;
- no floating detail overlay or compact-card list remains;
- disclosure expands MODE, CTX, and relationship editing inside exactly one card;
- Previous/Next follows the filtered visible sequence, does not wrap, updates selection/stick state, and centers the target card;
- direction classes and transition locking are applied correctly;
- expanded state is absent from export, import, sync, and local workspace persistence;
- existing context reuse, conflict repair, Profile, sync, import/export, and v4 migration checks still pass;
- the full responsive matrix remains free of horizontal overflow and incoherent overlap.

