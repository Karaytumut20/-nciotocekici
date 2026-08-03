import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const logo = "public/images/brand/inci-oto-cekici-logo-original.png";
const favicon = "public/favicon.svg";
const socialSource = "scripts/assets/inci-social-source.png";

await mkdir("public/images/social", { recursive: true });

await sharp(logo)
  .resize(900, 900, { fit: "inside", withoutEnlargement: true })
  .avif({ quality: 58 })
  .toFile("public/images/brand/inci-oto-cekici-logo.avif");

await sharp(socialSource)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .png({ compressionLevel: 9 })
  .toFile("public/images/social/inci-oto-cekici-paylasim.png");

const faviconSource = await readFile(favicon);
const faviconSizes = [16, 32, 48, 180, 192, 512];
const renderedFavicons = new Map();

for (const size of faviconSizes) {
  renderedFavicons.set(size, await sharp(faviconSource).resize(size, size).png({ compressionLevel: 9 }).toBuffer());
}

await Promise.all([
  writeFile("public/favicon-16x16.png", renderedFavicons.get(16)),
  writeFile("public/favicon-32x32.png", renderedFavicons.get(32)),
  writeFile("public/favicon.png", renderedFavicons.get(512)),
  writeFile("public/apple-touch-icon.png", renderedFavicons.get(180)),
  writeFile("public/android-chrome-192x192.png", renderedFavicons.get(192)),
  writeFile("public/android-chrome-512x512.png", renderedFavicons.get(512)),
]);

const icoImages = [16, 32, 48].map((size) => ({ size, data: renderedFavicons.get(size) }));
const headerSize = 6 + icoImages.length * 16;
let offset = headerSize;
const icoHeader = Buffer.alloc(headerSize);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(icoImages.length, 4);

icoImages.forEach(({ size, data }, index) => {
  const entry = 6 + index * 16;
  icoHeader.writeUInt8(size, entry);
  icoHeader.writeUInt8(size, entry + 1);
  icoHeader.writeUInt8(0, entry + 2);
  icoHeader.writeUInt8(0, entry + 3);
  icoHeader.writeUInt16LE(1, entry + 4);
  icoHeader.writeUInt16LE(32, entry + 6);
  icoHeader.writeUInt32LE(data.length, entry + 8);
  icoHeader.writeUInt32LE(offset, entry + 12);
  offset += data.length;
});

await writeFile("public/favicon.ico", Buffer.concat([icoHeader, ...icoImages.map(({ data }) => data)]));
