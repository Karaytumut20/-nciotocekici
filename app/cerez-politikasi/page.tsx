import { LegalPage } from "@/src/components/templates/LegalPage";
import { createMetadata } from "@/src/lib/seo";
import { CookiePreferencesButton } from "@/src/components/privacy/CookieConsent";

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
        Site, sayfaların güvenli ve düzgün çalışması için gerekli teknik kayıtları kullanabilir. Reklam tercihiniz,
        tekrar sorulmaması için cihazınızdaki yerel depolama alanında saklanır.
      </p>
      <h2>Google Ads ve reklam ölçümü</h2>
      <p>
        Sitede AW-18367170805 kimlikli Google Ads etiketi kullanılır. Google Consent Mode v2 kapsamında reklam
        depolaması, reklam kullanıcı verisi ve reklam kişiselleştirmesi ilk açılışta reddedilmiş durumdadır. “Kabul et”
        seçeneğini kullanırsanız Google reklam ölçümü ve kişiselleştirme amacıyla çerez veya benzeri tanımlayıcılar
        kullanabilir. Google’ın veri uygulamaları için Google Gizlilik Politikası’nı inceleyebilirsiniz.
      </p>
      <p>
        GA4 ziyaretçi analiz sistemi etkin değildir. Google Ads için özel bir dönüşüm eylemi tanımlandığında ölçüm,
        yalnızca seçtiğiniz izin kapsamında çalışır.
      </p>
      <h2>Tercih yönetimi</h2>
      <p>
        Tercihinizi aşağıdaki düğmeden istediğiniz zaman yeniden açıp değiştirebilirsiniz. Tarayıcınızın ayarlarından
        çerezleri ve site verilerini de görüntüleyebilir, silebilir veya sınırlandırabilirsiniz.
      </p>
      <CookiePreferencesButton />
    </LegalPage>
  );
}
