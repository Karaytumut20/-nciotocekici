import { notFound } from "next/navigation";
import { services } from "@/src/data/services";
import { ServicePage } from "@/src/components/templates/ServicePage";
import { createMetadata } from "@/src/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Bahçelievler 7/24 İnci Oto Çekici`,
    description: `${service.summary} Bahçelievler ve çevresinde 7/24 iletişim için İnci Oto Çekici’yi arayın.`,
    path: `/hizmetler/${service.slug}`,
  });
}
export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
