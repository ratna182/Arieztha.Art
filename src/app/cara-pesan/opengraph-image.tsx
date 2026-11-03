import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Cara Pesan Cetak di Arieztha.Art Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Cara pesan",
    title: "Pesan Cetak Mulai dari WhatsApp",
    subtitle: "Kirim spesifikasi, cek desain, lalu produksi.",
  });
}
