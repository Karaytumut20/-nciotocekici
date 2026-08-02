import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/src/config/site";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { MobileCta } from "@/src/components/layout/MobileCta";

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
  formatDetection: { telephone: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
};

export const viewport: Viewport = { themeColor: "#07111B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${heading.variable} ${body.variable}`}>
        <a className="skip-link" href="#main-content">
          Ana içeriğe geç
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
