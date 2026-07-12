import { createServer } from "node:http";
import { createReadStream, mkdtempSync, rmSync } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import net from "node:net";

const repoRoot = path.resolve(import.meta.dirname, "..");
const appRoot = path.join(repoRoot, "binding-planner");
const chromeBin = process.env.CHROME_BIN || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const workspaceKey = "sc-dual-vkb-binding-planner:v1";
const syncConfigKey = "sc-dual-vkb-binding-planner:sync";
const syncTokenKey = "sc-dual-vkb-binding-planner:sync-token";
const responsiveViewports = [
  { name: "phone", width: 390, height: 844, touch: true },
  { name: "ipad-portrait", width: 1024, height: 1366, touch: true },
  { name: "ipad-landscape", width: 1366, height: 1024, touch: true },
  { name: "2k", width: 2560, height: 1440, touch: false },
  { name: "4k", width: 3840, height: 2160, touch: false },
];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function smokeInjectSource() {
  return `
(() => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  function utf8ToBase64(text) {
    const bytes = encoder.encode(String(text));
    let binary = "";
    for (let index = 0; index < bytes.length; index += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
    }
    return btoa(binary);
  }

  function base64ToUtf8(value) {
    const binary = atob(String(value || "").replace(/\\s/g, ""));
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return decoder.decode(bytes);
  }

  function jsonResponse(body, status) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }

  function activeWorkspace() {
    return JSON.parse(localStorage.getItem(${JSON.stringify(workspaceKey)}) || "{}");
  }

  function workspaceVariant(profileId) {
    const workspace = activeWorkspace();
    workspace.activeProfileId = profileId;
    workspace.uiSettings = {
      ...(workspace.uiSettings || {}),
      selectedRowId: "scenario:flight-ready",
    };
    workspace.updatedAt = new Date().toISOString();
    return workspace;
  }

  window.__syncSmoke = {
    remoteText: "",
    remoteSha: "",
    requestLog: [],
    writeCount: 0,
    nextSha: 1,
    setRemoteWorkspace(workspace, sha) {
      this.remoteText = JSON.stringify(workspace, null, 2);
      this.remoteSha = sha;
    },
    async handleFetch(input, init = {}) {
      const url = new URL(String(input));
      const method = String(init.method || "GET").toUpperCase();
      this.requestLog.push({ method, url: url.toString() });
      const auth = String(init.headers?.Authorization || "");
      if (!auth.includes("smoke-token")) {
        return jsonResponse({ message: "Bad credentials" }, 401);
      }
      const isRepo = url.pathname === "/repos/smoke-owner/smoke-repo";
      const isContent = url.pathname === "/repos/smoke-owner/smoke-repo/contents/smoke-workspace.json";
      if (isRepo) return jsonResponse({ full_name: "smoke-owner/smoke-repo" }, 200);
      if (!isContent) return jsonResponse({ message: "Not Found" }, 404);
      if (method === "GET") {
        if (!this.remoteText) return jsonResponse({ message: "Not Found" }, 404);
        return jsonResponse({
          type: "file",
          encoding: "base64",
          sha: this.remoteSha,
          content: utf8ToBase64(this.remoteText),
        }, 200);
      }
      if (method === "PUT") {
        const body = JSON.parse(init.body || "{}");
        if (this.remoteSha && body.sha !== this.remoteSha) {
          return jsonResponse({ message: "sha does not match" }, 409);
        }
        if (!this.remoteSha && body.sha) {
          return jsonResponse({ message: "sha does not exist" }, 409);
        }
        this.remoteText = base64ToUtf8(body.content);
        this.remoteSha = \`sha-\${this.nextSha++}\`;
        this.writeCount += 1;
        return jsonResponse({ content: { sha: this.remoteSha } }, body.sha ? 200 : 201);
      }
      return jsonResponse({ message: "Unsupported method" }, 405);
    },
  };

  window.fetch = (...args) => window.__syncSmoke.handleFetch(...args);

  window.__syncSmokeRemoteChange = (profileId = "ground") => {
    window.__syncSmoke.setRemoteWorkspace(workspaceVariant(profileId), \`external-\${Date.now()}\`);
  };

  window.__syncSmokeImport = (profileId = "combat") => {
    const workspace = workspaceVariant(profileId);
    const file = new File([JSON.stringify(workspace, null, 2)], "smoke-import.json", {
      type: "application/json",
    });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    const input = document.getElementById("importInput");
    Object.defineProperty(input, "files", {
      configurable: true,
      value: dataTransfer.files,
    });
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  window.__syncSmokeImportCorrupt = () => {
    const workspace = activeWorkspace();
    workspace.schemaVersion = 2;
    workspace.activeProfileId = "default";
    workspace.profiles.default.repairQueue = [];
    workspace.profiles.default.bindings["1372"] = {
      actionKey: "1372",
      slot: { slotType: "button", hand: "right", control: "A3_left", layer: "base" },
      enabled: true,
      locked: false,
      note: "browser repair smoke",
    };
    const file = new File([JSON.stringify(workspace, null, 2)], "corrupt-v2-import.json", {
      type: "application/json",
    });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    const input = document.getElementById("importInput");
    Object.defineProperty(input, "files", {
      configurable: true,
      value: dataTransfer.files,
    });
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };
})();
`;
}

