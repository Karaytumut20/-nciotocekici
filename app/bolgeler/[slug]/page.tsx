import { notFound } from "next/navigation";
import { locations } from "@/src/data/locations";
import { LocationPage } from "@/src/components/templates/LocationPage";
import { createMetadata } from "@/src/lib/seo";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) return {};
  const suffix = location.name === "Bahçelievler" ? "7/24 Yol Yardım" : "Oto Kurtarma ve Yol Yardım";
  return createMetadata({
    title: `${location.name} Oto Çekici | ${suffix} – İnci`,
    description: `${location.lead} Telefon ve WhatsApp üzerinden 7/24 iletişime geçin.`,
    path: `/bolgeler/${location.slug}`,
  });
}
export default async function LocationRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  return <LocationPage location={location} />;
}
