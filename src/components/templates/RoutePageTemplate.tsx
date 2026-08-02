import Link from "next/link";
import { AlertTriangle, ArrowRight, MapPinned, Navigation } from "lucide-react";
import type { RoutePage } from "@/src/data/routes";
import { services } from "@/src/data/services";
import { PageHero } from "@/src/components/sections/PageHero";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { webPageSchema } from "@/src/lib/schema";

export function RoutePageTemplate({ page }: { page: RoutePage }) {
  const faqs = [
    {
      question: `${page.short} üzerinde konumumu nasıl tarif etmeliyim?`,
      answer:
        "Seyir yönü, en yakın çıkış veya bağlantı, varsa kilometre bilgisi ve WhatsApp konum bağlantısını paylaşın.",
    },
    {
      question: "Araçta beklemeli miyim?",
      answer:
        "Bu karar yol ve trafik koşullarına bağlıdır. Güvenli bir bariyer arkası varsa trafik akışından uzak durun; hayati riskte 112’yi arayın.",
    },
    {
      question: "Fiyat ve varış süresi nedir?",
      answer:
        "Konum, trafik, araç türü ve ihtiyaç duyulan ekipmana göre değişir. Tahmini bilgi görüşme sırasında verilir.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Ana yol ve kritik nokta"
        title={page.title}
        description={page.intro}
        crumbs={[
          { label: "Yol Yardım Noktaları", href: "/yol-yardim-noktalari" },
          { label: page.short, href: `/yol-yardim/${page.slug}` },
        ]}
      />
      <section className="section">
        <div className="shell two-column">
          <div>
            <span className="eyebrow">
              <MapPinned size={17} />
              Doğru bilgi
            </span>
            <h2>Konumunuzu eksiksiz paylaşın</h2>
            <p>
              Yol adı tek başına yeterli olmayabilir. Seyir yönünü, yakın çıkış veya bağlantı noktasını ve aracın
              güvenli bir alanda olup olmadığını iletin.
            </p>
            <ul className="check-list">
              <li>
                <Navigation />
                WhatsApp konum bağlantısı
              </li>
              <li>
                <Navigation />
                Yol yönü ve yakın çıkış
              </li>
              <li>
                <Navigation />
                Araç ve arıza bilgisi
              </li>
            </ul>
          </div>
          <aside className="warning-card">
            <AlertTriangle />
            <h3>Önce can güvenliği</h3>
            <p>{page.safety}</p>
          </aside>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <h2>İlgili yol yardım seçenekleri</h2>
          </div>
          <div className="service-grid compact">
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <Link className="service-card" key={service.slug} href={`/hizmetler/${service.slug}`}>
                  <Icon />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span>
                    İncele <ArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`${page.short} yol yardımı hakkında sorular`} />
      <FinalCta />
      <JsonLd data={webPageSchema(page.title, `/yol-yardim/${page.slug}`, page.intro)} />
    </>
  );
}
