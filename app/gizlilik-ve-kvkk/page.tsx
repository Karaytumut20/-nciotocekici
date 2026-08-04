import Link from "next/link";
import { LegalPage } from "@/src/components/templates/LegalPage";
import { site } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Gizlilik ve KVKK | İnci Oto Çekici",
  description: "İnci Oto Çekici web sitesi gizlilik ve kişisel verilerin işlenmesine ilişkin bilgilendirme.",
  path: "/gizlilik-ve-kvkk",
});
export default function Privacy() {
  return (
    <LegalPage
      title="Gizlilik ve KVKK"
      description="Web sitesini ve iletişim kanallarını kullanırken paylaşılan veriler hakkında bilgilendirme."
      slug="gizlilik-ve-kvkk"
    >
      <h2>Veri sorumlusu ve iletişim</h2>
      <p>
        {site.name}, {site.address} adresinde hizmet vermektedir. Gizlilik sorularınız için{" "}
        <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a> numarasından iletişime geçebilirsiniz.
      </p>
      <h2>İşlenen bilgiler</h2>
      <p>
        Site üzerinde doğrudan veri saklayan bir teklif formu bulunmaz. WhatsApp mesaj hazırlama alanına yazdığınız
        bilgiler cihazınızda mesaja dönüştürülür ve yalnızca WhatsApp’ı açmayı seçtiğinizde ilgili hizmete aktarılır.
      </p>
      <h2>İletişim sırasında paylaşılan veriler</h2>
      <p>
        Telefon veya WhatsApp üzerinden ad, konum, araç bilgisi ve hizmet ihtiyacı paylaşabilirsiniz. Bu bilgiler
        talebin değerlendirilmesi ve iletişim yürütülmesi amacıyla kullanılır.
      </p>
      <h2>Google Ads ve izin tercihi</h2>
      <p>
        Reklam performansını ölçmek amacıyla Google Ads etiketi kullanılır. Reklam depolaması ve ilgili reklam izinleri
        varsayılan olarak kapalıdır; yalnızca çerez tercih ekranında kabul etmeniz hâlinde etkinleştirilir. Tercihiniz
        cihazınızdaki yerel depolama alanında tutulur ve çerez politikası sayfasından değiştirilebilir.
      </p>
      <h2>Haklarınız</h2>
      <p>
        6698 sayılı KVKK kapsamındaki bilgi, düzeltme ve silme talepleriniz için işletmeyle telefon üzerinden iletişime
        geçebilirsiniz.
      </p>
      <p>
        <Link href="/cerez-politikasi">Çerez politikasını inceleyin.</Link>
      </p>
    </LegalPage>
  );
}
