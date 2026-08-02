import { site } from "@/src/config/site";
import { locations } from "@/src/data/locations";
import { services } from "@/src/data/services";

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function homeSchema() {
  const businessId = `${site.url}/#business`;
  const profiles = [site.googleBusinessUrl, site.instagramUrl].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}${site.logoOriginal}`,
          contentUrl: `${site.url}${site.logoOriginal}`,
          caption: "İnci Oto Çekici logosu",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneE164,
          contactType: "customer service",
          availableLanguage: ["Turkish"],
          areaServed: "TR-34",
        },
        ...(profiles.length ? { sameAs: profiles } : {}),
      },
      {
        "@type": "AutomotiveBusiness",
        "@id": businessId,
        name: site.name,
        url: site.url,
        image: `${site.url}${site.logoOriginal}`,
        logo: `${site.url}${site.logoOriginal}`,
        telephone: site.phoneE164,
        parentOrganization: { "@id": `${site.url}/#organization` },
        knowsLanguage: ["tr"],
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
        potentialAction: {
          "@type": "CommunicateAction",
          target: `tel:${site.phoneE164}`,
          name: "Yol yardım hattını ara",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "tr-TR",
        publisher: { "@id": `${site.url}/#organization` },
        copyrightHolder: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: "Bahçelievler Oto Çekici ve 7/24 Yol Yardım",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": businessId },
        publisher: { "@id": `${site.url}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}${site.ogImage}`,
        },
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

export function serviceSchema(name: string, path: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name,
    description,
    serviceType: name,
    url: `${site.url}${path}`,
    provider: { "@type": "AutomotiveBusiness", "@id": `${site.url}/#business`, name: site.name },
    areaServed: locations.map((location) => ({ "@type": "Place", name: location.name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        availableLanguage: ["Turkish"],
      },
      serviceUrl: `${site.url}${path}`,
    },
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
    publisher: { "@type": "Organization", "@id": `${site.url}/#organization` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}${site.ogImage}` },
  };
}

export function articleSchema(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${path}` },
    inLanguage: "tr-TR",
    isAccessibleForFree: true,
    image: `${site.url}${site.ogImage}`,
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };
}
