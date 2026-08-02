import type { Metadata } from "next";
import { site } from "@/src/config/site";

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "tr-TR": url, "x-default": url },
    },
    robots: noindex
      ? { index: false, follow: true, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    referrer: "origin-when-cross-origin",
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: "İnci Oto Çekici — Bahçelievler 7/24 Yol Yardım",
          type: "image/png",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}
