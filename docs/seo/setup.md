# Setup SEO, Analytics, dan Domain

## 1. Environment variables

| Variable | Wajib | Nilai | Catatan |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Ya | `https://arieztha-art.vercel.app` | Ganti ke domain final saat migrasi. Dipakai untuk canonical, sitemap, robots, schema. |
| `NEXT_PUBLIC_GA_ID` | Opsional | `G-XXXXXXXXXX` | Jika kosong, script GA tidak dimuat. |
| `VERCEL_ENV` | Otomatis | `production` / `preview` / `development` | Dipakai untuk `X-Robots-Tag: noindex` dan `robots.ts` di preview. |

Set di Vercel: Project Settings → Environment Variables. Jangan commit ke repo.

## 2. Google Search Console

1. Buka https://search.google.com/search-console.
2. Tambahkan **Domain property** untuk `arieztha-art.vercel.app` (atau domain final).
3. Verifikasi via DNS TXT record di registrar domain. Untuk `vercel.app`, gunakan
   **URL prefix property** dan verifikasi dengan file HTML di `public/`
   (sudah ada `public/googled24fad2c2d41453f.html`).
4. Setelah terverifikasi, buka **Sitemaps** → submit `https://<domain>/sitemap.xml`.
5. Buka **URL Inspection** untuk beranda dan 3 halaman layanan → **Request indexing**.
6. Cek **Pages** setelah 3–7 hari: pastikan tidak ada halaman ter-exclude tanpa sengaja.

## 3. Google Analytics 4

1. Buat properti GA4 dan data stream untuk domain final.
2. Salin Measurement ID (`G-...`) ke `NEXT_PUBLIC_GA_ID`.
3. Event yang otomatis dikirim oleh `src/components/Analytics.tsx`:
   - `whatsapp_click` — setiap tautan `wa.me`
   - `phone_click` — setiap tautan `tel:`
   - `maps_click` — setiap tautan Google Maps
4. Parameter yang ikut terkirim: `link_text`, `link_url`, `page_path`.
5. Buat custom report / exploration dengan dimensi `page_path` dan event name
   di atas untuk melihat halaman mana yang menghasilkan kontak.
6. Consent: saat ini belum ada banner consent. Jika traffic dari EEA menjadi
   relevan, tambahkan consent banner dan aktifkan Google Consent Mode sebelum
   memuat `gtag`.

## 4. Preview deployment

`next.config.ts` mengirim `X-Robots-Tag: noindex, nofollow` untuk semua deployment
selain `production`. `src/app/robots.ts` juga men-disallow semua crawler di preview.
Verifikasi:

```bash
curl -I https://<preview-url>.vercel.app | findstr /i "x-robots-tag"
```

## 5. Migrasi ke domain final

1. Tambahkan domain di Vercel → ikuti instruksi DNS.
2. Set `NEXT_PUBLIC_SITE_URL=https://domainfinal` di production.
3. Deploy ulang. Canonical, sitemap, robots, dan schema akan mengikuti.
4. Tambahkan redirect 301 dari `arieztha-art.vercel.app` ke domain final.
   Di Vercel, gunakan `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "arieztha-art.vercel.app" }],
      "destination": "https://DOMAIN-FINAL/:path*",
      "permanent": true
    }
  ]
}
```

5. Di Search Console, gunakan **Change of Address** dari properti lama ke properti baru.
6. Update URL di Google Business Profile, Instagram, dan direktori lain.
7. Pertahankan redirect minimal 12 bulan.

## 6. Validasi

- Rich Results Test: tempel URL halaman layanan, cek `LocalBusiness`, `Service`,
  `BreadcrumbList`, dan `FAQPage`.
- Schema Markup Validator: https://validator.schema.org
- PageSpeed Insights (mobile) untuk beranda dan `/cetak-yasin`.
- Cek canonical di view-source setiap halaman.
- Cek `sitemap.xml` hanya berisi URL yang bisa di-index.

## 7. Catatan implementasi

- `AggregateRating` sengaja **tidak** dipasang di schema. Ulasan Google nyata
  tetap ditampilkan sebagai konten, tetapi rating terstruktur untuk
  LocalBusiness berisiko melanggar kebijakan review Google (self-serving).
- `PrintShop` bukan tipe resmi schema.org. Tipe yang dipakai: `["LocalBusiness","Store"]`.
- Halaman `/blog` belum dibuat karena belum ada konten asli. Tambahkan hanya jika
  ada penulis dan artikel yang benar-benar orisinal.
