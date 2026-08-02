"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/src/config/site";

export function WhatsAppForm() {
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const vehicle = String(data.get("vehicle") || "");
    const location = String(data.get("location") || "");
    const need = String(data.get("need") || "");
    if (!vehicle || !location || !need) {
      setError("Lütfen araç türü, bölge ve hizmet ihtiyacını doldurun.");
      return;
    }
    const message = [
      "Merhaba İnci Oto Çekici, yol yardım hizmeti almak istiyorum.",
      `Ad: ${data.get("name") || "Belirtilmedi"}`,
      `Araç: ${vehicle}`,
      `Bulunduğum bölge: ${location}`,
      `İhtiyaç: ${need}`,
      `Açıklama: ${data.get("note") || "-"}`,
      "Konumum:",
    ].join("\n");
    window.dispatchEvent(new CustomEvent("inci:analytics", { detail: { event: "submit_whatsapp_form" } }));
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return (
    <form className="whatsapp-form" onSubmit={submit} noValidate>
      <div>
        <label htmlFor="name">
          Adınız <span>(isteğe bağlı)</span>
        </label>
        <input id="name" name="name" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="vehicle">Araç türü</label>
        <select
          id="vehicle"
          name="vehicle"
          required
          defaultValue=""
          aria-describedby={error ? "whatsapp-form-error" : undefined}
        >
          <option value="" disabled>
            Seçin
          </option>
          <option>Binek otomobil</option>
          <option>SUV</option>
          <option>Hafif ticari</option>
          <option>Motosiklet</option>
        </select>
      </div>
      <div>
        <label htmlFor="location">Bulunduğunuz bölge</label>
        <input
          id="location"
          name="location"
          required
          placeholder="Örn. Şirinevler"
          aria-describedby={error ? "whatsapp-form-error" : undefined}
        />
      </div>
      <div>
        <label htmlFor="need">Hizmet ihtiyacı</label>
        <select
          id="need"
          name="need"
          required
          defaultValue=""
          aria-describedby={error ? "whatsapp-form-error" : undefined}
        >
          <option value="" disabled>
            Seçin
          </option>
          <option>Oto çekici</option>
          <option>Oto kurtarma</option>
          <option>Akü takviye</option>
          <option>Lastik yol yardım</option>
          <option>Diğer</option>
        </select>
      </div>
      <div className="full">
        <label htmlFor="note">
          Kısa açıklama <span>(isteğe bağlı)</span>
        </label>
        <textarea id="note" name="note" rows={3} />
      </div>
      {error && (
        <p className="form-error" id="whatsapp-form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button button-whatsapp full" type="submit">
        <MessageCircle size={19} />
        WhatsApp Mesajını Hazırla
      </button>
    </form>
  );
}
