import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import type { Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05091c" },
  ],
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
            >
              Lewati ke konten
            </a>
            <Header />
            {children}
            <Footer />
            <Analytics />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
