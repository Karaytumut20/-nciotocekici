import Image from "next/image";
import { CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/src/config/site";
import { PageHero } from "@/src/components/sections/PageHero";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Hakkımızda | İnci Oto Çekici Bahçelievler",
  description: "Bahçelievler merkezli İnci Oto Çekici’nin hizmet yaklaşımı, araç kapsamı ve iletişim bilgileri.",
  path: "/hakkimizda",
});
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="İnci Oto Çekici"
        title="Bahçelievler Merkezli Yol Yardım İletişimi"
        description="İnci Oto Çekici; araç ve konum bilgisini esas alan, açık iletişimli oto çekici ve yol yardım hizmeti sunar."
        crumbs={[{ label: "Hakkımızda", href: "/hakkimizda" }]}
      />
      <section className="section">
        <div className="shell two-column">
          <div>
            <span className="eyebrow">
              <ShieldCheck size={17} />
              Yaklaşımımız
            </span>
            <h2>İhtiyacı doğru anlayıp uygun süreci planlamak</h2>
            <p>
              Yolda kalma anında her aracın ve konumun ihtiyacı aynı değildir. Bu nedenle önce araç türünü, arızanın
              belirtilerini, erişim koşullarını ve teslim noktasını öğreniriz.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 />
                7/24 telefon ve WhatsApp iletişimi
              </li>
              <li>
                <CheckCircle2 />
                Konum ve trafik koşullarına göre açık bilgilendirme
              </li>
              <li>
                <CheckCircle2 />
                Binek, SUV, motosiklet ve hafif ticari araç değerlendirmesi
              </li>
              <li>
                <CheckCircle2 />
                Güvenlik odaklı konum paylaşımı
              </li>
            </ul>
            <div className="address-callout">
              <MapPin />
              <div>
                <strong>Merkez adresimiz</strong>
                <p>{site.address}</p>
              </div>
            </div>
          </div>
          <div className="logo-card static">
            <Image
              src={site.logo}
              alt="İnci Oto Çekici Bahçelievler 7/24 Yol Yardım"
              width={520}
              height={520}
              unoptimized
            />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
