# Operation Mode Badge Design

## Goal

Make every operation's current activation mode visible from the collapsed card without reopening inline detail. The mode is an operation property, so the badge remains visible for both assigned and unassigned operations, including `DEFAULT`.

## Placement

Render one compact badge as a child of `.slot-pill`, positioned at its top-right corner. The badge is visually attached to the key label but is removed from the slot pill's grid flow, so it does not create another control column or resize the card.

The existing status dot, key label, optional `#code`, and disclosure column remain unchanged. The badge is display-only; selecting the slot pill continues to focus or locate the binding.

## Labels

Use a fixed mapping rather than deriving initials at runtime. This keeps labels unique and stable:

| Activation mode | Badge |
| --- | --- |
| `DEFAULT` | `DEF` |
| `TAP` | `TAP` |
| `PRESS` | `PRS` |
| `HOLD` | `HLD` |
| `DOUBLE_TAP` | `2T` |
| `ALL` | `ALL` |
| `SMART_TOGGLE` | `STG` |
| `HOLD_TOGGLE` | `HTG` |
| `HOLD_NO_RETRIGGER` | `HNR` |
| `DELAYED_PRESS` | `D-P` |
| `DELAYED_PRESS_MEDIUM` | `DPM` |
| `DELAYED_HOLD` | `D-H` |
| `DELAYED_HOLD_NO_RETRIGGER` | `DHN` |

Unknown normalized modes fall back to the first four alphanumeric characters. The badge tooltip and accessible label always expose the complete normalized mode.

## Data Flow

`renderSlotButton()` reads the mode through `activationModeForRow(row)` and derives the badge from the fixed mapping. Changing MODE in inline detail already saves and rerenders the operation, so the badge updates immediately without new state.

No workspace field is added. Export, import, online sync, conflict occupancy, and v4 migration remain unchanged.

## Visual Behavior

- Use a thin amber border and compact monospace text consistent with existing micro-labels.
- Reserve a small amount of right padding inside `.slot-pill` so the badge cannot cover the key label.
- Do not add a badge command; allow hover so its full MODE tooltip remains available, while clicks continue to bubble to the existing slot-pill action.
- Preserve the key label and `#code` as the primary content.
- Verify collapsed and expanded cards at phone, iPad portrait, iPad landscape, 2K, and 4K sizes.

## Verification

Browser smoke must prove:

- every historical card has exactly one mode badge inside its slot pill;
- `DEFAULT` appears as `DEF`, including on an unassigned operation;
- changing a row to `DOUBLE_TAP` updates its badge to `2T` immediately;
- the complete mode is available through accessible text and tooltip;
- badges do not escape or overlap their slot pills;
- existing inline detail, binding, context, conflict, v4, import/export, and sync checks still pass.

## Non-Goals

- Editing MODE directly from the badge.
- Hiding the `DEFAULT` badge.
- Adding mode to physical stick-side controls.
- Changing activation-mode normalization or persistence.
