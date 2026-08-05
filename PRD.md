# PRD — Landing Page Arieztha.Art Percetakan Yasin

## 1. Overview

| Item | Detail |
|---|---|
| Nama bisnis | Arieztha.Art Percetakan Yasin |
| Berdiri sejak | 2010 |
| Lokasi | Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi |
| Jam operasional | 24 jam, setiap hari |
| Kontak utama | WhatsApp: +62 895-2969-7927 |
| Social proof existing | Rating 5.0 dari 215 review Google |
| Positioning | Percetakan & sablon full-service — bukan cuma spesialis Yasin, tapi melayani hampir semua kebutuhan cetak (dokumen bisnis, merchandise, signage, undangan, dll) |
| Tujuan proyek | Landing page single-page untuk konversi order via WhatsApp |

## 2. Problem Statement

Bisnis sudah punya trust kuat secara offline dan di Google Maps (rating 5.0, repeat customer), tapi belum punya digital presence yang bisa:
- Menjelaskan layanan secara terstruktur (Yasin, Nota, Stempel) ke calon customer baru
- Mengarahkan order langsung ke WhatsApp tanpa friction
- Memindahkan trust signal dari Google Reviews ke satu halaman terpusat

## 3. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Konversi klik ke WhatsApp | CTR tombol WA > visitor unik |
| Waktu muat cepat di mobile | LCP < 2.5s (koneksi mobile umum) |
| Kejelasan layanan | User bisa identifikasi 3 layanan utama tanpa scroll berlebihan |

## 4. Target Audience

Campuran dua tipe user:
1. **Order rutin** — pengajian, kebutuhan usaha (nota, stempel)
2. **Order kondisional/mendesak** — kebutuhan Yasin untuk acara tahlilan

Implikasi: copywriting tidak boleh terlalu "duka" (karena melayani juga order rutin), tapi tetap sopan dan tidak terlalu playful/corporate.

## 5. Scope

### In Scope
- Single-page landing page (one-pager)
- **4 Item Highlight** ditampilkan paling atas/menonjol:
  1. Buku Yasin
  2. Nota
  3. Stempel
  4. Mug Custom
  5. Pin Peniti / Magnet
- **Katalog lengkap** ditampilkan sebagai section terpisah, dikelompokkan per kategori (bukan list 30+ item flat):

| Kategori | Item |
|---|---|
| Dokumen Bisnis | Nota, Bon, Kwitansi, Faktur, Surat Jalan, Kop Surat, Kartu Iuran |
| Buku Yasin | Custom Soft Cover, Custom Hard Cover |
| Stempel & Plat | Stempel, Plat Stenlis/Kuningan, Plang Nama/Merk |
| Identitas & Aksesoris | Kartu Nama, ID Card, Lanyard, Name Tag/Nama Dada, Amplop |
| Merchandise Custom | Mug Custom, Pin Custom, Gantungan Kunci, Medali |
| Promosi & Signage | X Banner, Roll Up Banner, Spanduk, Bendera, Umbul-umbul, Neon Box, Plakat |
| Cetak Acara & Undangan | Undangan, Brosur, Tiket/Voucher, Digital Print |
| Stiker | Stiker Cutting |

- Hero section dengan 1 cover image (tanpa galeri)
- Logo kecil di kiri atas header
- CTA WhatsApp dengan pre-filled message per kategori/spesialisasi
- Section testimoni (dari Google Reviews existing, bukan galeri visual)
- Section lokasi + jam operasional

### Out of Scope
- Galeri/portfolio visual desain
- Sistem order online (form, cart, payment gateway)
- Multi-page (about, blog, dsb)
- CMS/admin panel — konten di-hardcode di awal
- Harga per item ditampilkan publik (kecuali ada keputusan lain — lihat open question)

## 6. Page Structure (Section Order)

| # | Section | Fungsi |
|---|---|---|
| 1 | Header (sticky) | Logo kiri atas, tombol WA kanan — selalu visible |
| 2 | Hero | Cover image + headline (+ "sejak 2010") + CTA utama |
| 3 | 4 Item Highlight | Buku Yasin, Nota, Stempel, Mug Custom — highlight card, prioritas tertinggi |
| 4 | Katalog Lengkap | 8 kategori produk (accordion/tab/grid — lihat design.md), untuk user yang cari item spesifik di luar 5 spesialisasi |
| 5 | Kenapa Pilih Kami | Rating, 24 jam, berpengalaman sejak 2010, custom desain |
| 6 | Testimoni | 3–4 review asli dari Google |
| 7 | CTA Penutup + Lokasi | Map embed, jam operasional, WA button ulang |

## 7. Functional Requirements

- Setiap card **4 Item Highlight** dan setiap **kategori katalog** punya link WA dengan pre-filled text berbeda, contoh:
  - Buku Yasin → `https://wa.me/62895xxxx?text=Halo,%20saya%20mau%20tanya%20soal%20cetak%20Yasin`
  - Nota → teks berbeda menyesuaikan
  - Stempel → teks berbeda menyesuaikan
  - Mug Custom → teks berbeda menyesuaikan
  - Kategori katalog (Signage, Merchandise, dst) → teks generik per kategori
- Map embed menunjuk ke place_id Google Maps bisnis ini, bukan link generik
- Semua CTA WA konsisten menggunakan nomor yang sama, hanya teks pre-fill yang beda
- Section Katalog Lengkap harus collapsible/tab (bukan render semua 30+ item flat) — lihat design.md untuk pola interaksi

## 8. Non-Functional Requirements

| Aspek | Requirement |
|---|---|
| Performance | Hero image di-compress WebP/AVIF, lazy-load section di bawah fold |
| Accessibility | Kontras teks AA minimum, alt text di semua image, tombol WA punya aria-label |
| Responsiveness | Mobile-first — mayoritas traffic diasumsikan dari share link WA/Google Maps |
| SEO dasar | Meta title/description sesuai nama bisnis + layanan + lokasi (Bekasi) |
| Browser support | Modern browser saja, tidak perlu dukung IE/browser lama |

## 9. Technical Stack Recommendation

Untuk one-pager tanpa kebutuhan CMS/backend:

| Kebutuhan | Rekomendasi | Alasan |
|---|---|---|
| Kompleksitas rendah, statis | Next.js (App Router) + Tailwind CSS | Konsisten dengan stack proyek lain Ahmad, gampang deploy ke Vercel/Railway |
| Alternatif lebih ringan | Astro | Kalau memang tidak butuh interaktivitas React sama sekali, output lebih ringan |
| Animasi | Framer Motion, dipakai minim (fade/scale saja) | Sesuai audience mobile, hindari animasi berat |

## 10. Assumptions & Open Questions

- Asumsi: tidak ada kebutuhan multi-bahasa (konten 100% Bahasa Indonesia)
- Open question: apakah ada daftar harga yang boleh ditampilkan publik, atau tetap "hubungi via WA" untuk semua harga?
- Open question: apakah logo sudah tersedia dalam format vector/high-res, atau perlu dikonversi dari foto plang toko?
