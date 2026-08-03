import Link from "next/link";
import { ArrowRight, CarFront, CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import type { Service } from "@/src/data/services";
import { services } from "@/src/data/services";
import { locations } from "@/src/data/locations";
import { PageHero } from "@/src/components/sections/PageHero";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { serviceSchema, webPageSchema } from "@/src/lib/schema";
import { articles } from "@/src/data/articles";

export function ServicePage({ service }: { service: Service }) {
  const Icon = service.icon;
  const localFaqs = [
    {
      question: `${service.title} için hangi bilgileri paylaşmalıyım?`,
      answer:
        "Açık konum, araç marka-modeli, aracın hareket durumu ve teslim edilmesini istediğiniz nokta yeterli bir başlangıçtır.",
    },
    {
      question: `${service.title} fiyatı nasıl belirlenir?`,
      answer:
        "Mesafe, araç türü, erişim ve yükleme koşulları ile gerekli ekipmana göre değişir. Net bilgi görüşme sırasında paylaşılır.",
    },
    {
      question: "Gece veya hafta sonu ulaşabilir miyim?",
      answer: "Evet. Telefon ve WhatsApp iletişimi haftanın 7 günü, 24 saat açıktır.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Profesyonel yol yardım"
        title={service.slug === "oto-kurtarma" ? "Oto Kurtarma ve Oto Kurtarıcı Hizmeti" : service.title}
        description={service.intro}
        crumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title, href: `/hizmetler/${service.slug}` },
        ]}
      />
      <section className="section">
        <div className="shell two-column">
          <div>
            <span className="icon-badge">
              <Icon />
            </span>
            <h2>{service.title} hangi durumlarda gerekir?</h2>
            <p>{service.summary}</p>
            <ul className="check-list">
              {service.scenarios.map((item) => (
                <li key={item}>
                  <CheckCircle2 />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="info-card">
            <div className="info-card-head">
              <PhoneCall />
              <h3>Hizmet nasıl alınır?</h3>
            </div>
            <ol>
              <li>Telefonla arayın veya WhatsApp’tan konum gönderin.</li>
              <li>Araç ve arıza bilgisini paylaşın.</li>
              <li>Uygun destek ve süreç bilgisini birlikte netleştirelim.</li>
            </ol>
            <p>Tahmini varış ve işlem bilgisi, konum ve trafik durumuna göre paylaşılır.</p>
          </aside>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">
              <CarFront size={17} />
              Araç kapsamı
            </span>
            <h2>Desteklenen araç türleri</h2>
            <p>
              Otomobil, SUV, motosiklet ve hafif ticari araç talepleri; ölçü, durum ve taşıma koşullarına göre
              değerlendirilir.
            </p>
          </div>
          <div className="pill-grid">
            <span>Binek otomobil</span>
            <span>SUV</span>
            <span>Hafif ticari</span>
            <span>Motosiklet</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">
              <MapPin size={17} />
              Yakın bölgeler
            </span>
            <h2>{service.title} hizmet bölgeleri</h2>
          </div>
          <div className="link-grid">
            {locations.slice(0, 8).map((item) => (
              <Link key={item.slug} href={`/bolgeler/${item.slug}`}>
                {item.name}
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <h2>İlgili hizmetler</h2>
          </div>
          <div className="service-grid compact">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link className="service-card" key={item.slug} href={`/hizmetler/${item.slug}`}>
                    <div className="service-card-head">
                      <span className="icon-badge">
                        <RelatedIcon />
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.summary}</p>
                    <span>
                      Detayları incele <ArrowRight />
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <h2>Yol yardım rehberinden</h2>
            <p>Doğru hizmeti seçmenize ve yolda kalma anında güvenliği korumanıza yardımcı kısa içerikler.</p>
          </div>
          <div className="link-grid">
            {articles.slice(0, 4).map((article) => (
              <Link key={article.slug} href={`/faydali-bilgiler/${article.slug}`}>
                {article.title}
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={localFaqs} title={`${service.title} hakkında sorular`} />
      <FinalCta />
      <JsonLd data={serviceSchema(service.title, `/hizmetler/${service.slug}`, service.summary)} />
      <JsonLd data={webPageSchema(service.title, `/hizmetler/${service.slug}`, service.summary)} />
    </>
  );
}
