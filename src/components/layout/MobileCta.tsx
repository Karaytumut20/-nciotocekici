import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/src/config/site";

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        WhatsApp
      </a>
      <a href={`tel:${site.phoneE164}`}>
        <Phone />
        Hemen Ara
      </a>
    </div>
  );
}