async function serveSmokeHtml() {
  const original = await readFile(path.join(appRoot, "index.html"), "utf8");
  const needle = '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="./app.js?v=retro-41"></script>';
  if (!original.includes(needle)) {
    throw new Error("Unable to find sync-core/app.js script boundary in index.html");
  }
  return original.replace(
    needle,
    '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="/__sync-smoke-inject.js"></script>\n    <script src="./app.js?v=retro-41"></script>',
  );
}

async function createAppServer() {
  const smokeHtml = await serveSmokeHtml();
  const inject = smokeInjectSource();
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || "/", "http://127.0.0.1");
      if (url.pathname === "/__sync-smoke.html") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(smokeHtml);
        return;
      }
      if (url.pathname === "/__sync-smoke-inject.js") {
        res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
        res.end(inject);
        return;
      }
      const safePath = path.normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
      const filePath = path.join(appRoot, safePath === "/" ? "index.html" : safePath);
      const fileStat = await stat(filePath);
      if (!fileStat.isFile()) throw new Error("Not a file");
      res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
      createReadStream(filePath).pipe(res);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  return {
    server,
    url: `http://127.0.0.1:${server.address().port}/__sync-smoke.html`,
  };
}

async function freePort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const { port } = server.address();
  await new Promise((resolve) => server.close(resolve));
  return port;
}

async function waitForJson(url, timeoutMs = 10000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw lastError || new Error(`Timed out waiting for ${url}`);
}

async function launchChrome(url) {
  const debugPort = await freePort();
  const userDataDir = mkdtempSync(path.join(tmpdir(), "vkb-sync-smoke-chrome-"));
  const chrome = spawn(chromeBin, [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-sync",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    url,
  ], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stderr = "";
  chrome.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });
  chrome.stdout.resume();
  const listUrl = `http://127.0.0.1:${debugPort}/json/list`;
  const targets = await waitForJson(listUrl);
  const target = targets.find((item) => item.type === "page" && item.webSocketDebuggerUrl);
  if (!target) throw new Error(`No debuggable Chrome page target. stderr=${stderr}`);
  return { chrome, debugPort, target, userDataDir };
}

function createCdpClient(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message || JSON.stringify(message.error)));
      else resolve(message.result || {});
    }
  });
  return new Promise((resolve, reject) => {
    socket.addEventListener("open", () => {
      resolve({
        call(method, params = {}) {
          const messageId = ++id;
          socket.send(JSON.stringify({ id: messageId, method, params }));
          return new Promise((resolveCall, rejectCall) => {
            pending.set(messageId, { resolve: resolveCall, reject: rejectCall });
          });
        },
        close() {
          socket.close();
        },
      });
    }, { once: true });
    socket.addEventListener("error", () => reject(new Error(`Unable to connect CDP websocket ${wsUrl}`)), { once: true });
  });
}

