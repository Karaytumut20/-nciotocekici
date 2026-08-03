import { LegalPage } from "@/src/components/templates/LegalPage";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Çerez Politikası | İnci Oto Çekici",
  description: "İnci Oto Çekici web sitesinde kullanılan çerezler ve benzeri teknolojiler hakkında bilgi.",
  path: "/cerez-politikasi",
});
export default function Cookies() {
  return (
    <LegalPage
      title="Çerez Politikası"
      description="Sitede kullanılan çerezler ve benzeri teknolojilere ilişkin bilgilendirme."
      slug="cerez-politikasi"
    >
      <h2>Zorunlu teknik veriler</h2>
      <p>
        Site, sayfaların güvenli ve düzgün çalışması için gerekli teknik çerezleri ve kayıtları kullanabilir. Pazarlama
        çerezi veya reklam takip teknolojisi kullanılmaz.
      </p>
      <h2>Analiz araçları</h2>
      <p>
        Ziyaretçi davranışlarını izleyen analiz araçları etkin değildir. Bu tür araçlar devreye alındığında gerekli
        bilgilendirme ve kullanıcı tercihleri sunulur.
      </p>
      <h2>Tercih yönetimi</h2>
      <p>
        Tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya sınırlandırabilirsiniz. Zorunlu çerezlerin
        engellenmesi bazı site işlevlerini etkileyebilir.
      </p>
    </LegalPage>
  );
}
