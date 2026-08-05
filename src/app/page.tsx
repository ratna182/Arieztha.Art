import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Catalog from "@/components/Catalog";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Highlights />
      <Catalog />
      <WhyUs />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