function pageExpression() {
  return `
(async () => {
  const workspaceKey = ${JSON.stringify(workspaceKey)};
  const syncConfigKey = ${JSON.stringify(syncConfigKey)};
  const syncTokenKey = ${JSON.stringify(syncTokenKey)};
  const steps = [];
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const $ = (selector) => {
    const element = document.querySelector(selector);
    if (!element) throw new Error(\`Missing selector \${selector}\`);
    return element;
  };
  const click = (selector) => {
    $(selector).click();
  };
  const fill = (selector, value) => {
    const element = $(selector);
    element.value = value;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const setChecked = (selector, checked) => {
    const element = $(selector);
    element.checked = checked;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const select = (selector, value) => {
    const element = $(selector);
    element.value = value;
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const primaryToast = () => {
    const buttons = Array.from(document.querySelectorAll("button.toast-action.primary"));
    if (!buttons.length) throw new Error("Expected at least one primary toast action");
    buttons[buttons.length - 1].click();
  };
  const state = () => {
    const workspace = JSON.parse(localStorage.getItem(workspaceKey) || "{}");
    const syncConfig = JSON.parse(localStorage.getItem(syncConfigKey) || "{}");
    return {
      activeProfileId: workspace.activeProfileId || "",
      schemaVersion: workspace.schemaVersion || 0,
      repairCount: Object.values(workspace.profiles || {}).reduce((sum, profile) => sum + (profile.repairQueue || []).length, 0),
      hasNumericBinding: Object.values(workspace.profiles || {}).some((profile) => Object.hasOwn(profile.bindings || {}, "1372")),
      repairButtonVisible: !$("#repairBtn").hidden,
      repairDialogOpen: $("#repairDialog").open,
      repairCandidateCount: $("#repairTargetSelect").options.length,
      modeSelectCount: document.querySelectorAll(".activation-mode-select").length,
      contextControlCount: document.querySelectorAll(".context-picker-button").length,
      compactCardCount: document.querySelectorAll("#bindingRows .binding-card.compact-card").length,
      inlineModeControlCount: document.querySelectorAll("#bindingRows .activation-mode-select").length,
      inlineContextControlCount: document.querySelectorAll("#bindingRows .context-picker-button").length,
      detailOpen: !$("#cardDetailOverlay").hidden,
      detailRowId: $("#cardDetailOverlay").dataset.rowId || "",
      detailTitle: $("#cardDetailTitle").textContent || "",
      detailPosition: $("#cardDetailPosition").textContent || "",
      detailModeControlCount: document.querySelectorAll("#cardDetailOverlay .activation-mode-select").length,
      detailContextControlCount: document.querySelectorAll("#cardDetailOverlay .context-picker-button").length,
      detailStatePersisted: Object.keys(workspace.uiSettings || {}).some((key) => /detail|overlay/i.test(key)),
      selectedCompactRowId: document.querySelector("#bindingRows .binding-card.selected")?.dataset.rowId || "",
      currentStickSlotCount: document.querySelectorAll(".stick-panel .slot.current").length,
      cardWrapScrollTop: $("#cardWrap").scrollTop,
      selectedRowCentered: (() => {
        const wrap = $("#cardWrap").getBoundingClientRect();
        const selected = document.querySelector("#bindingRows .binding-card.selected")?.getBoundingClientRect();
        if (!selected) return false;
        const center = selected.top + selected.height / 2;
        return center >= wrap.top + wrap.height * 0.2 && center <= wrap.bottom - wrap.height * 0.2;
      })(),
      detailMatchesStageWidth: (() => {
        const stage = $("#cardStage").getBoundingClientRect();
        const detail = $("#cardDetailOverlay").getBoundingClientRect();
        return Math.abs(stage.width - detail.width) <= 1;
      })(),
      defaultActionContexts: workspace.profiles?.default?.actionContexts || {},
      rowRelationships: {
        scenario1: document.querySelector('[data-row-id="scenario-1"] .compact-relationship')?.textContent || "",
        scenario8: document.querySelector('[data-row-id="scenario-8"] .compact-relationship')?.textContent || "",
        scenario69: document.querySelector('[data-row-id="scenario-69"] .compact-relationship')?.textContent || "",
      },
      rowConflicts: {
        scenario1: document.querySelector('[data-row-id="scenario-1"]')?.classList.contains("has-conflict") || false,
        scenario69: document.querySelector('[data-row-id="scenario-69"]')?.classList.contains("has-conflict") || false,
      },
      repairTargetBinding: window.__repairSmokeTarget
        ? workspace.profiles?.default?.bindings?.[window.__repairSmokeTarget] || null
        : null,
      selectedRowId: workspace.uiSettings?.selectedRowId || "",
      showCodes: Boolean(workspace.uiSettings?.showCodes),
      selectedNote: workspace.profiles?.[workspace.activeProfileId]?.notes?.[workspace.uiSettings?.selectedRowId] || "",
      syncConfig,
      syncConfigHasToken: Object.prototype.hasOwnProperty.call(syncConfig, "token"),
      localToken: localStorage.getItem(syncTokenKey) || "",
      sessionToken: sessionStorage.getItem(syncTokenKey) || "",
      status: $("#syncStatus").textContent || "",
      toasts: Array.from(document.querySelectorAll(".toast-message")).map((node) => node.textContent || ""),
      profileValue: $("#profileSelect").value || "",
      profileOptions: Array.from($("#profileSelect").options).map((option) => ({
        value: option.value,
        label: option.textContent || "",
      })),
      remoteSha: window.__syncSmoke.remoteSha,
      writeCount: window.__syncSmoke.writeCount,
    };
  };
  const waitFor = async (predicate, label, timeoutMs = 5000) => {
    const started = Date.now();
    let current;
    while (Date.now() - started < timeoutMs) {
      current = state();
      if (predicate(current)) return current;
      await sleep(50);
    }
    throw new Error(\`\${label} timed out with state \${JSON.stringify(current)}\`);
  };
  const createProfile = async (name, expectedId) => {
    click("#profileAddBtn");
    fill("#profileNewName", name);
    click("#profileCreateBtn");
    await waitFor(
      (current) => current.activeProfileId === expectedId && current.profileValue === expectedId,
      "create profile " + expectedId,
    );
  };
  const openDetail = async (rowId) => {
    click(\`[data-row-id="\${rowId}"]\`);
    await waitFor(
      (current) => current.detailOpen && current.detailRowId === rowId && current.selectedCompactRowId === rowId,
      \`open detail \${rowId}\`,
    );
  };
  const setRowContext = async (rowId, actionKey, contextId) => {
    await openDetail(rowId);
    click("#cardDetailOverlay .context-picker-button");
    setChecked(\`#cardDetailOverlay .context-option input[value="\${contextId}"]\`, true);
    click("#cardDetailOverlay .context-picker-actions .primary");
    await waitFor(
      (current) => current.defaultActionContexts[actionKey]?.includes(contextId),
      \`set context \${contextId} on \${rowId}\`,
    );
  };
  const record = (step) => {
    const current = state();
    steps.push({
      step,
      activeProfileId: current.activeProfileId,
      showCodes: current.showCodes,
      selectedNote: current.selectedNote,
      status: current.status,
      remoteSha: current.remoteSha,
      writeCount: current.writeCount,
      syncLastRemoteSha: current.syncConfig?.lastRemoteSha || "",
      sessionToken: current.sessionToken ? "present" : "",
      localToken: current.localToken ? "present" : "",
      toasts: current.toasts.slice(-3),
    });
  };

  if (state().compactCardCount === 0) throw new Error("Compact operation rows are missing");
  if (state().inlineModeControlCount || state().inlineContextControlCount) {
    throw new Error("Compact rows must not contain inline MODE or CTX controls");
  }
  if (JSON.stringify(state().profileOptions) !== JSON.stringify([{ value: "default", label: "Default" }])) {
    throw new Error("New workspace must start with one Default Profile: " + JSON.stringify(state().profileOptions));
  }
  if (state().rowRelationships.scenario1 !== "冲突") {
    throw new Error("Expected initial same-slot conflict for scenario-1: " + JSON.stringify(state().rowRelationships));
  }
  if (state().rowRelationships.scenario8 !== "共享") {
    throw new Error("Expected shared action relationship for scenario-8: " + JSON.stringify(state().rowRelationships));
  }

  await openDetail("scenario-1");
  if (!state().detailMatchesStageWidth
    || state().detailModeControlCount !== 1
    || state().detailContextControlCount !== 1
    || state().detailStatePersisted) {
    throw new Error("Detail overlay must match the list width and expose one MODE/CTX editor: " + JSON.stringify(state()));
  }
  click('[data-detail-command="next"]');
  await waitFor(
    (current) => current.detailRowId === "scenario-2"
      && current.selectedCompactRowId === "scenario-2"
      && current.currentStickSlotCount > 0
      && current.selectedRowCentered,
    "detail next selection and underlying scroll sync",
  );
  click('[data-detail-command="back"]');
  await waitFor(
    (current) => !current.detailOpen && current.selectedCompactRowId === "scenario-2" && current.selectedRowCentered,
    "close detail",
  );
  record("compact detail navigation synchronized");

  await openDetail("scenario-1");
  click('[data-filter="unbound"]');
  await waitFor(
    (current) => current.detailOpen
      && current.detailRowId !== "scenario-1"
      && current.detailRowId === current.selectedCompactRowId,
    "detail reconciles filtered selection",
  );
  fill("#searchInput", "__no_detail_results__");
  await waitFor((current) => !current.detailOpen && current.compactCardCount === 0, "detail closes on empty result");
  fill("#searchInput", "");
  click('[data-filter="all"]');
  await waitFor((current) => current.compactCardCount > 0, "restore rows after empty result");

  await setRowContext("scenario-1", "pc_interaction_select", "interaction");
  await setRowContext("scenario-69", "v_mfd_soft_select_mfd_primary_short", "mfd");
  await waitFor(
    (current) => current.rowRelationships.scenario1 === "CTX 复用"
      && current.rowRelationships.scenario69 === "CTX 复用"
      && !current.rowConflicts.scenario1
      && !current.rowConflicts.scenario69,
    "mutually exclusive CTX reuse",
  );
  click('[data-detail-command="back"]');
  await waitFor((current) => !current.detailOpen, "close detail before filtering");
  click('[data-filter="issue"]');
  if (document.querySelector('[data-row-id="scenario-1"]') || document.querySelector('[data-row-id="scenario-69"]')) {
    throw new Error("CTX reuse must not appear in the problem filter");
  }
  click('[data-filter="all"]');
  await waitFor((current) => current.rowRelationships.scenario1 === "CTX 复用", "restore all filter");
  record("mutually exclusive contexts reuse one slot");

  await createProfile("Ground", "ground");
  await createProfile("Combat", "combat");
  await createProfile("Mining", "mining");

  select("#profileSelect", "ground");
  await waitFor((current) => current.activeProfileId === "ground" && current.profileValue === "ground", "local profile switch persist");
  record("unconfigured local edit persisted");

  click("#syncBtn");
  fill("#syncOwnerInput", "smoke-owner");
  fill("#syncRepoInput", "smoke-repo");
  fill("#syncBranchInput", "main");
  fill("#syncPathInput", "smoke-workspace.json");
  fill("#syncTokenInput", "smoke-token");
  setChecked("#syncRememberToken", true);
  click("#syncSaveBtn");
  await waitFor((current) => current.sessionToken === "smoke-token", "session token persistence");
  if (state().syncConfigHasToken || state().localToken) throw new Error("token storage boundary failed");
  record("sync config saved without localStorage token");

  click("#syncTestBtn");
  await waitFor((current) => current.status.includes("远端文件不存在"), "missing file setup state");
  record("missing file setup state");

  click("#syncPushBtn");
  await waitFor((current) => current.writeCount === 1 && current.syncConfig.lastRemoteSha === current.remoteSha, "first push create");
  record("first push created remote");

  window.__syncSmokeRemoteChange("ground");
  await waitFor((current) => current.remoteSha.startsWith("external-"), "external remote change");
  record("remote externally changed");

  click("#syncPushBtn");
  await waitFor((current) => current.status.includes("远端冲突") && current.writeCount === 1, "ordinary push conflict");
  record("ordinary push conflict blocked");

  primaryToast();
  await waitFor((current) => current.toasts.some((text) => text.includes("强制 Push")), "force confirmation");
  record("force confirmation shown");
  primaryToast();
  await waitFor((current) => current.writeCount === 2 && current.syncConfig.lastRemoteSha === current.remoteSha, "force push");
  record("force push confirmed and written");

  window.__syncSmokeRemoteChange("ground");
  const remoteShaForPull = window.__syncSmoke.remoteSha;
  click("#syncPullBtn");
  await waitFor((current) => current.toasts.some((text) => text.includes("Pull 会覆盖")), "pull overwrite confirmation");
  record("pull overwrite confirmation shown");
  primaryToast();
  await waitFor((current) => current.activeProfileId === "ground" && current.syncConfig.lastRemoteSha === remoteShaForPull, "pull overwrite applied");
  record("pull overwrite applied");

  select("#profileSelect", "mining");
  await waitFor((current) => current.activeProfileId === "mining" && current.profileValue === "mining", "profile switch");
  record("multi-profile switch works");

  click("#exportBtn");
  await waitFor((current) => current.toasts.some((text) => text.includes("Workspace JSON 已导出")), "export toast");
  record("export still works");

  window.__syncSmokeImport("combat");
  await waitFor((current) => current.toasts.some((text) => text.includes("导入会覆盖")), "import overwrite confirmation");
  record("import overwrite confirmation shown");
  primaryToast();
  await waitFor((current) => current.activeProfileId === "combat", "import applied");
  record("import still works");

  await sleep(400);
  window.__syncSmokeImportCorrupt();
  await waitFor((current) => current.toasts.some((text) => text.includes("导入会覆盖")), "corrupt import confirmation");
  primaryToast();
  await waitFor(
    (current) => current.schemaVersion === 4 && current.repairCount === 1 && !current.hasNumericBinding && current.repairButtonVisible,
    "corrupt binding quarantine",
  );
  record("v2 numeric binding quarantined");

  click("#repairBtn");
  await waitFor((current) => current.repairDialogOpen && current.repairCandidateCount === 89, "repair dialog candidates");
  window.__repairSmokeTarget = $("#repairTargetSelect").value;
  select("#repairModeSelect", "DOUBLE_TAP");
  click("#repairResolveBtn");
  await waitFor(
    (current) => current.repairCount === 0
      && !current.repairButtonVisible
      && current.repairTargetBinding?.activationMode === "DOUBLE_TAP"
      && current.repairTargetBinding?.slot?.control === "A3_left",
    "repair resolution",
  );
  record("quarantined binding explicitly resolved");

  return steps;
})()
`;
}

