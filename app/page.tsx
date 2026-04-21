import { BackToTopButton } from "@/components/BackToTopButton";
import { CaseStudyBand } from "@/components/CaseStudyBand";
import { Engagements } from "@/components/Engagements";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { HeroAboveFold } from "@/components/HeroAboveFold";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { WhyTera } from "@/components/WhyTera";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroAboveFold />
        <CaseStudyBand />
        <Portfolio />
        <Engagements />
        <HowItWorks />
        <WhyTera />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
