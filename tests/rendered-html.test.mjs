import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("ana sayfa gerçek içeriği ve SEO etiketlerini sunucuda üretir", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html[^>]+lang="tr"/i);
  assert.match(html, /<title>Bahçelievler Oto Çekici/i);
  assert.match(html, /<h1[^>]*>Bahçelievler Oto Çekici/i);
  assert.match(html, /href="tel:\+905308225006"/i);
  assert.match(html, /rel="canonical"/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("bilinmeyen sayfa 404 döndürür", async () => {
  const response = await render("/olmayan-sayfa");
  assert.equal(response.status, 404);
});
