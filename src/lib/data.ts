export const BUSINESS = {
  name: "Arieztha.Art",
  fullName: "Arieztha.Art Percetakan Yasin",
  since: 2010,
  whatsappNumber: "6289529697927",
  whatsappDisplay: "+62 895-2969-7927",
  address: "Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi",
  hours: "24 Jam, setiap hari",
  rating: 5.0,
  reviewCount: 215,
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://arieztha-art.vercel.app";

export const GEO = {
  latitude: -6.2894443,
  longitude: 106.9159477,
};

export const GOOGLE_PLACE_FTID = "0x2e6993c39b43d685:0x2703fa7336b9d876";

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE = "Halo, saya mau tanya soal percetakan Arieztha.Art";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Layanan", href: "#catalog" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi", href: "#lokasi" },
];

export interface Highlight {
  id: string;
  title: string;
  description: string;
  message: string;
  icon: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "yasin",
    title: "Buku Yasin",
    description: "Cetak buku yasin custom di Bekasi — soft cover & hard cover",
    message: "Halo, saya mau tanya soal cetak Buku Yasin",
    icon: "book",
  },
  {
    id: "nota",
    title: "Nota",
    description: "Cetak nota, bon, kwitansi, dan faktur untuk usaha di Bekasi",
    message: "Halo, saya mau tanya soal cetak Nota",
    icon: "receipt",
  },
  {
    id: "stempel",
    title: "Stempel",
    description: "Bikin stempel cepat di Bekasi — karet, plat stenlis, plang nama",
    message: "Halo, saya mau tanya soal Stempel & Plat",
    icon: "stamp",
  },
  {
    id: "mug",
    title: "Mug Custom",
    description: "Mug custom Bekasi — sablon & digital print sesuai desain",
    message: "Halo, saya mau tanya soal Mug Custom",
    icon: "mug",
  },
];

export interface CatalogCategory {
  id: string;
  title: string;
  items: string[];
  message: string;
  icon: string;
}

export const CATALOG: CatalogCategory[] = [
  {
    id: "dokumen-bisnis",
    title: "Dokumen Bisnis",
    items: ["Nota", "Bon", "Kwitansi", "Faktur", "Surat Jalan", "Kop Surat", "Kartu Iuran"],
    message: "Halo, saya mau tanya soal Dokumen Bisnis",
    icon: "documents",
  },
  {
    id: "buku-yasin",
    title: "Buku Yasin",
    items: ["Custom Soft Cover", "Custom Hard Cover"],
    message: "Halo, saya mau tanya soal Buku Yasin",
    icon: "book",
  },
  {
    id: "stempel-plat",
    title: "Stempel & Plat",
    items: ["Stempel", "Plat Stenlis/Kuningan", "Plang Nama/Merk"],
    message: "Halo, saya mau tanya soal Stempel & Plat",
    icon: "stamp",
  },
  {
    id: "identitas-aksesoris",
    title: "Identitas & Aksesoris",
    items: ["Kartu Nama", "ID Card Custom", "Lanyard", "Name Tag/Nama Dada", "Amplop"],
    message: "Halo, saya mau tanya soal Identitas & Aksesoris",
    icon: "card",
  },
  {
    id: "merchandise",
    title: "Merchandise Custom",
    items: ["Mug Custom", "Pin Custom", "Gantungan Kunci", "Medali"],
    message: "Halo, saya mau tanya soal Merchandise Custom",
    icon: "gift",
  },
  {
    id: "promosi-signage",
    title: "Promosi & Signage",
    items: ["X Banner", "Roll Up Banner", "Cetak Spanduk", "Bendera", "Umbul-umbul", "Neon Box", "Plakat"],
    message: "Halo, saya mau tanya soal Promosi & Signage",
    icon: "signage",
  },
  {
    id: "cetak-acara",
    title: "Cetak Acara & Undangan",
    items: ["Cetak Undangan", "Brosur", "Tiket/Voucher", "Digital Print"],
    message: "Halo, saya mau tanya soal Cetak Acara & Undangan",
    icon: "calendar",
  },
  {
    id: "stiker",
    title: "Stiker",
    items: ["Stiker Cutting Custom"],
    message: "Halo, saya mau tanya soal Stiker",
    icon: "sticker",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ibu Sri",
    role: "Pesanan Buku Yasin tahlilan",
    quote:
      "Cetak Yasinnya rapi, datang tepat waktu sebelum acara. Sudah langganan bertahun-tahun.",
  },
  {
    name: "Bapak Andi",
    role: "Pemilik usaha warung",
    quote:
      "Nota dan stempel untuk usaha saya hasilnya bagus, harganya bersahabat. Langsung beres.",
  },
  {
    name: "Ibu Ratna",
    role: "Pesanan undangan & mug custom",
    quote:
      "Desain mug custom sesuai banget sama permintaan. Pelayanannya ramah dan cepat dibalas.",
  },
];
