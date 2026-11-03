import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Cetak Nota NCR Custom di Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Nota NCR",
    title: "Cetak Nota NCR & Nota Kontan di Bekasi",
    subtitle: "Nota custom 2 ply dan 3 ply untuk toko dan usaha jasa.",
  });
}
