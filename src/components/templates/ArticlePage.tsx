import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert } from "lucide-react";
import type { Article } from "@/src/data/articles";
import { PageHero } from "@/src/components/sections/PageHero";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { articleSchema } from "@/src/lib/schema";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <>
      <PageHero
        eyebrow="Faydalı bilgiler"
        title={article.title}
        description={article.description}
        actions={false}
        crumbs={[
          { label: "Faydalı Bilgiler", href: "/faydali-bilgiler" },
          { label: article.title, href: `/faydali-bilgiler/${article.slug}` },
        ]}
      />
      <article className="section">
        <div className="shell article-layout">
          <div className="article-content">
            <div className="safety-box">
              <ShieldAlert />
              <p>
                <strong>Acil durumda:</strong> Önce güvenli bir konuma geçin. Yaralanma, yangın veya trafik güvenliği
                riski varsa 112’yi arayın.
              </p>
            </div>
            {article.sections.map(([title, body]) => (
              <section key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
          <aside className="article-aside">
            <BookOpen />
            <h2>İlgili hizmetler</h2>
            <Link href="/hizmetler/oto-cekici">
              Oto çekici <ArrowRight />
            </Link>
            <Link href="/hizmetler/yol-yardim">
              7/24 yol yardım <ArrowRight />
            </Link>
            <Link href="/hizmetler/aku-takviye">
              Akü takviye <ArrowRight />
            </Link>
          </aside>
        </div>
      </article>
      <FinalCta />
      <JsonLd data={articleSchema(article.title, `/faydali-bilgiler/${article.slug}`, article.description)} />
    </>
  );
}
