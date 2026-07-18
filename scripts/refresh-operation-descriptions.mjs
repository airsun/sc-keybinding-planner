#!/usr/bin/env node
/**
 * Rebuild the concise, scenario-led Chinese descriptions in data.js.
 *
 * The primary authority is the action label/ID exported from Star Citizen's
 * in-game Advanced Controls Customization.  The source catalogue added below
 * provides the official CIG pages used to clarify the player-facing mechanics.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "binding-planner", "data.js");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(dataPath, "utf8"), context, { filename: dataPath });
const seed = context.window.VKB_PLANNER_SEED;

const sourceCatalog = [
  {
    id: "cig-controls",
    label: "CIG 官方：键位设置与 Advanced Controls",
    url: "https://support.robertsspaceindustries.com/hc/en-us/articles/360000134267-Set-up-keybindings-for-your-peripherals",
  },
  {
    id: "cig-onboarding",
    label: "CIG 官方：新手交互、登机与基础飞行",
    url: "https://support.robertsspaceindustries.com/hc/en-us/articles/360025028633-Getting-Started-in-the-Verse",
  },
  {
    id: "cig-flight",
    label: "CIG 官方：降落、对接与耦合/解耦飞行",
    url: "https://support.robertsspaceindustries.com/hc/en-us/articles/360020925254-How-to-Land-Your-Ship",
  },
  {
    id: "cig-quantum",
    label: "CIG 官方：量子旅行与 NAV / Quantum 模式",
    url: "https://support.robertsspaceindustries.com/hc/en-us/articles/360019449994-How-to-Quantum-Travel",
  },
  {
    id: "cig-mining",
    label: "CIG 官方：采矿的扫描、破岩与提取流程",
    url: "https://support.robertsspaceindustries.com/hc/en-us/articles/360007611573-Mining-Basics",
  },
  {
    id: "cig-salvage",
    label: "CIG 官方：工业玩法指南（回收、结构回收与牵引）",
    url: "https://robertsspaceindustries.com/en/comm-link/transmission/20050-Industrial-Gameplay-Guide",
  },
];

const byName = (row) => row.nameEn.toLowerCase();
const clean = (value) => String(value || "").replace(/\s*\([^)]*\)\s*/g, " ").trim();
const press = (row) => (byName(row).includes("long press") || byName(row).includes("hold") ? "按住" : "短按");
const direction = (name) => ({
  up: "上", down: "下", left: "左", right: "右", forward: "前", back: "后",
  front: "前方", top: "上方", bottom: "下方",
}[name] || name);
const directionPhrase = (name) => ({
  left: "左侧", right: "右侧", up: "上方", down: "下方", behind: "后方",
  "left / right": "左右两侧", "up / down": "上下两侧",
}[name] || direction(name));
const operatorMode = (name) => ({
  Mining: "采矿", Salvage: "回收", Scanning: "扫描", Quantum: "量子", Missile: "导弹", Guns: "炮术", Flight: "飞行",
}[name] || name);

const exact = {
  v_emergency_exit: "执行紧急离座，快速离开当前座位；仅在必须立刻脱离驾驶/炮塔位时使用，避免与弹射混淆。",
  v_eject: "触发舰船弹射逃生；仅在舰船支持且无法继续操控时使用，属于高风险、应防误触的最后手段。",
  v_view_look_behind: "将视角转向后方；在倒车、编队或检查六点方向时快速确认后方态势。",
  v_flightready: "让舰船进入可飞行/系统就绪状态；登机后起飞前一次完成常用上电准备。",
  v_self_destruct: "启动舰船自毁流程；只在明确需要销毁舰船时使用，不应放在容易误触的位置。",
  v_toggle_all_doors: "切换所有舱门的开/关；登机、离机或装卸前快速处理通道。",
  v_open_all_doors: "打开所有舱门；多人登舰或装卸前可一次开放通道。",
  v_close_all_doors: "关闭所有舱门；起飞、交战或离舰后用于恢复舱体封闭。",
  v_toggle_all_doorlocks: "切换所有舱门的锁定状态；停泊或需要限制他人进入时使用。",
  v_lock_all_doors: "锁定所有舱门；离舰或防范未经允许登舰时使用。",
  v_unlock_all_doors: "解锁所有舱门；允许队友登舰或开始装卸前使用。",
  v_toggle_all_portlocks: "切换所有设备/组件端口锁；更换或拆取舰船部件前先确认此状态。",
  v_lock_all_ports: "锁定所有设备端口；平时保持锁定，避免部件被意外拆取。",
  v_unlock_all_ports: "解锁所有设备端口；需要用牵引工具拆装组件时才开启。",
  v_view_cycle_fwd: "按顺序切换舰船镜头视角；起降时可快速检查起落架、船体和周边障碍。",
  v_view_mode: "切换第三人称镜头的环绕模式；用于在不改变飞行输入时调整观察方式。",
  v_view_zoom_in: "拉近第三人称镜头；用于精看舰船姿态或狭窄区域。",
  v_view_zoom_out: "拉远第三人称镜头；用于获得更宽的舰船与障碍物视野。",
  v_view_freelook_mode: "按住后自由查看，不把视角输入传给载具；降落时查看四周而不偏转舰船。",
  v_space_brake: "触发太空刹车，迅速抵消当前运动；进库、避障或需要紧急停船时使用。",
  v_lock_rotation: "锁定俯仰与偏航输入；地面载具停车或需要稳定视角时避免误转向。",
  v_toggle_yaw_roll_swap: "交换偏航和滚转的控制轴；用于适配不同摇杆习惯，切换后应立即确认手感。",
  v_autoland: "请求/执行自动着陆；已获准并接近可用停泊位时可减少最后阶段的手动操作。",
  v_atc_request: "呼叫空管申请降落；接近有 Landing Services 的地点后取得机库、停机坪或对接口分配。",
  v_atc_loading_area_request: "向空管请求货运装卸区域；需要使用指定货运服务时呼叫。",
  v_toggle_docking_mode: "切换对接模式；准备靠近空间站或大型舰船的对接口时使用。",
  v_invoke_docking: "启动对接流程；对齐并接近对接口后完成最后的夹具连接。",
  v_dock_toggle_view: "切换对接摄像机；对接时用专用视图确认位置与对齐。",
  v_toggle_mining_laser_fire: "切换采矿激光开火；对准矿石后开始或停止破岩/提取过程。",
  v_toggle_mining_laser_type: "切换已装备的采矿激光/激光头；根据目标矿石与当前阶段选择合适工具。",
  v_increase_mining_throttle: "提高采矿激光功率；破岩时逐步加压，避免过快进入不稳定区。",
  v_decrease_mining_throttle: "降低采矿激光功率；能量接近危险区或需要细调时立即回收。",
  v_mining_throttle: "用连续轴调节采矿激光功率；便于在矿石能量窗口内细腻控制。",
  v_jettison_volatile_cargo: "抛弃易挥发货物；出现安全风险时止损，默认应远离常用操作位。",
  v_scanning_trigger_scan: "激活扫描；在采矿或探索前识别可扫描目标并获得其信息。",
  v_inc_scan_focus_level: "增大扫描角度；先扩大搜索覆盖，再按需收窄目标。",
  v_dec_scan_focus_level: "减小扫描角度；锁定疑似目标后提高扫描聚焦。",
  v_power_toggle: "切换全舰电源；上电检查或离舰前快速处理总体供电。",
  v_power_set_on: "明确开启全舰电源；需要避免开关状态歧义时使用。",
  v_power_set_off: "明确关闭全舰电源；停泊、维护或离舰后使用。",
  v_power_toggle_thrusters: "切换推进器供电；起飞前确认开启，停泊维护时可关闭。",
  v_power_set_thrusters_on: "开启推进器供电；准备起飞或机动前使用。",
  v_power_set_thrusters_off: "关闭推进器供电；停泊或维护时防止误推进。",
  v_power_toggle_shields: "切换护盾供电；进入危险区域前确认护盾已上线。",
  v_power_set_shields_on: "开启护盾供电；交战或离港前确保防护可用。",
  v_power_set_shields_off: "关闭护盾供电；仅在明确需要节能或维护时使用。",
  v_power_toggle_weapons: "切换武器供电；交战前开启、希望降低误击风险时关闭。",
  v_power_set_weapons_on: "开启武器供电；确认交战意图后使用。",
  v_power_set_weapons_off: "关闭武器供电；停泊、友军密集或非战斗时减少误操作。",
  v_toggle_landing_system: "开/收起落架；获准进近前放下，离开停机位后再收起。",
  v_deploy_landing_system: "放下起落架；最终进近和接触停机坪前使用。",
  v_retract_landing_system: "收起起落架；确认离开停机坪并安全爬升后使用。",
  v_toggle_vtol: "切换 VTOL 推进器构型；大气层悬停、垂直起降时提升垂直效率，代价是前向性能。",
  v_transform_deploy: "展开舰船可变构型；按舰船设计进入所需的工作/飞行形态。",
  v_transform_retract: "收回舰船可变构型；完成特殊形态用途后恢复常态。",
  v_transform_cycle: "循环舰船可变构型；逐个试切可用形态并确认当前状态。",
  v_ifcs_toggle_vector_decoupling: "切换解耦飞行；解耦后松开输入仍保留惯性，适合漂移机动但需要主动制动。",
  v_ifcs_vector_decoupling_on: "开启解耦飞行；需要惯性漂移或独立朝向射击时使用。",
  v_ifcs_vector_decoupling_off: "关闭解耦飞行；回到松输入后自动减速的耦合操控。",
  v_ifcs_toggle_gforce_safety: "切换 G 力安全辅助；按自己的机动与舒适需求调整飞控保护。",
  v_ifcs_gsafe_on: "开启 G 力安全辅助；高机动飞行时帮助维持保护限制。",
  v_ifcs_gsafe_off: "关闭 G 力安全辅助；只在明确接受更少保护的操控方式时使用。",
  v_ifcs_toggle_gravity_compensation: "切换重力补偿；在行星表面低速悬停或作业时减少持续修正。",
  v_ifcs_gravity_compensation_on: "开启重力补偿；大气层定点和低速作业更省力。",
  v_ifcs_gravity_compensation_off: "关闭重力补偿；只在需要完全手动处理重力影响时使用。",
  v_master_mode_set_nav: "将主模式设为 NAV；量子旅行前需要进入 NAV，再选择 Quantum 操作模式校准。",
  v_master_mode_set_scm: "将主模式设为 SCM；常规机动和交战时使用的空间作战机动模式。",
  v_toggle_jump_request: "请求跳跃驱动；满足航线与模式条件后启动跳跃准备。",
  v_horn: "鸣笛；地面载具接近队友、行人或车队时发出提示。",
  v_mgv_switch_brake_on_idle: "切换怠速自动刹车；地面载具松开输入时决定是否自动保持制动。",
  v_brake: "制动；EVA 或地面载具需要快速停止当前移动时使用。",
  v_lights: "切换载具头灯；夜间、洞穴或能见度差时照亮前方，注意暴露位置。",
  visor_wipe: "擦拭头盔面罩；雨雪、污渍遮挡视线时恢复可见度。",
  v_starmap: "打开地图；设定航线、查看位置或寻找目的地时使用。",
  pc_interaction_mode: "进入交互模式；让可交互物件高亮并显示可用操作。",
  pc_select: "激活 Inner Thought 中当前选项；对准门、座椅、物品或面板后执行选择。",
  pc_personal_thought: "打开 Personal Inner Thought（PIT）菜单；快速访问角色、装备和载具相关操作。",
  pc_pit_inventory: "短按切换个人库存；整理装备、物资或从终端转移物品时使用。",
  pc_pit_looting_toggle_view: "切换搜刮界面视图；在目标与自身物品间整理战利品。",
  drop: "丢下当前物品；腾出手部或把物资交给队友时使用，注意不要在危险地点误丢。",
  toggle_contact: "打开/关闭 Commlink；呼叫 ATC、联系队友或管理通信时使用。",
  toggle_chat: "打开/关闭聊天窗口；需要文字沟通时使用。",
  foip_pushtotalk: "按住进行 VOIP 语音；只在按键期间向当前语音频道发送声音。",
  foip_pushtotalk_proximity: "按住进行近距 VOIP；只让附近玩家听到，适合现场沟通。",
  headtrack_enabled: "切换头部追踪；用真实头部动作控制游戏视角。",
  headtrack_hold: "按住启用头部追踪；需要暂时用头看四周时使用。",
  foip_viewownplayer: "打开 FOIP 自拍视图；校准或检查面部追踪效果时使用。",
  foip_recalibrate: "重新校准 FOIP；脸部追踪偏移后恢复中性姿势。",
  v_emergency_exit: "执行紧急离座，快速离开当前座位；仅在必须立刻脱离驾驶/炮塔位时使用，避免与弹射混淆。",
};

