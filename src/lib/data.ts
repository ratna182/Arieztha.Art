export * from "@/lib/business";

export interface Highlight {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "yasin",
    title: "Buku Yasin",
    description: "Cetak buku yasin custom di Bekasi — soft cover & hard cover",
    href: "/cetak-yasin",
    icon: "book",
  },
  {
    id: "kwitansi",
    title: "Kwitansi",
    description: "Kwitansi custom dengan logo, nomor seri, 2 ply & 3 ply",
    href: "/cetak-kwitansi",
    icon: "receipt",
  },
  {
    id: "nota",
    title: "Nota",
    description: "Cetak nota NCR, nota kontan, dan faktur untuk usaha di Bekasi",
    href: "/cetak-nota",
    icon: "documents",
  },
  {
    id: "stempel",
    title: "Stempel & Plat",
    description: "Stempel karet, plat stenlis, dan plang nama untuk usaha",
    href: "/portofolio",
    icon: "stamp",
  },
];

export interface CatalogCategory {
  id: string;
  title: string;
  items: string[];
  message: string;
  icon: string;
  href?: string;
}

export const CATALOG: CatalogCategory[] = [
  {
    id: "dokumen-bisnis",
    title: "Dokumen Bisnis",
    items: ["Nota", "Bon", "Kwitansi", "Faktur", "Surat Jalan", "Kop Surat", "Kartu Iuran"],
    message: "Halo, saya mau tanya soal Dokumen Bisnis",
    icon: "documents",
    href: "/cetak-nota",
  },
  {
    id: "buku-yasin",
    title: "Buku Yasin",
    items: ["Custom Soft Cover", "Custom Hard Cover"],
    message: "Halo, saya mau tanya soal Buku Yasin",
    icon: "book",
    href: "/cetak-yasin",
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
