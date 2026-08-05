export const BUSINESS = {
  name: "Arieztha.Art",
  fullName: "Arieztha.Art Percetakan Yasin",
  since: 2010,
  whatsappNumber: "628959697927",
  whatsappDisplay: "+62 895-9697-927",
  address: "Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi",
  hours: "24 Jam, setiap hari",
  rating: 5.0,
  reviewCount: 215,
};

export function waLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE = "Halo, saya mau tanya soal percetakan Arieztha.Art";

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
    description: "Soft cover & hard cover custom",
    message: "Halo, saya mau tanya soal cetak Buku Yasin",
    icon: "book",
  },
  {
    id: "nota",
    title: "Nota",
    description: "Nota, bon, kwitansi, faktur, surat jalan",
    message: "Halo, saya mau tanya soal cetak Nota",
    icon: "receipt",
  },
  {
    id: "stempel",
    title: "Stempel",
    description: "Stempel karet, plat stenlis, plang nama",
    message: "Halo, saya mau tanya soal Stempel & Plat",
    icon: "stamp",
  },
  {
    id: "mug",
    title: "Mug Custom",
    description: "Sablon & digital print mug sesuai desain",
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
    items: ["Kartu Nama", "ID Card", "Lanyard", "Name Tag/Nama Dada", "Amplop"],
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
    items: ["X Banner", "Roll Up Banner", "Spanduk", "Bendera", "Umbul-umbul", "Neon Box", "Plakat"],
    message: "Halo, saya mau tanya soal Promosi & Signage",
    icon: "signage",
  },
  {
    id: "cetak-acara",
    title: "Cetak Acara & Undangan",
    items: ["Undangan", "Brosur", "Tiket/Voucher", "Digital Print"],
    message: "Halo, saya mau tanya soal Cetak Acara & Undangan",
    icon: "calendar",
  },
  {
    id: "stiker",
    title: "Stiker",
    items: ["Stiker Cutting"],
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
