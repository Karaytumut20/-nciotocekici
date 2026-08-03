import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Car,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Route,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { site } from "@/src/config/site";
import { services } from "@/src/data/services";
import { locations } from "@/src/data/locations";
import { routePages } from "@/src/data/routes";
import { faqs } from "@/src/data/faqs";
import { CallButton, DirectionsButton, WhatsAppButton } from "@/src/components/ui/CtaButtons";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { FinalCta } from "@/src/components/sections/FinalCta";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { homeSchema } from "@/src/lib/schema";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bahçelievler Oto Çekici | 7/24 Yol Yardım – İnci",
  description:
    "İnci Oto Çekici; Bahçelievler ve çevresinde 7/24 oto çekici, oto kurtarma, akü takviye ve yol yardım hizmeti sunar. Hemen iletişime geçin.",
});

const actionCards = [
  ["Aracım Yolda Kaldı", "Konum ve araç bilgisini paylaşın.", "/hizmetler/oto-cekici", Truck],
  ["Aracım Çalışmıyor", "Akü ve arıza belirtilerini görüşelim.", "/hizmetler/aku-takviye", BatteryCharging],
  ["Aracımı Taşıtmak İstiyorum", "Alış ve teslim konumunu iletin.", "/hizmetler/sehirler-arasi-oto-cekici", Route],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero hero-premium">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" />
              Bahçelievler / İstanbul
            </span>
            <h1>
              Bahçelievler oto çekici. <em>Yolda kaldığınızda işi uzatmayız.</em>
            </h1>
            <p>
              İnci Oto Çekici; Bahçelievler, Şirinevler, Yenibosna ve çevresinde 7/24 araç çekme, oto kurtarma, akü
              takviye ve yol yardım iletişimi sunar.
            </p>
            <div className="button-row">
              <CallButton />
              <WhatsAppButton />
            </div>
            <div className="hero-proof" aria-label="Hizmet özeti">
              <span>
                <strong>7/24</strong>
                Kesintisiz iletişim
              </span>
              <span>
                <strong>Tek merkez</strong>
                Bahçelievler çıkışlı
              </span>
              <span>
                <strong>Doğrudan</strong>
                Telefon ve WhatsApp
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-visual-number" aria-hidden="true">
              24
            </span>
            <div className="logo-card">
              <span className="logo-card-label">İNCİ OTO ÇEKİCİ • BAHÇELİEVLER • 7/24</span>
              <Image
                src={site.logo}
                alt="İnci Oto Çekici Bahçelievler 7/24 Yol Yardım"
                width={620}
                height={620}
                priority
                unoptimized
                sizes="(max-width: 900px) 86vw, 42vw"
              />
            </div>
            <div className="availability">
              <span className="status-dot" />
              <div>
                <strong>7/24 Yol Yardım Hattı</strong>
                <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-service-line" aria-hidden="true">
          <span>OTO ÇEKİCİ</span>
          <i>•</i>
          <span>YOL YARDIM</span>
          <i>•</i>
          <span>OTO KURTARMA</span>
          <i>•</i>
          <span>AKÜ TAKVİYE</span>
        </div>
      </section>
      <section className="quick-actions">
        <div className="shell action-grid">
          {actionCards.map(([title, text, href, Icon]) => (
            <Link key={href} href={href}>
              <Icon />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </section>
      <section className="emergency-strip">
        <div className="shell">
          <div>
            <strong>Yolda mı kaldınız?</strong>
            <span>Konumunuzu gönderin, ihtiyacınıza uygun yardım için görüşelim.</span>
          </div>
          <div className="button-row">
            <CallButton compact label="Telefon Et" />
            <WhatsAppButton label="Konum Gönder" />
          </div>
        </div>
      </section>
      <section className="section" id="hizmetler">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">
              <Wrench size={17} />
              Yol yardım çözümleri
            </span>
            <h2>İhtiyacınıza uygun çekici ve yol yardım hizmeti</h2>
            <p>Aracınızın konumu ve durumu üzerinden doğru hizmet seçeneğini birlikte belirleyelim.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link className="service-card" key={service.slug} href={`/hizmetler/${service.slug}`}>
                  <div className="service-card-head">
                    <span className="icon-badge">
                      <Icon />
                    </span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.summary}</p>
                  <span>
                    Hizmeti incele <ArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="center-action">
            <Link className="text-link" href="/hizmetler">
              Tüm hizmetleri görüntüle <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Süreç</span>
            <h2>Üç adımda yol yardım talebi</h2>
          </div>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>Bizi arayın veya konum gönderin</h3>
              <p>Telefonla ulaşın ya da WhatsApp üzerinden bulunduğunuz noktayı paylaşın.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Araç ve konum bilgisini paylaşın</h3>
              <p>Aracın türü, hareket durumu ve gitmesi gereken noktayı iletin.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Uygun desteği birlikte planlayalım</h3>
              <p>Tahmini varış ve işlem bilgisi, konum ve trafik durumuna göre görüşmede paylaşılır.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">
                <MapPin size={17} />
                Hizmet alanı
              </span>
              <h2>Bahçelievler ve yakın bölgeler</h2>
            </div>
            <Link className="text-link" href="/hizmet-bolgeleri">
              Tüm bölgeler <ArrowRight />
            </Link>
          </div>
          <div className="location-grid">
            {locations.slice(0, 15).map((location, index) => (
              <Link className={index === 0 ? "featured" : ""} key={location.slug} href={`/bolgeler/${location.slug}`}>
                <MapPin />
                <div>
                  <h3>{location.name}</h3>
                  <p>{location.lead}</p>
                </div>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-roads">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">
              <Navigation size={17} />
              Ana yollar
            </span>
            <h2>Kritik yol yardım noktaları</h2>
            <p>Yol yönü, yakın çıkış ve güvenli bekleme noktasını paylaşarak doğru konum bilgisini iletin.</p>
          </div>
          <div className="road-grid">
            {routePages.map((page, index) => (
              <Link key={page.slug} href={`/yol-yardim/${page.slug}`}>
                <span>0{index + 1}</span>
                <h3>{page.short}</h3>
                <p>{page.intro}</p>
                <strong>
                  Yol yardım bilgisi <ArrowRight />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell two-column">
          <div>
            <span className="eyebrow">
              <ShieldCheck size={17} />
              Neden İnci?
            </span>
            <h2>Doğrudan, açık ve konuma göre planlanan destek</h2>
            <p>Varış ve işlem bilgilerini aracınızın konumu, trafik ve taşıma koşullarına göre açıkça paylaşıyoruz.</p>
            <ul className="check-list">
              <li>
                <CheckCircle2 />
                7/24 telefonla ulaşılabilirlik
              </li>
              <li>
                <CheckCircle2 />
                Bahçelievler merkezli hizmet
              </li>
              <li>
                <CheckCircle2 />
                Otomobil, motosiklet ve hafif ticari seçenekleri
              </li>
              <li>
                <CheckCircle2 />
                Konum ve araç bilgisine göre yönlendirme
              </li>
              <li>
                <CheckCircle2 />
                Telefon ve WhatsApp üzerinden iletişim
              </li>
            </ul>
          </div>
          <div className="vehicle-panel">
            <h3>Desteklenen araç türleri</h3>
            <div>
              <span>
                <Car />
                Binek otomobil
              </span>
              <span>
                <Car />
                SUV
              </span>
              <span>
                <Truck />
                Hafif ticari
              </span>
              <span>
                <Bike />
                Motosiklet
              </span>
            </div>
            <p>Hizmet kapsamı, aracın ölçüsü ve taşıma koşulları görüşme sırasında netleştirilir.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div>
            <span className="eyebrow">
              <MapPin size={17} />
              Merkez adres
            </span>
            <h2>İnci Oto Çekici ile iletişime geçin</h2>
            <div className="contact-list">
              <a href={`tel:${site.phoneE164}`}>
                <Truck />
                <span>
                  <small>Telefon</small>
                  <strong>{site.phoneDisplay}</strong>
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Açık adres</small>
                  <strong>{site.address}</strong>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <small>Çalışma saatleri</small>
                  <strong>{site.hours}</strong>
                </span>
              </div>
            </div>
            <div className="button-row">
              <WhatsAppButton />
              <DirectionsButton />
            </div>
          </div>
          <div className="map-card">
            <div className="map-pin">
              <MapPin />
            </div>
            <span>Merkez adresimiz</span>
            <h3>Siyavuşpaşa, Bahçelievler</h3>
            <p>Merkez adresimize ulaşmak için yol tarifi bağlantısını kullanabilirsiniz.</p>
            <DirectionsButton />
          </div>
        </div>
      </section>
      <FinalCta />
      <JsonLd data={homeSchema()} />
    </>
  );
}
