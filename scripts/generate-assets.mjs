import { readFile } from "node:fs/promises";
import sharp from "sharp";

const logo = "public/images/brand/inci-oto-cekici-logo-original.png";
const socialSource = "scripts/assets/og-source.webp";

await sharp(logo)
  .resize(900, 900, { fit: "inside", withoutEnlargement: true })
  .avif({ quality: 58 })
  .toFile("public/images/brand/inci-oto-cekici-logo.avif");

const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#07111B" stop-opacity=".98"/><stop offset=".63" stop-color="#07111B" stop-opacity=".94"/><stop offset="1" stop-color="#07111B" stop-opacity="0"/></linearGradient></defs>
  <rect width="690" height="630" fill="url(#g)"/>
  <text x="58" y="252" font-family="Arial, DejaVu Sans, sans-serif" font-size="78" font-weight="800" font-style="italic" fill="#F8FAFC">İnci Oto Çekici</text>
  <rect x="58" y="286" width="455" height="5" rx="2.5" fill="#F5B400"/>
  <text x="58" y="354" font-family="Arial, DejaVu Sans, sans-serif" font-size="36" font-weight="700" fill="#F8FAFC">Bahçelievler 7/24 Yol Yardım</text>
</svg>`);

await sharp(socialSource)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png({ compressionLevel: 9 })
  .toFile("public/images/social/inci-oto-cekici-og.png");
await sharp(await readFile("public/favicon.svg"))
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");
