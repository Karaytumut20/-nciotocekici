import { PageHero } from "@/src/components/sections/PageHero";

export function LegalPage({
  title,
  description,
  children,
  slug,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  slug: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Yasal bilgiler"
        title={title}
        description={description}
        actions={false}
        crumbs={[{ label: title, href: `/${slug}` }]}
      />
      <article className="section">
        <div className="shell legal-content">{children}</div>
      </article>
    </>
  );
}
