import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
