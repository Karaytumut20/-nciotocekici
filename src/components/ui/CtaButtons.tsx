"use client";

import { MessageCircle, Navigation, Phone } from "lucide-react";
import { directionsUrl, site, whatsappUrl } from "@/src/config/site";

function track(name: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("inci:analytics", { detail: { event: name } }));
  }
}

export function CallButton({ compact = false, label = "Hemen Ara" }: { compact?: boolean; label?: string }) {
  return (
    <a
      className={`button button-primary${compact ? " button-compact" : ""}`}
      href={`tel:${site.phoneE164}`}
      onClick={() => track("click_call")}
      aria-label={`${site.phoneDisplay} numarasını ara`}
    >
      <Phone size={19} aria-hidden="true" />
      <span>{label}</span>
      {!compact && <strong>{site.phoneDisplay}</strong>}
    </a>
  );
}

export function WhatsAppButton({ label = "WhatsApp’tan Konum Gönder", message }: { label?: string; message?: string }) {
  return (
    <a
      className="button button-whatsapp"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("click_whatsapp")}
    >
      <MessageCircle size={19} aria-hidden="true" /> {label}
    </a>
  );
}

export function DirectionsButton() {
  return (
    <a
      className="button button-secondary"
      href={directionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("click_directions")}
    >
      <Navigation size={19} aria-hidden="true" /> Yol Tarifi
    </a>
  );
}
