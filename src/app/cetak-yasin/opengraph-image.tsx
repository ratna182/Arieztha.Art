import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Cetak Buku Yasin Custom di Bekasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Buku Yasin custom",
    title: "Cetak Yasin Soft Cover & Hard Cover di Bekasi",
    subtitle: "Cover foto almarhum, isi Yasin dan tahlil, konsultasi via WhatsApp.",
  });
}
