import Link from "next/link";
import { Home, Phone, Wrench } from "lucide-react";
import { site } from "@/src/config/site";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <span>404</span>
        <h1>Aradığınız sayfa bulunamadı</h1>
        <p>
          Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana sayfaya dönebilir ya da acil yol yardım için
          arayabilirsiniz.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/">
            <Home />
            Ana Sayfa
          </Link>
          <Link className="button button-secondary" href="/hizmetler">
            <Wrench />
            Hizmetler
          </Link>
          <a className="button button-whatsapp" href={`tel:${site.phoneE164}`}>
            <Phone />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
