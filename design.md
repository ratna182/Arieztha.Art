# Design Guideline — Landing Page Arieztha.Art Percetakan Yasin

## 1. Visual Direction

Bisnis melayani konteks religius (Yasin) sekaligus kebutuhan bisnis umum (nota, stempel). Direction: **ceria, classy, terpercaya** — bukan bernuansa duka/berkabung meski salah satu layanan berkaitan dengan acara Yasin. Bukan juga tone "startup teknologi" yang dingin, tapi tetap rapi dan modern (bukan template percetakan generik era 2010-an).

Referensi mood: kombinasi trust ala Stripe (clean, credible) dengan energi warna biru cerah dari palet — playful secukupnya lewat micro-interaction dan ilustrasi, tapi tetap rapi lewat whitespace dan tipografi yang solid.

## 2. Layout Structure (Wireframe Deskriptif)

```
┌─────────────────────────────────────────┐
│ [Logo]                    [Tombol WA] ← sticky header
├─────────────────────────────────────────┤
│                                           │
│         COVER IMAGE (full-width)         │
│         Headline + "Sejak 2010"          │
│         [CTA: Pesan via WhatsApp]        │
│                                           │
├─────────────────────────────────────────┤
│   4 ITEM HIGHLIGHT (grid, menonjol)      │
│   [Buku Yasin]  [Nota]                   │
│   [Stempel]     [Mug Custom]             │
├─────────────────────────────────────────┤
│   KATALOG LENGKAP (tab/accordion 8       │
│   kategori — lihat section 7)            │
├─────────────────────────────────────────┤
│   KENAPA PILIH KAMI                      │
│   ★ 5.0 (215 review) | Sejak 2010 |      │
│   24 Jam | Custom Desain                 │
├─────────────────────────────────────────┤
│   TESTIMONI (3-4 card review asli)       │
├─────────────────────────────────────────┤
│   LOKASI + JAM + CTA PENUTUP             │
│   [Map embed kecil]  [Tombol WA]         │
└─────────────────────────────────────────┘
```

## 3. Header

| Elemen | Spesifikasi |
|---|---|
| Posisi | Sticky top, tidak fixed-transparent (background solid agar tetap terbaca saat scroll) |
| Logo | Kiri atas, ukuran kecil (± 32–40px height), tidak dominan |
| CTA | Kanan atas, tombol solid warna aksen, label singkat "Pesan Sekarang" atau ikon WA |
| Mobile | Logo tetap kiri, CTA tetap kanan — jangan collapse jadi hamburger menu (halaman terlalu pendek untuk butuh nav menu) |

## 4. Hero Section

- Satu cover image full-width — **bukan carousel, bukan galeri**. Pilih 1 foto terbaik (produk Yasin custom atau suasana toko)
- Headline pendek, langsung ke value prop (contoh arah: "Percetakan & Sablon Segala Kebutuhan — Sejak 2010")
- Sub-headline 1 baris memperkuat trust: rating + "sudah dipercaya sejak 2010" atau repeat customer
- CTA utama besar dan kontras tinggi, mengarah ke WA

## 5. Color Palette

Palet fix (gradasi biru, light → dark):

| Hex | Role |
|---|---|
| `#CAF0F8` | Background tint / section alternate, surface lembut |
| `#ADE8F4` | Background tint sekunder, hover state ringan |
| `#48CAE4` | Aksen sekunder, badge, icon fill |
| `#00B4D8` | Aksen interaktif (link, border aktif, small CTA) |
| `#0096C7` | Primary aksen — dipakai untuk elemen brand utama (bukan tombol WA) |
| `#0077B6` | Primary button / heading aksen, kontras cukup untuk teks di atas background terang |
| `#023E8A` | Heading gelap, teks penting, footer background |
| `#03045E` | Deepest — dipakai sangat sedikit: hero overlay gradient bagian bawah, atau dark section |

### Prinsip pemakaian
- **60-30-10**: 60% area pakai `#CAF0F8`/putih sebagai base, 30% pakai rentang `#48CAE4`–`#0096C7` untuk elemen UI (card, icon, badge), 10% pakai `#0077B6`/`#023E8A`/`#03045E` untuk heading besar, tombol utama, dan aksen penekanan
- Karena arah tone ceria-classy (bukan somber), boleh eksplor icon/ilustrasi line-art dengan sedikit playful shape (rounded corner, soft shadow) — hindari elemen visual yang terkesan formal-kaku atau terlalu "berkabung" (hindari warna hitam dominan, hindari border tebal gelap di semua elemen)
- Teks body tetap pakai charcoal/near-black di atas background terang — jangan pakai warna dari palet ini untuk body text panjang, kontrasnya kurang aman untuk keterbacaan
- Heading besar boleh pakai `#023E8A` atau `#03045E` di atas background terang (kontras AA aman)
- `#03045E` dipakai sesedikit mungkin — cocok untuk gradient overlay di hero image atau section penutup (lokasi/CTA akhir), bukan untuk area luas

