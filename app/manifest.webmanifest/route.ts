export function GET() {
  const manifest = {
    name: "İnci Oto Çekici",
    short_name: "İnci Çekici",
    description: "Bahçelievler 7/24 oto çekici ve yol yardım",
    start_url: "/",
    display: "standalone",
    background_color: "#07111B",
    theme_color: "#07111B",
    lang: "tr",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
  return Response.json(manifest, { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } });
}
