import Link from "next/link";
import { ArrowRight, Navigation } from "lucide-react";
import { routePages } from "@/src/data/routes";
import { PageHero } from "@/src/components/sections/PageHero";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "E-5, TEM ve Basın Ekspres Yol Yardım Noktaları",
  description: "E-5/D100, TEM Otoyolu, Basın Ekspres ve Atatürk Havalimanı çevresi oto çekici ve yol yardım bilgileri.",
  path: "/yol-yardim-noktalari",
});
export default function RouteIndex() {
  return (
    <>
      <PageHero
        eyebrow="Ana yollar"
        title="Yol Yardım Noktaları"
        description="Ana yollarda konumunuzu doğru paylaşın; seyir yönü, yakın çıkış ve güvenli bekleme noktasını iletin."
        crumbs={[{ label: "Yol Yardım Noktaları", href: "/yol-yardim-noktalari" }]}
      />
      <section className="section section-roads">
        <div className="shell road-grid">
          {routePages.map((page) => (
            <Link key={page.slug} href={`/yol-yardim/${page.slug}`}>
              <Navigation />
              <h2>{page.short}</h2>
              <p>{page.intro}</p>
              <strong>
                Detaylı bilgi <ArrowRight />
              </strong>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
