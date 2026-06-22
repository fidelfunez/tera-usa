import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { Capabilities } from "../components/Capabilities";
import { HowWeThink } from "../components/HowWeThink";
import { CaseStudies } from "../components/CaseStudies";
import { Testimonial } from "../components/Testimonial";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";
import { WhatsAppButton } from "../components/WhatsAppButton";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Capabilities />
        <HowWeThink />
        <CaseStudies />
        <Testimonial />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}
