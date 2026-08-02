import { CallButton, WhatsAppButton } from "@/src/components/ui/CtaButtons";

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell">
        <div>
          <span className="eyebrow">7/24 İletişim</span>
          <h2>Bahçelievler’de Çekiciye mi İhtiyacınız Var?</h2>
          <p>Araç türünü ve konumunuzu paylaşın, uygun yol yardım hizmeti için hemen iletişime geçin.</p>
        </div>
        <div className="button-row">
          <CallButton />
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
