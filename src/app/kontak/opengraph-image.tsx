import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Kontak dan Lokasi Arieztha.Art Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Kontak & lokasi",
    title: "Hubungi Arieztha.Art di Jatirahayu, Bekasi",
    subtitle: "Telepon, WhatsApp, dan petunjuk arah ke toko.",
  });
}