async function evaluate(cdp, expression, options = {}) {
  const result = await cdp.call("Runtime.evaluate", {
    expression,
    awaitPromise: options.awaitPromise !== false,
    returnByValue: true,
    userGesture: true,
  });
  if (result.exceptionDetails) {
    const description = result.exceptionDetails.exception?.description || result.exceptionDetails.text;
    throw new Error(description);
  }
  return result.result?.value;
}

function appReadyExpression() {
  return `
    new Promise((resolve, reject) => {
      const started = Date.now();
      const timer = setInterval(() => {
        if (document.readyState === "complete" && document.querySelector("#syncBtn") && document.querySelectorAll(".binding-card").length) {
          clearInterval(timer);
          resolve(true);
        } else if (Date.now() - started > 10000) {
          clearInterval(timer);
          reject(new Error("App did not finish loading for smoke"));
        }
      }, 50);
    })
  `;
}

function responsiveGeometryExpression() {
  return `
    (() => {
      const rect = (selector) => {
        const element = document.querySelector(selector);
        if (!element) throw new Error("Missing responsive selector " + selector);
        const value = element.getBoundingClientRect();
        return { top: value.top, left: value.left, right: value.right, bottom: value.bottom, width: value.width, height: value.height };
      };
      const cards = Array.from(document.querySelectorAll(".binding-card"));
      const relationshipCards = Array.from(document.querySelectorAll(".conflict-mini-card"));
      const compactCards = Array.from(document.querySelectorAll(".binding-card.compact-card"));
      const touchControls = Array.from(document.querySelectorAll(
        ".activation-mode-select, .context-picker-button, [data-filter], .tab-button, .conflict-mini-action, .card-detail-nav",
      )).filter((element) => element.getClientRects().length > 0);
      const detail = document.querySelector("#cardDetailOverlay");
      const detailVisible = detail && !detail.hidden;
      const detailNav = detailVisible
        ? Array.from(detail.querySelectorAll(".card-detail-nav")).filter((element) => element.getClientRects().length > 0)
        : [];
      return {
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        workspace: rect(".workspace"),
        list: rect(".list-zone"),
        listControls: rect(".list-controls"),
        leftPanel: rect("#leftPanel"),
        rightPanel: rect("#rightPanel"),
        cardStage: rect("#cardStage"),
        cardWrap: rect("#cardWrap"),
        compactCardHeightRange: compactCards.length
          ? {
            min: Math.min(...compactCards.map((element) => element.getBoundingClientRect().height)),
            max: Math.max(...compactCards.map((element) => element.getBoundingClientRect().height)),
          }
          : { min: 0, max: 0 },
        overflowCards: cards
          .filter((element) => element.scrollWidth > element.clientWidth + 1)
          .map((element) => element.dataset.rowId),
        overflowRelationshipCards: relationshipCards
          .filter((element) => element.scrollWidth > element.clientWidth + 1)
          .map((element) => element.closest(".binding-card")?.dataset.rowId || "unknown"),
        minTouchControlHeight: touchControls.length
          ? Math.min(...touchControls.map((element) => element.getBoundingClientRect().height))
          : 0,
        detail: detailVisible ? {
          rect: rect("#cardDetailOverlay"),
          body: rect("#cardDetailBody"),
          horizontalOverflow: detail.scrollWidth > detail.clientWidth + 1
            || document.querySelector("#cardDetailBody").scrollWidth > document.querySelector("#cardDetailBody").clientWidth + 1,
          minNavHeight: detailNav.length
            ? Math.min(...detailNav.map((element) => element.getBoundingClientRect().height))
            : 0,
        } : null,
      };
    })()
  `;
}

