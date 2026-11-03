import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Arieztha.Art Percetakan Yasin Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Percetakan Yasin · Bekasi",
    title: "Cetak Yasin, Nota & Kwitansi",
    subtitle: "Custom desain, konsultasi via WhatsApp, buka setiap hari.",
  });
}
