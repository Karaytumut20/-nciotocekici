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
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: "İnci Oto Çekici — Bahçelievler 7/24 Yol Yardım" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [site.ogImage] },
  };
}