function assertResponsiveGeometry(viewport, result) {
  const tolerance = 1;
  if (result.documentWidth > viewport.width + tolerance || result.bodyWidth > viewport.width + tolerance) {
    throw new Error(`${viewport.name} horizontal overflow: document=${result.documentWidth}, body=${result.bodyWidth}, viewport=${viewport.width}`);
  }
  if (result.overflowCards.length || result.overflowRelationshipCards.length) {
    throw new Error(`${viewport.name} card overflow: ${JSON.stringify({
      cards: result.overflowCards,
      relationships: result.overflowRelationshipCards,
    })}`);
  }
  if (result.compactCardHeightRange.max > 76) {
    throw new Error(`${viewport.name} compact cards are too tall: ${JSON.stringify(result.compactCardHeightRange)}`);
  }
  if (result.listControls.left < result.list.left - tolerance || result.listControls.right > result.list.right + tolerance) {
    throw new Error(`${viewport.name} list controls escape list zone: ${JSON.stringify({
      list: result.list,
      listControls: result.listControls,
    })}`);
  }
  if (viewport.touch && result.minTouchControlHeight < 36) {
    throw new Error(`${viewport.name} touch target below 36px: ${result.minTouchControlHeight}`);
  }
  if (viewport.name === "ipad-portrait") {
    if (!(result.list.top + tolerance < result.leftPanel.top && result.list.top + tolerance < result.rightPanel.top)) {
      throw new Error(`ipad-portrait must place list before both panels: ${JSON.stringify(result)}`);
    }
    if (Math.abs(result.leftPanel.top - result.rightPanel.top) > tolerance) {
      throw new Error(`ipad-portrait panels must share one row: ${JSON.stringify(result)}`);
    }
  }
  if (viewport.name === "ipad-landscape") {
    if (result.leftPanel.width <= 0 || result.rightPanel.width <= 0 || result.list.width < 700) {
      throw new Error(`ipad-landscape cockpit is not simultaneously usable: ${JSON.stringify(result)}`);
    }
    if (result.leftPanel.width > 330 || result.rightPanel.width > 330) {
      throw new Error(`ipad-landscape stick rails are too wide: ${JSON.stringify(result)}`);
    }
  }
  if ((viewport.name === "2k" || viewport.name === "4k") && result.workspace.width > 2400 + tolerance) {
    throw new Error(`${viewport.name} workspace exceeds 2400px: ${result.workspace.width}`);
  }
  if (result.detail) {
    if (Math.abs(result.detail.rect.width - result.cardStage.width) > tolerance
      || Math.abs(result.detail.rect.left - result.cardStage.left) > tolerance) {
      throw new Error(`${viewport.name} detail overlay does not match card stage: ${JSON.stringify({
        stage: result.cardStage,
        detail: result.detail.rect,
      })}`);
    }
    if (result.detail.horizontalOverflow) {
      throw new Error(`${viewport.name} detail overlay has horizontal overflow`);
    }
    if (viewport.touch && result.detail.minNavHeight < 44) {
      throw new Error(`${viewport.name} detail navigation target below 44px: ${result.detail.minNavHeight}`);
    }
  }
}