### Tombol WhatsApp — tetap terpisah dari palet brand
CTA WhatsApp tetap pakai hijau WA standar (`#25D366`), **bukan** salah satu warna biru di atas. Alasannya: tombol WA harus langsung dikenali user sebagai "tombol chat", kalau diseragamkan jadi biru brand, recognition-nya turun dan berisiko menurunkan CTR. Biarkan biru jadi identitas brand di header/hero/section, sementara tombol WA tetap hijau khas WA di setiap CTA order.

## 6. Typography

| Elemen | Rekomendasi |
|---|---|
| Heading | Font dengan karakter sedikit lebih humanis/serif ringan (bukan geometric sans yang terlalu "tech") — mis. Fraunces, Lora, atau sejenis untuk headline saja |
| Body | Sans-serif netral (Inter, Plus Jakarta Sans) untuk keterbacaan |
| Skala | Heading besar tapi tidak berlebihan — halaman ini pendek, jangan buat hero terlalu tinggi hingga layanan utama ke-scroll jauh |

## 7. Komponen: 4 Item Highlight

- Grid highlight, visual lebih besar/menonjol dibanding item katalog biasa (beda treatment supaya user langsung tau ini "top picks")
- Icon atau ilustrasi sederhana per item (bukan foto produk — tetap konsisten dengan keputusan sebelumnya: no galeri, cukup 1 cover di hero)
- Item: **Buku Yasin**, **Nota**, **Stempel**, **Mug Custom**
- Layout: grid 2×2 di mobile, 4 kolom di desktop — muncul tepat setelah hero, sebelum katalog lengkap
- Setiap card clickable → CTA WA dengan pre-filled text berbeda (lihat PRD section 7)

## 8. Komponen: Katalog Lengkap (8 Kategori)

Dengan 30+ item produk, jangan render flat list — pakai salah satu pola berikut:

| Pola | Kapan cocok |
|---|---|
| **Accordion per kategori** (default rekomendasi) | Mobile-first, hemat scroll, user expand kategori yang relevan saja |
| **Tab horizontal + grid item** | Kalau mayoritas traffic desktop, tab lebih cepat di-scan |

Struktur per kategori (contoh accordion):

```
▸ Dokumen Bisnis
▸ Buku Yasin
▸ Stempel & Plat
▸ Identitas & Aksesoris
▸ Merchandise Custom
▸ Promosi & Signage
▸ Cetak Acara & Undangan
▸ Stiker
```

- Klik kategori → expand, tampilkan list item sebagai chip/tag sederhana (bukan card besar per item — terlalu banyak untuk treatment card)
- Setiap kategori punya 1 CTA WA generik di bagian bawah expand ("Tanya soal [kategori] via WhatsApp")
- Tidak perlu icon per item individual — cukup icon per kategori, supaya maintenance visual tetap ringan

## 9. Komponen: Testimoni

- Ambil 3–4 review asli dari Google (paraphrase seperlunya untuk konsistensi panjang teks, jangan ubah makna)
- Tampilkan rating bintang + jumlah review Google di section ini sebagai anchor trust
- Layout: card sederhana, tidak perlu carousel kompleks — cukup grid statis

## 10. Motion & Interaction

- Animasi minim: fade-in + slight translate-y saat section masuk viewport
- Hindari parallax berat, hover effect kompleks, atau animasi loop yang mengganggu di mobile
- Tombol WA boleh punya subtle hover/tap feedback (scale 0.98 saat tap) untuk terasa responsif

## 11. Responsive Notes

| Breakpoint | Perilaku |
|---|---|
| Mobile (< 640px) | Prioritas utama — semua section stack vertikal, accordion katalog jadi pola paling efisien di sini, tombol WA di header tetap kecil tapi tappable (min 44px touch target) |
| Tablet/Desktop | Card 4 item highlight jadi grid 4 kolom, katalog bisa pakai tab horizontal, hero lebih lega secara horizontal |

## 12. Accessibility Checklist

- Kontras teks vs background minimum AA (4.5:1 untuk body text)
- Semua image (termasuk cover hero) punya alt text deskriptif
- Tombol WA punya `aria-label` yang jelas (mis. "Hubungi via WhatsApp untuk pesan Yasin")
- Struktur heading semantik (h1 di hero, h2 per section) — bukan sekadar styling visual

## 13. Asset Checklist Sebelum Development

- [ ] Logo format vector (SVG) atau minimal PNG resolusi tinggi transparan
- [ ] 1 foto cover terbaik, resolusi tinggi, orientasi landscape untuk hero
- [ ] Icon set untuk 4 item highlight (bisa custom line-icon sederhana)
- [ ] Icon set untuk 8 kategori katalog (line-icon, konsisten style dengan icon spesialisasi)
- [ ] Teks testimoni final (sudah dipilih 3–4 dari 215 review)
- [ ] Copy final tiap section (headline, sub-headline, deskripsi tiap spesialisasi, label tiap kategori katalog)
