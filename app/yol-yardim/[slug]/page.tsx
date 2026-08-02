import { notFound } from "next/navigation";
import { routePages } from "@/src/data/routes";
import { RoutePageTemplate } from "@/src/components/templates/RoutePageTemplate";
import { createMetadata } from "@/src/lib/seo";

export function generateStaticParams() {
  return routePages.map((page) => ({ slug: page.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = routePages.find((item) => item.slug === slug);
  if (!page) return {};
  return createMetadata({
    title: `${page.title} | İnci Oto Çekici`,
    description: page.intro,
    path: `/yol-yardim/${page.slug}`,
  });
}
export default async function RoadRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = routePages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <RoutePageTemplate page={page} />;
}
