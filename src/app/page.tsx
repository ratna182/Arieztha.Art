import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ValueStrip from "@/components/ValueStrip";
import Catalog from "@/components/Catalog";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, productJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Highlights />
      <ValueStrip />
      <Catalog />
      <WhyUs />
      <Testimonials />
      <Location />
      <Footer />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={productJsonLd} />
    </main>
  );
}
