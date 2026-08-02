"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MINIMUM_VISIBLE_MS = 320;

export function RouteExperience({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const startedAt = useRef(0);

  useEffect(() => {
    const startTransition = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const next = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (next.origin !== current.origin) return;
      if (next.pathname === current.pathname && next.search === current.search) return;

      startedAt.current = Date.now();
      setLoading(true);
    };

    const startHistoryTransition = () => {
      startedAt.current = Date.now();
      setLoading(true);
    };

    document.addEventListener("click", startTransition, true);
    window.addEventListener("popstate", startHistoryTransition);
    return () => {
      document.removeEventListener("click", startTransition, true);
      window.removeEventListener("popstate", startHistoryTransition);
    };
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    let timer = 0;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    if (!startedAt.current) startedAt.current = Date.now();
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const finish = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;
          window.scrollTo(0, 0);
          const elapsed = Date.now() - startedAt.current;
          timer = window.setTimeout(
            () => {
              if (cancelled) return;
              window.scrollTo(0, 0);
              root.style.scrollBehavior = previousScrollBehavior;
              setLoading(false);
            },
            Math.max(0, MINIMUM_VISIBLE_MS - elapsed),
          );
        });
      });
    };

    if (document.readyState === "complete") {
      void Promise.race([document.fonts.ready, new Promise<void>((resolve) => window.setTimeout(resolve, 900))]).then(
        finish,
      );
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("load", finish);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname]);

  return (
    <>
      <div className="route-loader" data-visible={loading} aria-hidden={!loading}>
        <div className="route-loader-mark" aria-hidden="true">
          <span>İNCİ</span>
          <strong>7/24</strong>
        </div>
        <div className="route-loader-copy" role="status" aria-live="polite">
          Yol yardım hazırlanıyor
        </div>
        <span className="route-loader-line" aria-hidden="true" />
      </div>
      {children}
    </>
  );
}
