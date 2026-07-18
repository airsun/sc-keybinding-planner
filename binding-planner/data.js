window.VKB_PLANNER_SEED = {
  "schemaVersion": 1,
  "profileName": "SC Dual VKB Binding Planner",
  "deviceConfig": {
    "shift": {
      "base": {
        "label": "Base"
      },
      "shift1": {
        "label": "Shift1",
        "modifier": "D1",
        "offset": 40
      },
      "shift2": {
        "label": "Shift2",
        "modifier": "B1",
        "offset": 70
      }
    },
    "hands": {
      "left": {
        "label": "左杆",
        "deviceId": "js2",
        "controls": [
          {
            "id": "trigger_s1",
            "label": "TRG1",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 1,
            "shift1Button": 41,
            "shift2Button": 71
          },
          {
            "id": "trigger_s2",
            "label": "TRG2",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 2,
            "shift1Button": 42,
            "shift2Button": 72
          },
          {
            "id": "rapid_fire_pull",
            "label": "RF Pull",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 3,
            "shift1Button": 43,
            "shift2Button": 73
          },
          {
            "id": "rapid_fire_push",
            "label": "RF Push",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 4,
            "shift1Button": 44,
            "shift2Button": 74
          },
          {
            "id": "A2",
            "label": "LA2",
            "kind": "button",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 36,
            "shift1Button": 76,
            "shift2Button": 106
          },
          {
            "id": "A1_axis_x",
            "label": "A1 X",
            "kind": "axis",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "LA1_X",
            "defaultLocked": false
          },
          {
            "id": "A1_axis_y",
            "label": "A1 Y",
            "kind": "axis",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "LA1_Y",
            "defaultLocked": false
          },
          {
            "id": "A1_pov_up",
            "label": "A1 ↑",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "L_A1_POV_UP",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_down",
            "label": "A1 ↓",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "L_A1_POV_DOWN",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_left",
            "label": "A1 ←",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "L_A1_POV_LEFT",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_right",
            "label": "A1 →",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "L_A1_POV_RIGHT",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "C1_up",
            "label": "LC1↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 21,
            "shift1Button": 61,
            "shift2Button": 91
          },
          {
            "id": "C1_down",
            "label": "LC1↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 22,
            "shift1Button": 62,
            "shift2Button": 92
          },
          {
            "id": "C1_left",
            "label": "LC1←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 23,
            "shift1Button": 63,
            "shift2Button": 93
          },
          {
            "id": "C1_right",
            "label": "LC1→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 24,
            "shift1Button": 64,
            "shift2Button": 94
          },
          {
            "id": "C1_press",
            "label": "LC1按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 25,
            "shift1Button": 65,
            "shift2Button": 95
          },
          {
            "id": "A3_up",
            "label": "LA3↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 26,
            "shift1Button": 66,
            "shift2Button": 96
          },
          {
            "id": "A3_down",
            "label": "LA3↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 27,
            "shift1Button": 67,
            "shift2Button": 97
          },
          {
            "id": "A3_left",
            "label": "LA3←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 28,
            "shift1Button": 68,
            "shift2Button": 98
          },
          {
            "id": "A3_right",
            "label": "LA3→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 29,
            "shift1Button": 69,
            "shift2Button": 99
          },
          {
            "id": "A3_press",
            "label": "LA3按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 30,
            "shift1Button": 70,
            "shift2Button": 100
          },
          {
            "id": "A4_up",
            "label": "LA4↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 31,
            "shift1Button": 71,
            "shift2Button": 101
          },
          {
            "id": "A4_down",
            "label": "LA4↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 32,
            "shift1Button": 72,
            "shift2Button": 102
          },
          {
            "id": "A4_left",
            "label": "LA4←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 33,
            "shift1Button": 73,
            "shift2Button": 103
          },
          {
            "id": "A4_right",
            "label": "LA4→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 34,
            "shift1Button": 74,
            "shift2Button": 104
          },
          {
            "id": "A4_press",
            "label": "LA4按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 35,
            "shift1Button": 75,
            "shift2Button": 105
          },
          {
            "id": "main_x",
            "label": "X 横移",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "L_AXIS_X",
            "defaultLocked": false
          },
          {
            "id": "main_y",
            "label": "Y 前后",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "L_AXIS_Y",
            "defaultLocked": false
          },
          {
            "id": "main_twist",
            "label": "Tw 升降",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "L_AXIS_TWIST",
            "defaultLocked": false
          },
          {
            "id": "base_f1",
            "label": "F1",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 61,
            "shift1Button": 101,
            "shift2Button": 131
          },
          {
            "id": "base_f2",
            "label": "F2",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 62,
            "shift1Button": 102,
            "shift2Button": 132
          },
          {
            "id": "base_f3",
            "label": "F3",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 63,
            "shift1Button": 103,
            "shift2Button": 133
          },
          {
            "id": "sw1_up",
            "label": "SW↑",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 64,
            "shift1Button": 104,
            "shift2Button": 134
          },
          {
            "id": "sw1_down",
            "label": "SW↓",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 65,
            "shift1Button": 105,
            "shift2Button": 135
          },
          {
            "id": "throttle_axis",
            "label": "Throttle",
            "kind": "axis",
            "group": "Throttle",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "L_THROTTLE",
            "defaultLocked": false
          },
          {
            "id": "encoder_ccw",
            "label": "ENC-",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 66,
            "shift1Button": 106,
            "shift2Button": 136
          },
          {
            "id": "encoder_press",
            "label": "ENC按",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 67,
            "shift1Button": 107,
            "shift2Button": 137
          },
          {
            "id": "encoder_cw",
            "label": "ENC+",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 68,
            "shift1Button": 108,
            "shift2Button": 138
          }
        ]
      },
      "right": {
        "label": "右杆",
        "deviceId": "js1",
        "controls": [
          {
            "id": "trigger_s1",
            "label": "TRG1",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 1,
            "shift1Button": 41,
            "shift2Button": 71
          },
          {
            "id": "trigger_s2",
            "label": "TRG2",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 2,
            "shift1Button": 42,
            "shift2Button": 72
          },
          {
            "id": "rapid_fire_pull",
            "label": "RF Pull",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 3,
            "shift1Button": 43,
            "shift2Button": 73
          },
          {
            "id": "rapid_fire_push",
            "label": "RF Push",
            "kind": "trigger",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 4,
            "shift1Button": 44,
            "shift2Button": 74
          },
          {
            "id": "A2",
            "label": "RA2",
            "kind": "button",
            "group": "Trigger",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 36,
            "shift1Button": 76,
            "shift2Button": 106
          },
          {
            "id": "A1_axis_x",
            "label": "A1 X",
            "kind": "axis",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "RA1_X",
            "defaultLocked": false
          },
          {
            "id": "A1_axis_y",
            "label": "A1 Y",
            "kind": "axis",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "RA1_Y",
            "defaultLocked": false
          },
          {
            "id": "A1_pov_up",
            "label": "A1 ↑",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "R_A1_POV_UP",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_down",
            "label": "A1 ↓",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "R_A1_POV_DOWN",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_left",
            "label": "A1 ←",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "R_A1_POV_LEFT",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "A1_pov_right",
            "label": "A1 →",
            "kind": "pov",
            "group": "A1",
            "bindable": true,
            "shiftCapable": false,
            "baseButton": "R_A1_POV_RIGHT",
            "shift1Button": null,
            "shift2Button": null
          },
          {
            "id": "C1_up",
            "label": "RC1↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 21,
            "shift1Button": 61,
            "shift2Button": 91
          },
          {
            "id": "C1_down",
            "label": "RC1↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 22,
            "shift1Button": 62,
            "shift2Button": 92
          },
          {
            "id": "C1_left",
            "label": "RC1←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 23,
            "shift1Button": 63,
            "shift2Button": 93
          },
          {
            "id": "C1_right",
            "label": "RC1→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 24,
            "shift1Button": 64,
            "shift2Button": 94
          },
          {
            "id": "C1_press",
            "label": "RC1按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 25,
            "shift1Button": 65,
            "shift2Button": 95
          },
          {
            "id": "A3_up",
            "label": "RA3↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 26,
            "shift1Button": 66,
            "shift2Button": 96
          },
          {
            "id": "A3_down",
            "label": "RA3↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 27,
            "shift1Button": 67,
            "shift2Button": 97
          },
          {
            "id": "A3_left",
            "label": "RA3←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 28,
            "shift1Button": 68,
            "shift2Button": 98
          },
          {
            "id": "A3_right",
            "label": "RA3→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 29,
            "shift1Button": 69,
            "shift2Button": 99
          },
          {
            "id": "A3_press",
            "label": "RA3按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 30,
            "shift1Button": 70,
            "shift2Button": 100
          },
          {
            "id": "A4_up",
            "label": "RA4↑",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 31,
            "shift1Button": 71,
            "shift2Button": 101
          },
          {
            "id": "A4_down",
            "label": "RA4↓",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 32,
            "shift1Button": 72,
            "shift2Button": 102
          },
          {
            "id": "A4_left",
            "label": "RA4←",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 33,
            "shift1Button": 73,
            "shift2Button": 103
          },
          {
            "id": "A4_right",
            "label": "RA4→",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 34,
            "shift1Button": 74,
            "shift2Button": 104
          },
          {
            "id": "A4_press",
            "label": "RA4按",
            "kind": "hat",
            "group": "Hats",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 35,
            "shift1Button": 75,
            "shift2Button": 105
          },
          {
            "id": "main_x",
            "label": "X 滚转",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "R_AXIS_X",
            "defaultLocked": false
          },
          {
            "id": "main_y",
            "label": "Y 俯仰",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "R_AXIS_Y",
            "defaultLocked": false
          },
          {
            "id": "main_twist",
            "label": "Tw 偏航",
            "kind": "axis",
            "group": "6DOF",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "R_AXIS_TWIST",
            "defaultLocked": false
          },
          {
            "id": "base_f1",
            "label": "F1",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 61,
            "shift1Button": 101,
            "shift2Button": 131
          },
          {
            "id": "base_f2",
            "label": "F2",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 62,
            "shift1Button": 102,
            "shift2Button": 132
          },
          {
            "id": "base_f3",
            "label": "F3",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 63,
            "shift1Button": 103,
            "shift2Button": 133
          },
          {
            "id": "sw1_up",
            "label": "SW↑",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 64,
            "shift1Button": 104,
            "shift2Button": 134
          },
          {
            "id": "sw1_down",
            "label": "SW↓",
            "kind": "button",
            "group": "Base",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 65,
            "shift1Button": 105,
            "shift2Button": 135
          },
          {
            "id": "throttle_axis",
            "label": "Throttle",
            "kind": "axis",
            "group": "Throttle",
            "bindable": true,
            "shiftCapable": false,
            "axisCode": "R_THROTTLE",
            "defaultLocked": false
          },
          {
            "id": "encoder_ccw",
            "label": "ENC-",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 66,
            "shift1Button": 106,
            "shift2Button": 136
          },
          {
            "id": "encoder_press",
            "label": "ENC按",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 67,
            "shift1Button": 107,
            "shift2Button": 137
          },
          {
            "id": "encoder_cw",
            "label": "ENC+",
            "kind": "encoder",
            "group": "Encoder",
            "bindable": true,
            "shiftCapable": true,
            "baseButton": 68,
            "shift1Button": 108,
            "shift2Button": 138
          }
        ]
      }
    }
  },
  "gameRows": [
    {
      "id": "game-1",
      "listType": "game",
      "order": 1,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Emergency Exit Seat",
      "description": "执行紧急离座，快速离开当前座位；仅在必须立刻脱离驾驶/炮塔位时使用，避免与弹射混淆。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_emergency_exit",
      "actionKey": "v_emergency_exit",
      "suggestedInput": "键盘或安全键",
      "priority": "P0-安全",
      "note": "不要放入 Shift/C1/A1。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-2",
      "listType": "game",
      "order": 2,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Eject",
      "description": "触发舰船弹射逃生；仅在舰船支持且无法继续操控时使用，属于高风险、应防误触的最后手段。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_eject",
      "actionKey": "v_eject",
      "suggestedInput": "键盘或安全键",
      "priority": "P0-安全",
      "note": "不要放入 Shift/C1/A1。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-3",
      "listType": "game",
      "order": 3,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Look behind",
      "description": "将视角转向后方；在倒车、编队或检查六点方向时快速确认后方态势。",
      "repeatCount": "1",
      "activationMode": "DELAYED HOLD_NO_RETRIGGER",
      "actionId": "v_view_look_behind",
      "actionKey": "v_view_look_behind",
      "suggestedInput": "Head tracking / keyboard；必要时 RD1 + RA2",
      "priority": "P2-视角",
      "note": "若 RA2 也破坏右手拇指作战职责，则不用 HOTAS。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-4",
      "listType": "game",
      "order": 4,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Mining Operator Mode",
      "description": "切换采矿操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_mining_mode",
      "actionKey": "v_toggle_mining_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-5",
      "listType": "game",
      "order": 5,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Salvage Operator Mode",
      "description": "切换回收操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_salvage_mode",
      "actionKey": "v_toggle_salvage_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-6",
      "listType": "game",
      "order": 6,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "@ui_CIRefuelMode",
      "description": "切换至或离开补给/加油操作模式；使用相应舰载补给功能时进入。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-7",
      "listType": "game",
      "order": 7,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Scanning Operator Mode",
      "description": "切换扫描操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_scan_mode",
      "actionKey": "v_toggle_scan_mode",
      "suggestedInput": "RA4 Center / RB1 + RA4 Center",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-8",
      "listType": "game",
      "order": 8,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Quantum Operator Mode",
      "description": "切换量子操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_quantum_mode",
      "actionKey": "v_toggle_quantum_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-9",
      "listType": "game",
      "order": 9,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Missile Operator Mode",
      "description": "切换导弹操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_missile_mode",
      "actionKey": "v_toggle_missile_mode",
      "suggestedInput": "RA3 Up",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-10",
      "listType": "game",
      "order": 10,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Guns Operator Mode",
      "description": "切换炮术操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_guns_mode",
      "actionKey": "v_toggle_guns_mode",
      "suggestedInput": "RA3 Down",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-11",
      "listType": "game",
      "order": 11,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Toggle Flight Operator Mode",
      "description": "切换飞行操作模式；需要使用对应舰载工具或功能时进入，结束后切回。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_flight_mode",
      "actionKey": "v_toggle_flight_mode",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-12",
      "listType": "game",
      "order": 12,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Mining Operator Mode",
      "description": "将操作模式明确设为采矿；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_set_mining_mode",
      "actionKey": "v_set_mining_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-13",
      "listType": "game",
      "order": 13,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Salvage Operator Mode",
      "description": "将操作模式明确设为回收；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_set_salvage_mode",
      "actionKey": "v_set_salvage_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-14",
      "listType": "game",
      "order": 14,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "@ui_v_set_refuel_mode",
      "description": "将操作模式明确设为补给/加油；在对应岗位需要避免切换状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-15",
      "listType": "game",
      "order": 15,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Scanning Operator Mode",
      "description": "将操作模式明确设为扫描；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA4 Center / RB1 + RA4 Center",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-16",
      "listType": "game",
      "order": 16,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Quantum Operator Mode",
      "description": "将操作模式明确设为量子；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_set_quantum_mode",
      "actionKey": "v_set_quantum_mode",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-17",
      "listType": "game",
      "order": 17,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Missile Operator Mode",
      "description": "将操作模式明确设为导弹；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_set_missile_mode",
      "actionKey": "v_set_missile_mode",
      "suggestedInput": "RA3 Up",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-18",
      "listType": "game",
      "order": 18,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Guns Operator Mode",
      "description": "将操作模式明确设为炮术；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "v_set_guns_mode",
      "actionKey": "v_set_guns_mode",
      "suggestedInput": "RA3 Down",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-19",
      "listType": "game",
      "order": 19,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Set Flight Operator Mode",
      "description": "将操作模式明确设为飞行；需要避免“切换”造成状态不确定时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_set_flight_mode",
      "actionKey": "v_set_flight_mode",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-20",
      "listType": "game",
      "order": 20,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Enter Remote Turret 1",
      "description": "进入远程炮塔 1；多人舰船中切换到指定炮塔位进行操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_enter_remote_turret_1",
      "actionKey": "v_enter_remote_turret_1",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-21",
      "listType": "game",
      "order": 21,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Enter Remote Turret 2",
      "description": "进入远程炮塔 2；多人舰船中切换到指定炮塔位进行操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_enter_remote_turret_2",
      "actionKey": "v_enter_remote_turret_2",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-22",
      "listType": "game",
      "order": 22,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Enter Remote Turret 3",
      "description": "进入远程炮塔 3；多人舰船中切换到指定炮塔位进行操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_enter_remote_turret_3",
      "actionKey": "v_enter_remote_turret_3",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-23",
      "listType": "game",
      "order": 23,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Next Operator Mode",
      "description": "切到下一个操作模式；在多个舰船工作模式间顺序浏览。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_operator_mode_cycle_forward",
      "actionKey": "v_operator_mode_cycle_forward",
      "suggestedInput": "RA3 Right",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-24",
      "listType": "game",
      "order": 24,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Previous Operator Mode",
      "description": "切到上一个操作模式；错过目标模式时反向返回。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_operator_mode_cycle_back",
      "actionKey": "v_operator_mode_cycle_back",
      "suggestedInput": "RA3 Left",
      "priority": "P2-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-25",
      "listType": "game",
      "order": 25,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Light Amplification Toggle",
      "description": "控制座舱/炮塔的光线增强：切换开关；暗处观察时按需使用，避免误判其为头灯。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-26",
      "listType": "game",
      "order": 26,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Light Amplification On",
      "description": "控制座舱/炮塔的光线增强：开启；暗处观察时按需使用，避免误判其为头灯。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-27",
      "listType": "game",
      "order": 27,
      "group": "Vehicles - Seats and Operator Modes",
      "nameZh": "",
      "nameEn": "Light Amplification Off",
      "description": "控制座舱/炮塔的光线增强：关闭；暗处观察时按需使用，避免误判其为头灯。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或 RA3 Direction + Center",
      "priority": "P4-模式",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-28",
      "listType": "game",
      "order": 28,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Cycle Page - Forwards (Short Press)",
      "description": "在当前 MFD 中向前循环页面（短按）；飞行中快速切到通信、状态等常用页。",
      "repeatCount": "3",
      "activationMode": "TAP",
      "actionId": "v_mfd_interact_cycle_forwards_short",
      "actionKey": "v_mfd_interact_cycle_forwards_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-29",
      "listType": "game",
      "order": 29,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Cycle Page - Forwards (Long Press)",
      "description": "在当前 MFD 中向前循环页面（按住）；飞行中快速切到通信、状态等常用页。",
      "repeatCount": "3",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_interact_cycle_forwards_long",
      "actionKey": "v_mfd_interact_cycle_forwards_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-30",
      "listType": "game",
      "order": 30,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Cycle Page - Backwards (Short Press)",
      "description": "在当前 MFD 中向后循环页面（短按）；飞行中快速切到通信、状态等常用页。",
      "repeatCount": "3",
      "activationMode": "TAP",
      "actionId": "v_mfd_interact_cycle_backwards_short",
      "actionKey": "v_mfd_interact_cycle_backwards_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-31",
      "listType": "game",
      "order": 31,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Cycle Page - Backwards (Long Press)",
      "description": "在当前 MFD 中向后循环页面（按住）；飞行中快速切到通信、状态等常用页。",
      "repeatCount": "3",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_interact_cycle_backwards_long",
      "actionKey": "v_mfd_interact_cycle_backwards_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-32",
      "listType": "game",
      "order": 32,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Up (Short Press)",
      "description": "将 MFD 的当前焦点向上移动（短按）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_mfd_movement_up_short",
      "actionKey": "v_mfd_movement_up_short",
      "suggestedInput": "LC1 Up",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-33",
      "listType": "game",
      "order": 33,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Up (Long Press)",
      "description": "将 MFD 的当前焦点向上移动（按住）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "2",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_movement_up_long",
      "actionKey": "v_mfd_movement_up_long",
      "suggestedInput": "LC1 Up",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-34",
      "listType": "game",
      "order": 34,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Down (Short Press)",
      "description": "将 MFD 的当前焦点向下移动（短按）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_mfd_movement_down_short",
      "actionKey": "v_mfd_movement_down_short",
      "suggestedInput": "LC1 Down",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-35",
      "listType": "game",
      "order": 35,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Self Destruct",
      "description": "启动舰船自毁流程；只在明确需要销毁舰船时使用，不应放在容易误触的位置。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS_MEDIUM",
      "actionId": "v_self_destruct",
      "actionKey": "v_self_destruct",
      "suggestedInput": "键盘或安全键",
      "priority": "P0-安全",
      "note": "不要放入 Shift/C1/A1。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-36",
      "listType": "game",
      "order": 36,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Increase Cooler Rate",
      "description": "提高冷却器工作速率；高热战斗与资源节约之间按需调整。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_cooler_throttle_up",
      "actionKey": "v_cooler_throttle_up",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-37",
      "listType": "game",
      "order": 37,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Decrease Cooler Rate",
      "description": "降低冷却器工作速率；高热战斗与资源节约之间按需调整。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_cooler_throttle_down",
      "actionKey": "v_cooler_throttle_down",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-38",
      "listType": "game",
      "order": 38,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Flight / Systems Ready",
      "description": "让舰船进入可飞行/系统就绪状态；登机后起飞前一次完成常用上电准备。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_flightready",
      "actionKey": "v_flightready",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-39",
      "listType": "game",
      "order": 39,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Open / Close Doors (Toggle)",
      "description": "切换所有舱门的开/关；登机、离机或装卸前快速处理通道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_doors",
      "actionKey": "v_toggle_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-40",
      "listType": "game",
      "order": 40,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Open All Doors",
      "description": "打开所有舱门；多人登舰或装卸前可一次开放通道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_open_all_doors",
      "actionKey": "v_open_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-41",
      "listType": "game",
      "order": 41,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Close All Doors",
      "description": "关闭所有舱门；起飞、交战或离舰后用于恢复舱体封闭。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_close_all_doors",
      "actionKey": "v_close_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-42",
      "listType": "game",
      "order": 42,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Lock / Unlock Doors (Toggle)",
      "description": "切换所有舱门的锁定状态；停泊或需要限制他人进入时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_doorlocks",
      "actionKey": "v_toggle_all_doorlocks",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-43",
      "listType": "game",
      "order": 43,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Lock All Doors",
      "description": "锁定所有舱门；离舰或防范未经允许登舰时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_lock_all_doors",
      "actionKey": "v_lock_all_doors",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-44",
      "listType": "game",
      "order": 44,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Unlock All Doors",
      "description": "解锁所有舱门；允许队友登舰或开始装卸前使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_unlock_all_doors",
      "actionKey": "v_unlock_all_doors",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-45",
      "listType": "game",
      "order": 45,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Port Lock Toggle All",
      "description": "切换所有设备/组件端口锁；更换或拆取舰船部件前先确认此状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_portlocks",
      "actionKey": "v_toggle_all_portlocks",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-46",
      "listType": "game",
      "order": 46,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Port Lock All",
      "description": "锁定所有设备端口；平时保持锁定，避免部件被意外拆取。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_lock_all_ports",
      "actionKey": "v_lock_all_ports",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-47",
      "listType": "game",
      "order": 47,
      "group": "Vehicles - Cockpit",
      "nameZh": "",
      "nameEn": "Port Unlock All",
      "description": "解锁所有设备端口；需要用牵引工具拆装组件时才开启。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_unlock_all_ports",
      "actionKey": "v_unlock_all_ports",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-48",
      "listType": "game",
      "order": 48,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Down (Long Press)",
      "description": "将 MFD 的当前焦点向下移动（按住）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_movement_down_long",
      "actionKey": "v_mfd_movement_down_long",
      "suggestedInput": "LC1 Down",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-49",
      "listType": "game",
      "order": 49,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Left (Short Press)",
      "description": "将 MFD 的当前焦点向左移动（短按）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_movement_left_short",
      "actionKey": "v_mfd_movement_left_short",
      "suggestedInput": "LC1 Left / LA4 Left / LB1 + LC1 Left",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-50",
      "listType": "game",
      "order": 50,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Left (Long Press)",
      "description": "将 MFD 的当前焦点向左移动（按住）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_movement_left_long",
      "actionKey": "v_mfd_movement_left_long",
      "suggestedInput": "LC1 Left / LA4 Left / LB1 + LC1 Left",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-51",
      "listType": "game",
      "order": 51,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Right (Short Press)",
      "description": "将 MFD 的当前焦点向右移动（短按）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_movement_right_short",
      "actionKey": "v_mfd_movement_right_short",
      "suggestedInput": "LC1 Right / LA4 Right / LB1 + LC1 Right",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-52",
      "listType": "game",
      "order": 52,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Movement - Right (Long Press)",
      "description": "将 MFD 的当前焦点向右移动（按住）；用摇杆/键位浏览屏幕控件而不必操作鼠标。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_movement_right_long",
      "actionKey": "v_mfd_movement_right_long",
      "suggestedInput": "LC1 Right / LA4 Right / LB1 + LC1 Right",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-53",
      "listType": "game",
      "order": 53,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Primary (Short Press)",
      "description": "触发当前 MFD 的主选择操作（短按）；用实体控制器确认当前焦点，而不必点击屏幕。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_primary_short",
      "actionKey": "v_mfd_soft_select_mfd_primary_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-54",
      "listType": "game",
      "order": 54,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Primary (Long Press)",
      "description": "触发当前 MFD 的主选择操作（按住）；用实体控制器确认当前焦点，而不必点击屏幕。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_primary_long",
      "actionKey": "v_mfd_soft_select_mfd_primary_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-55",
      "listType": "game",
      "order": 55,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Left Cast (Short Press)",
      "description": "触发当前 MFD 的左侧选择操作（短按）；在多选项屏幕中快速执行左侧软键。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_cast_left_short",
      "actionKey": "v_mfd_soft_select_cast_left_short",
      "suggestedInput": "LC1 Left / LA4 Left / LB1 + LC1 Left",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-56",
      "listType": "game",
      "order": 56,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Left Cast (Long Press)",
      "description": "触发当前 MFD 的左侧选择操作（按住）；在多选项屏幕中快速执行左侧软键。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_cast_left_long",
      "actionKey": "v_mfd_soft_select_cast_left_long",
      "suggestedInput": "LC1 Left / LA4 Left / LB1 + LC1 Left",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-57",
      "listType": "game",
      "order": 57,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Right Cast (Short Press)",
      "description": "触发当前 MFD 的右侧选择操作（短按）；在多选项屏幕中快速执行右侧软键。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_cast_right_short",
      "actionKey": "v_mfd_soft_select_cast_right_short",
      "suggestedInput": "LC1 Right / LA4 Right / LB1 + LC1 Right",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-58",
      "listType": "game",
      "order": 58,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - Right Cast (Long Press)",
      "description": "触发当前 MFD 的右侧选择操作（按住）；在多选项屏幕中快速执行右侧软键。",
      "repeatCount": "2",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_cast_right_long",
      "actionKey": "v_mfd_soft_select_cast_right_long",
      "suggestedInput": "LC1 Right / LA4 Right / LB1 + LC1 Right",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-59",
      "listType": "game",
      "order": 59,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 1 (Short Press)",
      "description": "选择/触发编号 1 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_1_short",
      "actionKey": "v_mfd_soft_select_mfd_1_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-60",
      "listType": "game",
      "order": 60,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 1 (Long Press)",
      "description": "选择/触发编号 1 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_1_long",
      "actionKey": "v_mfd_soft_select_mfd_1_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-61",
      "listType": "game",
      "order": 61,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 2 (Short Press)",
      "description": "选择/触发编号 2 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_2_short",
      "actionKey": "v_mfd_soft_select_mfd_2_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-62",
      "listType": "game",
      "order": 62,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 2 (Long Press)",
      "description": "选择/触发编号 2 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_2_long",
      "actionKey": "v_mfd_soft_select_mfd_2_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-63",
      "listType": "game",
      "order": 63,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 3 (Short Press)",
      "description": "选择/触发编号 3 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_3_short",
      "actionKey": "v_mfd_soft_select_mfd_3_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-64",
      "listType": "game",
      "order": 64,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 3 (Long Press)",
      "description": "选择/触发编号 3 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_3_long",
      "actionKey": "v_mfd_soft_select_mfd_3_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-65",
      "listType": "game",
      "order": 65,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 4 (Short Press)",
      "description": "选择/触发编号 4 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_4_short",
      "actionKey": "v_mfd_soft_select_mfd_4_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-66",
      "listType": "game",
      "order": 66,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 4 (Long Press)",
      "description": "选择/触发编号 4 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_4_long",
      "actionKey": "v_mfd_soft_select_mfd_4_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-67",
      "listType": "game",
      "order": 67,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 5 (Short Press)",
      "description": "选择/触发编号 5 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_5_short",
      "actionKey": "v_mfd_soft_select_mfd_5_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-68",
      "listType": "game",
      "order": 68,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 5 (Long Press)",
      "description": "选择/触发编号 5 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_5_long",
      "actionKey": "v_mfd_soft_select_mfd_5_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-69",
      "listType": "game",
      "order": 69,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 6 (Short Press)",
      "description": "选择/触发编号 6 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_6_short",
      "actionKey": "v_mfd_soft_select_mfd_6_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-70",
      "listType": "game",
      "order": 70,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 6 (Long Press)",
      "description": "选择/触发编号 6 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_6_long",
      "actionKey": "v_mfd_soft_select_mfd_6_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-71",
      "listType": "game",
      "order": 71,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 7 (Short Press)",
      "description": "选择/触发编号 7 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_7_short",
      "actionKey": "v_mfd_soft_select_mfd_7_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-72",
      "listType": "game",
      "order": 72,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 7 (Long Press)",
      "description": "选择/触发编号 7 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_7_long",
      "actionKey": "v_mfd_soft_select_mfd_7_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-73",
      "listType": "game",
      "order": 73,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 8 (Short Press)",
      "description": "选择/触发编号 8 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_8_short",
      "actionKey": "v_mfd_soft_select_mfd_8_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-74",
      "listType": "game",
      "order": 74,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 8 (Long Press)",
      "description": "选择/触发编号 8 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_8_long",
      "actionKey": "v_mfd_soft_select_mfd_8_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-75",
      "listType": "game",
      "order": 75,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 9 (Short Press)",
      "description": "选择/触发编号 9 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_9_short",
      "actionKey": "v_mfd_soft_select_mfd_9_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-76",
      "listType": "game",
      "order": 76,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 9 (Long Press)",
      "description": "选择/触发编号 9 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "2",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_9_long",
      "actionKey": "v_mfd_soft_select_mfd_9_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-77",
      "listType": "game",
      "order": 77,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 10 (Short Press)",
      "description": "选择/触发编号 10 的 MFD 控件（短按）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_soft_select_mfd_10_short",
      "actionKey": "v_mfd_soft_select_mfd_10_short",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-78",
      "listType": "game",
      "order": 78,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Select - MFD 10 (Long Press)",
      "description": "选择/触发编号 10 的 MFD 控件（按住）；多屏座舱中可直接定位对应显示器。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_soft_select_mfd_10_long",
      "actionKey": "v_mfd_soft_select_mfd_10_long",
      "suggestedInput": "LC1 Center / LB1 + LC1 Center",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-79",
      "listType": "game",
      "order": 79,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Quick Action - Self Repair All",
      "description": "在 MFD 触发“本舰全部维修”快捷操作；停靠并具备维修服务时快速恢复舰船。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_self_status_short",
      "actionKey": "v_mfd_select_view_self_status_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-80",
      "listType": "game",
      "order": 80,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Self Status (Short Press)",
      "description": "将 MFD 直接切到“本舰状态”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-81",
      "listType": "game",
      "order": 81,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Self Status (Long Press)",
      "description": "将 MFD 直接切到“本舰状态”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_self_status_long",
      "actionKey": "v_mfd_select_view_self_status_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-82",
      "listType": "game",
      "order": 82,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Target Status (Short Press)",
      "description": "将 MFD 直接切到“目标状态”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_target_status_short",
      "actionKey": "v_mfd_select_view_target_status_short",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-83",
      "listType": "game",
      "order": 83,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Target Status (Long Press)",
      "description": "将 MFD 直接切到“目标状态”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_target_status_long",
      "actionKey": "v_mfd_select_view_target_status_long",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-84",
      "listType": "game",
      "order": 84,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Scanning (Short Press)",
      "description": "将 MFD 直接切到“扫描”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_scanning_short",
      "actionKey": "v_mfd_select_view_scanning_short",
      "suggestedInput": "RB1 + RC1 / RA4 Center / RB1 + RA2",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-85",
      "listType": "game",
      "order": 85,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Scanning (Long Press)",
      "description": "将 MFD 直接切到“扫描”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_scanning_long",
      "actionKey": "v_mfd_select_view_scanning_long",
      "suggestedInput": "RB1 + RC1 / RA4 Center / RB1 + RA2",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-86",
      "listType": "game",
      "order": 86,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Vehicle Configuration (Short Press)",
      "description": "将 MFD 直接切到“载具配置”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_configuration_short",
      "actionKey": "v_mfd_select_view_configuration_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-87",
      "listType": "game",
      "order": 87,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Vehicle Configuration (Long Press)",
      "description": "将 MFD 直接切到“载具配置”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_configuration_long",
      "actionKey": "v_mfd_select_view_configuration_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-88",
      "listType": "game",
      "order": 88,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Communications (Short Press)",
      "description": "将 MFD 直接切到“通信”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_comms_short",
      "actionKey": "v_mfd_select_view_comms_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-89",
      "listType": "game",
      "order": 89,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Communications (Long Press)",
      "description": "将 MFD 直接切到“通信”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_comms_long",
      "actionKey": "v_mfd_select_view_comms_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-90",
      "listType": "game",
      "order": 90,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - IFCS (Short Press)",
      "description": "将 MFD 直接切到“飞控（IFCS）”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_ifcs_short",
      "actionKey": "v_mfd_select_view_ifcs_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-91",
      "listType": "game",
      "order": 91,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - IFCS (Long Press)",
      "description": "将 MFD 直接切到“飞控（IFCS）”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_ifcs_long",
      "actionKey": "v_mfd_select_view_ifcs_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-92",
      "listType": "game",
      "order": 92,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Diagnostics (Short Press)",
      "description": "将 MFD 直接切到“诊断”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_diagnostics_short",
      "actionKey": "v_mfd_select_view_diagnostics_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-93",
      "listType": "game",
      "order": 93,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Diagnostics (Long Press)",
      "description": "将 MFD 直接切到“诊断”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_diagnostics_long",
      "actionKey": "v_mfd_select_view_diagnostics_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-94",
      "listType": "game",
      "order": 94,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Resource Network (Short Press)",
      "description": "将 MFD 直接切到“资源网络”页面（短按）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_mfd_select_view_resource_network_short",
      "actionKey": "v_mfd_select_view_resource_network_short",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-95",
      "listType": "game",
      "order": 95,
      "group": "Vehicles - Multi Function Displays (MFDs)",
      "nameZh": "",
      "nameEn": "MFD - Set Page - Resource Network (Long Press)",
      "description": "将 MFD 直接切到“资源网络”页面（按住）；在需要该类信息或控制时少走一层菜单。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_mfd_select_view_resource_network_long",
      "actionKey": "v_mfd_select_view_resource_network_long",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-96",
      "listType": "game",
      "order": 96,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look left",
      "description": "将载具视角向左侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_yaw_left",
      "actionKey": "v_view_yaw_left",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-97",
      "listType": "game",
      "order": 97,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look right",
      "description": "将载具视角向右侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_yaw_right",
      "actionKey": "v_view_yaw_right",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-98",
      "listType": "game",
      "order": 98,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look left / right",
      "description": "将载具视角向左右两侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_yaw",
      "actionKey": "v_view_yaw",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-99",
      "listType": "game",
      "order": 99,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look up",
      "description": "将载具视角向上方查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_pitch_up",
      "actionKey": "v_view_pitch_up",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-100",
      "listType": "game",
      "order": 100,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look down",
      "description": "将载具视角向下方查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_pitch_down",
      "actionKey": "v_view_pitch_down",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-101",
      "listType": "game",
      "order": 101,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Look up / down",
      "description": "将载具视角向上下两侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_pitch",
      "actionKey": "v_view_pitch",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-102",
      "listType": "game",
      "order": 102,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Cycle camera view",
      "description": "按顺序切换舰船镜头视角；起降时可快速检查起落架、船体和周边障碍。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_view_cycle_fwd",
      "actionKey": "v_view_cycle_fwd",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-103",
      "listType": "game",
      "order": 103,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Cycle camera orbit mode",
      "description": "切换第三人称镜头的环绕模式；用于在不改变飞行输入时调整观察方式。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_mode",
      "actionKey": "v_view_mode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-104",
      "listType": "game",
      "order": 104,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Zoom in (3rd person view)",
      "description": "拉近第三人称镜头；用于精看舰船姿态或狭窄区域。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_zoom_in",
      "actionKey": "v_view_zoom_in",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-105",
      "listType": "game",
      "order": 105,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Zoom out (3rd person view)",
      "description": "拉远第三人称镜头；用于获得更宽的舰船与障碍物视野。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_zoom_out",
      "actionKey": "v_view_zoom_out",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-106",
      "listType": "game",
      "order": 106,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Freelook (Hold)",
      "description": "按住后自由查看，不把视角输入传给载具；降落时查看四周而不偏转舰船。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "v_view_freelook_mode",
      "actionKey": "v_view_freelook_mode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-107",
      "listType": "game",
      "order": 107,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In and Out (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_dynamic_zoom_rel",
      "actionKey": "v_view_dynamic_zoom_rel",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-108",
      "listType": "game",
      "order": 108,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "v_view_dynamic_zoom_rel_in",
      "actionKey": "v_view_dynamic_zoom_rel_in",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-109",
      "listType": "game",
      "order": 109,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Dynamic Zoom Out (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "v_view_dynamic_zoom_rel_out",
      "actionKey": "v_view_dynamic_zoom_rel_out",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-110",
      "listType": "game",
      "order": 110,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In and Out (abs.)",
      "description": "控制动态缩放（绝对轴）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_dynamic_zoom_abs",
      "actionKey": "v_view_dynamic_zoom_abs",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-111",
      "listType": "game",
      "order": 111,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Dynamic Zoom Toggle (abs.)",
      "description": "控制动态缩放（绝对轴）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "v_view_dynamic_zoom_abs_toggle",
      "actionKey": "v_view_dynamic_zoom_abs_toggle",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-112",
      "listType": "game",
      "order": 112,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Precision Targeting - Hold",
      "description": "按住启用精确瞄准；需要临时细调观察/瞄准时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-113",
      "listType": "game",
      "order": 113,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Precision Targeting - Toggle On / Off",
      "description": "切换精确瞄准；需要更细的目标观察或控制时开启，再次操作恢复。",
      "repeatCount": "2",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_ifcs_toggle_esp",
      "actionKey": "v_ifcs_toggle_esp",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-114",
      "listType": "game",
      "order": 114,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Precision Targeting - Maximum Zoom (Hold)",
      "description": "按住时将精确瞄准切到最大缩放；远距离观察或稳定瞄准时使用，松开后恢复。",
      "repeatCount": "1",
      "activationMode": "DELAYED HOLD",
      "actionId": "v_ads_stable_max_zoom_hold",
      "actionKey": "v_ads_stable_max_zoom_hold",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-115",
      "listType": "game",
      "order": 115,
      "group": "Vehicles - View",
      "nameZh": "",
      "nameEn": "Precision Targeting - Toggle Camera Tracking",
      "description": "切换精确瞄准时的镜头跟踪；按个人视角习惯决定是否让镜头随瞄准目标移动。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "headtrack_camera_enabled",
      "actionKey": "headtrack_camera_enabled",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-116",
      "listType": "game",
      "order": 116,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Pitch up",
      "description": "让舰船俯仰向上；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_pitch_up",
      "actionKey": "turret_pitch_up",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-117",
      "listType": "game",
      "order": 117,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Pitch down",
      "description": "让舰船俯仰向下；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_pitch_down",
      "actionKey": "turret_pitch_down",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-118",
      "listType": "game",
      "order": 118,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Pitch",
      "description": "用连续轴控制舰船俯仰；适合摇杆主轴的精细姿态操控。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_pitch_mouse",
      "actionKey": "turret_pitch_mouse",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-119",
      "listType": "game",
      "order": 119,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Yaw left",
      "description": "让舰船偏航向左；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_yaw_left",
      "actionKey": "turret_yaw_left",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-120",
      "listType": "game",
      "order": 120,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Yaw right",
      "description": "让舰船偏航向右；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_yaw_right",
      "actionKey": "turret_yaw_right",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-121",
      "listType": "game",
      "order": 121,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Yaw",
      "description": "用连续轴控制舰船偏航；适合摇杆主轴的精细姿态操控。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "turret_yaw_mouse",
      "actionKey": "turret_yaw_mouse",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-122",
      "listType": "game",
      "order": 122,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Roll left",
      "description": "让舰船滚转向左；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "zgt_roll_left",
      "actionKey": "zgt_roll_left",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-123",
      "listType": "game",
      "order": 123,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Roll right",
      "description": "让舰船滚转向右；基础姿态控制，用于瞄准、转向和姿态修正。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "zgt_roll_right",
      "actionKey": "zgt_roll_right",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-124",
      "listType": "game",
      "order": 124,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Roll",
      "description": "用连续轴控制舰船滚转；适合摇杆主轴的精细姿态操控。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_roll_mouse",
      "actionKey": "v_roll_mouse",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-125",
      "listType": "game",
      "order": 125,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Swap Yaw / Roll (Toggle)",
      "description": "交换偏航和滚转的控制轴；用于适配不同摇杆习惯，切换后应立即确认手感。",
      "repeatCount": "2",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_toggle_yaw_roll_swap",
      "actionKey": "v_toggle_yaw_roll_swap",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-126",
      "listType": "game",
      "order": 126,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe up (abs.)",
      "description": "向上平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_up",
      "actionKey": "v_strafe_up",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-127",
      "listType": "game",
      "order": 127,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe down (abs.)",
      "description": "向下平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_down",
      "actionKey": "v_strafe_down",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-128",
      "listType": "game",
      "order": 128,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe up / down (abs.)",
      "description": "向上平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_vertical",
      "actionKey": "v_strafe_vertical",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-129",
      "listType": "game",
      "order": 129,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe left (abs.)",
      "description": "向左平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_left",
      "actionKey": "v_strafe_left",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-130",
      "listType": "game",
      "order": 130,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe right (abs.)",
      "description": "向右平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_right",
      "actionKey": "v_strafe_right",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-131",
      "listType": "game",
      "order": 131,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Strafe left / right (abs.)",
      "description": "向左平移推进；悬停、入库或贴近障碍时做横向/垂直微调。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_strafe_lateral",
      "actionKey": "v_strafe_lateral",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-132",
      "listType": "game",
      "order": 132,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Increase",
      "description": "提高前向推进/油门；起飞后加速或追赶目标时逐步加大。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_strafe_forward",
      "actionKey": "v_strafe_forward",
      "suggestedInput": "L Stick Forward/Back",
      "priority": "P1-飞控轴",
      "note": "底座小油门不重复主推进。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-133",
      "listType": "game",
      "order": 133,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Decrease",
      "description": "降低前向推进/油门；进近或接近目标时收速。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_strafe_back",
      "actionKey": "v_strafe_back",
      "suggestedInput": "L Stick Forward/Back",
      "priority": "P1-飞控轴",
      "note": "底座小油门不重复主推进。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-134",
      "listType": "game",
      "order": 134,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Forward / Back",
      "description": "用连续轴控制前/后向推进；适合油门或推拉杆的直接速度输入。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_strafe_longitudinal",
      "actionKey": "v_strafe_longitudinal",
      "suggestedInput": "L Stick Forward/Back",
      "priority": "P1-飞控轴",
      "note": "底座小油门不重复主推进。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-135",
      "listType": "game",
      "order": 135,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Forward / Back Invert",
      "description": "用反向轴控制前/后向推进；用于与倒置油门硬件匹配。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_strafe_longitudinal_invert",
      "actionKey": "v_strafe_longitudinal_invert",
      "suggestedInput": "L Stick Forward/Back",
      "priority": "P1-飞控轴",
      "note": "底座小油门不重复主推进。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-136",
      "listType": "game",
      "order": 136,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Cruise Mode - Toggle",
      "description": "切换巡航油门；在持续巡航和即时推进之间切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_ifcs_throttle_swap_mode",
      "actionKey": "v_ifcs_throttle_swap_mode",
      "suggestedInput": "LF2",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-137",
      "listType": "game",
      "order": 137,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Cruise Mode - Enable",
      "description": "开启巡航油门；松开输入后仍维持当前推进，长距离航行时减轻持续按压。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_ifcs_throttle_set_sticky",
      "actionKey": "v_ifcs_throttle_set_sticky",
      "suggestedInput": "LF2",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-138",
      "listType": "game",
      "order": 138,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Cruise Mode - Disable",
      "description": "关闭巡航油门；重新由实时输入控制推进。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_ifcs_throttle_set_normal",
      "actionKey": "v_ifcs_throttle_set_normal",
      "suggestedInput": "LF2",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-139",
      "listType": "game",
      "order": 139,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set (Long Press)",
      "description": "记录当前油门为微调值（按住）；需要稳定维持某个推进量时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_strafe_trim_set_long",
      "actionKey": "v_strafe_trim_set_long",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-140",
      "listType": "game",
      "order": 140,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set (Short Press)",
      "description": "记录当前油门为微调值（短按）；需要稳定维持某个推进量时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_strafe_trim_set_short",
      "actionKey": "v_strafe_trim_set_short",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-141",
      "listType": "game",
      "order": 141,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set To 100% (Long Press)",
      "description": "将油门微调设为 100%（按住）；需要立即恢复满推时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_strafe_trim_set_100_long",
      "actionKey": "v_strafe_trim_set_100_long",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-142",
      "listType": "game",
      "order": 142,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set To 100% (Short Press)",
      "description": "将油门微调设为 100%（短按）；需要立即恢复满推时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_strafe_trim_set_100_short",
      "actionKey": "v_strafe_trim_set_100_short",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-143",
      "listType": "game",
      "order": 143,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set To 50% (Long Press)",
      "description": "将油门微调设为 50%（按住）；编队或进近时快速回到中等推力。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_strafe_trim_set_50_long",
      "actionKey": "v_strafe_trim_set_50_long",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-144",
      "listType": "game",
      "order": 144,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Set To 50% (Short Press)",
      "description": "将油门微调设为 50%（短按）；编队或进近时快速回到中等推力。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_strafe_trim_set_50_short",
      "actionKey": "v_strafe_trim_set_50_short",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-145",
      "listType": "game",
      "order": 145,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Release (Long Press)",
      "description": "解除油门微调（按住）；结束临时固定推力后恢复手动控制。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_strafe_trim_reset_long",
      "actionKey": "v_strafe_trim_reset_long",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-146",
      "listType": "game",
      "order": 146,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Throttle - Trim - Release (Short Press)",
      "description": "解除油门微调（短按）；结束临时固定推力后恢复手动控制。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_strafe_trim_reset_short",
      "actionKey": "v_strafe_trim_reset_short",
      "suggestedInput": "LF3",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-147",
      "listType": "game",
      "order": 147,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Enable / Disable decoupled mode",
      "description": "切换解耦飞行；在惯性漂移与自动减速的操控方式间切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LSW1 Up/Down",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-148",
      "listType": "game",
      "order": 148,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Enable decoupled mode",
      "description": "切换解耦飞行；在惯性漂移与自动减速的操控方式间切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LSW1 Up",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-149",
      "listType": "game",
      "order": 149,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Disable decoupled mode",
      "description": "切换解耦飞行；在惯性漂移与自动减速的操控方式间切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LSW1 Down",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-150",
      "listType": "game",
      "order": 150,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Boost",
      "description": "短时提升推进器响应与加速；脱离危险或快速机动时使用，注意热量与资源消耗。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_boost",
      "actionKey": "eva_boost",
      "suggestedInput": "L Trigger Stage 2",
      "priority": "P0-机动",
      "note": "若 Stage2 连带 Stage1，则改用独立瞬时键。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-151",
      "listType": "game",
      "order": 151,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Increase (Hold)",
      "description": "按住提高速度限制；持续放宽最大速度。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_speed_range_up",
      "actionKey": "v_speed_range_up",
      "suggestedInput": "L Encoder CW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-152",
      "listType": "game",
      "order": 152,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Decrease (Hold)",
      "description": "按住降低速度限制；持续收紧最大速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_speed_range_down",
      "actionKey": "v_speed_range_down",
      "suggestedInput": "L Encoder CCW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-153",
      "listType": "game",
      "order": 153,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Step Up (Tap)",
      "description": "按档提高速度限制；逐级放宽最大速度，适合不离杆调整。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Encoder CW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-154",
      "listType": "game",
      "order": 154,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Step Down (Tap)",
      "description": "按档降低速度限制；进近时快速收紧最高速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Encoder CCW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-155",
      "listType": "game",
      "order": 155,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter (rel)",
      "description": "用相对输入设定速度限制；将硬件位置直接映射为最高速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_speed_range_rel",
      "actionKey": "v_speed_range_rel",
      "suggestedInput": "L Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-156",
      "listType": "game",
      "order": 156,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter (abs)",
      "description": "用绝对轴设定速度限制；将硬件位置直接映射为最高速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_speed_range_abs",
      "actionKey": "v_speed_range_abs",
      "suggestedInput": "L Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-157",
      "listType": "game",
      "order": 157,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Enable / Disable",
      "description": "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Encoder Press / LF3",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-158",
      "listType": "game",
      "order": 158,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Enable",
      "description": "开启速度限制器；进机库或贴地飞行时提高细控能力。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Encoder Press / LF3",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-159",
      "listType": "game",
      "order": 159,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Speed Limiter - Disable",
      "description": "关闭速度限制器；需要完整速度范围时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Encoder Press / LF3",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-160",
      "listType": "game",
      "order": 160,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter - Increase (Hold)",
      "description": "提高加速度限制；需要更积极的推进响应时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_accel_range_up",
      "actionKey": "v_accel_range_up",
      "suggestedInput": "R Encoder CW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-161",
      "listType": "game",
      "order": 161,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter - Decrease (Hold)",
      "description": "降低加速度限制；精细机动或降低过冲时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_accel_range_down",
      "actionKey": "v_accel_range_down",
      "suggestedInput": "R Encoder CCW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-162",
      "listType": "game",
      "order": 162,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter - Step Up (Tap)",
      "description": "用相对输入调节加速度限制；按操控器位置控制推进响应上限。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_accel_range_rel",
      "actionKey": "v_accel_range_rel",
      "suggestedInput": "R Encoder CW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-163",
      "listType": "game",
      "order": 163,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter - Step Down (Tap)",
      "description": "用相对输入调节加速度限制；按操控器位置控制推进响应上限。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Encoder CCW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-164",
      "listType": "game",
      "order": 164,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter (rel)",
      "description": "用相对输入调节加速度限制；按操控器位置控制推进响应上限。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-165",
      "listType": "game",
      "order": 165,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Acceleration Limiter (abs)",
      "description": "用绝对轴调节加速度限制；按操控器位置控制推进响应上限。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_accel_range_abs",
      "actionKey": "v_accel_range_abs",
      "suggestedInput": "R Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-166",
      "listType": "game",
      "order": 166,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Spacebrake",
      "description": "触发太空刹车，迅速抵消当前运动；进库、避障或需要紧急停船时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_space_brake",
      "actionKey": "v_space_brake",
      "suggestedInput": "L Trigger Stage 1",
      "priority": "P0-机动",
      "note": "不放底座，不加 Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-167",
      "listType": "game",
      "order": 167,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Lock Pitch / Yaw Movement (Toggle / Hold)",
      "description": "锁定俯仰与偏航输入；地面载具停车或需要稳定视角时避免误转向。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_lock_rotation",
      "actionKey": "v_lock_rotation",
      "suggestedInput": "Keyboard；必要时 RF2",
      "priority": "P4-飞控辅助",
      "note": "若 RF2 已给 G-Safe，则保持键盘默认。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-168",
      "listType": "game",
      "order": 168,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "G-Force safety on",
      "description": "开启 G 力安全辅助；高机动飞行时帮助维持保护限制。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_gsafe_on",
      "actionKey": "v_ifcs_gsafe_on",
      "suggestedInput": "RF2",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-169",
      "listType": "game",
      "order": 169,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "G-Force safety off",
      "description": "关闭 G 力安全辅助；只在明确接受更少保护的操控方式时使用。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_gsafe_off",
      "actionKey": "v_ifcs_gsafe_off",
      "suggestedInput": "RF2",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-170",
      "listType": "game",
      "order": 170,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "G-Force Safety On / Off (Toggle / Hold)",
      "description": "切换 G 力安全辅助；按自己的机动与舒适需求调整飞控保护。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_ifcs_toggle_gforce_safety",
      "actionKey": "v_ifcs_toggle_gforce_safety",
      "suggestedInput": "RF2",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-171",
      "listType": "game",
      "order": 171,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "E.S.P. - Toggle On / Off (Press)",
      "description": "切换 ESP 飞控辅助；按个人手感在辅助与更直接控制间选择。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RF3",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-172",
      "listType": "game",
      "order": 172,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "E.S.P. - Enable Temporarily (Hold)",
      "description": "按住临时启用 ESP 飞控辅助；需要短暂获得辅助修正时使用。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "v_ifcs_esp_hold",
      "actionKey": "v_ifcs_esp_hold",
      "suggestedInput": "RF3",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-173",
      "listType": "game",
      "order": 173,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Landing System (Toggle)",
      "description": "开/收起落架；获准进近前放下，离开停机位后再收起。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_toggle_landing_system",
      "actionKey": "v_toggle_landing_system",
      "suggestedInput": "LF1",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-174",
      "listType": "game",
      "order": 174,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Landing System (Deploy)",
      "description": "放下起落架；最终进近和接触停机坪前使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_deploy_landing_system",
      "actionKey": "v_deploy_landing_system",
      "suggestedInput": "LF1",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-175",
      "listType": "game",
      "order": 175,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Landing System (Retract)",
      "description": "收起起落架；确认离开停机坪并安全爬升后使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_retract_landing_system",
      "actionKey": "v_retract_landing_system",
      "suggestedInput": "LF1",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-176",
      "listType": "game",
      "order": 176,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Toggle VTOL",
      "description": "切换 VTOL 推进器构型；大气层悬停、垂直起降时提升垂直效率，代价是前向性能。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_vtol",
      "actionKey": "v_toggle_vtol",
      "suggestedInput": "RSW1 Up/Down",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-177",
      "listType": "game",
      "order": 177,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Enable VTOL",
      "description": "开启 VTOL 构型；在大气层垂直起降或悬停时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RSW1 Up",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-178",
      "listType": "game",
      "order": 178,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Disable VTOL",
      "description": "关闭 VTOL 构型；恢复更适合前向飞行的推进配置。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RSW1 Down",
      "priority": "P2-飞控状态",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-179",
      "listType": "game",
      "order": 179,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Expand Configuration",
      "description": "展开舰船可变构型；按舰船设计进入所需的工作/飞行形态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_transform_deploy",
      "actionKey": "v_transform_deploy",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-180",
      "listType": "game",
      "order": 180,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Retract Configuration",
      "description": "收回舰船可变构型；完成特殊形态用途后恢复常态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_transform_retract",
      "actionKey": "v_transform_retract",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-181",
      "listType": "game",
      "order": 181,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Cycle Configuration",
      "description": "循环舰船可变构型；逐个试切可用形态并确认当前状态。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_transform_cycle",
      "actionKey": "v_transform_cycle",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-182",
      "listType": "game",
      "order": 182,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Autoland",
      "description": "请求/执行自动着陆；已获准并接近可用停泊位时可减少最后阶段的手动操作。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_autoland",
      "actionKey": "v_autoland",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-183",
      "listType": "game",
      "order": 183,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Request Landing",
      "description": "呼叫空管申请降落；接近有 Landing Services 的地点后取得机库、停机坪或对接口分配。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_atc_request",
      "actionKey": "v_atc_request",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-184",
      "listType": "game",
      "order": 184,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Request Cargo Loading",
      "description": "向空管请求货运装卸区域；需要使用指定货运服务时呼叫。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_atc_loading_area_request",
      "actionKey": "v_atc_loading_area_request",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-185",
      "listType": "game",
      "order": 185,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Cycle Master Mode (Short Press)",
      "description": "以短按方式循环主模式；在 NAV 与 SCM 等主模式间快速切换。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_master_mode_cycle_long",
      "actionKey": "v_master_mode_cycle_long",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-186",
      "listType": "game",
      "order": 186,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Cycle Master Mode (Long Press)",
      "description": "以长按方式循环主模式；在 NAV 与 SCM 等主模式间反向/扩展切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-187",
      "listType": "game",
      "order": 187,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Set Master Mode to Nav",
      "description": "将主模式设为 NAV；量子旅行前需要进入 NAV，再选择 Quantum 操作模式校准。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "v_master_mode_set_nav",
      "actionKey": "v_master_mode_set_nav",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-188",
      "listType": "game",
      "order": 188,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Set Master Mode to SCM",
      "description": "将主模式设为 SCM；常规机动和交战时使用的空间作战机动模式。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_master_mode_set_scm",
      "actionKey": "v_master_mode_set_scm",
      "suggestedInput": "RA3 Center",
      "priority": "P2-模式",
      "note": "避免 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-189",
      "listType": "game",
      "order": 189,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Jump Drive - Request Jump",
      "description": "请求跳跃驱动；满足航线与模式条件后启动跳跃准备。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_toggle_jump_request",
      "actionKey": "v_toggle_jump_request",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-190",
      "listType": "game",
      "order": 190,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Gravity Compensation - Toggle",
      "description": "切换重力补偿；在行星表面低速悬停或作业时减少持续修正。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_ifcs_toggle_gravity_compensation",
      "actionKey": "v_ifcs_toggle_gravity_compensation",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-191",
      "listType": "game",
      "order": 191,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Gravity Compensation - Enable",
      "description": "开启重力补偿；大气层定点和低速作业更省力。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_gravity_compensation_on",
      "actionKey": "v_ifcs_gravity_compensation_on",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-192",
      "listType": "game",
      "order": 192,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Gravity Compensation - Disable",
      "description": "关闭重力补偿；只在需要完全手动处理重力影响时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_gravity_compensation_off",
      "actionKey": "v_ifcs_gravity_compensation_off",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-193",
      "listType": "game",
      "order": 193,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Wind Compensation - Toggle",
      "description": "切换风力补偿；按大气层飞行手感选择 IFCS 辅助。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-194",
      "listType": "game",
      "order": 194,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Wind Compensation - Enable",
      "description": "开启风力补偿；大气层飞行时让 IFCS 帮助抵消风的影响。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-195",
      "listType": "game",
      "order": 195,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Wind Compensation - Disable",
      "description": "关闭风力补偿；需要完全手动处理风影响时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-196",
      "listType": "game",
      "order": 196,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Automatic Precision Mode - Toggle",
      "description": "切换自动精确模式；按飞行阶段选择自动细控辅助。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-197",
      "listType": "game",
      "order": 197,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Automatic Precision Mode - Enable",
      "description": "开启自动精确模式；系统在合适条件下提供更细的操控。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_auto_precision_mode_on",
      "actionKey": "v_auto_precision_mode_on",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-198",
      "listType": "game",
      "order": 198,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Automatic Precision Mode - Disable",
      "description": "关闭自动精确模式；保持当前直接操控方式。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_auto_precision_mode_off",
      "actionKey": "v_auto_precision_mode_off",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-199",
      "listType": "game",
      "order": 199,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Proximity Assist - Toggle",
      "description": "切换近距辅助；狭窄空间机动时可减少碰撞风险。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_ifcs_proximity_assist_toggle",
      "actionKey": "v_ifcs_proximity_assist_toggle",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-200",
      "listType": "game",
      "order": 200,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Proximity Assist - Enable",
      "description": "开启近距辅助；贴近地面、机库或物体时获得辅助保护。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-201",
      "listType": "game",
      "order": 201,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Proximity Assist - Disable",
      "description": "关闭近距辅助；只在明确接受更少近距保护时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-202",
      "listType": "game",
      "order": 202,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Stability - Toggle",
      "description": "切换 IFCS 稳定辅助；按飞行手感选择稳定程度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-203",
      "listType": "game",
      "order": 203,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Stability - Enable",
      "description": "开启 IFCS 稳定辅助；需要更平稳的飞行响应时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-204",
      "listType": "game",
      "order": 204,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Stability - Disable",
      "description": "关闭 IFCS 稳定辅助；改为更直接的飞控响应。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-205",
      "listType": "game",
      "order": 205,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS Command Behaviour Toggle",
      "description": "切换 IFCS 指令行为；这是飞控偏好设置，建议在试飞时确认效果。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-206",
      "listType": "game",
      "order": 206,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS Command Behaviour On",
      "description": "将 IFCS 指令行为设为开启；切换后应在安全区域确认飞控响应。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_proximity_assist_on",
      "actionKey": "v_ifcs_proximity_assist_on",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-207",
      "listType": "game",
      "order": 207,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS Command Behaviour Off",
      "description": "将 IFCS 指令行为设为关闭；切换后应在安全区域确认飞控响应。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_ifcs_proximity_assist_off",
      "actionKey": "v_ifcs_proximity_assist_off",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-208",
      "listType": "game",
      "order": 208,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Core - Toggle On / Off",
      "description": "切换 IFCS 核心；影响基础飞控辅助，避免误触。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-209",
      "listType": "game",
      "order": 209,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Core - Enable",
      "description": "开启 IFCS 核心；恢复飞控核心辅助。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-210",
      "listType": "game",
      "order": 210,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "IFCS - Core - Disable",
      "description": "关闭 IFCS 核心；仅在明确理解影响时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-211",
      "listType": "game",
      "order": 211,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Reset Flight Accelerometer",
      "description": "重置飞行加速度计的最大读数；完成一次高 G 机动后重新记录峰值。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_ifcs_reset_gmeter_max",
      "actionKey": "v_ifcs_reset_gmeter_max",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-212",
      "listType": "game",
      "order": 212,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Advanced HUD - Toggle",
      "description": "切换高级 HUD；按需要显示或隐藏扩展飞行信息。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-213",
      "listType": "game",
      "order": 213,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Advanced HUD - Enable",
      "description": "开启高级 HUD；需要更多飞行信息时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-214",
      "listType": "game",
      "order": 214,
      "group": "Flight - Movement",
      "nameZh": "",
      "nameEn": "Advanced HUD - Disable",
      "description": "关闭高级 HUD；希望界面更简洁时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-215",
      "listType": "game",
      "order": 215,
      "group": "Flight - Quantum Travel",
      "nameZh": "",
      "nameEn": "Engage Quantum Drive (Hold)",
      "description": "按住接合量子驱动；已设航线、处于 NAV 与 Quantum 模式且校准完成后开始量子旅行。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RF1",
      "priority": "P3-航行",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight",
        "cig-quantum"
      ]
    },
    {
      "id": "game-216",
      "listType": "game",
      "order": 216,
      "group": "Flight - Docking",
      "nameZh": "",
      "nameEn": "Toggle Docking Mode",
      "description": "切换对接模式；准备靠近空间站或大型舰船的对接口时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_toggle_docking_mode",
      "actionKey": "v_toggle_docking_mode",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-217",
      "listType": "game",
      "order": 217,
      "group": "Flight - Docking",
      "nameZh": "",
      "nameEn": "Invoke Docking",
      "description": "启动对接流程；对齐并接近对接口后完成最后的夹具连接。",
      "repeatCount": "1",
      "activationMode": "DELAYED HOLD",
      "actionId": "v_invoke_docking",
      "actionKey": "v_invoke_docking",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-218",
      "listType": "game",
      "order": 218,
      "group": "Flight - Docking",
      "nameZh": "",
      "nameEn": "Toggle Docking Camera",
      "description": "切换对接摄像机；对接时用专用视图确认位置与对齐。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_dock_toggle_view",
      "actionKey": "v_dock_toggle_view",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-219",
      "listType": "game",
      "order": 219,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle On / Off (Long Press)",
      "description": "开启自动目标选择；需要系统自动协助选取目标时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_auto_targeting_toggle_long",
      "actionKey": "v_auto_targeting_toggle_long",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-220",
      "listType": "game",
      "order": 220,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle On / Off (Short Press)",
      "description": "开启自动目标选择；需要系统自动协助选取目标时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_auto_targeting_toggle_short",
      "actionKey": "v_auto_targeting_toggle_short",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-221",
      "listType": "game",
      "order": 221,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle On (Short Press)",
      "description": "开启自动目标选择；需要系统自动协助选取目标时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_auto_targeting_enable_short",
      "actionKey": "v_auto_targeting_enable_short",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-222",
      "listType": "game",
      "order": 222,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle On (Long Press)",
      "description": "开启自动目标选择；需要系统自动协助选取目标时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_auto_targeting_enable_long",
      "actionKey": "v_auto_targeting_enable_long",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-223",
      "listType": "game",
      "order": 223,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle Off (Short Press)",
      "description": "关闭自动目标选择；需要完全手动管理目标时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_auto_targeting_disable_short",
      "actionKey": "v_auto_targeting_disable_short",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-224",
      "listType": "game",
      "order": 224,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Targeting - Toggle Off (Long Press)",
      "description": "关闭自动目标选择；需要完全手动管理目标时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_auto_targeting_disable_long",
      "actionKey": "v_auto_targeting_disable_long",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-225",
      "listType": "game",
      "order": 225,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 1 - Lock / Unlock Pinned Target",
      "description": "锁定/解锁编号 1 的固定目标；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_lock_index_1",
      "actionKey": "v_target_toggle_lock_index_1",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-226",
      "listType": "game",
      "order": 226,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 2 - Lock / Unlock Pinned Target",
      "description": "锁定/解锁编号 2 的固定目标；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_lock_index_2",
      "actionKey": "v_target_toggle_lock_index_2",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-227",
      "listType": "game",
      "order": 227,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 3 - Lock / Unlock Pinned Target",
      "description": "锁定/解锁编号 3 的固定目标；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_lock_index_3",
      "actionKey": "v_target_toggle_lock_index_3",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-228",
      "listType": "game",
      "order": 228,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 1 - Pin / Unpin Selected Target",
      "description": "将当前选中目标固定到/移出编号 1；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_pin_index_1",
      "actionKey": "v_target_toggle_pin_index_1",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-229",
      "listType": "game",
      "order": 229,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 2 - Pin / Unpin Selected Target",
      "description": "将当前选中目标固定到/移出编号 2；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_pin_index_2",
      "actionKey": "v_target_toggle_pin_index_2",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-230",
      "listType": "game",
      "order": 230,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 3 - Pin / Unpin Selected Target",
      "description": "将当前选中目标固定到/移出编号 3；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_target_toggle_pin_index_3",
      "actionKey": "v_target_toggle_pin_index_3",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-231",
      "listType": "game",
      "order": 231,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 1 - Pin / Unpin Selected Target (Hold)",
      "description": "按住将当前选中目标固定到/移出编号 1；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_target_toggle_pin_index_1_hold",
      "actionKey": "v_target_toggle_pin_index_1_hold",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-232",
      "listType": "game",
      "order": 232,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 2 - Pin / Unpin Selected Target (Hold)",
      "description": "按住将当前选中目标固定到/移出编号 2；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_target_toggle_pin_index_2_hold",
      "actionKey": "v_target_toggle_pin_index_2_hold",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-233",
      "listType": "game",
      "order": 233,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Index 3 - Pin / Unpin Selected Target (Hold)",
      "description": "按住将当前选中目标固定到/移出编号 3；将常用目标保存在编号位后可快速取回或锁定。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_target_toggle_pin_index_3_hold",
      "actionKey": "v_target_toggle_pin_index_3_hold",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-234",
      "listType": "game",
      "order": 234,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Selected Target",
      "description": "固定当前选中目标；便于稍后在目标循环中快速回到它。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_pin_selected",
      "actionKey": "v_target_pin_selected",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-235",
      "listType": "game",
      "order": 235,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Unpin Selected Target",
      "description": "固定当前选中目标；便于稍后在目标循环中快速回到它。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_unpin_selected",
      "actionKey": "v_target_unpin_selected",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-236",
      "listType": "game",
      "order": 236,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Pin Selected Target (Hold)",
      "description": "固定当前选中目标；便于稍后在目标循环中快速回到它。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_target_pin_selected_hold",
      "actionKey": "v_target_pin_selected_hold",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-237",
      "listType": "game",
      "order": 237,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Unpin Selected Target (Hold)",
      "description": "固定当前选中目标；便于稍后在目标循环中快速回到它。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_target_unpin_selected_hold",
      "actionKey": "v_target_unpin_selected_hold",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-238",
      "listType": "game",
      "order": 238,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Remove All Pinned Targets",
      "description": "清除全部固定目标；交战或任务结束后整理目标列表。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_remove_all_pins",
      "actionKey": "v_target_remove_all_pins",
      "suggestedInput": "RD1 + RC1 Down",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-239",
      "listType": "game",
      "order": 239,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Lock Selected Target",
      "description": "锁定当前选中目标；武器、导弹或目标信息需要正式锁定时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_lock_selected",
      "actionKey": "v_target_lock_selected",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-240",
      "listType": "game",
      "order": 240,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Unlock Current Target",
      "description": "解除当前目标锁定；需要重新选择目标或避免继续跟踪时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_unlock",
      "actionKey": "v_target_unlock",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-241",
      "listType": "game",
      "order": 241,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Enable / Disable Look Ahead",
      "description": "切换 Look Ahead 视角行为；按飞行/瞄准习惯决定是否采用前视辅助。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_look_ahead_enable",
      "actionKey": "v_look_ahead_enable",
      "suggestedInput": "Head tracking / keyboard；必要时 RD1 + RA2 Hold",
      "priority": "P2-视角",
      "note": "不绑定到 A1 Center Long，不使用 RA3/RA4。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-242",
      "listType": "game",
      "order": 242,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Enable / Disable Target Padlock (Toggle, Hold)",
      "description": "切换目标锁视（Padlock）；狗斗时让视角持续跟随锁定目标。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_look_ahead_start_target_tracking",
      "actionKey": "v_look_ahead_start_target_tracking",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-243",
      "listType": "game",
      "order": 243,
      "group": "Vehicles - Targeting",
      "nameZh": "",
      "nameEn": "Auto Zoom On Selected Target On / Off (Toggle, Hold)",
      "description": "切换对选中目标的自动缩放；跟踪远近变化明显的目标时减少手动调镜。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_target_tracking_auto_zoom",
      "actionKey": "v_target_tracking_auto_zoom",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-244",
      "listType": "game",
      "order": 244,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Lock Target Under Reticle",
      "description": "锁定准星下的目标；直接把当前瞄准对象设为目标。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_under_reticle",
      "actionKey": "v_target_under_reticle",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-245",
      "listType": "game",
      "order": 245,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - In View - Back",
      "description": "在视野内目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_in_view_back",
      "actionKey": "v_target_cycle_in_view_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-246",
      "listType": "game",
      "order": 246,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - In View - Forward",
      "description": "在视野内目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_in_view_fwd",
      "actionKey": "v_target_cycle_in_view_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-247",
      "listType": "game",
      "order": 247,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - In View - Under Reticle",
      "description": "锁定准星下的目标；直接把当前瞄准对象设为目标。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_in_view_reset",
      "actionKey": "v_target_cycle_in_view_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-248",
      "listType": "game",
      "order": 248,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Pinned - Back",
      "description": "在固定目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_pinned_back",
      "actionKey": "v_target_cycle_pinned_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-249",
      "listType": "game",
      "order": 249,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Pinned - Forward",
      "description": "在固定目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_pinned_fwd",
      "actionKey": "v_target_cycle_pinned_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-250",
      "listType": "game",
      "order": 250,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Pinned - Reset to First",
      "description": "将固定目标列表重置到首个目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_pinned_reset",
      "actionKey": "v_target_cycle_pinned_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-251",
      "listType": "game",
      "order": 251,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Attackers - Back",
      "description": "在正在攻击你的目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_attacker_back",
      "actionKey": "v_target_cycle_attacker_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-252",
      "listType": "game",
      "order": 252,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Attackers - Forward",
      "description": "在正在攻击你的目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_attacker_fwd",
      "actionKey": "v_target_cycle_attacker_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-253",
      "listType": "game",
      "order": 253,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Attackers - Reset to Closest",
      "description": "将正在攻击你的目标列表重置到最近目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_attacker_reset",
      "actionKey": "v_target_cycle_attacker_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-254",
      "listType": "game",
      "order": 254,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Hostiles - Back",
      "description": "在敌对目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_hostile_back",
      "actionKey": "v_target_cycle_hostile_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-255",
      "listType": "game",
      "order": 255,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Hostiles - Forward",
      "description": "在敌对目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_hostile_fwd",
      "actionKey": "v_target_cycle_hostile_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-256",
      "listType": "game",
      "order": 256,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Hostiles - Reset to Closest",
      "description": "将敌对目标列表重置到最近目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_hostile_reset",
      "actionKey": "v_target_cycle_hostile_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-257",
      "listType": "game",
      "order": 257,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Friendlies - Back",
      "description": "在友方目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_friendly_back",
      "actionKey": "v_target_cycle_friendly_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-258",
      "listType": "game",
      "order": 258,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Friendlies - Forward",
      "description": "在友方目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_friendly_fwd",
      "actionKey": "v_target_cycle_friendly_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-259",
      "listType": "game",
      "order": 259,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Friendlies - Reset to Closest",
      "description": "将友方目标列表重置到最近目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_friendly_reset",
      "actionKey": "v_target_cycle_friendly_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-260",
      "listType": "game",
      "order": 260,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - All - Back",
      "description": "在全部目标列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_all_back",
      "actionKey": "v_target_cycle_all_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-261",
      "listType": "game",
      "order": 261,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - All - Forward",
      "description": "在全部目标列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_all_fwd",
      "actionKey": "v_target_cycle_all_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-262",
      "listType": "game",
      "order": 262,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - All - Reset to Closest",
      "description": "将全部目标列表重置到最近目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_all_reset",
      "actionKey": "v_target_cycle_all_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-263",
      "listType": "game",
      "order": 263,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Sub-Target - Back",
      "description": "在子目标部件列表中向前一项循环锁定；错过目标时反向切换。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_subitem_back",
      "actionKey": "v_target_cycle_subitem_back",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-264",
      "listType": "game",
      "order": 264,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Sub-Target - Forward",
      "description": "在子目标部件列表中向后一项循环锁定；快速浏览可锁定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_subitem_fwd",
      "actionKey": "v_target_cycle_subitem_fwd",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-265",
      "listType": "game",
      "order": 265,
      "group": "Vehicles - Target Cycling",
      "nameZh": "",
      "nameEn": "Cycle Lock - Sub-Target - Reset to Main Target",
      "description": "将子目标部件列表重置到主目标；需要快速回到默认起点时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_target_cycle_subitem_reset",
      "actionKey": "v_target_cycle_subitem_reset",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-266",
      "listType": "game",
      "order": 266,
      "group": "Flight - Target Hailing",
      "nameZh": "",
      "nameEn": "Hail Target",
      "description": "呼叫当前目标；请求对方回应、服务或通信时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RD1 + RC1",
      "priority": "P1-目标",
      "note": "按游戏项语义选择 Up/Down/Left/Right/Center。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-267",
      "listType": "game",
      "order": 267,
      "group": "Flight - Radar",
      "nameZh": "",
      "nameEn": "Activate Ping (Hold & Release)",
      "description": "按住并释放进行 Ping；扫描周边以寻找目标，但也可能暴露自己的存在。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RD1 + RC1 Center",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight",
        "cig-mining"
      ]
    },
    {
      "id": "game-268",
      "listType": "game",
      "order": 268,
      "group": "Vehicles - Scanning",
      "nameZh": "",
      "nameEn": "Activate Scanning",
      "description": "激活扫描；在采矿或探索前识别可扫描目标并获得其信息。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "v_scanning_trigger_scan",
      "actionKey": "v_scanning_trigger_scan",
      "suggestedInput": "RB1 + RC1 / RA4 Center / RB1 + RA2",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-269",
      "listType": "game",
      "order": 269,
      "group": "Vehicles - Scanning",
      "nameZh": "",
      "nameEn": "Increase Scanning Angle",
      "description": "增大扫描角度；先扩大搜索覆盖，再按需收窄目标。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_inc_scan_focus_level",
      "actionKey": "v_inc_scan_focus_level",
      "suggestedInput": "RB1 + RC1 Up",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-270",
      "listType": "game",
      "order": 270,
      "group": "Vehicles - Scanning",
      "nameZh": "",
      "nameEn": "Decrease Scanning Angle",
      "description": "减小扫描角度；锁定疑似目标后提高扫描聚焦。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_dec_scan_focus_level",
      "actionKey": "v_dec_scan_focus_level",
      "suggestedInput": "RB1 + RC1 Up",
      "priority": "P2-扫描",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-271",
      "listType": "game",
      "order": 271,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Fire Mining Laser (Toggle)",
      "description": "切换采矿激光开火；对准矿石后开始或停止破岩/提取过程。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_toggle_mining_laser_fire",
      "actionKey": "v_toggle_mining_laser_fire",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-272",
      "listType": "game",
      "order": 272,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Switch Mining Laser (Toggle)",
      "description": "切换已装备的采矿激光/激光头；根据目标矿石与当前阶段选择合适工具。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_mining_laser_type",
      "actionKey": "v_toggle_mining_laser_type",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-273",
      "listType": "game",
      "order": 273,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Increase Mining Laser Power",
      "description": "提高采矿激光功率；破岩时逐步加压，避免过快进入不稳定区。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_increase_mining_throttle",
      "actionKey": "v_increase_mining_throttle",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-274",
      "listType": "game",
      "order": 274,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Decrease Mining Laser Power",
      "description": "降低采矿激光功率；能量接近危险区或需要细调时立即回收。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_decrease_mining_throttle",
      "actionKey": "v_decrease_mining_throttle",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-275",
      "listType": "game",
      "order": 275,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Increase / Decrease Mining Laser Power",
      "description": "用连续轴调节采矿激光功率；便于在矿石能量窗口内细腻控制。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_mining_throttle",
      "actionKey": "v_mining_throttle",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-276",
      "listType": "game",
      "order": 276,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Activate Mining Module (Slot 1)",
      "description": "激活采矿模块槽 1；在破岩/提取窗口按模块效果处理矿石。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_mining_use_consumable1",
      "actionKey": "v_mining_use_consumable1",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-277",
      "listType": "game",
      "order": 277,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Activate Mining Module (Slot 2)",
      "description": "激活采矿模块槽 2；在破岩/提取窗口按模块效果处理矿石。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_mining_use_consumable2",
      "actionKey": "v_mining_use_consumable2",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-278",
      "listType": "game",
      "order": 278,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Activate Mining Module (Slot 3)",
      "description": "激活采矿模块槽 3；在破岩/提取窗口按模块效果处理矿石。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_mining_use_consumable3",
      "actionKey": "v_mining_use_consumable3",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-279",
      "listType": "game",
      "order": 279,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Toggle Laser Beam (High / Low)",
      "description": "切换激光束高/低档；按目标与作业阶段选择合适输出。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-280",
      "listType": "game",
      "order": 280,
      "group": "Vehicles - Mining",
      "nameZh": "",
      "nameEn": "Jettison Cargo",
      "description": "抛弃易挥发货物；出现安全风险时止损，默认应远离常用操作位。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_jettison_volatile_cargo",
      "actionKey": "v_jettison_volatile_cargo",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "game-281",
      "listType": "game",
      "order": 281,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Tractor Beam Vehicle - Increase Distance",
      "description": "调整载具牵引光束距离（增大）；搬运组件、货箱或残骸时控制工作距离。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "tractor_beam_vehicle_increase_distance",
      "actionKey": "tractor_beam_vehicle_increase_distance",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-282",
      "listType": "game",
      "order": 282,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Tractor Beam Vehicle - Decrease Distance",
      "description": "调整载具牵引光束距离（减小）；搬运组件、货箱或残骸时控制工作距离。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-283",
      "listType": "game",
      "order": 283,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Toggle Fire Focused",
      "description": "切换聚焦回收头的开火；在刮削、破碎或解体阶段启动/停止对应光束。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-284",
      "listType": "game",
      "order": 284,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Toggle Fire Left",
      "description": "切换左回收头的开火；在刮削、破碎或解体阶段启动/停止对应光束。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-285",
      "listType": "game",
      "order": 285,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Toggle Fire Right",
      "description": "切换右回收头的开火；在刮削、破碎或解体阶段启动/停止对应光束。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-286",
      "listType": "game",
      "order": 286,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Toggle Fire Fracture",
      "description": "切换破碎工具的开火；在刮削、破碎或解体阶段启动/停止对应光束。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-287",
      "listType": "game",
      "order": 287,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Toggle Fire Disintegrate",
      "description": "切换解体工具的开火；在刮削、破碎或解体阶段启动/停止对应光束。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-288",
      "listType": "game",
      "order": 288,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Salvage Mode Gimbal (Toggle)",
      "description": "切换回收模式光束云台；按作业目标和操控习惯选择指向方式。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_salvage_toggle_gimbal_mode",
      "actionKey": "v_salvage_toggle_gimbal_mode",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-289",
      "listType": "game",
      "order": 289,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Salvage Mode Gimbal Reset",
      "description": "重置回收模式的光束云台；工具指向偏离后恢复中位。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_reset_gimbal",
      "actionKey": "v_salvage_reset_gimbal",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-290",
      "listType": "game",
      "order": 290,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Increase Beam Spacing",
      "description": "增大回收光束间距；处理更宽的表面或结构时调整覆盖范围。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_salvage_increase_beam_spacing",
      "actionKey": "v_salvage_increase_beam_spacing",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-291",
      "listType": "game",
      "order": 291,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Decrease Beam Spacing",
      "description": "减小回收光束间距；需要集中处理窄小部位时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_salvage_decrease_beam_spacing",
      "actionKey": "v_salvage_decrease_beam_spacing",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-292",
      "listType": "game",
      "order": 292,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Relative Beam Spacing",
      "description": "用相对输入调节回收光束间距；按残骸宽度细调覆盖范围。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_beam_spacing_rel",
      "actionKey": "v_salvage_beam_spacing_rel",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-293",
      "listType": "game",
      "order": 293,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Absolute Beam Spacing",
      "description": "用绝对轴调节回收光束间距；按残骸宽度细调覆盖范围。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_beam_spacing_abs",
      "actionKey": "v_salvage_beam_spacing_abs",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-294",
      "listType": "game",
      "order": 294,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Salvage Beam Axis (Toggle)",
      "description": "切换回收光束轴的控制方式；让指定硬件轴在飞行控制与回收工具调节之间切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_toggle_beam_spacing_axis",
      "actionKey": "v_salvage_toggle_beam_spacing_axis",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-295",
      "listType": "game",
      "order": 295,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Cycle Focused Salvage Modifiers",
      "description": "循环聚焦回收头的工具修正项；按残骸材质或作业阶段切换可用效果。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_cycle_modifiers_focused",
      "actionKey": "v_salvage_cycle_modifiers_focused",
      "suggestedInput": "LA3 Up",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-296",
      "listType": "game",
      "order": 296,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Cycle Left Salvage Modifiers",
      "description": "循环左回收头的工具修正项；按残骸材质或作业阶段切换可用效果。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_cycle_modifiers_left",
      "actionKey": "v_salvage_cycle_modifiers_left",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-297",
      "listType": "game",
      "order": 297,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Cycle Right Salvage Modifiers",
      "description": "循环右回收头的工具修正项；按残骸材质或作业阶段切换可用效果。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_cycle_modifiers_right",
      "actionKey": "v_salvage_cycle_modifiers_right",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-298",
      "listType": "game",
      "order": 298,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Cycle Structural Salvage Modes",
      "description": "循环结构回收模式；破碎与解体等结构回收阶段按目标切换合适工具。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_salvage_cycle_modifiers_structural",
      "actionKey": "v_salvage_cycle_modifiers_structural",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-299",
      "listType": "game",
      "order": 299,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Focus all salvage heads",
      "description": "将回收作业焦点设为全部回收头；按残骸位置选择左、右或全部回收头，提高有效覆盖。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_focus_all_heads",
      "actionKey": "v_salvage_focus_all_heads",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-300",
      "listType": "game",
      "order": 300,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Focus left salvage head",
      "description": "将回收作业焦点设为左回收头；按残骸位置选择左、右或全部回收头，提高有效覆盖。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_focus_left",
      "actionKey": "v_salvage_focus_left",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-301",
      "listType": "game",
      "order": 301,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Focus right salvage head",
      "description": "将回收作业焦点设为右回收头；按残骸位置选择左、右或全部回收头，提高有效覆盖。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_focus_right",
      "actionKey": "v_salvage_focus_right",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-302",
      "listType": "game",
      "order": 302,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Focus Fracture tool",
      "description": "将回收作业焦点切到破碎工具；开始结构回收前确保控制的是破碎场。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-303",
      "listType": "game",
      "order": 303,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Focus Disintegration tool",
      "description": "将回收作业焦点切到解体工具；残骸已破碎后处理结构材料时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-304",
      "listType": "game",
      "order": 304,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge left salvage tool up",
      "description": "将左回收头向上微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_nudge_up__left",
      "actionKey": "v_salvage_nudge_up__left",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-305",
      "listType": "game",
      "order": 305,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge left salvage tool down",
      "description": "将左回收头向下微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-306",
      "listType": "game",
      "order": 306,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge left salvage tool left",
      "description": "将左回收头向左微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-307",
      "listType": "game",
      "order": 307,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge left salvage tool right",
      "description": "将左回收头向右微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-308",
      "listType": "game",
      "order": 308,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge right salvage tool up",
      "description": "将右回收头向上微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-309",
      "listType": "game",
      "order": 309,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge right salvage tool down",
      "description": "将右回收头向下微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_nudge_down__left",
      "actionKey": "v_salvage_nudge_down__left",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-310",
      "listType": "game",
      "order": 310,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge right salvage tool left",
      "description": "将右回收头向左微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-311",
      "listType": "game",
      "order": 311,
      "group": "Vehicles - Salvage",
      "nameZh": "",
      "nameEn": "Nudge right salvage tool right",
      "description": "将右回收头向右微调；细修工具位置以对准局部残骸。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_salvage_nudge_right__left",
      "actionKey": "v_salvage_nudge_right__left",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "game-312",
      "listType": "game",
      "order": 312,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Pitch up",
      "description": "让炮塔俯仰向上；用于独立修正炮塔指向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_pitch_up",
      "actionKey": "turret_pitch_up",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-313",
      "listType": "game",
      "order": 313,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Pitch down",
      "description": "让炮塔俯仰向下；用于独立修正炮塔指向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_pitch_down",
      "actionKey": "turret_pitch_down",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-314",
      "listType": "game",
      "order": 314,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Pitch",
      "description": "用连续轴控制炮塔俯仰；多人炮塔位进行精细瞄准时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_pitch",
      "actionKey": "turret_pitch",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-315",
      "listType": "game",
      "order": 315,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Yaw left",
      "description": "让炮塔偏航向左；用于独立修正炮塔指向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_yaw_left",
      "actionKey": "turret_yaw_left",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-316",
      "listType": "game",
      "order": 316,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Yaw right",
      "description": "让炮塔偏航向右；用于独立修正炮塔指向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_yaw_right",
      "actionKey": "turret_yaw_right",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-317",
      "listType": "game",
      "order": 317,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Yaw",
      "description": "用连续轴控制炮塔偏航；多人炮塔位进行精细瞄准时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_yaw",
      "actionKey": "turret_yaw",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-318",
      "listType": "game",
      "order": 318,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Toggle Turret Mouse Movement (VJoy, FPS style)",
      "description": "切换炮塔鼠标移动方式；在虚拟摇杆与 FPS 式瞄准之间适配操控习惯。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "turret_toggle_mouse_mode",
      "actionKey": "turret_toggle_mouse_mode",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-319",
      "listType": "game",
      "order": 319,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Exit Remote Turret",
      "description": "退出远程炮塔；完成射击或需要回到座位其他功能时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_remote_exit",
      "actionKey": "turret_remote_exit",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-320",
      "listType": "game",
      "order": 320,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Turret Gyro Stabilization (Toggle)",
      "description": "切换炮塔陀螺稳定；转舰船或颠簸时帮助保持炮口方向。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "turret_gyromode",
      "actionKey": "turret_gyromode",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-321",
      "listType": "game",
      "order": 321,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Next Remote Turret",
      "description": "切到下一座远程炮塔；多炮塔舰船中顺序换位。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "turret_remote_cycle_next",
      "actionKey": "turret_remote_cycle_next",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-322",
      "listType": "game",
      "order": 322,
      "group": "Turret Movement",
      "nameZh": "",
      "nameEn": "Previous Remote Turret",
      "description": "切到上一座远程炮塔；多炮塔舰船中反向换位。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "turret_remote_cycle_prev",
      "actionKey": "turret_remote_cycle_prev",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-323",
      "listType": "game",
      "order": 323,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret E.S.P. Toggle On / Off",
      "description": "切换炮塔 ESP 辅助；按瞄准手感选择辅助程度。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "turret_esp_toggle",
      "actionKey": "turret_esp_toggle",
      "suggestedInput": "RF3",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-324",
      "listType": "game",
      "order": 324,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret E.S.P. - Enable Temporarily (Hold)",
      "description": "按住临时启用炮塔 ESP 辅助；需要短暂获得辅助修正时使用。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "turret_esp_hold",
      "actionKey": "turret_esp_hold",
      "suggestedInput": "RF3",
      "priority": "P3-飞控辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-325",
      "listType": "game",
      "order": 325,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Recenter Turret (Hold)",
      "description": "按住使炮塔回中；脱离目标后快速恢复中立朝向。",
      "repeatCount": "1",
      "activationMode": "HOLD NO_RETRIGGER",
      "actionId": "turret_recenter",
      "actionKey": "turret_recenter",
      "suggestedInput": "Head tracking / keyboard；必要时 RD1 + RA2 Hold",
      "priority": "P2-视角",
      "note": "不绑定到 A1 Center Long，不使用 RA3/RA4。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-326",
      "listType": "game",
      "order": 326,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret - Speed Limiter - On / Off (Hold / Toggle)",
      "description": "控制炮塔转动速度限制：切换开关；远距细瞄时可降低速度。",
      "repeatCount": "1",
      "activationMode": "SMART TOGGLE",
      "actionId": "turret_limiter_toggle",
      "actionKey": "turret_limiter_toggle",
      "suggestedInput": "L Encoder Press / LF3",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-327",
      "listType": "game",
      "order": 327,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret - Speed Limiter (rel)",
      "description": "控制炮塔转动速度限制：用相对输入设定；远距细瞄时可降低速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_limiter_rel",
      "actionKey": "turret_limiter_rel",
      "suggestedInput": "L Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-328",
      "listType": "game",
      "order": 328,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret - Speed Limiter - Increase (rel)",
      "description": "控制炮塔转动速度限制：提高；远距细瞄时可降低速度。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "turret_limiter_rel_increase",
      "actionKey": "turret_limiter_rel_increase",
      "suggestedInput": "L Encoder CW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-329",
      "listType": "game",
      "order": 329,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret - Speed Limiter - Decrease (rel)",
      "description": "控制炮塔转动速度限制：降低；远距细瞄时可降低速度。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "turret_limiter_rel_decrease",
      "actionKey": "turret_limiter_rel_decrease",
      "suggestedInput": "L Encoder CCW",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-330",
      "listType": "game",
      "order": 330,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Turret - Speed Limiter (abs)",
      "description": "控制炮塔转动速度限制：用绝对轴设定；远距细瞄时可降低速度。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "turret_limiter_abs",
      "actionKey": "turret_limiter_abs",
      "suggestedInput": "L Base Throttle Axis",
      "priority": "P2-limiter",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-331",
      "listType": "game",
      "order": 331,
      "group": "Turret Advanced",
      "nameZh": "",
      "nameEn": "Change Turret Position",
      "description": "切换炮塔位置；在可用炮塔位之间调整当前岗位。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "turret_change_position",
      "actionKey": "turret_change_position",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-332",
      "listType": "game",
      "order": 332,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gimbal State - Toggle Locked / Unlocked",
      "description": "控制武器云台状态：在锁定与解锁间切换；按目标运动和个人瞄准习惯选择锁定或解锁。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_manual_gimbal_cycle_source",
      "actionKey": "v_weapon_manual_gimbal_cycle_source",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-333",
      "listType": "game",
      "order": 333,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gimbal State - Set Locked",
      "description": "控制武器云台状态：设为锁定；按目标运动和个人瞄准习惯选择锁定或解锁。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_weapon_gimbal_mode_set_fixed_long",
      "actionKey": "v_weapon_gimbal_mode_set_fixed_long",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-334",
      "listType": "game",
      "order": 334,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gimbal State - Set Unlocked",
      "description": "控制武器云台状态：设为解锁；按目标运动和个人瞄准习惯选择锁定或解锁。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-335",
      "listType": "game",
      "order": 335,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gimbal State - Unlocked - Cycle Source (VJoy / View)",
      "description": "控制武器云台状态：在虚拟摇杆与视角间循环云台控制来源；按目标运动和个人瞄准习惯选择锁定或解锁。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-336",
      "listType": "game",
      "order": 336,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Aim Mode - Cycle",
      "description": "控制武器瞄准模式：循环切换；根据 PIP、涂装或自动瞄准需求切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_weapon_change_firemode",
      "actionKey": "v_weapon_change_firemode",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-337",
      "listType": "game",
      "order": 337,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Aim Mode - Set to PIP Aiming",
      "description": "控制武器瞄准模式：设为 PIP 瞄准；根据 PIP、涂装或自动瞄准需求切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-338",
      "listType": "game",
      "order": 338,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Aim Mode - Set to Painting",
      "description": "控制武器瞄准模式：设为涂装/标记；根据 PIP、涂装或自动瞄准需求切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-339",
      "listType": "game",
      "order": 339,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Aim Mode - Set to Automatic",
      "description": "控制武器瞄准模式：设为自动；根据 PIP、涂装或自动瞄准需求切换。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-340",
      "listType": "game",
      "order": 340,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Staggered Fire - Toggle On / Off",
      "description": "切换交错开火；在持续火力分配与齐射之间选择。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-341",
      "listType": "game",
      "order": 341,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Staggered Fire - On",
      "description": "开启交错开火；让武器组错开射击，降低瞬时能量/热量压力。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-342",
      "listType": "game",
      "order": 342,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Staggered Fire - Off",
      "description": "关闭交错开火；让武器组同时射击。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-343",
      "listType": "game",
      "order": 343,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Suppress Aim Assists (Hold)",
      "description": "按住抑制瞄准辅助；需要临时完全手动控制瞄准时使用。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "v_weapon_suppress_aim_assists_hold",
      "actionKey": "v_weapon_suppress_aim_assists_hold",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-344",
      "listType": "game",
      "order": 344,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Toggle Lead / Lag PIPs",
      "description": "切换 PIP 的提前/滞后显示；按弹道和目标机动选择更合适的引导方式。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_toggle_lead_lag",
      "actionKey": "v_weapon_pip_toggle_lead_lag",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-345",
      "listType": "game",
      "order": 345,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Set Lag PIPs",
      "description": "将 PIP 设为滞后显示；按目标和弹道需求使用该引导方式。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_set_lag",
      "actionKey": "v_weapon_pip_set_lag",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-346",
      "listType": "game",
      "order": 346,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Set Lead PIPs",
      "description": "将 PIP 设为提前显示；按目标和弹道需求使用该引导方式。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_set_lead",
      "actionKey": "v_weapon_pip_set_lead",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-347",
      "listType": "game",
      "order": 347,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Combination Type: Toggle",
      "description": "设置 PIP 合并方式：在可用合并方式间切换；在画面清晰度与武器信息细节间取舍。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_combination_type_toggle",
      "actionKey": "v_weapon_pip_combination_type_toggle",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-348",
      "listType": "game",
      "order": 348,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Combination Type: Set One PIP Per Weapon",
      "description": "设置 PIP 合并方式：每件武器显示一个 PIP；在画面清晰度与武器信息细节间取舍。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_combination_type_set_single",
      "actionKey": "v_weapon_pip_combination_type_set_single",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-349",
      "listType": "game",
      "order": 349,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Combination Type: Set One PIP Per Weapon Type",
      "description": "设置 PIP 合并方式：每种武器类型显示一个 PIP；在画面清晰度与武器信息细节间取舍。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_combination_type_set_combined_weapon_group",
      "actionKey": "v_weapon_pip_combination_type_set_combined_weapon_group",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-350",
      "listType": "game",
      "order": 350,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Precision Lines Toggle",
      "description": "切换 PIP 精确线；按瞄准偏好显示或隐藏辅助线。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_prec_line_toggle",
      "actionKey": "v_weapon_pip_prec_line_toggle",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-351",
      "listType": "game",
      "order": 351,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Precision Lines On",
      "description": "开启 PIP 精确线；需要更细的射击引导时显示。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_prec_line_on",
      "actionKey": "v_weapon_pip_prec_line_on",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-352",
      "listType": "game",
      "order": 352,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Precision Lines Off",
      "description": "关闭 PIP 精确线；希望 HUD 更简洁时隐藏。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_prec_line_off",
      "actionKey": "v_weapon_pip_prec_line_off",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-353",
      "listType": "game",
      "order": 353,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Fading Toggle",
      "description": "切换 PIP 淡出；按 HUD 可读性偏好调整。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_fade_toggle",
      "actionKey": "v_weapon_pip_fade_toggle",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-354",
      "listType": "game",
      "order": 354,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Fading On",
      "description": "开启 PIP 淡出；让不相关引导更少遮挡画面。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_fade_on",
      "actionKey": "v_weapon_pip_fade_on",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-355",
      "listType": "game",
      "order": 355,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "PIP Fading Off",
      "description": "关闭 PIP 淡出；始终显示 PIP。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_pip_fade_off",
      "actionKey": "v_weapon_pip_fade_off",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-356",
      "listType": "game",
      "order": 356,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gunnery UI Magnification Toggle",
      "description": "切换炮术 UI 放大；按目标距离调整武器 HUD 可读性。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_ui_scale_toggle",
      "actionKey": "v_weapon_ui_scale_toggle",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-357",
      "listType": "game",
      "order": 357,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gunnery UI Magnification On",
      "description": "开启炮术 UI 放大；远距观察时放大武器 HUD。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_ui_scale_on",
      "actionKey": "v_weapon_ui_scale_on",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-358",
      "listType": "game",
      "order": 358,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Gunnery UI Magnification Off",
      "description": "关闭炮术 UI 放大；恢复普通 HUD 尺寸。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_ui_scale_off",
      "actionKey": "v_weapon_ui_scale_off",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-359",
      "listType": "game",
      "order": 359,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Manual Convergence Distance (rel.)",
      "description": "用相对输入设定手动汇聚距离；让固定武器在预期射程交汇。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_weapon_convergence_distance_rel",
      "actionKey": "v_weapon_convergence_distance_rel",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-360",
      "listType": "game",
      "order": 360,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Manual Convergence Distance - Increase",
      "description": "增大手动汇聚距离；攻击更远目标前把固定武器交汇点推远。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_convergence_distance_rel_increase",
      "actionKey": "v_weapon_convergence_distance_rel_increase",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-361",
      "listType": "game",
      "order": 361,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Manual Convergence Distance - Decrease",
      "description": "减小手动汇聚距离；近距交战时把固定武器交汇点拉近。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_convergence_distance_rel_decrease",
      "actionKey": "v_weapon_convergence_distance_rel_decrease",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-362",
      "listType": "game",
      "order": 362,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Manual Convergence Distance (abs.)",
      "description": "用绝对轴设定手动汇聚距离；让固定武器在预期射程交汇。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_weapon_convergence_distance_abs",
      "actionKey": "v_weapon_convergence_distance_abs",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-363",
      "listType": "game",
      "order": 363,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Manual Convergence Distance - Reset",
      "description": "重置手动汇聚距离；恢复默认武器交汇设定。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_convergence_distance_set_default",
      "actionKey": "v_weapon_convergence_distance_set_default",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-364",
      "listType": "game",
      "order": 364,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Preset - Fire",
      "description": "武器预设：触发当前预设的开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "v_weapon_preset_attack",
      "actionKey": "v_weapon_preset_attack",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-365",
      "listType": "game",
      "order": 365,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Fire Guns Group 1",
      "description": "武器预设：触发火炮组 1 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "v_weapon_preset_fire_guns0",
      "actionKey": "v_weapon_preset_fire_guns0",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-366",
      "listType": "game",
      "order": 366,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Fire Guns Group 2",
      "description": "武器预设：触发火炮组 2 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "v_weapon_preset_fire_guns1",
      "actionKey": "v_weapon_preset_fire_guns1",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-367",
      "listType": "game",
      "order": 367,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Fire Guns Group 3",
      "description": "武器预设：触发火炮组 3 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "v_weapon_preset_fire_guns2",
      "actionKey": "v_weapon_preset_fire_guns2",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-368",
      "listType": "game",
      "order": 368,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Fire Guns Group 4",
      "description": "武器预设：触发火炮组 4 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "v_weapon_preset_fire_guns3",
      "actionKey": "v_weapon_preset_fire_guns3",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-369",
      "listType": "game",
      "order": 369,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Next",
      "description": "武器预设：切到下一个预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_next",
      "actionKey": "v_weapon_preset_next",
      "suggestedInput": "RA4 Right / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-370",
      "listType": "game",
      "order": 370,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Previous",
      "description": "武器预设：切到上一个预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_prev",
      "actionKey": "v_weapon_preset_prev",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-371",
      "listType": "game",
      "order": 371,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Next (Overflow)",
      "description": "武器预设：切到下一项溢出预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_next_overflow",
      "actionKey": "v_weapon_preset_next_overflow",
      "suggestedInput": "RA4 Right / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-372",
      "listType": "game",
      "order": 372,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Previous (Overflow)",
      "description": "武器预设：切到上一项溢出预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_prev_overflow",
      "actionKey": "v_weapon_preset_prev_overflow",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-373",
      "listType": "game",
      "order": 373,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Guns Group 1",
      "description": "武器预设：设为火炮组 1；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_guns0",
      "actionKey": "v_weapon_preset_guns0",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-374",
      "listType": "game",
      "order": 374,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Guns Group 2",
      "description": "武器预设：设为火炮组 2；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_guns1",
      "actionKey": "v_weapon_preset_guns1",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-375",
      "listType": "game",
      "order": 375,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Guns Group 3",
      "description": "武器预设：设为火炮组 3；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_guns2",
      "actionKey": "v_weapon_preset_guns2",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-376",
      "listType": "game",
      "order": 376,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Guns Group 4",
      "description": "武器预设：设为火炮组 4；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_guns3",
      "actionKey": "v_weapon_preset_guns3",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-377",
      "listType": "game",
      "order": 377,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set EMPs",
      "description": "武器预设：设为 EMP 预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_emp",
      "actionKey": "v_weapon_preset_emp",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-378",
      "listType": "game",
      "order": 378,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Quantum Jammers (short range)",
      "description": "武器预设：设为近距量子干扰器预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_qid_jammer",
      "actionKey": "v_weapon_preset_qid_jammer",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-379",
      "listType": "game",
      "order": 379,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set Quantum Snares / Pulse (long range)",
      "description": "武器预设：设为远距量子诱捕/脉冲预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_preset_qid_pulse",
      "actionKey": "v_weapon_preset_qid_pulse",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-380",
      "listType": "game",
      "order": 380,
      "group": "Vehicles - Weapons",
      "nameZh": "",
      "nameEn": "Weapon Presets - Set OIDs",
      "description": "武器预设：设为 OID 预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-381",
      "listType": "game",
      "order": 381,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Launch Missiles (Tap)",
      "description": "短按发射导弹；确认目标与发射数量后快速开火。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_toggle_launch_missile",
      "actionKey": "v_weapon_toggle_launch_missile",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-382",
      "listType": "game",
      "order": 382,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Launch Missiles (Hold)",
      "description": "按住发射导弹；在锁定与发射条件满足后持续执行发射动作。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_weapon_launch_missile",
      "actionKey": "v_weapon_launch_missile",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-383",
      "listType": "game",
      "order": 383,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Cycle Next Missile Type",
      "description": "切到下一种导弹；按目标距离、签名或战术选择弹种。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_cycle_missile_fwd",
      "actionKey": "v_weapon_cycle_missile_fwd",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-384",
      "listType": "game",
      "order": 384,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Cycle Previous Missile Type",
      "description": "切到上一种导弹；反向浏览可用弹种。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_cycle_missile_back",
      "actionKey": "v_weapon_cycle_missile_back",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-385",
      "listType": "game",
      "order": 385,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Increase Number of Armed Missiles",
      "description": "增加本次待发射的武装导弹数量；准备齐射时提高数量。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_increase_max_missiles",
      "actionKey": "v_weapon_increase_max_missiles",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-386",
      "listType": "game",
      "order": 386,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Decrease Number of Armed Missiles",
      "description": "减少本次待发射的武装导弹数量；节省弹药或避免过度齐射。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_decrease_max_missiles",
      "actionKey": "v_weapon_decrease_max_missiles",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-387",
      "listType": "game",
      "order": 387,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Reset Number of Armed Missiles",
      "description": "重置本次待发射的武装导弹数量；快速回到默认齐射规模。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_reset_max_missiles",
      "actionKey": "v_weapon_reset_max_missiles",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-388",
      "listType": "game",
      "order": 388,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Bombs - Toggle Desired Impact Point (Tap)",
      "description": "切换炸弹预定着弹点显示/控制（短按）；对地投弹时辅助校正投放位置。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_bombing_toggle_desired_impact_point",
      "actionKey": "v_weapon_bombing_toggle_desired_impact_point",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-389",
      "listType": "game",
      "order": 389,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Bombs - Toggle Desired Impact Point (Hold)",
      "description": "切换炸弹预定着弹点显示/控制（按住）；对地投弹时辅助校正投放位置。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "v_weapon_bombing_toggle_desired_impact_point_hold",
      "actionKey": "v_weapon_bombing_toggle_desired_impact_point_hold",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-390",
      "listType": "game",
      "order": 390,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Bombs - Increase HUD Range",
      "description": "增加炸弹 HUD 测距；对地投弹时扩展预期投放距离。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_bombing_hud_range_increase",
      "actionKey": "v_weapon_bombing_hud_range_increase",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-391",
      "listType": "game",
      "order": 391,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Bombs - Decrease HUD Range",
      "description": "减小炸弹 HUD 测距；近距离投放时收紧读数。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_bombing_hud_range_decrease",
      "actionKey": "v_weapon_bombing_hud_range_decrease",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-392",
      "listType": "game",
      "order": 392,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Bombs - Reset HUD Range",
      "description": "重置炸弹 HUD 测距；恢复默认对地投弹显示。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_bombing_hud_range_reset",
      "actionKey": "v_weapon_bombing_hud_range_reset",
      "suggestedInput": "L Rapid Fire Push / L Rapid Fire Pull",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-393",
      "listType": "game",
      "order": 393,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Enable Cinematic Camera (Toggle)",
      "description": "短按启用导弹发射电影镜头；用于观察弹药离舰轨迹，非交战必需。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_weapon_launch_missile_cinematic",
      "actionKey": "v_weapon_launch_missile_cinematic",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-394",
      "listType": "game",
      "order": 394,
      "group": "Vehicles - Missiles",
      "nameZh": "",
      "nameEn": "Enable Cinematic Camera (Hold)",
      "description": "按住启用导弹发射电影镜头；用于观察弹药离舰轨迹，非交战必需。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_weapon_launch_missile_cinematic_hold",
      "actionKey": "v_weapon_launch_missile_cinematic_hold",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-395",
      "listType": "game",
      "order": 395,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Decoy - Launch Burst (Tap), Set and Launch Burst (Hold)",
      "description": "短按投放当前诱饵齐射，按住设定并立即投放；导弹来袭时干扰敌方锁定。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_weapon_countermeasure_decoy_launch",
      "actionKey": "v_weapon_countermeasure_decoy_launch",
      "suggestedInput": "RC1 Down",
      "priority": "P0-生存",
      "note": "如果游戏区分 Tap/Hold，绑定同一输出给游戏处理。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-396",
      "listType": "game",
      "order": 396,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Decoy - Increase Burst Size (Tap)",
      "description": "增加诱饵齐射数量；需要更强干扰时提高单次投放量。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_countermeasure_decoy_burst_increase",
      "actionKey": "v_weapon_countermeasure_decoy_burst_increase",
      "suggestedInput": "RC1 Down",
      "priority": "P0-生存",
      "note": "如果游戏区分 Tap/Hold，绑定同一输出给游戏处理。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-397",
      "listType": "game",
      "order": 397,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Decoy - Decrease Burst Size (Tap)",
      "description": "减少诱饵齐射数量；威胁较低时节省存量。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_countermeasure_decoy_burst_decrease",
      "actionKey": "v_weapon_countermeasure_decoy_burst_decrease",
      "suggestedInput": "RC1 Down",
      "priority": "P0-生存",
      "note": "如果游戏区分 Tap/Hold，绑定同一输出给游戏处理。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-398",
      "listType": "game",
      "order": 398,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Decoy - Panic Launch (Tap)",
      "description": "紧急连续投放诱饵；导弹威胁迫近时快速干扰锁定，注意库存消耗。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_countermeasure_decoy_launch_panic",
      "actionKey": "v_weapon_countermeasure_decoy_launch_panic",
      "suggestedInput": "RC1 Down",
      "priority": "P0-生存",
      "note": "如果游戏区分 Tap/Hold，绑定同一输出给游戏处理。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-399",
      "listType": "game",
      "order": 399,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Noise - Deploy (Tap)",
      "description": "部署 Noise 反制措施；遭导弹锁定时用干扰噪声配合机动脱离。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_weapon_countermeasure_noise_launch",
      "actionKey": "v_weapon_countermeasure_noise_launch",
      "suggestedInput": "RC1 Right",
      "priority": "P0-生存",
      "note": "可按实际游戏项改为 Next Countermeasure。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-400",
      "listType": "game",
      "order": 400,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level front",
      "description": "提高前方向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_forward",
      "actionKey": "v_shield_raise_level_forward",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-401",
      "listType": "game",
      "order": 401,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level back",
      "description": "提高后向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_back",
      "actionKey": "v_shield_raise_level_back",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-402",
      "listType": "game",
      "order": 402,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level left",
      "description": "提高左向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_left",
      "actionKey": "v_shield_raise_level_left",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-403",
      "listType": "game",
      "order": 403,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level right",
      "description": "提高右向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_right",
      "actionKey": "v_shield_raise_level_right",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-404",
      "listType": "game",
      "order": 404,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level top",
      "description": "提高上方向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_up",
      "actionKey": "v_shield_raise_level_up",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-405",
      "listType": "game",
      "order": 405,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield raise level bottom",
      "description": "提高下方向护盾分配；受攻击方向明确时临时加强该面防护。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_raise_level_down",
      "actionKey": "v_shield_raise_level_down",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-406",
      "listType": "game",
      "order": 406,
      "group": "Vehicles - Shields and Countermeasures",
      "nameZh": "",
      "nameEn": "Shield reset levels",
      "description": "重置护盾分配；威胁解除后让护盾回到均衡状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_shield_reset_level",
      "actionKey": "v_shield_reset_level",
      "suggestedInput": "RC1 Center / RA2",
      "priority": "P0-生存",
      "note": "RC1 普通层不做视角。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-407",
      "listType": "game",
      "order": 407,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Toggle Power - All",
      "description": "切换全舰电源；上电检查或离舰前快速处理总体供电。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_toggle",
      "actionKey": "v_power_toggle",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-408",
      "listType": "game",
      "order": 408,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Power On",
      "description": "明确开启全舰电源；需要避免开关状态歧义时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_on",
      "actionKey": "v_power_set_on",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-409",
      "listType": "game",
      "order": 409,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Power Off",
      "description": "明确关闭全舰电源；停泊、维护或离舰后使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_off",
      "actionKey": "v_power_set_off",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-410",
      "listType": "game",
      "order": 410,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Toggle Power - Thrusters",
      "description": "切换推进器供电；起飞前确认开启，停泊维护时可关闭。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_toggle_thrusters",
      "actionKey": "v_power_toggle_thrusters",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-411",
      "listType": "game",
      "order": 411,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Thrusters Power On",
      "description": "开启推进器供电；准备起飞或机动前使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_thrusters_on",
      "actionKey": "v_power_set_thrusters_on",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-412",
      "listType": "game",
      "order": 412,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Thrusters Power Off",
      "description": "关闭推进器供电；停泊或维护时防止误推进。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_thrusters_off",
      "actionKey": "v_power_set_thrusters_off",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-413",
      "listType": "game",
      "order": 413,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Toggle Power - Shields",
      "description": "切换护盾供电；进入危险区域前确认护盾已上线。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_toggle_shields",
      "actionKey": "v_power_toggle_shields",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-414",
      "listType": "game",
      "order": 414,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Shields Power On",
      "description": "开启护盾供电；交战或离港前确保防护可用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_shields_on",
      "actionKey": "v_power_set_shields_on",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-415",
      "listType": "game",
      "order": 415,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Shields Power Off",
      "description": "关闭护盾供电；仅在明确需要节能或维护时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_shields_off",
      "actionKey": "v_power_set_shields_off",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-416",
      "listType": "game",
      "order": 416,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Toggle Power - Weapons",
      "description": "切换武器供电；交战前开启、希望降低误击风险时关闭。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_toggle_weapons",
      "actionKey": "v_power_toggle_weapons",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-417",
      "listType": "game",
      "order": 417,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Weapons Power On",
      "description": "开启武器供电；确认交战意图后使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_weapons_on",
      "actionKey": "v_power_set_weapons_on",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-418",
      "listType": "game",
      "order": 418,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Set Weapons Power Off",
      "description": "关闭武器供电；停泊、友军密集或非战斗时减少误操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_power_set_weapons_off",
      "actionKey": "v_power_set_weapons_off",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-419",
      "listType": "game",
      "order": 419,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Decrease Throttle",
      "description": "降低系统电源节流；减少资源消耗或热量压力。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_power_throttle_down",
      "actionKey": "v_power_throttle_down",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-420",
      "listType": "game",
      "order": 420,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Decrease Throttle to Min",
      "description": "将系统电源节流降至最低；需要快速节能时使用。",
      "repeatCount": "1",
      "activationMode": "DOUBLE TAP",
      "actionId": "v_power_throttle_min",
      "actionKey": "v_power_throttle_min",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-421",
      "listType": "game",
      "order": 421,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Increase Throttle",
      "description": "提高系统电源节流；为高负荷操作提供更多供能。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_power_throttle_up",
      "actionKey": "v_power_throttle_up",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-422",
      "listType": "game",
      "order": 422,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Increase Throttle to Max",
      "description": "将系统电源节流升至最高；需要最大供能时使用。",
      "repeatCount": "1",
      "activationMode": "DOUBLE TAP",
      "actionId": "v_power_throttle_max",
      "actionKey": "v_power_throttle_max",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-423",
      "listType": "game",
      "order": 423,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Engines - Increase (Tap)",
      "description": "调整引擎的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_engine_increase",
      "actionKey": "v_engineering_assignment_engine_increase",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-424",
      "listType": "game",
      "order": 424,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Engines - Decrease (Tap)",
      "description": "调整引擎的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_engine_decrease",
      "actionKey": "v_engineering_assignment_engine_decrease",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-425",
      "listType": "game",
      "order": 425,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Engines - Set to Max (Hold)",
      "description": "调整引擎的工程资源分配：设为最大；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-426",
      "listType": "game",
      "order": 426,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Engines - Set to Min (Hold)",
      "description": "调整引擎的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-427",
      "listType": "game",
      "order": 427,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Shields - Increase (Tap)",
      "description": "调整护盾的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_shields_increase",
      "actionKey": "v_engineering_assignment_shields_increase",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-428",
      "listType": "game",
      "order": 428,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Shields - Decrease (Tap)",
      "description": "调整护盾的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_shields_decrease",
      "actionKey": "v_engineering_assignment_shields_decrease",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-429",
      "listType": "game",
      "order": 429,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Shields - Set to Max (Hold)",
      "description": "调整护盾的工程资源分配：设为最大；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-430",
      "listType": "game",
      "order": 430,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Shields - Set to Min (Hold)",
      "description": "调整护盾的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-431",
      "listType": "game",
      "order": 431,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Weapons - Increase (Tap)",
      "description": "调整武器的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_weapons_increase",
      "actionKey": "v_engineering_assignment_weapons_increase",
      "suggestedInput": "LD1 + LC1 Up",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-432",
      "listType": "game",
      "order": 432,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Weapons - Decrease (Tap)",
      "description": "调整武器的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_engineering_assignment_weapons_decrease",
      "actionKey": "v_engineering_assignment_weapons_decrease",
      "suggestedInput": "LD1 + LC1 Down",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-433",
      "listType": "game",
      "order": 433,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Weapons - Set to Max (Hold)",
      "description": "调整武器的工程资源分配：设为最大；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-434",
      "listType": "game",
      "order": 434,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Weapons - Set to Min (Hold)",
      "description": "调整武器的工程资源分配：设为最小；在追击、防御或火力输出前按战况倾斜资源。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LD1 + LC1",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-435",
      "listType": "game",
      "order": 435,
      "group": "Flight - Power",
      "nameZh": "",
      "nameEn": "Reset Assignments",
      "description": "重置工程资源分配；战况变化后恢复默认/均衡分配。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_engineering_assignment_reset",
      "actionKey": "v_engineering_assignment_reset",
      "suggestedInput": "LD1 + LC1 Center",
      "priority": "P2-资源",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-436",
      "listType": "game",
      "order": 436,
      "group": "Flight - HUD",
      "nameZh": "",
      "nameEn": "Cycle Pitch Ladder Mode",
      "description": "循环俯仰梯显示模式；按飞行习惯调整 HUD 姿态参考。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_cycle_pitch_ladder_mode",
      "actionKey": "v_cycle_pitch_ladder_mode",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-437",
      "listType": "game",
      "order": 437,
      "group": "Flight - HUD",
      "nameZh": "",
      "nameEn": "Scoreboard",
      "description": "打开计分板；竞赛或对战模式中查看比分与玩家信息。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "pl_hud_open_scoreboard",
      "actionKey": "pl_hud_open_scoreboard",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-438",
      "listType": "game",
      "order": 438,
      "group": "Flight - HUD",
      "nameZh": "",
      "nameEn": "Map",
      "description": "打开地图；设定航线、查看位置或寻找目的地时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_starmap",
      "actionKey": "v_starmap",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-439",
      "listType": "game",
      "order": 439,
      "group": "Flight - HUD",
      "nameZh": "",
      "nameEn": "Wipe Helmet Visor",
      "description": "擦拭头盔面罩；雨雪、污渍遮挡视线时恢复可见度。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "visor_wipe",
      "actionKey": "visor_wipe",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-440",
      "listType": "game",
      "order": 440,
      "group": "Lights",
      "nameZh": "",
      "nameEn": "Headlights (Toggle)",
      "description": "切换载具头灯；夜间、洞穴或能见度差时照亮前方，注意暴露位置。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_lights",
      "actionKey": "v_lights",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-441",
      "listType": "game",
      "order": 441,
      "group": "Lights",
      "nameZh": "",
      "nameEn": "Headlights",
      "description": "执行载具头灯动作；用于当前载具支持的头灯控制。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-442",
      "listType": "game",
      "order": 442,
      "group": "Stop Watch",
      "nameZh": "",
      "nameEn": "Reset (Long Press)",
      "description": "按住重置秒表；开始新的计时前清零。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "stopwatch_reset",
      "actionKey": "stopwatch_reset",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-443",
      "listType": "game",
      "order": 443,
      "group": "Stop Watch",
      "nameZh": "",
      "nameEn": "Start / Pause (Short Press)",
      "description": "短按开始或暂停秒表；为比赛、流程或作业计时。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "stopwatch_trigger",
      "actionKey": "stopwatch_trigger",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-444",
      "listType": "game",
      "order": 444,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Left",
      "description": "向左移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "moveleft",
      "actionKey": "moveleft",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-445",
      "listType": "game",
      "order": 445,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Right",
      "description": "向右移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "moveright",
      "actionKey": "moveright",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-446",
      "listType": "game",
      "order": 446,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Forward",
      "description": "向前移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "moveforward",
      "actionKey": "moveforward",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-447",
      "listType": "game",
      "order": 447,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Backwards",
      "description": "向后移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "moveback",
      "actionKey": "moveback",
      "suggestedInput": "LA3 Down / LA4 Center",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-448",
      "listType": "game",
      "order": 448,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Left / Right",
      "description": "用轴左右移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "gp_movex",
      "actionKey": "gp_movex",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-449",
      "listType": "game",
      "order": 449,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Move Forward / Backward",
      "description": "用轴前后移动；徒步探索、掩体移动和交互时的基础位移。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "gp_movey",
      "actionKey": "gp_movey",
      "suggestedInput": "LA3 Down / LA4 Center",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-450",
      "listType": "game",
      "order": 450,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Look (Yaw)",
      "description": "用轴控制徒步视角左右转动；适合手柄或头部追踪替代方案。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "gp_rotateyaw",
      "actionKey": "gp_rotateyaw",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-451",
      "listType": "game",
      "order": 451,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Look (Pitch)",
      "description": "用轴控制徒步视角上下转动；适合手柄或头部追踪替代方案。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "gp_rotatepitch",
      "actionKey": "gp_rotatepitch",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-452",
      "listType": "game",
      "order": 452,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Jump",
      "description": "跳跃；跨越矮障碍或在移动中改变高度。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "jump",
      "actionKey": "jump",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-453",
      "listType": "game",
      "order": 453,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Jump Thrusters - Activate (Hold)",
      "description": "按住启动跳跃推进器；需要短时喷气跃迁时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-454",
      "listType": "game",
      "order": 454,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Jump Thrusters - Release",
      "description": "释放跳跃推进器；结束喷气跳跃输入。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-455",
      "listType": "game",
      "order": 455,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Crouch",
      "description": "蹲下；降低暴露并便于通过低矮空间。",
      "repeatCount": "1",
      "activationMode": "HOLD TOGGLE",
      "actionId": "crouch",
      "actionKey": "crouch",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-456",
      "listType": "game",
      "order": 456,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Prone",
      "description": "卧倒；在掩体后降低轮廓并提高稳定性。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "prone",
      "actionKey": "prone",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-457",
      "listType": "game",
      "order": 457,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Sprint",
      "description": "冲刺；快速转移但注意体力和噪声。",
      "repeatCount": "1",
      "activationMode": "HOLD TOGGLE",
      "actionId": "sprint",
      "actionKey": "sprint",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-458",
      "listType": "game",
      "order": 458,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Walk",
      "description": "步行；需要精细移动或降低动静时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "walk",
      "actionKey": "walk",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-459",
      "listType": "game",
      "order": 459,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Lean Left",
      "description": "向左探身；利用掩体观察或射击时减少身体暴露。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "leanleft",
      "actionKey": "leanleft",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-460",
      "listType": "game",
      "order": 460,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Lean Right",
      "description": "向右探身；利用掩体观察或射击时减少身体暴露。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "leanright",
      "actionKey": "leanright",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-461",
      "listType": "game",
      "order": 461,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Climb Ledges",
      "description": "攀爬边缘；面对可攀附的矮墙、台阶或边沿时越过障碍。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-462",
      "listType": "game",
      "order": 462,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Firearm - Attack",
      "description": "使用当前枪械主攻击；交战时射击，注意弹药与误伤。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "attack1",
      "actionKey": "attack1",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-463",
      "listType": "game",
      "order": 463,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Tool - Secondary Fire",
      "description": "使用当前工具的次级功能；多功能工具的吸附、模式或辅助动作常在此触发。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Rapid Fire Pull / L Rapid Fire Push",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-464",
      "listType": "game",
      "order": 464,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Attack Light Left",
      "description": "进行轻近战攻击；近距离连续压制时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "melee_AttackLightLeft",
      "actionKey": "melee_AttackLightLeft",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-465",
      "listType": "game",
      "order": 465,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Attack Light Right",
      "description": "进行轻近战攻击；近距离连续压制时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "melee_AttackLightRight",
      "actionKey": "melee_AttackLightRight",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-466",
      "listType": "game",
      "order": 466,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Attack Heavy Left (Hold)",
      "description": "按住蓄力进行重近战攻击；适合抓时机的高伤害出手。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "melee_AttackHeavyLeft",
      "actionKey": "melee_AttackHeavyLeft",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-467",
      "listType": "game",
      "order": 467,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Attack Heavy Right (Hold)",
      "description": "按住蓄力进行重近战攻击；适合抓时机的高伤害出手。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS",
      "actionId": "melee_AttackHeavyRight",
      "actionKey": "melee_AttackHeavyRight",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-468",
      "listType": "game",
      "order": 468,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Block (Hold)",
      "description": "按住格挡近战攻击；面对近身威胁时争取反击窗口。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "melee_block",
      "actionKey": "melee_block",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-469",
      "listType": "game",
      "order": 469,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Medical Pen - Inject Other",
      "description": "用医疗笔对其他角色注射；队友受伤时进行现场医疗。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "melee_AttackSyringeStab",
      "actionKey": "melee_AttackSyringeStab",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-470",
      "listType": "game",
      "order": 470,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Melee - Attack (Ranged Weapon + Takedowns)",
      "description": "进行轻近战攻击；近距离连续压制时使用。",
      "repeatCount": "2",
      "activationMode": "DELAYED PRESS",
      "actionId": "weapon_melee",
      "actionKey": "weapon_melee",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-471",
      "listType": "game",
      "order": 471,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Throw - Overarm & Two-Handed",
      "description": "过肩或双手投掷；需要更远、更有力地投出可投掷物。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "throw_overhand",
      "actionKey": "throw_overhand",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-472",
      "listType": "game",
      "order": 472,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Throw - Underarm",
      "description": "下手投掷；近距离、低抛或避免过度弹跳时使用。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "throw_underhand",
      "actionKey": "throw_underhand",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-473",
      "listType": "game",
      "order": 473,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Aim Down Sight",
      "description": "进入瞄具瞄准（ADS）；远距离射击时提高观察与射击精度。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "zoom",
      "actionKey": "zoom",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-474",
      "listType": "game",
      "order": 474,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Interact With Scope (ADS)",
      "description": "在 ADS 中与瞄具交互；调整瞄具支持的功能而不必退出瞄准。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "interact_with_scope",
      "actionKey": "interact_with_scope",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-475",
      "listType": "game",
      "order": 475,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Select Primary Weapon",
      "description": "直接切换到主武器；战斗中减少武器轮盘操作。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "select_primary_pit",
      "actionKey": "select_primary_pit",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-476",
      "listType": "game",
      "order": 476,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Select Secondary Weapon",
      "description": "直接切换到副武器；战斗中减少武器轮盘操作。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "select_secondary_pit",
      "actionKey": "select_secondary_pit",
      "suggestedInput": "L Rapid Fire Pull / L Rapid Fire Push",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-477",
      "listType": "game",
      "order": 477,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Select Sidearm",
      "description": "直接切换到手枪；战斗中减少武器轮盘操作。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "select_sidearm_pit",
      "actionKey": "select_sidearm_pit",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-478",
      "listType": "game",
      "order": 478,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Select Melee",
      "description": "直接切换到近战武器；战斗中减少武器轮盘操作。",
      "repeatCount": "2",
      "activationMode": "TAP",
      "actionId": "select_meleeweapon_pit",
      "actionKey": "select_meleeweapon_pit",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-479",
      "listType": "game",
      "order": 479,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Select Gadget",
      "description": "直接切换到装置；战斗中减少武器轮盘操作。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "select_gadget_pit",
      "actionKey": "select_gadget_pit",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-480",
      "listType": "game",
      "order": 480,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Unarmed Combat",
      "description": "切换为空手战斗；没有合适武器或需要非致命近战时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "selectUnarmedCombat",
      "actionKey": "selectUnarmedCombat",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-481",
      "listType": "game",
      "order": 481,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Next Weapon",
      "description": "切到下一把武器；在已装备武器间顺序轮换。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "nextweapon",
      "actionKey": "nextweapon",
      "suggestedInput": "RA4 Right / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-482",
      "listType": "game",
      "order": 482,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Previous Weapon",
      "description": "切回上一把武器；在已装备武器间顺序轮换。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "prevweapon",
      "actionKey": "prevweapon",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-483",
      "listType": "game",
      "order": 483,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Reload",
      "description": "装填当前武器；交战间隙补充弹匣。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "reload",
      "actionKey": "reload",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-484",
      "listType": "game",
      "order": 484,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Reload Secondary Fire",
      "description": "装填武器次级弹药/次级功能；使用具备独立次级装填的武器时操作。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "L Rapid Fire Pull / L Rapid Fire Push",
      "priority": "P1-辅助发射",
      "note": "Tap/Hold 交给游戏，不做 VKB Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-485",
      "listType": "game",
      "order": 485,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Repool Ammunition",
      "description": "重新汇集武器弹药；仅对支持该动作的武器在需要时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-486",
      "listType": "game",
      "order": 486,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Holster Weapon",
      "description": "收起当前武器；进入安全区域、交互或避免误射时使用。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS_MEDIUM",
      "actionId": "holster",
      "actionKey": "holster",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-487",
      "listType": "game",
      "order": 487,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Drop Item",
      "description": "丢下当前物品；腾出手部或把物资交给队友时使用，注意不要在危险地点误丢。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "drop",
      "actionKey": "drop",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-488",
      "listType": "game",
      "order": 488,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Inspect Item",
      "description": "检查当前物品；查看武器或物品细节时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "inspect",
      "actionKey": "inspect",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-489",
      "listType": "game",
      "order": 489,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Customize Weapon",
      "description": "打开当前武器的自定义；调整附件或配置时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "customize",
      "actionKey": "customize",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-490",
      "listType": "game",
      "order": 490,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Hold Breath (ADS)",
      "description": "在 ADS 中屏息；远距离瞄准时短暂稳定准星。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "stabilize",
      "actionKey": "stabilize",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-491",
      "listType": "game",
      "order": 491,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "FPS Underbarrel Attachment Action",
      "description": "触发枪械下挂附件动作；使用榴弹、照明或其他下挂功能时操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "weapon_auxiliary_action",
      "actionKey": "weapon_auxiliary_action",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-492",
      "listType": "game",
      "order": 492,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Change Fire Mode",
      "description": "切换枪械射击模式；在单发、连发等可用模式间按战况选择。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "weapon_change_firemode",
      "actionKey": "weapon_change_firemode",
      "suggestedInput": "R Trigger Stage 1 / R Trigger Stage 2",
      "priority": "P1-主火力",
      "note": "游戏 Short/Long/Tap/Hold 直接绑定同一物理输出。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-493",
      "listType": "game",
      "order": 493,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Weapon Zeroing Decrease",
      "description": "降低武器归零距离；近距离射击时匹配弹道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "weapon_zeroing_decrease",
      "actionKey": "weapon_zeroing_decrease",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-494",
      "listType": "game",
      "order": 494,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Weapon Zeroing Increase / Auto",
      "description": "提高/自动调整武器归零距离；远距离射击时匹配弹道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "weapon_zeroing_increase",
      "actionKey": "weapon_zeroing_increase",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-495",
      "listType": "game",
      "order": 495,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Default Movement Speed Increase",
      "description": "提高默认移动速度；在保持非冲刺时加快行进。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "fixed_speed_increment",
      "actionKey": "fixed_speed_increment",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-496",
      "listType": "game",
      "order": 496,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Default Movement Speed Decrease",
      "description": "降低默认移动速度；需要更稳或更隐蔽地移动时使用。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "fixed_speed_decrement",
      "actionKey": "fixed_speed_decrement",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-497",
      "listType": "game",
      "order": 497,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Flashlight (Toggle)",
      "description": "切换个人手电；黑暗区域照明，注意光线会暴露位置。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "toggle_flashlight",
      "actionKey": "toggle_flashlight",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-498",
      "listType": "game",
      "order": 498,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Toggle Equip Helmet",
      "description": "切换头盔穿戴；进入真空/危险环境前确认已戴好。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "toggleEquipHelmet",
      "actionKey": "toggleEquipHelmet",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-499",
      "listType": "game",
      "order": 499,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Helmet",
      "description": "执行头盔相关动作；按游戏当前提示管理头盔状态。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-500",
      "listType": "game",
      "order": 500,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Wipe Helmet Visor",
      "description": "擦拭头盔面罩；雨雪、污渍遮挡视线时恢复可见度。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "visor_wipe",
      "actionKey": "visor_wipe",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-501",
      "listType": "game",
      "order": 501,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Third Person View (Toggle)",
      "description": "切换第三人称视角；在安全时检查角色周边与装备姿态。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "thirdperson",
      "actionKey": "thirdperson",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-502",
      "listType": "game",
      "order": 502,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Free View Camera (Hold)",
      "description": "按住自由第三人称镜头；观察周边而不让角色转向。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "free_thirdperson_camera",
      "actionKey": "free_thirdperson_camera",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-503",
      "listType": "game",
      "order": 503,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Zoom Out",
      "description": "缩小当前第三人称/观察视图；按需调整环境可见范围。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-504",
      "listType": "game",
      "order": 504,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Zoom In",
      "description": "放大当前第三人称/观察视图；按需调整环境可见范围。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-505",
      "listType": "game",
      "order": 505,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Recall Last Vehicle",
      "description": "召回最近使用的载具；需要让上次载具返回存储/保险流程时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "ship_recall",
      "actionKey": "ship_recall",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-506",
      "listType": "game",
      "order": 506,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Scoreboard",
      "description": "打开计分板；竞赛或对战模式中查看比分与玩家信息。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "pl_hud_open_scoreboard",
      "actionKey": "pl_hud_open_scoreboard",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-507",
      "listType": "game",
      "order": 507,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Port Modification Interact",
      "description": "与设备端口改装交互；更换或管理可拆装舰船部件时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "port_modification_select",
      "actionKey": "port_modification_select",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-508",
      "listType": "game",
      "order": 508,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Map",
      "description": "打开地图；设定航线、查看位置或寻找目的地时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_starmap",
      "actionKey": "v_starmap",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-509",
      "listType": "game",
      "order": 509,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Force Re-spawn (E.V.A. / On Foot)",
      "description": "强制重生；EVA/徒步卡住或明确放弃当前位置时使用，注意后果。",
      "repeatCount": "1",
      "activationMode": "DELAYED PRESS_MEDIUM",
      "actionId": "force_respawn",
      "actionKey": "force_respawn",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-510",
      "listType": "game",
      "order": 510,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Roll Left (while Prone)",
      "description": "卧倒时向左翻滚；在低姿态下躲避或调整掩体位置。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "prone_rollleft",
      "actionKey": "prone_rollleft",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-511",
      "listType": "game",
      "order": 511,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Roll Right (while Prone)",
      "description": "卧倒时向右翻滚；在低姿态下躲避或调整掩体位置。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "prone_rollright",
      "actionKey": "prone_rollright",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-512",
      "listType": "game",
      "order": 512,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Tractor Beam - Increase Distance",
      "description": "增大手持牵引光束距离；搬运货箱、残骸或组件时控制工作位置。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "tractor_beam_increase_distance",
      "actionKey": "tractor_beam_increase_distance",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-513",
      "listType": "game",
      "order": 513,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Left",
      "description": "让 EVA 视角向左侧查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_view_yaw_left",
      "actionKey": "eva_view_yaw_left",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-514",
      "listType": "game",
      "order": 514,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Right",
      "description": "让 EVA 视角向右侧查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_view_yaw_right",
      "actionKey": "eva_view_yaw_right",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-515",
      "listType": "game",
      "order": 515,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Left / Right",
      "description": "让 EVA 视角向左右两侧查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "eva_view_yaw_mouse",
      "actionKey": "eva_view_yaw_mouse",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-516",
      "listType": "game",
      "order": 516,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Up",
      "description": "让 EVA 视角向上方查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_view_pitch_up",
      "actionKey": "eva_view_pitch_up",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-517",
      "listType": "game",
      "order": 517,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Down",
      "description": "让 EVA 视角向下方查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_view_pitch_down",
      "actionKey": "eva_view_pitch_down",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-518",
      "listType": "game",
      "order": 518,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "View Up / Down",
      "description": "让 EVA 视角向上下两侧查看；零重力作业时观察周边而不改变移动方向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "eva_view_pitch_mouse",
      "actionKey": "eva_view_pitch_mouse",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-519",
      "listType": "game",
      "order": 519,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Roll Left",
      "description": "在 EVA 中滚转向左；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_roll_left",
      "actionKey": "eva_roll_left",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-520",
      "listType": "game",
      "order": 520,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Roll Right",
      "description": "在 EVA 中滚转向右；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_roll_right",
      "actionKey": "eva_roll_right",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-521",
      "listType": "game",
      "order": 521,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Roll Left / Right",
      "description": "用轴控制 EVA 左右滚转；调整身体朝向以贴合入口或作业面。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "eva_roll",
      "actionKey": "eva_roll",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-522",
      "listType": "game",
      "order": 522,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Up",
      "description": "在 EVA 中平移向上；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_up",
      "actionKey": "eva_strafe_up",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-523",
      "listType": "game",
      "order": 523,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Down",
      "description": "在 EVA 中平移向下；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_down",
      "actionKey": "eva_strafe_down",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-524",
      "listType": "game",
      "order": 524,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Up / Down",
      "description": "用轴控制 EVA 垂直平移；精确贴近作业点。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "eva_strafe_vertical",
      "actionKey": "eva_strafe_vertical",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-525",
      "listType": "game",
      "order": 525,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Left",
      "description": "在 EVA 中平移向左；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_left",
      "actionKey": "eva_strafe_left",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-526",
      "listType": "game",
      "order": 526,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Right",
      "description": "在 EVA 中平移向右；接近舱门或残骸时细调姿态。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_right",
      "actionKey": "eva_strafe_right",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-527",
      "listType": "game",
      "order": 527,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Left / Right",
      "description": "用轴控制 EVA 横向平移；精确贴近作业点。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "eva_strafe_lateral",
      "actionKey": "eva_strafe_lateral",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-528",
      "listType": "game",
      "order": 528,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Forward",
      "description": "在 EVA 中平移向前；接近舱门或残骸时细调姿态。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_forward",
      "actionKey": "eva_strafe_forward",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-529",
      "listType": "game",
      "order": 529,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Backward",
      "description": "在 EVA 中平移向后；接近舱门或残骸时细调姿态。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "eva_strafe_back",
      "actionKey": "eva_strafe_back",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-530",
      "listType": "game",
      "order": 530,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Strafe Forward / Backward",
      "description": "用轴控制 EVA 前后平移；接近或离开目标时细调。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "eva_strafe_longitudinal",
      "actionKey": "eva_strafe_longitudinal",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-531",
      "listType": "game",
      "order": 531,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Brake",
      "description": "制动；EVA 或地面载具需要快速停止当前移动时使用。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "v_brake",
      "actionKey": "v_brake",
      "suggestedInput": "L Trigger Stage 1",
      "priority": "P0-机动",
      "note": "不放底座，不加 Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-532",
      "listType": "game",
      "order": 532,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Boost",
      "description": "EVA 加速；长距离穿越或快速脱离危险时使用，接近目标前及时减速。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_boost",
      "actionKey": "eva_boost",
      "suggestedInput": "L Trigger Stage 2",
      "priority": "P0-机动",
      "note": "若 Stage2 连带 Stage1，则改用独立瞬时键。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-533",
      "listType": "game",
      "order": 533,
      "group": "E.V.A - All",
      "nameZh": "",
      "nameEn": "Freelook (Hold)",
      "description": "按住 EVA 自由视角；观察四周而不改变移动输入。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "eva_toggle_headlook_mode",
      "actionKey": "eva_toggle_headlook_mode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-534",
      "listType": "game",
      "order": 534,
      "group": "On Foot - All",
      "nameZh": "",
      "nameEn": "Tractor Beam - Decrease Distance",
      "description": "减小手持牵引光束距离；搬运货箱、残骸或组件时控制工作位置。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "tractor_beam_decrease_distance",
      "actionKey": "tractor_beam_decrease_distance",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-535",
      "listType": "game",
      "order": 535,
      "group": "E.V.A. - Zero-G Traversal",
      "nameZh": "",
      "nameEn": "Launch from Surface",
      "description": "从表面弹射起步；EVA 附着在墙面/舰体后离面移动。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "zgt_launch",
      "actionKey": "zgt_launch",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-536",
      "listType": "game",
      "order": 536,
      "group": "E.V.A. - Zero-G Traversal",
      "nameZh": "",
      "nameEn": "Detach from Surface",
      "description": "从表面脱离；结束附着后恢复自由 EVA 移动。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "zgt_detach",
      "actionKey": "zgt_detach",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-537",
      "listType": "game",
      "order": 537,
      "group": "E.V.A. - Zero-G Traversal",
      "nameZh": "",
      "nameEn": "Roll Left",
      "description": "在 EVA 中滚转向左；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "zgt_roll_left",
      "actionKey": "zgt_roll_left",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-538",
      "listType": "game",
      "order": 538,
      "group": "E.V.A. - Zero-G Traversal",
      "nameZh": "",
      "nameEn": "Roll Right",
      "description": "在 EVA 中滚转向右；接近舱门或残骸时细调姿态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "zgt_roll_right",
      "actionKey": "zgt_roll_right",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-539",
      "listType": "game",
      "order": 539,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Horn",
      "description": "鸣笛；地面载具接近队友、行人或车队时发出提示。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_horn",
      "actionKey": "v_horn",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-540",
      "listType": "game",
      "order": 540,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Cycle camera view",
      "description": "按顺序切换舰船镜头视角；起降时可快速检查起落架、船体和周边障碍。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "v_view_cycle_fwd",
      "actionKey": "v_view_cycle_fwd",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-541",
      "listType": "game",
      "order": 541,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Zoom in (3rd person view)",
      "description": "拉近第三人称镜头；用于精看舰船姿态或狭窄区域。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_view_zoom_in",
      "actionKey": "v_view_zoom_in",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-542",
      "listType": "game",
      "order": 542,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Zoom out (3rd person view)",
      "description": "拉远第三人称镜头；用于获得更宽的舰船与障碍物视野。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_view_zoom_out",
      "actionKey": "v_view_zoom_out",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-543",
      "listType": "game",
      "order": 543,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Look left / right",
      "description": "将载具视角向左右两侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_view_yaw",
      "actionKey": "v_view_yaw",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-544",
      "listType": "game",
      "order": 544,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Look up / down",
      "description": "将载具视角向上下两侧查看；观察周边、编队或倒车时快速确认方向。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "v_view_pitch",
      "actionKey": "v_view_pitch",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-545",
      "listType": "game",
      "order": 545,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Freelook (Hold)",
      "description": "按住后自由查看，不把视角输入传给载具；降落时查看四周而不偏转舰船。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "v_view_freelook_mode",
      "actionKey": "v_view_freelook_mode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-546",
      "listType": "game",
      "order": 546,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Flight / Systems Ready",
      "description": "让舰船进入可飞行/系统就绪状态；登机后起飞前一次完成常用上电准备。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_flightready",
      "actionKey": "v_flightready",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-547",
      "listType": "game",
      "order": 547,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Open / Close Doors (Toggle)",
      "description": "切换所有舱门的开/关；登机、离机或装卸前快速处理通道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_doors",
      "actionKey": "v_toggle_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-548",
      "listType": "game",
      "order": 548,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Open All Doors",
      "description": "打开所有舱门；多人登舰或装卸前可一次开放通道。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_open_all_doors",
      "actionKey": "v_open_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-549",
      "listType": "game",
      "order": 549,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Close All Doors",
      "description": "关闭所有舱门；起飞、交战或离舰后用于恢复舱体封闭。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_close_all_doors",
      "actionKey": "v_close_all_doors",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-550",
      "listType": "game",
      "order": 550,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Lock / Unlock Doors (Toggle)",
      "description": "切换所有舱门的锁定状态；停泊或需要限制他人进入时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_doorlocks",
      "actionKey": "v_toggle_all_doorlocks",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-551",
      "listType": "game",
      "order": 551,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Lock All Doors",
      "description": "锁定所有舱门；离舰或防范未经允许登舰时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_lock_all_doors",
      "actionKey": "v_lock_all_doors",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-552",
      "listType": "game",
      "order": 552,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Unlock All Doors",
      "description": "解锁所有舱门；允许队友登舰或开始装卸前使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_unlock_all_doors",
      "actionKey": "v_unlock_all_doors",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-553",
      "listType": "game",
      "order": 553,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Port Lock Toggle All",
      "description": "切换所有设备/组件端口锁；更换或拆取舰船部件前先确认此状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_toggle_all_portlocks",
      "actionKey": "v_toggle_all_portlocks",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-554",
      "listType": "game",
      "order": 554,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Port Lock All",
      "description": "锁定所有设备端口；平时保持锁定，避免部件被意外拆取。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_lock_all_ports",
      "actionKey": "v_lock_all_ports",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-555",
      "listType": "game",
      "order": 555,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Port Unlock All",
      "description": "解锁所有设备端口；需要用牵引工具拆装组件时才开启。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "v_unlock_all_ports",
      "actionKey": "v_unlock_all_ports",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-556",
      "listType": "game",
      "order": 556,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Map",
      "description": "打开地图；设定航线、查看位置或寻找目的地时使用。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "v_starmap",
      "actionKey": "v_starmap",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-557",
      "listType": "game",
      "order": 557,
      "group": "Ground Vehicle - General",
      "nameZh": "",
      "nameEn": "Wipe Helmet Visor",
      "description": "擦拭头盔面罩；雨雪、污渍遮挡视线时恢复可见度。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "visor_wipe",
      "actionKey": "visor_wipe",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-558",
      "listType": "game",
      "order": 558,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Drive Forward",
      "description": "让地面载具向前行驶；基础车速输入。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_move_forward",
      "actionKey": "v_move_forward",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-559",
      "listType": "game",
      "order": 559,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Drive Backward",
      "description": "让地面载具向后行驶；基础车速输入。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_move_back",
      "actionKey": "v_move_back",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-560",
      "listType": "game",
      "order": 560,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Drive Forward / Backward",
      "description": "让地面载具向前行驶；基础车速输入。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_move",
      "actionKey": "v_move",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-561",
      "listType": "game",
      "order": 561,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Turn Left",
      "description": "让地面载具向左转向；低速通过狭窄区域时使用。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_yaw_left",
      "actionKey": "v_yaw_left",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-562",
      "listType": "game",
      "order": 562,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Turn Right",
      "description": "让地面载具向右转向；低速通过狭窄区域时使用。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_yaw_right",
      "actionKey": "v_yaw_right",
      "suggestedInput": "L Stick X/Y/Twist",
      "priority": "P1-平移轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-563",
      "listType": "game",
      "order": 563,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Yaw Left / Right (Axis / HOTAS)",
      "description": "用轴控制地面载具左右转向；适合方向盘或摇杆。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_yaw",
      "actionKey": "v_yaw",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-564",
      "listType": "game",
      "order": 564,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Ground Vehicles - Pitch Up",
      "description": "让地面载具抬头；越野或坡地中修正车身姿态。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_pitch_up",
      "actionKey": "v_pitch_up",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-565",
      "listType": "game",
      "order": 565,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Ground Vehicles - Pitch Down",
      "description": "让地面载具低头；越野或坡地中修正车身姿态。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_pitch_down",
      "actionKey": "v_pitch_down",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-566",
      "listType": "game",
      "order": 566,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Pitch Up / Down (Axis / HOTAS)",
      "description": "用轴控制地面载具俯仰；越野或坡地中精细修正姿态。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_pitch",
      "actionKey": "v_pitch",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-567",
      "listType": "game",
      "order": 567,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Brake",
      "description": "制动；EVA 或地面载具需要快速停止当前移动时使用。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "v_brake",
      "actionKey": "v_brake",
      "suggestedInput": "L Trigger Stage 1",
      "priority": "P0-机动",
      "note": "不放底座，不加 Tempo。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-568",
      "listType": "game",
      "order": 568,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In and Out (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_dynamic_zoom_rel",
      "actionKey": "v_view_dynamic_zoom_rel",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-569",
      "listType": "game",
      "order": 569,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "v_view_dynamic_zoom_rel_in",
      "actionKey": "v_view_dynamic_zoom_rel_in",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-570",
      "listType": "game",
      "order": 570,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Dynamic Zoom Out (rel.)",
      "description": "控制动态缩放（相对输入）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "ALL",
      "actionId": "v_view_dynamic_zoom_rel_out",
      "actionKey": "v_view_dynamic_zoom_rel_out",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-571",
      "listType": "game",
      "order": 571,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Dynamic Zoom In and Out (abs.)",
      "description": "控制动态缩放（绝对轴）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "v_view_dynamic_zoom_abs",
      "actionKey": "v_view_dynamic_zoom_abs",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-572",
      "listType": "game",
      "order": 572,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Dynamic Zoom Toggle (abs.)",
      "description": "控制动态缩放（绝对轴）；第三人称观察时按控制器类型调节远近。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "v_view_dynamic_zoom_abs_toggle",
      "actionKey": "v_view_dynamic_zoom_abs_toggle",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-573",
      "listType": "game",
      "order": 573,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Boost",
      "description": "短时提升推进器响应与加速；脱离危险或快速机动时使用，注意热量与资源消耗。",
      "repeatCount": "2",
      "activationMode": "HOLD",
      "actionId": "eva_boost",
      "actionKey": "eva_boost",
      "suggestedInput": "L Trigger Stage 2",
      "priority": "P0-机动",
      "note": "若 Stage2 连带 Stage1，则改用独立瞬时键。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-574",
      "listType": "game",
      "order": 574,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Lock Pitch / Yaw Movement (Toggle / Hold)",
      "description": "锁定俯仰与偏航输入；地面载具停车或需要稳定视角时避免误转向。",
      "repeatCount": "2",
      "activationMode": "SMART TOGGLE",
      "actionId": "v_lock_rotation",
      "actionKey": "v_lock_rotation",
      "suggestedInput": "Keyboard；必要时 RF2",
      "priority": "P4-飞控辅助",
      "note": "若 RF2 已给 G-Safe，则保持键盘默认。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-575",
      "listType": "game",
      "order": 575,
      "group": "Ground Vehicle - Movement",
      "nameZh": "",
      "nameEn": "Toggle Auto Braking On Idle",
      "description": "切换怠速自动刹车；地面载具松开输入时决定是否自动保持制动。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "v_mgv_switch_brake_on_idle",
      "actionKey": "v_mgv_switch_brake_on_idle",
      "suggestedInput": "R Stick + L Stick 6DOF；limiter 用底座轴",
      "priority": "P1-飞控",
      "note": "按钮项只在游戏必须时保留默认或另行分配。",
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "game-576",
      "listType": "game",
      "order": 576,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Target (Next)",
      "description": "将观战镜头切到下一个目标；观看多人战斗时轮换对象。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_next_target",
      "actionKey": "spectate_next_target",
      "suggestedInput": "RD1 + RC1 Right",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-577",
      "listType": "game",
      "order": 577,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Target (Previous)",
      "description": "将观战镜头切到上一个目标；反向轮换观战对象。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_prev_target",
      "actionKey": "spectate_prev_target",
      "suggestedInput": "RD1 + RC1 Left",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-578",
      "listType": "game",
      "order": 578,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Lock Target",
      "description": "锁定/解锁观战镜头目标；跟随某对象或恢复自由选择。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_toggle_lock_target",
      "actionKey": "spectate_toggle_lock_target",
      "suggestedInput": "RD1 + RC1 Up",
      "priority": "P1-目标",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-579",
      "listType": "game",
      "order": 579,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Zoom",
      "description": "用轴控制观战镜头缩放；按控制器位置调整远近。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "spectate_zoom",
      "actionKey": "spectate_zoom",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-580",
      "listType": "game",
      "order": 580,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Zoom In",
      "description": "拉近观战镜头；查看目标细节。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "spectate_zoom_in",
      "actionKey": "spectate_zoom_in",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-581",
      "listType": "game",
      "order": 581,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Zoom Out",
      "description": "拉远观战镜头；获得更宽画面。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "spectate_zoom_out",
      "actionKey": "spectate_zoom_out",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-582",
      "listType": "game",
      "order": 582,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Rotate Yaw",
      "description": "用轴旋转观战镜头左右方向；自由构图时使用。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "spectate_rotateyaw",
      "actionKey": "spectate_rotateyaw",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-583",
      "listType": "game",
      "order": 583,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Rotate Pitch",
      "description": "用轴旋转观战镜头上下方向；自由构图时使用。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "spectate_rotatepitch",
      "actionKey": "spectate_rotatepitch",
      "suggestedInput": "R Stick X/Y/Twist",
      "priority": "P1-姿态轴",
      "note": "",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-584",
      "listType": "game",
      "order": 584,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera HUD (Toggle)",
      "description": "切换观战镜头 HUD；录制或纯观看时按需隐藏信息。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_toggle_hud",
      "actionKey": "spectate_toggle_hud",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-585",
      "listType": "game",
      "order": 585,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Mode (Next)",
      "description": "切到下一种观战镜头模式；按需要更换跟随/自由等视图。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_gen_nextmode",
      "actionKey": "spectate_gen_nextmode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-586",
      "listType": "game",
      "order": 586,
      "group": "Electronic Access - Spectator",
      "nameZh": "",
      "nameEn": "Spectator Camera Mode (Previous)",
      "description": "切到上一种观战镜头模式；反向浏览可用视图。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "spectate_gen_prevmode",
      "actionKey": "spectate_gen_prevmode",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-587",
      "listType": "game",
      "order": 587,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Re-spawn",
      "description": "重生；角色死亡或需要返回重生点后使用。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "respawn",
      "actionKey": "respawn",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-588",
      "listType": "game",
      "order": 588,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Exit seat",
      "description": "离开当前座位；停稳后下船、换位或处理舱内事务时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "pl_exit",
      "actionKey": "pl_exit",
      "suggestedInput": "LA3 Down / LA4 Center",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-589",
      "listType": "game",
      "order": 589,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Notifications - Accept Prompt",
      "description": "接受当前通知提示；确认任务、邀请或系统操作时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-590",
      "listType": "game",
      "order": 590,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Notifications - Decline Prompt",
      "description": "拒绝当前通知提示；不接受邀请或操作时使用。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-591",
      "listType": "game",
      "order": 591,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "CommLink App (Toggle)",
      "description": "打开/关闭 Commlink；呼叫 ATC、联系队友或管理通信时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "toggle_contact",
      "actionKey": "toggle_contact",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-592",
      "listType": "game",
      "order": 592,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Chat Window (Toggle)",
      "description": "打开/关闭聊天窗口；需要文字沟通时使用。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "toggle_chat",
      "actionKey": "toggle_chat",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-593",
      "listType": "game",
      "order": 593,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Cycle Chat Lobby",
      "description": "切换聊天频道；在全局、队伍或其他可用频道间移动。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "cycle_chat_lobby",
      "actionKey": "cycle_chat_lobby",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-594",
      "listType": "game",
      "order": 594,
      "group": "Social - General",
      "nameZh": "",
      "nameEn": "Chat Window Focus",
      "description": "将输入焦点放到聊天窗口；无需鼠标即可立即打字。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "focus_on_chat_textinput",
      "actionKey": "focus_on_chat_textinput",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-595",
      "listType": "game",
      "order": 595,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Forward",
      "description": "让角色做“向前指示”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_forward",
      "actionKey": "emote_cs_forward",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-596",
      "listType": "game",
      "order": 596,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Left",
      "description": "让角色做“向左指示”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_left",
      "actionKey": "emote_cs_left",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-597",
      "listType": "game",
      "order": 597,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Right",
      "description": "让角色做“向右指示”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_right",
      "actionKey": "emote_cs_right",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-598",
      "listType": "game",
      "order": 598,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Stop",
      "description": "让角色做“停止”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_stop",
      "actionKey": "emote_cs_stop",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-599",
      "listType": "game",
      "order": 599,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Yes",
      "description": "让角色做“同意”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_yes",
      "actionKey": "emote_cs_yes",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-600",
      "listType": "game",
      "order": 600,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "No",
      "description": "让角色做“否定”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_cs_no",
      "actionKey": "emote_cs_no",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-601",
      "listType": "game",
      "order": 601,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Agree",
      "description": "让角色做“赞同”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_agree",
      "actionKey": "emote_agree",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-602",
      "listType": "game",
      "order": 602,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Angry",
      "description": "让角色做“愤怒”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_angry",
      "actionKey": "emote_angry",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-603",
      "listType": "game",
      "order": 603,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "At Ease",
      "description": "让角色做“稍息”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_atease",
      "actionKey": "emote_atease",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-604",
      "listType": "game",
      "order": 604,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Attention",
      "description": "让角色做“立正”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_attention",
      "actionKey": "emote_attention",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-605",
      "listType": "game",
      "order": 605,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Blah",
      "description": "让角色做“无所谓”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_blah",
      "actionKey": "emote_blah",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-606",
      "listType": "game",
      "order": 606,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Bored",
      "description": "让角色做“无聊”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_bored",
      "actionKey": "emote_bored",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-607",
      "listType": "game",
      "order": 607,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Bow",
      "description": "让角色做“鞠躬”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_bow",
      "actionKey": "emote_bow",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-608",
      "listType": "game",
      "order": 608,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Burp",
      "description": "让角色做“打嗝”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_burp",
      "actionKey": "emote_burp",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-609",
      "listType": "game",
      "order": 609,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Cheer",
      "description": "让角色做“欢呼”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_cheer",
      "actionKey": "emote_cheer",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-610",
      "listType": "game",
      "order": 610,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Chicken",
      "description": "让角色做“胆怯”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_chicken",
      "actionKey": "emote_chicken",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-611",
      "listType": "game",
      "order": 611,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Clap",
      "description": "让角色做“鼓掌”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_clap",
      "actionKey": "emote_clap",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-612",
      "listType": "game",
      "order": 612,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Come",
      "description": "让角色做“过来”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_come",
      "actionKey": "emote_come",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-613",
      "listType": "game",
      "order": 613,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Cry",
      "description": "让角色做“哭泣”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_cry",
      "actionKey": "emote_cry",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-614",
      "listType": "game",
      "order": 614,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Dance",
      "description": "让角色做“跳舞”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_dance",
      "actionKey": "emote_dance",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-615",
      "listType": "game",
      "order": 615,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Disagree",
      "description": "让角色做“反对”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_disagree",
      "actionKey": "emote_disagree",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-616",
      "listType": "game",
      "order": 616,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Failure",
      "description": "让角色做“失败”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_failure",
      "actionKey": "emote_failure",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-617",
      "listType": "game",
      "order": 617,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Flex",
      "description": "让角色做“展示肌肉”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_flex",
      "actionKey": "emote_flex",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-618",
      "listType": "game",
      "order": 618,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Flirt",
      "description": "让角色做“调情”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_flirt",
      "actionKey": "emote_flirt",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-619",
      "listType": "game",
      "order": 619,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Gasp",
      "description": "让角色做“惊讶”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_gasp",
      "actionKey": "emote_gasp",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-620",
      "listType": "game",
      "order": 620,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Gloat",
      "description": "让角色做“得意”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_gloat",
      "actionKey": "emote_gloat",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-621",
      "listType": "game",
      "order": 621,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Greet",
      "description": "让角色做“问候”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_greet",
      "actionKey": "emote_greet",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-622",
      "listType": "game",
      "order": 622,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Laugh",
      "description": "让角色做“大笑”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_laugh",
      "actionKey": "emote_laugh",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-623",
      "listType": "game",
      "order": 623,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Confirm Launch",
      "description": "让角色做“确认起飞”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_launch",
      "actionKey": "emote_launch",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-624",
      "listType": "game",
      "order": 624,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Point",
      "description": "让角色做“指向”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_point",
      "actionKey": "emote_point",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-625",
      "listType": "game",
      "order": 625,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Rude",
      "description": "让角色做“无礼”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_rude",
      "actionKey": "emote_rude",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-626",
      "listType": "game",
      "order": 626,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Salute",
      "description": "让角色做“敬礼”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_salute",
      "actionKey": "emote_salute",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-627",
      "listType": "game",
      "order": 627,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Sit",
      "description": "让角色做“坐下”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_sit",
      "actionKey": "emote_sit",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-628",
      "listType": "game",
      "order": 628,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Sleep",
      "description": "让角色做“睡觉”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_sleep",
      "actionKey": "emote_sleep",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-629",
      "listType": "game",
      "order": 629,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Smell",
      "description": "让角色做“闻一闻”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_smell",
      "actionKey": "emote_smell",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-630",
      "listType": "game",
      "order": 630,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Taunt",
      "description": "让角色做“嘲讽”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_taunt",
      "actionKey": "emote_taunt",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-631",
      "listType": "game",
      "order": 631,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Threaten",
      "description": "让角色做“威胁”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_threaten",
      "actionKey": "emote_threaten",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-632",
      "listType": "game",
      "order": 632,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Wait",
      "description": "让角色做“等待”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "emote_wait",
      "actionKey": "emote_wait",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-633",
      "listType": "game",
      "order": 633,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Wave",
      "description": "让角色做“挥手”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_wave",
      "actionKey": "emote_wave",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-634",
      "listType": "game",
      "order": 634,
      "group": "Social - Emotes",
      "nameZh": "",
      "nameEn": "Whistle",
      "description": "让角色做“吹口哨”表情；用于非语言沟通和社交，不影响载具或战斗状态。",
      "repeatCount": "2",
      "activationMode": "PRESS",
      "actionId": "emote_whistle",
      "actionKey": "emote_whistle",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-635",
      "listType": "game",
      "order": 635,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "[Experimental] VR - Toggle On / Off",
      "description": "实验性 VR：切换启用状态；仅在启用 VR 时使用，版本更新可能改变行为。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-636",
      "listType": "game",
      "order": 636,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "[Experimental] VR - Recenter Device",
      "description": "实验性 VR：重置设备中心；仅在启用 VR 时使用，版本更新可能改变行为。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "Head tracking / keyboard；必要时 RD1 + RA2 Hold",
      "priority": "P2-视角",
      "note": "不绑定到 A1 Center Long，不使用 RA3/RA4。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-637",
      "listType": "game",
      "order": 637,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "[Experimental] VR - Toggle Theater Mode",
      "description": "实验性 VR：切换影院模式；仅在启用 VR 时使用，版本更新可能改变行为。",
      "repeatCount": "3",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-638",
      "listType": "game",
      "order": 638,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "[Experimental] VR - Visor Toggle On / Off",
      "description": "实验性 VR：切换面罩显示；仅在启用 VR 时使用，版本更新可能改变行为。",
      "repeatCount": "3",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-639",
      "listType": "game",
      "order": 639,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "Enable Head Tracking (Toggle)",
      "description": "切换头部追踪；用真实头部动作控制游戏视角。",
      "repeatCount": "3",
      "activationMode": "PRESS",
      "actionId": "headtrack_enabled",
      "actionKey": "headtrack_enabled",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-640",
      "listType": "game",
      "order": 640,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "Head Tracking (Hold)",
      "description": "按住启用头部追踪；需要暂时用头看四周时使用。",
      "repeatCount": "3",
      "activationMode": "HOLD",
      "actionId": "headtrack_hold",
      "actionKey": "headtrack_hold",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-641",
      "listType": "game",
      "order": 641,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "Recenter Head Tracking Device (except TrackIR)",
      "description": "重新居中头部追踪设备；视角基准偏移后恢复正前方。",
      "repeatCount": "3",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "Head tracking / keyboard；必要时 RD1 + RA2 Hold",
      "priority": "P2-视角",
      "note": "不绑定到 A1 Center Long，不使用 RA3/RA4。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-642",
      "listType": "game",
      "order": 642,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "Enable / Disable Head Tracking for 3rd Person Camera (Toggle)",
      "description": "切换第三人称镜头的头部追踪；按需要决定头部动作是否带动外部镜头。",
      "repeatCount": "3",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-643",
      "listType": "game",
      "order": 643,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "VOIP Push To Talk",
      "description": "按住进行 VOIP 语音；只在按键期间向当前语音频道发送声音。",
      "repeatCount": "3",
      "activationMode": "HOLD",
      "actionId": "foip_pushtotalk",
      "actionKey": "foip_pushtotalk",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-644",
      "listType": "game",
      "order": 644,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "VOIP Push To Talk (Proximity only)",
      "description": "按住进行近距 VOIP；只让附近玩家听到，适合现场沟通。",
      "repeatCount": "3",
      "activationMode": "HOLD",
      "actionId": "foip_pushtotalk_proximity",
      "actionKey": "foip_pushtotalk_proximity",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-645",
      "listType": "game",
      "order": 645,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "FOIP Selfie Cam",
      "description": "打开 FOIP 自拍视图；校准或检查面部追踪效果时使用。",
      "repeatCount": "3",
      "activationMode": "DELAYED HOLD",
      "actionId": "foip_viewownplayer",
      "actionKey": "foip_viewownplayer",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-646",
      "listType": "game",
      "order": 646,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "FOIP Recalibrate",
      "description": "重新校准 FOIP；脸部追踪偏移后恢复中性姿势。",
      "repeatCount": "3",
      "activationMode": "PRESS",
      "actionId": "foip_recalibrate",
      "actionKey": "foip_recalibrate",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-647",
      "listType": "game",
      "order": 647,
      "group": "VOIP, FOIP and Head Tracking",
      "nameZh": "",
      "nameEn": "Cycle through audio channels",
      "description": "循环语音音频频道；在可用通信频道间切换。",
      "repeatCount": "3",
      "activationMode": "PRESS",
      "actionId": "foip_cyclechannel",
      "actionKey": "foip_cyclechannel",
      "suggestedInput": "键盘或未绑定",
      "priority": "P6-未分配",
      "note": "需要实测后再提升到 HOTAS。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-648",
      "listType": "game",
      "order": 648,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Interaction Mode",
      "description": "进入交互模式；让可交互物件高亮并显示可用操作。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "pc_interaction_mode",
      "actionKey": "pc_interaction_mode",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-649",
      "listType": "game",
      "order": 649,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Activate Inner Thought",
      "description": "激活 Inner Thought 中当前选项；对准门、座椅、物品或面板后执行选择。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "pc_select",
      "actionKey": "pc_select",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-650",
      "listType": "game",
      "order": 650,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Focus",
      "description": "将交互焦点放到当前目标；面对多个可交互选项时先选定对象。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "pc_focus",
      "actionKey": "pc_focus",
      "suggestedInput": "LA3 Up",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-651",
      "listType": "game",
      "order": 651,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Interaction Mode Zoom In",
      "description": "放大交互模式视图；查看密集面板或远处交互点时调整。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_zoom_in",
      "actionKey": "pc_zoom_in",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-652",
      "listType": "game",
      "order": 652,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Interaction Mode Zoom Out",
      "description": "放大交互模式视图；查看密集面板或远处交互点时调整。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_zoom_out",
      "actionKey": "pc_zoom_out",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-653",
      "listType": "game",
      "order": 653,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "MFD Left",
      "description": "把交互焦点移向左侧 MFD；座舱多屏时直接选择目标显示器。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_screen_focus_left",
      "actionKey": "pc_screen_focus_left",
      "suggestedInput": "LC1 Left / LA4 Left / LB1 + LC1 Left",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-654",
      "listType": "game",
      "order": 654,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "MFD Right",
      "description": "把交互焦点移向右侧 MFD；座舱多屏时直接选择目标显示器。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_screen_focus_right",
      "actionKey": "pc_screen_focus_right",
      "suggestedInput": "LC1 Right / LA4 Right / LB1 + LC1 Right",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-655",
      "listType": "game",
      "order": 655,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "MFD Up",
      "description": "把交互焦点移向上侧 MFD；座舱多屏时直接选择目标显示器。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_screen_focus_up",
      "actionKey": "pc_screen_focus_up",
      "suggestedInput": "LC1 Up",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-656",
      "listType": "game",
      "order": 656,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "MFD Down",
      "description": "把交互焦点移向下侧 MFD；座舱多屏时直接选择目标显示器。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_screen_focus_down",
      "actionKey": "pc_screen_focus_down",
      "suggestedInput": "LC1 Down",
      "priority": "P3-MFD",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-657",
      "listType": "game",
      "order": 657,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Personal Inner Thought (PIT)",
      "description": "打开 Personal Inner Thought（PIT）菜单；快速访问角色、装备和载具相关操作。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_personal_thought",
      "actionKey": "pc_personal_thought",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-658",
      "listType": "game",
      "order": 658,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Inventory Orbit Camera Mode",
      "description": "切换库存的环绕镜头模式；检查角色装备外观时调整视角。",
      "repeatCount": "1",
      "activationMode": "HOLD",
      "actionId": "pc_camera_orbit",
      "actionKey": "pc_camera_orbit",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-659",
      "listType": "game",
      "order": 659,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Exit",
      "description": "退出当前交互/Inner Thought 层级；完成操作后返回上一层。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_personal_back",
      "actionKey": "pc_personal_back",
      "suggestedInput": "LA3 Down / LA4 Center",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-660",
      "listType": "game",
      "order": 660,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Toggle Inventory (Short Press)",
      "description": "短按切换个人库存；整理装备、物资或从终端转移物品时使用。",
      "repeatCount": "1",
      "activationMode": "TAP",
      "actionId": "pc_pit_inventory",
      "actionKey": "pc_pit_inventory",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-661",
      "listType": "game",
      "order": 661,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Toggle Loot Screen (Hold)",
      "description": "按住打开搜刮界面；面对可搜刮目标时进入物品转移流程。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "1372",
      "actionKey": "1372",
      "suggestedInput": "LC1 / LB1 + LC1",
      "priority": "P3-MFD",
      "note": "按游戏项语义分配普通层或页面层。",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-662",
      "listType": "game",
      "order": 662,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Toggle Looting View",
      "description": "切换搜刮界面视图；在目标与自身物品间整理战利品。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_looting_toggle_view",
      "actionKey": "pc_pit_looting_toggle_view",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-663",
      "listType": "game",
      "order": 663,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Looting - Toggle Weapon Attachments",
      "description": "切换搜刮界面的武器附件视图；整理附件时查看/处理相关物品。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_looting_toggle_weapon_attachments",
      "actionKey": "pc_pit_looting_toggle_weapon_attachments",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-664",
      "listType": "game",
      "order": 664,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Drop Item",
      "description": "丢下当前物品；腾出手部或把物资交给队友时使用，注意不要在危险地点误丢。",
      "repeatCount": "2",
      "activationMode": "1372",
      "actionId": "drop",
      "actionKey": "drop",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-665",
      "listType": "game",
      "order": 665,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Store All Commodities",
      "description": "收纳全部商品；清空背包中可收纳的商品，整理采集或运输所得。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_empty_backpack",
      "actionKey": "pc_pit_empty_backpack",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-666",
      "listType": "game",
      "order": 666,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Player Actions - PIT Category",
      "description": "打开 PIT 的“角色动作”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_player_actions",
      "actionKey": "pc_pit_player_actions",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-667",
      "listType": "game",
      "order": 667,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Emotes - PIT Category",
      "description": "打开 PIT 的“表情”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_emotes",
      "actionKey": "pc_pit_emotes",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-668",
      "listType": "game",
      "order": 668,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Ship Systems - PIT Category",
      "description": "打开 PIT 的“舰船系统”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_ship_systems",
      "actionKey": "pc_pit_ship_systems",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-669",
      "listType": "game",
      "order": 669,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Flight Systems - PIT Category",
      "description": "打开 PIT 的“飞行系统”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_flight_systems",
      "actionKey": "pc_pit_flight_systems",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-670",
      "listType": "game",
      "order": 670,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Vehicle Actions - PIT Category",
      "description": "打开 PIT 的“载具动作”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_vehicle_actions",
      "actionKey": "pc_pit_vehicle_actions",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-671",
      "listType": "game",
      "order": 671,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Weapon Systems - PIT Category",
      "description": "打开 PIT 的“武器系统”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_weapons_systems",
      "actionKey": "pc_pit_weapons_systems",
      "suggestedInput": "RA4 Direction + Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-672",
      "listType": "game",
      "order": 672,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Remote Turret - PIT Category",
      "description": "打开 PIT 的“远程炮塔”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_remote_turrets",
      "actionKey": "pc_pit_remote_turrets",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-673",
      "listType": "game",
      "order": 673,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Item Actions - PIT Category",
      "description": "打开 PIT 的“物品动作”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_item_actions",
      "actionKey": "pc_pit_item_actions",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-674",
      "listType": "game",
      "order": 674,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Weapon Selection - PIT Category",
      "description": "打开 PIT 的“武器选择”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_weapon_selection",
      "actionKey": "pc_pit_weapon_selection",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-675",
      "listType": "game",
      "order": 675,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Mobiglas Actions - PIT Category",
      "description": "打开 PIT 的“mobiGlas 动作”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_mobiglas_actions",
      "actionKey": "pc_pit_mobiglas_actions",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-676",
      "listType": "game",
      "order": 676,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Mining Mode Actions - PIT Category",
      "description": "打开 PIT 的“采矿模式动作”分类；从轮盘直接进入对应操作集合。",
      "repeatCount": "1",
      "activationMode": "PRESS",
      "actionId": "pc_pit_miningmode_actions",
      "actionKey": "pc_pit_miningmode_actions",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-677",
      "listType": "game",
      "order": 677,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Weapon Select Radial Menu",
      "description": "打开武器选择轮盘；徒步战斗中快速选择该类物品。",
      "repeatCount": "3",
      "activationMode": "ALL",
      "actionId": "pc_qs_weapons_pit_sidearm",
      "actionKey": "pc_qs_weapons_pit_sidearm",
      "suggestedInput": "RA4 Left / RA4 Center",
      "priority": "P2-武器辅助",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-678",
      "listType": "game",
      "order": 678,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Throwable Select Radial Menu",
      "description": "打开投掷物选择轮盘；徒步战斗中快速选择该类物品。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "pc_qs_grenades",
      "actionKey": "pc_qs_grenades",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-679",
      "listType": "game",
      "order": 679,
      "group": "Quick Keys, Interactions, and Inner Thought",
      "nameZh": "",
      "nameEn": "Consumable Select Radial Menu",
      "description": "打开消耗品选择轮盘；徒步战斗中快速选择该类物品。",
      "repeatCount": "1",
      "activationMode": "ALL",
      "actionId": "pc_qs_consumables",
      "actionKey": "pc_qs_consumables",
      "suggestedInput": "LA3 Center / LA2",
      "priority": "P4-交互",
      "note": "",
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "game-680",
      "listType": "game",
      "order": 680,
      "group": "Camera - Advanced Camera Controls",
      "nameZh": "",
      "nameEn": "Increase FoV",
      "description": "增大高级镜头视野角；拍摄或观察时纳入更多画面。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "view_fov_in",
      "actionKey": "view_fov_in",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-681",
      "listType": "game",
      "order": 681,
      "group": "Camera - Advanced Camera Controls",
      "nameZh": "",
      "nameEn": "Decrease FoV",
      "description": "减小高级镜头视野角；收紧画面并突出主体。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "view_fov_out",
      "actionKey": "view_fov_out",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-682",
      "listType": "game",
      "order": 682,
      "group": "Camera - Advanced Camera Controls",
      "nameZh": "",
      "nameEn": "Increase DoF",
      "description": "提高高级镜头景深设置；拍摄时按需要改变背景虚化效果。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "view_fstop_in",
      "actionKey": "view_fstop_in",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-683",
      "listType": "game",
      "order": 683,
      "group": "Camera - Advanced Camera Controls",
      "nameZh": "",
      "nameEn": "Decrease DoF",
      "description": "降低高级镜头景深设置；拍摄时减弱背景虚化效果。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "view_fstop_out",
      "actionKey": "view_fstop_out",
      "suggestedInput": "键盘",
      "priority": "P5-非飞行",
      "note": "FPS 可另建 profile。",
      "sourceRefs": [
        "cig-controls"
      ]
    },
    {
      "id": "game-684",
      "listType": "game",
      "order": 684,
      "group": "Camera - Advanced Camera Controls",
      "nameZh": "",
      "nameEn": "Reset Current View",
      "description": "重置当前高级镜头视图；试验构图后快速回到默认。",
      "repeatCount": "1",
      "activationMode": "1372",
      "actionId": "view_restore_defaults",
      "actionKey": "view_restore_defaults",
      "suggestedInput": "Head tracking / keyboard",
      "priority": "P4-视角",
      "note": "Look Behind/Recenter 如需 HOTAS，仅考虑 RD1 + RA2。",
      "sourceRefs": [
        "cig-controls"
      ]
    }
  ],
  "scenarioRows": [
    {
      "id": "scenario-1",
      "listType": "scenario",
      "order": 1,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "交互 / 使用",
      "nameEn": "pc_interaction_select",
      "description": "激活当前 Inner Thought 交互选项；对准舱门、座椅、物品或面板后执行使用/进入/拾取等操作。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`pc_interaction_select` 或 `pc_select`, Activate Inner Thought",
      "actionId": "pc_interaction_select",
      "actionKey": "pc_interaction_select",
      "suggestedInput": "`LA3 按` 或键鼠",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-2",
      "listType": "scenario",
      "order": 2,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "交互焦点上/下/左/右",
      "nameEn": "Interaction Focus 上/下/左/右",
      "description": "在交互模式中把焦点向上、下、左、右移动；面对多选项面板时先选中正确控件，再执行确认。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "Interaction Focus 上/下/左/右",
      "actionId": "",
      "actionKey": "scenario:2:item",
      "suggestedInput": "`LA3 ↑/↓/←/→` 或键鼠",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-3",
      "listType": "scenario",
      "order": 3,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "Flight Ready",
      "nameEn": "v_flightready",
      "description": "让舰船进入可飞行/系统就绪状态；登机后起飞前一次完成常用上电准备。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_flightready`",
      "actionId": "v_flightready",
      "actionKey": "v_flightready",
      "suggestedInput": "`LB1 + LC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-4",
      "listType": "scenario",
      "order": 4,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "电源全部",
      "nameEn": "v_power_toggle",
      "description": "切换全舰电源；上电检查或离舰前快速处理总体供电。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_power_toggle`",
      "actionId": "v_power_toggle",
      "actionKey": "v_power_toggle",
      "suggestedInput": "`LB1 + LC1 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-5",
      "listType": "scenario",
      "order": 5,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "推进器电源",
      "nameEn": "v_power_toggle_thrusters",
      "description": "切换推进器供电；起飞前确认开启，停泊维护时可关闭。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_power_toggle_thrusters`",
      "actionId": "v_power_toggle_thrusters",
      "actionKey": "v_power_toggle_thrusters",
      "suggestedInput": "`LB1 + LC1 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_down",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-6",
      "listType": "scenario",
      "order": 6,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "护盾电源",
      "nameEn": "v_power_toggle_shields",
      "description": "切换护盾供电；进入危险区域前确认护盾已上线。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_power_toggle_shields`",
      "actionId": "v_power_toggle_shields",
      "actionKey": "v_power_toggle_shields",
      "suggestedInput": "`LB1 + LC1 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_left",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-7",
      "listType": "scenario",
      "order": 7,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "武器电源",
      "nameEn": "v_power_toggle_weapons",
      "description": "切换武器供电；交战前开启、希望降低误击风险时关闭。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_power_toggle_weapons`",
      "actionId": "v_power_toggle_weapons",
      "actionKey": "v_power_toggle_weapons",
      "suggestedInput": "`LB1 + LC1 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_right",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-8",
      "listType": "scenario",
      "order": 8,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "舱门开关",
      "nameEn": "v_toggle_all_doors",
      "description": "切换所有舱门的开/关；登机、离机或装卸前快速处理通道。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_toggle_all_doors`",
      "actionId": "v_toggle_all_doors",
      "actionKey": "v_toggle_all_doors",
      "suggestedInput": "`LB1 + LA3 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-9",
      "listType": "scenario",
      "order": 9,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "舱门锁",
      "nameEn": "v_toggle_all_doorlocks",
      "description": "切换所有舱门的锁定状态；停泊或需要限制他人进入时使用。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_toggle_all_doorlocks`",
      "actionId": "v_toggle_all_doorlocks",
      "actionKey": "v_toggle_all_doorlocks",
      "suggestedInput": "`LB1 + LA3 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_down",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-10",
      "listType": "scenario",
      "order": 10,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "Port lock toggle all",
      "nameEn": "v_toggle_all_portlocks",
      "description": "切换所有设备/组件端口锁；更换或拆取舰船部件前先确认此状态。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_toggle_all_portlocks`",
      "actionId": "v_toggle_all_portlocks",
      "actionKey": "v_toggle_all_portlocks",
      "suggestedInput": "`L-SW1 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "sw1_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-11",
      "listType": "scenario",
      "order": 11,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "客舱灯",
      "nameEn": "v_toggle_cabin_lights",
      "description": "切换座舱/舰内灯；登舰、离机或舱内作业时按环境照明需要使用。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_toggle_cabin_lights`",
      "actionId": "v_toggle_cabin_lights",
      "actionKey": "v_toggle_cabin_lights",
      "suggestedInput": "`LB1 + LA3 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_left",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-12",
      "listType": "scenario",
      "order": 12,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "航行灯",
      "nameEn": "v_toggle_running_lights",
      "description": "切换航行灯；需要让舰船在夜间或交通环境中更容易被辨识时使用。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_toggle_running_lights`",
      "actionId": "v_toggle_running_lights",
      "actionKey": "v_toggle_running_lights",
      "suggestedInput": "`LB1 + LA3 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_right",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-13",
      "listType": "scenario",
      "order": 13,
      "chapterOrder": 1,
      "group": "第 1 章:登机 / 上电",
      "subgroup": "推荐绑定",
      "nameZh": "头灯",
      "nameEn": "v_lights",
      "description": "切换载具头灯；夜间、洞穴或能见度差时照亮前方，注意暴露位置。此处对应「登机 / 上电」阶段的操作。",
      "actionText": "`v_lights`",
      "actionId": "v_lights",
      "actionKey": "v_lights",
      "suggestedInput": "键盘 / 后续候选",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding"
      ]
    },
    {
      "id": "scenario-14",
      "listType": "scenario",
      "order": 14,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "起落架开收",
      "nameEn": "v_toggle_landing_system",
      "description": "开/收起落架；获准进近前放下，离开停机位后再收起。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_toggle_landing_system`",
      "actionId": "v_toggle_landing_system",
      "actionKey": "v_toggle_landing_system",
      "suggestedInput": "`L-F1`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-15",
      "listType": "scenario",
      "order": 15,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "VTOL 切换",
      "nameEn": "v_toggle_vtol",
      "description": "切换 VTOL 推进器构型；大气层悬停、垂直起降时提升垂直效率，代价是前向性能。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_toggle_vtol`",
      "actionId": "v_toggle_vtol",
      "actionKey": "v_toggle_vtol",
      "suggestedInput": "`L-F2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-16",
      "listType": "scenario",
      "order": 16,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "ATC 请求降落",
      "nameEn": "v_atc_request",
      "description": "呼叫空管申请降落；接近有 Landing Services 的地点后取得机库、停机坪或对接口分配。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_atc_request`",
      "actionId": "v_atc_request",
      "actionKey": "v_atc_request",
      "suggestedInput": "`LB1 + LA2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-17",
      "listType": "scenario",
      "order": 17,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Cycle camera view",
      "nameEn": "v_view_cycle_fwd",
      "description": "按顺序切换舰船镜头视角；起降时可快速检查起落架、船体和周边障碍。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_view_cycle_fwd`",
      "actionId": "v_view_cycle_fwd",
      "actionKey": "v_view_cycle_fwd",
      "suggestedInput": "`LB1 + LA3 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-18",
      "listType": "scenario",
      "order": 18,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Decoupled 切换",
      "nameEn": "v_ifcs_toggle_vector_decoupling",
      "description": "切换解耦飞行；解耦后松开输入仍保留惯性，适合漂移机动但需要主动制动。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_toggle_vector_decoupling`",
      "actionId": "v_ifcs_toggle_vector_decoupling",
      "actionKey": "v_ifcs_toggle_vector_decoupling",
      "suggestedInput": "`LA2 base`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-19",
      "listType": "scenario",
      "order": 19,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "G-Force Safety",
      "nameEn": "v_ifcs_toggle_gforce_safety",
      "description": "切换 G 力安全辅助；按自己的机动与舒适需求调整飞控保护。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_toggle_gforce_safety`",
      "actionId": "v_ifcs_toggle_gforce_safety",
      "actionKey": "v_ifcs_toggle_gforce_safety",
      "suggestedInput": "`LC1 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-20",
      "listType": "scenario",
      "order": 20,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Gravity Compensation",
      "nameEn": "v_ifcs_toggle_gravity_compensation",
      "description": "切换重力补偿；在行星表面低速悬停或作业时减少持续修正。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_toggle_gravity_compensation`",
      "actionId": "v_ifcs_toggle_gravity_compensation",
      "actionKey": "v_ifcs_toggle_gravity_compensation",
      "suggestedInput": "`LC1 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-21",
      "listType": "scenario",
      "order": 21,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Proximity Assist",
      "nameEn": "v_ifcs_proximity_assist_toggle",
      "description": "切换近距辅助；狭窄空间机动时可减少碰撞风险。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_proximity_assist_toggle`",
      "actionId": "v_ifcs_proximity_assist_toggle",
      "actionKey": "v_ifcs_proximity_assist_toggle",
      "suggestedInput": "`LC1 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-22",
      "listType": "scenario",
      "order": 22,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "巡航 / throttle mode",
      "nameEn": "v_ifcs_throttle_swap_mode",
      "description": "切换巡航油门；在持续巡航和即时推进之间切换。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_throttle_swap_mode`",
      "actionId": "v_ifcs_throttle_swap_mode",
      "actionKey": "v_ifcs_throttle_swap_mode",
      "suggestedInput": "`LC1 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_right",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-23",
      "listType": "scenario",
      "order": 23,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Speed limiter reset SCM",
      "nameEn": "v_ifcs_speed_limiter_reset_scm",
      "description": "将速度限制器重置到 SCM 默认值；从进近低速设置返回常规机动速度时使用。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_speed_limiter_reset_scm`",
      "actionId": "v_ifcs_speed_limiter_reset_scm",
      "actionKey": "v_ifcs_speed_limiter_reset_scm",
      "suggestedInput": "`LC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-24",
      "listType": "scenario",
      "order": 24,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Speed limiter toggle",
      "nameEn": "v_ifcs_toggle_speed_limiter",
      "description": "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_ifcs_toggle_speed_limiter`",
      "actionId": "v_ifcs_toggle_speed_limiter",
      "actionKey": "v_ifcs_toggle_speed_limiter",
      "suggestedInput": "`LD1 + LC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-25",
      "listType": "scenario",
      "order": 25,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Wing config / transform",
      "nameEn": "v_transform_cycle",
      "description": "循环舰船可变构型；逐个试切可用形态并确认当前状态。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_transform_cycle`",
      "actionId": "v_transform_cycle",
      "actionKey": "v_transform_cycle",
      "suggestedInput": "`L-F3`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f3",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-26",
      "listType": "scenario",
      "order": 26,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "Request cargo loading",
      "nameEn": "v_atc_loading_area_request",
      "description": "向空管请求货运装卸区域；需要使用指定货运服务时呼叫。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_atc_loading_area_request`",
      "actionId": "v_atc_loading_area_request",
      "actionKey": "v_atc_loading_area_request",
      "suggestedInput": "`L-SW1 ↑` 或 `LB1 + LA2` hold",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "sw1_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-27",
      "listType": "scenario",
      "order": 27,
      "chapterOrder": 2,
      "group": "第 2 章:起飞 / 离港",
      "subgroup": "推荐绑定",
      "nameZh": "自动降落",
      "nameEn": "v_autoland",
      "description": "请求/执行自动着陆；已获准并接近可用停泊位时可减少最后阶段的手动操作。此处对应「起飞 / 离港」阶段的操作。",
      "actionText": "`v_autoland`",
      "actionId": "v_autoland",
      "actionKey": "v_autoland",
      "suggestedInput": "键盘 / 后续候选",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-28",
      "listType": "scenario",
      "order": 28,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Pitch",
      "nameEn": "v_pitch",
      "description": "用轴控制地面载具俯仰；越野或坡地中精细修正姿态。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_pitch`",
      "actionId": "v_pitch",
      "actionKey": "v_pitch",
      "suggestedInput": "右杆 Y",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_y"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-29",
      "listType": "scenario",
      "order": 29,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Roll",
      "nameEn": "v_roll",
      "description": "用连续轴控制舰船滚转；适合摇杆主轴的精细姿态操控。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_roll`",
      "actionId": "v_roll",
      "actionKey": "v_roll",
      "suggestedInput": "右杆 X",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_x"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-30",
      "listType": "scenario",
      "order": 30,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Yaw",
      "nameEn": "v_yaw",
      "description": "用轴控制地面载具左右转向；适合方向盘或摇杆。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_yaw`",
      "actionId": "v_yaw",
      "actionKey": "v_yaw",
      "suggestedInput": "右杆 Twist",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_twist"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-31",
      "listType": "scenario",
      "order": 31,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Strafe L/R",
      "nameEn": "v_strafe_lateral",
      "description": "向左平移推进；悬停、入库或贴近障碍时做横向/垂直微调。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_strafe_lateral`",
      "actionId": "v_strafe_lateral",
      "actionKey": "v_strafe_lateral",
      "suggestedInput": "左杆 X",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_x"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-32",
      "listType": "scenario",
      "order": 32,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Strafe F/B",
      "nameEn": "v_strafe_longitudinal",
      "description": "用连续轴控制前/后向推进；适合油门或推拉杆的直接速度输入。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_strafe_longitudinal`",
      "actionId": "v_strafe_longitudinal",
      "actionKey": "v_strafe_longitudinal",
      "suggestedInput": "左杆 Y",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_y"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-33",
      "listType": "scenario",
      "order": 33,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Strafe U/D",
      "nameEn": "v_strafe_vertical",
      "description": "向上平移推进；悬停、入库或贴近障碍时做横向/垂直微调。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_strafe_vertical`",
      "actionId": "v_strafe_vertical",
      "actionKey": "v_strafe_vertical",
      "suggestedInput": "左杆 Twist",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_twist"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-34",
      "listType": "scenario",
      "order": 34,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Spacebrake",
      "nameEn": "v_space_brake",
      "description": "触发太空刹车，迅速抵消当前运动；进库、避障或需要紧急停船时使用。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_space_brake`",
      "actionId": "v_space_brake",
      "actionKey": "v_space_brake",
      "suggestedInput": "左扳机一段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "trigger_s1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-35",
      "listType": "scenario",
      "order": 35,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Boost",
      "nameEn": "v_afterburner",
      "description": "触发加力/Boost；短时提升推进器响应和加速，用于脱离或快速机动。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_afterburner`",
      "actionId": "v_afterburner",
      "actionKey": "v_afterburner",
      "suggestedInput": "左扳机二段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "trigger_s2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-36",
      "listType": "scenario",
      "order": 36,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Speed Limiter abs",
      "nameEn": "v_speed_range_abs",
      "description": "用绝对轴设定速度限制；将硬件位置直接映射为最高速度。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_speed_range_abs`",
      "actionId": "v_speed_range_abs",
      "actionKey": "v_speed_range_abs",
      "suggestedInput": "左小油门轴 / `LA1` 普通轴候选",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-37",
      "listType": "scenario",
      "order": 37,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Speed Limiter + / -",
      "nameEn": "v_speed_range_up",
      "description": "按住提高速度限制；持续放宽最大速度。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_speed_range_up` / `v_speed_range_down`",
      "actionId": "v_speed_range_up",
      "actionKey": "v_speed_range_up",
      "suggestedInput": "左 Encoder 转",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "encoder_cw",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-38",
      "listType": "scenario",
      "order": 38,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Speed Limiter reset SCM",
      "nameEn": "v_ifcs_speed_limiter_reset_scm",
      "description": "将速度限制器重置到 SCM 默认值；从进近低速设置返回常规机动速度时使用。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_ifcs_speed_limiter_reset_scm`",
      "actionId": "v_ifcs_speed_limiter_reset_scm",
      "actionKey": "v_ifcs_speed_limiter_reset_scm",
      "suggestedInput": "`LC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-39",
      "listType": "scenario",
      "order": 39,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Speed Limiter 开关",
      "nameEn": "v_ifcs_toggle_speed_limiter",
      "description": "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_ifcs_toggle_speed_limiter`",
      "actionId": "v_ifcs_toggle_speed_limiter",
      "actionKey": "v_ifcs_toggle_speed_limiter",
      "suggestedInput": "`LD1 + LC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-40",
      "listType": "scenario",
      "order": 40,
      "chapterOrder": 3,
      "group": "第 3 章:基础飞行 / 6DOF",
      "subgroup": "推荐绑定",
      "nameZh": "Match target velocity",
      "nameEn": "v_target_match_vel",
      "description": "使舰船匹配当前目标的速度；编队、接近或稳定跟随目标时减少手动相对速度修正。此处对应「基础飞行 / 6DOF」阶段的操作。",
      "actionText": "`v_target_match_vel`",
      "actionId": "v_target_match_vel",
      "actionKey": "v_target_match_vel",
      "suggestedInput": "键盘 / 后续候选",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-41",
      "listType": "scenario",
      "order": 41,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "主武器 / WG1",
      "nameEn": "v_weapon_preset_fire_guns0",
      "description": "武器预设：触发火炮组 1 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_preset_fire_guns0`",
      "actionId": "v_weapon_preset_fire_guns0",
      "actionKey": "v_weapon_preset_fire_guns0",
      "suggestedInput": "右扳机一段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-42",
      "listType": "scenario",
      "order": 42,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "WG2 / 全武器",
      "nameEn": "v_weapon_preset_fire_guns1",
      "description": "武器预设：触发火炮组 2 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_preset_fire_guns1` 或 `v_weapon_preset_attack`",
      "actionId": "v_weapon_preset_fire_guns1",
      "actionKey": "v_weapon_preset_fire_guns1",
      "suggestedInput": "右扳机二段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-43",
      "listType": "scenario",
      "order": 43,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "导弹 Tap",
      "nameEn": "v_weapon_toggle_launch_missile",
      "description": "短按发射导弹；确认目标与发射数量后快速开火。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_toggle_launch_missile`",
      "actionId": "v_weapon_toggle_launch_missile",
      "actionKey": "v_weapon_toggle_launch_missile",
      "suggestedInput": "`RA2 base`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-44",
      "listType": "scenario",
      "order": 44,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "导弹 Hold",
      "nameEn": "v_weapon_launch_missile",
      "description": "按住发射导弹；在锁定与发射条件满足后持续执行发射动作。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_launch_missile`",
      "actionId": "v_weapon_launch_missile",
      "actionKey": "v_weapon_launch_missile",
      "suggestedInput": "`RA2 base` 的 hold",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-45",
      "listType": "scenario",
      "order": 45,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "导弹类型下一个/上一个",
      "nameEn": "v_weapon_cycle_missile_fwd",
      "description": "切到下一种导弹；按目标距离、签名或战术选择弹种。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_cycle_missile_fwd` / `v_weapon_cycle_missile_back`",
      "actionId": "v_weapon_cycle_missile_fwd",
      "actionKey": "v_weapon_cycle_missile_fwd",
      "suggestedInput": "`RD1 + RA2` 或 `RB1 + RA2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-46",
      "listType": "scenario",
      "order": 46,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "开火 / 武器",
      "nameZh": "Fire Mode",
      "nameEn": "v_weapon_change_firemode",
      "description": "控制武器瞄准模式：循环切换；根据 PIP、涂装或自动瞄准需求切换。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_change_firemode`",
      "actionId": "v_weapon_change_firemode",
      "actionKey": "v_weapon_change_firemode",
      "suggestedInput": "`RD1 + 右扳机一段`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-47",
      "listType": "scenario",
      "order": 47,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业武器链 / rapid fire",
      "nameZh": "WG3 / specialized fire",
      "nameEn": "v_weapon_preset_fire_guns2",
      "description": "武器预设：触发火炮组 3 开火；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_preset_fire_guns2`",
      "actionId": "v_weapon_preset_fire_guns2",
      "actionKey": "v_weapon_preset_fire_guns2",
      "suggestedInput": "右 rapid fire base",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-48",
      "listType": "scenario",
      "order": 48,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业武器链 / rapid fire",
      "nameZh": "Staggered / combined fire",
      "nameEn": "v_weapon_change_firemode",
      "description": "控制武器瞄准模式：循环切换；根据 PIP、涂装或自动瞄准需求切换。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_change_firemode`",
      "actionId": "v_weapon_change_firemode",
      "actionKey": "v_weapon_change_firemode",
      "suggestedInput": "`RD1 + 右 rapid fire`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-49",
      "listType": "scenario",
      "order": 49,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业武器链 / rapid fire",
      "nameZh": "Precision targeting / gunnery UI",
      "nameEn": "v_weapon_ui_scale_toggle",
      "description": "切换炮术 UI 放大；按目标距离调整武器 HUD 可读性。此处对应「战斗核心」阶段的操作。",
      "actionText": "Precision Targeting 或 `v_weapon_ui_scale_toggle`",
      "actionId": "v_weapon_ui_scale_toggle",
      "actionKey": "v_weapon_ui_scale_toggle",
      "suggestedInput": "`RB1 + 右 rapid fire`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-50",
      "listType": "scenario",
      "order": 50,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业武器链 / rapid fire",
      "nameZh": "Weapon preset next/prev",
      "nameEn": "v_weapon_preset_next",
      "description": "武器预设：切到下一个预设；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_preset_next` / `v_weapon_preset_prev`",
      "actionId": "v_weapon_preset_next",
      "actionKey": "v_weapon_preset_next",
      "suggestedInput": "右 rapid fire shift 候选",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-51",
      "listType": "scenario",
      "order": 51,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业导弹 / bombing",
      "nameZh": "Missile count + / -",
      "nameEn": "v_weapon_increase_max_missiles",
      "description": "增加本次待发射的武装导弹数量；准备齐射时提高数量。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_increase_max_missiles` / `v_weapon_decrease_max_missiles`",
      "actionId": "v_weapon_increase_max_missiles",
      "actionKey": "v_weapon_increase_max_missiles",
      "suggestedInput": "`RB1 + RA4 →/←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_right",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-52",
      "listType": "scenario",
      "order": 52,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业导弹 / bombing",
      "nameZh": "Missile camera",
      "nameEn": "v_weapon_launch_missile_cinematic",
      "description": "短按启用导弹发射电影镜头；用于观察弹药离舰轨迹，非交战必需。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_launch_missile_cinematic`",
      "actionId": "v_weapon_launch_missile_cinematic",
      "actionKey": "v_weapon_launch_missile_cinematic",
      "suggestedInput": "`RB1 + RA4 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-53",
      "listType": "scenario",
      "order": 53,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业导弹 / bombing",
      "nameZh": "Bomb HUD range + / -",
      "nameEn": "v_weapon_bombing_hud_range_increase",
      "description": "增加炸弹 HUD 测距；对地投弹时扩展预期投放距离。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_bombing_hud_range_increase` / `v_weapon_bombing_hud_range_decrease`",
      "actionId": "v_weapon_bombing_hud_range_increase",
      "actionKey": "v_weapon_bombing_hud_range_increase",
      "suggestedInput": "`RB1 + RA4 ↑/↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-54",
      "listType": "scenario",
      "order": 54,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业导弹 / bombing",
      "nameZh": "Bomb HUD reset / impact point",
      "nameEn": "v_weapon_bombing_hud_range_reset",
      "description": "重置炸弹 HUD 测距；恢复默认对地投弹显示。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_bombing_hud_range_reset` / `v_weapon_bombing_toggle_desired_impact_point`",
      "actionId": "v_weapon_bombing_hud_range_reset",
      "actionKey": "v_weapon_bombing_hud_range_reset",
      "suggestedInput": "`RB1 + RA4 按` hold 或键盘",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-55",
      "listType": "scenario",
      "order": 55,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业目标管理",
      "nameZh": "子目标下一项",
      "nameEn": "v_target_cycle_subitem_fwd",
      "description": "在子目标部件列表中向后一项循环锁定；快速浏览可锁定对象。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_target_cycle_subitem_fwd`",
      "actionId": "v_target_cycle_subitem_fwd",
      "actionKey": "v_target_cycle_subitem_fwd",
      "suggestedInput": "右 Encoder 转",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_cw",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-56",
      "listType": "scenario",
      "order": 56,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业目标管理",
      "nameZh": "子目标重置",
      "nameEn": "v_target_cycle_subitem_reset",
      "description": "将子目标部件列表重置到主目标；需要快速回到默认起点时使用。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_target_cycle_subitem_reset`",
      "actionId": "v_target_cycle_subitem_reset",
      "actionKey": "v_target_cycle_subitem_reset",
      "suggestedInput": "右 Encoder 按",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-57",
      "listType": "scenario",
      "order": 57,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业目标管理",
      "nameZh": "Pin 1/2/3",
      "nameEn": "v_target_toggle_pin_index_1_hold",
      "description": "按住将当前选中目标固定到/移出编号 1；将常用目标保存在编号位后可快速取回或锁定。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_target_toggle_pin_index_1_hold` / `v_target_toggle_pin_index_2_hold` / `v_target_toggle_pin_index_3_hold`",
      "actionId": "v_target_toggle_pin_index_1_hold",
      "actionKey": "v_target_toggle_pin_index_1_hold",
      "suggestedInput": "`RD1 + RA4 ←/按/→` 或右 Encoder shift",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_press",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-58",
      "listType": "scenario",
      "order": 58,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业目标管理",
      "nameZh": "清空 pins",
      "nameEn": "v_target_remove_all_pins",
      "description": "清除全部固定目标；交战或任务结束后整理目标列表。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_target_remove_all_pins`",
      "actionId": "v_target_remove_all_pins",
      "actionKey": "v_target_remove_all_pins",
      "suggestedInput": "`RD1 + RA4 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_down",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-59",
      "listType": "scenario",
      "order": 59,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "专业目标管理",
      "nameZh": "最近敌对 / all / friendly reset",
      "nameEn": "v_target_cycle_hostile_reset",
      "description": "将敌对目标列表重置到最近目标；需要快速回到默认起点时使用。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_target_cycle_hostile_reset` / `v_target_cycle_all_reset` / `v_target_cycle_friendly_reset`",
      "actionId": "v_target_cycle_hostile_reset",
      "actionKey": "v_target_cycle_hostile_reset",
      "suggestedInput": "`RD1 + RA4 ↑/←/→` 候选",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-60",
      "listType": "scenario",
      "order": 60,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "Master Mode 循环",
      "nameEn": "v_master_mode_cycle",
      "description": "循环舰船主模式；在 NAV 与 SCM 等模式间切换，量子旅行前应确认已进入 NAV。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_master_mode_cycle` / `v_master_mode_cycle_long`",
      "actionId": "v_master_mode_cycle",
      "actionKey": "v_master_mode_cycle",
      "suggestedInput": "`RA3 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-61",
      "listType": "scenario",
      "order": 61,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "下一/上一 operator mode",
      "nameEn": "mode cycle 或 set mode 项",
      "description": "循环或明确设定操作模式；在 Flight、Quantum、Mining、Salvage 等舰船工作模式间按任务切换。此处对应「战斗核心」阶段的操作。",
      "actionText": "mode cycle 或 set mode 项",
      "actionId": "",
      "actionKey": "scenario:61:operator-mode",
      "suggestedInput": "`RA3 ↑/↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-62",
      "listType": "scenario",
      "order": 62,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "扫描模式",
      "nameEn": "v_toggle_scan_mode",
      "description": "切换扫描操作模式；需要使用对应舰载工具或功能时进入，结束后切回。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_toggle_scan_mode`",
      "actionId": "v_toggle_scan_mode",
      "actionKey": "v_toggle_scan_mode",
      "suggestedInput": "`RA3 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-63",
      "listType": "scenario",
      "order": 63,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "量子模式",
      "nameEn": "v_toggle_quantum_mode",
      "description": "切换量子操作模式；需要使用对应舰载工具或功能时进入，结束后切回。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_toggle_quantum_mode`",
      "actionId": "v_toggle_quantum_mode",
      "actionKey": "v_toggle_quantum_mode",
      "suggestedInput": "`RA3 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_right",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-64",
      "listType": "scenario",
      "order": 64,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "Gimbal 模式",
      "nameEn": "v_weapon_gimbal_mode_cycle_all",
      "description": "循环全武器的云台模式；按目标运动和个人瞄准习惯选择锁定或解锁。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_gimbal_mode_cycle_all`",
      "actionId": "v_weapon_gimbal_mode_cycle_all",
      "actionKey": "v_weapon_gimbal_mode_cycle_all",
      "suggestedInput": "`RA4 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-65",
      "listType": "scenario",
      "order": 65,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "PIP lead/lag",
      "nameEn": "v_weapon_pip_toggle_lead_lag",
      "description": "切换 PIP 的提前/滞后显示；按弹道和目标机动选择更合适的引导方式。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_pip_toggle_lead_lag`",
      "actionId": "v_weapon_pip_toggle_lead_lag",
      "actionKey": "v_weapon_pip_toggle_lead_lag",
      "suggestedInput": "`RA4 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-66",
      "listType": "scenario",
      "order": 66,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "汇聚距离 -/+",
      "nameEn": "v_weapon_convergence_distance_rel_decrease",
      "description": "减小手动汇聚距离；近距交战时把固定武器交汇点拉近。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_weapon_convergence_distance_rel_decrease` / `v_weapon_convergence_distance_rel_increase`",
      "actionId": "v_weapon_convergence_distance_rel_decrease",
      "actionKey": "v_weapon_convergence_distance_rel_decrease",
      "suggestedInput": "`RA4 ←/→`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-67",
      "listType": "scenario",
      "order": 67,
      "chapterOrder": 4,
      "group": "第 4 章:战斗核心",
      "subgroup": "A3 / A4",
      "nameZh": "E.S.P.",
      "nameEn": "v_ifcs_toggle_esp",
      "description": "切换精确瞄准；需要更细的目标观察或控制时开启，再次操作恢复。此处对应「战斗核心」阶段的操作。",
      "actionText": "`v_ifcs_toggle_esp`",
      "actionId": "v_ifcs_toggle_esp",
      "actionKey": "v_ifcs_toggle_esp",
      "suggestedInput": "`RA4 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-68",
      "listType": "scenario",
      "order": 68,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "MFD 上/下/左/右",
      "nameEn": "v_mfd_movement_up_short",
      "description": "将 MFD 的当前焦点向上移动（短按）；用摇杆/键位浏览屏幕控件而不必操作鼠标。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_mfd_movement_up_short` / `v_mfd_movement_down_short` / `v_mfd_movement_left_short` / `v_mfd_movement_right_short`",
      "actionId": "v_mfd_movement_up_short",
      "actionKey": "v_mfd_movement_up_short",
      "suggestedInput": "`LA3 ↑/↓/←/→`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-69",
      "listType": "scenario",
      "order": 69,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "MFD 选择",
      "nameEn": "v_mfd_soft_select_mfd_primary_short",
      "description": "触发当前 MFD 的主选择操作（短按）；用实体控制器确认当前焦点，而不必点击屏幕。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_mfd_soft_select_mfd_primary_short` 或 select",
      "actionId": "v_mfd_soft_select_mfd_primary_short",
      "actionKey": "v_mfd_soft_select_mfd_primary_short",
      "suggestedInput": "`LA3 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-70",
      "listType": "scenario",
      "order": 70,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "MFD 翻页 + / -",
      "nameEn": "v_mfd_interact_cycle_forwards_short",
      "description": "在当前 MFD 中向前循环页面（短按）；飞行中快速切到通信、状态等常用页。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_mfd_interact_cycle_forwards_short` / `v_mfd_interact_cycle_backwards_short`",
      "actionId": "v_mfd_interact_cycle_forwards_short",
      "actionKey": "v_mfd_interact_cycle_forwards_short",
      "suggestedInput": "`LD1 + LA3 ↑/↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-71",
      "listType": "scenario",
      "order": 71,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "上一/下一 MFD",
      "nameEn": "v_mfd_soft_select_cast_left_short",
      "description": "触发当前 MFD 的左侧选择操作（短按）；在多选项屏幕中快速执行左侧软键。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_mfd_soft_select_cast_left_short` / `v_mfd_soft_select_cast_right_short` 或对应 MFD select",
      "actionId": "v_mfd_soft_select_cast_left_short",
      "actionKey": "v_mfd_soft_select_cast_left_short",
      "suggestedInput": "`LD1 + LA3 ←/→`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_left",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-72",
      "listType": "scenario",
      "order": 72,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "前盾加固",
      "nameEn": "v_shield_raise_level_forward",
      "description": "提高前方向护盾分配；受攻击方向明确时临时加强该面防护。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_shield_raise_level_forward`",
      "actionId": "v_shield_raise_level_forward",
      "actionKey": "v_shield_raise_level_forward",
      "suggestedInput": "`LA4 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-73",
      "listType": "scenario",
      "order": 73,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "后盾加固",
      "nameEn": "v_shield_raise_level_back",
      "description": "提高后向护盾分配；受攻击方向明确时临时加强该面防护。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_shield_raise_level_back`",
      "actionId": "v_shield_raise_level_back",
      "actionKey": "v_shield_raise_level_back",
      "suggestedInput": "`LA4 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-74",
      "listType": "scenario",
      "order": 74,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "左盾加固",
      "nameEn": "v_shield_raise_level_left",
      "description": "提高左向护盾分配；受攻击方向明确时临时加强该面防护。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_shield_raise_level_left`",
      "actionId": "v_shield_raise_level_left",
      "actionKey": "v_shield_raise_level_left",
      "suggestedInput": "`LA4 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-75",
      "listType": "scenario",
      "order": 75,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "右盾加固",
      "nameEn": "v_shield_raise_level_right",
      "description": "提高右向护盾分配；受攻击方向明确时临时加强该面防护。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_shield_raise_level_right`",
      "actionId": "v_shield_raise_level_right",
      "actionKey": "v_shield_raise_level_right",
      "suggestedInput": "`LA4 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_right",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-76",
      "listType": "scenario",
      "order": 76,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "护盾面重置",
      "nameEn": "v_shield_reset_level",
      "description": "重置护盾分配；威胁解除后让护盾回到均衡状态。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_shield_reset_level`",
      "actionId": "v_shield_reset_level",
      "actionKey": "v_shield_reset_level",
      "suggestedInput": "`LA4 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-77",
      "listType": "scenario",
      "order": 77,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "武器电容 MAX",
      "nameEn": "v_engineering_assignment_weapons_max",
      "description": "将工程资源分配给武器设为最大；准备持续武器输出时优先供能。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_engineering_assignment_weapons_max`",
      "actionId": "v_engineering_assignment_weapons_max",
      "actionKey": "v_engineering_assignment_weapons_max",
      "suggestedInput": "`LD1 + LA4 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_up",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-78",
      "listType": "scenario",
      "order": 78,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "护盾电容 MAX",
      "nameEn": "v_engineering_assignment_shields_max",
      "description": "将工程资源分配给护盾设为最大；预期承受火力时优先增强防护。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_engineering_assignment_shields_max`",
      "actionId": "v_engineering_assignment_shields_max",
      "actionKey": "v_engineering_assignment_shields_max",
      "suggestedInput": "`LD1 + LA4 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_down",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-79",
      "listType": "scenario",
      "order": 79,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "引擎电容 MAX",
      "nameEn": "v_engineering_assignment_engine_max",
      "description": "将工程资源分配给引擎设为最大；追击、脱离或需要机动性能时优先供能。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_engineering_assignment_engine_max`",
      "actionId": "v_engineering_assignment_engine_max",
      "actionKey": "v_engineering_assignment_engine_max",
      "suggestedInput": "`LD1 + LA4 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_left",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-80",
      "listType": "scenario",
      "order": 80,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "电容重置",
      "nameEn": "v_engineering_assignment_reset",
      "description": "重置工程资源分配；战况变化后恢复默认/均衡分配。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_engineering_assignment_reset`",
      "actionId": "v_engineering_assignment_reset",
      "actionKey": "v_engineering_assignment_reset",
      "suggestedInput": "`LD1 + LA4 →`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_right",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-81",
      "listType": "scenario",
      "order": 81,
      "chapterOrder": 5,
      "group": "第 5 章:能量 / 护盾 / MFD",
      "subgroup": "推荐绑定",
      "nameZh": "MFD 系统页",
      "nameEn": "v_mfd_select_view_configuration_short",
      "description": "将 MFD 直接切到“载具配置”页面（短按）；在需要该类信息或控制时少走一层菜单。此处对应「能量 / 护盾 / MFD」阶段的操作。",
      "actionText": "`v_mfd_select_view_configuration_short`",
      "actionId": "v_mfd_select_view_configuration_short",
      "actionKey": "v_mfd_select_view_configuration_short",
      "suggestedInput": "键盘 / 后续候选",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-82",
      "listType": "scenario",
      "order": 82,
      "chapterOrder": 6,
      "group": "第 6 章:扫描 / 态势",
      "subgroup": "推荐绑定",
      "nameZh": "切扫描 operator mode",
      "nameEn": "v_toggle_scan_mode",
      "description": "切换扫描操作模式；需要使用对应舰载工具或功能时进入，结束后切回。此处对应「扫描 / 态势」阶段的操作。",
      "actionText": "`v_toggle_scan_mode`",
      "actionId": "v_toggle_scan_mode",
      "actionKey": "v_toggle_scan_mode",
      "suggestedInput": "`RA3 ←`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-83",
      "listType": "scenario",
      "order": 83,
      "chapterOrder": 6,
      "group": "第 6 章:扫描 / 态势",
      "subgroup": "推荐绑定",
      "nameZh": "扫描执行",
      "nameEn": "v_scanning_trigger_scan",
      "description": "激活扫描；在采矿或探索前识别可扫描目标并获得其信息。此处对应「扫描 / 态势」阶段的操作。",
      "actionText": "`v_scanning_trigger_scan`",
      "actionId": "v_scanning_trigger_scan",
      "actionKey": "v_scanning_trigger_scan",
      "suggestedInput": "`RB1 + RC1 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-84",
      "listType": "scenario",
      "order": 84,
      "chapterOrder": 6,
      "group": "第 6 章:扫描 / 态势",
      "subgroup": "推荐绑定",
      "nameZh": "扫描角度 + / -",
      "nameEn": "v_inc_scan_focus_level",
      "description": "增大扫描角度；先扩大搜索覆盖，再按需收窄目标。此处对应「扫描 / 态势」阶段的操作。",
      "actionText": "`v_inc_scan_focus_level` / `v_dec_scan_focus_level`",
      "actionId": "v_inc_scan_focus_level",
      "actionKey": "v_inc_scan_focus_level",
      "suggestedInput": "`RB1 + RC1 ↑/↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-85",
      "listType": "scenario",
      "order": 85,
      "chapterOrder": 6,
      "group": "第 6 章:扫描 / 态势",
      "subgroup": "推荐绑定",
      "nameZh": "扫描 tab 前/后",
      "nameEn": "v_ui_prev_scan_tab",
      "description": "在扫描界面前后切换标签页；采矿/扫描时查看不同信息面板。此处对应「扫描 / 态势」阶段的操作。",
      "actionText": "`v_ui_prev_scan_tab` / `v_ui_next_scan_tab`",
      "actionId": "v_ui_prev_scan_tab",
      "actionKey": "v_ui_prev_scan_tab",
      "suggestedInput": "`RB1 + RC1 ←/→`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_left",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-86",
      "listType": "scenario",
      "order": 86,
      "chapterOrder": 6,
      "group": "第 6 章:扫描 / 态势",
      "subgroup": "推荐绑定",
      "nameZh": "扫描页前/后",
      "nameEn": "v_ui_prev_scan_page",
      "description": "在扫描界面前后翻页；需要浏览同一标签下的更多扫描信息时使用。此处对应「扫描 / 态势」阶段的操作。",
      "actionText": "`v_ui_prev_scan_page` / `v_ui_next_scan_page`",
      "actionId": "v_ui_prev_scan_page",
      "actionKey": "v_ui_prev_scan_page",
      "suggestedInput": "右 Encoder 或备用",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_cw",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-87",
      "listType": "scenario",
      "order": 87,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "切 Mining mode",
      "nameEn": "v_toggle_mining_mode",
      "description": "切换采矿操作模式；需要使用对应舰载工具或功能时进入，结束后切回。此处对应「Mining」阶段的操作。",
      "actionText": "`v_toggle_mining_mode`",
      "actionId": "v_toggle_mining_mode",
      "actionKey": "v_toggle_mining_mode",
      "suggestedInput": "`RA3 ↑` 或 `RA3` mode cycle",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_up",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-88",
      "listType": "scenario",
      "order": 88,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "采矿激光 fire",
      "nameEn": "v_toggle_mining_laser_fire",
      "description": "切换采矿激光开火；对准矿石后开始或停止破岩/提取过程。此处对应「Mining」阶段的操作。",
      "actionText": "`v_toggle_mining_laser_fire`",
      "actionId": "v_toggle_mining_laser_fire",
      "actionKey": "v_toggle_mining_laser_fire",
      "suggestedInput": "右扳机一段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-89",
      "listType": "scenario",
      "order": 89,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "切采矿激光",
      "nameEn": "v_toggle_mining_laser_type",
      "description": "切换已装备的采矿激光/激光头；根据目标矿石与当前阶段选择合适工具。此处对应「Mining」阶段的操作。",
      "actionText": "`v_toggle_mining_laser_type`",
      "actionId": "v_toggle_mining_laser_type",
      "actionKey": "v_toggle_mining_laser_type",
      "suggestedInput": "`RA3` / `RA2` / Mining 下 `RA4 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-90",
      "listType": "scenario",
      "order": 90,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "激光功率轴",
      "nameEn": "v_mining_throttle",
      "description": "用连续轴调节采矿激光功率；便于在矿石能量窗口内细腻控制。此处对应「Mining」阶段的操作。",
      "actionText": "`v_mining_throttle`",
      "actionId": "v_mining_throttle",
      "actionKey": "v_mining_throttle",
      "suggestedInput": "左小油门或 Encoder",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-91",
      "listType": "scenario",
      "order": 91,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "功率 + / -",
      "nameEn": "v_increase_mining_throttle",
      "description": "提高采矿激光功率；破岩时逐步加压，避免过快进入不稳定区。此处对应「Mining」阶段的操作。",
      "actionText": "`v_increase_mining_throttle` / `v_decrease_mining_throttle`",
      "actionId": "v_increase_mining_throttle",
      "actionKey": "v_increase_mining_throttle",
      "suggestedInput": "Encoder 转",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-92",
      "listType": "scenario",
      "order": 92,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "模块 1/2/3",
      "nameEn": "v_mining_use_consumable1",
      "description": "激活采矿模块槽 1；在破岩/提取窗口按模块效果处理矿石。此处对应「Mining」阶段的操作。",
      "actionText": "`v_mining_use_consumable1` / `v_mining_use_consumable2` / `v_mining_use_consumable3`",
      "actionId": "v_mining_use_consumable1",
      "actionKey": "v_mining_use_consumable1",
      "suggestedInput": "Mining 下 `RA4 ←/↑/→`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-93",
      "listType": "scenario",
      "order": 93,
      "chapterOrder": 7,
      "group": "第 7 章:Mining",
      "subgroup": "推荐绑定",
      "nameZh": "抛弃挥发货物",
      "nameEn": "v_jettison_volatile_cargo",
      "description": "抛弃易挥发货物；出现安全风险时止损，默认应远离常用操作位。此处对应「Mining」阶段的操作。",
      "actionText": "`v_jettison_volatile_cargo`",
      "actionId": "v_jettison_volatile_cargo",
      "actionKey": "v_jettison_volatile_cargo",
      "suggestedInput": "键盘",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-mining"
      ]
    },
    {
      "id": "scenario-94",
      "listType": "scenario",
      "order": 94,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "切 Salvage mode",
      "nameEn": "v_toggle_salvage_mode",
      "description": "切换回收操作模式；需要使用对应舰载工具或功能时进入，结束后切回。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_toggle_salvage_mode`",
      "actionId": "v_toggle_salvage_mode",
      "actionKey": "v_toggle_salvage_mode",
      "suggestedInput": "`RA3 ↓` 或 `RA3` mode cycle",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-95",
      "listType": "scenario",
      "order": 95,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "回收光束 fire",
      "nameEn": "v_salvage_toggle_fire_focused",
      "description": "切换聚焦回收光束开火；对准残骸表面开始或停止刮削，持续观察效率与存储。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_toggle_fire_focused` 或 left/right/focused",
      "actionId": "v_salvage_toggle_fire_focused",
      "actionKey": "v_salvage_toggle_fire_focused",
      "suggestedInput": "右扳机一段",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-96",
      "listType": "scenario",
      "order": 96,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "fracture / disintegrate",
      "nameEn": "v_salvage_toggle_fire_fracture",
      "description": "切换结构回收的破碎/解体光束；先破碎残骸，再按需要解体为可处理材料。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_toggle_fire_fracture` / `v_salvage_toggle_fire_disintegrate`",
      "actionId": "v_salvage_toggle_fire_fracture",
      "actionKey": "v_salvage_toggle_fire_fracture",
      "suggestedInput": "`RA2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-97",
      "listType": "scenario",
      "order": 97,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "focus left/right/all",
      "nameEn": "v_salvage_focus_left",
      "description": "将回收作业焦点设为左回收头；按残骸位置选择左、右或全部回收头，提高有效覆盖。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_focus_left` / `v_salvage_focus_right` / `v_salvage_focus_all_heads`",
      "actionId": "v_salvage_focus_left",
      "actionKey": "v_salvage_focus_left",
      "suggestedInput": "Salvage 下 `RA4 ←/→/↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-98",
      "listType": "scenario",
      "order": 98,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "focused modifier cycle",
      "nameEn": "v_salvage_cycle_modifiers_focused",
      "description": "循环聚焦回收头的工具修正项；按残骸材质或作业阶段切换可用效果。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_cycle_modifiers_focused`",
      "actionId": "v_salvage_cycle_modifiers_focused",
      "actionKey": "v_salvage_cycle_modifiers_focused",
      "suggestedInput": "Salvage 下 `RA4 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-99",
      "listType": "scenario",
      "order": 99,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "光束模式",
      "nameEn": "v_salvage_toggle_gimbal_mode",
      "description": "切换回收模式光束云台；按作业目标和操控习惯选择指向方式。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_toggle_gimbal_mode`",
      "actionId": "v_salvage_toggle_gimbal_mode",
      "actionKey": "v_salvage_toggle_gimbal_mode",
      "suggestedInput": "`RA2` hold 或 `RB1 + RA4 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-100",
      "listType": "scenario",
      "order": 100,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "光束间距轴",
      "nameEn": "v_salvage_beam_spacing_rel",
      "description": "用相对输入调节回收光束间距；按残骸宽度细调覆盖范围。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_beam_spacing_rel`",
      "actionId": "v_salvage_beam_spacing_rel",
      "actionKey": "v_salvage_beam_spacing_rel",
      "suggestedInput": "左小油门",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-101",
      "listType": "scenario",
      "order": 101,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "光束间距 + / -",
      "nameEn": "v_salvage_increase_beam_spacing",
      "description": "增大回收光束间距；处理更宽的表面或结构时调整覆盖范围。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_increase_beam_spacing` / `v_salvage_decrease_beam_spacing`",
      "actionId": "v_salvage_increase_beam_spacing",
      "actionKey": "v_salvage_increase_beam_spacing",
      "suggestedInput": "Encoder 转",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-102",
      "listType": "scenario",
      "order": 102,
      "chapterOrder": 8,
      "group": "第 8 章:Salvage",
      "subgroup": "推荐绑定",
      "nameZh": "Gimbal reset",
      "nameEn": "v_salvage_reset_gimbal",
      "description": "重置回收模式的光束云台；工具指向偏离后恢复中位。此处对应「Salvage」阶段的操作。",
      "actionText": "`v_salvage_reset_gimbal`",
      "actionId": "v_salvage_reset_gimbal",
      "actionKey": "v_salvage_reset_gimbal",
      "suggestedInput": "A4 按或键盘",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-salvage"
      ]
    },
    {
      "id": "scenario-103",
      "listType": "scenario",
      "order": 103,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "请求降落",
      "nameEn": "v_atc_request",
      "description": "呼叫空管申请降落；接近有 Landing Services 的地点后取得机库、停机坪或对接口分配。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_atc_request`",
      "actionId": "v_atc_request",
      "actionKey": "v_atc_request",
      "suggestedInput": "`LB1 + LA2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-104",
      "listType": "scenario",
      "order": 104,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "自动降落",
      "nameEn": "v_autoland",
      "description": "请求/执行自动着陆；已获准并接近可用停泊位时可减少最后阶段的手动操作。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_autoland`",
      "actionId": "v_autoland",
      "actionKey": "v_autoland",
      "suggestedInput": "键盘 / 后续候选",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-105",
      "listType": "scenario",
      "order": 105,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "起落架",
      "nameEn": "v_toggle_landing_system",
      "description": "开/收起落架；获准进近前放下，离开停机位后再收起。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_toggle_landing_system`",
      "actionId": "v_toggle_landing_system",
      "actionKey": "v_toggle_landing_system",
      "suggestedInput": "`L-F1`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f1",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-106",
      "listType": "scenario",
      "order": 106,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "VTOL",
      "nameEn": "v_toggle_vtol",
      "description": "切换 VTOL 推进器构型；大气层悬停、垂直起降时提升垂直效率，代价是前向性能。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_toggle_vtol`",
      "actionId": "v_toggle_vtol",
      "actionKey": "v_toggle_vtol",
      "suggestedInput": "`L-F2`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f2",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-107",
      "listType": "scenario",
      "order": 107,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "Cycle camera view",
      "nameEn": "v_view_cycle_fwd",
      "description": "按顺序切换舰船镜头视角；起降时可快速检查起落架、船体和周边障碍。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_view_cycle_fwd`",
      "actionId": "v_view_cycle_fwd",
      "actionKey": "v_view_cycle_fwd",
      "suggestedInput": "`LB1 + LA3 按`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-108",
      "listType": "scenario",
      "order": 108,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "舱门开关",
      "nameEn": "v_toggle_all_doors",
      "description": "切换所有舱门的开/关；登机、离机或装卸前快速处理通道。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_toggle_all_doors`",
      "actionId": "v_toggle_all_doors",
      "actionKey": "v_toggle_all_doors",
      "suggestedInput": "`LB1 + LA3 ↑`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "shift2"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-109",
      "listType": "scenario",
      "order": 109,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "Port lock toggle all",
      "nameEn": "v_toggle_all_portlocks",
      "description": "切换所有设备/组件端口锁；更换或拆取舰船部件前先确认此状态。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_toggle_all_portlocks`",
      "actionId": "v_toggle_all_portlocks",
      "actionKey": "v_toggle_all_portlocks",
      "suggestedInput": "`L-SW1 ↓`",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "sw1_down",
        "layer": "base"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-110",
      "listType": "scenario",
      "order": 110,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "紧急离座",
      "nameEn": "v_emergency_exit",
      "description": "执行紧急离座，快速离开当前座位；仅在必须立刻脱离驾驶/炮塔位时使用，避免与弹射混淆。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_emergency_exit`",
      "actionId": "v_emergency_exit",
      "actionKey": "v_emergency_exit",
      "suggestedInput": "`LD1 + LA2`, double tap",
      "actualSetting": "",
      "presetSlot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "shift1"
      },
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-111",
      "listType": "scenario",
      "order": 111,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "弹射",
      "nameEn": "v_eject",
      "description": "触发舰船弹射逃生；仅在舰船支持且无法继续操控时使用，属于高风险、应防误触的最后手段。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_eject`",
      "actionId": "v_eject",
      "actionKey": "v_eject",
      "suggestedInput": "键盘 / 后续专门安全位",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    },
    {
      "id": "scenario-112",
      "listType": "scenario",
      "order": 112,
      "chapterOrder": 9,
      "group": "第 9 章:返航 / 降落 / 离机",
      "subgroup": "推荐绑定",
      "nameZh": "自毁",
      "nameEn": "v_self_destruct",
      "description": "启动舰船自毁流程；只在明确需要销毁舰船时使用，不应放在容易误触的位置。此处对应「返航 / 降落 / 离机」阶段的操作。",
      "actionText": "`v_self_destruct`",
      "actionId": "v_self_destruct",
      "actionKey": "v_self_destruct",
      "suggestedInput": "键盘",
      "actualSetting": "",
      "presetSlot": null,
      "sourceRefs": [
        "cig-controls",
        "cig-onboarding",
        "cig-flight"
      ]
    }
  ],
  "defaultBindings": [
    {
      "actionKey": "pc_interaction_select",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "scenario:2:item",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_flightready",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_power_toggle",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_up",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_power_toggle_thrusters",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_down",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_power_toggle_shields",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_left",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_power_toggle_weapons",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_right",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_all_doors",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_all_doorlocks",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_down",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_all_portlocks",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "sw1_down",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_cabin_lights",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_left",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_running_lights",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_right",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_landing_system",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f1",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_vtol",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_atc_request",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_view_cycle_fwd",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_toggle_vector_decoupling",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_toggle_gforce_safety",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_toggle_gravity_compensation",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_down",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_proximity_assist_toggle",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_throttle_swap_mode",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_right",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_speed_limiter_reset_scm",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_toggle_speed_limiter",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "C1_press",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_transform_cycle",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "base_f3",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_atc_loading_area_request",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "sw1_up",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_pitch",
      "slot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_y"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_roll",
      "slot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_x"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_yaw",
      "slot": {
        "slotType": "axis",
        "hand": "right",
        "control": "main_twist"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_strafe_lateral",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_x"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_strafe_longitudinal",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_y"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_strafe_vertical",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "main_twist"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_space_brake",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "trigger_s1",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_afterburner",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "trigger_s2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_speed_range_abs",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_speed_range_up",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "encoder_cw",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_preset_fire_guns0",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_preset_fire_guns1",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_toggle_launch_missile",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_launch_missile",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_cycle_missile_fwd",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_change_firemode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_preset_fire_guns2",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_ui_scale_toggle",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_preset_next",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "rapid_fire_pull",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_increase_max_missiles",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_right",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_launch_missile_cinematic",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_bombing_hud_range_increase",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_bombing_hud_range_reset",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_target_cycle_subitem_fwd",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_cw",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_target_cycle_subitem_reset",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_target_toggle_pin_index_1_hold",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_press",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_target_remove_all_pins",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_down",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_target_cycle_hostile_reset",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_master_mode_cycle",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "scenario:61:operator-mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_scan_mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_quantum_mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_right",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_gimbal_mode_cycle_all",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_pip_toggle_lead_lag",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_down",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_weapon_convergence_distance_rel_decrease",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ifcs_toggle_esp",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mfd_movement_up_short",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mfd_soft_select_mfd_primary_short",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mfd_interact_cycle_forwards_short",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_up",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mfd_soft_select_cast_left_short",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A3_left",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_shield_raise_level_forward",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_shield_raise_level_back",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_down",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_shield_raise_level_left",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_shield_raise_level_right",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_right",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_shield_reset_level",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_engineering_assignment_weapons_max",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_up",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_engineering_assignment_shields_max",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_down",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_engineering_assignment_engine_max",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_left",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_engineering_assignment_reset",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A4_right",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_scanning_trigger_scan",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_press",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_inc_scan_focus_level",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_up",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ui_prev_scan_tab",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "C1_left",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_ui_prev_scan_page",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "encoder_cw",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_mining_mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_up",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_mining_laser_fire",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_mining_laser_type",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mining_throttle",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_mining_use_consumable1",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_toggle_salvage_mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A3_down",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_toggle_fire_focused",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "trigger_s1",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_toggle_fire_fracture",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_focus_left",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_left",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_cycle_modifiers_focused",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A4_press",
        "layer": "base"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_toggle_gimbal_mode",
      "slot": {
        "slotType": "button",
        "hand": "right",
        "control": "A2",
        "layer": "shift2"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_salvage_beam_spacing_rel",
      "slot": {
        "slotType": "axis",
        "hand": "left",
        "control": "throttle_axis"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    },
    {
      "actionKey": "v_emergency_exit",
      "slot": {
        "slotType": "button",
        "hand": "left",
        "control": "A2",
        "layer": "shift1"
      },
      "enabled": true,
      "locked": false,
      "note": ""
    }
  ],
  "uiSettings": {
    "showCodes": true,
    "activeList": "scenario",
    "statusFilter": "all"
  },
  "referenceCatalog": [
    {
      "id": "cig-controls",
      "label": "CIG 官方：键位设置与 Advanced Controls",
      "url": "https://support.robertsspaceindustries.com/hc/en-us/articles/360000134267-Set-up-keybindings-for-your-peripherals"
    },
    {
      "id": "cig-onboarding",
      "label": "CIG 官方：新手交互、登机与基础飞行",
      "url": "https://support.robertsspaceindustries.com/hc/en-us/articles/360025028633-Getting-Started-in-the-Verse"
    },
    {
      "id": "cig-flight",
      "label": "CIG 官方：降落、对接与耦合/解耦飞行",
      "url": "https://support.robertsspaceindustries.com/hc/en-us/articles/360020925254-How-to-Land-Your-Ship"
    },
    {
      "id": "cig-quantum",
      "label": "CIG 官方：量子旅行与 NAV / Quantum 模式",
      "url": "https://support.robertsspaceindustries.com/hc/en-us/articles/360019449994-How-to-Quantum-Travel"
    },
    {
      "id": "cig-mining",
      "label": "CIG 官方：采矿的扫描、破岩与提取流程",
      "url": "https://support.robertsspaceindustries.com/hc/en-us/articles/360007611573-Mining-Basics"
    },
    {
      "id": "cig-salvage",
      "label": "CIG 官方：工业玩法指南（回收、结构回收与牵引）",
      "url": "https://robertsspaceindustries.com/en/comm-link/transmission/20050-Industrial-Gameplay-Guide"
    }
  ]
};
