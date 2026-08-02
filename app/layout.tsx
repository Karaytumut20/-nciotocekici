import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import "./premium.css";
import { site } from "@/src/config/site";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { MobileCta } from "@/src/components/layout/MobileCta";
import { RouteExperience } from "@/src/components/layout/RouteExperience";

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});
const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Bahçelievler Oto Çekici | İnci", template: "%s" },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Otomotiv ve yol yardım",
  keywords: [
    "Bahçelievler oto çekici",
    "Bahçelievler oto kurtarma",
    "7/24 oto çekici",
    "en yakın çekici",
    "yol yardım",
    "Şirinevler oto çekici",
    "Yenibosna oto çekici",
    "Siyavuşpaşa oto çekici",
    "Bakırköy oto çekici",
    "Bağcılar oto çekici",
    "E-5 oto çekici",
    "TEM oto çekici",
    "Basın Ekspres yol yardım",
  ],
  formatDetection: { telephone: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
  appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "black-translucent" },
  other: { "geo.region": "TR-34", "geo.placename": "Bahçelievler, İstanbul" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#111315" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${heading.variable} ${body.variable}`}>
        <a className="skip-link" href="#main-content">
          Ana içeriğe geç
        </a>
        <RouteExperience>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileCta />
        </RouteExperience>
      </body>
    </html>
  );
}
