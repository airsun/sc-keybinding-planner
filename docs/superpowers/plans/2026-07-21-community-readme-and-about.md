# Community README and GitHub About Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present the planner as an inviting, trustworthy Star Citizen community tool that helps players discover, create, and refine a more immersive personal control scheme.

**Architecture:** Keep the presentation surface intentionally small: a root README provides the player journey, one first-party screenshot proves the experience, and GitHub About metadata makes the repository discoverable. No planner behavior or workspace data model changes are included.

**Tech Stack:** GitHub-flavored Markdown, static HTML/CSS/JavaScript, GitHub Pages, GitHub REST API, local browser screenshot.

## Global Constraints

- Use an English hero and concise English overview followed by Chinese-first detail.
- Lead with player outcomes before implementation details.
- “Discover” means finding relevant operations and shaping a personal configuration; do not imply a preset marketplace.
- Describe the project as a planner, not a direct Star Citizen XML writer or automatic in-game installer.
- Use only a screenshot of the current planner; do not add third-party Star Citizen artwork or logos.
- Do not describe the repository as open source because it has no license file.
- Do not change planner behavior, workspace schemas, Pages deployment, device presets, licensing, or data extraction.
- Preserve all unrelated untracked files.

---

### Task 1: Create the player-facing README

**Files:**
- Create: `README.md`
- Reference: `docs/sc-dual-vkb-scenario-config.md`

**Interfaces:**
- Consumes: the deployed planner at `https://airsun.github.io/sc-keybinding-planner/` and the current planner capabilities.
- Produces: the repository landing page and the relative image reference `docs/assets/sc-dual-vkb-binding-planner.png` used by Task 2.

- [ ] **Step 1: Verify the repository currently has no root README**

Run: `test ! -e README.md`

Expected: exit code 0.

- [ ] **Step 2: Create the README with this content**

```markdown
<div align="center">

# SC Dual VKB Binding Planner

**Discover, create, and refine a Star Citizen HOSAS setup that fits the way you fly.**

从操作场景出发，找到并创造适合自己设备与玩法的操控配置——少一点对键位的迟疑，多一点飞行、战斗与探索的沉浸乐趣。

[**Launch Planner →**](https://airsun.github.io/sc-keybinding-planner/) · [Share feedback](https://github.com/airsun/sc-keybinding-planner/issues)

No install · Local-first · One shareable Workspace JSON

</div>

![SC Dual VKB Binding Planner overview](docs/assets/sc-dual-vkb-binding-planner.png)

## Build a layout that becomes yours

A good HOSAS layout is more than a list of buttons. It is a control language shaped by your hardware, your ships, and the way you play. This planner turns that language into a visual workspace: explore operations by scenario, assign them directly on the sticks, and make shared actions, contextual reuse, and real conflicts understandable.

This is currently focused on Star Citizen dual-VKB setups. It helps you plan and preserve a layout before reproducing it in the game's keybinding menus.

## 为什么做这个工具

复杂的 Star Citizen 操控配置往往散落在表格、截图、便签与肌肉记忆里。随着 Flight、Combat、Scanning、Mining、Salvage 等场景叠加，同一个物理键为什么复用、什么时候冲突，也会越来越难解释。

这个 Planner 希望把整套配置变成一张可以理解、调整和持续演进的操控地图：

- 从场景清单中发现真正需要的操作，而不是机械地填满所有按钮。
- 直接在左右摇杆上点选绑定，建立适合自己的空间记忆。
- 用 Profile、MODE 与 CTX 表达不同设备、飞船和玩法策略。
- 区分同一动作共享、互斥情境复用与真实冲突，减少误判。
- 把注意力从“这个键在哪里”还给飞行、战斗、探索与舰船操作本身。

## 能做什么

| 能力 | 带给玩家的价值 |
|---|---|
| 左右摇杆可视化点选 | 直接建立物理位置与游戏动作之间的联系 |
| 场景清单 / 游戏顺序 | 在任务流程和原始 keybinding 列表之间切换视角 |
| 多 Profile | 为不同设备、飞船或打法维护完整方案 |
| MODE + CTX | 表达 Tap、Hold 等触发方式，以及 Pilot、Mining、MFD 等操作情境 |
| 共享 / CTX 复用 / 冲突 | 解释同一物理槽位上的关系，只把真正的问题标红 |
| 本地保存 + JSON | 浏览器内持续编辑，并用单一 Workspace JSON 备份或分享 |
| GitHub Workspace Sync | 可选地把 Workspace 文件同步到自己的 GitHub 仓库 |

## 快速开始

1. 打开 [SC Dual VKB Binding Planner](https://airsun.github.io/sc-keybinding-planner/)。
2. 从“场景清单”或“游戏顺序”中选择一个动作。
3. 点击左杆或右杆上的目标槽位完成绑定。
4. 展开动作卡，根据需要设置 MODE、CTX、锁定与备注。
5. 检查共享、CTX 复用或冲突关系，再导出 Workspace JSON 作为备份。

## 四个核心概念

| 概念 | 含义 |
|---|---|
| **Workspace** | 全局设备编号、全部 Profile 与当前 UI 状态组成的单一 JSON 工作区 |
| **Profile** | 一套完整配置，可代表不同设备、飞船或打法策略 |
| **MODE** | 同一物理键在游戏绑定层的触发方式，例如 Press、Tap、Hold |
| **CTX** | 绑定生效的操作情境；明确互斥的情境可以安全复用同一槽位 |

更完整的配置模型和默认场景说明见 [SC Dual VKB 场景化配置说明](docs/sc-dual-vkb-scenario-config.md)。

## 数据与边界

- Planner 是本地优先的静态 Web App；Workspace 默认保存在当前浏览器。
- JSON 导入会覆盖当前 Workspace，操作前请先导出备份。
- GitHub Sync 是可选能力，需要玩家自行提供 fine-grained token；token 不会写入长期 localStorage。
- Planner 不会直接修改 Star Citizen 配置文件，也不会自动把绑定安装进游戏。

## 一起把操控体验做得更好

适合自己的配置没有唯一答案。设备组合、手型、常用舰船和玩法重点都会改变选择。如果你有设备适配经验、场景编排建议、绑定策略、可用性问题或功能想法，欢迎通过 [GitHub Issues](https://github.com/airsun/sc-keybinding-planner/issues) 参与讨论。

如果这个工具帮助你找到更顺手的操控方式，也欢迎分享你的 Workspace 思路，让更多玩家少走一点弯路。

---

This is an unofficial community tool and is not affiliated with or endorsed by Cloud Imperium Games. Star Citizen and related marks belong to their respective owners.
```

