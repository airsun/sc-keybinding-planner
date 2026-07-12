## 1. Regression Coverage

- [x] 1.1 Add failing tests for numeric catalog-key isolation and valid canonical-key reuse
- [x] 1.2 Add failing tests for schema v3 migration, per-profile quarantine, idempotency, and explicit resolution
- [x] 1.3 Add failing tests for activation-mode-aware conflict identity

## 2. Repair Core

- [x] 2.1 Implement a browser and Node compatible workspace repair core
- [x] 2.2 Normalize generated catalog identities and activation modes before application use
- [x] 2.3 Implement v1/v2-to-v3 migration and repair queue resolution

## 3. Application Integration

- [x] 3.1 Route local load, import, export, and remote pull through schema v3 migration
- [x] 3.2 Add activation mode to binding creation, display, and conflict calculations
- [x] 3.3 Add pending-repair UI with target action and activation mode selection
- [x] 3.4 Require explicit confirmation before replacing an existing target binding

## 4. Export Repair

- [x] 4.1 Add a deterministic non-destructive workspace repair CLI
- [x] 4.2 Generate a repaired schema v3 copy of the supplied export
- [x] 4.3 Verify profile, settings, valid binding, and quarantined payload preservation

## 5. Verification

- [x] 5.1 Run repair-core and existing sync-core verification suites
- [x] 5.2 Run browser smoke coverage for import, repair resolution, conflict behavior, and export
- [x] 5.3 Validate the OpenSpec change and complete its implementation checklist
