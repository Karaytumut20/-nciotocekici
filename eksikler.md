# İnci Oto Çekici — Eksikler ve Yayın Öncesi Gerekenler

Son güncelleme: 2 Ağustos 2026

Kod, istenen sayfalar, SEO altyapısı ve otomatik testler tamamlandı. Aşağıdaki maddeler yazılımdaki yarım işler değil; kullanıcı tarafından verilmemiş, doğrulanması gereken işletme bilgileri veya canlı yayın sonrasında yapılabilen dış servis işlemleridir.

## 1. Doğrulanmış işletme ve harita bilgileri

- Google Maps işletme/pin bağlantısı verilmedi.
- Google Maps embed bağlantısı verilmedi.
- Google İşletme Profili bağlantısı verilmedi.
- Enlem/boylam koordinatları doğrulanmadı; bu nedenle JSON-LD içinde `geo` kullanılmadı.
- Posta kodu doğrulanmadı; bu nedenle şema adresine eklenmedi.
- Google Maps pini, merkez adresle birebir karşılaştırılmalı.

Bu bilgiler geldiğinde doldurulacak değişkenler:

```env
NEXT_PUBLIC_GOOGLE_MAPS_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
NEXT_PUBLIC_GOOGLE_BUSINESS_URL=
```

Doğrulanmış Maps URL’si gelene kadar site, açık adresi Google Maps aramasında açan güvenli yol tarifi bağlantısı ve bozuk iframe yerine konum kartı kullanır.

## 2. Sosyal medya

- Doğrulanmış Instagram profili verilmedi.
- Başka sosyal profiller verilmedi.
- Bu nedenle JSON-LD `sameAs` alanı oluşturulmadı.

Varsa doldurulacak alan:

```env
NEXT_PUBLIC_INSTAGRAM_URL=
```

## 3. Search Console, GA4 ve analiz izni

- GA4 Measurement ID verilmedi.
- Google Search Console doğrulama kodu verilmedi.
- Analytics varsayılan olarak kapalıdır; kullanıcı onayı olmadan analiz scripti çalışmaz.
- GA4 etkinleştirilecekse gerçek consent mode/çerez tercih arayüzü, güncel çerez politikasıyla birlikte devreye alınmalıdır.

Doldurulacak alanlar:

```env
NEXT_PUBLIC_GA_ID=
GOOGLE_SITE_VERIFICATION=
```

## 4. Gerçek fotoğraflar ve müşteri yorumları

- Ana marka logosu kullanıldı; gerçek çekici, ekip ve hizmet anı fotoğrafları verilmedi.
- Gerçek fotoğraflar geldiğinde hero veya hizmet kartları için lisans ve alt metin kontrolüyle eklenmeli.
- Doğrulanmış müşteri yorumları verilmedi; bu nedenle yorum, yıldız veya AggregateRating eklenmedi.
- Yorumlar geldiğinde açık kaynak/izin bilgisiyle görünür HTML içeriği olarak eklenmeli; şema yalnızca gerçek ve görünür içerikle eşleşmelidir.

## 5. Hukuki metin doğrulaması

- Gizlilik/KVKK, çerez ve kullanım koşulları teknik gerçeklerle uyumlu başlangıç metni olarak hazırlandı.
- İşletmenin gerçek saklama, silme, iletişim ve operasyon süreçleri hukuk danışmanı tarafından kontrol edilmelidir.
- Backend formu, pazarlama onayı veya yeni takip teknolojisi eklenirse metinler ve consent akışı güncellenmelidir.

## 6. Canlı domain ve hosting işlemleri

Yayın ortamında tamamlanması gerekenler:

1. `inciotocekici.com` domainini seçilen hostinge bağlama
2. HTTPS sertifikasını doğrulama
3. HTTP → HTTPS yönlendirmesini canlıda test etme
4. `www` → non-www yönlendirmesini canlıda test etme
5. DNS yayılımını kontrol etme
6. Canlı telefon ve WhatsApp CTA’larını gerçek cihazda test etme
7. Google Maps yol tarifi ve pin doğrulaması

## 7. Google ve Bing yayın sonrası SEO kontrolü

1. Google Search Console domain mülkü oluşturun.
2. `GOOGLE_SITE_VERIFICATION` değerini ekleyin.
3. `https://inciotocekici.com/sitemap.xml` adresini gönderin.
4. Ana sayfa için URL Inspection çalıştırın.
5. Google İşletme Profili içindeki site bağlantısını güncelleyin.
6. İşletme adı, adres ve telefonun siteyle birebir aynı olduğunu doğrulayın.
7. Google Maps pinini ve doğrulanmış koordinatları kontrol edin.
8. Bing Webmaster Tools kaydı oluşturun ve sitemap gönderin.
9. [Rich Results Test](https://search.google.com/test/rich-results) ile ana sayfa, bir hizmet ve bir bölge URL’sini test edin.
10. [PageSpeed Insights](https://pagespeed.web.dev/) mobil testini çalıştırın.
11. Search Console sorgularını ve Core Web Vitals verisini aylık izleyin.
12. Yeterli kullanıcı değeri üretmeyen bölge içeriklerini iyileştirin veya index dışı bırakın.

## 8. Lighthouse

Canlı domain olmadığı için dış ağ koşullarını temsil eden nihai Lighthouse/PageSpeed skoru bu rapora yazılmadı. Production build başarılıdır ve performans için ağır slider/video/üçüncü taraf script kullanılmamıştır.

Canlı yayın sonrası Chrome DevTools → Lighthouse üzerinden mobil rapor alınmalı. Hedefler:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100’e yakın

Bu değerler laboratuvar hedefidir; hosting, cihaz, ağ ve gerçek kullanıcı koşullarına göre değişir.

## 9. Environment kontrol listesi

Telefon bilgileri kullanıcı tarafından verildiği için hazırdır:

```env
NEXT_PUBLIC_SITE_URL=https://inciotocekici.com
NEXT_PUBLIC_PHONE_DISPLAY=0530 822 5006
NEXT_PUBLIC_PHONE_E164=+905308225006
NEXT_PUBLIC_WHATSAPP_E164=905308225006
```

Yayın öncesi doğrulanıp doldurulacak alanlar:

```env
NEXT_PUBLIC_GOOGLE_MAPS_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
NEXT_PUBLIC_GOOGLE_BUSINESS_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_GA_ID=
GOOGLE_SITE_VERIFICATION=
```

Gerçek `.env` dosyası repoya eklenmemelidir.

## 10. Son yayın kontrolü

- Domain bağlandıktan sonra canonical URL’leri canlı HTML üzerinde kontrol edin.
- `sitemap.xml`, `robots.txt`, manifest, favicon ve OG görselinin canlıda 200 döndüğünü doğrulayın.
- 404 sayfası ve redirect zincirlerini kontrol edin.
- Gerçek mobil cihazda 360–430 px aralığında telefon/WhatsApp alt barını test edin.
- WhatsApp hazır mesajındaki Türkçe karakterleri ve konum paylaşım akışını kontrol edin.
- İşletme bilgilerindeki gelecekteki her değişikliği önce `src/config/site.ts` ve environment değerlerinde merkezi olarak güncelleyin.

