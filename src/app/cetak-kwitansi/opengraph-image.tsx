import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Cetak Kwitansi Custom di Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Kwitansi custom",
    title: "Cetak Kwitansi Custom dengan Logo & Nomor Seri",
    subtitle: "Pilihan 2 ply dan 3 ply untuk usaha, sekolah, dan organisasi.",
  });
}
