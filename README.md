# İnci Oto Çekici

Bahçelievler merkezli İnci Oto Çekici için mobil öncelikli, yerel SEO odaklı ve yayına hazır kurumsal web sitesi.

## Çalıştırma

Node.js `22.13.0` veya üzeri gerekir.

```bash
npm install
npm run dev
```

## Kontroller

```bash
npm run lint
npm run typecheck
npm run build
npm test
npm run test:e2e
```

## İşletme ayarları

Telefon, adres, domain, çalışma saati ve iletişim yardımcıları `src/config/site.ts` dosyasındadır. Yayına almadan önce `.env.example` dosyasındaki doğrulanmamış Google Maps, Google İşletme Profili, Instagram, GA4 ve Search Console alanları gerçek bilgilerle doldurulmalıdır.

## İçerik yapısı

- Ana ve kurumsal sayfalar: `app/`
- Hizmet verileri: `src/data/services.ts`
- Bölge verileri: `src/data/locations.ts`
- Ana yol sayfaları: `src/data/routes.ts`
- Faydalı içerikler: `src/data/articles.ts`
- SEO ve şema yardımcıları: `src/lib/`
- Marka görselleri: `public/images/`

Tam teslim özeti `yapılanlar.md`, dışarıdan bilgi veya doğrulama bekleyen maddeler `eksikler.md` dosyasındadır.
