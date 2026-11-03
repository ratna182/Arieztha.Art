import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Tentang Arieztha.Art Percetakan Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Tentang kami",
    title: "Percetakan Yasin & Dokumen Usaha di Bekasi",
    subtitle: "Melayani pelanggan Kota Bekasi sejak 2010.",
  });
}
