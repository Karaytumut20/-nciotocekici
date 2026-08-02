import { site } from "@/src/config/site";
import { services } from "@/src/data/services";
import { locations } from "@/src/data/locations";
import { routePages } from "@/src/data/routes";
import { articles } from "@/src/data/articles";

const updated = "2026-08-02";
const staticPaths = [
  "",
  "/hizmetler",
  "/hizmet-bolgeleri",
  "/yol-yardim-noktalari",
  "/hakkimizda",
  "/iletisim",
  "/faydali-bilgiler",
  "/gizlilik-ve-kvkk",
  "/cerez-politikasi",
  "/kullanim-kosullari",
];

export function GET() {
  const allPaths = [
    ...staticPaths,
    ...services.map((item) => `/hizmetler/${item.slug}`),
    ...locations.map((item) => `/bolgeler/${item.slug}`),
    ...routePages.map((item) => `/yol-yardim/${item.slug}`),
    ...articles.map((item) => `/faydali-bilgiler/${item.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPaths.map((path) => `  <url><loc>${site.url}${path}</loc><lastmod>${updated}</lastmod><changefreq>${path === "" ? "weekly" : "monthly"}</changefreq><priority>${path === "" ? "1.0" : "0.7"}</priority></url>`).join("\n")}\n</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
