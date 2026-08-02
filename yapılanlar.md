# İnci Oto Çekici — Yapılanlar

Son güncelleme: 2 Ağustos 2026

Özel test yayını: https://inci-oto-cekici.umutkaraytu.chatgpt.site

Bu dosya, verilen ana proje promptuna göre tamamlanan işleri ve doğrulama sonuçlarını özetler. Harici bilgi veya işletme onayı bekleyen maddeler `eksikler.md` dosyasındadır.

## 1. Proje ve teknoloji

- Güncel Next.js ve React ile App Router tabanlı proje kuruldu.
- TypeScript `strict` modunda yapılandırıldı.
- Tailwind CSS altyapısı ve proje özelinde kapsamlı responsive CSS tasarım sistemi kuruldu.
- Sunucu bileşenleri varsayılan tutuldu; yalnızca mobil menü, CTA eventleri ve WhatsApp mesaj formu istemci bileşeni olarak hazırlandı.
- `next/image`, `next/font`, Lucide React, ESLint, Prettier ve Playwright kullanıldı.
- Ağır UI kütüphanesi, slider, jQuery, video autoplay veya ağır animasyon paketi eklenmedi.
- Site, Cloudflare Worker uyumlu ESM çıktı üreten vinext/Sites yapısıyla derleniyor.

## 2. Merkezi işletme bilgileri

`src/config/site.ts` tek kaynak olacak şekilde hazırlandı:

- İşletme adı: İnci Oto Çekici
- Telefon: 0530 822 5006
- Telefon E.164: +905308225006
- WhatsApp: 905308225006
- Domain ve canonical: https://inciotocekici.com
- Adres: Siyavuşpaşa Mahallesi, Kana Sokak No:14/3, Bahçelievler/İstanbul
- Çalışma saati: Haftanın 7 günü, 24 saat
- Dil: Türkçe (`tr`)
- Locale: `tr_TR`
- Hazır WhatsApp mesajı merkezi yardımcı fonksiyonla oluşturuluyor.
- Harita, Google İşletme Profili, Instagram, GA4 ve Search Console alanları uydurulmadı; merkezi yapılandırmada açık TODO olarak bırakıldı.

## 3. Marka ve görseller

- Kullanıcının verdiği logo orijinal hâliyle `public/images/brand/` altına kopyalandı.
- Logo WebP ve AVIF türevleri üretildi.
- Logo navbar, hero, hakkımızda ve footer alanlarında gerçek HTML metinlerle birlikte kullanıldı.
- Tüm logo alt metinleri `İnci Oto Çekici Bahçelievler 7/24 Yol Yardım` olarak ayarlandı.
- Mobil için kompakt logo + metin düzeni oluşturuldu.
- Lacivert zemin, sarı çerçeve ve “İÇ” harflerinden oluşan sade SVG favicon hazırlandı.
- 180×180 Apple touch icon üretildi.
- 1200×630 Open Graph görseli marka renkleri, logo ve tam Türkçe metinlerle üretildi.
- OG görselinde telefon, fiyat, puan veya doğrulanmamış iddia kullanılmadı.

## 4. Tasarım ve responsive yapı

- Prompttaki lacivert, sarı, beyaz, gri, yeşil ve hata renkleri değişken olarak kullanıldı.
- Başlıklarda Barlow Condensed, gövde metninde Manrope `next/font` üzerinden yüklendi.
- Maksimum içerik genişliği 1280 px olacak şekilde ortak `shell` düzeni kuruldu.
- CSS tabanlı yol çizgisi, grid ve kontrollü ışık dokuları hazırlandı.
- Kartlarda kontrollü yükselme, CTA hover ve kısa hero giriş animasyonu kullanıldı.
- `prefers-reduced-motion` desteği eklendi.
- 360, 390, 430, 768, 1024, 1280, 1440 ve 1920 px genişliklerde yatay taşma testi yapıldı.
- Mobil alt CTA için `env(safe-area-inset-bottom)` desteği ve içerik alt boşluğu eklendi.
- Dokunma hedefleri minimum 44 px olacak şekilde tasarlandı.

## 5. Header, navigasyon ve mobil deneyim

