## Context

The current planner is a local-first single-page app with one persisted state object under `sc-dual-vkb-binding-planner:v1`. That object combines hardware/device settings (`deviceConfig`), one binding set (`bindings`), and view state (`uiSettings`). This worked for a single flight profile, but it makes scenario-specific configurations clumsy: users must export and import JSON files to switch between flight, ground, combat, and mining layouts.

The app must remain a static single-page tool with localStorage persistence and one JSON import/export flow.

## Goals / Non-Goals

**Goals:**
- Support multiple named binding profiles inside one workspace.
- Seed new workspaces with default `Flight`, `Ground`, `Combat`, and `Mining` profiles.
- Keep joystick code configuration global so button numbers, device IDs, shift offsets, and axis codes are maintained once.
- Keep bindings, locks, and notes isolated per profile.
- Allow profile switching without changing the selected list, filters, layer display, or code visibility unexpectedly.
- Preserve old saved data and imported v1 JSON through deterministic migration.

**Non-Goals:**
- No accounts, cloud sync, sharing service, or remote storage.
- No separate hardware-profile manager in this change.
- No per-profile device code overrides.
- No multi-file import/export flow.

## Decisions

### Use a v2 workspace envelope

Persist the app as a workspace:

```js
{
  schemaVersion: 2,
  activeProfileId: "flight",
  deviceConfig: { ... },
  profiles: {
    flight: { id, name, bindings, createdAt, updatedAt },
    ground: { id, name, bindings, createdAt, updatedAt },
    combat: { id, name, bindings, createdAt, updatedAt },
    mining: { id, name, bindings, createdAt, updatedAt }
  },
  uiSettings: { ... }
}
```

Rationale: this minimizes disruption because most existing binding logic can operate on `activeProfile.bindings`, while device lookup remains unchanged.

Alternative considered: separate localStorage keys per profile. Rejected because import/export would become fragmented and profile switching would need extra reconciliation.

### Share `deviceConfig` globally

`deviceConfig` remains outside profile records. It represents hardware identity and code mapping, not scenario preference.

Rationale: the user confirmed joystick button codes should be configured once and included in import/export. Profile switching should not silently change hardware numbering.

Alternative considered: copy `deviceConfig` into every profile. Rejected because code edits would drift and make cross-profile comparison harder.

### Scope locks, notes, and bindings to profiles

Each profile owns its own binding objects, including `locked` and `note`. A locked binding in Flight does not block Ground from using that action or physical control differently.

Rationale: profile is a complete binding strategy. Locking expresses confidence inside that strategy, not a global hardware reservation.

### Keep UI settings mostly workspace-level

`activeList`, `statusFilter`, `showCodes`, and visible hand layers remain workspace-level. `selectedRowId` may remain global because action rows are shared across profiles; switching profiles refreshes binding state for the selected action.

Rationale: these are view preferences rather than binding data.

### Import replaces the current workspace after toast confirmation

Import accepts v2 workspace JSON directly. If a v1 single-profile JSON is imported, it migrates into a v2 workspace with one profile using the imported `profileName` or a default `Flight` name. Import overwrite uses the existing toast action pattern.

Rationale: the product remains simple: one file represents everything.

## Risks / Trade-offs

- **Risk: Users may expect device code edits to be per profile.** → Mitigation: label code editing as global hardware configuration in UI text/toast.
- **Risk: v1 migration may lose active UI context if row IDs changed.** → Mitigation: preserve `uiSettings` best-effort, then fall back to seed defaults.
- **Risk: deleting the active profile could strand the app without bindings.** → Mitigation: require at least one profile and auto-switch to another profile after deletion.
- **Risk: profile controls could crowd the topbar.** → Mitigation: use compact retro controls and move destructive actions behind a small menu or toast confirmation if needed.

## Migration Plan

1. Add v2 workspace loader that accepts both v1 and v2 JSON.
2. On first load with no localStorage, create four default profiles from seed defaults.
3. On load of existing v1 localStorage, migrate to v2 and save back under the same storage key.
4. Keep export filename generic, e.g. `sc-dual-vkb-binding-workspace.json`.
5. Rollback is manual: users can export before import and restore previous JSON if needed.

## Open Questions

None for the initial implementation. Future work may introduce hardware profiles if users need per-firmware code maps.
