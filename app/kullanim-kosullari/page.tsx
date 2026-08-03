import { LegalPage } from "@/src/components/templates/LegalPage";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Kullanım Koşulları | İnci Oto Çekici",
  description: "İnci Oto Çekici web sitesinin bilgi ve iletişim amaçlı kullanım koşulları.",
  path: "/kullanim-kosullari",
});
export default function Terms() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      description="Web sitesi içeriklerinin kapsamı, sorumluluk sınırları ve iletişim koşulları."
      slug="kullanim-kosullari"
    >
      <h2>Bilgilendirme amacı</h2>
      <p>
        Bu sitedeki içerikler oto çekici ve yol yardım hizmetleri hakkında genel bilgi ve iletişim olanağı sunar; kesin
        fiyat, varış süresi veya hizmet garantisi oluşturmaz.
      </p>
      <h2>Hizmet değerlendirmesi</h2>
      <p>
        Hizmet kapsamı, fiyat ve tahmini süreç; araç türü, konum, trafik, erişim ve ekipman ihtiyacına göre telefon veya
        WhatsApp görüşmesinde belirlenir.
      </p>
      <h2>Güvenlik</h2>
      <p>
        Yolda kalma durumunda önce can güvenliğinizi sağlayın. Yaralanma, yangın, trafik güvenliği veya başka bir acil
        risk varsa 112’yi arayın.
      </p>
      <h2>İçerik güncellemeleri</h2>
      <p>İşletme bilgileri, hizmet kapsamı ve site içeriği güncel koşullara göre gerektiğinde değiştirilebilir.</p>
    </LegalPage>
  );
}