- Desktop üst bilgi şeridinde merkez adres, 7/24 durumu ve telefon yer alıyor.
- Sticky, blur efektli, koyu lacivert navbar hazırlandı.
- Ana Sayfa, Hizmetler, Hizmet Bölgeleri, Yol Yardım Noktaları, Hakkımızda, Faydalı Bilgiler ve İletişim menüleri eklendi.
- Aktif menü bağlantısı URL’ye göre işaretleniyor.
- Desktop navbar telefon CTA’sı eklendi.
- Mobilde kompakt logo, telefon ikonu ve hamburger menü eklendi.
- Tam yükseklikli sağ drawer; ESC, dışarı tıklama, kapatma butonu, body scroll kilidi, focus trap ve focus geri dönüşüyle hazırlandı.
- Drawer içinde hizmet ve bölge grupları açılır listeler hâlinde gösteriliyor.
- Mobilde yeşil WhatsApp ve sarı Hemen Ara sabit alt barı eklendi.

## 6. Ana sayfa

Prompttaki sıra ve içerik yapısına göre şunlar tamamlandı:

1. Bahçelievler Oto Çekici ve 7/24 Yol Yardım hero alanı
2. Telefon ve WhatsApp CTA’ları
3. Dört doğrulanabilir güven maddesi
4. Aracım Yolda Kaldı / Aracım Çalışmıyor / Aracımı Taşıtmak İstiyorum hızlı aksiyon kartları
5. Sarı acil durum CTA şeridi
6. On hizmet kartı
7. Üç adımlı “Nasıl çalışır?” bölümü
8. Öncelikli 15 hizmet bölgesi
9. E-5/D100, TEM, Basın Ekspres ve Atatürk Havalimanı çevresi kartları
10. Neden İnci Oto Çekici bölümü
11. Binek, SUV, hafif ticari ve motosiklet araç türleri
12. Sekiz görünür sık sorulan soru
13. Telefon, WhatsApp, adres, saat ve yol tarifi içeren iletişim alanı
14. Doğrulanmış embed bulunmadığında bozuk iframe yerine harita placeholderı
15. Final CTA
16. Dört kolonlu footer ve yasal bağlantılar

## 7. Oluşturulan sayfalar

Toplam 51 canonical ve sitemapte yer alan içerik sayfası oluşturuldu.

### Kurumsal ve kategori sayfaları — 10

- `/`
- `/hizmetler`
- `/hizmet-bolgeleri`
- `/yol-yardim-noktalari`
- `/hakkimizda`
- `/iletisim`
- `/faydali-bilgiler`
- `/gizlilik-ve-kvkk`
- `/cerez-politikasi`
- `/kullanim-kosullari`

### Hizmet sayfaları — 10

- `/hizmetler/oto-cekici`
- `/hizmetler/oto-kurtarma`
- `/hizmetler/yol-yardim`
- `/hizmetler/aku-takviye`
- `/hizmetler/aku-degisimi`
- `/hizmetler/lastik-yol-yardim`
- `/hizmetler/vincli-oto-cekici`
- `/hizmetler/hafif-ticari-arac-cekici`
- `/hizmetler/motosiklet-cekici`
- `/hizmetler/sehirler-arasi-oto-cekici`

Her hizmet sayfasında özgün H1, hizmet açıklaması, kullanım senaryoları, süreç, araç türleri, ilgili bölgeler, görünür SSS, CTA, breadcrumb, ilgili hizmetler ve faydalı içerik bağlantıları bulunuyor.

### Bölge sayfaları — 21

- Bahçelievler, Şirinevler, Yenibosna, Soğanlı, Kocasinan, Siyavuşpaşa ve Çobançeşme
- Bakırköy, Ataköy, Yeşilköy, Yeşilyurt ve Florya
- Bağcılar, Güneşli, Mahmutbey, Kirazlı, Bağlar ve İnönü
- Zeytinburnu, Merter ve Cevizlibağ

Her bölgeye özgü giriş, erişim bilgisi, gerçekçi yol yardım senaryosu, konum paylaşma bilgisi, yakın bölge bağlantıları, merkez Bahçelievler adresi, SSS ve CTA eklendi. Başka ilçelerde sahte şube oluşturulmadı. Ataköy Marina ayrı ve zayıf bir sayfa yerine Ataköy sayfasında özel bölüm olarak işlendi.

### Yol ve kritik nokta sayfaları — 4

