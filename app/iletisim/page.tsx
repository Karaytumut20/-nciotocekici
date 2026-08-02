import { Clock3, MapPin, Phone } from "lucide-react";
import { site } from "@/src/config/site";
import { PageHero } from "@/src/components/sections/PageHero";
import { WhatsAppForm } from "@/src/components/sections/WhatsAppForm";
import { DirectionsButton, WhatsAppButton } from "@/src/components/ui/CtaButtons";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "İletişim | 0530 822 5006 İnci Oto Çekici",
  description:
    "İnci Oto Çekici’ye 0530 822 5006 numarasından 7/24 ulaşın. Siyavuşpaşa, Bahçelievler merkez adresi ve WhatsApp iletişimi.",
  path: "/iletisim",
});
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="7/24 iletişim"
        title="İnci Oto Çekici İletişim"
        description="Konumunuzu ve araç bilgisini paylaşın; uygun yol yardım seçeneğini görüşelim."
        crumbs={[{ label: "İletişim", href: "/iletisim" }]}
      />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <h2>Telefon, WhatsApp ve adres</h2>
            <div className="contact-list">
              <a href={`tel:${site.phoneE164}`}>
                <Phone />
                <span>
                  <small>Telefon</small>
                  <strong>{site.phoneDisplay}</strong>
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Açık adres</small>
                  <strong>{site.address}</strong>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <small>Çalışma saatleri</small>
                  <strong>{site.hours}</strong>
                </span>
              </div>
            </div>
            <div className="button-row">
              <WhatsAppButton />
              <DirectionsButton />
            </div>
            <p className="privacy-note">
              WhatsApp mesaj hazırlama formundaki bilgiler sitede saklanmaz; yalnızca cihazınızda mesaj metni
              oluşturulur.
            </p>
          </div>
          <div>
            <h2>WhatsApp mesajı hazırlayın</h2>
            <WhatsAppForm />
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell map-card wide">
          <div className="map-pin">
            <MapPin />
          </div>
          <h2>Siyavuşpaşa, Bahçelievler</h2>
          <p>
            Google Maps işletme pini ve iframe bağlantısı henüz doğrulanmadı. Yol tarifi bağlantısı açık adresi Google
            Maps aramasında açar.
          </p>
          <DirectionsButton />
        </div>
      </section>
    </>
  );
}
