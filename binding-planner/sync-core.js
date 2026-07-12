(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.VKB_SYNC_CORE = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  const syncConfigKey = "sc-dual-vkb-binding-planner:sync";
  const syncTokenKey = "sc-dual-vkb-binding-planner:sync-token";
  const defaultProvider = "github-repo";
  const defaultBranch = "main";
  const defaultPath = "sc-dual-vkb-binding-workspace.json";
  const githubApiVersion = "2022-11-28";

  function cleanText(value) {
    return String(value || "").trim();
  }

  function sanitizeSyncConfig(input = {}) {
    const provider = cleanText(input.provider) || defaultProvider;
    const config = {
      provider,
      owner: cleanText(input.owner),
      repo: cleanText(input.repo),
      branch: cleanText(input.branch) || defaultBranch,
      path: cleanText(input.path) || defaultPath,
      lastRemoteSha: cleanText(input.lastRemoteSha),
      lastSyncAt: cleanText(input.lastSyncAt),
    };
    if (!config.lastRemoteSha) delete config.lastRemoteSha;
    if (!config.lastSyncAt) delete config.lastSyncAt;
    return config;
  }

  function createTokenStore(options = {}) {
    const sessionStorage = options.sessionStorage;
    const storageKey = options.storageKey || syncTokenKey;
    let token = safeStorageGet(sessionStorage, storageKey) || "";

    return {
      getToken() {
        return token;
      },
      setToken(nextToken, settings = {}) {
        token = cleanText(nextToken);
        if (!token) {
          safeStorageRemove(sessionStorage, storageKey);
          return;
        }
        if (settings.rememberForSession) {
          safeStorageSet(sessionStorage, storageKey, token);
        } else {
          safeStorageRemove(sessionStorage, storageKey);
        }
      },
      clearToken() {
        token = "";
        safeStorageRemove(sessionStorage, storageKey);
      },
    };
  }

  function safeStorageGet(storage, key) {
    try {
      return storage?.getItem(key) || "";
    } catch (error) {
      return "";
    }
  }

  function safeStorageSet(storage, key, value) {
    try {
      storage?.setItem(key, value);
    } catch (error) {
      // Browser storage may be unavailable in private modes. Memory token still works.
    }
  }

  function safeStorageRemove(storage, key) {
    try {
      storage?.removeItem(key);
    } catch (error) {
      // Ignore storage cleanup failures; callers still keep memory state.
    }
  }

  function encodeTextBase64(text) {
    const value = String(text);
    if (typeof Buffer !== "undefined") {
      return Buffer.from(value, "utf8").toString("base64");
    }
    const bytes = new TextEncoder().encode(value);
    let binary = "";
    const chunkSize = 0x8000;
    for (let index = 0; index < bytes.length; index += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
    }
    return btoa(binary);
  }

  function decodeGitHubContent(content) {
    const compact = String(content || "").replace(/\s/g, "");
    if (typeof Buffer !== "undefined") {
      return Buffer.from(compact, "base64").toString("utf8");
    }
    const binary = atob(compact);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function mapGitHubReadResponse(response) {
    if (!response) return { status: "network-failure" };
    if (response.status === 404) return { status: "missing" };
    if (response.status === 401 || response.status === 403) return { status: "inaccessible" };
    if (response.status !== 200) return { status: "error", httpStatus: response.status };

    const body = response.body || {};
    if (body.type !== "file" || body.encoding !== "base64" || !body.sha) {
      return { status: "error", httpStatus: response.status };
    }
    return {
      status: "readable",
      remoteSha: body.sha,
      text: decodeGitHubContent(body.content || ""),
    };
  }

  function decidePushPlan(input = {}) {
    if (input.remoteStatus === "missing") return { action: "create" };
    if (input.remoteStatus !== "readable") {
      return { action: "blocked", reason: input.remoteStatus || "unknown" };
    }
    const remoteSha = cleanText(input.remoteSha);
    const lastRemoteSha = cleanText(input.lastRemoteSha);
    if (input.force) {
      return { action: "update", expectedSha: remoteSha };
    }
    if (remoteSha && lastRemoteSha && remoteSha === lastRemoteSha) {
      return { action: "update", expectedSha: remoteSha };
    }
    return { action: "conflict", remoteSha };
  }

  function buildGitHubWriteBody(input = {}) {
    const workspaceText = JSON.stringify(input.workspace || {}, null, 2);
    const body = {
      message: input.message || "Sync SC VKB workspace",
      content: encodeTextBase64(workspaceText),
      branch: cleanText(input.branch) || defaultBranch,
    };
    const sha = cleanText(input.sha);
    if (sha) body.sha = sha;
    return body;
  }

  function buildGitHubContentUrl(config, options = {}) {
    const normalized = sanitizeSyncConfig(config);
    const owner = encodeURIComponent(normalized.owner);
    const repo = encodeURIComponent(normalized.repo);
    const path = normalized.path
      .split("/")
      .filter(Boolean)
      .map((segment) => encodeURIComponent(segment))
      .join("/");
    const url = new URL(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
    if (options.includeRef !== false && normalized.branch) {
      url.searchParams.set("ref", normalized.branch);
    }
    return url.toString();
  }

  function buildGitHubRepoUrl(config) {
    const normalized = sanitizeSyncConfig(config);
    return `https://api.github.com/repos/${encodeURIComponent(normalized.owner)}/${encodeURIComponent(normalized.repo)}`;
  }

  function buildTokenCreationUrl() {
    const url = new URL("https://github.com/settings/personal-access-tokens/new");
    url.searchParams.set("name", "SC VKB Workspace Sync");
    url.searchParams.set("description", "Sync SC Dual VKB Binding Planner workspace JSON");
    url.searchParams.set("expires_in", "180");
    url.searchParams.set("contents", "write");
    return url.toString();
  }

  function createGitHubRepoProvider(options = {}) {
    const fetchImpl = options.fetchImpl || (typeof fetch === "function" ? fetch.bind(globalThis) : null);

    async function request(url, token, requestOptions = {}) {
      if (!fetchImpl) return { status: 0, body: {}, networkError: "Fetch is unavailable" };
      try {
        const response = await fetchImpl(url, {
          ...requestOptions,
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": githubApiVersion,
            ...(requestOptions.headers || {}),
          },
        });
        let body = {};
        try {
          body = await response.json();
        } catch (error) {
          body = {};
        }
        return { status: response.status, body };
      } catch (error) {
        return { status: 0, body: {}, networkError: error.message || String(error) };
      }
    }

    async function read(config, token, options = {}) {
      const normalized = sanitizeSyncConfig(config);
      const response = await request(buildGitHubContentUrl(normalized), token);
      let result = mapGitHubReadResponse(response);
      if (result.status === "missing" && options.resolveMissing) {
        const repoResponse = await request(buildGitHubRepoUrl(normalized), token);
        if (repoResponse.status === 200) {
          result = { status: "missing" };
        } else if (repoResponse.status === 401 || repoResponse.status === 403 || repoResponse.status === 404) {
          result = { status: "inaccessible" };
        } else if (repoResponse.status === 0) {
          result = { status: "network-failure", message: repoResponse.networkError };
        } else {
          result = { status: "error", httpStatus: repoResponse.status };
        }
      } else if (response.status === 0) {
        result = { status: "network-failure", message: response.networkError };
      }
      return result;
    }

    async function test(config, token) {
      return read(config, token, { resolveMissing: true });
    }

    async function write(config, token, workspace, options = {}) {
      const normalized = sanitizeSyncConfig(config);
      const body = buildGitHubWriteBody({
        workspace,
        branch: normalized.branch,
        sha: options.sha,
        message: options.message,
      });
      const response = await request(buildGitHubContentUrl(normalized, { includeRef: false }), token, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status === 200 || response.status === 201) {
        return {
          status: "written",
          remoteSha: response.body?.content?.sha || response.body?.commit?.sha || "",
        };
      }
      if (response.status === 409) return { status: "conflict" };
      if (response.status === 401 || response.status === 403 || response.status === 404) return { status: "inaccessible" };
      if (response.status === 0) return { status: "network-failure", message: response.networkError };
      return { status: "error", httpStatus: response.status, message: response.body?.message || "" };
    }

    return { test, read, write };
  }

  return {
    SYNC_CONFIG_KEY: syncConfigKey,
    SYNC_TOKEN_KEY: syncTokenKey,
    DEFAULT_BRANCH: defaultBranch,
    DEFAULT_PATH: defaultPath,
    sanitizeSyncConfig,
    createTokenStore,
    encodeTextBase64,
    decodeGitHubContent,
    mapGitHubReadResponse,
    decidePushPlan,
    buildGitHubWriteBody,
    buildGitHubContentUrl,
    buildTokenCreationUrl,
    createGitHubRepoProvider,
  };
});
