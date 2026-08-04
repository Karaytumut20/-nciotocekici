"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const consentStorageKey = "inci_cookie_consent_v1";
const openPreferencesEvent = "inci:open-cookie-preferences";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(value: ConsentValue) {
  window.gtag?.("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: "denied",
  });
}

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentValue | null>();

  useEffect(() => {
    const readSavedChoice = window.setTimeout(() => {
      let savedChoice: string | null = null;
      try {
        savedChoice = window.localStorage.getItem(consentStorageKey);
      } catch {
        savedChoice = null;
      }

      if (savedChoice === "granted" || savedChoice === "denied") {
        setChoice(savedChoice);
        updateGoogleConsent(savedChoice);
      } else {
        setChoice(null);
      }
    }, 0);

    const openPreferences = () => setChoice(null);
    window.addEventListener(openPreferencesEvent, openPreferences);
    return () => {
      window.clearTimeout(readSavedChoice);
      window.removeEventListener(openPreferencesEvent, openPreferences);
    };
  }, []);

  function saveChoice(value: ConsentValue) {
    try {
      window.localStorage.setItem(consentStorageKey, value);
    } catch {
      // Depolama kapalıysa tercih yalnızca mevcut sayfa oturumunda uygulanır.
    }
    updateGoogleConsent(value);
    setChoice(value);
  }

  if (choice !== null) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title">
      <div>
        <span>Gizlilik tercihi</span>
        <h2 id="cookie-consent-title">Reklam ölçümüne izin verir misiniz?</h2>
        <p>
          Google Ads etiketi reklam performansını ölçmek için kullanılır. İzin vermediğiniz sürece reklam depolaması
          kapalı kalır. Ayrıntılar için <Link href="/cerez-politikasi">çerez politikasını</Link> inceleyebilirsiniz.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button className="button button-secondary" type="button" onClick={() => saveChoice("denied")}>
          Yalnızca gerekli
        </button>
        <button className="button button-primary" type="button" onClick={() => saveChoice("granted")}>
          Kabul et
        </button>
      </div>
    </aside>
  );
}

export function CookiePreferencesButton() {
  return (
    <button
      className="cookie-preferences-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openPreferencesEvent))}
    >
      Çerez tercihlerini değiştir
    </button>
  );
}
