import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/src/data/services";
import { PageHero } from "@/src/components/sections/PageHero";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Oto Çekici ve Yol Yardım Hizmetleri | İnci",
  description:
    "Oto çekici, oto kurtarma, akü takviye, lastik yol yardım, motosiklet ve hafif ticari taşıma hizmetlerini inceleyin.",
  path: "/hizmetler",
});

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Oto Çekici ve Yol Yardım Hizmetleri"
        description="Aracınızın konumu, türü ve hareket durumuna göre uygun hizmet seçeneğini birlikte belirleyin."
        crumbs={[{ label: "Hizmetler", href: "/hizmetler" }]}
      />
      <section className="section">
        <div className="shell service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link className="service-card" key={service.slug} href={`/hizmetler/${service.slug}`}>
                <span className="icon-badge">
                  <Icon />
                </span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <span>
                  Detayları incele <ArrowRight />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
