import { LegalPage } from "@/src/components/templates/LegalPage";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Çerez Politikası | İnci Oto Çekici",
  description:
    "İnci Oto Çekici web sitesinde kullanılan teknik çerezler ve isteğe bağlı analiz altyapısı hakkında bilgi.",
  path: "/cerez-politikasi",
});
export default function Cookies() {
  return (
    <LegalPage
      title="Çerez Politikası"
      description="Sitede kullanılan ve gelecekte etkinleştirilebilecek teknolojilere ilişkin açık bilgi."
      slug="cerez-politikasi"
    >
      <h2>Zorunlu teknik veriler</h2>
      <p>
        Site, sayfaların güvenli ve düzgün çalışması için hosting altyapısının gerekli teknik kayıtlarını kullanabilir.
        Bu sürümde pazarlama çerezi veya reklam takip teknolojisi bulunmaz.
      </p>
      <h2>Analiz araçları</h2>
      <p>
        Google Analytics entegrasyonu varsayılan olarak kapalıdır ve kimlik bilgisi yapılandırılmamıştır. İleride
        etkinleştirilirse, zorunlu olmayan analiz kodları kullanıcı onayı sonrasında çalıştırılmalıdır.
      </p>
      <h2>Tercih yönetimi</h2>
      <p>
        Yalnızca gerekli teknik çerezler kullanıldığı için bu sürümde büyük bir çerez bannerı gösterilmez. Analiz veya
        reklam teknolojisi eklendiğinde politika ve onay arayüzü birlikte güncellenmelidir.
      </p>
    </LegalPage>
  );
}
