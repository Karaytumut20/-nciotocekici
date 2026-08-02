import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/src/lib/schema";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Ana Sayfa", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs shell" aria-label="Sayfa yolu">
        <ol>
          {all.map((item, index) => (
            <li key={item.href}>
              {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
              {index === all.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>
                  {index === 0 ? (
                    <>
                      <Home size={14} aria-hidden="true" />
                      <span className="sr-only">Ana Sayfa</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
