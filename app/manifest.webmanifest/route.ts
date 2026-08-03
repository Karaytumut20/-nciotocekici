export function GET() {
  const manifest = {
    name: "İnci Oto Çekici",
    short_name: "İnci Çekici",
    description: "Bahçelievler ve çevresinde 7/24 oto çekici, oto kurtarma ve yol yardım hizmeti.",
    start_url: "/",
    display: "standalone",
    background_color: "#111315",
    theme_color: "#111315",
    lang: "tr",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
  return Response.json(manifest, { headers: { "Content-Type": "application/manifest+json; charset=utf-8" } });
}
