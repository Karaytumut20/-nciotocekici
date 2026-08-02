import { notFound } from "next/navigation";
import { articles } from "@/src/data/articles";
import { ArticlePage } from "@/src/components/templates/ArticlePage";
import { createMetadata } from "@/src/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return createMetadata({
    title: `${article.title} | İnci Oto Çekici`,
    description: article.description,
    path: `/faydali-bilgiler/${article.slug}`,
  });
}
export default async function ArticleRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
