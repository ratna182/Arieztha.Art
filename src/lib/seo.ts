import type { Metadata } from "next";
import { BUSINESS, GEO, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arieztha.Art Percetakan Yasin Bekasi | Cetak Cepat & Murah",
  description:
    "Percetakan & sablon Bekasi sejak 2010: cetak buku yasin, nota, stempel, mug custom, undangan, spanduk. Buka 24 jam, rating 5.0. Pesan via WhatsApp.",
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
      "Percetakan & sablon di Bekasi sejak 2010. Cetak buku yasin, nota, stempel, mug custom, undangan, spanduk. Buka 24 jam, rating 5.0.",
    images: [
      {
        url: "/hasil-cetak-percetakan-bekasi.webp",
        width: 1200,
        height: 630,
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
  telephone: `+${BUSINESS.whatsappNumber}`,
  image: `${SITE_URL}/hasil-cetak-percetakan-bekasi.webp`,
  priceRange: "Rp",
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
