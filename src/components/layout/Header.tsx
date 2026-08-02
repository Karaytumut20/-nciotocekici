"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/src/config/site";
import { services } from "@/src/data/services";
import { locations } from "@/src/data/locations";
import { CallButton } from "@/src/components/ui/CtaButtons";

const links = [
  ["Ana Sayfa", "/"],
  ["Hizmetler", "/hizmetler"],
  ["Hizmet Bölgeleri", "/hizmet-bolgeleri"],
  ["Yol Yardım Noktaları", "/yol-yardim-noktalari"],
  ["Hakkımızda", "/hakkimizda"],
  ["Faydalı Bilgiler", "/faydali-bilgiler"],
  ["İletişim", "/iletisim"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    const previous = document.activeElement as HTMLElement | null;
    document.body.classList.add("menu-open");
    drawer.current?.querySelector<HTMLElement>("button, a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && drawer.current) {
        const nodes = Array.from(drawer.current.querySelectorAll<HTMLElement>("a, button, summary")).filter(
          (node) => !node.hasAttribute("disabled"),
        );
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      (previous === trigger ? previous : trigger)?.focus();
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>{site.addressShort}</span>
          <div>
            <span className="status-dot" aria-hidden="true" /> <span>7/24 Hizmetinizdeyiz</span>
            <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="shell navbar-inner">
          <Link className="brand" href="/" aria-label="İnci Oto Çekici ana sayfa">
            <Image
              src={site.logo}
              width={58}
              height={58}
              alt="İnci Oto Çekici Bahçelievler 7/24 Yol Yardım"
              priority
              unoptimized
            />
            <span>
              <strong>İnci</strong> Oto Çekici<small>Bahçelievler • 7/24</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Ana menü">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <CallButton />
            <a
              className="mobile-phone"
              href={`tel:${site.phoneE164}`}
              aria-label={`${site.phoneDisplay} numarasını ara`}
            >
              <Phone />
            </a>
            <button
              ref={menuButton}
              className="menu-button"
              type="button"
              aria-label="Menüyü aç"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => {
                setOpen(true);
                window.dispatchEvent(new CustomEvent("inci:analytics", { detail: { event: "open_mobile_menu" } }));
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="drawer-backdrop"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div ref={drawer} id="mobile-menu" className="drawer" role="dialog" aria-modal="true" aria-label="Mobil menü">
            <div className="drawer-head">
              <span>Menü</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Menüyü kapat">
                <X />
              </button>
            </div>
            <nav aria-label="Mobil ana menü">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
              <details>
                <summary>Hizmetler</summary>
                <div>
                  {services.map((item) => (
                    <Link key={item.slug} href={`/hizmetler/${item.slug}`} onClick={() => setOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>
              <details>
                <summary>Hizmet Bölgeleri</summary>
                <div>
                  {locations.slice(0, 12).map((item) => (
                    <Link key={item.slug} href={`/bolgeler/${item.slug}`} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>
            </nav>
            <CallButton />
          </div>
        </div>
      )}
    </header>
  );
}
