# SC Dual VKB 场景化配置说明

本文基于当前 `binding-planner` workspace v4 模型整理。新 workspace 只提供一个 `Default` Profile；完整动作矩阵以配置器中的 `场景清单` 和导出的 workspace JSON 为准。

## 1. 配置模型

### Workspace

一个 workspace JSON 包含：

- 全局 `deviceConfig`：左右杆设备 ID、按钮编号、Axis code、Shift offset。
- 多个 Profile：每个 Profile 有独立 bindings、locks、notes、MODE 和 CTX。
- UI 状态：当前 Profile、清单类型、筛选、是否显示编号等。

原则：硬件编号是全局事实，不随 Profile 改变；Profile 是一整套设备、飞船或打法策略，不是当前正在运行的小场景。

### Profile

新 workspace 只有 `Default`。需要第二套完整方案时，再从当前 Profile 复制并按设备、飞船或打法命名，例如 `Dual VKB Heavy Fighter`；导入旧 workspace 时保留已有 Profile 名称和数据。

### MODE 与 CTX

- `MODE` 表示同一物理键在游戏绑定层的触发方式；默认值叫 `DEFAULT`，其它模式可包括 Double Tap、Long Press、Short Press 等。
- `CTX` 表示动作只在哪个游戏上下文生效；未设置时为 `GLOBAL`。只有明确互斥的 CTX 才能证明同槽位可复用。
- 冲突身份由“物理槽位 + MODE”确定；MODE 不同天然共存，MODE 相同则继续依据动作身份和 CTX 判断。

## 2. 绑定语言

### 左右杆职责

| 区域 | 定位 |
|---|---|
| 左杆 | 移动、节流、系统、电源、MFD、护盾、起降流程 |
| 右杆 | 姿态、武器、导弹、模式切换、扫描、采矿/回收执行 |

### 层级职责

| 层 | 定位 |
|---|---|
| Base | 高频、即时、可盲操的核心动作 |
| S1 | 战术次级动作，例如火控模式、MFD 翻页、电容分配 |
| S2 | 低频或流程性动作，例如电源、舱门、ATC、扫描细项、炸弹/导弹辅助 |

### 不做 VKB Tempo

当前意图是让游戏处理 Short/Long/Tap/Hold。物理层尽量保持独立、可解释，不在 VKBDevCfg 中用 Tempo 做复杂分支。典型例子：

- 导弹 Tap / Hold 可复用同一物理输出，由游戏区分。
- Fire Mode / Staggered 等游戏侧可区分的行为，不在硬件层额外拆 Tempo。
- 如果二段触发会连带一段，应在 VKBDevCfg 里改成独立输出，而不是在配置器里制造语义补丁。

## 3. 场景章节

当前场景清单共 112 项，默认绑定 91 项。6DOF 轴已锁定，其他动作按章节推进。

| 章节 | 绑定状态 | 配置意图 |
|---|---:|---|
| 第 1 章:登机 / 上电 | 12 / 13 | 左杆承担交互、上电、舱门和灯光；头灯暂不上杆 |
| 第 2 章:起飞 / 离港 | 13 / 14 | F1/F2/F3 处理起落架、VTOL、构型；S2 放 ATC、Cargo 等流程项 |
| 第 3 章:基础飞行 / 6DOF | 12 / 13 | 六轴锁定不动；左 trigger 管刹车/Boost；Throttle 作为 speed limiter abs |
| 第 4 章:战斗核心 | 27 / 27 | 右杆 Base/S1/S2 覆盖主武器、导弹、子目标、Master/Operator mode |
| 第 5 章:能量 / 护盾 / MFD | 13 / 14 | 左杆 A3/A4/LC1 负责 MFD、护盾面、电容分配 |
| 第 6 章:扫描 / 态势 | 5 / 5 | 右杆模式区和 RC1 负责扫描执行、角度、tab/page |
| 第 7 章:Mining | 5 / 7 | 复用右杆主触发和模式键；激光功率优先走左 throttle |
| 第 8 章:Salvage | 7 / 9 | 复用右杆主触发、RA2、RA4；光束间距优先走左 throttle |
| 第 9 章:返航 / 降落 / 离机 | 7 / 10 | 复用起降流程键；弹射、自毁保持键盘或后续安全位 |

## 4. 关键默认绑定

### 登机 / 上电

- `交互 / 使用`：左杆 Base `LA3按`
- `交互焦点上/下/左/右`：左杆 Base `LA3↑`
- `Flight Ready`：左杆 S2 `LC1按`
- `电源全部 / 推进器 / 护盾 / 武器`：左杆 S2 `LC1↑/↓/←/→`
- `舱门开关 / 舱门锁 / 客舱灯 / 航行灯`：左杆 S2 `LA3↑/↓/←/→`
- `Port lock toggle all`：左杆 Base `SW↓`
- `头灯`：未绑定，保留键盘或后续候选位

