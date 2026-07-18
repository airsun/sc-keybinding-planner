## Context

Profiles are persisted as complete binding maps, but new workspaces currently create four identical Profiles named after runtime scenarios. Scenario rows already share canonical game action keys, while conflict detection only compares physical slot, layer, and activation mode. The product therefore has no explicit representation for different actions that safely reuse one key because the game contexts are mutually exclusive.

The planner must remain a static, local-first single-page app. Whole-workspace export/import and GitHub sync already exist. Device Presets are deferred; `deviceConfig` remains workspace-global.

## Goals / Non-Goals

**Goals:**

- Make Profile mean one complete user strategy, not a runtime game mode.
- Preserve every existing Profile and binding during schema v4 migration.
- Represent conservative per-action game contexts inside a Profile.
- Distinguish canonical sharing, activation-mode coexistence, CTX reuse, and true conflict.
- Edit CTX and inspect relationship evidence in the existing operation-card area.
- Keep the complete operation workflow usable on iPad Pro, Sidecar, 2K, and 4K displays without viewport-dependent font scaling.

**Non-Goals:**

- No Device Preset model or per-Profile hardware code mapping.
- No automatic game-state detection at runtime.
- No fuzzy name-based action merging or automatic inference from scenario chapter names.
- No arbitrary pairwise "ignore conflict" allow-list.

## Decisions

### Initialize one Default Profile

New workspaces create one Profile with id `default` and name `Default`, populated from seed bindings. Existing workspace Profile ids, names, and contents are never renamed or collapsed.

The four scenario-named defaults were rejected because they are identical complete binding maps and imply that users should switch Profile during gameplay.

### Store a workspace CTX catalog and Profile assignments

Schema v4 adds a workspace `contextCatalog`. Entries have stable ids, labels, and an optional `exclusiveGroup`. Initial entries cover `GLOBAL`, control domain, interaction layer, and operator mode. Contexts in the same non-empty group with different ids are mutually exclusive.

Each binding stores `contextIds`. Each Profile also stores `actionContexts` for unbound actions, matching the existing `actionModes` pattern. `GLOBAL` is the conservative default and is never considered exclusive with another context.

### Use conservative set-level exclusivity

Two non-empty context sets are mutually exclusive only when every cross-set context pair belongs to the same explicit exclusive group and uses different ids. Unknown, overlapping, cross-group, or `GLOBAL` combinations remain true conflicts.

Pairwise manual overrides were rejected because they form an opaque graph that becomes difficult to audit and sync. Flat tags without exclusivity metadata were rejected because they cannot support deterministic conflict classification.

### Classify relationships before conflict behavior

For the same physical slot and layer:

1. Different activation modes are legal activation coexistence.
2. The same canonical action is shared.
3. Different actions with proven mutually exclusive context sets are CTX reuse.
4. Every other same-mode overlap is a true conflict.

Only true conflicts trigger red status, the problem filter, locked-conflict blocking, replacement confirmation, or `解绑其它`. Canonical sharing and CTX reuse remain visible but non-destructive.

### Keep CTX editing in the card

Each action card places a compact `CTX` control beside `MODE`. It opens an inline popover with checkboxes and an Apply command. Selecting `GLOBAL` clears specific contexts; selecting a specific context removes `GLOBAL`; at least one context is always stored.

The existing mini-card becomes a relationship mini-card:

- `共享`: canonical action appears in multiple scenario rows.
- `CTX 复用`: different same-slot actions are proven context-exclusive.
- `冲突`: context overlap or insufficient evidence.

Relationship evidence includes the related action names and selected CTX labels. Shared and CTX reuse cards offer inspection/CTX editing; only conflict cards offer destructive resolution.

### Model CTX as three visible dimensions

The expanded card groups CTX into `Position` (`Pilot`, `Turret`, `Ground Vehicle`, `EVA`, `On Foot`), `Tool Mode` (`Vehicle Weapons`, `Missile`, `Mining`, `Salvage`), and `Focus` (`Normal`, `Interaction`, `MFD`). A context set may contain at most one value from each dimension. Different explicit values in any shared dimension prove mutual exclusion; an omitted dimension remains a wildcard.

`GLOBAL` is retained internally as the conservative unscoped sentinel, but the primary UI names the command `CLEAR CTX · UNSCOPED` and visually demotes it below the three groups. New and previously implicit/global defaults migrate to `Pilot + Vehicle Weapons + Normal`. Legacy `Flight` maps to `Pilot`, `Vehicle` maps to `Ground Vehicle`, and unchanged ids adopt their new dimension metadata.

### Balance MODE, CTX, and binding information

The expanded settings region uses two equal-weight columns. MODE becomes a complete button matrix; every button shows the existing compact abbreviation plus a human-readable full name. CTX uses matching visual density and grouped single-selection behavior within each dimension.

A second row keeps two different information sources explicit: the action description is read-only game/reference data, while the binding note is editable Profile data. Unbound actions still show the description but cannot store a binding note until assigned. The compact card note affordance and the existing selected-action note input remain available and stay synchronized.

### Use bounded responsive workspace modes

The workspace uses three explicit layout bands. Up to `1180px`, the action list becomes the first full-width region and the two stick panels follow in a two-column controller rail, stacking below `700px`. From `1181px` through `1919px`, the three-column cockpit remains visible with bounded `280-320px` stick panels. At `1920px` and above, the workspace is centered and capped at `2400px` with bounded `360-400px` stick panels.

Coarse-pointer devices receive larger interaction targets without changing font size from viewport width. A CSS-only scale or transform was rejected because it blurs text, damages pointer geometry, and does not solve reading-width problems on 4K displays. Keeping three columns at `1024px` was rejected because the measured minimum width is `1100px` and clips the right stick.

## Risks / Trade-offs

- [Users select inaccurate CTX merely to remove red status] -> Show explicit labels and never provide a generic ignore-conflict command.
- [Initial catalog is incomplete] -> Unknown combinations remain conflicts; catalog additions are backward-compatible workspace data updates.
- [Multiple selected contexts become ambiguous] -> Permit at most one value per dimension and require an explicit mismatch in a shared dimension before allowing reuse.
- [Existing exports change shape] -> Keep schema v4, advance the semantic revision, and migrate legacy defaults and flat ids deterministically while preserving all prior fields.
- [Dense cards become crowded] -> Use equal MODE/CTX matrices and stack them only below the measured card-container threshold.
- [Legacy CSS overrides conflict across breakpoints] -> Add one final responsive contract layer with stronger, scoped selectors and verify computed geometry at every target viewport.

## Migration Plan

1. Accept schema versions 1 through 4 in the shared workspace core.
2. Add the default context catalog when absent.
3. Add `Pilot + Vehicle Weapons + Normal` to bindings with no context and migrate semantic-revision-1 `GLOBAL` defaults to that combination.
4. Map legacy `Flight` to `Pilot` and `Vehicle` to `Ground Vehicle`; normalize each Profile's `actionContexts` while retaining explicit semantic-revision-2 `UNSCOPED` values.
5. Preserve all existing Profile ids, names, bindings, notes, locks, modes, repair queues, `deviceConfig`, and UI settings.
6. Use one `Default` Profile only when creating a workspace with no saved state.
7. Export and sync schema v4; rollback remains possible with an untouched older export.

## Open Questions

None. Device Presets remain an explicitly deferred iteration.
