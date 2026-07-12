# Operation Card Detail Overlay Design

## Problem

Operation cards currently combine summary, configuration, relationship evidence, and destructive controls. On iPad Pro Sidecar the center column remains technically usable but loses scanability because every row behaves like a full editing form.

## Interaction Model

The center list has two local presentation states:

- **List:** compact operation rows for scanning and selection.
- **Detail:** an opaque, same-width layer positioned over the list viewport.

The list remains mounted beneath the detail layer. Opening detail does not replace list data, rebuild filter state, or discard `scrollTop`. The overlay blocks direct pointer interaction with the covered list while allowing the tabs, search, and status filters above it to remain available.

## Compact Row

Each list row shows only the information needed to identify and assess an operation:

- operation name and action key;
- bound/problem/locked/shared/CTX-reuse status;
- MODE and CTX summaries;
- current slot label and code;
- note and lock indicators when present.

Description text, relationship actions, hand/layer segments, clear/lock commands, and editable MODE/CTX controls appear only in detail.

## Detail Overlay

The detail header contains Back, Previous, position (`n / total`), and Next. Previous and Next are disabled at list boundaries and do not wrap.

The detail body exposes the existing full card workflow without changing its data model: description, MODE, CTX, relationship mini-card, hand/layer selection, current slot, note, lock, and clear. Both stick panels remain visible and interactive so selecting a hardware control continues to bind the detailed operation.

## Navigation And Scroll Synchronization

The navigation sequence is derived from the same list mode, status filter, and search query as the compact list. Group headers do not participate.

Opening or navigating detail updates `selectedRowId`, rerenders stick highlights, and centers the corresponding compact row in the underlying list. Closing detail reveals that row in place. If a filter or query removes the current operation, detail selects the first remaining result; when no rows remain, detail closes.

## State Boundary

Detail-open state and saved list scroll position are ephemeral browser UI state. They are not added to workspace JSON, import/export, local persistence, or online sync. Existing `selectedRowId` behavior remains unchanged.

## Responsive Contract

- Overlay width and height match the list viewport at every breakpoint.
- Overlay content scrolls internally; the page and stick rails do not shift when detail opens.
- Back, Previous, and Next are at least 44px high on coarse pointers.
- Compact list density is consistent on iPad, 2K, and 4K rather than expanding controls to consume available width.

## Non-Goals

- No workspace schema change.
- No Device Preset work.
- No modal that covers either stick panel.
- No cyclic previous/next navigation.
- No second filtering or ordering implementation for detail mode.
