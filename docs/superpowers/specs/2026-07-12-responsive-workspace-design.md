# Binding Planner Responsive Workspace Design

## Goal

Make the binding planner efficient on a 12.9-inch iPad Pro, an iPad used as a Mac Sidecar display, 2K desktops, and 4K desktops without scaling text by viewport width or allowing the cockpit panels to stretch indefinitely.

## Baseline Evidence

- `1024x1366` currently produces a `1100px` document and clips the right stick panel.
- `1366x1024` fits three columns, but the center action and relationship controls are compressed.
- `2560x1440` stretches each stick panel to about `597px` and cards to about `1325px`.
- `3840x2160` stretches each stick panel to about `898px` and cards to about `2002px`.

The problem is therefore not a single mobile breakpoint. The workspace needs bounded, task-oriented layout modes.

## Layout Modes

### Operation-First: up to 1180px

- Use one workspace column with the action list first.
- Place the left and right stick panels after the list in a two-column controller rail when space permits; stack them below 700px.
- Remove fixed card and relationship-console minimum widths.
- Keep the document width equal to the viewport with no horizontal scrolling.
- On coarse pointers, use at least 36px interactive controls for MODE, CTX, filters, and card commands.

This mode targets iPad portrait and phones. It accepts vertical navigation in exchange for a complete, unclipped operation surface.

### Cockpit: 1181px through 1919px

- Preserve the three-column cockpit layout.
- Bound each stick panel to approximately `280-320px`.
- Give the action list the remaining width and reduce the relationship console's fixed footprint at the lower end of the range.
- Keep the toolbar and list controls fully accessible at `1366x1024`.

This mode targets iPad landscape, Sidecar, laptops, and conventional desktop windows.

### Wide Cockpit: 1920px and above

- Center the workspace and cap its width at `2400px`.
- Use bounded stick rails around `360-400px`; give remaining space to the list.
- Do not increase font sizes from viewport width and do not stretch cards to fill the physical 4K canvas.
- Preserve useful margins on 2K and 4K displays for stable reading distance.

## Validation Contract

The browser smoke test SHALL measure these viewports:

- `390x844` phone regression
- `1024x1366` iPad Pro portrait
- `1366x1024` iPad Pro landscape / Sidecar
- `2560x1440` 2K desktop
- `3840x2160` 4K desktop

For every viewport, document width, body width, workspace width, cards, and relationship mini-cards must not exceed their containers. At `1366px` and above both stick panels must remain visible. At wide desktop sizes the workspace must remain at or below `2400px`.

## Scope

The change is CSS-first. It does not alter Profile, MODE, CTX, sync, export, or schema behavior. The existing card interaction smoke remains the behavioral regression suite; the new matrix adds responsive geometry assertions and visual screenshots during implementation verification.
