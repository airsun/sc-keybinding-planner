import assert from "node:assert/strict";
import syncCore from "../binding-planner/sync-core.js";

const {
  sanitizeSyncConfig,
  createTokenStore,
  decodeGitHubContent,
  mapGitHubReadResponse,
  decidePushPlan,
  buildGitHubWriteBody,
  buildTokenCreationUrl,
  createGitHubRepoProvider,
} = syncCore;

function makeStorage() {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
    dump: () => Object.fromEntries(data),
  };
}

function encodeContent(value) {
  return Buffer.from(value, "utf8").toString("base64");
}

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

async function asyncTest(name, fn) {
  try {
    await fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

function makeFetch(responses, calls = []) {
  return async (url, options = {}) => {
    calls.push({ url: String(url), options });
    const response = responses.shift();
    assert.ok(response, `Unexpected fetch call to ${url}`);
    return {
      status: response.status,
      json: async () => response.body || {},
    };
  };
}

test("sanitizeSyncConfig keeps provider metadata and drops token values", () => {
  const config = sanitizeSyncConfig({
    provider: "github-repo",
    owner: "  dan ",
    repo: " planner ",
    branch: "",
    path: "",
    token: "secret",
    lastRemoteSha: "abc",
    lastSyncAt: "2026-07-05T16:00:00.000Z",
  });

  assert.deepEqual(config, {
    provider: "github-repo",
    owner: "dan",
    repo: "planner",
    branch: "main",
    path: "sc-dual-vkb-binding-workspace.json",
    lastRemoteSha: "abc",
    lastSyncAt: "2026-07-05T16:00:00.000Z",
  });
});

test("token store keeps default tokens in memory only", () => {
  const sessionStorage = makeStorage();
  const localStorage = makeStorage();
  const tokenStore = createTokenStore({ sessionStorage, localStorage });

  tokenStore.setToken("ghp_memory", { rememberForSession: false });

  assert.equal(tokenStore.getToken(), "ghp_memory");
  assert.deepEqual(sessionStorage.dump(), {});
  assert.deepEqual(localStorage.dump(), {});
});

test("token store uses sessionStorage only when requested", () => {
  const sessionStorage = makeStorage();
  const localStorage = makeStorage();
  const tokenStore = createTokenStore({ sessionStorage, localStorage });

  tokenStore.setToken("ghp_session", { rememberForSession: true });

  assert.equal(tokenStore.getToken(), "ghp_session");
  assert.deepEqual(sessionStorage.dump(), { "sc-dual-vkb-binding-planner:sync-token": "ghp_session" });
  assert.deepEqual(localStorage.dump(), {});
});

test("decodeGitHubContent handles utf8 workspace JSON", () => {
  const payload = JSON.stringify({ schemaVersion: 2, profiles: { flight: { name: "飞行" } } });

  assert.equal(decodeGitHubContent(encodeContent(payload)), payload);
});

test("mapGitHubReadResponse reports readable files with sha and parsed text", () => {
  const payload = JSON.stringify({ schemaVersion: 2, activeProfileId: "flight" });
  const result = mapGitHubReadResponse({
    status: 200,
    body: {
      type: "file",
      encoding: "base64",
      content: encodeContent(payload),
      sha: "remote-sha",
    },
  });

  assert.deepEqual(result, {
    status: "readable",
    remoteSha: "remote-sha",
    text: payload,
  });
});

test("mapGitHubReadResponse maps missing and inaccessible states", () => {
  assert.deepEqual(mapGitHubReadResponse({ status: 404, body: {} }), { status: "missing" });
  assert.deepEqual(mapGitHubReadResponse({ status: 401, body: {} }), { status: "inaccessible" });
  assert.deepEqual(mapGitHubReadResponse({ status: 403, body: {} }), { status: "inaccessible" });
});

test("decidePushPlan creates missing files and blocks stale revisions", () => {
  assert.deepEqual(decidePushPlan({ remoteStatus: "missing", lastRemoteSha: "" }), { action: "create" });
  assert.deepEqual(decidePushPlan({ remoteStatus: "readable", remoteSha: "abc", lastRemoteSha: "abc" }), {
    action: "update",
    expectedSha: "abc",
  });
  assert.deepEqual(decidePushPlan({ remoteStatus: "readable", remoteSha: "new", lastRemoteSha: "old" }), {
    action: "conflict",
    remoteSha: "new",
  });
  assert.deepEqual(decidePushPlan({ remoteStatus: "readable", remoteSha: "new", lastRemoteSha: "" }), {
    action: "conflict",
    remoteSha: "new",
  });
});

test("buildGitHubWriteBody base64 encodes workspace and includes sha only for updates", () => {
  const workspace = { schemaVersion: 2, profiles: { flight: { name: "飞行" } } };

  const createBody = buildGitHubWriteBody({ workspace, branch: "main" });
  assert.equal(Buffer.from(createBody.content, "base64").toString("utf8"), JSON.stringify(workspace, null, 2));
  assert.equal(createBody.branch, "main");
  assert.equal("sha" in createBody, false);

  const updateBody = buildGitHubWriteBody({ workspace, branch: "main", sha: "abc" });
  assert.equal(updateBody.sha, "abc");
});

test("buildTokenCreationUrl points at fine-grained PAT setup with contents write", () => {
  const url = new URL(buildTokenCreationUrl());

  assert.equal(url.origin, "https://github.com");
  assert.equal(url.pathname, "/settings/personal-access-tokens/new");
  assert.equal(url.searchParams.get("name"), "SC VKB Workspace Sync");
  assert.equal(url.searchParams.get("contents"), "write");
});

await asyncTest("GitHub provider treats missing file as valid setup when repo is accessible", async () => {
  const calls = [];
  const provider = createGitHubRepoProvider({
    fetchImpl: makeFetch([
      { status: 404, body: { message: "Not Found" } },
      { status: 200, body: { full_name: "dan/planner" } },
    ], calls),
  });

  const result = await provider.test({
    owner: "dan",
    repo: "planner",
    branch: "main",
    path: "sync/workspace.json",
  }, "token");

  assert.deepEqual(result, { status: "missing" });
  assert.match(calls[0].url, /\/repos\/dan\/planner\/contents\/sync\/workspace\.json\?ref=main$/);
  assert.match(calls[1].url, /\/repos\/dan\/planner$/);
});

await asyncTest("GitHub provider writes updates with expected sha", async () => {
  const calls = [];
  const provider = createGitHubRepoProvider({
    fetchImpl: makeFetch([
      { status: 200, body: { content: { sha: "new-sha" } } },
    ], calls),
  });

  const result = await provider.write({
    owner: "dan",
    repo: "planner",
    branch: "main",
    path: "sync/workspace.json",
  }, "token", { schemaVersion: 2, profiles: {} }, { sha: "old-sha" });

  assert.deepEqual(result, { status: "written", remoteSha: "new-sha" });
  const body = JSON.parse(calls[0].options.body);
  assert.equal(body.sha, "old-sha");
  assert.equal(body.branch, "main");
  assert.equal(Buffer.from(body.content, "base64").toString("utf8"), JSON.stringify({ schemaVersion: 2, profiles: {} }, null, 2));
});

await asyncTest("GitHub provider maps write conflict without mutating caller state", async () => {
  const provider = createGitHubRepoProvider({
    fetchImpl: makeFetch([
      { status: 409, body: { message: "Conflict" } },
    ]),
  });

  const result = await provider.write({
    owner: "dan",
    repo: "planner",
    branch: "main",
    path: "sync/workspace.json",
  }, "token", { schemaVersion: 2 }, { sha: "stale-sha" });

  assert.deepEqual(result, { status: "conflict" });
});
