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
  mapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "",
  // TODO(yayın öncesi): Doğrulanmış Google Maps embed bağlantısını ekleyin.
  mapsEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "",
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
