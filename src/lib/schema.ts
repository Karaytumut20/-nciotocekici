import { site } from "@/src/config/site";
import { locations } from "@/src/data/locations";
import { services } from "@/src/data/services";

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function homeSchema() {
  const businessId = `${site.url}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}${site.logoOriginal}`,
      },
      {
        "@type": "AutomotiveBusiness",
        "@id": businessId,
        name: site.name,
        url: site.url,
        image: `${site.url}${site.logoOriginal}`,
        logo: `${site.url}${site.logoOriginal}`,
        telephone: site.phoneE164,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kana Sokak No:14/3",
          addressLocality: "Bahçelievler",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: locations.map((location) => ({ "@type": "Place", name: location.name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Oto çekici ve yol yardım hizmetleri",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "tr-TR",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: "Bahçelievler Oto Çekici ve 7/24 Yol Yardım",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": businessId },
        inLanguage: "tr-TR",
      },
    ],
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    url: `${site.url}${path}`,
    provider: { "@type": "AutomotiveBusiness", "@id": `${site.url}/#business`, name: site.name },
    areaServed: locations.map((location) => location.name),
  };
}

export function webPageSchema(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${site.url}${path}`,
    inLanguage: "tr-TR",
    isPartOf: { "@type": "WebSite", "@id": `${site.url}/#website` },
    about: { "@type": "AutomotiveBusiness", "@id": `${site.url}/#business` },
  };
}

export function articleSchema(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    mainEntityOfPage: `${site.url}${path}`,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };
}
