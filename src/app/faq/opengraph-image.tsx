import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "FAQ Cetak Yasin, Nota & Kwitansi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Pertanyaan umum",
    title: "FAQ Cetak Yasin, Nota & Kwitansi",
    subtitle: "Lokasi, waktu pengerjaan, jumlah ply, dan pengiriman.",
  });
}
