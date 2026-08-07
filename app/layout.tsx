import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./premium.css";
import { site } from "@/src/config/site";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { MobileCta } from "@/src/components/layout/MobileCta";
import { RouteExperience } from "@/src/components/layout/RouteExperience";


const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bahçelievler Oto Çekici | 7/24 En Yakın Oto Kurtarma - İnci",
    template: "%s | İnci Oto Çekici",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Otomotiv ve Yol Yardım",
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
    "oto kurtarıcı",
    "akü takviye",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: "Bahçelievler Oto Çekici | 7/24 En Yakın Oto Kurtarma - İnci",
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "İnci Oto Çekici 7/24 Yol Yardım ve Oto Kurtarma Bahçelievler",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahçelievler Oto Çekici | 7/24 En Yakın Oto Kurtarma - İnci",
    description: site.description,
    images: [site.ogImage],
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
  appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "black-translucent" },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Bahçelievler, İstanbul",
  },
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
  const googleAdsId = JSON.stringify(site.googleAdsId);

  return (
    <html lang="tr">
      <head>
        <Script id="google-ads-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
            var inciConsent = null;
            try { inciConsent = window.localStorage.getItem('inci_cookie_consent_v1'); } catch (error) {}
            var inciAdConsent = inciConsent === 'granted' ? 'granted' : 'denied';
            window.gtag('consent', 'default', {
              ad_storage: inciAdConsent,
              ad_user_data: inciAdConsent,
              ad_personalization: inciAdConsent,
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            window.gtag('set', 'ads_data_redaction', true);
            window.gtag('set', 'url_passthrough', true);
          `}
        </Script>
        <Script
          id="google-ads-library"
          src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
          strategy="afterInteractive"
          async
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.gtag('js', new Date());
            window.gtag('config', ${googleAdsId});
          `}
        </Script>
      </head>
      <body className={body.variable}>
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