### 起飞 / 离港

- `起落架`：左杆 Base `F1`
- `VTOL`：左杆 Base `F2`
- `Wing config / transform`：左杆 Base `F3`
- `ATC 请求降落`：左杆 S2 `LA2`
- `Decoupled`：左杆 Base `LA2`
- `G-Force / Gravity / Proximity / Cruise`：左杆 Base `LC1↑/↓/←/→`
- `Speed limiter reset SCM`：左杆 Base `LC1按`
- `Speed limiter toggle`：左杆 S1 `LC1按`
- `自动降落`：未绑定，避免误触

### 基础飞行 / 6DOF

六轴锁定：

- 右杆 Axis：Pitch / Roll / Yaw
- 左杆 Axis：Strafe L/R、F/B、U/D

其他：

- `Spacebrake`：左杆 Base `TRG1`
- `Boost`：左杆 Base `TRG2`
- `Speed Limiter abs`：左杆 Axis `Throttle`
- `Speed Limiter +/-`：左杆 Base `ENC+`
- `Match target velocity`：未绑定，暂不占 Encoder press

### 战斗核心

- `主武器 / WG1`：右杆 Base `TRG1`
- `WG2 / 全武器`：右杆 Base `TRG2`
- `导弹 Tap / Hold`：右杆 Base `RA2`
- `导弹类型下一个/上一个`：右杆 S2 `RA2`
- `Fire Mode`：右杆 S1 `TRG1`
- `WG3 / specialized fire`：右杆 Base `RF Pull`
- `Precision targeting / gunnery UI`：右杆 S2 `RF Pull`
- `Missile count +/-`：右杆 S2 `RA4→`
- `Missile camera / Bomb HUD reset`：右杆 S2 `RA4按`
- `子目标下一项 / 重置`：右杆 Base `ENC+ / ENC按`
- `Pin 1/2/3`：右杆 S1 `ENC按`
- `Master Mode`：右杆 Base `RA3按`
- `Operator mode`：右杆 Base `RA3↑`
- `扫描 / 量子模式`：右杆 Base `RA3←/→`
- `Gimbal / PIP / 汇聚 / ESP`：右杆 Base `RA4↑/↓/←/按`

### 能量 / 护盾 / MFD

- `MFD 上/下/左/右`：左杆 Base `LA3↑`
- `MFD 选择`：左杆 Base `LA3按`
- `MFD 翻页 +/-`：左杆 S1 `LA3↑`
- `上一/下一 MFD`：左杆 S1 `LA3←`
- `前/后/左/右盾加固`：左杆 Base `LA4↑/↓/←/→`
- `护盾面重置`：左杆 Base `LA4按`
- `武器/护盾/引擎电容 MAX`：左杆 S1 `LA4↑/↓/←`
- `电容重置`：左杆 S1 `LA4→`
- `MFD 系统页`：未绑定，避免抢 `LA4` 和 `LC1`

### 扫描 / 态势

- `切扫描 operator mode`：右杆 Base `RA3←`
- `扫描执行`：右杆 S2 `RC1按`
- `扫描角度 +/-`：右杆 S2 `RC1↑`
- `扫描 tab 前/后`：右杆 S2 `RC1←`
- `扫描页前/后`：右杆 Base `ENC+`

### Mining

- `切 Mining mode`：右杆 Base `RA3↑`
- `采矿激光 fire`：右杆 Base `TRG1`
- `切采矿激光`：右杆 Base `RA3按`
- `激光功率轴`：左杆 Axis `Throttle`
- `模块 1/2/3`：右杆 Base `RA4←`
- `功率 +/-`：未绑定，若轴不舒服再放 Encoder
- `抛弃挥发货物`：未绑定，安全项不上杆

### Salvage

- `切 Salvage mode`：右杆 Base `RA3↓`
- `回收光束 fire`：右杆 Base `TRG1`
- `fracture / disintegrate`：右杆 Base `RA2`
- `focus left/right/all`：右杆 Base `RA4←`
- `focused modifier cycle`：右杆 Base `RA4按`
- `光束模式`：右杆 S2 `RA2`
- `光束间距轴`：左杆 Axis `Throttle`
- `光束间距 +/-`：未绑定，备用
- `Gimbal reset`：未绑定，可选 `A4按` 或键盘

### 返航 / 降落 / 离机

- `请求降落`：左杆 S2 `LA2`
- `起落架`：左杆 Base `F1`
- `VTOL`：左杆 Base `F2`
- `Cycle camera view`：左杆 S2 `LA3按`
- `舱门开关`：左杆 S2 `LA3↑`
- `Port lock toggle all`：左杆 Base `SW↓`
- `紧急离座`：左杆 S1 `LA2`
- `自动降落 / 弹射 / 自毁`：未绑定，保留键盘或后续专门安全位

