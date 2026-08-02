export const routePages = [
  {
    slug: "e5-d100-oto-cekici",
    title: "E-5 / D100 Oto Çekici ve Yol Yardım",
    short: "E-5 / D100",
    intro:
      "E-5 ve D100 üzerindeki yolda kalma durumlarında bulunduğunuz yönü, en yakın çıkışı ve güvenli bekleme noktasını paylaşın.",
    safety:
      "Mümkünse aracı akıştan uzaklaştırın, reflektör ve dörtlüleri kullanın; can güvenliği riski varsa 112’yi arayın.",
  },
  {
    slug: "tem-otoyolu-cekici",
    title: "TEM Otoyolu Çekici ve Yol Yardım",
    short: "TEM Otoyolu",
    intro:
      "TEM Otoyolu üzerinde çekici talebinde yol yönü, kilometre bilgisi veya yakın bağlantı noktası doğru yönlendirme için önemlidir.",
    safety:
      "Aracın dışında beklemek riskliyse yol ve trafik koşullarına göre güvenli alanı tercih edin; acil riskte 112 ile iletişim kurun.",
  },
  {
    slug: "basin-ekspres-oto-cekici",
    title: "Basın Ekspres Oto Çekici ve Yol Yardım",
    short: "Basın Ekspres",
    intro:
      "Basın Ekspres çevresinde yoğun trafik sırasında yaşanan arızalarda konum bağlantısı ve seyir yönü paylaşılmalıdır.",
    safety:
      "Aracı güvenli şeride alabiliyorsanız alın; görüş mesafesinin düşük olduğu noktada araç çevresinde beklemeyin.",
  },
  {
    slug: "ataturk-havalimani-yol-yardim",
    title: "Atatürk Havalimanı Çevresi Yol Yardım",
    short: "Atatürk Havalimanı çevresi",
    intro:
      "Atatürk Havalimanı çevresindeki yol yardım taleplerinde giriş, çıkış veya yakın yol bağlantısı bilgisi erişim planını kolaylaştırır.",
    safety:
      "Kontrollü giriş veya durmanın yasak olduğu alanlarda görevlilerin yönlendirmesine uyun ve güvenli bekleme noktası paylaşın.",
  },
] as const;

export type RoutePage = (typeof routePages)[number];
