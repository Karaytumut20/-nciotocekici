import Link from "next/link";
import { ArrowRight, Compass, MapPin, ShieldCheck } from "lucide-react";
import type { Location } from "@/src/data/locations";
import { locations } from "@/src/data/locations";
import { services } from "@/src/data/services";
import { site } from "@/src/config/site";
import { PageHero } from "@/src/components/sections/PageHero";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { webPageSchema } from "@/src/lib/schema";

export function LocationPage({ location }: { location: Location }) {
  const current = locations.findIndex((item) => item.slug === location.slug);
  const nearby = [
    locations[(current + 1) % locations.length],
    locations[(current + 2) % locations.length],
    locations[(current + locations.length - 1) % locations.length],
  ];
  const faqItems = [
    {
      question: `${location.name} bölgesinde oto çekici için nasıl konum gönderirim?`,
      answer:
        "WhatsApp üzerinden canlı konum veya harita bağlantısı gönderebilir; yol yönü ve yakındaki güvenli bekleme noktasını ayrıca yazabilirsiniz.",
    },
    {
      question: `${location.name} oto kurtarma hizmeti 7/24 mü?`,
      answer: "Telefon ve WhatsApp iletişimi 7/24 açıktır. Araç, konum ve uygunluk bilgisi görüşmede değerlendirilir.",
    },
    {
      question: "İşletmenin bu bölgede ayrı şubesi var mı?",
      answer: `Hayır. İnci Oto Çekici’nin merkez adresi ${site.address} adresidir; diğer bölgelerde sahte şube bilgisi kullanılmaz.`,
    },
  ];
  return (
    <>
      <PageHero
        eyebrow={`${location.name} yol yardım`}
        title={`${location.name} Oto Çekici ve Oto Kurtarma`}
        description={location.lead}
        crumbs={[
          { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
          { label: location.name, href: `/bolgeler/${location.slug}` },
        ]}
      />
      <section className="section">
        <div className="shell two-column">
          <div>
            <span className="eyebrow">
              <Compass size={17} />
              Bölge bilgisi
            </span>
            <h2>{location.name} çevresinde yol yardım</h2>
            <p>
              {location.scenario}. Aracın bulunduğu yol yönü, güvenli bekleme noktası ve araç durumu telefon veya
              WhatsApp görüşmesinde paylaşılmalıdır.
            </p>
            <div className="route-note">
              <MapPin />
              <div>
                <strong>Başlıca erişim bilgisi</strong>
                <span>{location.road}</span>
              </div>
            </div>
          </div>
          <aside className="info-card">
            <div className="info-card-head">
              <ShieldCheck />
              <h3>Güvenli konum paylaşımı</h3>
            </div>
            <p>
              Otoyol veya yoğun yoldaysanız yalnızca mahalle adını değil, seyir yönünü ve yakın çıkışı da iletin. Can
              güvenliği riski varsa önce 112’yi arayın.
            </p>
          </aside>
        </div>
      </section>
      {location.name === "Ataköy" && (
        <section className="section section-muted">
          <div className="shell narrow">
            <span className="eyebrow">Özel konum bilgisi</span>
            <h2>Ataköy Marina çevresinde yol yardım</h2>
            <p>
              Ataköy Marina çevresinde otopark girişi, sahil yönü veya yakın bağlantı noktasını paylaşmak erişim planını
              kolaylaştırır. Ataköy Marina oto çekici araması bu sayfada, ayrı ve kopya bir sayfa oluşturmadan
              karşılanır.
            </p>
          </div>
        </section>
      )}
      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <h2>{location.name} için sunulan hizmetler</h2>
          </div>
          <div className="service-grid compact">
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <Link className="service-card" key={service.slug} href={`/hizmetler/${service.slug}`}>
                  <div className="service-card-head">
                    <span className="icon-badge">
                      <Icon />
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.summary}</p>
                  <span>
                    Hizmete git <ArrowRight />
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
            <h2>Yakın hizmet bölgeleri</h2>
          </div>
          <div className="link-grid">
            {nearby.map((item) => (
              <Link key={item.slug} href={`/bolgeler/${item.slug}`}>
                {item.name}
                <ArrowRight />
              </Link>
            ))}
          </div>
          <div className="address-callout">
            <MapPin />
            <div>
              <strong>Merkez adresimiz</strong>
              <p>{site.address}</p>
            </div>
          </div>
        </div>
      </section>
      <FaqSection items={faqItems} title={`${location.name} oto çekici hakkında sorular`} />
      <FinalCta />
      <JsonLd
        data={webPageSchema(`${location.name} Oto Çekici ve Oto Kurtarma`, `/bolgeler/${location.slug}`, location.lead)}
      />
    </>
  );
}