## 5. 刻意复用

同一物理槽位会显示三种关系：`共享` 表示同一 canonical action 出现在多个场景；`CTX 复用` 表示不同动作的 CTX 被证明互斥；`冲突` 表示同 MODE 下没有足够证据证明可共存。只有 `冲突` 会进入“问题”筛选并触发阻断、替换或“解绑其它”。

| 物理位 | 复用动作 | 处理意图 |
|---|---|---|
| 左杆 Base `LA3按` | 交互 / MFD Select | MFD 与一般交互上下文不同，可接受复用；若误触明显再拆 |
| 左杆 Base `LA3↑` | 交互焦点 / MFD Up | 同上，优先保持左杆交互簇一致 |
| 左杆 `Throttle Axis` | Speed limiter / Mining power / Salvage spacing | 同一连续轴在不同 operator mode 中复用 |
| 右杆 Base `TRG1` | WG1 / Mining fire / Salvage fire | 主触发语义一致，由 mode 决定效果 |
| 右杆 Base `RA2` | Missile Tap / Missile Hold / Salvage fracture | Tap/Hold 交给游戏；Salvage 是模式复用 |
| 右杆 S2 `RA2` | Missile type / Salvage gimbal | 低频模式内复用 |
| 右杆 Base `RF Pull` | WG3 / Weapon preset next | 需要实测是否误触；可作为 Combat Profile 分化点 |
| 右杆 Base `ENC+` | 子目标前进 / 扫描页前后 | 态势/扫描语义接近；若扫描使用频繁可拆到 S2 |
| 右杆 Base `RA3按/↑` | Master/Operator mode 与 Mining mode | 右杆模式簇集中管理 |
| 右杆 Base `RA4←/按` | 汇聚/ESP 与 Mining/Salvage 细项 | 场景 mode 复用；Combat/Mining Profile 可分化 |

## 6. 未绑定待决项

| 章节 | 动作 | 建议 |
|---|---|---|
| 登机 / 上电 | 头灯 | 键盘或后续候选，不抢 camera 位 |
| 起飞 / 离港 | 自动降落 | 键盘，避免误触 |
| 基础飞行 / 6DOF | Match target velocity | 键盘或后续候选，不占 Encoder press |
| 能量 / 护盾 / MFD | MFD 系统页 | 键盘或后续候选，不抢 `LA4` / `LC1` |
| Mining | 功率 +/- | 仅在 throttle 轴体验不佳时再放 Encoder |
| Mining | 抛弃挥发货物 | 安全项，默认不上杆 |
| Salvage | 光束间距 +/- | 备用；优先使用 throttle 轴 |
| Salvage | Gimbal reset | 可选 `A4按` 或键盘 |
| 返航 / 降落 / 离机 | 自动降落 | 键盘或后续候选 |
| 返航 / 降落 / 离机 | 弹射 | 高风险，后续专门安全位 |
| 返航 / 降落 / 离机 | 自毁 | 键盘，不上杆 |

## 7. 实际配置流程

1. 打开配置器，在 `Default` 或自己命名的完整策略 Profile 中工作。
2. 打开 `#` 显示编号，核对左右杆按钮编号和 VKBDevCfg 输出一致。
3. 从 `场景清单` 逐章检查；需要按游戏内顺序查找时切到 `游戏顺序`。
4. 点选动作卡，再点左右摇杆上的目标物理键。
5. 对确认不再调整的 6DOF 轴和核心动作使用锁定。
6. 若需要解除绑定，点击动作卡上的 `CLR / ×` 解绑按钮；锁定状态下需先解锁。
7. 同槽位需要按游戏状态复用时，在动作卡的 `CTX` 中选择对应上下文；互斥关系成立后 mini-card 会显示 `CTX 复用`。
8. 用 `问题` 筛选处理剩余真冲突；`共享` 和 `CTX 复用` 不会出现在这里。
9. 导出 workspace JSON 作为完整备份；导入会覆盖当前 workspace，应先确认文件来源。

## 8. 验收清单

- 6DOF 六轴在当前策略 Profile 中已锁定，且游戏内方向正确。
- 左杆 `TRG1/TRG2` 分别是 Spacebrake / Boost。
- 右杆 `TRG1/TRG2` 在战斗中能正确触发 WG1/WG2。
- 导弹 Tap/Hold 由游戏侧正确区分。
- Mining/Salvage 模式下右杆主触发和左 throttle 的复用符合预期。
- `问题` 筛选中只剩需要处理的真冲突；合法 `共享` / `CTX 复用` 不在其中。
- 高风险动作（弹射、自毁、自动降落）没有被随手放到易误触位置。
- 导出的 workspace JSON 可以重新导入，并保留多 Profile、锁定、备注和全局设备编号。
