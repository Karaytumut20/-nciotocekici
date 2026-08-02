import {
  BatteryCharging,
  Bike,
  Car,
  CircleGauge,
  Construction,
  MapPinned,
  Route,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const services = [
  {
    slug: "oto-cekici",
    title: "Oto Çekici",
    icon: Truck,
    summary: "Arızalanan veya güvenle hareket edemeyen otomobiller için uygun taşıma desteği.",
    intro:
      "Aracınızın bulunduğu konum, sürüş durumu ve varış noktası değerlendirilerek uygun çekici çözümü belirlenir.",
    scenarios: ["Motor veya aktarma arızası", "Kaza sonrası güvenli taşıma", "Servise ya da otoparka nakil"],
  },
  {
    slug: "oto-kurtarma",
    title: "Oto Kurtarma",
    icon: ShieldCheck,
    summary: "Hareket kabiliyeti kısıtlanan araçlar için duruma göre planlanan kurtarma süreci.",
    intro:
      "Aracın konumu ve tekerleklerinin durumu telefonda netleştirilir; ihtiyaç duyulan ekipman buna göre değerlendirilir.",
    scenarios: ["Tekerleği kilitlenen araç", "Yoldan çıkma veya sıkışma", "Hasarlı aracın güvenli alana alınması"],
  },
  {
    slug: "yol-yardim",
    title: "7/24 Yol Yardım",
    icon: MapPinned,
    summary: "Beklenmedik arıza ve yolda kalma durumlarında telefon ve WhatsApp üzerinden destek.",
    intro:
      "Konumunuzu ve yaşadığınız sorunu paylaşın; çekici, akü veya lastik desteği seçenekleri birlikte değerlendirilsin.",
    scenarios: ["Araç çalışmıyor", "Güvenli sürüş mümkün değil", "Arıza türü henüz bilinmiyor"],
  },
  {
    slug: "aku-takviye",
    title: "Akü Takviye",
    icon: BatteryCharging,
    summary: "Aküsü zayıflayan araçların yeniden çalıştırılması için yerinde takviye değerlendirmesi.",
    intro: "Marş tepkisi ve elektrik belirtileri konuşulur; güvenli ve uygun görülürse akü takviye desteği planlanır.",
    scenarios: ["Marş motoru yavaş dönüyor", "Gösterge ışıkları zayıf", "Uzun süre bekleyen araç"],
  },
  {
    slug: "aku-degisimi",
    title: "Akü Değişimi",
    icon: Wrench,
    summary: "Uygun akü seçimi ve değişim ihtiyacı için araç bilgisine göre yönlendirme.",
    intro: "Araç marka, model ve mevcut akü bilgisi alınarak değişim seçeneği görüşme sırasında netleştirilir.",
    scenarios: ["Takviye sonrası tekrar boşalma", "Akü ömrünün dolması", "Fiziksel akü arızası şüphesi"],
  },
  {
    slug: "lastik-yol-yardim",
    title: "Lastik Yol Yardım",
    icon: CircleGauge,
    summary: "Patlak veya hasarlı lastik nedeniyle ilerleyemeyen araçlara yönelik yol yardım.",
    intro: "Stepne, bijon ve lastik hasarı bilgileri alınarak yerinde işlem ya da çekici ihtiyacı değerlendirilir.",
    scenarios: ["Lastik patlaması", "Stepne bulunmaması", "Jant veya lastik hasarı"],
  },
  {
    slug: "vincli-oto-cekici",
    title: "Vinçli Oto Çekici",
    icon: Construction,
    summary: "Standart yüklemenin mümkün olmadığı durumlarda vinç ihtiyacının değerlendirilmesi.",
    intro: "Araç pozisyonu, çevre güvenliği ve erişim koşulları fotoğraf veya konum bilgisiyle önceden incelenir.",
    scenarios: ["Tekerleklerin dönmemesi", "Dar veya eğimli konum", "Kaza sonrası yükleme güçlüğü"],
  },
  {
    slug: "hafif-ticari-arac-cekici",
    title: "Hafif Ticari Araç Çekici",
    icon: Car,
    summary: "Hafif ticari araçların ölçü ve durumuna göre planlanan çekici hizmeti.",
    intro: "Aracın modeli, yük durumu ve bulunduğu yer paylaşılır; uygun taşıma seçeneği buna göre belirlenir.",
    scenarios: ["Dağıtım aracında arıza", "Servise planlı nakil", "Yol üzerinde güvenli taşıma ihtiyacı"],
  },
  {
    slug: "motosiklet-cekici",
    title: "Motosiklet Çekici",
    icon: Bike,
    summary: "Motosikletlerin sabitleme ihtiyacı gözetilerek güvenli taşıma planı.",
    intro: "Motosiklet tipi, hasar durumu ve teslim noktası öğrenilerek uygun sabitleme ve taşıma süreci konuşulur.",
    scenarios: ["Lastik veya zincir arızası", "Kaza sonrası taşıma", "Servise planlı nakil"],
  },
  {
    slug: "sehirler-arasi-oto-cekici",
    title: "Şehirler Arası Oto Çekici",
    icon: Route,
    summary: "Araç ve güzergâh bilgisine göre planlanan şehirler arası taşıma seçeneği.",
    intro: "Alış ve teslim konumu, araç türü ve taşıma koşulları görüşülerek süreç ve fiyatlandırma netleştirilir.",
    scenarios: ["Şehir dışında kalan araç", "Servis veya ikamet adresine nakil", "Planlı uzun mesafe taşıma"],
  },
] as const;

export type Service = (typeof services)[number];
