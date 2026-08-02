import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";
import { site } from "@/src/config/site";
import { services } from "@/src/data/services";
import { locations } from "@/src/data/locations";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image
            src={site.logo}
            width={110}
            height={110}
            alt="İnci Oto Çekici Bahçelievler 7/24 Yol Yardım"
            unoptimized
          />
          <h2>İnci Oto Çekici</h2>
          <p>Bahçelievler merkezli 7/24 oto çekici, araç kurtarma ve yol yardım iletişimi.</p>
        </div>
        <div>
          <h3>Hizmetler</h3>
          {services.slice(0, 6).map((item) => (
            <Link key={item.slug} href={`/hizmetler/${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Hizmet Bölgeleri</h3>
          {locations.slice(0, 6).map((item) => (
            <Link key={item.slug} href={`/bolgeler/${item.slug}`}>
              {item.name}
            </Link>
          ))}
          <Link href="/hizmet-bolgeleri">Tüm bölgeler</Link>
        </div>
        <div>
          <h3>İletişim</h3>
          <a href={`tel:${site.phoneE164}`}>
            <Phone size={17} />
            {site.phoneDisplay}
          </a>
          <p>
            <MapPin size={17} />
            {site.address}
          </p>
          <p>
            <Clock3 size={17} />
            {site.hours}
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <div>
          <Link href="/gizlilik-ve-kvkk">Gizlilik ve KVKK</Link>
          <Link href="/cerez-politikasi">Çerez Politikası</Link>
          <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
