import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { articles } from "@/src/data/articles";
import { PageHero } from "@/src/components/sections/PageHero";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Araç ve Yol Yardım Rehberi | İnci Oto Çekici",
  description:
    "Yolda kalma, akü, çekici fiyatı, otomatik vites ve motosiklet taşıma hakkında güvenli ve pratik bilgiler.",
  path: "/faydali-bilgiler",
});
export default function ArticlesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Rehber"
        title="Faydalı Yol Yardım Bilgileri"
        description="Yolda kalma anında güvenliği korumanıza ve doğru hizmet seçeneğini belirlemenize yardımcı olacak kısa rehberler."
        crumbs={[{ label: "Faydalı Bilgiler", href: "/faydali-bilgiler" }]}
        actions={false}
      />
      <section className="section">
        <div className="shell article-grid">
          {articles.map((article) => (
            <Link key={article.slug} href={`/faydali-bilgiler/${article.slug}`}>
              <BookOpen />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <span>
                Yazıyı oku <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
