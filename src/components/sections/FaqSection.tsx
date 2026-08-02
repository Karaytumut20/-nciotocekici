import { HelpCircle } from "lucide-react";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { faqSchema } from "@/src/lib/schema";

export function FaqSection({
  items,
  title = "Sık Sorulan Sorular",
}: {
  items: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="section section-muted">
      <div className="shell narrow">
        <div className="section-heading centered">
          <span className="eyebrow">
            <HelpCircle size={16} />
            Merak edilenler
          </span>
          <h2>{title}</h2>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