async function verifyResponsiveMatrix(cdp, url) {
  const results = [];
  for (const viewport of responsiveViewports) {
    await cdp.call("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await cdp.call("Emulation.setTouchEmulationEnabled", {
      enabled: viewport.touch,
      maxTouchPoints: viewport.touch ? 5 : 1,
    });
    await cdp.call("Emulation.setEmulatedMedia", {
      media: "screen",
      features: viewport.touch
        ? [{ name: "pointer", value: "coarse" }, { name: "hover", value: "none" }]
        : [],
    });
    await cdp.call("Page.navigate", { url });
    await evaluate(cdp, appReadyExpression());
    const listGeometry = await evaluate(cdp, responsiveGeometryExpression());
    assertResponsiveGeometry(viewport, listGeometry);
    await evaluate(cdp, `
      (() => {
        document.querySelector('[data-row-id="scenario-1"]').click();
        return new Promise((resolve, reject) => {
          const started = Date.now();
          const timer = setInterval(() => {
            const detail = document.querySelector("#cardDetailOverlay");
            if (detail && !detail.hidden && detail.dataset.rowId === "scenario-1") {
              clearInterval(timer);
              resolve(true);
            } else if (Date.now() - started > 5000) {
              clearInterval(timer);
              reject(new Error("Detail did not open for responsive verification"));
            }
          }, 50);
        });
      })()
    `);
    const detailGeometry = await evaluate(cdp, responsiveGeometryExpression());
    assertResponsiveGeometry(viewport, detailGeometry);
    results.push({ name: viewport.name, list: listGeometry, detail: detailGeometry });
  }
  return results;
}

