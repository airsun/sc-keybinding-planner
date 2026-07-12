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
    workspace.activeProfileId = "flight";
    workspace.profiles.flight.repairQueue = [];
    workspace.profiles.flight.bindings["1372"] = {
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
  const needle = '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="./app.js?v=retro-39"></script>';
  if (!original.includes(needle)) {
    throw new Error("Unable to find sync-core/app.js script boundary in index.html");
  }
  return original.replace(
    needle,
    '    <script src="./sync-core.js?v=sync-1"></script>\n    <script src="/__sync-smoke-inject.js"></script>\n    <script src="./app.js?v=retro-39"></script>',
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
      repairTargetBinding: window.__repairSmokeTarget
        ? workspace.profiles?.flight?.bindings?.[window.__repairSmokeTarget] || null
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

  if (state().modeSelectCount === 0) throw new Error("Per-action activation mode controls are missing");

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
    (current) => current.schemaVersion === 3 && current.repairCount === 1 && !current.hasNumericBinding && current.repairButtonVisible,
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
    await evaluate(cdp, `
      new Promise((resolve, reject) => {
        const started = Date.now();
        const timer = setInterval(() => {
          if (document.readyState === "complete" && document.querySelector("#syncBtn") && window.__syncSmoke) {
            clearInterval(timer);
            resolve(true);
          } else if (Date.now() - started > 10000) {
            clearInterval(timer);
            reject(new Error("App did not finish loading for smoke"));
          }
        }, 50);
      })
    `);
    const steps = await evaluate(cdp, pageExpression());
    console.log(JSON.stringify({ ok: true, steps }, null, 2));
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
