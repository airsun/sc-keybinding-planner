(function () {
  const seed = window.VKB_PLANNER_SEED;
  const storageKey = "sc-dual-vkb-binding-planner:v1";
  const workspaceSchemaVersion = 2;
  const layers = ["base", "shift1", "shift2"];
  const layerLabels = { base: "Base", shift1: "S1", shift2: "S2" };
  const handLabels = { left: "左杆", right: "右杆" };
  const maxProfileNameLength = 32;
  const defaultProfileTemplates = [
    { id: "flight", name: "Flight" },
    { id: "ground", name: "Ground" },
    { id: "combat", name: "Combat" },
    { id: "mining", name: "Mining" },
  ];

  const dom = {
    leftPanel: document.getElementById("leftPanel"),
    rightPanel: document.getElementById("rightPanel"),
    rows: document.getElementById("bindingRows"),
    search: document.getElementById("searchInput"),
    profileSelect: document.getElementById("profileSelect"),
    profileAddBtn: document.getElementById("profileAddBtn"),
    profileDeleteBtn: document.getElementById("profileDeleteBtn"),
    selectedTitle: document.getElementById("selectedTitle"),
    lockBtn: document.getElementById("lockBtn"),
    clearBtn: document.getElementById("clearBtn"),
    noteInput: document.getElementById("noteInput"),
    toggleCodesBtn: document.getElementById("toggleCodesBtn"),
    exportBtn: document.getElementById("exportBtn"),
    importInput: document.getElementById("importInput"),
    codeDialog: document.getElementById("codeDialog"),
    codeDialogKicker: document.getElementById("codeDialogKicker"),
    codeDialogTitle: document.getElementById("codeDialogTitle"),
    codeDialogFields: document.getElementById("codeDialogFields"),
    saveCodeBtn: document.getElementById("saveCodeBtn"),
    copyCodeBtn: document.getElementById("copyCodeBtn"),
    recalcCodeBtn: document.getElementById("recalcCodeBtn"),
    profileDialog: document.getElementById("profileDialog"),
    profileNewName: document.getElementById("profileNewName"),
    profileSourceSelect: document.getElementById("profileSourceSelect"),
    profileCreateBtn: document.getElementById("profileCreateBtn"),
    helpBtn: document.getElementById("helpBtn"),
    helpOverlay: document.getElementById("helpOverlay"),
    helpItems: document.getElementById("helpItems"),
    helpCloseBtn: document.getElementById("helpCloseBtn"),
    hudTooltip: document.getElementById("hudTooltip"),
  };

  const helpTopics = [
    {
      title: "Profile",
      controls: [
        { label: "+", note: "新增 Profile，并选择复制来源。", selector: "#profileAddBtn" },
        { label: "×", note: "删除当前 Profile，会先确认。", selector: "#profileDeleteBtn" },
      ],
    },
    {
      title: "# 编号",
      controls: [
        { label: "#", note: "显示或隐藏两侧摇杆按钮编号。", selector: "#toggleCodesBtn" },
      ],
    },
    {
      title: "导入 / 导出",
      controls: [
        { label: "⇩", note: "导出 workspace JSON。", selector: "#exportBtn" },
        { label: "⇧", note: "导入 workspace JSON。", selector: ".import-button" },
      ],
    },
    {
      title: "清单切换",
      controls: [
        { label: "场景清单", note: "按场景化体会顺序查看。", selector: "#scenarioTab" },
        { label: "游戏顺序", note: "按游戏内 keybinding 顺序查看。", selector: "#gameTab" },
      ],
    },
    {
      title: "筛选",
      controls: [
        { label: "全部", note: "显示所有动作。", selector: "[data-filter='all']" },
        { label: "已绑", note: "只看已绑定动作。", selector: "[data-filter='bound']" },
        { label: "未分", note: "只看未分配动作。", selector: "[data-filter='unbound']" },
        { label: "锁定", note: "只看已锁定动作。", selector: "[data-filter='locked']" },
        { label: "问题", note: "只看冲突或待处理项。", selector: "[data-filter='issue']" },
      ],
    },
    {
      title: "锁定 / 解绑",
      controls: [
        { label: "REL / LCK", note: "同一个锁定按钮的两种状态。", selector: ".card-lock, #lockBtn" },
        { label: "CLR", note: "解绑当前动作。", selector: ".card-clear, #clearBtn" },
      ],
    },
    {
      title: "L/R + Base/S1/S2",
      controls: [
        { label: "L / R", note: "切换左杆或右杆。", selector: ".binding-card.selected .hand-seg button" },
        { label: "Base / S1 / S2", note: "切换基础层或 Shift 层。", selector: ".binding-card.selected .layer-seg button" },
      ],
    },
    {
      title: "点选键位",
      controls: [
        { label: "点选键位", note: "进入待分配状态，然后点左右摇杆按钮完成绑定。", selector: ".binding-card.selected .slot-pill" },
      ],
    },
  ];

  let state = loadState();
  let selectedRowId = state.uiSettings.selectedRowId || null;
  let searchText = "";
  let codeEditTarget = null;
  let helpOpen = false;
  let tooltipTarget = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function seedBindings() {
    const bindings = {};
    for (const binding of seed.defaultBindings) {
      bindings[binding.actionKey] = clone(binding);
    }
    return bindings;
  }

  function slugifyProfileId(value, fallback = "profile") {
    const slug = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug || fallback;
  }

  function uniqueProfileId(baseId, profiles) {
    const base = slugifyProfileId(baseId);
    if (!profiles[base]) return base;
    let index = 2;
    while (profiles[`${base}-${index}`]) index += 1;
    return `${base}-${index}`;
  }

  function normalizeProfileName(value, fallback = "Profile") {
    const name = String(value || "")
      .trim()
      .replace(/\s+/g, " ");
    const normalized = name || fallback;
    return normalized.slice(0, maxProfileNameLength);
  }

  function makeProfile(id, name, bindings = seedBindings(), timestamps = {}) {
    const now = new Date().toISOString();
    return {
      id,
      name: normalizeProfileName(name, id),
      createdAt: timestamps.createdAt || now,
      updatedAt: timestamps.updatedAt || now,
      bindings: clone(bindings || {}),
    };
  }

  function defaultProfiles() {
    const profiles = {};
    const baseBindings = seedBindings();
    for (const profile of defaultProfileTemplates) {
      profiles[profile.id] = makeProfile(profile.id, profile.name, baseBindings);
    }
    return profiles;
  }

  function defaultWorkspace() {
    const profiles = defaultProfiles();
    return normalizeWorkspace({
      schemaVersion: workspaceSchemaVersion,
      activeProfileId: "flight",
      deviceConfig: clone(seed.deviceConfig),
      profiles,
      uiSettings: clone(seed.uiSettings),
    });
  }

  function migrateV1Workspace(data) {
    const name = data.profileName || seed.profileName || "Flight";
    const profiles = {};
    const id = uniqueProfileId(slugifyProfileId(name, "flight"), profiles);
    profiles[id] = makeProfile(id, name, data.bindings || seedBindings());
    return normalizeWorkspace({
      schemaVersion: workspaceSchemaVersion,
      activeProfileId: id,
      deviceConfig: data.deviceConfig || clone(seed.deviceConfig),
      profiles,
      uiSettings: { ...seed.uiSettings, ...(data.uiSettings || {}) },
    });
  }

  function normalizeProfile(profile, fallbackId) {
    const id = slugifyProfileId(profile?.id || fallbackId);
    return makeProfile(
      id,
      profile?.name || id,
      profile?.bindings || {},
      { createdAt: profile?.createdAt, updatedAt: profile?.updatedAt },
    );
  }

  function normalizeWorkspace(data) {
    const sourceProfiles = data?.profiles && typeof data.profiles === "object" ? data.profiles : {};
    const profiles = {};
    for (const [key, profile] of Object.entries(sourceProfiles)) {
      const normalized = normalizeProfile(profile, key);
      const id = uniqueProfileId(normalized.id, profiles);
      profiles[id] = { ...normalized, id };
    }
    if (!Object.keys(profiles).length) {
      Object.assign(profiles, defaultProfiles());
    }
    const activeProfileId = profiles[data?.activeProfileId] ? data.activeProfileId : Object.keys(profiles)[0];
    return {
      schemaVersion: workspaceSchemaVersion,
      activeProfileId,
      deviceConfig: data?.deviceConfig || clone(seed.deviceConfig),
      profiles,
      uiSettings: { ...seed.uiSettings, ...(data?.uiSettings || {}) },
    };
  }

  function parseWorkspacePayload(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid profile schema");
    if (data.schemaVersion === workspaceSchemaVersion && validateWorkspaceShape(data)) {
      return normalizeWorkspace(data);
    }
    if (data.schemaVersion === 1 && validateV1Payload(data)) {
      return migrateV1Workspace(data);
    }
    throw new Error("Invalid profile schema");
  }

  function validateWorkspaceShape(data) {
    const profiles = data?.profiles;
    const hands = data?.deviceConfig?.hands;
    if (!profiles || typeof profiles !== "object") return false;
    if (!hands?.left?.controls || !hands?.right?.controls) return false;
    return Object.values(profiles).some((profile) => (
      profile &&
      typeof profile === "object" &&
      typeof profile.name === "string" &&
      profile.bindings &&
      typeof profile.bindings === "object"
    ));
  }

  function validateV1Payload(data) {
    const hands = data?.deviceConfig?.hands;
    return Boolean(
      data?.bindings &&
      typeof data.bindings === "object" &&
      hands?.left?.controls &&
      hands?.right?.controls,
    );
  }

  function loadState() {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parseWorkspacePayload(parsed);
      } catch (error) {
        console.warn("Ignoring invalid saved state", error);
      }
    }
    return defaultWorkspace();
  }

  function saveState() {
    state.uiSettings.selectedRowId = selectedRowId;
    const profile = activeProfile();
    if (profile) profile.updatedAt = new Date().toISOString();
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function profileList() {
    return Object.values(state.profiles || {});
  }

  function activeProfile() {
    if (!state.profiles || !Object.keys(state.profiles).length) {
      state.profiles = defaultProfiles();
    }
    if (!state.profiles[state.activeProfileId]) {
      state.activeProfileId = Object.keys(state.profiles)[0];
    }
    return state.profiles[state.activeProfileId];
  }

  function activeBindings() {
    const profile = activeProfile();
    profile.bindings = profile.bindings || {};
    return profile.bindings;
  }

  function renderProfileControls() {
    const profiles = profileList();
    const profile = activeProfile();
    dom.profileSelect.replaceChildren();
    for (const item of profiles) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      dom.profileSelect.append(option);
    }
    dom.profileSelect.value = profile.id;
    dom.profileSelect.title = `当前 Profile：${profile.name}`;
    setTooltip(dom.profileSelect, `当前 Profile：${profile.name}`);
    dom.profileDeleteBtn.disabled = false;
    dom.profileDeleteBtn.classList.toggle("is-protected", profiles.length <= 1);
    dom.profileDeleteBtn.title = profiles.length <= 1 ? "至少保留一个 Profile" : "删除当前 Profile";
    setTooltip(dom.profileDeleteBtn, dom.profileDeleteBtn.title);
  }

  function setActiveProfile(profileId) {
    if (!state.profiles?.[profileId] || profileId === state.activeProfileId) return;
    state.activeProfileId = profileId;
    saveState();
    render();
  }

  function openProfileDialog() {
    dom.profileSourceSelect.replaceChildren();
    for (const profile of profileList()) {
      const option = document.createElement("option");
      option.value = profile.id;
      option.textContent = profile.name;
      dom.profileSourceSelect.append(option);
    }
    dom.profileSourceSelect.value = activeProfile().id;
    dom.profileNewName.value = uniqueProfileName("New Profile");
    dom.profileNewName.maxLength = maxProfileNameLength;
    dom.profileDialog.showModal();
    window.requestAnimationFrame(() => {
      dom.profileNewName.focus();
      dom.profileNewName.select();
    });
  }

  function createProfileFromDialog() {
    const rawName = dom.profileNewName.value;
    if (!rawName.trim()) {
      showToast("Profile 名称不能为空。", { tone: "warn" });
      return;
    }
    const source = state.profiles[dom.profileSourceSelect.value] || activeProfile();
    const name = uniqueProfileName(rawName);
    const id = uniqueProfileId(slugifyProfileId(name, "profile"), state.profiles);
    state.profiles[id] = makeProfile(id, name, source.bindings);
    state.activeProfileId = id;
    dom.profileDialog.close();
    saveState();
    render();
    showToast(`已创建 Profile：${name}`, { tone: "info" });
  }

  function uniqueProfileName(baseName) {
    const names = new Set(profileList().map((profile) => profile.name));
    const base = normalizeProfileName(baseName, "Profile");
    if (!names.has(base)) return base;
    let index = 2;
    while (true) {
      const suffix = ` ${index}`;
      const candidate = `${base.slice(0, maxProfileNameLength - suffix.length)}${suffix}`;
      if (!names.has(candidate)) return candidate;
      index += 1;
    }
  }

  function requestDeleteActiveProfile() {
    const profiles = profileList();
    if (profiles.length <= 1) {
      showToast("至少保留一个 Profile。", { tone: "warn" });
      return;
    }
    const current = activeProfile();
    showToast(`删除 Profile：${current.name}？`, {
      tone: "warn",
      actionLabel: "删除",
      cancelLabel: "取消",
      duration: 7600,
      onAction: () => deleteActiveProfile(current.id, current.name),
    });
  }

  function deleteActiveProfile(profileId, profileName) {
    const ids = Object.keys(state.profiles || {});
    if (ids.length <= 1 || !state.profiles?.[profileId]) {
      showToast("至少保留一个 Profile。", { tone: "warn" });
      return;
    }
    const currentIndex = ids.indexOf(profileId);
    const fallbackId = ids[currentIndex + 1] || ids[currentIndex - 1] || ids.find((id) => id !== profileId);
    delete state.profiles[profileId];
    state.activeProfileId = fallbackId;
    saveState();
    render();
    showToast(`已删除 Profile：${profileName}`, { tone: "info" });
  }

  function allRows() {
    return [...seed.scenarioRows, ...seed.gameRows];
  }

  function currentRows() {
    return state.uiSettings.activeList === "game" ? seed.gameRows : seed.scenarioRows;
  }

  function findRow(rowId) {
    return allRows().find((row) => row.id === rowId) || null;
  }

  function getControl(hand, controlId) {
    return state.deviceConfig.hands[hand].controls.find((control) => control.id === controlId);
  }

  function getLayerForHand(hand) {
    return state.uiSettings.layers?.[hand] || "base";
  }

  function getTargetHand() {
    const hand = state.uiSettings.targetHand;
    return hand === "left" || hand === "right" ? hand : null;
  }

  function getPendingLayer() {
    const layer = state.uiSettings.pendingLayer;
    return layers.includes(layer) ? layer : null;
  }

  function clearPendingTarget() {
    delete state.uiSettings.targetHand;
    delete state.uiSettings.pendingLayer;
  }

  function setLayerForHand(hand, layer) {
    state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
    state.uiSettings.layers[hand] = layer;
    const selectedRow = selectedRowId ? findRow(selectedRowId) : null;
    if (selectedRow && !bindingForRow(selectedRow)) {
      state.uiSettings.targetHand = hand;
      delete state.uiSettings.pendingLayer;
    }
    saveState();
    render();
  }

  function normalizeSlot(hand, controlId) {
    const control = getControl(hand, controlId);
    if (!control || control.bindable === false) return null;
    if (control.kind === "axis") {
      return { slotType: "axis", hand, control: controlId };
    }
    return {
      slotType: "button",
      hand,
      control: controlId,
      layer: control.shiftCapable ? getLayerForHand(hand) : "base",
    };
  }

  function slotKey(slot) {
    if (!slot) return "";
    if (slot.slotType === "axis") return `${slot.hand}:${slot.control}:axis`;
    return `${slot.hand}:${slot.control}:${slot.layer || "base"}`;
  }

  function sameSlot(a, b) {
    return slotKey(a) === slotKey(b);
  }

  function codeForSlot(slot) {
    if (!slot) return "";
    const control = getControl(slot.hand, slot.control);
    if (!control) return "";
    if (slot.slotType === "axis") return control.axisCode || "--";
    const layer = slot.layer || "base";
    const value = layer === "shift1" ? control.shift1Button : layer === "shift2" ? control.shift2Button : control.baseButton;
    if (value === null || value === undefined || value === "") return "--";
    return typeof value === "number" ? `#${String(value)}` : String(value);
  }

  function compactCodeForSlot(slot) {
    const code = codeForSlot(slot);
    if (!slot || !code) return code;
    const povSuffix = {
      A1_pov_up: "A1↑",
      A1_pov_down: "A1↓",
      A1_pov_left: "A1←",
      A1_pov_right: "A1→",
    };
    if (povSuffix[slot.control]) return povSuffix[slot.control];
    return String(code)
      .replace(/^[LR]_?/, "")
      .replace(/^A1_AXIS_/, "A1")
      .replace(/^AXIS_/, "")
      .replace(/_POV_/g, "")
      .replace(/_UP$/g, "↑")
      .replace(/_DOWN$/g, "↓")
      .replace(/_LEFT$/g, "←")
      .replace(/_RIGHT$/g, "→");
  }

  function slotLabel(slot) {
    if (!slot) return "";
    const control = getControl(slot.hand, slot.control);
    if (!control) return "未知控件";
    if (slot.slotType === "axis") return control.label;
    return control.label;
  }

  function slotText(slot) {
    if (!slot) return "未分配";
    const code = codeForSlot(slot);
    return `${slotLabel(slot)} ${state.uiSettings.showCodes ? code : ""}`.trim();
  }

  function bindingForRow(row) {
    return activeBindings()[row.actionKey] || null;
  }

  function occupancy() {
    const map = new Map();
    for (const binding of Object.values(activeBindings())) {
      if (!binding.enabled || !binding.slot) continue;
      const key = slotKey(binding.slot);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(binding);
    }
    return map;
  }

  function slotStatus(slot, occupancyMap) {
    const control = getControl(slot.hand, slot.control);
    const occupants = occupancyMap.get(slotKey(slot)) || [];
    const code = codeForSlot(slot);
    return {
      occupied: occupants.length > 0,
      locked: occupants.some((item) => item.locked),
      conflict: occupants.length > 1,
      uncalibrated: code === "--",
      current: selectedRowId ? occupants.some((item) => item.actionKey === findRow(selectedRowId)?.actionKey) : false,
      disabled: !control || control.bindable === false,
    };
  }

  function statusForRow(row, occupancyMap) {
    const binding = bindingForRow(row);
    if (!binding || !binding.slot) return { key: "unbound", label: "未分配", tone: "muted" };
    const current = occupancyMap.get(slotKey(binding.slot)) || [];
    if (current.length > 1) return { key: "issue", reason: "conflict", label: "冲突", tone: "red", conflictCount: current.length };
    if (codeForSlot(binding.slot) === "--") return { key: "issue", reason: "uncalibrated", label: "未校准", tone: "red" };
    if (binding.locked) return { key: "locked", label: "已确认", tone: "green" };
    return { key: "bound", label: "已绑定", tone: "green" };
  }

  function makeEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function setTooltip(el, text) {
    if (el && text) el.dataset.tooltip = text;
    return el;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function openHelpOverlay() {
    helpOpen = true;
    hideTooltip();
    dom.helpOverlay.classList.add("open");
    dom.helpOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("help-open");
    renderHelpOverlay();
    window.setTimeout(() => dom.helpCloseBtn.focus({ preventScroll: true }), 0);
  }

  function closeHelpOverlay() {
    helpOpen = false;
    dom.helpOverlay.classList.remove("open");
    dom.helpOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("help-open");
  }

  function renderHelpOverlay() {
    dom.helpItems.replaceChildren();
    let index = 1;
    helpTopics.forEach((topic) => {
      for (const control of topic.controls || []) {
        const number = String(index).padStart(2, "0");
        index += 1;
        dom.helpItems.append(renderHelpItem(number, topic, control));
      }
    });
  }

  function renderHelpItem(number, topic, control) {
    const item = makeEl("article", "help-item");
    item.append(makeEl("span", "help-item-index", number));
    const content = makeEl("div", "help-item-copy");
    content.append(makeEl("h3", "", topic.title));
    const row = makeEl("div", "help-control-row");
    row.append(makeEl("span", "help-sample", control.label));
    row.append(makeEl("span", "help-control-note", control.note));
    content.append(row);
    item.append(content);
    return item;
  }

  function showTooltip(target) {
    if ((helpOpen && !target.closest(".help-board")) || !target?.dataset.tooltip) return;
    tooltipTarget = target;
    dom.hudTooltip.textContent = target.dataset.tooltip;
    dom.hudTooltip.classList.add("show");
    dom.hudTooltip.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(positionTooltip);
  }

  function hideTooltip() {
    tooltipTarget = null;
    dom.hudTooltip.classList.remove("show");
    dom.hudTooltip.setAttribute("aria-hidden", "true");
  }

  function positionTooltip() {
    if (!tooltipTarget || !dom.hudTooltip.classList.contains("show")) return;
    const targetRect = tooltipTarget.getBoundingClientRect();
    const tipRect = dom.hudTooltip.getBoundingClientRect();
    const left = clamp(targetRect.left + targetRect.width / 2 - tipRect.width / 2, 8, window.innerWidth - tipRect.width - 8);
    let top = targetRect.bottom + 10;
    if (top + tipRect.height > window.innerHeight - 8) {
      top = targetRect.top - tipRect.height - 10;
    }
    dom.hudTooltip.style.left = `${left}px`;
    dom.hudTooltip.style.top = `${clamp(top, 8, window.innerHeight - tipRect.height - 8)}px`;
  }

  function toastHost() {
    let host = document.getElementById("toastHost");
    if (!host) {
      host = makeEl("div", "toast-host");
      host.id = "toastHost";
      host.setAttribute("aria-live", "polite");
      document.body.append(host);
    }
    return host;
  }

  function showToast(message, options = {}) {
    const host = toastHost();
    const toast = makeEl("div", `toast ${options.tone || "info"}`.trim());
    toast.setAttribute("role", "status");
    if (options.countdownMs) toast.classList.add("countdown");
    const messageEl = makeEl("div", "toast-message", message);
    let countdownTimer = null;
    if (options.countdownMs) {
      messageEl.append(makeEl("span", "toast-countdown", countdownText(options.countdownMs)));
    }
    toast.append(messageEl);

    let dismissTimer = null;
    const dismiss = () => {
      clearTimeout(dismissTimer);
      clearInterval(countdownTimer);
      toast.classList.remove("show");
      toast.classList.add("hide");
      window.setTimeout(() => toast.remove(), 180);
    };

    if (options.actionLabel || options.secondaryActionLabel || options.cancelLabel) {
      const actions = makeEl("div", "toast-actions");

      if (options.actionLabel && typeof options.onAction === "function") {
        const action = makeToastAction(options.actionLabel, "primary", () => options.onAction());
        actions.append(action);
      }
      if (options.secondaryActionLabel && typeof options.onSecondaryAction === "function") {
        const secondary = makeToastAction(options.secondaryActionLabel, "", () => options.onSecondaryAction());
        actions.append(secondary);
      }
      if (options.cancelLabel) {
        const cancel = makeToastAction(options.cancelLabel, "", () => {
          if (typeof options.onCancel === "function") options.onCancel();
        });
        actions.append(cancel);
      }
      toast.append(actions);

      function makeToastAction(label, tone, handler) {
        const button = makeEl("button", `toast-action ${tone || ""}`.trim(), label);
        button.type = "button";
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          dismiss();
          handler();
        });
        return button;
      }
    }

    if (options.countdownMs) {
      const progress = makeEl("div", "toast-progress");
      progress.style.setProperty("--toast-duration", `${options.countdownMs}ms`);
      toast.append(progress);
      const startedAt = Date.now();
      countdownTimer = window.setInterval(() => {
        const remaining = Math.max(0, options.countdownMs - (Date.now() - startedAt));
        const countdown = toast.querySelector(".toast-countdown");
        if (countdown) countdown.textContent = countdownText(remaining);
      }, 250);
    }

    host.append(toast);
    window.requestAnimationFrame(() => toast.classList.add("show"));
    dismissTimer = window.setTimeout(dismiss, options.countdownMs || options.duration || (options.actionLabel ? 7000 : 2600));
    return dismiss;
  }

  function countdownText(ms) {
    return String(Math.ceil(ms / 1000)).padStart(2, "0");
  }

  function renderStickPanel(hand) {
    const panel = hand === "left" ? dom.leftPanel : dom.rightPanel;
    const title = hand === "left" ? "L 左杆" : "R 右杆";
    const layer = getLayerForHand(hand);
    const controls = state.deviceConfig.hands[hand].controls;
    const occ = occupancy();

    panel.replaceChildren();
    const head = makeEl("div", "stick-head");
    const titleRow = makeEl("div", "stick-title");
    titleRow.append(makeEl("span", "", title));
    titleRow.append(makeEl("span", "tag", state.deviceConfig.hands[hand].deviceId));
    head.append(titleRow);

    const layerSwitch = makeEl("div", "layer-switch");
    for (const item of layers) {
      const button = makeEl("button", item === layer ? "active" : "", layerLabels[item]);
      button.type = "button";
      setTooltip(button, `${handLabels[hand]} · 切换到 ${layerLabels[item]} 层`);
      button.addEventListener("click", () => setLayerForHand(hand, item));
      layerSwitch.append(button);
    }
    head.append(layerSwitch);
    panel.append(head);

    renderTriggerGroup(panel, hand, controls, occ);
    renderAxisGroup(panel, hand, controls, occ);
    renderHatGroup(panel, hand, controls, occ);
    renderBaseGroup(panel, hand, controls, occ);
  }

  function controlsByIds(controls, ids) {
    return ids.map((id) => controls.find((control) => control.id === id)).filter(Boolean);
  }

  function groupWrap(title, tone) {
    const group = makeEl("section", `control-group ${tone || ""}`.trim());
    group.append(makeEl("div", "group-title", title));
    return group;
  }

  function renderTriggerGroup(panel, hand, controls, occ) {
    const group = groupWrap("TRIGGER CHAIN", "group-trigger");
    const grid = makeEl("div", "slot-grid trigger-grid");
    for (const control of controlsByIds(controls, ["trigger_s1", "trigger_s2", "rapid_fire_pull", "rapid_fire_push", "A2"])) {
      const slot = renderSlot(hand, control, occ);
      const triggerClass = {
        trigger_s1: "trigger-trg1",
        trigger_s2: "trigger-trg2",
        rapid_fire_pull: "trigger-rf-pull",
        rapid_fire_push: "trigger-rf-push",
        A2: "trigger-a2",
      }[control.id];
      if (triggerClass) slot.classList.add(triggerClass);
      grid.append(slot);
    }
    group.append(grid);
    panel.append(group);
  }

  function renderHatGroup(panel, hand, controls, occ) {
    const group = groupWrap("HATS", "group-hats");
    const modules = makeEl("div", "hat-strips");
    modules.append(renderHatModule(hand, controls, occ, "A1 POV", {
      up: "A1_pov_up",
      left: "A1_pov_left",
      right: "A1_pov_right",
      down: "A1_pov_down",
    }, "hat-strip-a1"));
    for (const hatName of ["A3", "A4", "C1"]) {
      modules.append(renderHatModule(hand, controls, occ, hatName, {
        up: `${hatName}_up`,
        left: `${hatName}_left`,
        press: `${hatName}_press`,
        right: `${hatName}_right`,
        down: `${hatName}_down`,
      }));
    }
    group.append(modules);
    panel.append(group);
  }

  function renderHatModule(hand, controls, occ, title, positionMap, extraClass = "") {
    const module = makeEl("div", `hat-strip ${extraClass}`.trim());
    module.append(makeEl("div", "hat-strip-title", title));
    const hat = makeEl("div", "hat-strip-grid");
    for (const [position, id] of Object.entries(positionMap)) {
      const control = controls.find((item) => item.id === id);
      const slot = renderSlot(hand, control, occ);
      slot.classList.add(position, "hat-chip");
      hat.append(slot);
    }
    module.append(hat);
    return module;
  }

  function renderAxisGroup(panel, hand, controls, occ) {
    const group = groupWrap("AXIS", "group-axis");
    const deck = makeEl("div", "axis-deck");
    const rows = [
      ["A1 MINI", "axis-row-a1", ["A1_axis_x", "A1_axis_y"]],
      ["6DOF", "axis-row-6dof", ["main_x", "main_y", "main_twist"]],
    ];
    for (const [title, className, ids] of rows) {
      const band = makeEl("div", `axis-band ${className}`);
      band.append(makeEl("div", "axis-band-title", title));
      const grid = makeEl("div", "slot-grid axis-grid");
      for (const control of controlsByIds(controls, ids)) {
        grid.append(renderSlot(hand, control, occ));
      }
      band.append(grid);
      deck.append(band);
    }
    group.append(deck);
    panel.append(group);
  }

  function renderBaseGroup(panel, hand, controls, occ) {
    const group = groupWrap("BASE PANEL", "group-base");

    const board = makeEl("div", "base-panel-board");
    const functionRow = makeEl("div", "slot-grid base-function-row");
    for (const control of controlsByIds(controls, ["base_f2", "base_f1", "base_f3"])) {
      functionRow.append(renderSlot(hand, control, occ));
    }
    board.append(functionRow);

    const lowerRow = makeEl("div", "base-lower-row");

    const swBlock = makeEl("div", "base-subgroup base-sw");
    swBlock.append(makeEl("div", "base-subtitle", "SW"));
    const swGrid = makeEl("div", "slot-grid base-sw-grid");
    for (const control of controlsByIds(controls, ["sw1_up", "sw1_down"])) {
      swGrid.append(renderSlot(hand, control, occ));
    }
    swBlock.append(swGrid);
    lowerRow.append(swBlock);

    const throttleBlock = makeEl("div", "base-subgroup base-throttle");
    throttleBlock.append(makeEl("div", "base-subtitle", "THROTTLE"));
    const throttleGrid = makeEl("div", "slot-grid base-throttle-grid");
    throttleGrid.append(renderSlot(hand, controls.find((item) => item.id === "throttle_axis"), occ));
    throttleBlock.append(throttleGrid);
    lowerRow.append(throttleBlock);

    const encoderBlock = makeEl("div", "base-subgroup base-encoder");
    encoderBlock.append(makeEl("div", "base-subtitle", "ENCODER"));
    const encoderGrid = makeEl("div", "slot-grid base-encoder-grid");
    for (const control of controlsByIds(controls, ["encoder_ccw", "encoder_cw"])) {
      encoderGrid.append(renderSlot(hand, control, occ));
    }
    encoderBlock.append(encoderGrid);
    lowerRow.append(encoderBlock);

    board.append(lowerRow);
    group.append(board);
    panel.append(group);
  }

  function renderSlot(hand, control, occupancyMap) {
    const slot = control.kind === "axis"
      ? { slotType: "axis", hand, control: control.id }
      : { slotType: "button", hand, control: control.id, layer: control.shiftCapable ? getLayerForHand(hand) : "base" };
    const status = slotStatus(slot, occupancyMap);
    const button = makeEl("button", `slot ${control.kind || "button"}`);
    button.type = "button";
    button.dataset.hand = hand;
    button.dataset.control = control.id;
    for (const className of ["occupied", "locked", "conflict", "uncalibrated", "current"]) {
      if (status[className]) button.classList.add(className);
    }
    button.title = `${handLabels[hand]} · ${control.label}`;
    setTooltip(button, `${handLabels[hand]} · ${control.label} · 点击绑定当前动作`);

    const label = makeEl("span", "slot-label", control.label);
    button.append(label);
    if (state.uiSettings.showCodes) {
      button.append(makeEl("span", "slot-code", compactCodeForSlot(slot)));
    }
    button.append(renderOccupancyBars(hand, control, occupancyMap));

    const edit = makeEl("button", "code-edit");
    edit.type = "button";
    edit.title = "编辑编码";
    edit.setAttribute("aria-label", "编辑编码");
    setTooltip(edit, "编辑这个键位的硬件编号");
    edit.addEventListener("click", (event) => {
      event.stopPropagation();
      openCodeDialog(hand, control.id);
    });
    button.append(edit);

    button.addEventListener("click", () => bindSelectedToSlot(hand, control.id));
    return button;
  }

  function renderOccupancyBars(hand, control, occupancyMap) {
    const bars = makeEl("div", "occupancy");
    for (const layer of layers) {
      const span = document.createElement("span");
      if (control.kind === "axis" && layer !== "base") {
        span.style.opacity = "0.18";
      }
      if (!control.shiftCapable && layer !== "base") {
        span.style.opacity = "0.18";
      }
      const slot = control.kind === "axis"
        ? { slotType: "axis", hand, control: control.id }
        : { slotType: "button", hand, control: control.id, layer: control.shiftCapable ? layer : "base" };
      const occupants = occupancyMap.get(slotKey(slot)) || [];
      if (occupants.length) span.classList.add("on");
      if (occupants.some((item) => item.locked)) span.classList.add("locked");
      bars.append(span);
    }
    return bars;
  }

  function renderRows() {
    const rows = currentRows();
    const occ = occupancy();
    const filter = state.uiSettings.statusFilter || "all";
    const query = searchText.trim().toLowerCase();
    dom.rows.replaceChildren();

    let currentGroup = "";
    let visibleCount = 0;
    for (const row of rows) {
      const status = statusForRow(row, occ);
      if (filter !== "all") {
        if (filter === "bound" && status.key !== "bound" && status.key !== "locked") continue;
        if (filter === "unbound" && status.key !== "unbound") continue;
        if (filter === "locked" && status.key !== "locked") continue;
        if (filter === "issue" && status.key !== "issue") continue;
      }
      const haystack = `${row.nameZh} ${row.nameEn} ${row.description} ${row.suggestedInput} ${row.actionId}`.toLowerCase();
      if (query && !haystack.includes(query)) continue;

      if (row.group !== currentGroup) {
        currentGroup = row.group;
        const groupRow = makeEl("div", "card-group");
        groupRow.innerHTML = `<span>${escapeHtml(currentGroup)}</span>`;
        dom.rows.append(groupRow);
      }
      dom.rows.append(renderBindingCard(row, status));
      visibleCount += 1;
    }

    if (!visibleCount) {
      dom.rows.append(makeEl("div", "empty-card", "没有匹配的动作。"));
    }
  }

  function renderBindingCard(row, status) {
    const binding = bindingForRow(row);
    const card = document.createElement("article");
    card.className = "binding-card";
    card.dataset.rowId = row.id;
    if (row.id === selectedRowId) card.classList.add("selected");
    if (binding?.locked) card.classList.add("locked-card");
    if (status.reason === "conflict") card.classList.add("has-conflict");
    card.addEventListener("click", () => focusBinding(row));

    const actionCell = makeEl("div", "card-action");
    const primary = row.nameZh || row.nameEn || row.actionId || "未命名动作";
    const secondary = row.nameZh && row.nameEn ? row.nameEn : row.actionId || row.activationMode || "";
    const titleRow = makeEl("div", "action-title-row");
    titleRow.append(makeEl("div", "action-name", primary));
    if (binding) titleRow.append(renderCardNotePopover(row, binding));
    actionCell.append(titleRow);
    if (secondary) actionCell.append(makeEl("div", "action-sub", secondary));
    if (row.subgroup) actionCell.append(makeEl("div", "action-sub", row.subgroup));

    const desc = makeEl("div", "card-description");
    desc.append(makeEl("span", "card-description-text", row.description || row.actionText || row.suggestedInput || "—"));

    const meta = renderBindingConsole(row, binding, status);

    card.append(actionCell, desc, meta);
    return card;
  }

  function renderBindingConsole(row, binding, status) {
    const consoleEl = makeEl("div", "binding-console");
    if (binding?.slot && status.reason === "conflict") consoleEl.classList.add("has-conflict");
    const statusRail = makeEl("div", `status-rail ${status.tone || "muted"}`.trim());
    statusRail.title = status.label;
    if (binding?.note) statusRail.classList.add("noted");
    consoleEl.append(statusRail);

    if (binding?.slot && status.reason === "conflict") {
      consoleEl.append(renderConflictMiniCard(binding, status));
    }

    const controls = makeEl("div", "binding-controls");
    controls.append(renderHandSegment(row, binding));
    controls.append(renderLayerSegment(row, binding));
    controls.append(renderSlotButton(row, binding, status));
    controls.append(renderCardClearButton(row, binding));
    controls.append(renderCardLockButton(row, binding));
    consoleEl.append(controls);
    return consoleEl;
  }

  function renderConflictMiniCard(binding, status) {
    const slot = binding.slot;
    const conflicts = conflictingBindingsFor(binding);
    const removable = conflicts.filter((item) => !item.locked);
    const locked = conflicts.filter((item) => item.locked);
    const card = makeEl("div", "conflict-mini-card");
    card.title = conflicts.length
      ? `冲突：${conflicts.map((item) => displayNameForAction(item.actionKey)).join("、")}`
      : "当前键位被多个动作占用";
    const meta = makeEl("div", "conflict-mini-meta");
    const side = handLabels[slot.hand] || slot.hand;
    const layer = slot.slotType === "axis" ? "Axis" : layerLabels[slot.layer || "base"];
    meta.append(makeEl("span", "conflict-mini-tag", "冲突键位"));
    meta.append(makeEl("span", "conflict-mini-count", `x${status.conflictCount || 2}`));
    const main = makeEl("div", "conflict-mini-main", slotLabel(slot));
    const code = makeEl("div", "conflict-mini-code", `${side} · ${layer} · ${state.uiSettings.showCodes ? compactCodeForSlot(slot) : codeForSlot(slot)}`);
    const action = makeEl("button", "conflict-mini-action", removable.length ? "解绑其它" : "锁定中");
    action.type = "button";
    action.disabled = !removable.length;
    action.title = removable.length
      ? `解绑 ${removable.length} 个未锁定冲突绑定`
      : "其它冲突绑定已锁定，需先解除锁定";
    if (locked.length) action.classList.add("has-locked");
    action.addEventListener("click", (event) => {
      event.stopPropagation();
      resolveBindingConflict(binding);
    });
    card.append(meta, main, code, action);
    return card;
  }

  function conflictingBindingsFor(binding) {
    if (!binding?.slot) return [];
    return (occupancy().get(slotKey(binding.slot)) || []).filter((item) => item.actionKey !== binding.actionKey);
  }

  function resolveBindingConflict(binding) {
    const conflicts = conflictingBindingsFor(binding);
    const removable = conflicts.filter((item) => !item.locked);
    const locked = conflicts.filter((item) => item.locked);
    if (!removable.length) {
      showToast("其它冲突绑定已锁定，先解除锁定再解绑。", { tone: "warn" });
      return;
    }
    const bindings = activeBindings();
    for (const item of removable) {
      delete bindings[item.actionKey];
    }
    const row = allRows().find((item) => item.actionKey === binding.actionKey);
    if (row) selectedRowId = row.id;
    saveState();
    render();
    if (locked.length) showToast("已解绑未锁定冲突；仍有锁定冲突需要手动解除。", { tone: "warn" });
  }

  function renderHandSegment(row, binding) {
    const segment = makeEl("div", "seg hand-seg");
    const targetHand = getTargetHand();
    for (const hand of ["left", "right"]) {
      const active = binding?.slot?.hand === hand || (!binding?.slot && row.id === selectedRowId && targetHand === hand);
      const button = makeEl("button", active ? "active" : "", hand === "left" ? "L" : "R");
      button.type = "button";
      button.title = handLabels[hand];
      setTooltip(button, `将动作目标切到${handLabels[hand]}`);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        setBindingHand(row, hand);
      });
      segment.append(button);
    }
    return segment;
  }

  function renderLayerSegment(row, binding) {
    const segment = makeEl("div", "seg layer-seg");
    const control = binding?.slot ? getControl(binding.slot.hand, binding.slot.control) : null;
    const targetHand = binding?.slot?.hand || getTargetHand();
    const targetLayer = targetHand ? getLayerForHand(targetHand) : null;
    const pendingLayer = getPendingLayer();
    for (const layer of layers) {
      const isAxis = binding?.slot?.slotType === "axis";
      const disabled = isAxis || (control && !control.shiftCapable && layer !== "base");
      const active = binding?.slot?.slotType === "axis"
        ? layer === "base"
        : binding?.slot
          ? (binding.slot.layer || "base") === layer
          : row.id === selectedRowId && (targetHand ? targetLayer === layer : pendingLayer === layer);
      const button = makeEl("button", active ? "active" : "", layerLabels[layer]);
      button.type = "button";
      button.disabled = disabled;
      button.title = isAxis ? "Axis 不使用 Shift 层" : layerLabels[layer];
      setTooltip(button, isAxis ? "Axis 不使用 Shift 层" : `将动作目标切到 ${layerLabels[layer]} 层`);
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        setBindingLayer(row, layer);
      });
      segment.append(button);
    }
    return segment;
  }

  function renderSlotButton(row, binding, status) {
    const button = makeEl("div", `slot-pill ${status.tone || "muted"}`.trim());
    button.role = "button";
    button.tabIndex = 0;
    button.title = binding?.slot ? "选中并在两侧键位区定位" : "选中后从左右键位区点选";
    setTooltip(button, binding?.slot ? "定位当前绑定，左右摇杆区会同步高亮" : "进入待分配状态，然后点左右摇杆按钮绑定");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      focusBinding(row);
    });
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      focusBinding(row);
    });

    const light = makeEl("span", `status-dot-ui ${status.tone || "muted"}`.trim());
    const targetHand = getTargetHand();
    const targetLayer = targetHand ? getLayerForHand(targetHand) : null;
    const pendingLayer = getPendingLayer();
    const label = makeEl("span", "slot-pill-label", binding?.slot ? slotLabel(binding.slot) : "点选键位");
    let unboundTarget = status.label;
    if (row.id === selectedRowId) {
      if (targetHand) {
        unboundTarget = `${targetHand === "left" ? "L" : "R"} · ${layerLabels[targetLayer]}`;
      } else if (pendingLayer) {
        unboundTarget = `${layerLabels[pendingLayer]} · 待L/R`;
      } else {
        unboundTarget = "待点选";
      }
    }
    const code = makeEl("span", "slot-pill-code", binding?.slot && state.uiSettings.showCodes ? compactCodeForSlot(binding.slot) : unboundTarget);
    button.append(light, label, code);
    return button;
  }

  function renderCardNotePopover(row, binding) {
    const popover = makeEl("div", binding.note ? "card-note-popover has-note" : "card-note-popover");
    const toggle = makeEl("button", "card-note-icon", "!");
    toggle.type = "button";
    toggle.title = binding.note ? "查看或编辑备注" : "添加备注";
    toggle.setAttribute("aria-label", toggle.title);
    toggle.setAttribute("aria-expanded", "false");
    setTooltip(toggle, binding.note ? "查看或编辑备注" : "添加备注");
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = popover.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        input.focus();
        input.select();
      }
    });

    const panel = makeEl("div", "card-note-panel");
    panel.addEventListener("click", (event) => event.stopPropagation());
    panel.addEventListener("pointerdown", (event) => event.stopPropagation());
    const input = makeEl("input", "card-note-input");
    input.type = "text";
    input.value = binding.note || "";
    input.placeholder = "备注";
    input.title = "编辑备注";
    input.addEventListener("input", (event) => {
      updateRowNote(row, event.target.value, { syncSelection: row.id === selectedRowId });
      popover.classList.toggle("has-note", Boolean(event.target.value.trim()));
    });
    input.addEventListener("change", (event) => {
      updateRowNote(row, event.target.value, { syncSelection: row.id === selectedRowId, renderRowsAfter: true });
    });
    panel.append(input);
    popover.append(toggle, panel);
    return popover;
  }

  function renderCardLockButton(row, binding) {
    const button = makeEl("button", binding?.locked ? "card-lock active" : "card-lock");
    button.type = "button";
    button.disabled = !binding;
    setLockButtonVisual(button, Boolean(binding?.locked), binding?.locked ? "解除锁定" : "锁定当前绑定");
    setTooltip(button, binding?.locked ? "解除这个动作的锁定" : "锁定这个动作，防止误改");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleRowLock(row);
    });
    return button;
  }

  function renderCardClearButton(row, binding) {
    const button = makeEl("button", "card-clear");
    button.type = "button";
    button.disabled = !binding;
    button.title = binding?.locked ? "先解除锁定再解绑" : "解绑当前绑定";
    button.setAttribute("aria-label", button.title);
    setTooltip(button, button.title);
    button.append(makeEl("span", "clear-icon", "CLR"), makeEl("span", "sr-only", "解绑"));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      clearRowBinding(row);
    });
    return button;
  }

  function setLockButtonVisual(button, locked, title) {
    const icon = makeEl("span", locked ? "lock-text locked" : "lock-text", locked ? "LCK" : "REL");
    icon.setAttribute("aria-hidden", "true");
    const text = makeEl("span", "sr-only", locked ? "解除锁定" : "锁定");
    button.replaceChildren(icon, text);
    button.classList.toggle("active", locked);
    button.title = title || (locked ? "解除锁定" : "锁定当前绑定");
    button.setAttribute("aria-label", locked ? "解除锁定" : "锁定当前绑定");
    button.setAttribute("aria-pressed", String(locked));
    setTooltip(button, button.title);
  }

  function metaField(label, value, tone) {
    const field = makeEl("div", "meta-field");
    field.append(makeEl("span", "meta-label", label));
    field.append(statusTag(value, tone));
    return field;
  }

  function statusTag(text, tone) {
    return makeEl("span", `tag ${tone || ""}`.trim(), text);
  }

  function selectRow(rowId) {
    selectedRowId = rowId;
    saveState();
    render();
  }

  function focusBinding(row) {
    selectedRowId = row.id;
    const binding = bindingForRow(row);
    if (binding?.slot?.slotType === "button") {
      state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
      state.uiSettings.targetHand = binding.slot.hand;
      state.uiSettings.layers[binding.slot.hand] = binding.slot.layer || "base";
    } else if (binding?.slot?.hand) {
      state.uiSettings.targetHand = binding.slot.hand;
    } else {
      clearPendingTarget();
    }
    saveState();
    render();
  }

  function setBindingHand(row, hand) {
    selectedRowId = row.id;
    const binding = bindingForRow(row);
    if (!binding?.slot) {
      state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
      state.uiSettings.targetHand = hand;
      const pendingLayer = getPendingLayer();
      if (pendingLayer) {
        state.uiSettings.layers[hand] = pendingLayer;
        delete state.uiSettings.pendingLayer;
      }
      state.uiSettings.layers[hand] = state.uiSettings.layers[hand] || "base";
      saveState();
      render();
      return;
    }
    if (binding.slot.hand === hand) {
      focusBinding(row);
      return;
    }
    const control = getControl(hand, binding.slot.control);
    if (!control || control.bindable === false) {
      showToast("另一侧没有对应的可绑定控件。", { tone: "warn" });
      return;
    }
    const slot = { ...binding.slot, hand };
    if (slot.slotType === "button" && !control.shiftCapable) slot.layer = "base";
    setBindingSlot(row, slot, { allowConflict: true });
  }

  function setBindingLayer(row, layer) {
    selectedRowId = row.id;
    const binding = bindingForRow(row);
    if (!binding?.slot) {
      const targetHand = getTargetHand();
      state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
      if (targetHand) {
        state.uiSettings.layers[targetHand] = layer;
        delete state.uiSettings.pendingLayer;
      } else {
        state.uiSettings.pendingLayer = layer;
      }
      saveState();
      render();
      return;
    }
    if (binding.slot.slotType === "axis") {
      focusBinding(row);
      return;
    }
    if ((binding.slot.layer || "base") === layer) {
      focusBinding(row);
      return;
    }
    const control = getControl(binding.slot.hand, binding.slot.control);
    if (!control?.shiftCapable && layer !== "base") return;
    setBindingSlot(row, { ...binding.slot, layer }, { allowConflict: true });
  }

  function setBindingSlot(row, slot, options = {}) {
    const bindings = activeBindings();
    const existing = bindings[row.actionKey];
    const undoSnapshot = options.allowConflict
      ? {
        profileId: state.activeProfileId,
        rowId: row.id,
        actionKey: row.actionKey,
        previousBinding: existing ? clone(existing) : null,
        previousLayers: clone(state.uiSettings.layers || { left: "base", right: "base" }),
        nextSlot: clone(slot),
      }
      : null;
    if (existing?.locked && !sameSlot(existing.slot, slot)) {
      showToast("这个绑定已锁定，先解除锁定再修改。", {
        tone: "warn",
        actionLabel: "解锁并修改",
        cancelLabel: "取消",
        duration: 7600,
        onAction: () => unlockAndSetBindingSlot(row, slot, options),
      });
      return false;
    }
    if (existing?.slot && sameSlot(existing.slot, slot)) {
      focusBinding(row);
      return true;
    }

    const occ = occupancy();
    const occupants = (occ.get(slotKey(slot)) || []).filter((item) => item.actionKey !== row.actionKey);
    if (occupants.some((item) => item.locked)) {
      showToast("这个键位已经锁定，先解除锁定再修改。", { tone: "warn" });
      return false;
    }
    if (occupants.length && !options.replaceConflicts && !options.allowConflict) {
      const names = occupants.map((item) => displayNameForAction(item.actionKey)).join("、");
      showToast(`该键位已被 ${names} 占用。`, {
        tone: "warn",
        actionLabel: "替换",
        cancelLabel: "取消",
        duration: 7200,
        onAction: () => setBindingSlot(row, slot, { replaceConflicts: true }),
      });
      return false;
    }
    if (occupants.length && options.replaceConflicts) {
      for (const item of occupants) {
        delete bindings[item.actionKey];
      }
    }

    bindings[row.actionKey] = {
      actionKey: row.actionKey,
      slot,
      enabled: true,
      locked: existing?.locked || false,
      note: existing?.note || "",
    };
    selectedRowId = row.id;
    if (slot.slotType === "button") {
      state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
      state.uiSettings.targetHand = slot.hand;
      state.uiSettings.layers[slot.hand] = slot.layer || "base";
      delete state.uiSettings.pendingLayer;
    }
    saveState();
    render();
    if (occupants.length && options.allowConflict) {
      showConflictToast(row, slot, undoSnapshot);
    }
    return true;
  }

  function unlockAndSetBindingSlot(row, slot, options = {}) {
    const binding = activeBindings()[row.actionKey];
    if (!binding) return;
    binding.locked = false;
    setBindingSlot(row, slot, { ...options, allowConflict: true });
  }

  function showConflictToast(row, slot, undoSnapshot) {
    const layer = slot.slotType === "axis" ? "Axis" : layerLabels[slot.layer || "base"];
    showToast(`CONFLICT · ${handLabels[slot.hand]} ${slotLabel(slot)} ${layer}`, {
      tone: "warn",
      countdownMs: 8000,
      actionLabel: "撤销",
      secondaryActionLabel: "查看",
      onAction: () => undoBindingChange(undoSnapshot),
      onSecondaryAction: () => revealBinding(row.id),
    });
  }

  function undoBindingChange(snapshot) {
    const profile = state.profiles?.[snapshot.profileId];
    if (!profile) {
      showToast("Profile 已变化，无法撤销这次设定。", { tone: "warn" });
      return;
    }
    profile.bindings = profile.bindings || {};
    const current = profile.bindings[snapshot.actionKey];
    if (!current?.slot || !sameSlot(current.slot, snapshot.nextSlot)) {
      showToast("该绑定已经再次变化，撤销已跳过。", { tone: "warn" });
      return;
    }
    if (snapshot.previousBinding) {
      profile.bindings[snapshot.actionKey] = clone(snapshot.previousBinding);
    } else {
      delete profile.bindings[snapshot.actionKey];
    }
    state.activeProfileId = snapshot.profileId;
    state.uiSettings.layers = clone(snapshot.previousLayers);
    selectedRowId = snapshot.rowId;
    saveState();
    render();
    showToast("已撤销刚才设定。", { tone: "info" });
  }

  function revealBinding(rowId) {
    selectedRowId = rowId;
    saveState();
    render();
    window.setTimeout(() => {
      const card = dom.rows.querySelector(`[data-row-id="${rowId}"]`);
      card?.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 0);
  }

  function renderSelectionBar() {
    const row = findRow(selectedRowId);
    if (!row) {
      dom.selectedTitle.textContent = "选择一行动作，然后点击左右摇杆键位";
      dom.lockBtn.disabled = true;
      setLockButtonVisual(dom.lockBtn, false, "先选择动作");
      dom.clearBtn.disabled = true;
      dom.clearBtn.title = "先选择动作";
      dom.noteInput.disabled = true;
      dom.noteInput.value = "";
      return;
    }
    const binding = bindingForRow(row);
    dom.selectedTitle.textContent = `${row.nameZh || row.nameEn} ${binding?.slot ? "→ " + handLabels[binding.slot.hand] + " · " + slotText(binding.slot) : "→ 未分配"}`;
    dom.lockBtn.disabled = !binding;
    dom.clearBtn.disabled = !binding;
    dom.clearBtn.title = binding ? "解绑当前动作" : "先绑定键位";
    dom.noteInput.disabled = !binding;
    setLockButtonVisual(dom.lockBtn, Boolean(binding?.locked), binding?.locked ? "解除锁定" : "锁定当前绑定");
    dom.noteInput.value = binding?.note || "";
  }

  function bindSelectedToSlot(hand, controlId) {
    const row = findRow(selectedRowId);
    if (!row) {
      showToast("先选择一行动作。", { tone: "warn" });
      return;
    }
    const pendingLayer = getPendingLayer();
    if (pendingLayer && !bindingForRow(row)) {
      state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
      state.uiSettings.layers[hand] = pendingLayer;
      state.uiSettings.targetHand = hand;
      delete state.uiSettings.pendingLayer;
    }
    const slot = normalizeSlot(hand, controlId);
    if (!slot) return;
    setBindingSlot(row, slot, { allowConflict: true });
  }

  function displayNameForAction(actionKey) {
    const row = allRows().find((item) => item.actionKey === actionKey);
    return row ? row.nameZh || row.nameEn || actionKey : actionKey;
  }

  function toggleLock() {
    const row = findRow(selectedRowId);
    if (!row) return;
    const binding = activeBindings()[row.actionKey];
    if (!binding) return;
    binding.locked = !binding.locked;
    saveState();
    render();
  }

  function toggleRowLock(row) {
    selectedRowId = row.id;
    const binding = activeBindings()[row.actionKey];
    if (!binding) {
      saveState();
      render();
      return;
    }
    binding.locked = !binding.locked;
    focusBinding(row);
  }

  function clearBinding() {
    const row = findRow(selectedRowId);
    if (!row) return;
    clearRowBinding(row);
  }

  function clearRowBinding(row) {
    selectedRowId = row.id;
    const bindings = activeBindings();
    const binding = bindings[row.actionKey];
    if (!binding) {
      saveState();
      render();
      return false;
    }
    if (binding.locked) {
      saveState();
      render();
      showToast("这个绑定已锁定，先解除锁定再解绑。", { tone: "warn" });
      return false;
    }
    delete bindings[row.actionKey];
    clearPendingTarget();
    saveState();
    render();
    return true;
  }

  function updateNote(value, options = {}) {
    const row = findRow(selectedRowId);
    if (!row) return;
    updateRowNote(row, value, options);
  }

  function updateRowNote(row, value, options = {}) {
    const binding = activeBindings()[row.actionKey];
    if (!binding) return;
    binding.note = value;
    saveState();
    if (options.syncSelection && row.id === selectedRowId) {
      dom.noteInput.value = value;
    }
    if (options.renderRowsAfter) {
      renderRows();
    }
  }

  function openCodeDialog(hand, controlId) {
    const control = getControl(hand, controlId);
    codeEditTarget = { hand, controlId };
    dom.codeDialogKicker.textContent = `${handLabels[hand]} CODE`;
    dom.codeDialogTitle.textContent = control.label;
    dom.codeDialogFields.replaceChildren();

    if (control.kind === "axis") {
      dom.codeDialogFields.append(field("axisCode", "Axis Code", control.axisCode || ""));
      dom.recalcCodeBtn.disabled = true;
    } else {
      dom.codeDialogFields.append(field("baseButton", "Base 编号", valueOrEmpty(control.baseButton)));
      if (control.shiftCapable) {
        dom.codeDialogFields.append(field("shift1Button", "Shift1 编号", valueOrEmpty(control.shift1Button)));
        dom.codeDialogFields.append(field("shift2Button", "Shift2 编号", valueOrEmpty(control.shift2Button)));
        dom.recalcCodeBtn.disabled = false;
      } else {
        dom.recalcCodeBtn.disabled = true;
      }
    }
    dom.codeDialog.showModal();
  }

  function field(name, labelText, value) {
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.name = name;
    input.value = value;
    label.append(input);
    return label;
  }

  function valueOrEmpty(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function saveCodeDialog() {
    if (!codeEditTarget) return;
    const control = getControl(codeEditTarget.hand, codeEditTarget.controlId);
    const fields = new FormDataLike(dom.codeDialogFields);
    if (control.kind === "axis") {
      control.axisCode = fields.axisCode || "";
    } else {
      control.baseButton = parseOptionalCode(fields.baseButton);
      if (control.shiftCapable) {
        control.shift1Button = parseOptionalCode(fields.shift1Button);
        control.shift2Button = parseOptionalCode(fields.shift2Button);
      }
    }
    dom.codeDialog.close();
    saveState();
    render();
    showToast("键位编号已更新；这是全局硬件设置，所有 Profile 共用。", { tone: "info" });
  }

  function FormDataLike(container) {
    const data = {};
    for (const input of container.querySelectorAll("input")) {
      data[input.name] = input.value.trim();
    }
    return data;
  }

  function parseOptionalCode(value) {
    if (value === "") return null;
    const parsed = Number.parseInt(value, 10);
    return String(parsed) === value ? parsed : value;
  }

  function copyCodeToOtherSide() {
    if (!codeEditTarget) return;
    const other = codeEditTarget.hand === "left" ? "right" : "left";
    const source = getControl(codeEditTarget.hand, codeEditTarget.controlId);
    const target = getControl(other, codeEditTarget.controlId);
    if (!source || !target) return;
    for (const key of ["baseButton", "shift1Button", "shift2Button", "axisCode"]) {
      if (key in source) target[key] = source[key];
    }
    saveState();
    render();
    showToast("已复制到另一侧；键位编号为所有 Profile 共用。", { tone: "info" });
  }

  function recalcShiftCodes() {
    if (!codeEditTarget) return;
    const control = getControl(codeEditTarget.hand, codeEditTarget.controlId);
    if (!control || !control.shiftCapable) return;
    const fields = new FormDataLike(dom.codeDialogFields);
    const baseButton = parseOptionalCode(fields.baseButton);
    if (typeof baseButton !== "number") return;
    control.baseButton = baseButton;
    control.shift1Button = baseButton + state.deviceConfig.shift.shift1.offset;
    control.shift2Button = baseButton + state.deviceConfig.shift.shift2.offset;
    for (const input of dom.codeDialogFields.querySelectorAll("input")) {
      if (input.name === "shift1Button") input.value = String(control.shift1Button);
      if (input.name === "shift2Button") input.value = String(control.shift2Button);
    }
    saveState();
    render();
    showToast("Shift 编号已按全局 offset 重算。", { tone: "info" });
  }

  function exportProfile() {
    const data = {
      ...state,
      schemaVersion: workspaceSchemaVersion,
      updatedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sc-dual-vkb-binding-workspace.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Workspace JSON 已导出。", { tone: "info" });
  }

  function importProfile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        const nextState = parseWorkspacePayload(data);
        showToast("导入会覆盖当前所有 Profile 和全局键位编号。", {
          tone: "warn",
          actionLabel: "覆盖",
          cancelLabel: "取消",
          duration: 8200,
          onAction: () => {
            state = nextState;
            selectedRowId = findRow(state.uiSettings.selectedRowId)?.id || seed.scenarioRows[0]?.id || seed.gameRows[0]?.id || null;
            saveState();
            render();
            showToast("Workspace 已导入。", { tone: "info" });
          },
        });
      } catch (error) {
        showToast(`导入失败：${error.message}`, { tone: "error", duration: 4200 });
      } finally {
        dom.importInput.value = "";
      }
    };
    reader.onerror = () => {
      showToast("导入失败：无法读取 JSON 文件。", { tone: "error", duration: 4200 });
      dom.importInput.value = "";
    };
    reader.readAsText(file);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    })[char]);
  }

  function setActiveList(listType) {
    state.uiSettings.activeList = listType;
    saveState();
    render();
  }

  function setStatusFilter(filter) {
    state.uiSettings.statusFilter = filter;
    saveState();
    render();
  }

  function renderTabsAndFilters() {
    for (const button of document.querySelectorAll(".tab-button")) {
      button.classList.toggle("active", button.dataset.list === state.uiSettings.activeList);
    }
    for (const button of document.querySelectorAll(".filter-button")) {
      button.classList.toggle("active", button.dataset.filter === (state.uiSettings.statusFilter || "all"));
    }
    dom.toggleCodesBtn.classList.toggle("active", Boolean(state.uiSettings.showCodes));
    dom.toggleCodesBtn.setAttribute("aria-pressed", String(Boolean(state.uiSettings.showCodes)));
    dom.toggleCodesBtn.title = state.uiSettings.showCodes ? "隐藏编号" : "显示编号";
    setTooltip(dom.toggleCodesBtn, state.uiSettings.showCodes ? "隐藏左右摇杆按钮编号" : "显示左右摇杆按钮编号");
  }

  function render() {
    renderProfileControls();
    renderTabsAndFilters();
    renderStickPanel("left");
    renderStickPanel("right");
    renderRows();
    renderSelectionBar();
  }

  dom.search.addEventListener("input", (event) => {
    searchText = event.target.value;
    renderRows();
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setActiveList(button.dataset.list));
  });
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => setStatusFilter(button.dataset.filter));
  });
  dom.toggleCodesBtn.addEventListener("click", () => {
    state.uiSettings.showCodes = !state.uiSettings.showCodes;
    saveState();
    render();
  });
  dom.profileSelect.addEventListener("change", (event) => setActiveProfile(event.target.value));
  dom.profileAddBtn.addEventListener("click", openProfileDialog);
  dom.profileNewName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createProfileFromDialog();
    }
  });
  dom.profileCreateBtn.addEventListener("click", createProfileFromDialog);
  dom.profileDeleteBtn.addEventListener("click", requestDeleteActiveProfile);
  dom.lockBtn.addEventListener("click", toggleLock);
  dom.clearBtn.addEventListener("click", clearBinding);
  dom.noteInput.addEventListener("input", (event) => updateNote(event.target.value));
  dom.noteInput.addEventListener("change", (event) => updateNote(event.target.value, { renderRowsAfter: true }));
  dom.exportBtn.addEventListener("click", exportProfile);
  dom.importInput.addEventListener("change", (event) => importProfile(event.target.files[0]));
  dom.saveCodeBtn.addEventListener("click", saveCodeDialog);
  dom.copyCodeBtn.addEventListener("click", copyCodeToOtherSide);
  dom.recalcCodeBtn.addEventListener("click", recalcShiftCodes);
  dom.helpBtn.addEventListener("click", openHelpOverlay);
  dom.helpCloseBtn.addEventListener("click", closeHelpOverlay);
  dom.helpOverlay.addEventListener("click", (event) => {
    if (event.target === dom.helpOverlay || event.target.classList.contains("help-vignette")) {
      closeHelpOverlay();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && helpOpen) {
      event.preventDefault();
      closeHelpOverlay();
    }
  });
  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target) showTooltip(target);
  });
  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target && !target.contains(event.relatedTarget)) hideTooltip();
  });
  document.addEventListener("focusin", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target) showTooltip(target);
  });
  document.addEventListener("focusout", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target && !target.contains(event.relatedTarget)) hideTooltip();
  });
  window.addEventListener("resize", () => {
    positionTooltip();
  });
  window.addEventListener("scroll", () => {
    positionTooltip();
  }, true);

  if (!selectedRowId && seed.scenarioRows.length) {
    selectedRowId = seed.scenarioRows[0].id;
  }
  state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
  const initialRow = selectedRowId ? findRow(selectedRowId) : null;
  if (initialRow && !bindingForRow(initialRow)) clearPendingTarget();
  render();
})();
