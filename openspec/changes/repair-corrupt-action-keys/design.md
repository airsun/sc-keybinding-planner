## Context

`data.js` is generated from a workbook and currently contains 89 unrelated rows whose `actionId`, `actionKey`, and `activationMode` are all the numeric placeholder `1372`. The application indexes bindings by `row.actionKey`, so those rows share one mutable binding. Workspace schema v2 has no migration channel for an ambiguous key and no explicit binding activation mode.

The supplied v2 export has four profiles. Only `Flight` contains `bindings["1372"]`; the selected UI row points to a different valid action, so the export contains no trustworthy evidence for automatically selecting one of the 89 possible targets.

## Goals / Non-Goals

**Goals:**

- Prevent malformed generated identifiers from becoming runtime action identities.
- Preserve every valid profile field and binding during v1/v2-to-v3 migration.
- Retain ambiguous binding payloads without making a false assignment.
- Let the user explicitly resolve a quarantined item to a real operation.
- Treat activation mode as part of binding conflict identity, with `DEFAULT` as the migration default.
- Make the migration reusable by browser import, persisted state, GitHub pull, and a CLI repair command.

**Non-Goals:**

- Reconstruct overwritten historical values that are absent from the supplied export.
- Infer a target action from slot shape, card order, current selection, or text similarity.
- Rewrite the source workbook in this change.

## Decisions

### Normalize generated data at the application boundary

A standalone `workspace-core.js` module will validate and normalize the generated seed before `app.js` consumes it. Numeric action identities are replaced with deterministic fallback keys derived from stable row fields, numeric activation modes become `DEFAULT`, and valid identifiers remain unchanged. This isolates the app from future workbook pollution and makes the behavior unit-testable.

Directly editing only the current generated file was rejected because the next workbook regeneration could reintroduce the defect.

### Use schema v3 and a per-profile repair queue

Migration removes `bindings["1372"]` from active bindings and appends its complete payload to `profile.repairQueue` with a stable issue id and source key. Every active binding receives an explicit normalized `activationMode`, defaulting to `DEFAULT`. Re-running migration does not duplicate queue items.

Keeping the ambiguous item active was rejected because it would preserve the linkage bug. Copying it to all candidate actions was rejected because that invents configuration data and creates new conflicts.

### Resolve ambiguities explicitly

The UI exposes pending repairs and requires the user to choose a target action and activation mode. Resolution writes one normal binding under the selected action key, removes only the selected queue item, and leaves all other profiles and bindings untouched. Existing target bindings require explicit replacement confirmation.

### Include activation mode in conflict identity

Physical conflict identity is `slotType + hand + control + layer + activationMode`. `DEFAULT` is a real mode value, not an absence marker. The same physical key and same mode conflict; different modes on the same physical key are valid reuse.

### Share migration code with the CLI repair path

The repair script loads the same core module used by the browser and writes a new file rather than modifying the user's source export in place. This gives the browser and offline repair path identical semantics.

## Risks / Trade-offs

- [Fallback keys differ from unknown original Source IDs] -> Use deterministic row-derived keys and preserve visible action metadata; future generator fixes can add an explicit alias migration.
- [The single retained `1372` value may belong to any of 89 actions] -> Quarantine it and require user selection; never infer ownership.
- [Schema v3 clients write data older clients do not understand] -> Keep v1/v2 imports supported and make the repaired output a separate file.
- [An action already has a binding when resolving] -> Require an explicit replacement decision and preserve the queued item until confirmed.

## Migration Plan

1. Normalize seed data before initializing application state.
2. Parse persisted, imported, or remotely pulled v1/v2 workspaces through the v3 migrator.
3. Save and export schema v3 after successful parsing.
4. Surface any `repairQueue` items in the UI for explicit resolution.
5. Run the CLI repair command against the supplied export and verify profile and binding preservation.
6. Rollback consists of using the untouched original v2 export; the repair command never edits it in place.

## Open Questions

None. The supplied export does not contain enough evidence for automatic target assignment, so explicit resolution is required.