- [ ] **Step 3: Check Markdown structure and links**

Run:

```bash
rg -n '^#|https://airsun.github.io/sc-keybinding-planner/|docs/assets/sc-dual-vkb-binding-planner.png|docs/sc-dual-vkb-scenario-config.md|github.com/airsun/sc-keybinding-planner/issues' README.md
git diff --check -- README.md
```

Expected: one H1 inside the centered hero, all four required targets present, and `git diff --check` exits 0.

### Task 2: Capture the current planner as the README hero image

**Files:**
- Create: `docs/assets/sc-dual-vkb-binding-planner.png`

**Interfaces:**
- Consumes: the current `binding-planner/` static app with its default local Workspace.
- Produces: a first-party desktop screenshot referenced by `README.md`.

- [ ] **Step 1: Start the current static app locally**

Run from `binding-planner/`: `python3 -m http.server 4176`

Expected: server listens on `http://127.0.0.1:4176/`.

- [ ] **Step 2: Capture a clean desktop screenshot**

Open `http://127.0.0.1:4176/` at a 1600×1000 or wider desktop viewport. Ensure the default planner is visible, no dialog is open, and no sync token or personal repository path is present. Save the PNG as `docs/assets/sc-dual-vkb-binding-planner.png`.

- [ ] **Step 3: Inspect the image**

Run: `file docs/assets/sc-dual-vkb-binding-planner.png`

Expected: a valid PNG with a desktop-scale width of at least 1400 pixels.

Visually confirm the planner title, both stick panels, and action list are readable and no private data is visible.

### Task 3: Publish the GitHub About metadata

**Files:**
- No repository files.

**Interfaces:**
- Consumes: authenticated GitHub credentials already configured for `git@github.com:airsun/sc-keybinding-planner.git`.
- Produces: repository description, homepage, and searchable topics.

- [ ] **Step 1: Update description and homepage through the GitHub REST API**

Send this JSON body with `PATCH /repos/airsun/sc-keybinding-planner`:

```json
{
  "description": "Discover, create, and refine a Star Citizen HOSAS setup that fits the way you fly — a local-first visual planner for dual VKB bindings.",
  "homepage": "https://airsun.github.io/sc-keybinding-planner/"
}
```

Expected: HTTP 200 and the response echoes the exact description and homepage.

- [ ] **Step 2: Replace repository topics through the GitHub REST API**

Send this JSON body with `PUT /repos/airsun/sc-keybinding-planner/topics`:

```json
{
  "names": [
    "star-citizen",
    "vkb",
    "hosas",
    "keybindings",
    "joystick",
    "dual-stick",
    "flight-sim",
    "web-app",
    "gaming-tools"
  ]
}
```

Expected: HTTP 200 and the response contains all nine topics.

- [ ] **Step 3: Re-read public repository metadata**

Run: `curl -sS https://api.github.com/repos/airsun/sc-keybinding-planner`

Expected: `description` and `homepage` exactly match Step 1, and `topics` contains the nine names from Step 2.

### Task 4: Verify, commit, and push the presentation update

**Files:**
- Create: `README.md`
- Create: `docs/assets/sc-dual-vkb-binding-planner.png`
- Create: `docs/superpowers/plans/2026-07-21-community-readme-and-about.md`

**Interfaces:**
- Consumes: Tasks 1–3.
- Produces: committed and pushed repository presentation on `origin/main`.

- [ ] **Step 1: Review exact scope**

Run:

```bash
git status --short
git diff -- README.md docs/superpowers/plans/2026-07-21-community-readme-and-about.md
git diff --stat -- README.md docs/assets/sc-dual-vkb-binding-planner.png docs/superpowers/plans/2026-07-21-community-readme-and-about.md
```

Expected: only the three files listed above belong to this implementation; pre-existing unrelated untracked paths remain unstaged.

- [ ] **Step 2: Run final verification**

Run:

```bash
git diff --check
test -s README.md
test -s docs/assets/sc-dual-vkb-binding-planner.png
rg -n 'Discover, create, and refine|沉浸|Launch Planner|GitHub Issues|unofficial community tool' README.md
```

Expected: all commands exit 0 and the README contains the agreed player outcome, entry points, and disclaimer.

- [ ] **Step 3: Stage only the intended files**

Run:

```bash
git add README.md docs/assets/sc-dual-vkb-binding-planner.png docs/superpowers/plans/2026-07-21-community-readme-and-about.md
git diff --cached --check
git status --short
```

Expected: the three intended files are staged and unrelated files remain untracked.

- [ ] **Step 4: Commit**

Run: `git commit -m "docs: present planner to Star Citizen community"`

Expected: a commit containing only the README, screenshot, and implementation plan.

- [ ] **Step 5: Push**

Run: `git push origin main`

Expected: `origin/main` advances to include the design and implementation commits.
