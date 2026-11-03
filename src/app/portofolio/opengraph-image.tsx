import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Portofolio Percetakan Arieztha.Art Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Portofolio",
    title: "Contoh Hasil Cetak Yasin, Kwitansi & Nota",
    subtitle: "Dikerjakan sesuai spesifikasi pelanggan di Bekasi.",
  });
}
