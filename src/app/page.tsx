import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import BentoGrid from "@/components/BentoGrid";
import Metrics from "@/components/Metrics";
import Leadership from "@/components/Leadership";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <>
      {/* Responsive sticky navigation */}
      <Navbar />

      {/* Main content grid */}
      <main className="flex-grow">
        {/* High-impact intro */}
        <Hero />

        {/* Global trusted partners brand ticker */}
        <BrandTicker />

        {/* Core Pillars Bento box layout */}
        <BentoGrid />

        {/* Core verified stats */}
        <Metrics />

        {/* Executive leadership profiles */}
        <Leadership />

        {/* Lead capture contact section */}
        <ContactForm />
      </main>

      {/* Corporate contact and footer coordinates */}
      <Footer />

      {/* Touch-first floating conversion shortcut */}
      <WhatsAppCTA />
    </>
  );
}
