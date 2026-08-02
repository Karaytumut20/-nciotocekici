import { Breadcrumbs, type Crumb } from "@/src/components/seo/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/src/components/ui/CtaButtons";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: boolean;
}) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions && (
            <div className="button-row">
              <CallButton />
              <WhatsAppButton />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
