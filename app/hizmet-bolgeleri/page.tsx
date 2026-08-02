import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/src/data/locations";
import { PageHero } from "@/src/components/sections/PageHero";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Bahçelievler ve Yakın Oto Çekici Bölgeleri | İnci",
  description:
    "Bahçelievler, Şirinevler, Yenibosna, Bakırköy, Bağcılar ve yakın bölgelerde oto çekici ve yol yardım iletişimi.",
  path: "/hizmet-bolgeleri",
});
export default function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Hizmet alanı"
        title="Oto Çekici Hizmet Bölgeleri"
        description="Merkezimiz Bahçelievler’dedir. Yakın bölgelerdeki talepler araç, konum, trafik ve uygunluk bilgisine göre değerlendirilir."
        crumbs={[{ label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" }]}
      />
      <section className="section">
        <div className="shell location-grid index-grid">
          {locations.map((location) => (
            <Link key={location.slug} href={`/bolgeler/${location.slug}`}>
              <MapPin />
              <div>
                <h2>{location.name}</h2>
                <p>{location.lead}</p>
              </div>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