async function main() {
  let server;
  let chrome;
  let userDataDir;
  let cdp;
  try {
    const served = await createAppServer();
    server = served.server;
    const launched = await launchChrome(served.url);
    chrome = launched.chrome;
    userDataDir = launched.userDataDir;
    const wsUrl = launched.target.webSocketDebuggerUrl;
    cdp = await createCdpClient(wsUrl);
    await cdp.call("Runtime.enable");
    await cdp.call("Page.enable");
    try {
      await cdp.call("Browser.setDownloadBehavior", {
        behavior: "allow",
        downloadPath: userDataDir,
      });
    } catch (error) {
      // Older Chrome builds may not expose this command; export is still verified by app toast.
    }
    await cdp.call("Page.navigate", { url: served.url });
    await evaluate(cdp, appReadyExpression());
    const steps = await evaluate(cdp, pageExpression());
    const responsive = await verifyResponsiveMatrix(cdp, served.url);
    console.log(JSON.stringify({ ok: true, steps, responsive }, null, 2));
  } finally {
    if (cdp) cdp.close();
    if (chrome) {
      chrome.kill("SIGTERM");
      await new Promise((resolve) => chrome.once("exit", resolve));
    }
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
    if (userDataDir) {
      rmSync(userDataDir, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exitCode = 1;
});
