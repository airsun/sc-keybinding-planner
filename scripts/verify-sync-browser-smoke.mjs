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
      activeList: "scenario",
      statusFilter: "all",
      selectedRowId: "scenario-3",
    };
    const profile = workspace.profiles?.[profileId];
    const flightReady = profile?.bindings?.v_flightready;
    if (flightReady && profileId === "ground") {
      flightReady.slot = { slotType: "button", hand: "right", control: "C1_press", layer: "shift1" };
    }
    if (flightReady && profileId === "combat") {
      flightReady.slot = { slotType: "button", hand: "left", control: "C1_press", layer: "shift2" };
    }
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
  const needle = '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="./app.js?v=retro-45"></script>';
  if (!original.includes(needle)) {
    throw new Error("Unable to find sync-core/app.js script boundary in index.html");
  }
  return original.replace(
    needle,
    '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="/__sync-smoke-inject.js"></script>\n    <script src="./app.js?v=retro-45"></script>',
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
      historicalCardCount: document.querySelectorAll("#bindingRows .binding-card:not(.compact-card)").length,
      compactCardCount: document.querySelectorAll("#bindingRows .binding-card.compact-card").length,
      directBindingControlCount: document.querySelectorAll("#bindingRows .binding-card .binding-controls").length,
      modeBadgeCount: document.querySelectorAll("#bindingRows .operation-mode-badge").length,
      modeBadgeInsideSlotCount: document.querySelectorAll("#bindingRows .slot-pill > .operation-mode-badge").length,
      scenario1ModeBadge: (() => {
        const badge = document.querySelector('[data-row-id="scenario-1"] .operation-mode-badge');
        return badge ? {
          text: badge.textContent || "",
          mode: badge.dataset.mode || "",
          title: badge.title || "",
          ariaLabel: badge.getAttribute("aria-label") || "",
        } : null;
      })(),
      disclosureControlCount: document.querySelectorAll("#bindingRows .binding-controls > .inline-detail-toggle").length,
      disclosureInActionCount: document.querySelectorAll("#bindingRows .card-action .inline-detail-toggle").length,
      rightAlignedDisclosureCount: Array.from(document.querySelectorAll("#bindingRows .binding-card"))
        .filter((card) => {
          const controls = card.querySelector(".binding-controls");
          const toggle = controls?.querySelector(":scope > .inline-detail-toggle");
          const lock = controls?.querySelector(".card-lock");
          if (!controls || !toggle || !lock) return false;
          const controlsRect = controls.getBoundingClientRect();
          const toggleRect = toggle.getBoundingClientRect();
          const lockRect = lock.getBoundingClientRect();
          return Math.abs(toggleRect.right - controlsRect.right) <= 1
            && toggleRect.left >= lockRect.right - 1;
        }).length,
      collapsedModeControlCount: document.querySelectorAll("#bindingRows .binding-card:not(.detail-expanded) .activation-mode-select").length,
      collapsedContextControlCount: document.querySelectorAll("#bindingRows .binding-card:not(.detail-expanded) .context-picker-button").length,
      floatingDetailExists: Boolean(document.querySelector("#cardDetailOverlay")),
      expandedCardCount: document.querySelectorAll("#bindingRows .binding-card.detail-expanded").length,
      expandedRowId: document.querySelector("#bindingRows .binding-card.detail-expanded")?.dataset.rowId || "",
      inlineModeControlCount: document.querySelectorAll(".inline-card-detail .activation-mode-select").length,
      inlineContextControlCount: document.querySelectorAll(".inline-card-detail .context-picker-button").length,
      inlinePosition: document.querySelector(".inline-detail-position")?.textContent || "",
      inlineDirection: document.querySelector("#bindingRows .binding-card.detail-expanded")?.dataset.detailDirection || "",
      previousDisabled: Boolean(document.querySelector('[data-inline-detail-command="previous"]')?.disabled),
      nextDisabled: Boolean(document.querySelector('[data-inline-detail-command="next"]')?.disabled),
      detailStatePersisted: Object.keys(workspace.uiSettings || {}).some((key) => /detail|expanded|transition/i.test(key)),
      highlightStatePersisted: Object.keys(workspace.uiSettings || {}).some((key) => /pulse|current|arrival|highlight|selectionCause|revision/i.test(key)),
      selectedCardRowId: document.querySelector("#bindingRows .binding-card.selected")?.dataset.rowId || "",
      currentStickSlotCount: document.querySelectorAll(".stick-panel .slot.current").length,
      currentStickSlots: Array.from(document.querySelectorAll(".stick-panel .slot.current")).map((slot) => ({
        hand: slot.dataset.hand || "",
        control: slot.dataset.control || "",
      })),
      selectionArrivalCount: document.querySelectorAll(".stick-panel .slot.selection-arrived").length,
      currentSlotAnimations: Array.from(document.querySelectorAll(".stick-panel .slot.current"))
        .map((slot) => getComputedStyle(slot).animationName),
      activeStickLayers: {
        left: document.querySelector("#leftPanel .layer-switch button.active")?.textContent || "",
        right: document.querySelector("#rightPanel .layer-switch button.active")?.textContent || "",
      },
      bindingLayerIndicators: Array.from(document.querySelectorAll(".stick-panel .layer-switch button.binding-layer"))
        .map((button) => ({
          hand: button.closest("#leftPanel") ? "left" : "right",
          label: button.textContent || "",
          active: button.classList.contains("active"),
        })),
      cardWrapScrollTop: $("#cardWrap").scrollTop,
      selectedRowCentered: (() => {
        const wrap = $("#cardWrap").getBoundingClientRect();
        const selected = document.querySelector("#bindingRows .binding-card.selected")?.getBoundingClientRect();
        if (!selected) return false;
        const center = selected.top + selected.height / 2;
        return center >= wrap.top + wrap.height * 0.2 && center <= wrap.bottom - wrap.height * 0.2;
      })(),
      defaultActionContexts: workspace.profiles?.default?.actionContexts || {},
      rowRelationships: {
        scenario1: document.querySelector('[data-row-id="scenario-1"]')?.dataset.relationshipType || "",
        scenario8: document.querySelector('[data-row-id="scenario-8"]')?.dataset.relationshipType || "",
        scenario69: document.querySelector('[data-row-id="scenario-69"]')?.dataset.relationshipType || "",
      },
      rowConflicts: {
        scenario1: document.querySelector('[data-row-id="scenario-1"]')?.dataset.relationshipType === "true-conflict",
        scenario69: document.querySelector('[data-row-id="scenario-69"]')?.dataset.relationshipType === "true-conflict",
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
    click(\`[data-row-id="\${rowId}"] [data-inline-detail-command="toggle"]\`);
    await waitFor(
      (current) => current.expandedCardCount === 1
        && current.expandedRowId === rowId
        && current.selectedCardRowId === rowId,
      \`open detail \${rowId}\`,
    );
  };
  const setRowContext = async (rowId, actionKey, contextId) => {
    await openDetail(rowId);
    click(".inline-card-detail .context-picker-button");
    setChecked(\`.inline-card-detail .context-option input[value="\${contextId}"]\`, true);
    click(".inline-card-detail .context-picker-actions .primary");
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

  if (!state().historicalCardCount || state().compactCardCount) {
    throw new Error("Historical operation cards must replace compact rows: " + JSON.stringify(state()));
  }
  if (state().directBindingControlCount !== state().historicalCardCount) {
    throw new Error("Every historical card must keep direct binding controls: " + JSON.stringify(state()));
  }
  if (state().modeBadgeCount !== state().historicalCardCount
    || state().modeBadgeInsideSlotCount !== state().historicalCardCount
    || JSON.stringify(state().scenario1ModeBadge) !== JSON.stringify({
      text: "DEF",
      mode: "DEFAULT",
      title: "MODE: DEFAULT",
      ariaLabel: "触发模式 DEFAULT",
    })) {
    throw new Error("Every slot pill must expose its complete DEFAULT mode badge: " + JSON.stringify(state()));
  }
  if (state().disclosureControlCount !== state().historicalCardCount
    || state().disclosureInActionCount
    || state().rightAlignedDisclosureCount !== state().historicalCardCount) {
    throw new Error("Every disclosure must occupy the far-right binding-control column: " + JSON.stringify(state()));
  }
  if (state().collapsedModeControlCount || state().collapsedContextControlCount || state().floatingDetailExists) {
    throw new Error("Collapsed cards must exclude MODE/CTX and no floating detail may exist: " + JSON.stringify(state()));
  }
  if (JSON.stringify(state().profileOptions) !== JSON.stringify([{ value: "default", label: "Default" }])) {
    throw new Error("New workspace must start with one Default Profile: " + JSON.stringify(state().profileOptions));
  }
  if (state().rowRelationships.scenario1 !== "true-conflict") {
    throw new Error("Expected initial same-slot conflict for scenario-1: " + JSON.stringify(state().rowRelationships));
  }
  if (state().rowRelationships.scenario8 !== "shared") {
    throw new Error("Expected shared action relationship for scenario-8: " + JSON.stringify(state().rowRelationships));
  }

  const currentSlotIs = (current, hand, control) => current.currentStickSlotCount === 1
    && current.currentStickSlots[0]?.hand === hand
    && current.currentStickSlots[0]?.control === control;

  if (state().selectedCardRowId !== "scenario-1" || !currentSlotIs(state(), "left", "A3_press")) {
    throw new Error("Initial visible card must own the exact current stick slot: " + JSON.stringify(state()));
  }
  click('[data-row-id="scenario-3"] .card-action');
  await waitFor(
    (current) => current.selectedCardRowId === "scenario-3"
      && current.activeStickLayers.left === "S2"
      && current.selectionArrivalCount === 1
      && currentSlotIs(current, "left", "C1_press"),
    "direct selection reveals exact hand layer and slot",
  );
  await sleep(850);
  await waitFor(
    (current) => current.selectionArrivalCount === 0
      && current.currentSlotAnimations.every((name) => name === "none"),
    "selected slot settles without perpetual animation",
  );
  click("#toggleCodesBtn");
  if (state().selectionArrivalCount || !currentSlotIs(state(), "left", "C1_press")) {
    throw new Error("Unrelated render must not replay slot arrival: " + JSON.stringify(state()));
  }

  Array.from(document.querySelectorAll("#leftPanel .layer-switch button"))
    .find((button) => button.textContent === "Base")?.click();
  await waitFor(
    (current) => current.activeStickLayers.left === "Base"
      && current.currentStickSlotCount === 0
      && current.bindingLayerIndicators.some((item) => item.hand === "left" && item.label === "S2" && !item.active),
    "manual layer browsing hides exact slot and marks return layer",
  );
  document.querySelector("#leftPanel .layer-switch button.binding-layer")?.click();
  await waitFor(
    (current) => current.activeStickLayers.left === "S2" && currentSlotIs(current, "left", "C1_press"),
    "binding layer restores exact current slot",
  );

  click('[data-row-id="scenario-108"] .card-action');
  await waitFor(
    (current) => current.selectedCardRowId === "scenario-108" && currentSlotIs(current, "left", "A3_up"),
    "repeated action row keeps its own selected card and shared exact slot",
  );
  click('[data-row-id="scenario-3"] .card-action');

  click("#gameTab");
  await waitFor(
    (current) => current.selectedCardRowId === "game-38" && currentSlotIs(current, "left", "C1_press"),
    "list mode maps exact action key",
  );
  click("#scenarioTab");
  await waitFor((current) => current.selectedCardRowId === "scenario-3", "scenario list restores exact action key row");

  click('[data-row-id="scenario-28"] .card-action');
  await waitFor((current) => currentSlotIs(current, "right", "main_y"), "axis selection becomes current");
  Array.from(document.querySelectorAll("#rightPanel .layer-switch button"))
    .find((button) => button.textContent === "S1")?.click();
  if (!currentSlotIs(state(), "right", "main_y")) {
    throw new Error("Axis selection must remain current while button layers change: " + JSON.stringify(state()));
  }

  click('[data-row-id="scenario-3"] .card-action');
  Array.from(document.querySelectorAll("#leftPanel .layer-switch button"))
    .find((button) => button.textContent === "Base")?.click();
  click('#leftPanel .slot[data-control="A3_press"]');
  await waitFor(
    (current) => currentSlotIs(current, "left", "A3_press")
      && current.toasts.some((text) => text.includes("CONFLICT")),
    "conflicting reassignment exposes undo",
  );
  primaryToast();
  await waitFor(
    (current) => current.selectedCardRowId === "scenario-3"
      && current.activeStickLayers.left === "S2"
      && currentSlotIs(current, "left", "C1_press"),
    "undo restores and reveals exact binding",
  );

  click('[data-row-id="scenario-112"] .card-action');
  await waitFor(
    (current) => current.selectedCardRowId === "scenario-112" && current.currentStickSlotCount === 0,
    "unbound selection has no current stick slot",
  );
  fill("#searchInput", "__no_visible_selection__");
  await waitFor(
    (current) => !current.selectedCardRowId && !current.selectedRowId && current.currentStickSlotCount === 0,
    "search clears hidden selection",
  );
  const bindingCountBeforeHiddenClick = Object.keys(JSON.parse(localStorage.getItem(workspaceKey)).profiles.default.bindings).length;
  click('#leftPanel .slot[data-control="trigger_s1"]');
  const bindingCountAfterHiddenClick = Object.keys(JSON.parse(localStorage.getItem(workspaceKey)).profiles.default.bindings).length;
  if (bindingCountAfterHiddenClick !== bindingCountBeforeHiddenClick
    || !state().toasts.some((text) => text.includes("先选择一行动作"))) {
    throw new Error("Hardware click must not mutate a hidden operation: " + JSON.stringify(state()));
  }
  fill("#searchInput", "");
  click('[data-row-id="scenario-1"] .card-action');
  click('[data-filter="unbound"]');
  await waitFor(
    (current) => !current.selectedCardRowId && !current.selectedRowId && current.currentStickSlotCount === 0,
    "status filter clears hidden selection",
  );
  click('[data-filter="all"]');
  if (state().highlightStatePersisted) {
    throw new Error("Highlight presentation state must not persist: " + JSON.stringify(state()));
  }
  record("selected card and stick highlight contract");

  await openDetail("scenario-1");
  if (state().inlineModeControlCount !== 1
    || state().inlineContextControlCount !== 1
    || !state().previousDisabled
    || state().detailStatePersisted) {
    throw new Error("Inline detail must expose one MODE/CTX editor and a first-row boundary: " + JSON.stringify(state()));
  }
  select(".inline-card-detail .activation-mode-select", "DOUBLE_TAP");
  await waitFor(
    (current) => current.scenario1ModeBadge?.text === "2T"
      && current.scenario1ModeBadge.mode === "DOUBLE_TAP",
    "mode badge follows inline MODE change",
  );
  select(".inline-card-detail .activation-mode-select", "DEFAULT");
  await waitFor(
    (current) => current.scenario1ModeBadge?.text === "DEF"
      && current.scenario1ModeBadge.mode === "DEFAULT",
    "mode badge returns to DEFAULT without changing later conflict semantics",
  );
  click('[data-inline-detail-command="next"]');
  click('[data-inline-detail-command="next"]');
  await waitFor(
    (current) => current.expandedRowId === "scenario-2"
      && current.selectedCardRowId === "scenario-2"
      && current.currentStickSlotCount > 0
      && current.selectedRowCentered,
    "inline detail next selection and scroll sync",
  );
  await sleep(260);
  if (state().expandedRowId !== "scenario-2" || state().inlineDirection !== "next") {
    throw new Error("Rapid navigation must advance once with next direction: " + JSON.stringify(state()));
  }
  click('[data-inline-detail-command="collapse"]');
  await waitFor(
    (current) => current.expandedCardCount === 0 && current.selectedCardRowId === "scenario-2",
    "collapse inline detail",
  );
  record("inline detail navigation synchronized");

  await openDetail("scenario-1");
  click('[data-filter="unbound"]');
  await waitFor(
    (current) => current.expandedCardCount === 0 && current.historicalCardCount > 0,
    "detail closes when filtered row disappears",
  );
  fill("#searchInput", "__no_detail_results__");
  await waitFor((current) => current.expandedCardCount === 0 && current.historicalCardCount === 0, "detail stays closed on empty result");
  fill("#searchInput", "");
  click('[data-filter="all"]');
  await waitFor((current) => current.historicalCardCount > 0, "restore rows after empty result");

  await setRowContext("scenario-1", "pc_interaction_select", "interaction");
  await setRowContext("scenario-69", "v_mfd_soft_select_mfd_primary_short", "mfd");
  await waitFor(
    (current) => current.rowRelationships.scenario1 === "context-reuse"
      && current.rowRelationships.scenario69 === "context-reuse"
      && !current.rowConflicts.scenario1
      && !current.rowConflicts.scenario69,
    "mutually exclusive CTX reuse",
  );
  click('[data-inline-detail-command="collapse"]');
  await waitFor((current) => current.expandedCardCount === 0, "close detail before filtering");
  click('[data-filter="issue"]');
  if (document.querySelector('[data-row-id="scenario-1"]') || document.querySelector('[data-row-id="scenario-69"]')) {
    throw new Error("CTX reuse must not appear in the problem filter");
  }
  click('[data-filter="all"]');
  await waitFor((current) => current.rowRelationships.scenario1 === "context-reuse", "restore all filter");
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
  await waitFor(
    (current) => current.activeProfileId === "ground"
      && current.syncConfig.lastRemoteSha === remoteShaForPull
      && current.selectedCardRowId === "scenario-3"
      && current.activeStickLayers.right === "S1"
      && currentSlotIs(current, "right", "C1_press"),
    "pull overwrite applies selected binding context",
  );
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
  await waitFor(
    (current) => current.activeProfileId === "combat"
      && current.selectedCardRowId === "scenario-3"
      && current.activeStickLayers.left === "S2"
      && currentSlotIs(current, "left", "C1_press"),
    "import applies selected binding context",
  );
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
      && current.repairTargetBinding?.slot?.control === "A3_left"
      && !current.selectedCardRowId
      && !current.selectedRowId
      && current.currentStickSlotCount === 0,
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
      const collapsedCards = Array.from(document.querySelectorAll(".binding-card:not(.detail-expanded)"));
      const touchControls = Array.from(document.querySelectorAll(
        ".activation-mode-select, .context-picker-button, [data-filter], .tab-button, .conflict-mini-action, .inline-detail-nav",
      )).filter((element) => element.getClientRects().length > 0);
      const detail = document.querySelector(".inline-card-detail");
      const expandedCard = detail?.closest(".binding-card") || null;
      const detailNav = detail
        ? Array.from(detail.querySelectorAll(".inline-detail-nav")).filter((element) => element.getClientRects().length > 0)
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
        cardWrap: rect("#cardWrap"),
        collapsedCardHeightRange: collapsedCards.length
          ? {
            min: Math.min(...collapsedCards.map((element) => element.getBoundingClientRect().height)),
            max: Math.max(...collapsedCards.map((element) => element.getBoundingClientRect().height)),
          }
          : { min: 0, max: 0 },
        overflowCards: cards
          .filter((element) => element.scrollWidth > element.clientWidth + 1)
          .map((element) => element.dataset.rowId),
        overflowRelationshipCards: relationshipCards
          .filter((element) => element.scrollWidth > element.clientWidth + 1)
          .map((element) => element.closest(".binding-card")?.dataset.rowId || "unknown"),
        overflowModeBadges: Array.from(document.querySelectorAll(".slot-pill > .operation-mode-badge"))
          .filter((badge) => {
            const slot = badge.parentElement.getBoundingClientRect();
            const value = badge.getBoundingClientRect();
            return value.left < slot.left - 1
              || value.right > slot.right + 1
              || value.top < slot.top - 1
              || value.bottom > slot.bottom + 1;
          })
          .map((badge) => badge.closest(".binding-card")?.dataset.rowId || "unknown"),
        overlappingModeBadges: Array.from(document.querySelectorAll(".slot-pill > .operation-mode-badge"))
          .filter((badge) => {
            const value = badge.getBoundingClientRect();
            return Array.from(badge.parentElement.querySelectorAll(".slot-pill-label, .slot-pill-code"))
              .some((content) => {
                const target = content.getBoundingClientRect();
                return value.left < target.right
                  && value.right > target.left
                  && value.top < target.bottom
                  && value.bottom > target.top;
              });
          })
          .map((badge) => badge.closest(".binding-card")?.dataset.rowId || "unknown"),
        minTouchControlHeight: touchControls.length
          ? Math.min(...touchControls.map((element) => element.getBoundingClientRect().height))
          : 0,
        detail: detail && expandedCard ? {
          rect: rect(".inline-card-detail"),
          body: rect(".inline-detail-body"),
          action: rect(".binding-card.detail-expanded .card-action"),
          controls: rect(".binding-card.detail-expanded .binding-console"),
          clientWidth: detail.clientWidth,
          scrollWidth: detail.scrollWidth,
          bodyClientWidth: document.querySelector(".inline-detail-body").clientWidth,
          bodyScrollWidth: document.querySelector(".inline-detail-body").scrollWidth,
          overflowDescendants: Array.from(detail.querySelectorAll("*"))
            .filter((element) => {
              if (!element.getClientRects().length) return false;
              const detailRect = detail.getBoundingClientRect();
              const value = element.getBoundingClientRect();
              return element.scrollWidth > element.clientWidth + 1
                || value.left < detailRect.left - 1
                || value.right > detailRect.right + 1;
            })
            .slice(0, 12)
            .map((element) => ({
              tag: element.tagName,
              className: element.className,
              clientWidth: element.clientWidth,
              scrollWidth: element.scrollWidth,
              rect: (() => {
                const value = element.getBoundingClientRect();
                return { left: value.left, right: value.right, width: value.width };
              })(),
            })),
          card: (() => {
            const value = expandedCard.getBoundingClientRect();
            return { top: value.top, left: value.left, right: value.right, bottom: value.bottom, width: value.width, height: value.height };
          })(),
          horizontalOverflow: detail.scrollWidth > detail.clientWidth + 1
            || document.querySelector(".inline-detail-body").scrollWidth > document.querySelector(".inline-detail-body").clientWidth + 1,
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
  if (result.overflowModeBadges.length) {
    throw new Error(`${viewport.name} MODE badges escape slot pills: ${JSON.stringify(result.overflowModeBadges)}`);
  }
  if (result.overlappingModeBadges.length) {
    throw new Error(`${viewport.name} MODE badges overlap labels or codes: ${JSON.stringify(result.overlappingModeBadges)}`);
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
    if (result.detail.rect.left < result.detail.card.left - tolerance
      || result.detail.rect.right > result.detail.card.right + tolerance
      || result.detail.rect.top < result.detail.card.top - tolerance
      || result.detail.rect.bottom > result.detail.card.bottom + tolerance) {
      throw new Error(`${viewport.name} inline detail escapes its card: ${JSON.stringify({
        card: result.detail.card,
        detail: result.detail.rect,
      })}`);
    }
    if (result.detail.horizontalOverflow) {
      throw new Error(`${viewport.name} inline detail has horizontal overflow: ${JSON.stringify(result.detail)}`);
    }
    if (viewport.touch && result.detail.minNavHeight < 44) {
      throw new Error(`${viewport.name} detail navigation target below 44px: ${result.detail.minNavHeight}`);
    }
    if (viewport.name === "phone"
      && (result.detail.action.width < result.detail.card.width * 0.8
        || result.detail.controls.width < result.detail.card.width * 0.8)) {
      throw new Error(`phone expanded card must keep action and controls full-width: ${JSON.stringify({
        card: result.detail.card,
        action: result.detail.action,
        controls: result.detail.controls,
      })}`);
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
        document.querySelector('[data-row-id="scenario-1"] [data-inline-detail-command="toggle"]').click();
        return new Promise((resolve, reject) => {
          const started = Date.now();
          const timer = setInterval(() => {
            const detail = document.querySelector('[data-row-id="scenario-1"] .inline-card-detail');
            if (detail) {
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

async function verifyReducedMotion(cdp, url) {
  await cdp.call("Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 1024,
    screenWidth: 1366,
    screenHeight: 1024,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await cdp.call("Emulation.setTouchEmulationEnabled", { enabled: false, maxTouchPoints: 1 });
  await cdp.call("Emulation.setEmulatedMedia", {
    media: "screen",
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await cdp.call("Page.navigate", { url });
  await evaluate(cdp, appReadyExpression());
  const result = await evaluate(cdp, `
    (() => {
      document.querySelector('[data-row-id="scenario-3"] .card-action').click();
      const slot = document.querySelector('#leftPanel .slot.current[data-control="C1_press"]');
      if (!slot) throw new Error("Reduced-motion selection did not reveal the exact slot");
      return {
        current: true,
        arrivalClass: slot.classList.contains("selection-arrived"),
        elementAnimation: getComputedStyle(slot).animationName,
        frameAnimation: getComputedStyle(slot, "::before").animationName,
      };
    })()
  `);
  if (result.elementAnimation !== "none" || result.frameAnimation !== "none") {
    throw new Error(`Reduced motion must keep the selected frame without animation: ${JSON.stringify(result)}`);
  }
  return result;
}

async function verifyDefaultControlsRemainEditable(cdp, url) {
  const actionKeys = [
    "v_pitch",
    "v_roll",
    "v_yaw",
    "v_strafe_lateral",
    "v_strafe_longitudinal",
    "v_strafe_vertical",
    "v_toggle_landing_system",
    "v_toggle_vtol",
    "v_transform_cycle",
  ];
  await evaluate(cdp, `localStorage.removeItem(${JSON.stringify(workspaceKey)})`);
  await cdp.call("Page.navigate", { url });
  await evaluate(cdp, appReadyExpression());
  const fresh = await evaluate(cdp, `
    (() => {
      const actionKeys = ${JSON.stringify(actionKeys)};
      const workspace = JSON.parse(localStorage.getItem(${JSON.stringify(workspaceKey)}) || "{}");
      return {
        lockedBindings: actionKeys.filter((actionKey) => workspace.profiles?.default?.bindings?.[actionKey]?.locked),
        lockedCards: actionKeys.filter((actionKey) => {
          const card = Array.from(document.querySelectorAll(".binding-card"))
            .find((item) => item.textContent.includes(actionKey));
          return card?.classList.contains("locked-card");
        }),
        lockedControlSlots: Array.from(document.querySelectorAll('.stick-panel .slot.locked'))
          .map((slot) => [slot.dataset.hand || "", slot.dataset.control || ""].join(":")),
      };
    })()
  `);
  if (fresh.lockedBindings.length || fresh.lockedCards.length || fresh.lockedControlSlots.length) {
    throw new Error(`Default 6DOF axes and F1/F2/F3 must remain editable: ${JSON.stringify(fresh)}`);
  }

  await evaluate(cdp, `
    (() => {
      const workspace = JSON.parse(localStorage.getItem(${JSON.stringify(workspaceKey)}) || "{}");
      delete workspace.semanticRevision;
      const actionKeys = ${JSON.stringify([
        "v_pitch",
        "v_roll",
        "v_yaw",
        "v_strafe_lateral",
        "v_strafe_longitudinal",
        "v_strafe_vertical",
        "v_toggle_landing_system",
        "v_toggle_vtol",
        "v_transform_cycle",
      ])};
      for (const actionKey of actionKeys) workspace.profiles.default.bindings[actionKey].locked = true;
      workspace.profiles.default.bindings.v_pitch.note = "默认 6DOF 轴，保持不变";
      localStorage.setItem(${JSON.stringify(workspaceKey)}, JSON.stringify(workspace));
    })()
  `);
  await cdp.call("Page.navigate", { url });
  await evaluate(cdp, appReadyExpression());
  const migrated = await evaluate(cdp, `
    (() => {
      document.querySelector("#toggleCodesBtn").click();
      const workspace = JSON.parse(localStorage.getItem(${JSON.stringify(workspaceKey)}) || "{}");
      const actionKeys = ${JSON.stringify([
        "v_pitch",
        "v_roll",
        "v_yaw",
        "v_strafe_lateral",
        "v_strafe_longitudinal",
        "v_strafe_vertical",
        "v_toggle_landing_system",
        "v_toggle_vtol",
        "v_transform_cycle",
      ])};
      return {
        semanticRevision: workspace.semanticRevision,
        lockedBindings: actionKeys.filter((actionKey) => workspace.profiles?.default?.bindings?.[actionKey]?.locked),
        lockedCards: Array.from(document.querySelectorAll(".binding-card.locked-card"))
          .filter((card) => actionKeys.some((actionKey) => card.textContent.includes(actionKey)))
          .map((card) => card.dataset.rowId || ""),
        lockedControlSlots: Array.from(document.querySelectorAll('.stick-panel .slot.locked'))
          .map((slot) => [slot.dataset.hand || "", slot.dataset.control || ""].join(":")),
        pitchNote: workspace.profiles?.default?.bindings?.v_pitch?.note,
      };
    })()
  `);
  if (migrated.semanticRevision !== 1
    || migrated.lockedBindings.length
    || migrated.lockedCards.length
    || migrated.lockedControlSlots.length
    || migrated.pitchNote !== "") {
    throw new Error(`Legacy default axis and F1/F2/F3 locks must be released once: ${JSON.stringify(migrated)}`);
  }
  return { fresh, migrated };
}

async function verifyUncalibratedBindingIsNotConflictRed(cdp, url) {
  await evaluate(cdp, `localStorage.removeItem(${JSON.stringify(workspaceKey)})`);
  await cdp.call("Page.navigate", { url });
  await evaluate(cdp, appReadyExpression());
  const result = await evaluate(cdp, `
    (() => {
      const click = (selector) => {
        const element = document.querySelector(selector);
        if (!element) throw new Error("Missing element: " + selector);
        element.click();
      };
      const clickButton = (container, label) => {
        const button = Array.from(container.querySelectorAll("button"))
          .find((item) => item.textContent.trim() === label);
        if (!button) throw new Error("Missing button: " + label);
        button.click();
      };

      click("#gameTab");
      const search = document.querySelector("#searchInput");
      search.value = "Activate Scanning";
      search.dispatchEvent(new Event("input", { bubbles: true }));

      let card = document.querySelector('[data-row-id="game-268"]');
      if (!card) throw new Error("Activate Scanning card is unavailable");
      clickButton(card.querySelector(".hand-seg"), "R");
      card = document.querySelector('[data-row-id="game-268"]');
      clickButton(card.querySelector(".layer-seg"), "S2");
      click('#rightPanel .slot[data-control="rapid_fire_push"]');

      click('#rightPanel .slot[data-control="rapid_fire_push"] .code-edit');
      const shift2Code = document.querySelector('#codeDialogFields input[name="shift2Button"]');
      if (!shift2Code) throw new Error("RF Push Shift2 code field is unavailable");
      shift2Code.value = "";
      click("#saveCodeBtn");

      card = document.querySelector('[data-row-id="game-268"]');
      const slot = document.querySelector('#rightPanel .slot[data-control="rapid_fire_push"]');
      return {
        relationshipType: card?.dataset.relationshipType || "",
        statusTitle: card?.querySelector(".status-rail")?.title || "",
        slotPillClass: card?.querySelector(".slot-pill")?.className || "",
        statusDotClass: card?.querySelector(".status-dot-ui")?.className || "",
        stickSlotClass: slot?.className || "",
      };
    })()
  `);
  if (result.relationshipType
    || result.statusTitle !== "未校准"
    || !result.slotPillClass.includes("amber")
    || result.slotPillClass.includes("red")
    || !result.statusDotClass.includes("amber")
    || result.statusDotClass.includes("red")
    || !result.stickSlotClass.includes("uncalibrated")
    || result.stickSlotClass.includes("conflict")) {
    throw new Error(`Uncalibrated Activate Scanning binding must warn without conflict red: ${JSON.stringify(result)}`);
  }
  return result;
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
    const reducedMotion = await verifyReducedMotion(cdp, served.url);
    const editableControls = await verifyDefaultControlsRemainEditable(cdp, served.url);
    const uncalibratedBinding = await verifyUncalibratedBindingIsNotConflictRed(cdp, served.url);
    console.log(JSON.stringify({ ok: true, steps, responsive, reducedMotion, editableControls, uncalibratedBinding }, null, 2));
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