- `/yol-yardim/e5-d100-oto-cekici`
- `/yol-yardim/tem-otoyolu-cekici`
- `/yol-yardim/basin-ekspres-oto-cekici`
- `/yol-yardim/ataturk-havalimani-yol-yardim`

E-5 ve D100 aynı sayfada birleştirildi. Her sayfada seyir yönü, yakın çıkış, güvenli bekleme ve 112 yönlendirmesi bulunuyor.

### Faydalı içerikler — 6

- Oto çekici çağırırken gerekli bilgiler
- Araç yolda kalınca yapılması gerekenler
- Akünün bittiğini anlama
- Çekici fiyatını belirleyen etkenler
- Otomatik vites araç taşıma
- Motosiklet çekici hizmetinde dikkat edilecekler

## 8. İletişim ve KVKK deneyimi

- Telefon ve WhatsApp CTA’ları promptta istenen bütün temel dönüşüm alanlarına yerleştirildi.
- Tüm telefon bağlantıları `tel:+905308225006` biçiminde hazırlandı.
- Tüm WhatsApp bağlantıları yeni sekmede `noopener noreferrer` ile açılıyor.
- Ad, araç türü, bölge, hizmet ihtiyacı ve açıklamadan WhatsApp mesajı hazırlayan kısa form eklendi.
- Form verileri sunucuda veya veritabanında saklanmıyor.
- Zorunlu alanlarda erişilebilir hata mesajı ve `aria-describedby` bağlantısı eklendi.
- Gizlilik/KVKK, çerez ve kullanım koşulları sayfaları oluşturuldu.
- Analytics kapalı olduğu için gereksiz çerez bannerı gösterilmedi.

## 9. SEO altyapısı

- Next.js Metadata API ve `metadataBase` kullanıldı.
- Her sayfa ailesi için özgün title, description ve self-referencing canonical hazırlandı.
- Open Graph ve Twitter/X kart verileri eklendi.
- 1200×630 sosyal görsel ve erişilebilir OG alt açıklaması eklendi.
- `/sitemap.xml`, `/robots.txt` ve `/manifest.webmanifest` gerçek route olarak oluşturuldu.
- Sitemap yalnızca canonical içerik sayfalarını içeriyor ve gerçek güncelleme tarihi kullanıyor.
- Türkçe `lang="tr"`, semantik landmarklar ve gerçek sunucu HTML’i sağlandı.
- Dinamik hizmet ve bölge sayfalarında `generateStaticParams` ve `generateMetadata` kullanıldı.
- Markalı, doğru 404 durum kodu döndüren sayfa oluşturuldu.
- Breadcrumb navigasyonu ve BreadcrumbList JSON-LD eklendi.
- Anahtar kelimeler arama niyetine göre kümelendi; doorway veya görünmez anahtar kelime blokları oluşturulmadı.
- Açıklayıcı dahili bağlantılar; ana sayfa → hizmet/bölge, hizmet → bölge/rehber, bölge → hizmet/yakın bölge ve yazı → hizmet akışlarıyla kuruldu.

## 10. Yapılandırılmış veri

- `Organization`
- `AutomotiveBusiness`
- `WebSite`
- `WebPage`
- `Service`
- `BreadcrumbList`
- `FAQPage`
- `Article`

Şemalarda gerçek telefon, tek merkez adresi, `00:00–23:59` çalışma saatleri, hizmet bölgeleri ve hizmet kataloğu kullanıldı. Koordinat, posta kodu, fiyat, puan, yorum ve sosyal profil uydurulmadı. JSON-LD güvenli serialize edilerek `<` karakteri escape ediliyor.

## 11. Erişilebilirlik

- Skip-to-content bağlantısı
- Semantik header, nav, main, section, article, aside ve footer yapısı
- Görünür focus stilleri
- Klavye kullanılabilir mobil drawer
- ESC, focus trap ve focus geri dönüşü
- Erişilebilir label ve hata mesajları
- 44×44 px minimum etkileşim alanları
- Yeterli renk kontrastı
- `prefers-reduced-motion`
- Anlamlı telefon ve logo etiketleri
- Dekoratif CSS görselleri için semantik içerikten ayrım

