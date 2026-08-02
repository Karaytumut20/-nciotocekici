import { site } from "@/src/config/site";

export function GET() {
  const body = `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /__debug\n\nSitemap: ${site.url}/sitemap.xml\nHost: ${site.url}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
