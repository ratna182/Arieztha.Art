import type { Metadata } from "next";
import { BUSINESS, GEO, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arieztha.Art Percetakan Yasin Bekasi | Cetak Cepat & Murah",
  description:
    "Percetakan & sablon di Bekasi sejak 2010 — cetak buku yasin, nota, stempel, mug custom, undangan, spanduk. Rating 5.0, buka 24 jam. Pesan via WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: BUSINESS.fullName,
    title: "Arieztha.Art Percetakan Yasin Bekasi | Cetak Cepat & Murah",
    description:
      "Percetakan & sablon di Bekasi sejak 2010 — cetak buku yasin, nota, stempel, mug custom, undangan, spanduk. Rating 5.0, buka 24 jam.",
    images: [
      {
        url: "/hasil-cetak-percetakan-bekasi.webp",
        width: 912,
        height: 1083,
        alt: "Percetakan Buku Yasin dan sablon di Bekasi — Arieztha.Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arieztha.Art Percetakan Yasin Bekasi",
    description:
      "Percetakan & sablon Bekasi sejak 2010: buku yasin, nota, stempel, mug custom, undangan, spanduk. Buka 24 jam.",
    images: ["/hasil-cetak-percetakan-bekasi.webp"],
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.fullName,
  url: SITE_URL,
  description:
    "Percetakan & sablon di Bekasi sejak 2010 — cetak buku yasin, nota, stempel, mug custom, undangan, spanduk. Buka 24 jam.",
  telephone: `+${BUSINESS.whatsappNumber}`,
  image: `${SITE_URL}/hasil-cetak-percetakan-bekasi.webp`,
  priceRange: "Rp",
  hasMap: "https://maps.google.com/?cid=2811365965155653750",
  sameAs: [
    "https://www.google.com/maps/place/Arieztha.Art+Percetakan+Yasin/@-6.2894443,106.9159477,17z/data=!4m6!3m5!1s0x2e6993c39b43d685:0x2703fa7336b9d876!8m2!3d-6.2894443!4d106.9159477!16s%2Fg%2F11gr3zlxlz",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati",
    addressLocality: "Kota Bekasi",
    addressRegion: "Jawa Barat",
    postalCode: "17414",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  areaServed: "Bekasi",
};

export const productJsonLd = [
  {
    "@type": "Service",
    name: "Cetak Buku Yasin Custom Bekasi",
    description:
      "Jasa cetak buku yasin custom soft cover dan hard cover untuk tahlilan di Bekasi.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Bekasi",
  },
  {
    "@type": "Service",
    name: "Cetak Nota Bon Kwitansi Bekasi",
    description:
      "Cetak nota, bon, kwitansi, dan faktur untuk kebutuhan usaha Anda.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Bekasi",
  },
  {
    "@type": "Service",
    name: "Bikin Stempel Cepat Bekasi",
    description:
      "Pembuatan stempel karet, plat stenlis, dan plang nama dengan pengerjaan cepat.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Bekasi",
  },
  {
    "@type": "Service",
    name: "Mug Custom Bekasi",
    description:
      "Cetak mug custom satuan dengan sablon atau digital print sesuai desain.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: "Bekasi",
  },
];