## 12. Güvenlik ve yönlendirmeler

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Kamera, mikrofon ve konum izinlerini kapatan `Permissions-Policy`
- `frame-ancestors 'none'` içeren Content Security Policy
- CSP içinde `unsafe-eval` kullanılmadı.
- `www.inciotocekici.com` → `inciotocekici.com` kalıcı yönlendirmesi
- Canlı domain için HTTP → HTTPS kalıcı yönlendirmesi
- Gizli anahtar kullanılmadı; public değişkenler yalnızca istemciye açık olabilecek veriler için ayrıldı.

## 13. Analytics event altyapısı

Telefon numarası event parametresi olarak gönderilmeden şu event isimleri hazırlandı:

- `click_call`
- `click_whatsapp`
- `click_directions`
- `open_mobile_menu`
- `submit_whatsapp_form`

GA4 kimliği verilmediği için üçüncü taraf analiz scripti veya onaysız çerez başlatılmadı.

## 14. Test sonuçları

- `npm run typecheck`: başarılı
- `npm run lint`: başarılı
- `npm run build`: başarılı
- Sunucu HTML testi: 2/2 başarılı
- Playwright: 18/18 başarılı
- Mobil menü açma, ESC, focus trap ve focus geri dönüşü: başarılı
- Mobil menünün yumuşak açılış ve kapanış animasyonu: başarılı
- Route değişiminde loading, yeni sayfayı en üste alma ve geçişi tamamlama: başarılı
- Telefon CTA ve WhatsApp URL kontrolü: başarılı
- Canonical, title, description ve tek H1 kontrolü: başarılı
- JSON-LD parse kontrolü: başarılı
- Görsellerde alt metin kontrolü: başarılı
- 360, 390, 430, 768, 1024, 1280, 1440 ve 1920 px yatay taşma kontrolü: başarılı
- Sitemapteki 51 URL’nin tamamının 200 dönmesi: başarılı
- `robots.txt` ve web manifest 200 kontrolü: başarılı
- Markalı 404 ve doğru 404 durum kodu: başarılı
- Kod Prettier ile biçimlendirildi; biçimlendirme sonrası typecheck, lint ve production build tekrar başarılı oldu.

## 15. Lighthouse ve yayın sonrası manuel kontroller

Canlı domain bağlandıktan sonra:

