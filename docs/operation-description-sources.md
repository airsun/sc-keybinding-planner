# 操作说明资料依据

更新日期：2026-07-18。

本配置器的每一条游戏操作都以 Star Citizen 当前导出的 **Advanced Controls Customization** 英文操作名和 action ID 为首要语义依据。CIG 说明该界面提供可绑定的操作，并且会在重新绑定时检查冲突；因此这里不把玩家习惯或预设位置当成操作本义。

场景清单的说明沿用同一操作本义，再补上该章（登机、起降、战斗、采矿、回收等）中实际会用到它的时机。绑定建议仍是本项目的 VKB 设计建议，不是官方默认绑定。

## 可在配置器中打开的来源

| 覆盖内容 | 主要来源 | 用途 |
| --- | --- | --- |
| 所有动作名、分类与键位语义 | [CIG：Set up keybindings for your peripherals](https://support.robertsspaceindustries.com/hc/en-us/articles/360000134267-Set-up-keybindings-for-your-peripherals) | 确认 Advanced Controls 是操作与绑定的官方入口；每个条目的英文名/action ID 以游戏导出数据为准。 |
| 交互、PIT、登机、Flight Ready、基础移动 | [CIG：Getting Started in the 'Verse](https://support.robertsspaceindustries.com/hc/en-us/articles/360025028633-Getting-Started-in-the-Verse) | 说明 F/Inner Thought 交互、Flight Ready、基础起飞和视角的实际用途。 |
| 起落架、ATC、对接、速度限制、太空刹车、耦合/解耦 | [CIG：How to Land Your Ship](https://support.robertsspaceindustries.com/hc/en-us/articles/360020925254-How-to-Land-Your-Ship) | 校对进近、停泊和飞控说明；特别是解耦会保留惯性。 |
| NAV、Quantum 模式与量子旅行 | [CIG：How to Quantum Travel](https://support.robertsspaceindustries.com/hc/en-us/articles/360019449994-How-to-Quantum-Travel) | 校对量子旅行的航线、NAV、Quantum 模式、校准与接合顺序。 |
| 扫描、采矿激光、功率与模块 | [CIG：Mining Basics](https://support.robertsspaceindustries.com/hc/en-us/articles/360007611573-Mining-Basics) | 校对扫描、破岩、提取三阶段及采矿作业的用途。 |
| 回收光束、牵引、破碎、解体 | [CIG：Industrial Gameplay Guide](https://robertsspaceindustries.com/en/comm-link/transmission/20050-Industrial-Gameplay-Guide) | 校对刮削、结构回收、光束作业与牵引相关说明。 |

## 使用边界

- 游戏仍在开发中；CIG 可能改名、移动、删除或重新定义某些操作。版本更新后应先在游戏内的 Advanced Controls 对照英文名和 action ID，再运行 `node scripts/refresh-operation-descriptions.mjs` 重建说明。
- 重建后运行 `node scripts/verify-operation-descriptions.mjs`；它会检查 684 条游戏操作、112 条场景操作、全部来源链接、场景化说明和简洁长度限制。
- `Experimental`、未本地化（例如 `@ui_…`）和只有标签可验证的操作，说明刻意只陈述标签明确表达的功能，不把推测写成事实。
- 每个展开的操作卡都会显示其对应的“资料依据”链接；飞行、量子、采矿和回收条目会额外显示直接解释该玩法的 CIG 页面。
