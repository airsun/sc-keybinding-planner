(function () {
  const workspaceCore = window.VKB_WORKSPACE_CORE;
  if (!workspaceCore) throw new Error("Workspace core is unavailable.");
  const seed = workspaceCore.normalizeSeed(window.VKB_PLANNER_SEED);
  const syncCore = window.VKB_SYNC_CORE;
  const storageKey = "sc-dual-vkb-binding-planner:v1";
  const workspaceSchemaVersion = workspaceCore.WORKSPACE_SCHEMA_VERSION;
  const workspaceSemanticRevision = workspaceCore.WORKSPACE_SEMANTIC_REVISION;
  const activationModeBadgeLabels = Object.freeze({
    DEFAULT: "DEF",
    TAP: "TAP",
    PRESS: "PRS",
    HOLD: "HLD",
    DOUBLE_TAP: "2T",
    ALL: "ALL",
    SMART_TOGGLE: "STG",
    HOLD_TOGGLE: "HTG",
    HOLD_NO_RETRIGGER: "HNR",
    DELAYED_PRESS: "D-P",
    DELAYED_PRESS_MEDIUM: "DPM",
    DELAYED_HOLD: "D-H",
    DELAYED_HOLD_NO_RETRIGGER: "DHN",
  });
  const activationModes = [
    ...Object.keys(activationModeBadgeLabels),
    ...new Set([...seed.gameRows, ...seed.scenarioRows].map((row) => row.activationMode)),
  ].filter((mode, index, values) => mode && values.indexOf(mode) === index);
  const contextDimensions = Object.freeze([
    { id: "position", label: "POSITION", description: "操作位置" },
    { id: "tool-mode", label: "TOOL MODE", description: "工具模式" },
    { id: "focus", label: "FOCUS", description: "交互焦点" },
  ]);
  const layers = ["base", "shift1", "shift2"];
  const layerLabels = { base: "Base", shift1: "S1", shift2: "S2" };
  const handLabels = { left: "左杆", right: "右杆" };
  const maxProfileNameLength = 32;
  const defaultProfileTemplates = [{ id: "default", name: "Default" }];

  const dom = {
    leftPanel: document.getElementById("leftPanel"),
    rightPanel: document.getElementById("rightPanel"),
    rows: document.getElementById("bindingRows"),
    cardWrap: document.getElementById("cardWrap"),
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
    syncBtn: document.getElementById("syncBtn"),
    syncDialog: document.getElementById("syncDialog"),
    syncProviderSelect: document.getElementById("syncProviderSelect"),
    syncOwnerInput: document.getElementById("syncOwnerInput"),
    syncRepoInput: document.getElementById("syncRepoInput"),
    syncBranchInput: document.getElementById("syncBranchInput"),
    syncPathInput: document.getElementById("syncPathInput"),
    syncTokenInput: document.getElementById("syncTokenInput"),
    syncRememberToken: document.getElementById("syncRememberToken"),
    syncTokenLink: document.getElementById("syncTokenLink"),
    syncStatus: document.getElementById("syncStatus"),
    syncSaveBtn: document.getElementById("syncSaveBtn"),
    syncTestBtn: document.getElementById("syncTestBtn"),
    syncPullBtn: document.getElementById("syncPullBtn"),
    syncPushBtn: document.getElementById("syncPushBtn"),
    syncForcePushBtn: document.getElementById("syncForcePushBtn"),
    repairBtn: document.getElementById("repairBtn"),
    repairDialog: document.getElementById("repairDialog"),
    repairStatus: document.getElementById("repairStatus"),
    repairIssueSummary: document.getElementById("repairIssueSummary"),
    repairTargetSelect: document.getElementById("repairTargetSelect"),
    repairModeSelect: document.getElementById("repairModeSelect"),
    repairResolveBtn: document.getElementById("repairResolveBtn"),
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
      title: "在线同步",
      controls: [
        { label: "⇄", note: "打开 GitHub workspace 同步。", selector: "#syncBtn" },
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
  let lastSelectedBindingSlotKey = "";
  let selectionArrivalSlotKey = "";
  let expandedRowId = null;
  let expandedProfileId = null;
  let expandedStateRef = null;
  let detailTransitionDirection = null;
  let detailTransitionLocked = false;
  let pendingExpandedScrollRowId = null;
  let editPositionAnchor = null;
  let restoreEditPositionOnNextVisible = false;
  let editPositionScrollFrame = null;
  let searchText = "";
  let codeEditTarget = null;
  let helpOpen = false;
  let tooltipTarget = null;
  let syncConfig = loadSyncConfig();
  const syncTokenStore = syncCore.createTokenStore({ sessionStorage });
  const syncProvider = syncCore.createGitHubRepoProvider({ fetchImpl: window.fetch.bind(window) });
  let syncBusy = false;
  let repairSelection = null;

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

  function makeProfile(id, name, bindings = seedBindings(), timestamps = {}, extras = {}) {
    const now = new Date().toISOString();
    return {
      id,
      name: normalizeProfileName(name, id),
      createdAt: timestamps.createdAt || now,
      updatedAt: timestamps.updatedAt || now,
      bindings: clone(bindings || {}),
      actionModes: clone(extras.actionModes || {}),
      actionContexts: clone(extras.actionContexts || {}),
      repairQueue: clone(extras.repairQueue || []),
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
      semanticRevision: workspaceSemanticRevision,
      activeProfileId: "default",
      deviceConfig: clone(seed.deviceConfig),
      contextCatalog: clone(workspaceCore.DEFAULT_CONTEXT_CATALOG),
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
      semanticRevision: workspaceSemanticRevision,
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
      {
        actionModes: profile?.actionModes,
        actionContexts: profile?.actionContexts,
        repairQueue: profile?.repairQueue,
      },
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
      semanticRevision: workspaceSemanticRevision,
      activeProfileId,
      deviceConfig: data?.deviceConfig || clone(seed.deviceConfig),
      contextCatalog: clone(data?.contextCatalog || workspaceCore.DEFAULT_CONTEXT_CATALOG),
      profiles,
      uiSettings: { ...seed.uiSettings, ...(data?.uiSettings || {}) },
    };
  }

  function parseWorkspacePayload(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid profile schema");
    const migrated = workspaceCore.migrateWorkspace(data);
    if (validateWorkspaceShape(migrated)) return normalizeWorkspace(migrated);
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

  function loadSyncConfig() {
    try {
      const saved = localStorage.getItem(syncCore.SYNC_CONFIG_KEY);
      return syncCore.sanitizeSyncConfig(saved ? JSON.parse(saved) : {});
    } catch (error) {
      console.warn("Ignoring invalid sync config", error);
      return syncCore.sanitizeSyncConfig({});
    }
  }

  function saveSyncConfig(nextConfig = syncConfig) {
    syncConfig = syncCore.sanitizeSyncConfig(nextConfig);
    localStorage.setItem(syncCore.SYNC_CONFIG_KEY, JSON.stringify(syncConfig));
    renderSyncControl();
    return syncConfig;
  }

  function syncConfigFromFields() {
    const next = syncCore.sanitizeSyncConfig({
      provider: dom.syncProviderSelect.value,
      owner: dom.syncOwnerInput.value,
      repo: dom.syncRepoInput.value,
      branch: dom.syncBranchInput.value,
      path: dom.syncPathInput.value,
    });
    if (sameSyncTarget(syncConfig, next)) {
      next.lastRemoteSha = syncConfig.lastRemoteSha;
      next.lastSyncAt = syncConfig.lastSyncAt;
    }
    return syncCore.sanitizeSyncConfig(next);
  }

  function sameSyncTarget(a, b) {
    return ["provider", "owner", "repo", "branch", "path"].every((key) => (a?.[key] || "") === (b?.[key] || ""));
  }

  function persistSyncDialogState() {
    const nextConfig = saveSyncConfig(syncConfigFromFields());
    syncTokenStore.setToken(dom.syncTokenInput.value, {
      rememberForSession: dom.syncRememberToken.checked,
    });
    return {
      config: nextConfig,
      token: syncTokenStore.getToken(),
    };
  }

  function validateSyncReady(config, token) {
    if (!config.owner || !config.repo || !config.path) {
      showToast("请先填写 GitHub owner、repo 和 path。", { tone: "warn" });
      return false;
    }
    if (!token) {
      showToast("请先输入 GitHub token。", { tone: "warn" });
      return false;
    }
    return true;
  }

  function buildWorkspaceSnapshot() {
    const snapshot = clone(state);
    snapshot.uiSettings = { ...snapshot.uiSettings, selectedRowId };
    const profile = snapshot.profiles?.[snapshot.activeProfileId];
    if (profile) profile.updatedAt = new Date().toISOString();
    return {
      ...snapshot,
      schemaVersion: workspaceSchemaVersion,
      updatedAt: new Date().toISOString(),
    };
  }

  function applyPulledWorkspace(nextState, remoteSha) {
    state = nextState;
    selectedRowId = findRow(state.uiSettings.selectedRowId)?.id || null;
    resetTransientEditPosition();
    saveState();
    saveSyncConfig({
      ...syncConfig,
      lastRemoteSha: remoteSha,
      lastSyncAt: new Date().toISOString(),
    });
    render({ revealSelection: true, pulseSelection: true });
    notifyPendingRepairs("Workspace 已从远端迁移到 v4");
  }

  function markSyncMetadata(remoteSha) {
    saveSyncConfig({
      ...syncConfig,
      lastRemoteSha: remoteSha,
      lastSyncAt: new Date().toISOString(),
    });
    renderSyncDialog();
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
    const profile = state.profiles[state.activeProfileId];
    profile.actionContexts = profile.actionContexts || {};
    return profile;
  }

  function activeBindings() {
    const profile = activeProfile();
    profile.bindings = profile.bindings || {};
    return profile.bindings;
  }

  function pendingRepairItems() {
    const result = [];
    for (const profile of profileList()) {
      for (const issue of profile.repairQueue || []) {
        result.push({ profile, issue });
      }
    }
    return result;
  }

  function repairCandidateRows() {
    return seed.gameRows.filter((row) => row.actionKey.startsWith("game:"));
  }

  function renderRepairControl() {
    const count = pendingRepairItems().length;
    dom.repairBtn.hidden = count === 0;
    dom.repairBtn.classList.toggle("active", count > 0);
    dom.repairBtn.dataset.count = String(count);
    dom.repairBtn.title = count ? `${count} 个 binding 待修复` : "没有待修复 binding";
    setTooltip(dom.repairBtn, dom.repairBtn.title);
  }

  function openRepairDialog() {
    const items = pendingRepairItems();
    if (!items.length) {
      showToast("没有待修复 binding。", { tone: "info" });
      return;
    }
    const selected = items.find((item) => item.profile.id === state.activeProfileId) || items[0];
    repairSelection = { profileId: selected.profile.id, issueId: selected.issue.id };
    renderRepairDialog();
    dom.repairDialog.showModal();
  }

  function renderRepairDialog() {
    const items = pendingRepairItems();
    const current = items.find((item) => (
      item.profile.id === repairSelection?.profileId && item.issue.id === repairSelection?.issueId
    )) || items[0];
    if (!current) {
      repairSelection = null;
      if (dom.repairDialog.open) dom.repairDialog.close();
      return;
    }
    repairSelection = { profileId: current.profile.id, issueId: current.issue.id };
    const binding = current.issue.binding || {};
    const slot = binding.slot ? `${handLabels[binding.slot.hand] || binding.slot.hand} · ${slotText(binding.slot)}` : "未分配键位";
    dom.repairStatus.textContent = `${items.length} 个待处理 · Profile: ${current.profile.name}`;
    dom.repairIssueSummary.textContent = `原键 ${current.issue.sourceActionKey} · ${slot}${binding.note ? ` · ${binding.note}` : ""}`;

    dom.repairTargetSelect.replaceChildren();
    for (const row of repairCandidateRows()) {
      const option = document.createElement("option");
      option.value = row.actionKey;
      option.textContent = `${row.order}. ${row.nameZh || row.nameEn || row.actionKey}`;
      dom.repairTargetSelect.append(option);
    }
    dom.repairModeSelect.replaceChildren();
    for (const mode of activationModes) {
      const option = document.createElement("option");
      option.value = mode;
      option.textContent = mode;
      dom.repairModeSelect.append(option);
    }
    dom.repairModeSelect.value = workspaceCore.DEFAULT_ACTIVATION_MODE;
    dom.repairResolveBtn.disabled = dom.repairTargetSelect.options.length === 0;
  }

  function resolveSelectedRepair(options = {}) {
    if (!repairSelection) return;
    const actionKey = dom.repairTargetSelect.value;
    const activationMode = dom.repairModeSelect.value;
    try {
      state = workspaceCore.resolveRepairItem(state, {
        ...repairSelection,
        actionKey,
        activationMode,
        replaceExisting: Boolean(options.replaceExisting),
      });
    } catch (error) {
      if (error.code === "TARGET_BINDING_EXISTS") {
        showToast("目标操作已经有 binding。", {
          tone: "warn",
          actionLabel: "确认替换",
          cancelLabel: "取消",
          duration: 8200,
          onAction: () => resolveSelectedRepair({ replaceExisting: true }),
        });
        return;
      }
      showToast(`修复失败：${error.message}`, { tone: "error", duration: 4200 });
      return;
    }

    state.activeProfileId = repairSelection.profileId;
    const targetRow = allRows().find((row) => row.actionKey === actionKey);
    if (targetRow) applySelectedRow(targetRow);
    saveState();
    render({ mapActionKey: actionKey, revealSelection: true, pulseSelection: true });
    if (pendingRepairItems().length) {
      repairSelection = null;
      renderRepairDialog();
    } else {
      repairSelection = null;
      dom.repairDialog.close();
    }
    showToast("歧义 binding 已归属到所选操作。", { tone: "info" });
  }

  function notifyPendingRepairs(prefix) {
    const count = pendingRepairItems().length;
    if (!count) return;
    showToast(`${prefix}；${count} 个歧义 binding 已保留，等待确认归属。`, {
      tone: "warn",
      actionLabel: "立即修复",
      cancelLabel: "稍后",
      duration: 9200,
      onAction: openRepairDialog,
    });
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

  function renderSyncControl() {
    const configured = Boolean(syncConfig.owner && syncConfig.repo && syncConfig.path);
    dom.syncBtn.classList.toggle("active", configured);
    dom.syncBtn.title = configured ? `同步：${syncConfig.owner}/${syncConfig.repo}` : "同步 Workspace";
    setTooltip(dom.syncBtn, configured ? `GitHub sync · ${syncConfig.owner}/${syncConfig.repo}` : "打开 GitHub Workspace 同步");
  }

  function renderSyncDialog() {
    dom.syncProviderSelect.value = syncConfig.provider || "github-repo";
    dom.syncOwnerInput.value = syncConfig.owner || "";
    dom.syncRepoInput.value = syncConfig.repo || "";
    dom.syncBranchInput.value = syncConfig.branch || syncCore.DEFAULT_BRANCH;
    dom.syncPathInput.value = syncConfig.path || syncCore.DEFAULT_PATH;
    dom.syncTokenInput.value = syncTokenStore.getToken();
    dom.syncTokenLink.href = syncCore.buildTokenCreationUrl();
    const target = syncConfig.owner && syncConfig.repo ? `${syncConfig.owner}/${syncConfig.repo}` : "未配置";
    const revision = syncConfig.lastRemoteSha ? `sha ${syncConfig.lastRemoteSha.slice(0, 7)}` : "未同步";
    dom.syncStatus.textContent = `${target} · ${syncConfig.path || syncCore.DEFAULT_PATH} · ${revision}`;
    setSyncBusy(syncBusy);
  }

  function setSyncBusy(isBusy, message) {
    syncBusy = isBusy;
    for (const button of [dom.syncSaveBtn, dom.syncTestBtn, dom.syncPullBtn, dom.syncPushBtn, dom.syncForcePushBtn]) {
      button.disabled = isBusy;
    }
    if (message) dom.syncStatus.textContent = message;
  }

  function openSyncDialog() {
    renderSyncDialog();
    dom.syncDialog.showModal();
    window.requestAnimationFrame(() => {
      dom.syncOwnerInput.focus();
      if (!dom.syncOwnerInput.value) dom.syncOwnerInput.select();
    });
  }

  function saveSyncDialog() {
    persistSyncDialogState();
    renderSyncDialog();
    showToast("同步配置已保存；token 不会写入长期 localStorage。", { tone: "info" });
  }

  function syncReadErrorMessage(result) {
    if (result.status === "inaccessible") return "无法访问 GitHub repo 或 token 权限不足。";
    if (result.status === "network-failure") return `网络请求失败${result.message ? `：${result.message}` : "。"}`;
    if (result.status === "error") return `GitHub API 返回异常${result.httpStatus ? `（${result.httpStatus}）` : ""}。`;
    return "同步状态异常。";
  }

  function syncWriteErrorMessage(result) {
    if (result.status === "conflict") return "GitHub 拒绝写入：远端文件已变化。";
    if (result.status === "inaccessible") return "写入失败：repo 不存在、token 无效或权限不足。";
    if (result.status === "network-failure") return `写入失败${result.message ? `：${result.message}` : "。"}`;
    if (result.status === "error") return `写入失败${result.httpStatus ? `（${result.httpStatus}）` : ""}${result.message ? `：${result.message}` : "。"}`;
    return "写入失败。";
  }

  async function testSyncConnection() {
    const { config, token } = persistSyncDialogState();
    if (!validateSyncReady(config, token)) return;
    setSyncBusy(true, "Testing GitHub sync target...");
    try {
      const result = await syncProvider.test(config, token);
      if (result.status === "readable") {
        dom.syncStatus.textContent = `远端文件可读取 · sha ${result.remoteSha.slice(0, 7)}`;
        showToast("GitHub 同步目标可读取。", { tone: "info" });
      } else if (result.status === "missing") {
        dom.syncStatus.textContent = "Repo 可访问；远端文件不存在，首次 Push 会创建。";
        showToast("Repo 可访问；远端文件不存在，首次 Push 会创建。", { tone: "info", duration: 4200 });
      } else {
        const message = syncReadErrorMessage(result);
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "error", duration: 5200 });
      }
    } finally {
      setSyncBusy(false);
    }
  }

  async function pullSyncWorkspace() {
    const { config, token } = persistSyncDialogState();
    if (!validateSyncReady(config, token)) return;
    setSyncBusy(true, "Pulling remote workspace...");
    try {
      const result = await syncProvider.read(config, token, { resolveMissing: true });
      if (result.status === "missing") {
        const message = "远端文件不存在；可先 Push 创建。";
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "warn" });
        return;
      }
      if (result.status !== "readable") {
        const message = syncReadErrorMessage(result);
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "error", duration: 5200 });
        return;
      }
      let nextState;
      try {
        nextState = parseWorkspacePayload(JSON.parse(result.text));
      } catch (error) {
        const message = `远端 workspace 无效：${error.message}`;
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "error", duration: 5200 });
        return;
      }
      showToast("Pull 会覆盖当前本地 workspace。", {
        tone: "warn",
        actionLabel: "覆盖本地",
        cancelLabel: "取消",
        duration: 8200,
        onAction: () => {
          applyPulledWorkspace(nextState, result.remoteSha);
          renderSyncDialog();
          showToast("Workspace 已从远端拉取。", { tone: "info" });
        },
      });
      dom.syncStatus.textContent = `远端 workspace 已读取 · sha ${result.remoteSha.slice(0, 7)}`;
    } finally {
      setSyncBusy(false);
    }
  }

  async function pushSyncWorkspace(options = {}) {
    const { config, token } = persistSyncDialogState();
    if (!validateSyncReady(config, token)) return;
    setSyncBusy(true, options.force ? "Force pushing workspace..." : "Pushing workspace...");
    try {
      const readResult = await syncProvider.read(config, token, { resolveMissing: true });
      if (readResult.status !== "readable" && readResult.status !== "missing") {
        const message = syncReadErrorMessage(readResult);
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "error", duration: 5200 });
        return;
      }

      const plan = syncCore.decidePushPlan({
        remoteStatus: readResult.status,
        remoteSha: readResult.remoteSha,
        lastRemoteSha: syncConfig.lastRemoteSha,
        force: Boolean(options.force),
      });
      if (plan.action === "conflict") {
        showToast("远端已变化；普通 Push 已停止。", {
          tone: "warn",
          actionLabel: "Force",
          cancelLabel: "取消",
          duration: 8200,
          onAction: () => requestForcePush(plan.remoteSha),
        });
        dom.syncStatus.textContent = `远端冲突 · sha ${plan.remoteSha.slice(0, 7)}`;
        return;
      }
      if (plan.action !== "create" && plan.action !== "update") {
        const message = "当前远端状态不能安全 Push。";
        dom.syncStatus.textContent = message;
        showToast(message, { tone: "warn" });
        return;
      }

      const writeResult = await syncProvider.write(config, token, buildWorkspaceSnapshot(), {
        sha: plan.expectedSha,
      });
      if (writeResult.status !== "written") {
        const message = syncWriteErrorMessage(writeResult);
        dom.syncStatus.textContent = message;
        showToast(message, { tone: writeResult.status === "conflict" ? "warn" : "error", duration: 5200 });
        return;
      }
      markSyncMetadata(writeResult.remoteSha);
      showToast(plan.action === "create" ? "远端 workspace 已创建。" : "Workspace 已 Push 到远端。", { tone: "info" });
    } finally {
      setSyncBusy(false);
    }
  }

  function requestForcePush(remoteSha) {
    showToast("强制 Push 会覆盖远端 workspace。", {
      tone: "warn",
      actionLabel: "覆盖远端",
      cancelLabel: "取消",
      duration: 8200,
      onAction: () => pushSyncWorkspace({ force: true, remoteSha }),
    });
  }

  function setActiveProfile(profileId) {
    if (!state.profiles?.[profileId] || profileId === state.activeProfileId) return;
    resetTransientEditPosition();
    state.activeProfileId = profileId;
    saveState();
    render({ revealSelection: true, pulseSelection: true });
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
    state.profiles[id] = makeProfile(
      id,
      name,
      source.bindings,
      {},
      {
        actionModes: source.actionModes,
        actionContexts: source.actionContexts,
        repairQueue: source.repairQueue,
      },
    );
    resetTransientEditPosition();
    state.activeProfileId = id;
    dom.profileDialog.close();
    saveState();
    render({ revealSelection: true, pulseSelection: true });
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
    resetTransientEditPosition();
    delete state.profiles[profileId];
    state.activeProfileId = fallbackId;
    saveState();
    render({ revealSelection: true, pulseSelection: true });
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

  function rowListType(row) {
    if (!row) return state.uiSettings.activeList === "game" ? "game" : "scenario";
    return row.listType === "game" ? "game" : "scenario";
  }

  function currentListType() {
    return state.uiSettings.activeList === "game" ? "game" : "scenario";
  }

  function editAnchorIsCurrent() {
    return Boolean(
      editPositionAnchor
      && editPositionAnchor.profileId === state.activeProfileId
      && editPositionAnchor.stateRef === state,
    );
  }

  function clearEditPositionAnchor() {
    editPositionAnchor = null;
    restoreEditPositionOnNextVisible = false;
  }

  function resetTransientEditPosition() {
    closeInlineDetailState();
    clearEditPositionAnchor();
  }

  function cardTopOffset(rowId) {
    const card = rowId ? dom.rows.querySelector(`[data-row-id="${rowId}"]`) : null;
    if (!card) return null;
    const wrapRect = dom.cardWrap.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    return cardRect.top - wrapRect.top;
  }

  function rememberEditPosition(row, options = {}) {
    if (!row) return;
    const listType = rowListType(row);
    const measuredOffset = cardTopOffset(row.id);
    const sameAction = editAnchorIsCurrent() && editPositionAnchor.actionKey === row.actionKey;
    const previousPositions = sameAction ? editPositionAnchor.positions : {};
    const previousPosition = previousPositions[listType] || {};
    const topOffset = Number.isFinite(measuredOffset)
      ? measuredOffset
      : (Number.isFinite(previousPosition.topOffset) ? previousPosition.topOffset : null);
    editPositionAnchor = {
      actionKey: row.actionKey,
      profileId: state.activeProfileId,
      stateRef: state,
      expanded: options.expanded ?? (expandedRowId === row.id),
      lastTopOffset: Number.isFinite(topOffset)
        ? topOffset
        : (sameAction ? editPositionAnchor.lastTopOffset : null),
      positions: {
        ...previousPositions,
        [listType]: { rowId: row.id, topOffset },
      },
    };
    if (!options.keepPendingRestore) restoreEditPositionOnNextVisible = false;
  }

  function captureEditPositionCardOffset() {
    if (!editAnchorIsCurrent()) {
      clearEditPositionAnchor();
      return false;
    }
    const listType = currentListType();
    const currentPosition = editPositionAnchor.positions[listType] || {};
    const candidateIds = [expandedRowId, selectedRowId, currentPosition.rowId].filter(Boolean);
    const rowId = candidateIds.find((candidateId) => {
      const row = findRow(candidateId);
      return row?.actionKey === editPositionAnchor.actionKey && Number.isFinite(cardTopOffset(candidateId));
    });
    if (!rowId) return false;
    const topOffset = cardTopOffset(rowId);
    editPositionAnchor.positions[listType] = { rowId, topOffset };
    editPositionAnchor.lastTopOffset = topOffset;
    editPositionAnchor.expanded = expandedRowId === rowId;
    return true;
  }

  function prepareEditPositionForViewChange() {
    captureEditPositionCardOffset();
    if (editAnchorIsCurrent()) restoreEditPositionOnNextVisible = true;
  }

  function editPositionEntry(entries) {
    if (!editAnchorIsCurrent()) {
      if (editPositionAnchor) clearEditPositionAnchor();
      return null;
    }
    const position = editPositionAnchor.positions[currentListType()] || {};
    return entries.find(({ row }) => row.id === position.rowId && row.actionKey === editPositionAnchor.actionKey)
      || entries.find(({ row }) => row.actionKey === editPositionAnchor.actionKey)
      || null;
  }

  function restoreExpandedEditPosition(entry) {
    if (!entry || !editAnchorIsCurrent() || entry.row.actionKey !== editPositionAnchor.actionKey) return;
    if (!editPositionAnchor.expanded) return;
    const needsRestore = expandedRowId !== entry.row.id
      || expandedProfileId !== state.activeProfileId
      || expandedStateRef !== state;
    if (!needsRestore) return;
    expandedRowId = entry.row.id;
    expandedProfileId = state.activeProfileId;
    expandedStateRef = state;
    detailTransitionDirection = null;
    pendingExpandedScrollRowId = null;
  }

  function restoreEditCardPosition(rowId) {
    if (!editAnchorIsCurrent()) return false;
    const row = findRow(rowId);
    if (!row || row.actionKey !== editPositionAnchor.actionKey) return false;
    const card = dom.rows.querySelector(`[data-row-id="${rowId}"]`);
    if (!card) return false;
    const listType = currentListType();
    const position = editPositionAnchor.positions[listType] || {};
    const desiredOffset = Number.isFinite(position.topOffset)
      ? position.topOffset
      : editPositionAnchor.lastTopOffset;
    if (Number.isFinite(desiredOffset)) {
      const currentOffset = cardTopOffset(rowId);
      dom.cardWrap.scrollTo({
        top: Math.max(0, dom.cardWrap.scrollTop + currentOffset - desiredOffset),
        behavior: "auto",
      });
    } else if (editPositionAnchor.expanded) {
      syncExpandedCard(rowId);
    }
    editPositionAnchor.positions[listType] = {
      rowId,
      topOffset: Number.isFinite(desiredOffset) ? desiredOffset : cardTopOffset(rowId),
    };
    window.requestAnimationFrame(captureEditPositionCardOffset);
    return true;
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

  function syncSlotLayerContext(slot) {
    if (!slot?.hand) return;
    state.uiSettings.layers = state.uiSettings.layers || { left: "base", right: "base" };
    state.uiSettings.targetHand = slot.hand;
    state.uiSettings.layers[slot.hand] = slot.slotType === "axis" ? "base" : slot.layer || "base";
    delete state.uiSettings.pendingLayer;
  }

  function slotKey(slot) {
    if (!slot) return "";
    if (slot.slotType === "axis") return `${slot.hand}:${slot.control}:axis`;
    return `${slot.hand}:${slot.control}:${slot.layer || "base"}`;
  }

  function bindingOccupancyKey(binding) {
    return `${slotKey(binding?.slot)}:${workspaceCore.normalizeActivationMode(binding?.activationMode)}`;
  }

  function physicalOccupants(occupancyMap, slot) {
    const prefix = `${slotKey(slot)}:`;
    const occupants = [];
    for (const [key, items] of occupancyMap.entries()) {
      if (key.startsWith(prefix)) occupants.push(...items);
    }
    return occupants;
  }

  function sameSlot(a, b) {
    return slotKey(a) === slotKey(b);
  }

  function selectedBindingSlot() {
    const row = selectedRowId ? findRow(selectedRowId) : null;
    return row ? bindingForRow(row)?.slot || null : null;
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

  function activationModeForRow(row) {
    const profile = activeProfile();
    profile.actionModes = profile.actionModes || {};
    return workspaceCore.normalizeActivationMode(
      bindingForRow(row)?.activationMode || profile.actionModes[row.actionKey],
    );
  }

  function modeBadgeLabel(mode) {
    const normalized = workspaceCore.normalizeActivationMode(mode);
    return activationModeBadgeLabels[normalized]
      || normalized.replace(/[^A-Z0-9]/g, "").slice(0, 4)
      || "DEF";
  }

  function contextIdsForRow(row) {
    const profile = activeProfile();
    return workspaceCore.normalizeContextIds(
      bindingForRow(row)?.contextIds || profile.actionContexts[row.actionKey],
      state.contextCatalog,
    );
  }

  function setRowContexts(row, contextIds) {
    const profile = activeProfile();
    const binding = bindingForRow(row);
    if (binding?.locked) {
      showToast("这个绑定已锁定，先解除锁定再修改 CTX。", { tone: "warn" });
      renderRows();
      return false;
    }
    const normalized = workspaceCore.normalizeContextIds(contextIds, state.contextCatalog);
    if (workspaceCore.isDefaultContextIds(normalized, state.contextCatalog)) {
      delete profile.actionContexts[row.actionKey];
    } else {
      profile.actionContexts[row.actionKey] = clone(normalized);
    }
    if (binding) binding.contextIds = clone(normalized);
    applySelectedRow(row, { revealBinding: true });
    saveState();
    render({ pulseSelection: true });
    return true;
  }

  function setRowActivationMode(row, value) {
    const profile = activeProfile();
    const binding = bindingForRow(row);
    if (binding?.locked) {
      showToast("这个绑定已锁定，先解除锁定再修改触发模式。", { tone: "warn" });
      renderRows();
      return;
    }
    const mode = workspaceCore.normalizeActivationMode(value);
    profile.actionModes = profile.actionModes || {};
    if (mode === workspaceCore.DEFAULT_ACTIVATION_MODE) {
      delete profile.actionModes[row.actionKey];
    } else {
      profile.actionModes[row.actionKey] = mode;
    }
    if (binding) binding.activationMode = mode;
    applySelectedRow(row, { revealBinding: true });
    saveState();
    render({ pulseSelection: true });
  }

  function occupancy() {
    const map = new Map();
    for (const binding of Object.values(activeBindings())) {
      if (!binding.enabled || !binding.slot) continue;
      const key = bindingOccupancyKey(binding);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(binding);
    }
    return map;
  }

  function canonicalActionKey(actionKey) {
    const row = allRows().find((item) => item.actionKey === actionKey);
    return row?.canonicalActionKey || row?.actionKey || actionKey;
  }

  function classifyBindings(left, right) {
    return workspaceCore.classifyBindingRelationship(
      { ...left, canonicalActionKey: canonicalActionKey(left.actionKey) },
      { ...right, canonicalActionKey: canonicalActionKey(right.actionKey) },
      state.contextCatalog,
    );
  }

  function bindingsHaveTrueConflict(bindings) {
    for (let leftIndex = 0; leftIndex < bindings.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < bindings.length; rightIndex += 1) {
        if (classifyBindings(bindings[leftIndex], bindings[rightIndex]) === "true-conflict") return true;
      }
    }
    return false;
  }

  function relatedBindingsFor(binding, occupancyMap = occupancy()) {
    if (!binding?.slot) return [];
    return (occupancyMap.get(bindingOccupancyKey(binding)) || [])
      .filter((item) => item.actionKey !== binding.actionKey)
      .map((item) => ({ binding: item, relationship: classifyBindings(binding, item) }));
  }

  function relationshipForRow(row, occupancyMap) {
    const binding = bindingForRow(row);
    if (!binding?.slot) return null;
    const related = relatedBindingsFor(binding, occupancyMap);
    const conflicts = related.filter((item) => item.relationship === "true-conflict");
    if (conflicts.length) {
      return { type: "true-conflict", relatedBindings: conflicts.map((item) => item.binding) };
    }
    const contextReuse = related.filter((item) => item.relationship === "context-reuse");
    if (contextReuse.length) {
      return { type: "context-reuse", relatedBindings: contextReuse.map((item) => item.binding) };
    }
    const sharedRows = seed.scenarioRows.filter((item) => item.actionKey === row.actionKey);
    if (sharedRows.length > 1) return { type: "shared", referenceRows: sharedRows };
    return null;
  }

  function slotStatus(slot, occupancyMap) {
    const control = getControl(slot.hand, slot.control);
    const occupants = physicalOccupants(occupancyMap, slot);
    const code = codeForSlot(slot);
    return {
      occupied: occupants.length > 0,
      locked: occupants.some((item) => item.locked),
      conflict: bindingsHaveTrueConflict(occupants),
      uncalibrated: code === "--",
      current: sameSlot(selectedBindingSlot(), slot),
      disabled: !control || control.bindable === false,
    };
  }

  function statusForRow(row, occupancyMap) {
    const binding = bindingForRow(row);
    if (!binding || !binding.slot) return { key: "unbound", label: "未分配", tone: "muted" };
    const relationship = relationshipForRow(row, occupancyMap);
    if (relationship?.type === "true-conflict") {
      return {
        key: "issue",
        reason: "conflict",
        label: "冲突",
        tone: "red",
        conflictCount: relationship.relatedBindings.length + 1,
        relationship,
      };
    }
    if (codeForSlot(binding.slot) === "--") return { key: "issue", reason: "uncalibrated", label: "未校准", tone: "amber" };
    if (relationship?.type === "context-reuse") {
      return {
        key: binding.locked ? "locked" : "bound",
        reason: "context-reuse",
        label: binding.locked ? "CTX 复用 · 已确认" : "CTX 复用",
        tone: "cyan",
        relationship,
      };
    }
    if (relationship?.type === "shared") {
      return {
        key: binding.locked ? "locked" : "bound",
        reason: "shared",
        label: binding.locked ? "共享 · 已确认" : "共享",
        tone: "green",
        relationship,
      };
    }
    if (binding.locked) return { key: "locked", label: "已确认", tone: "green", relationship };
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
    const currentBinding = selectedBindingSlot();
    const currentBindingControl = currentBinding?.hand && currentBinding?.control
      ? getControl(currentBinding.hand, currentBinding.control)
      : null;
    const bindingLayer = currentBinding?.slotType === "button"
      && currentBinding.hand === hand
      && currentBindingControl?.shiftCapable
      ? currentBinding.layer || "base"
      : null;
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
      if (item === bindingLayer) {
        button.classList.add("binding-layer");
        button.dataset.bindingLayer = "true";
        button.setAttribute("aria-label", `${handLabels[hand]} · ${layerLabels[item]} · 当前选中绑定所在层`);
      }
      setTooltip(
        button,
        item === bindingLayer
          ? `${handLabels[hand]} · ${layerLabels[item]} · 当前选中绑定所在层`
          : `${handLabels[hand]} · 切换到 ${layerLabels[item]} 层`,
      );
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
    if (status.current && slotKey(slot) === selectionArrivalSlotKey) {
      button.classList.add("selection-arrived");
      button.addEventListener("animationend", (event) => {
        if (event.animationName === "selectedSlotArrivalFrame") {
          button.classList.remove("selection-arrived");
        }
      });
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
      const occupants = physicalOccupants(occupancyMap, slot);
      if (occupants.length) span.classList.add("on");
      if (occupants.some((item) => item.locked)) span.classList.add("locked");
      bars.append(span);
    }
    return bars;
  }

  function visibleRows(occupancyMap = occupancy()) {
    const filter = state.uiSettings.statusFilter || "all";
    const query = searchText.trim().toLowerCase();
    const result = [];
    for (const row of currentRows()) {
      const status = statusForRow(row, occupancyMap);
      if (filter === "bound" && status.key !== "bound" && status.key !== "locked") continue;
      if (filter === "unbound" && status.key !== "unbound") continue;
      if (filter === "locked" && status.key !== "locked") continue;
      if (filter === "issue" && status.key !== "issue") continue;
      const haystack = `${row.nameZh} ${row.nameEn} ${row.description} ${row.suggestedInput} ${row.actionId}`.toLowerCase();
      if (query && !haystack.includes(query)) continue;
      result.push({ row, status });
    }
    return result;
  }

  function selectedEntry(entries) {
    return selectedRowId ? entries.find(({ row }) => row.id === selectedRowId) || null : null;
  }

  function applySelectedRow(row, options = {}) {
    selectedRowId = row?.id || null;
    if (!row) {
      clearPendingTarget();
      return;
    }
    if (options.rememberEditPosition !== false) rememberEditPosition(row);
    if (!options.revealBinding) return;
    const binding = bindingForRow(row);
    if (binding?.slot) {
      syncSlotLayerContext(binding.slot);
    } else {
      clearPendingTarget();
    }
  }

  function reconcileVisibleSelection(entries, options = {}) {
    let entry = selectedEntry(entries);
    let restoringEditPosition = false;
    if (!entry && options.mapActionKey) {
      entry = entries.find(({ row }) => row.actionKey === options.mapActionKey) || null;
    }
    if (!entry) {
      entry = editPositionEntry(entries);
      restoringEditPosition = Boolean(entry);
    }
    if (!entry) {
      applySelectedRow(null);
    } else {
      applySelectedRow(entry.row, {
        revealBinding: Boolean(options.revealSelection || restoringEditPosition),
        rememberEditPosition: false,
      });
      restoreExpandedEditPosition(entry);
    }

    const nextSlotKey = entry ? slotKey(bindingForRow(entry.row)?.slot) : "";
    selectionArrivalSlotKey = options.pulseSelection
      && nextSlotKey
      && nextSlotKey !== lastSelectedBindingSlotKey
      ? nextSlotKey
      : "";
    lastSelectedBindingSlotKey = nextSlotKey;
    return entry;
  }

  function renderRows(entries = visibleRows()) {
    reconcileExpandedDetail(entries);
    dom.rows.replaceChildren();

    let currentGroup = "";
    entries.forEach(({ row, status }, index) => {
      if (row.group !== currentGroup) {
        currentGroup = row.group;
        const groupRow = makeEl("div", "card-group");
        groupRow.innerHTML = `<span>${escapeHtml(currentGroup)}</span>`;
        dom.rows.append(groupRow);
      }
      dom.rows.append(renderBindingCard(row, status, index, entries.length));
    });

    if (!entries.length) {
      dom.rows.append(makeEl("div", "empty-card", "没有匹配的动作。"));
    }

    const rowId = pendingExpandedScrollRowId;
    if (rowId) {
      pendingExpandedScrollRowId = null;
      window.requestAnimationFrame(() => syncExpandedCard(rowId));
    }
    if (restoreEditPositionOnNextVisible) {
      const entry = editPositionEntry(entries);
      if (entry) {
        restoreEditPositionOnNextVisible = false;
        window.requestAnimationFrame(() => restoreEditCardPosition(entry.row.id));
      }
    }
    return entries;
  }

  function renderBindingCard(row, status, visibleIndex, visibleCount) {
    const binding = bindingForRow(row);
    const card = document.createElement("article");
    card.className = "binding-card";
    card.dataset.rowId = row.id;
    card.dataset.relationshipType = status.relationship?.type || "";
    if (row.id === selectedRowId) card.classList.add("selected");
    if (binding?.locked) card.classList.add("locked-card");
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

    const meta = renderBindingConsole(row, binding, status, { includeRelationship: false });
    card.append(actionCell, desc, meta);

    if (row.id === expandedRowId) {
      card.classList.add("detail-expanded");
      if (detailTransitionDirection) {
        card.dataset.detailDirection = detailTransitionDirection;
        card.classList.add(`detail-enter-${detailTransitionDirection}`);
      }
      card.append(renderInlineCardDetail(row, status, visibleIndex, visibleCount));
    }
    return card;
  }

  function renderInlineDetailToggle(row) {
    const expanded = row.id === expandedRowId;
    const button = makeEl("button", "inline-detail-toggle", expanded ? "⌃" : "⌄");
    button.type = "button";
    button.dataset.inlineDetailCommand = "toggle";
    button.title = expanded ? "收起详情" : "展开详情编辑";
    button.setAttribute("aria-label", `${expanded ? "收起" : "展开"} ${row.nameZh || row.nameEn || row.actionKey} 详情`);
    button.setAttribute("aria-expanded", String(expanded));
    button.setAttribute("aria-controls", `inline-detail-${row.id}`);
    setTooltip(button, button.title);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleInlineDetail(row.id);
    });
    return button;
  }

  function inlineDetailButton(command, label, glyph, disabled, handler) {
    const button = makeEl("button", "inline-detail-nav", glyph);
    button.type = "button";
    button.dataset.inlineDetailCommand = command;
    button.title = label;
    button.setAttribute("aria-label", label);
    button.disabled = disabled;
    setTooltip(button, label);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      handler();
    });
    return button;
  }

  function renderInlineCardDetail(row, status, visibleIndex, visibleCount) {
    const binding = bindingForRow(row);
    const detail = makeEl("section", "inline-card-detail");
    detail.id = `inline-detail-${row.id}`;
    detail.setAttribute("aria-label", `${row.nameZh || row.nameEn || row.actionKey} 详情编辑`);
    detail.addEventListener("click", (event) => event.stopPropagation());

    const header = makeEl("header", "inline-detail-header");
    const heading = makeEl("div", "inline-detail-heading");
    heading.append(makeEl("span", "inline-detail-kicker", "DETAIL"));
    heading.append(makeEl("strong", "inline-detail-title", row.nameZh || row.nameEn || row.actionKey));
    const pager = makeEl("nav", "inline-detail-pager");
    pager.setAttribute("aria-label", "详情导航");
    pager.append(
      inlineDetailButton("collapse", "收起详情", "⌃", false, collapseInlineDetail),
      inlineDetailButton("previous", "上一个操作", "‹", visibleIndex === 0, () => navigateInlineDetail(-1)),
      makeEl("output", "inline-detail-position", `${visibleIndex + 1} / ${visibleCount}`),
      inlineDetailButton("next", "下一个操作", "›", visibleIndex === visibleCount - 1, () => navigateInlineDetail(1)),
    );
    header.append(heading, pager);

    const body = makeEl("div", "inline-detail-body");
    const settings = makeEl("div", "inline-detail-settings");
    settings.append(renderActivationModePicker(row), renderContextPicker(row));
    const information = renderInlineBindingInformation(row, binding);
    const relationship = makeEl("div", "inline-detail-relationship");
    if (binding?.slot && status.relationship) {
      relationship.append(renderRelationshipMiniCard(row, binding, status));
    } else {
      relationship.append(makeEl("span", "inline-detail-empty", "当前键位无共享、CTX 复用或冲突关系。"));
    }
    body.append(settings, information, relationship);
    detail.append(header, body);
    return detail;
  }

  function detailMotionDuration() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 160;
  }

  function syncExpandedCard(rowId) {
    const card = dom.rows.querySelector(`[data-row-id="${rowId}"]`);
    if (!card) return false;
    const wrapRect = dom.cardWrap.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const target = dom.cardWrap.scrollTop
      + cardRect.top - wrapRect.top
      - (dom.cardWrap.clientHeight - cardRect.height) / 2;
    dom.cardWrap.scrollTo({
      top: Math.max(0, target),
      behavior: detailMotionDuration() ? "smooth" : "auto",
    });
    return true;
  }

  function toggleInlineDetail(rowId) {
    if (detailTransitionLocked) return;
    const row = findRow(rowId);
    if (!row) return;
    if (expandedRowId === rowId) {
      collapseInlineDetail();
      return;
    }
    expandedRowId = row.id;
    expandedProfileId = state.activeProfileId;
    expandedStateRef = state;
    detailTransitionDirection = null;
    pendingExpandedScrollRowId = row.id;
    focusBinding(row);
  }

  function closeInlineDetailState() {
    expandedRowId = null;
    expandedProfileId = null;
    expandedStateRef = null;
    detailTransitionDirection = null;
    pendingExpandedScrollRowId = null;
  }

  function collapseInlineDetail() {
    if (!expandedRowId) return;
    const row = findRow(expandedRowId);
    if (row) rememberEditPosition(row, { expanded: false });
    closeInlineDetailState();
    render();
  }

  function waitForDetailExit(direction) {
    const detail = expandedRowId
      ? dom.rows.querySelector(`[data-row-id="${expandedRowId}"] .inline-card-detail`)
      : null;
    const duration = detailMotionDuration();
    if (!detail || !duration || typeof detail.animate !== "function") return Promise.resolve();
    const animation = detail.animate([
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: `translateY(${direction > 0 ? -8 : 8}px)` },
    ], {
      duration,
      easing: "ease-in",
      fill: "forwards",
    });
    return animation.finished.catch(() => undefined);
  }

  async function navigateInlineDetail(direction) {
    if (detailTransitionLocked || !expandedRowId) return;
    const entries = visibleRows();
    const index = entries.findIndex(({ row }) => row.id === expandedRowId);
    if (index < 0) return;
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= entries.length) return;
    detailTransitionLocked = true;
    const target = entries[targetIndex].row;
    await waitForDetailExit(direction);
    detailTransitionDirection = direction > 0 ? "next" : "previous";
    expandedRowId = target.id;
    expandedProfileId = state.activeProfileId;
    expandedStateRef = state;
    pendingExpandedScrollRowId = target.id;
    focusBinding(target);
    window.setTimeout(() => {
      detailTransitionLocked = false;
    }, detailMotionDuration());
  }

  function reconcileExpandedDetail(entries) {
    if (!expandedRowId) return;
    const profileChanged = expandedProfileId !== state.activeProfileId;
    const workspaceChanged = expandedStateRef !== state;
    const rowMissing = !entries.some(({ row }) => row.id === expandedRowId);
    if (profileChanged || workspaceChanged || rowMissing) closeInlineDetailState();
  }

  function renderBindingConsole(row, binding, status, options = {}) {
    const consoleEl = makeEl("div", "binding-console");
    if (options.includeRelationship && binding?.slot && status.relationship) {
      consoleEl.classList.add("has-conflict", "has-relationship");
    }
    const statusRail = makeEl("div", `status-rail ${status.tone || "muted"}`.trim());
    statusRail.title = status.label;
    if (binding?.note) statusRail.classList.add("noted");
    consoleEl.append(statusRail);

    if (options.includeRelationship && binding?.slot && status.relationship) {
      consoleEl.append(renderRelationshipMiniCard(row, binding, status));
    }

    const controls = makeEl("div", "binding-controls");
    controls.append(renderHandSegment(row, binding));
    controls.append(renderLayerSegment(row, binding));
    controls.append(renderSlotButton(row, binding, status));
    controls.append(renderCardClearButton(row, binding));
    controls.append(renderCardLockButton(row, binding));
    controls.append(renderInlineDetailToggle(row));
    consoleEl.append(controls);
    return consoleEl;
  }

  function activationModeFullLabel(mode) {
    return workspaceCore.normalizeActivationMode(mode).replace(/_/g, " ");
  }

  function renderActivationModePicker(row) {
    const wrap = makeEl("fieldset", "activation-mode-field");
    wrap.addEventListener("click", (event) => event.stopPropagation());
    wrap.append(makeEl("legend", "activation-mode-label", "MODE"));
    const heading = makeEl("div", "activation-mode-heading");
    heading.append(
      makeEl("strong", "activation-mode-title", "触发方式"),
      makeEl("output", "activation-mode-summary", `${modeBadgeLabel(activationModeForRow(row))} · ${activationModeFullLabel(activationModeForRow(row))}`),
    );
    const options = makeEl("div", "activation-mode-grid");
    options.setAttribute("role", "radiogroup");
    options.setAttribute("aria-label", `${row.nameZh || row.nameEn || row.actionKey} 触发模式`);
    const currentMode = activationModeForRow(row);
    for (const mode of activationModes) {
      const option = makeEl("button", "activation-mode-option");
      option.type = "button";
      option.dataset.mode = mode;
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", String(mode === currentMode));
      option.setAttribute("aria-pressed", String(mode === currentMode));
      option.setAttribute("aria-label", `${modeBadgeLabel(mode)} ${activationModeFullLabel(mode)}`);
      option.append(
        makeEl("strong", "activation-mode-abbr", modeBadgeLabel(mode)),
        makeEl("span", "activation-mode-name", activationModeFullLabel(mode)),
      );
      option.addEventListener("click", (event) => {
        event.stopPropagation();
        setRowActivationMode(row, mode);
      });
      options.append(option);
    }
    wrap.append(heading, options);
    return wrap;
  }

  function contextEntries(dimension = "") {
    return Object.values(state.contextCatalog || workspaceCore.DEFAULT_CONTEXT_CATALOG)
      .filter((entry) => entry.id !== workspaceCore.UNSCOPED_CONTEXT_ID)
      .filter((entry) => !dimension || (entry.dimension || entry.exclusiveGroup) === dimension);
  }

  function contextLabels(contextIds) {
    return workspaceCore.normalizeContextIds(contextIds, state.contextCatalog)
      .map((id) => state.contextCatalog[id]?.label || id);
  }

  function contextSummary(row) {
    const labels = contextLabels(contextIdsForRow(row));
    if (labels.length <= 2) return labels.join(" + ");
    return `${labels.length} CTX`;
  }

  function toggledContextIds(row, contextId) {
    if (contextId === workspaceCore.UNSCOPED_CONTEXT_ID) return [workspaceCore.UNSCOPED_CONTEXT_ID];
    const current = contextIdsForRow(row);
    const selected = current.includes(workspaceCore.UNSCOPED_CONTEXT_ID)
      ? [...workspaceCore.DEFAULT_CONTEXT_IDS]
      : current.filter((id) => id !== workspaceCore.UNSCOPED_CONTEXT_ID);
    const dimension = state.contextCatalog[contextId]?.dimension
      || state.contextCatalog[contextId]?.exclusiveGroup
      || "";
    const isSelected = selected.includes(contextId);
    const next = selected.filter((id) => {
      if (id === contextId) return false;
      const entry = state.contextCatalog[id];
      return !dimension || (entry?.dimension || entry?.exclusiveGroup) !== dimension;
    });
    if (!isSelected) next.push(contextId);
    return next.length ? next : [workspaceCore.UNSCOPED_CONTEXT_ID];
  }

  function renderContextPicker(row) {
    const picker = makeEl("fieldset", "context-picker");
    picker.tabIndex = -1;
    picker.addEventListener("click", (event) => event.stopPropagation());
    const legend = makeEl("legend", "context-picker-label", "CTX");
    const heading = makeEl("div", "context-picker-heading");
    const title = makeEl("strong", "context-picker-title", "生效上下文");
    const summary = makeEl("output", "context-picker-summary", contextSummary(row));
    summary.setAttribute("aria-label", "当前 CTX");
    heading.append(title, summary);
    const hint = makeEl("span", "context-picker-hint", "每个维度最多选择一项；点击后立即保存");
    const groups = makeEl("div", "context-dimension-list");
    const selected = new Set(contextIdsForRow(row));
    for (const dimension of contextDimensions) {
      const group = makeEl("section", "context-dimension");
      group.dataset.contextDimension = dimension.id;
      const groupHeading = makeEl("div", "context-dimension-heading");
      groupHeading.append(
        makeEl("strong", "", dimension.label),
        makeEl("small", "", dimension.description),
      );
      const options = makeEl("div", "context-option-grid");
      options.setAttribute("role", "radiogroup");
      options.setAttribute("aria-label", `${row.nameZh || row.nameEn || row.actionKey} ${dimension.label} CTX`);
      for (const entry of contextEntries(dimension.id)) {
        const option = makeEl("button", "context-option");
        option.type = "button";
        option.dataset.contextId = entry.id;
        option.setAttribute("role", "radio");
        option.setAttribute("aria-checked", String(selected.has(entry.id)));
        option.setAttribute("aria-pressed", String(selected.has(entry.id)));
        option.setAttribute("aria-label", `${selected.has(entry.id) ? "移除" : "选择"} CTX ${entry.label}`);
        option.append(
          makeEl("span", "context-option-indicator", selected.has(entry.id) ? "●" : "○"),
          makeEl("strong", "context-option-name", entry.label),
        );
        option.addEventListener("click", (event) => {
          event.stopPropagation();
          setRowContexts(row, toggledContextIds(row, entry.id));
        });
        options.append(option);
      }
      group.append(groupHeading, options);
      groups.append(group);
    }
    const clear = makeEl("button", "context-clear");
    clear.type = "button";
    clear.dataset.contextId = workspaceCore.UNSCOPED_CONTEXT_ID;
    clear.setAttribute("aria-pressed", String(selected.has(workspaceCore.UNSCOPED_CONTEXT_ID)));
    clear.setAttribute("aria-label", "清除 CTX，设为 UNSCOPED");
    clear.append(
      makeEl("strong", "", "CLEAR CTX"),
      makeEl("span", "", "UNSCOPED"),
    );
    clear.addEventListener("click", (event) => {
      event.stopPropagation();
      setRowContexts(row, [workspaceCore.UNSCOPED_CONTEXT_ID]);
    });
    picker.append(legend, heading, hint, groups, clear);
    return picker;
  }

  function renderInlineBindingInformation(row, binding) {
    const information = makeEl("div", "inline-detail-information");
    const description = makeEl("section", "inline-information-panel inline-description-panel");
    description.append(
      makeEl("span", "inline-information-label", "KEYBINDING DESCRIPTION · 键位说明"),
      makeEl("p", "inline-information-copy", row.description || row.actionText || row.suggestedInput || "暂无键位说明。"),
    );

    const note = makeEl("label", "inline-information-panel inline-note-panel");
    note.append(makeEl("span", "inline-information-label", "BINDING NOTE · 绑定备注"));
    const input = makeEl("textarea", "inline-binding-note");
    input.rows = 3;
    input.value = binding?.note || "";
    input.disabled = !binding;
    input.placeholder = binding ? "为当前 Profile 中的这个绑定添加备注" : "请先绑定键位，再填写绑定备注";
    input.setAttribute("aria-label", `${row.nameZh || row.nameEn || row.actionKey} 绑定备注`);
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("input", (event) => {
      updateRowNote(row, event.target.value, { syncSelection: row.id === selectedRowId });
    });
    input.addEventListener("change", (event) => {
      updateRowNote(row, event.target.value, {
        syncSelection: row.id === selectedRowId,
        renderRowsAfter: true,
      });
    });
    note.append(input);
    information.append(description, note);
    return information;
  }

  function focusContextPickerForRow(rowId) {
    const picker = dom.rows.querySelector(`[data-row-id="${rowId}"] .inline-card-detail .context-picker`);
    if (!picker) return false;
    picker.focus({ preventScroll: true });
    picker.classList.remove("attention");
    window.requestAnimationFrame(() => picker.classList.add("attention"));
    picker.addEventListener("animationend", () => picker.classList.remove("attention"), { once: true });
    return true;
  }

  function openContextPickerForRow(rowId) {
    if (focusContextPickerForRow(rowId)) return;
    const row = findRow(rowId);
    if (!row) return;
    expandedRowId = row.id;
    expandedProfileId = state.activeProfileId;
    expandedStateRef = state;
    detailTransitionDirection = null;
    pendingExpandedScrollRowId = row.id;
    focusBinding(row);
    window.requestAnimationFrame(() => {
      focusContextPickerForRow(rowId);
    });
  }

  function renderRelationshipMiniCard(row, binding, status) {
    const slot = binding.slot;
    const relationship = status.relationship;
    const related = relationship.relatedBindings || [];
    const removable = related.filter((item) => !item.locked);
    const locked = related.filter((item) => item.locked);
    const type = relationship.type;
    const labels = {
      shared: "共享",
      "context-reuse": "CTX 复用",
      "true-conflict": "冲突",
    };
    const count = type === "shared" ? relationship.referenceRows.length : related.length + 1;
    const card = makeEl("div", `conflict-mini-card relationship-${type}`);
    card.title = type === "shared"
      ? `共享场景：${relationship.referenceRows.map((item) => item.group).join("、")}`
      : `${labels[type]}：${related.map((item) => displayNameForAction(item.actionKey)).join("、")}`;
    const meta = makeEl("div", "conflict-mini-meta");
    const side = handLabels[slot.hand] || slot.hand;
    const layer = slot.slotType === "axis" ? "Axis" : layerLabels[slot.layer || "base"];
    meta.append(makeEl("span", "conflict-mini-tag", labels[type]));
    meta.append(makeEl("span", "conflict-mini-count", `x${count}`));
    const main = makeEl("div", "conflict-mini-main", slotLabel(slot));
    const evidence = type === "shared"
      ? relationship.referenceRows.map((item) => item.group.replace(/^第\s*/, "")).join(" / ")
      : related.map((item) => `${displayNameForAction(item.actionKey)} · ${contextLabels(item.contextIds).join("+")}`).join(" / ");
    const code = makeEl(
      "div",
      "conflict-mini-code",
      `${side} · ${layer} · ${state.uiSettings.showCodes ? compactCodeForSlot(slot) : codeForSlot(slot)}${evidence ? ` · ${evidence}` : ""}`,
    );
    const actions = makeEl("div", "conflict-mini-actions");
    if (type === "shared") {
      const inspect = makeEl("button", "conflict-mini-action", "查看来源");
      inspect.type = "button";
      inspect.addEventListener("click", (event) => {
        event.stopPropagation();
        showToast(relationship.referenceRows.map((item) => `${item.group} · ${item.nameZh || item.nameEn}`).join("；"), { duration: 6200 });
      });
      actions.append(inspect);
    } else {
      const edit = makeEl("button", "conflict-mini-action", "编辑 CTX");
      edit.type = "button";
      edit.addEventListener("click", (event) => {
        event.stopPropagation();
        openContextPickerForRow(row.id);
      });
      actions.append(edit);
      if (type === "true-conflict") {
        const unbind = makeEl("button", "conflict-mini-action danger", removable.length ? "解绑其它" : "锁定中");
        unbind.type = "button";
        unbind.disabled = !removable.length;
        unbind.title = removable.length
          ? `解绑 ${removable.length} 个未锁定冲突 binding`
          : "其它冲突 binding 已锁定，需先解除锁定";
        if (locked.length) unbind.classList.add("has-locked");
        unbind.addEventListener("click", (event) => {
          event.stopPropagation();
          resolveBindingConflict(binding);
        });
        actions.append(unbind);
      }
    }
    card.append(meta, main, code, actions);
    return card;
  }

  function conflictingBindingsFor(binding) {
    if (!binding?.slot) return [];
    return relatedBindingsFor(binding)
      .filter((item) => item.relationship === "true-conflict")
      .map((item) => item.binding);
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
    if (row) applySelectedRow(row);
    saveState();
    render({ mapActionKey: binding.actionKey, revealSelection: true, pulseSelection: true });
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
      const active = binding?.slot?.slotType === "axis"
        ? layer === "base"
        : binding?.slot
          ? (binding.slot.layer || "base") === layer
          : row.id === selectedRowId && (targetHand ? targetLayer === layer : pendingLayer === layer);
      const button = makeEl("button", active ? "active" : "", layerLabels[layer]);
      button.type = "button";
      const fixedBase = Boolean(binding?.slot && control && !control.shiftCapable);
      const fixedBaseLabel = isAxis ? "Axis 不使用 Shift 层" : `${control?.label || "当前键位"} 只支持 Base 层`;
      button.title = (isAxis || fixedBase) && layer !== "base" ? fixedBaseLabel : layerLabels[layer];
      setTooltip(button, (isAxis || fixedBase) && layer !== "base" ? fixedBaseLabel : `将动作目标切到 ${layerLabels[layer]} 层`);
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
    const isSelected = row.id === selectedRowId;
    const label = makeEl("span", "slot-pill-label", binding?.slot ? slotLabel(binding.slot) : isSelected ? "待点选" : "未分配");
    const mode = activationModeForRow(row);
    const modeBadge = makeEl("span", "operation-mode-badge", modeBadgeLabel(mode));
    modeBadge.dataset.mode = mode;
    modeBadge.title = `MODE: ${mode}`;
    modeBadge.setAttribute("aria-label", `触发模式 ${mode}`);
    let slotMeta = "";
    if (row.id === selectedRowId) {
      if (targetHand) {
        slotMeta = `${targetHand === "left" ? "L" : "R"} · ${layerLabels[targetLayer]}`;
      } else if (pendingLayer) {
        slotMeta = `${layerLabels[pendingLayer]} · 待L/R`;
      }
    }
    if (binding?.slot && state.uiSettings.showCodes) {
      slotMeta = compactCodeForSlot(binding.slot);
    }
    button.append(light, label, modeBadge);
    if (slotMeta) button.append(makeEl("span", "slot-pill-code", slotMeta));
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
    const row = findRow(rowId);
    applySelectedRow(row, { revealBinding: true });
    saveState();
    render({ pulseSelection: true });
  }

  function focusBinding(row) {
    applySelectedRow(row, { revealBinding: true });
    saveState();
    render({ pulseSelection: true });
  }

  function setBindingHand(row, hand) {
    applySelectedRow(row);
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
    applySelectedRow(row);
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
      if (layer !== "base") {
        showToast("Axis 绑定固定在 Base 层；先解绑当前键位后再选择 S1/S2。", { tone: "warn" });
      }
      focusBinding(row);
      return;
    }
    if ((binding.slot.layer || "base") === layer) {
      focusBinding(row);
      return;
    }
    const control = getControl(binding.slot.hand, binding.slot.control);
    if (!control?.shiftCapable && layer !== "base") {
      showToast(`${control?.label || "当前键位"} 只支持 Base 层；先解绑当前键位后再选择 S1/S2。`, { tone: "warn" });
      focusBinding(row);
      return;
    }
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

    const activationMode = activationModeForRow(row);
    const occ = occupancy();
    const candidate = {
      actionKey: row.actionKey,
      canonicalActionKey: row.canonicalActionKey || row.actionKey,
      slot,
      activationMode,
      contextIds: contextIdsForRow(row),
    };
    const occupants = (occ.get(bindingOccupancyKey(candidate)) || [])
      .filter((item) => item.actionKey !== row.actionKey)
      .filter((item) => classifyBindings(candidate, item) === "true-conflict");
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
      activationMode,
      contextIds: candidate.contextIds,
      enabled: true,
      locked: existing?.locked || false,
      note: existing?.note || "",
    };
    applySelectedRow(row);
    syncSlotLayerContext(slot);
    saveState();
    render({ pulseSelection: true });
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
    applySelectedRow(findRow(snapshot.rowId));
    saveState();
    render({ revealSelection: true, pulseSelection: true });
    showToast("已撤销刚才设定。", { tone: "info" });
  }

  function revealBinding(rowId) {
    const row = findRow(rowId);
    applySelectedRow(row);
    saveState();
    render({ mapActionKey: row?.actionKey, revealSelection: true, pulseSelection: true });
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
    applySelectedRow(row, { revealBinding: true });
    const binding = activeBindings()[row.actionKey];
    if (!binding) {
      saveState();
      render({ pulseSelection: true });
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
    applySelectedRow(row, { revealBinding: true });
    const bindings = activeBindings();
    const binding = bindings[row.actionKey];
    if (!binding) {
      saveState();
      render({ pulseSelection: true });
      return false;
    }
    if (binding.locked) {
      saveState();
      render({ pulseSelection: true });
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
      render();
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
            selectedRowId = findRow(state.uiSettings.selectedRowId)?.id || null;
            resetTransientEditPosition();
            saveState();
            render({ revealSelection: true, pulseSelection: true });
            if (pendingRepairItems().length) {
              notifyPendingRepairs("Workspace 已导入并迁移到 v4");
            } else {
              showToast("Workspace 已导入。", { tone: "info" });
            }
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
    prepareEditPositionForViewChange();
    const previousActionKey = findRow(selectedRowId)?.actionKey
      || (editAnchorIsCurrent() ? editPositionAnchor.actionKey : null);
    state.uiSettings.activeList = listType;
    saveState();
    render({ mapActionKey: previousActionKey, revealSelection: true, pulseSelection: true });
  }

  function setStatusFilter(filter) {
    prepareEditPositionForViewChange();
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

  function selectionContextSnapshot() {
    return JSON.stringify({
      selectedRowId,
      persistedSelectedRowId: state.uiSettings.selectedRowId || null,
      layers: state.uiSettings.layers || null,
      targetHand: getTargetHand(),
      pendingLayer: getPendingLayer(),
    });
  }

  function render(options = {}) {
    const selectionBefore = selectionContextSnapshot();
    const entries = visibleRows();
    reconcileVisibleSelection(entries, options);
    if (selectionBefore !== selectionContextSnapshot()
      || (state.uiSettings.selectedRowId || null) !== selectedRowId) {
      saveState();
    }
    renderProfileControls();
    renderRepairControl();
    renderSyncControl();
    renderTabsAndFilters();
    renderStickPanel("left");
    renderStickPanel("right");
    renderRows(entries);
    renderSelectionBar();
    selectionArrivalSlotKey = "";
  }

  dom.search.addEventListener("input", (event) => {
    prepareEditPositionForViewChange();
    searchText = event.target.value;
    render();
  });
  dom.cardWrap.addEventListener("scroll", () => {
    if (editPositionScrollFrame !== null) return;
    editPositionScrollFrame = window.requestAnimationFrame(() => {
      editPositionScrollFrame = null;
      captureEditPositionCardOffset();
    });
  }, { passive: true });
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
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && expandedRowId) collapseInlineDetail();
  });
  dom.exportBtn.addEventListener("click", exportProfile);
  dom.importInput.addEventListener("change", (event) => importProfile(event.target.files[0]));
  dom.syncBtn.addEventListener("click", openSyncDialog);
  dom.syncSaveBtn.addEventListener("click", saveSyncDialog);
  dom.syncTestBtn.addEventListener("click", testSyncConnection);
  dom.syncPullBtn.addEventListener("click", pullSyncWorkspace);
  dom.syncPushBtn.addEventListener("click", () => pushSyncWorkspace());
  dom.syncForcePushBtn.addEventListener("click", () => requestForcePush(syncConfig.lastRemoteSha || ""));
  dom.repairBtn.addEventListener("click", openRepairDialog);
  dom.repairResolveBtn.addEventListener("click", resolveSelectedRepair);
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
  render({ revealSelection: true, pulseSelection: true });
  notifyPendingRepairs("本地 Workspace 已迁移到 v4");
})();