function describeMfd(row) {
  const n = byName(row);
  const hold = press(row);
  if (n.includes("cycle page")) return `在当前 MFD 中向${n.includes("backwards") ? "后" : "前"}循环页面（${hold}）；飞行中快速切到通信、状态等常用页。`;
  const movement = n.match(/movement - (up|down|left|right)/);
  if (movement) return `将 MFD 的当前焦点向${direction(movement[1])}移动（${hold}）；用摇杆/键位浏览屏幕控件而不必操作鼠标。`;
  if (n.includes("quick action - self repair")) return "在 MFD 触发“本舰全部维修”快捷操作；停靠并具备维修服务时快速恢复舰船。";
  const page = n.match(/set page - (.+?) \(/);
  if (page) {
    const pageName = {
      "self status": "本舰状态", "target status": "目标状态", scanning: "扫描",
      "vehicle configuration": "载具配置", communications: "通信", ifcs: "飞控（IFCS）",
      diagnostics: "诊断", "resource network": "资源网络",
    }[page[1]] || page[1];
    return `将 MFD 直接切到“${pageName}”页面（${hold}）；在需要该类信息或控制时少走一层菜单。`;
  }
  const selectMfd = n.match(/select - mfd (\d+)/);
  if (selectMfd) return `选择/触发编号 ${selectMfd[1]} 的 MFD 控件（${hold}）；多屏座舱中可直接定位对应显示器。`;
  if (n.includes("select - primary")) return `触发当前 MFD 的主选择操作（${hold}）；用实体控制器确认当前焦点，而不必点击屏幕。`;
  if (n.includes("left cast")) return `触发当前 MFD 的左侧选择操作（${hold}）；在多选项屏幕中快速执行左侧软键。`;
  if (n.includes("right cast")) return `触发当前 MFD 的右侧选择操作（${hold}）；在多选项屏幕中快速执行右侧软键。`;
  return null;
}

function describeSeats(row) {
  const n = byName(row);
  if (n.includes("refuel")) {
    return n.includes("set")
      ? "将操作模式明确设为补给/加油；在对应岗位需要避免切换状态不确定时使用。"
      : "切换至或离开补给/加油操作模式；使用相应舰载补给功能时进入。";
  }
  if (n.includes("operator mode")) {
    if (n.startsWith("toggle ")) return `切换${operatorMode(clean(row.nameEn.replace(/^Toggle\s+/i, "").replace(/ Operator Mode/i, "")))}操作模式；需要使用对应舰载工具或功能时进入，结束后切回。`;
    if (n.startsWith("set ")) return `将操作模式明确设为${operatorMode(clean(row.nameEn.replace(/^Set\s+/i, "").replace(/ Operator Mode/i, "")))}；需要避免“切换”造成状态不确定时使用。`;
    if (n.startsWith("next")) return "切到下一个操作模式；在多个舰船工作模式间顺序浏览。";
    if (n.startsWith("previous")) return "切到上一个操作模式；错过目标模式时反向返回。";
  }
  if (n.includes("remote turret")) return `进入远程炮塔 ${n.match(/\d+/)?.[0] || ""}；多人舰船中切换到指定炮塔位进行操作。`;
  if (n.includes("light amplification")) {
    const action = n.endsWith("toggle") ? "切换开关" : n.endsWith("on") ? "开启" : "关闭";
    return `控制座舱/炮塔的光线增强：${action}；暗处观察时按需使用，避免误判其为头灯。`;
  }
  return null;
}

function describeView(row) {
  const n = byName(row);
  if (n.startsWith("look ")) return `将载具视角向${directionPhrase(n.replace(/^look\s+/i, ""))}查看；观察周边、编队或倒车时快速确认方向。`;
  if (n.includes("look left / right")) return "用轴控制载具视角左右查看；适合头瞄/视角轴而不改变飞行姿态。";
  if (n.includes("look up / down")) return "用轴控制载具视角上下查看；检查上方/下方空间时不改变飞行姿态。";
  if (n.includes("dynamic zoom")) return `控制动态缩放（${n.includes("abs.") ? "绝对轴" : n.includes("rel.") ? "相对输入" : "切换"}）；第三人称观察时按控制器类型调节远近。`;
  if (n.includes("precision targeting")) {
    if (n.includes("maximum")) return "按住时将精确瞄准切到最大缩放；远距离观察或稳定瞄准时使用，松开后恢复。";
    if (n.includes("camera tracking")) return "切换精确瞄准时的镜头跟踪；按个人视角习惯决定是否让镜头随瞄准目标移动。";
    if (n.includes("toggle on / off")) return "切换精确瞄准；需要更细的目标观察或控制时开启，再次操作恢复。";
    return "按住启用精确瞄准；需要临时细调观察/瞄准时使用。";
  }
  return null;
}

function describeFlightMovement(row) {
  const n = byName(row);
  const id = row.actionId;
  if (/^(pitch|yaw|roll) (up|down|left|right)$/.test(n)) {
    const [, axis, dir] = n.match(/^(pitch|yaw|roll) (up|down|left|right)$/);
    return `让舰船${axis === "pitch" ? "俯仰" : axis === "yaw" ? "偏航" : "滚转"}向${direction(dir)}；基础姿态控制，用于瞄准、转向和姿态修正。`;
  }
  if (["pitch", "yaw", "roll"].includes(n)) return `用连续轴控制舰船${n === "pitch" ? "俯仰" : n === "yaw" ? "偏航" : "滚转"}；适合摇杆主轴的精细姿态操控。`;
  const strafe = n.match(/^strafe (up|down|left|right)/);
  if (strafe) return `向${direction(strafe[1])}平移推进；悬停、入库或贴近障碍时做横向/垂直微调。`;
  if (n.includes("strafe up / down")) return "用轴控制垂直平移；悬停或进机库时细调高度。";
  if (n.includes("strafe left / right")) return "用轴控制横向平移；对准机库、停机坪或编队位置时细调。";
  if (n.includes("throttle - increase")) return "提高前向推进/油门；起飞后加速或追赶目标时逐步加大。";
  if (n.includes("throttle - decrease")) return "降低前向推进/油门；进近或接近目标时收速。";
  if (n.includes("throttle - forward / back invert")) return "用反向轴控制前/后向推进；用于与倒置油门硬件匹配。";
  if (n.includes("throttle - forward / back")) return "用连续轴控制前/后向推进；适合油门或推拉杆的直接速度输入。";
  if (n.includes("cruise mode")) return n.includes("enable") ? "开启巡航油门；松开输入后仍维持当前推进，长距离航行时减轻持续按压。" : n.includes("disable") ? "关闭巡航油门；重新由实时输入控制推进。" : "切换巡航油门；在持续巡航和即时推进之间切换。";
  if (n.includes("throttle - trim")) {
    if (n.includes("100%")) return `将油门微调设为 100%（${press(row)}）；需要立即恢复满推时使用。`;
    if (n.includes("50%")) return `将油门微调设为 50%（${press(row)}）；编队或进近时快速回到中等推力。`;
    if (n.includes("release")) return `解除油门微调（${press(row)}）；结束临时固定推力后恢复手动控制。`;
    return `记录当前油门为微调值（${press(row)}）；需要稳定维持某个推进量时使用。`;
  }
  if (n.includes("decoupled mode")) return id.includes("disable") ? "关闭解耦飞行；让舰船回到松开输入后自动减速的耦合行为。" : id.includes("enable") ? "开启解耦飞行；保留惯性以便漂移机动和独立朝向。" : "切换解耦飞行；在惯性漂移与自动减速的操控方式间切换。";
  if (n === "boost") return "短时提升推进器响应与加速；脱离危险或快速机动时使用，注意热量与资源消耗。";
  if (n.includes("speed limiter")) {
    if (n.includes("enable / disable")) return "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。";
    if (n.includes(" - enable")) return "开启速度限制器；进机库或贴地飞行时提高细控能力。";
    if (n.includes(" - disable")) return "关闭速度限制器；需要完整速度范围时使用。";
    if (n.includes("step up")) return "按档提高速度限制；逐级放宽最大速度，适合不离杆调整。";
    if (n.includes("step down")) return "按档降低速度限制；进近时快速收紧最高速度。";
    if (n.includes("increase")) return "按住提高速度限制；持续放宽最大速度。";
    if (n.includes("decrease")) return "按住降低速度限制；持续收紧最大速度。";
    return `用${n.includes("abs") ? "绝对轴" : "相对输入"}设定速度限制；将硬件位置直接映射为最高速度。`;
  }
  if (n.includes("acceleration limiter")) {
    if (n.includes("increase")) return "提高加速度限制；需要更积极的推进响应时使用。";
    if (n.includes("decrease")) return "降低加速度限制；精细机动或降低过冲时使用。";
    return `用${n.includes("abs") ? "绝对轴" : "相对输入"}调节加速度限制；按操控器位置控制推进响应上限。`;
  }
  if (n.includes("e.s.p.")) return n.includes("temporarily") ? "按住临时启用 ESP 飞控辅助；需要短暂获得辅助修正时使用。" : "切换 ESP 飞控辅助；按个人手感在辅助与更直接控制间选择。";
  if (n.includes("vtol")) return n.includes("enable") ? "开启 VTOL 构型；在大气层垂直起降或悬停时使用。" : n.includes("disable") ? "关闭 VTOL 构型；恢复更适合前向飞行的推进配置。" : null;
  if (n.includes("master mode")) return n.includes("long") ? "以长按方式循环主模式；在 NAV 与 SCM 等主模式间反向/扩展切换。" : "以短按方式循环主模式；在 NAV 与 SCM 等主模式间快速切换。";
  if (n.includes("wind compensation")) return n.includes("enable") ? "开启风力补偿；大气层飞行时让 IFCS 帮助抵消风的影响。" : n.includes("disable") ? "关闭风力补偿；需要完全手动处理风影响时使用。" : "切换风力补偿；按大气层飞行手感选择 IFCS 辅助。";
  if (n.includes("automatic precision")) return n.includes("enable") ? "开启自动精确模式；系统在合适条件下提供更细的操控。" : n.includes("disable") ? "关闭自动精确模式；保持当前直接操控方式。" : "切换自动精确模式；按飞行阶段选择自动细控辅助。";
  if (n.includes("proximity assist")) return n.includes("enable") ? "开启近距辅助；贴近地面、机库或物体时获得辅助保护。" : n.includes("disable") ? "关闭近距辅助；只在明确接受更少近距保护时使用。" : "切换近距辅助；狭窄空间机动时可减少碰撞风险。";
  if (n.includes("stability")) return n.includes("enable") ? "开启 IFCS 稳定辅助；需要更平稳的飞行响应时使用。" : n.includes("disable") ? "关闭 IFCS 稳定辅助；改为更直接的飞控响应。" : "切换 IFCS 稳定辅助；按飞行手感选择稳定程度。";
  if (n.includes("command behaviour")) return n.includes("on") ? "将 IFCS 指令行为设为开启；切换后应在安全区域确认飞控响应。" : n.includes("off") ? "将 IFCS 指令行为设为关闭；切换后应在安全区域确认飞控响应。" : "切换 IFCS 指令行为；这是飞控偏好设置，建议在试飞时确认效果。";
  if (n.includes("ifcs - core")) return n.includes("enable") ? "开启 IFCS 核心；恢复飞控核心辅助。" : n.includes("disable") ? "关闭 IFCS 核心；仅在明确理解影响时使用。" : "切换 IFCS 核心；影响基础飞控辅助，避免误触。";
  if (n.includes("accelerometer")) return "重置飞行加速度计的最大读数；完成一次高 G 机动后重新记录峰值。";
  if (n.includes("advanced hud")) return n.includes("enable") ? "开启高级 HUD；需要更多飞行信息时使用。" : n.includes("disable") ? "关闭高级 HUD；希望界面更简洁时使用。" : "切换高级 HUD；按需要显示或隐藏扩展飞行信息。";
  return null;
}

function describeTargeting(row) {
  const n = byName(row);
  if (n.includes("auto targeting")) return n.includes("toggle on" ) ? "开启自动目标选择；需要系统自动协助选取目标时使用。" : n.includes("toggle off") ? "关闭自动目标选择；需要完全手动管理目标时使用。" : "切换自动目标选择；交战中按个人偏好决定是否让系统协助选取目标。";
  const pin = n.match(/pin index (\d+) - (.+)/);
  if (pin) {
    const action = pin[2].includes("lock / unlock")
      ? `锁定/解锁编号 ${pin[1]} 的固定目标`
      : `${pin[2].includes("hold") ? "按住" : ""}将当前选中目标固定到/移出编号 ${pin[1]}`;
    return `${action}；将常用目标保存在编号位后可快速取回或锁定。`;
  }
  if (n.includes("pin selected target")) return "固定当前选中目标；便于稍后在目标循环中快速回到它。";
  if (n.includes("unpin selected target")) return "取消固定当前选中目标；目标不再占用固定列表位置。";
  if (n.includes("remove all pinned")) return "清除全部固定目标；交战或任务结束后整理目标列表。";
  if (n.includes("lock selected")) return "锁定当前选中目标；武器、导弹或目标信息需要正式锁定时使用。";
  if (n.includes("unlock current")) return "解除当前目标锁定；需要重新选择目标或避免继续跟踪时使用。";
  if (n.includes("look ahead")) return "切换 Look Ahead 视角行为；按飞行/瞄准习惯决定是否采用前视辅助。";
  if (n.includes("target padlock")) return "切换目标锁视（Padlock）；狗斗时让视角持续跟随锁定目标。";
  if (n.includes("auto zoom")) return "切换对选中目标的自动缩放；跟踪远近变化明显的目标时减少手动调镜。";
  return null;
}

function describeTargetCycling(row) {
  const n = byName(row);
  if (n.includes("under reticle")) return "锁定准星下的目标；直接把当前瞄准对象设为目标。";
  const match = n.match(/cycle lock - (.+?) - (back|forward|reset to .+)/);
  if (!match) return null;
  const list = { "in view": "视野内目标", pinned: "固定目标", attackers: "正在攻击你的目标", hostiles: "敌对目标", friendlies: "友方目标", all: "全部目标", "sub-target": "子目标部件" }[match[1]] || match[1];
  const move = match[2];
  if (move === "back") return `在${list}列表中向前一项循环锁定；错过目标时反向切换。`;
  if (move === "forward") return `在${list}列表中向后一项循环锁定；快速浏览可锁定对象。`;
  const resetTarget = { "reset to closest": "最近目标", "reset to first": "首个目标", "reset to main target": "主目标" }[move] || "默认目标";
  return `将${list}列表重置到${resetTarget}；需要快速回到默认起点时使用。`;
}

function describeMining(row) {
  const n = byName(row);
  if (n.includes("activate mining module")) return `激活采矿模块槽 ${n.match(/\d+/)?.[0] || ""}；在破岩/提取窗口按模块效果处理矿石。`;
  if (n.includes("toggle laser beam")) return "切换激光束高/低档；按目标与作业阶段选择合适输出。";
  return null;
}

function describeSalvage(row) {
  const n = byName(row);
  const head = (value) => ({ focused: "聚焦回收头", left: "左回收头", right: "右回收头", all: "全部回收头" }[value] || value);
  if (n.includes("salvage beam axis")) return "切换回收光束轴的控制方式；让指定硬件轴在飞行控制与回收工具调节之间切换。";
  if (n.includes("tractor beam vehicle")) return `调整载具牵引光束距离（${n.includes("increase") ? "增大" : "减小"}）；搬运组件、货箱或残骸时控制工作距离。`;
  const fire = n.match(/^toggle fire (focused|left|right|fracture|disintegrate)$/);
  if (fire) {
    const tool = { focused: "聚焦回收头", left: "左回收头", right: "右回收头", fracture: "破碎工具", disintegrate: "解体工具" }[fire[1]];
    return `切换${tool}的开火；在刮削、破碎或解体阶段启动/停止对应光束。`;
  }
  if (n.includes("gimbal")) return n.includes("reset") ? "重置回收模式的光束云台；工具指向偏离后恢复中位。" : "切换回收模式光束云台；按作业目标和操控习惯选择指向方式。";
  if (n.includes("cycle structural salvage modes")) return "循环结构回收模式；破碎与解体等结构回收阶段按目标切换合适工具。";
  if (n.includes("beam spacing")) {
    if (n.includes("increase")) return "增大回收光束间距；处理更宽的表面或结构时调整覆盖范围。";
    if (n.includes("decrease")) return "减小回收光束间距；需要集中处理窄小部位时使用。";
    if (n.includes("toggle")) return "切换回收光束间距轴的控制方式；让硬件轴改为调节光束覆盖。";
    return `用${n.includes("absolute") ? "绝对轴" : "相对输入"}调节回收光束间距；按残骸宽度细调覆盖范围。`;
  }
  const modifier = n.match(/^cycle (focused|left|right) salvage modifiers$/);
  if (modifier) return `循环${head(modifier[1])}的工具修正项；按残骸材质或作业阶段切换可用效果。`;
  const focus = n.match(/^focus (all|left|right) salvage heads?$/);
  if (focus) return `将回收作业焦点设为${head(focus[1])}；按残骸位置选择左、右或全部回收头，提高有效覆盖。`;
  if (n.includes("focus fracture")) return "将回收作业焦点切到破碎工具；开始结构回收前确保控制的是破碎场。";
  if (n.includes("focus disintegration")) return "将回收作业焦点切到解体工具；残骸已破碎后处理结构材料时使用。";
  const nudge = n.match(/^nudge (left|right) salvage tool (up|down|left|right)$/);
  if (nudge) return `将${head(nudge[1])}向${direction(nudge[2])}微调；细修工具位置以对准局部残骸。`;
  return null;
}

function describeTurret(row) {
  const n = byName(row);
  if (/^(pitch|yaw) (up|down|left|right)$/.test(n)) {
    const [, axis, value] = n.match(/^(pitch|yaw) (up|down|left|right)$/);
    return `让炮塔${axis === "pitch" ? "俯仰" : "偏航"}向${direction(value)}；用于独立修正炮塔指向。`;
  }
  if (n === "pitch" || n === "yaw") return `用连续轴控制炮塔${n === "pitch" ? "俯仰" : "偏航"}；多人炮塔位进行精细瞄准时使用。`;
  if (n.includes("toggle turret mouse")) return "切换炮塔鼠标移动方式；在虚拟摇杆与 FPS 式瞄准之间适配操控习惯。";
  if (n.includes("exit remote")) return "退出远程炮塔；完成射击或需要回到座位其他功能时使用。";
  if (n.includes("gyro")) return "切换炮塔陀螺稳定；转舰船或颠簸时帮助保持炮口方向。";
  if (n.includes("next remote")) return "切到下一座远程炮塔；多炮塔舰船中顺序换位。";
  if (n.includes("previous remote")) return "切到上一座远程炮塔；多炮塔舰船中反向换位。";
  if (n.includes("turret e.s.p.")) return n.includes("temporarily") ? "按住临时启用炮塔 ESP 辅助；需要短暂获得辅助修正时使用。" : "切换炮塔 ESP 辅助；按瞄准手感选择辅助程度。";
  if (n.includes("recenter")) return "按住使炮塔回中；脱离目标后快速恢复中立朝向。";
  if (n.includes("speed limiter")) return `控制炮塔转动速度限制：${n.includes("increase") ? "提高" : n.includes("decrease") ? "降低" : n.includes("toggle") ? "切换开关" : n.includes("abs") ? "用绝对轴设定" : "用相对输入设定"}；远距细瞄时可降低速度。`;
  if (n.includes("change turret position")) return "切换炮塔位置；在可用炮塔位之间调整当前岗位。";
  return null;
}

function describeWeapons(row) {
  const n = byName(row);
  if (n.includes("gimbal state")) {
    const gimbalAction = n.includes("toggle locked")
      ? "在锁定与解锁间切换"
      : n.includes("set locked")
        ? "设为锁定"
        : n.includes("set unlocked")
          ? "设为解锁"
          : "在虚拟摇杆与视角间循环云台控制来源";
    return `控制武器云台状态：${gimbalAction}；按目标运动和个人瞄准习惯选择锁定或解锁。`;
  }
  if (n.includes("aim mode")) {
    const aimAction = n.endsWith("cycle")
      ? "循环切换"
      : n.includes("pip aiming")
        ? "设为 PIP 瞄准"
        : n.includes("painting")
          ? "设为涂装/标记"
          : "设为自动";
    return `控制武器瞄准模式：${aimAction}；根据 PIP、涂装或自动瞄准需求切换。`;
  }
  if (n.includes("staggered fire")) return n.includes(" - on") ? "开启交错开火；让武器组错开射击，降低瞬时能量/热量压力。" : n.includes(" - off") ? "关闭交错开火；让武器组同时射击。" : "切换交错开火；在持续火力分配与齐射之间选择。";
  if (n.includes("suppress aim assists")) return "按住抑制瞄准辅助；需要临时完全手动控制瞄准时使用。";
  if (n.includes("lead / lag")) return "切换 PIP 的提前/滞后显示；按弹道和目标机动选择更合适的引导方式。";
  if (n.includes("set lag pip")) return "将 PIP 设为滞后显示；按目标和弹道需求使用该引导方式。";
  if (n.includes("set lead pip")) return "将 PIP 设为提前显示；按目标和弹道需求使用该引导方式。";
  if (n.includes("pip combination")) {
    const combination = n.includes("toggle")
      ? "在可用合并方式间切换"
      : n.includes("per weapon type")
        ? "每种武器类型显示一个 PIP"
        : "每件武器显示一个 PIP";
    return `设置 PIP 合并方式：${combination}；在画面清晰度与武器信息细节间取舍。`;
  }
  if (n.includes("pip precision lines")) return n.endsWith("on") ? "开启 PIP 精确线；需要更细的射击引导时显示。" : n.endsWith("off") ? "关闭 PIP 精确线；希望 HUD 更简洁时隐藏。" : "切换 PIP 精确线；按瞄准偏好显示或隐藏辅助线。";
  if (n.includes("pip fading")) return n.endsWith("on") ? "开启 PIP 淡出；让不相关引导更少遮挡画面。" : n.endsWith("off") ? "关闭 PIP 淡出；始终显示 PIP。" : "切换 PIP 淡出；按 HUD 可读性偏好调整。";
  if (n.includes("gunnery ui magnification")) return n.endsWith("on") ? "开启炮术 UI 放大；远距观察时放大武器 HUD。" : n.endsWith("off") ? "关闭炮术 UI 放大；恢复普通 HUD 尺寸。" : "切换炮术 UI 放大；按目标距离调整武器 HUD 可读性。";
  if (n.includes("manual convergence")) {
    if (n.includes("reset")) return "重置手动汇聚距离；恢复默认武器交汇设定。";
    if (n.includes("increase")) return "增大手动汇聚距离；攻击更远目标前把固定武器交汇点推远。";
    if (n.includes("decrease")) return "减小手动汇聚距离；近距交战时把固定武器交汇点拉近。";
    return `用${n.includes("abs") ? "绝对轴" : "相对输入"}设定手动汇聚距离；让固定武器在预期射程交汇。`;
  }
  if (n.includes("weapon preset")) {
    const group = n.match(/guns group (\d+)/)?.[1];
    const presetAction = n.endsWith("- fire")
      ? "触发当前预设的开火"
      : n.includes("fire guns group")
        ? `触发火炮组 ${group} 开火`
        : n.includes("set guns group")
          ? `设为火炮组 ${group}`
          : n.includes("next (overflow)")
            ? "切到下一项溢出预设"
            : n.includes("previous (overflow)")
              ? "切到上一项溢出预设"
              : n.endsWith("- next")
                ? "切到下一个预设"
                : n.endsWith("- previous")
                  ? "切到上一个预设"
                  : n.includes("set emps")
                    ? "设为 EMP 预设"
                    : n.includes("quantum jammers")
                      ? "设为近距量子干扰器预设"
                      : n.includes("quantum snares")
                        ? "设为远距量子诱捕/脉冲预设"
                        : "设为 OID 预设";
    return `武器预设：${presetAction}；把常用火炮、EMP、干扰或量子装置组织为可快速切换的战斗组。`;
  }
  return null;
}

function describeMissiles(row) {
  const n = byName(row);
  if (n.includes("launch missiles")) return n.includes("hold") ? "按住发射导弹；在锁定与发射条件满足后持续执行发射动作。" : "短按发射导弹；确认目标与发射数量后快速开火。";
  if (n.includes("cycle next missile")) return "切到下一种导弹；按目标距离、签名或战术选择弹种。";
  if (n.includes("cycle previous missile")) return "切到上一种导弹；反向浏览可用弹种。";
  if (n.includes("number of armed missiles")) return n.includes("increase") ? "增加本次待发射的武装导弹数量；准备齐射时提高数量。" : n.includes("decrease") ? "减少本次待发射的武装导弹数量；节省弹药或避免过度齐射。" : "重置本次待发射的武装导弹数量；快速回到默认齐射规模。";
  if (n.includes("bombs - toggle desired impact")) return `切换炸弹预定着弹点显示/控制（${press(row)}）；对地投弹时辅助校正投放位置。`;
  if (n.includes("bombs - increase hud range")) return "增加炸弹 HUD 测距；对地投弹时扩展预期投放距离。";
  if (n.includes("bombs - decrease hud range")) return "减小炸弹 HUD 测距；近距离投放时收紧读数。";
  if (n.includes("bombs - reset hud range")) return "重置炸弹 HUD 测距；恢复默认对地投弹显示。";
  if (n.includes("cinematic camera")) return `${press(row)}启用导弹发射电影镜头；用于观察弹药离舰轨迹，非交战必需。`;
  return null;
}

function describeDefense(row) {
  const n = byName(row);
  if (n.includes("decoy")) {
    if (n.includes("panic")) return "紧急连续投放诱饵；导弹威胁迫近时快速干扰锁定，注意库存消耗。";
    if (n.includes("increase")) return "增加诱饵齐射数量；需要更强干扰时提高单次投放量。";
    if (n.includes("decrease")) return "减少诱饵齐射数量；威胁较低时节省存量。";
    return "短按投放当前诱饵齐射，按住设定并立即投放；导弹来袭时干扰敌方锁定。";
  }
  if (n.includes("noise")) return "部署 Noise 反制措施；遭导弹锁定时用干扰噪声配合机动脱离。";
  const shield = n.match(/shield raise level (front|back|left|right|top|bottom)/);
  if (shield) return `提高${direction(shield[1])}向护盾分配；受攻击方向明确时临时加强该面防护。`;
  if (n.includes("shield reset")) return "重置护盾分配；威胁解除后让护盾回到均衡状态。";
  return null;
}

function describePower(row) {
  const n = byName(row);
  if (n.includes("cooler rate")) return `${n.includes("increase") ? "提高" : "降低"}冷却器工作速率；高热战斗与资源节约之间按需调整。`;
  if (n === "increase throttle") return "提高系统电源节流；为高负荷操作提供更多供能。";
  if (n === "decrease throttle") return "降低系统电源节流；减少资源消耗或热量压力。";
  if (n === "decrease throttle to min") return "将系统电源节流降至最低；需要快速节能时使用。";
  if (n === "increase throttle to max") return "将系统电源节流升至最高；需要最大供能时使用。";
  if (n.includes("power throttle")) return n.includes("min") ? "将系统电源节流降至最低；需要快速节能时使用。" : n.includes("max") ? "将系统电源节流升至最高；需要最大供能时使用。" : n.includes("increase") ? "提高系统电源节流；为高负荷操作提供更多供能。" : "降低系统电源节流；减少资源消耗或热量压力。";
  const assignment = n.match(/^(engines|shields|weapons) - (.+)/);
  if (assignment) {
    const system = { engines: "引擎", shields: "护盾", weapons: "武器" }[assignment[1]];
    const action = assignment[2];
    return `调整${system}的工程资源分配：${action === "increase" ? "增加" : action === "decrease" ? "减少" : action.includes("max") ? "设为最大" : "设为最小"}；在追击、防御或火力输出前按战况倾斜资源。`;
  }
  if (n.includes("reset assignments")) return "重置工程资源分配；战况变化后恢复默认/均衡分配。";
  return null;
}

function describeOnFoot(row) {
  const n = byName(row);
  const movement = { moveleft: "向左移动", moveright: "向右移动", moveforward: "向前移动", moveback: "向后移动", gp_movex: "用轴左右移动", gp_movey: "用轴前后移动" };
  if (movement[row.actionId]) return `${movement[row.actionId]}；徒步探索、掩体移动和交互时的基础位移。`;
  if (n === "look (yaw)") return "用轴控制徒步视角左右转动；适合手柄或头部追踪替代方案。";
  if (n === "look (pitch)") return "用轴控制徒步视角上下转动；适合手柄或头部追踪替代方案。";
  if (n === "jump") return "跳跃；跨越矮障碍或在移动中改变高度。";
  if (n.includes("jump thrusters")) return n.includes("release") ? "释放跳跃推进器；结束喷气跳跃输入。" : "按住启动跳跃推进器；需要短时喷气跃迁时使用。";
  if (["crouch", "prone", "sprint", "walk"].includes(n)) return ({ crouch: "蹲下；降低暴露并便于通过低矮空间。", prone: "卧倒；在掩体后降低轮廓并提高稳定性。", sprint: "冲刺；快速转移但注意体力和噪声。", walk: "步行；需要精细移动或降低动静时使用。" })[n];
  if (n.includes("lean left") || n.includes("lean right")) return `向${n.includes("left") ? "左" : "右"}探身；利用掩体观察或射击时减少身体暴露。`;
  if (n.includes("climb ledges")) return "攀爬边缘；面对可攀附的矮墙、台阶或边沿时越过障碍。";
  if (n === "firearm - attack") return "使用当前枪械主攻击；交战时射击，注意弹药与误伤。";
  if (n.includes("tool - secondary fire")) return "使用当前工具的次级功能；多功能工具的吸附、模式或辅助动作常在此触发。";
  if (n.includes("melee - attack")) return n.includes("heavy") ? "按住蓄力进行重近战攻击；适合抓时机的高伤害出手。" : "进行轻近战攻击；近距离连续压制时使用。";
  if (n.includes("melee - block")) return "按住格挡近战攻击；面对近身威胁时争取反击窗口。";
  if (n.includes("medical pen")) return "用医疗笔对其他角色注射；队友受伤时进行现场医疗。";
  if (n.includes("takedowns")) return "用持有远程武器发起近战攻击/制服；贴身遭遇时的近距处理。";
  if (n.includes("throw - overarm")) return "过肩或双手投掷；需要更远、更有力地投出可投掷物。";
  if (n.includes("throw - underarm")) return "下手投掷；近距离、低抛或避免过度弹跳时使用。";
  if (n === "aim down sight") return "进入瞄具瞄准（ADS）；远距离射击时提高观察与射击精度。";
  if (n.includes("interact with scope")) return "在 ADS 中与瞄具交互；调整瞄具支持的功能而不必退出瞄准。";
  const select = n.match(/^select (primary|secondary|sidearm|melee|gadget)/);
  if (select) return `直接切换到${{ primary: "主武器", secondary: "副武器", sidearm: "手枪", melee: "近战武器", gadget: "装置" }[select[1]]}；战斗中减少武器轮盘操作。`;
  if (n === "unarmed combat") return "切换为空手战斗；没有合适武器或需要非致命近战时使用。";
  if (n === "next weapon" || n === "previous weapon") return `${n === "next weapon" ? "切到下一把" : "切回上一把"}武器；在已装备武器间顺序轮换。`;
  if (n === "reload") return "装填当前武器；交战间隙补充弹匣。";
  if (n.includes("reload secondary")) return "装填武器次级弹药/次级功能；使用具备独立次级装填的武器时操作。";
  if (n.includes("repool ammunition")) return "重新汇集武器弹药；仅对支持该动作的武器在需要时使用。";
  if (n === "holster weapon") return "收起当前武器；进入安全区域、交互或避免误射时使用。";
  if (n === "inspect item") return "检查当前物品；查看武器或物品细节时使用。";
  if (n === "customize weapon") return "打开当前武器的自定义；调整附件或配置时使用。";
  if (n.includes("hold breath")) return "在 ADS 中屏息；远距离瞄准时短暂稳定准星。";
  if (n.includes("underbarrel")) return "触发枪械下挂附件动作；使用榴弹、照明或其他下挂功能时操作。";
  if (n === "change fire mode") return "切换枪械射击模式；在单发、连发等可用模式间按战况选择。";
  if (n.includes("weapon zeroing")) return n.includes("decrease") ? "降低武器归零距离；近距离射击时匹配弹道。" : "提高/自动调整武器归零距离；远距离射击时匹配弹道。";
  if (n.includes("default movement speed")) return n.includes("increase") ? "提高默认移动速度；在保持非冲刺时加快行进。" : "降低默认移动速度；需要更稳或更隐蔽地移动时使用。";
  if (n === "flashlight (toggle)") return "切换个人手电；黑暗区域照明，注意光线会暴露位置。";
  if (n.includes("equip helmet")) return "切换头盔穿戴；进入真空/危险环境前确认已戴好。";
  if (n === "helmet") return "执行头盔相关动作；按游戏当前提示管理头盔状态。";
  if (n.includes("third person")) return "切换第三人称视角；在安全时检查角色周边与装备姿态。";
  if (n.includes("free view camera")) return "按住自由第三人称镜头；观察周边而不让角色转向。";
  if (n === "zoom out" || n === "zoom in") return `${n === "zoom in" ? "放大" : "缩小"}当前第三人称/观察视图；按需调整环境可见范围。`;
  if (n.includes("recall last vehicle")) return "召回最近使用的载具；需要让上次载具返回存储/保险流程时使用。";
  if (n.includes("scoreboard")) return "打开计分板；竞赛或对战模式中查看比分与玩家信息。";
  if (n.includes("port modification")) return "与设备端口改装交互；更换或管理可拆装舰船部件时使用。";
  if (n.includes("force re-spawn")) return "强制重生；EVA/徒步卡住或明确放弃当前位置时使用，注意后果。";
  if (n.includes("while prone")) return `卧倒时向${n.includes("left") ? "左" : "右"}翻滚；在低姿态下躲避或调整掩体位置。`;
  if (n.includes("tractor beam")) return `${n.includes("increase") ? "增大" : "减小"}手持牵引光束距离；搬运货箱、残骸或组件时控制工作位置。`;
  return null;
}

function describeEva(row) {
  const n = byName(row);
  if (n.startsWith("view ")) return `让 EVA 视角向${directionPhrase(n.replace(/^view\s+/i, ""))}查看；零重力作业时观察周边而不改变移动方向。`;
  if (n.includes("view left / right")) return "用轴控制 EVA 视角左右查看；零重力作业中独立观察。";
  if (n.includes("view up / down")) return "用轴控制 EVA 视角上下查看；零重力作业中独立观察。";
  const match = n.match(/^(strafe|roll) (up|down|left|right|forward|backward)$/);
  if (match) return `在 EVA 中${match[1] === "roll" ? "滚转" : "平移"}向${direction(match[2].replace("backward", "back"))}；接近舱门或残骸时细调姿态。`;
  if (n.includes("strafe up / down")) return "用轴控制 EVA 垂直平移；精确贴近作业点。";
  if (n.includes("strafe left / right")) return "用轴控制 EVA 横向平移；精确贴近作业点。";
  if (n.includes("strafe forward / backward")) return "用轴控制 EVA 前后平移；接近或离开目标时细调。";
  if (n === "boost") return "EVA 加速；长距离穿越或快速脱离危险时使用，接近目标前及时减速。";
  if (n.includes("freelook")) return "按住 EVA 自由视角；观察四周而不改变移动输入。";
  if (n.includes("launch from surface")) return "从表面弹射起步；EVA 附着在墙面/舰体后离面移动。";
  if (n.includes("detach from surface")) return "从表面脱离；结束附着后恢复自由 EVA 移动。";
  if (n === "roll left / right") return "用轴控制 EVA 左右滚转；调整身体朝向以贴合入口或作业面。";
  if (n.startsWith("roll")) return `在 EVA 中向${n.includes("left") ? "左" : "右"}滚转；调整身体朝向以贴合入口或作业面。`;
  return null;
}

function describeGround(row) {
  const n = byName(row);
  if (n.startsWith("drive ")) return `让地面载具向${n.includes("forward") ? "前" : "后"}行驶；基础车速输入。`;
  if (n.includes("drive forward / backward")) return "用连续轴控制地面载具前进/倒车；适合油门或扳机输入。";
  if (n.startsWith("turn ")) return `让地面载具向${n.includes("left") ? "左" : "右"}转向；低速通过狭窄区域时使用。`;
  if (n.includes("yaw left / right")) return "用轴控制地面载具左右转向；适合方向盘或摇杆。";
  if (n.startsWith("ground vehicles - pitch")) return `让地面载具${n.includes("up") ? "抬头" : "低头"}；越野或坡地中修正车身姿态。`;
  if (n.includes("pitch up / down")) return "用轴控制地面载具俯仰；越野或坡地中精细修正姿态。";
  return null;
}

function describeSpectator(row) {
  const n = byName(row).replace(/^spectator camera\s*/, "");
  if (n.includes("target (next)")) return "将观战镜头切到下一个目标；观看多人战斗时轮换对象。";
  if (n.includes("target (previous)")) return "将观战镜头切到上一个目标；反向轮换观战对象。";
  if (n.includes("lock target")) return "锁定/解锁观战镜头目标；跟随某对象或恢复自由选择。";
  if (n === "zoom") return "用轴控制观战镜头缩放；按控制器位置调整远近。";
  if (n.includes("zoom in")) return "拉近观战镜头；查看目标细节。";
  if (n.includes("zoom out")) return "拉远观战镜头；获得更宽画面。";
  if (n.includes("rotate yaw")) return "用轴旋转观战镜头左右方向；自由构图时使用。";
  if (n.includes("rotate pitch")) return "用轴旋转观战镜头上下方向；自由构图时使用。";
  if (n.includes("hud")) return "切换观战镜头 HUD；录制或纯观看时按需隐藏信息。";
  if (n.includes("mode (next)")) return "切到下一种观战镜头模式；按需要更换跟随/自由等视图。";
  if (n.includes("mode (previous)")) return "切到上一种观战镜头模式；反向浏览可用视图。";
  return null;
}

function describeSocial(row) {
  const n = byName(row);
  if (n === "re-spawn") return "重生；角色死亡或需要返回重生点后使用。";
  if (n === "exit seat") return "离开当前座位；停稳后下船、换位或处理舱内事务时使用。";
  if (n.includes("accept prompt")) return "接受当前通知提示；确认任务、邀请或系统操作时使用。";
  if (n.includes("decline prompt")) return "拒绝当前通知提示；不接受邀请或操作时使用。";
  if (n.includes("cycle chat lobby")) return "切换聊天频道；在全局、队伍或其他可用频道间移动。";
  if (n.includes("chat window focus")) return "将输入焦点放到聊天窗口；无需鼠标即可立即打字。";
  if (row.group === "Social - Emotes") {
    const emote = {
      forward: "向前指示", left: "向左指示", right: "向右指示", stop: "停止", yes: "同意", no: "否定",
      agree: "赞同", angry: "愤怒", atease: "稍息", attention: "立正", blah: "无所谓", bored: "无聊",
      bow: "鞠躬", burp: "打嗝", cheer: "欢呼", chicken: "胆怯", clap: "鼓掌", come: "过来",
      cry: "哭泣", dance: "跳舞", disagree: "反对", failure: "失败", flex: "展示肌肉", flirt: "调情",
      gasp: "惊讶", gloat: "得意", greet: "问候", laugh: "大笑", launch: "确认起飞", point: "指向",
      rude: "无礼", salute: "敬礼", sit: "坐下", sleep: "睡觉", smell: "闻一闻", taunt: "嘲讽",
      threaten: "威胁", wait: "等待", wave: "挥手", whistle: "吹口哨",
    }[row.actionId.replace(/^emote_(cs_)?/, "")] || row.nameEn;
    return `让角色做“${emote}”表情；用于非语言沟通和社交，不影响载具或战斗状态。`;
  }
  return null;
}

function describeVoice(row) {
  const n = byName(row);
  if (n.includes("vr -")) {
    const action = n.includes("recenter")
      ? "重置设备中心"
      : n.includes("theater")
        ? "切换影院模式"
        : n.includes("visor")
          ? "切换面罩显示"
          : "切换启用状态";
    return `实验性 VR：${action}；仅在启用 VR 时使用，版本更新可能改变行为。`;
  }
  if (n.includes("recenter head")) return "重新居中头部追踪设备；视角基准偏移后恢复正前方。";
  if (n.includes("3rd person camera")) return "切换第三人称镜头的头部追踪；按需要决定头部动作是否带动外部镜头。";
  if (n.includes("cycle through audio")) return "循环语音音频频道；在可用通信频道间切换。";
  return null;
}

function describePit(row) {
  const n = byName(row);
  if (n === "focus") return "将交互焦点放到当前目标；面对多个可交互选项时先选定对象。";
  if (n.includes("interaction mode zoom")) return `${n.includes("in") ? "放大" : "缩小"}交互模式视图；查看密集面板或远处交互点时调整。`;
  const mfd = n.match(/^mfd (left|right|up|down)$/);
  if (mfd) return `把交互焦点移向${direction(mfd[1])}侧 MFD；座舱多屏时直接选择目标显示器。`;
  if (n.includes("inventory orbit")) return "切换库存的环绕镜头模式；检查角色装备外观时调整视角。";
  if (n === "exit") return "退出当前交互/Inner Thought 层级；完成操作后返回上一层。";
  if (n.includes("toggle loot screen")) return "按住打开搜刮界面；面对可搜刮目标时进入物品转移流程。";
  if (n.includes("weapon attachments")) return "切换搜刮界面的武器附件视图；整理附件时查看/处理相关物品。";
  if (n.includes("store all commodities")) return "收纳全部商品；清空背包中可收纳的商品，整理采集或运输所得。";
  if (n.includes("pit category")) {
    const category = {
      "player actions": "角色动作", emotes: "表情", "ship systems": "舰船系统", "flight systems": "飞行系统",
      "vehicle actions": "载具动作", "weapon systems": "武器系统", "remote turret": "远程炮塔",
      "item actions": "物品动作", "weapon selection": "武器选择", "mobiglas actions": "mobiGlas 动作",
      "mining mode actions": "采矿模式动作",
    }[n.replace(/ - pit category$/i, "")] || row.nameEn;
    return `打开 PIT 的“${category}”分类；从轮盘直接进入对应操作集合。`;
  }
  if (n.includes("radial menu")) {
    const category = n.startsWith("weapon select") ? "武器选择" : n.startsWith("throwable") ? "投掷物选择" : "消耗品选择";
    return `打开${category}轮盘；徒步战斗中快速选择该类物品。`;
  }
  return null;
}

function describeCamera(row) {
  const n = byName(row);
  if (n.includes("increase fov")) return "增大高级镜头视野角；拍摄或观察时纳入更多画面。";
  if (n.includes("decrease fov")) return "减小高级镜头视野角；收紧画面并突出主体。";
  if (n.includes("increase dof")) return "提高高级镜头景深设置；拍摄时按需要改变背景虚化效果。";
  if (n.includes("decrease dof")) return "降低高级镜头景深设置；拍摄时减弱背景虚化效果。";
  if (n.includes("reset current view")) return "重置当前高级镜头视图；试验构图后快速回到默认。";
  return null;
}

function describeMisc(row) {
  const n = byName(row);
  if (n.includes("engage quantum drive")) return "按住接合量子驱动；已设航线、处于 NAV 与 Quantum 模式且校准完成后开始量子旅行。";
  if (n === "hail target") return "呼叫当前目标；请求对方回应、服务或通信时使用。";
  if (n.includes("activate ping")) return "按住并释放进行 Ping；扫描周边以寻找目标，但也可能暴露自己的存在。";
  if (n.includes("pitch ladder")) return "循环俯仰梯显示模式；按飞行习惯调整 HUD 姿态参考。";
  if (n === "map") return "打开地图；规划目的地、查看位置或选择量子航线。";
  if (n.includes("headlights")) return n.includes("toggle") ? "切换载具头灯；黑暗环境照明，注意可见性。" : "执行载具头灯动作；用于当前载具支持的头灯控制。";
  if (n.includes("reset (long")) return "按住重置秒表；开始新的计时前清零。";
  if (n.includes("start / pause")) return "短按开始或暂停秒表；为比赛、流程或作业计时。";
  return null;
}

const groupHandlers = {
  "Vehicles - Seats and Operator Modes": describeSeats,
  "Vehicles - Multi Function Displays (MFDs)": describeMfd,
  "Vehicles - Cockpit": () => null,
  "Vehicles - View": describeView,
  "Flight - Movement": describeFlightMovement,
  "Flight - Quantum Travel": describeMisc,
  "Flight - Docking": () => null,
  "Vehicles - Targeting": describeTargeting,
  "Vehicles - Target Cycling": describeTargetCycling,
  "Flight - Target Hailing": describeMisc,
  "Flight - Radar": describeMisc,
  "Vehicles - Scanning": () => null,
  "Vehicles - Mining": describeMining,
  "Vehicles - Salvage": describeSalvage,
  "Turret Movement": describeTurret,
  "Turret Advanced": describeTurret,
  "Vehicles - Weapons": describeWeapons,
  "Vehicles - Missiles": describeMissiles,
  "Vehicles - Shields and Countermeasures": describeDefense,
  "Flight - Power": describePower,
  "Flight - HUD": describeMisc,
  "Lights": describeMisc,
  "Stop Watch": describeMisc,
  "On Foot - All": describeOnFoot,
  "E.V.A - All": describeEva,
  "E.V.A. - Zero-G Traversal": describeEva,
  "Ground Vehicle - General": () => null,
  "Ground Vehicle - Movement": describeGround,
  "Electronic Access - Spectator": describeSpectator,
  "Social - General": describeSocial,
  "Social - Emotes": describeSocial,
  "VOIP, FOIP and Head Tracking": describeVoice,
  "Quick Keys, Interactions, and Inner Thought": describePit,
  "Camera - Advanced Camera Controls": describeCamera,
};

function describeGame(row) {
  const description = exact[row.actionId]
    || groupHandlers[row.group]?.(row)
    || describeMisc(row)
    || describeView(row)
    || describeOnFoot(row)
    || describePower(row)
    || describeFlightMovement(row)
    || describeGround(row);
  if (!description) throw new Error(`No description rule for ${row.id}: ${row.group} / ${row.actionId} / ${row.nameEn}`);
  return description;
}

function sourceRefsFor(row) {
  const refs = ["cig-controls"];
  const group = row.group || "";
  if (/On Foot|E\.V\.A|Quick Keys|Social|VOIP|登机|上电|离机/.test(group)) refs.push("cig-onboarding");
  if (/Flight|Vehicles - Cockpit|Vehicles - View|Ground Vehicle|Turret|Shields|Weapons|Missiles|MFD|起飞|离港|基础飞行|战斗核心|能量|护盾|返航|降落/.test(group)) refs.push("cig-flight");
  if (/Quantum|量子/.test(group)) refs.push("cig-quantum");
  if (/Mining|Scanning|Radar|扫描|态势/.test(group)) refs.push("cig-mining");
  if (/Salvage|回收/.test(group)) refs.push("cig-salvage");
  return [...new Set(refs)];
}

const descriptionsByAction = new Map();
for (const row of seed.gameRows) {
  row.description = describeGame(row);
  row.sourceRefs = sourceRefsFor(row);
  if (row.actionId && row.actionId !== "1372" && !descriptionsByAction.has(row.actionId)) {
    descriptionsByAction.set(row.actionId, row.description);
  }
}

const scenarioOnly = {
  "scenario-1": "激活当前 Inner Thought 交互选项；对准舱门、座椅、物品或面板后执行使用/进入/拾取等操作。",
  "scenario-2": "在交互模式中把焦点向上、下、左、右移动；面对多选项面板时先选中正确控件，再执行确认。",
  "scenario-11": "切换座舱/舰内灯；登舰、离机或舱内作业时按环境照明需要使用。",
  "scenario-12": "切换航行灯；需要让舰船在夜间或交通环境中更容易被辨识时使用。",
  "scenario-18": "切换解耦飞行；解耦后松开输入仍保留惯性，适合漂移机动但需要主动制动。",
  "scenario-23": "将速度限制器重置到 SCM 默认值；从进近低速设置返回常规机动速度时使用。",
  "scenario-24": "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。",
  "scenario-29": "用连续轴控制舰船滚转；适合摇杆主轴的精细姿态操控。",
  "scenario-35": "触发加力/Boost；短时提升推进器响应和加速，用于脱离或快速机动。",
  "scenario-38": "将速度限制器重置到 SCM 默认值；从进近低速设置返回常规机动速度时使用。",
  "scenario-39": "切换速度限制器；进近时限制最高速度，避免小输入导致过冲。",
  "scenario-40": "使舰船匹配当前目标的速度；编队、接近或稳定跟随目标时减少手动相对速度修正。",
  "scenario-60": "循环舰船主模式；在 NAV 与 SCM 等模式间切换，量子旅行前应确认已进入 NAV。",
  "scenario-61": "循环或明确设定操作模式；在 Flight、Quantum、Mining、Salvage 等舰船工作模式间按任务切换。",
  "scenario-64": "循环全武器的云台模式；按目标运动和个人瞄准习惯选择锁定或解锁。",
  "scenario-77": "将工程资源分配给武器设为最大；准备持续武器输出时优先供能。",
  "scenario-78": "将工程资源分配给护盾设为最大；预期承受火力时优先增强防护。",
  "scenario-79": "将工程资源分配给引擎设为最大；追击、脱离或需要机动性能时优先供能。",
  "scenario-85": "在扫描界面前后切换标签页；采矿/扫描时查看不同信息面板。",
  "scenario-86": "在扫描界面前后翻页；需要浏览同一标签下的更多扫描信息时使用。",
  "scenario-95": "切换聚焦回收光束开火；对准残骸表面开始或停止刮削，持续观察效率与存储。",
  "scenario-96": "切换结构回收的破碎/解体光束；先破碎残骸，再按需要解体为可处理材料。",
};
for (const row of seed.scenarioRows) {
  const base = descriptionsByAction.get(row.actionId) || scenarioOnly[row.id];
  if (!base) throw new Error(`No scenario description rule for ${row.id}: ${row.actionId} / ${row.nameEn}`);
  const chapter = row.group.replace(/^第\s*\d+\s*章:/, "").trim();
  row.description = `${base}此处对应「${chapter}」阶段的操作。`;
  row.sourceRefs = sourceRefsFor(row);
}

seed.referenceCatalog = sourceCatalog;
fs.writeFileSync(dataPath, `window.VKB_PLANNER_SEED = ${JSON.stringify(seed, null, 2)};\n`);
console.log(`Updated ${seed.gameRows.length} game rows and ${seed.scenarioRows.length} scenario rows.`);