1. [PageSpeed Insights](https://pagespeed.web.dev/) üzerinde `https://inciotocekici.com` mobil testi çalıştırılmalı.
2. [Rich Results Test](https://search.google.com/test/rich-results) ile ana sayfa, bir hizmet ve bir bölge sayfası kontrol edilmeli.
3. Chrome Lighthouse ile mobil Performance, Accessibility, Best Practices ve SEO raporu alınmalı.
4. Gerçek kullanıcı Core Web Vitals verisi Search Console’da izlenmeli.

Lighthouse hedefleri laboratuvar hedefidir; canlı hosting, ağ, cihaz ve gerçek kullanıcı verisi olmadan skor garantisi verilmedi.

## 16. Bilerek eklenmeyen doğrulanmamış iddialar

- Kesin varış süresi
- Sabit veya “en ucuz” fiyat
- Deneyim yılı
- Ekip veya filo sayısı
- Müşteri sayısı
- Sertifika iddiası
- “En iyi”, “garantili” veya benzeri üstünlük iddiası
- Sahte yorum, yıldız ve AggregateRating
- Ağır vasıta hizmeti
- Sahte şube, adres, posta kodu veya koordinat

Yayın öncesinde dışarıdan sağlanması gereken bilgiler ve doğrulamalar için `eksikler.md` dosyasına bakın.

## 17. Yayın durumu

- Doğrulanmış production build, owner-only özel erişimle Sites üzerine yayınlandı.
- Geçici yayın adresi: https://inci-oto-cekici.umutkaraytu.chatgpt.site
- Canlı işletme domaini `inciotocekici.com` henüz DNS üzerinden bağlanmadı.
- Domain bağlantısı, Google Maps/İşletme Profili ve analiz doğrulamaları `eksikler.md` kontrol listesinde tutuluyor.

## 18. Açık tonlu UI/UX yenilemesi

Bu ara tasarım, aşağıdaki endüstriyel-editoryal tasarım sistemiyle yeniden ele alınarak güncellendi.

- Arayüzdeki yoğun lacivert ve sarı kullanımı kaldırıldı; verilen logo marka varlığı olarak özgün hâliyle korundu.
- Sıcak kırık beyaz, açık taş grisi, kömür rengi, ölçülü kiremit ve WhatsApp için doğal yeşilden oluşan yeni renk sistemi kuruldu.
- Koyu, parlak ve yapay görünen yüzeyler; glow efektleri, dekoratif grid, yol çizgisi ve dönen logo halkası kaldırıldı.
- Hero alanı daha sakin bir editoryal düzene geçirildi; logo açık renkli, ince çerçeveli bir yüzeyde sunuldu.
- Başlıklarda yoğun büyük harf ve sıkıştırılmış yazı hissi azaltıldı; okunabilir Manrope tabanlı tipografik hiyerarşi getirildi.
- Kart gölgeleri, köşe yarıçapları ve hover hareketleri sadeleştirildi.
- Navigasyon sıcak beyaz, üst bilgi ve footer nötr kömür rengine taşındı.
- Hizmet, bölge, yol yardım, blog, iletişim, yasal sayfalar ve 404 aynı yeni tasarım sistemiyle uyumlu hâle getirildi.
- Telefon ana aksanı kiremit, WhatsApp aksanı doğal yeşil olarak ayrıştırıldı; butonlarda glow kullanılmadı.
- İçerik, route yapısı, canonical URL’ler, yapılandırılmış veri ve SEO metinleri değiştirilmedi.
- Yenileme sonrası typecheck, lint, Prettier, production build ve 14/14 Playwright testi yeniden başarılı oldu.

## 19. Endüstriyel-editoryal premium tasarım ve SEO genişletmesi

- Sitenin tamamı çekici sektörüne uygun porselen beyazı, kömür siyahı, çelik grisi ve sinyal kırmızısı paletiyle yeniden tasarlandı.
- Lacivert ve sarı arayüz rengi kullanılmadı; bu renkler yalnızca kullanıcı tarafından verilen özgün logo görselinin içinde kaldı.
- Ana sayfada asimetrik endüstriyel hero, büyük tipografi, operasyon etiketi, 7/24 hizmet özeti ve servis şeridi oluşturuldu.
- Hizmetler bento düzene; süreç, bölgeler, ana yollar, iletişim ve FAQ bölümleri daha güçlü editoryal ritme geçirildi.
- İç sayfa hero alanları, içerik kartları, link dizinleri, formlar, 404 ve footer aynı premium tasarım sistemine bağlandı.
- Tüm gölgeler, köşe yarıçapları, hover hareketleri ve bölüm sınırları daha ölçülü ve tutarlı hâle getirildi.
- 360 px’e kadar mobil düzen, safe-area alt CTA, dokunma alanları ve yatay taşma yeniden kontrol edildi.
- Mobil drawer sürekli DOM’da tutularak açılış ve kapanışta aynı yumuşak hareket eğrisi kullanıldı; arka plan bulanıklığı da kademeli çalışıyor.
- Sayfa bağlantısına basıldığı anda görünen sade loading ekranı eklendi.
- Yeni route hazır olduğunda sayfa önce kesin olarak en üste alınır; ardından loading ekranı yumuşak biçimde kapanır.
- Kullanıcının hareket azaltma tercihi loading ve drawer animasyonlarında desteklenir.
- Canonical yanında `tr-TR` ve `x-default` dil alternatifleri eklendi.
- Googlebot için geniş görsel önizleme, sınırsız metin snippet’i ve video önizleme direktifleri eklendi.
- Global anahtar kelime kümesi, otomotiv kategorisi, İstanbul bölge meta bilgisi ve Apple web uygulaması bilgileri eklendi.
- Organization, AutomotiveBusiness, WebSite, WebPage, Service ve Article yapılandırılmış verileri; iletişim noktası, hizmet kanalı, yayıncı, ana görsel ve bölge varlıklarıyla genişletildi.
- Doğrulanmış sosyal profil olmadığında `sameAs` üretilmemesi korundu; sahte fiyat, puan, koordinat, şube veya yorum eklenmedi.
- Yeni tasarımla uyumlu, tam telefon ve ana hizmet metni içeren 1200×630 Open Graph görseli hazırlandı ve metadata’ya bağlandı.
- SEO testlerine robots/googlebot, hreflang ve yeni Open Graph görsel doğrulaması eklendi.
- Typecheck, lint, Prettier, production build ve 18/18 mobil/masaüstü Playwright testi başarılı oldu.
