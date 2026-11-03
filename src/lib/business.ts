export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arieztha-art.vercel.app";

export const SITE_NAME = "Arieztha.Art";

export const LAST_CONTENT_UPDATE = "2026-11-03";

export const BUSINESS = {
  name: "Arieztha.Art",
  fullName: "Arieztha.Art Percetakan Yasin",
  since: 2010,
  phone: "+6289529697927",
  phoneDisplay: "+62 895-2969-7927",
  whatsappNumber: "6289529697927",
  whatsappProfileUrl: "https://wa.me/ariezthaartpercetakan",
  email: null,
  street: "Jl. Raya Hankam No.72, RT.003/RW.006",
  kelurahan: "Jatirahayu",
  kecamatan: "Pondok Melati",
  city: "Kota Bekasi",
  province: "Jawa Barat",
  postalCode: "17414",
  country: "ID",
  landmark: "Samping SMA Hutama, Jatirahayu",
  addressLine:
    "Jl. Raya Hankam No.72, RT.003/RW.006, Jatirahayu, Pondok Melati, Kota Bekasi, Jawa Barat 17414",
  hours: "Setiap hari, 07.00–21.00 WIB",
  hoursShort: "07.00–21.00 setiap hari",
  opens: "07:00",
  closes: "21:00",
  rating: 5.0,
  reviewCount: 132,
  categories: [
    "Print, TV, Radio and Outdoor Advertising Service",
    "Event Service",
    "Print Store",
    "Stationery Store",
  ],
} as const;

export const GEO = {
  latitude: -6.28945,
  longitude: 106.91596,
} as const;

export const GOOGLE_PLACE_FTID = "0x2e6993c39b43d685:0x2703fa7336b9d876";

export const MAPS_URL =
  "https://maps.google.com/?cid=2811365965155653750";

export const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Arieztha.Art+Percetakan+Yasin/@-6.28945,106.91596,17z/data=!4m6!3m5!1s0x2e6993c39b43d685:0x2703fa7336b9d876!8m2!3d-6.28945!4d106.91596!16s%2Fg%2F11gr3zlxlz";

export const GOOGLE_REVIEW_URL = MAPS_PLACE_URL;

export const SERVICE_AREA_LABEL = "Kota Bekasi dan sekitarnya";

export const SERVICE_AREAS = ["Kota Bekasi", "Jawa Barat", "Jabodetabek"] as const;

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE =
  "Halo, saya mau tanya soal percetakan Arieztha.Art";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Cetak Yasin", href: "/cetak-yasin" },
  { label: "Cetak Kwitansi", href: "/cetak-kwitansi" },
  { label: "Cetak Nota", href: "/cetak-nota" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Kontak", href: "/kontak" },
];

export const FOOTER_LINKS: NavLink[] = [
  ...NAV_LINKS,
  { label: "Cara Pesan", href: "/cara-pesan" },
  { label: "FAQ", href: "/faq" },
  { label: "Tentang", href: "/tentang" },
];

export interface Review {
  quote: string;
  date: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "Sudah ke 4x saya pesan buku yasin disini. Pelayanannya ramah, cepat dan terpercaya. Terakhir saya pesan buku yasin request motifnya seperti yang saya mau, Alhamdulillah sesuai dengan yang saya inginkan.",
    date: "Februari 2026",
    rating: 5,
  },
  {
    quote:
      "Hasilnya bagus banget, rapih, abangnya juga komunikatif jadi bisa menyesuaikan dengan keinginan kita. Terima kasih Arieztha.Art.",
    date: "Januari 2026",
    rating: 5,
  },
  {
    quote:
      "Ini beneran murah, cepet, hasilnya mantap. 2 jam selesai, terima kasih banyak.",
    date: "Januari 2026",
    rating: 5,
  },
  {
    quote:
      "Hasil sesuai request, 5 menit jadi. Abangnya juga ramah, murah tapi kualitas ok banget.",
    date: "Oktober 2025",
    rating: 5,
  },
];
