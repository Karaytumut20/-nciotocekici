export const site = {
  name: "İnci Oto Çekici",
  shortName: "İnci Çekici",
  description: "Bahçelievler ve çevresinde 7/24 oto çekici, oto kurtarma ve yol yardım hizmeti.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://inciotocekici.vercel.app",
  locale: "tr_TR",
  language: "tr",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0530 822 5006",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "+905308225006",
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 || "905308225006",
  address: "Siyavuşpaşa Mahallesi, Kana Sokak No:14/3, Bahçelievler/İstanbul",
  addressShort: "Siyavuşpaşa Mah. Kana Sok. No:14/3, Bahçelievler",
  hours: "Haftanın 7 günü, 24 saat",
  // TODO(yayın öncesi): Doğrulanmış Google Maps işletme bağlantısını ekleyin.
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://www.google.com/maps/dir/?api=1&destination=Bah%C3%A7elievler+%C3%87ekici+%C4%B0nci+Oto+Kurtarma",
  // TODO(yayın öncesi): Doğrulanmış Google Maps embed bağlantısını ekleyin.
  mapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0458282684426!2d28.85344467537378!3d41.00237011978962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa584ada4c7eb%3A0x8a1fa0e682e92a11!2sBah%C3%A7elievler%20%C3%87ekici%20%C4%B0nci%20Oto%20Kurtarma!5e0!3m2!1str!2str!4v1786135960676!5m2!1str!2str",
  // TODO(yayın öncesi): Google İşletme Profili bağlantısını ekleyin.
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "",
  // TODO(yayın öncesi): Varsa doğrulanmış Instagram profilini ekleyin.
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  // TODO(yayın öncesi): Consent yapısı etkinleştirildiğinde GA4 kimliğini ekleyin.
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18367170805",
  // TODO(yayın öncesi): Search Console doğrulama kodunu ekleyin.
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
  whatsappMessage: "Merhaba İnci Oto Çekici, yol yardım hizmeti almak istiyorum. Konumum:",
  logo: "/images/brand/inci-oto-cekici-logo.webp",
  logoOriginal: "/images/brand/inci-oto-cekici-logo-original.png",
  ogImage: "/images/social/inci-oto-cekici-paylasim.png",
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function directionsUrl() {
  if (site.mapsUrl) return site.mapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
}
