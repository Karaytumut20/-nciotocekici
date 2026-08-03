import { expect, test } from "@playwright/test";

const widths = [360, 390, 430, 768, 1024, 1280, 1440, 1920];

test("mobil menü açılır, ESC ile kapanır ve focus geri döner", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  const menu = page.getByRole("button", { name: "Menüyü aç" });
  await menu.click();
  await expect(page.getByRole("dialog", { name: "Mobil menü" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Mobil menü" })).toBeHidden();
  await expect(menu).toBeFocused();
});

test("mobil menü açılış ve kapanışta yumuşak geçiş kullanır", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".route-loader")).toHaveAttribute("data-visible", "false");
  await page.getByRole("button", { name: "Menüyü aç" }).click();
  const backdrop = page.locator(".drawer-backdrop");
  const drawer = page.locator(".drawer");
  await expect(backdrop).toHaveAttribute("data-state", "open");
  const motion = await drawer.evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(motion).not.toBe("0s");
  await page.getByRole("button", { name: "Menüyü kapat" }).click();
  await expect(backdrop).toHaveAttribute("data-state", "closed");
  await expect(backdrop).toBeHidden();
});

test("sayfa geçişi loading sonrasında en üstte tamamlanır", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const loader = page.locator(".route-loader");
  await expect(loader).toHaveAttribute("data-visible", "false");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.getByRole("link", { name: "Tüm hizmetleri görüntüle" }).click();
  await expect(page).toHaveURL(/\/hizmetler$/);
  await expect(loader).toHaveAttribute("data-visible", "false");
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test("telefon ve WhatsApp CTA bağlantıları doğrudur", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator('a[href="tel:+905308225006"]:visible').first()).toBeVisible();
  await expect(page.locator('a[href^="https://wa.me/905308225006"]').first()).toHaveAttribute("target", "_blank");
});

test("ana sayfada tek H1, canonical ve yatay taşma yoktur", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://inciotocekici.vercel.app");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBeFalsy();
});

test("bilinmeyen URL markalı 404 gösterir", async ({ page }) => {
  const response = await page.goto("/olmayan-sayfa");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Aradığınız sayfa bulunamadı" })).toBeVisible();
});

test("istenen tüm responsive genişliklerde yatay taşma oluşmaz", async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow, `${width}px genişlikte yatay taşma`).toBeFalsy();
  }
});

test("SEO etiketleri, JSON-LD ve görsel alt metinleri geçerlidir", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle(/Bahçelievler Oto Çekici/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /İnci Oto Çekici/);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/);
  await expect(page.locator('meta[name="googlebot"]')).toHaveAttribute("content", /max-image-preview:large/);
  await expect(page.locator('link[hreflang="tr-TR"]')).toHaveAttribute("href", "https://inciotocekici.vercel.app");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /inci-oto-cekici-paylasim\.png$/);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  await expect(page.locator('link[rel="icon"][href*="favicon.ico"]')).toHaveCount(1);
  const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(jsonLd.length).toBeGreaterThan(0);
  for (const block of jsonLd) expect(() => JSON.parse(block)).not.toThrow();
  const missingAlt = await page.locator("img:not([alt])").count();
  expect(missingAlt).toBe(0);
});

test("sitemap içindeki bütün URL’ler 200 döner", async ({ request }) => {
  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.status()).toBe(200);
  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(urls.length).toBeGreaterThan(40);
  for (const canonicalUrl of urls) {
    const localUrl = canonicalUrl.replace("https://inciotocekici.vercel.app", "http://localhost:3000");
    const response = await request.get(localUrl);
    expect(response.status(), canonicalUrl).toBe(200);
  }
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/manifest.webmanifest")).status()).toBe(200);
  for (const asset of [
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/apple-touch-icon.png",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
    "/images/social/inci-oto-cekici-paylasim.png",
  ]) {
    const response = await request.get(asset);
    expect(response.status(), asset).toBe(200);
  }
});
