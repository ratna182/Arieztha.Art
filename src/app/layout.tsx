import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arieztha.Art Percetakan Yasin",
  description:
    "Percetakan & sablon full-service sejak 2010 di Bekasi. Buku Yasin, Nota, Stempel, Mug Custom dan lainnya. Buka 24 jam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
