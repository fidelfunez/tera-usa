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
import { faqs } from "@/config/faq";
import { siteConfig } from "@/config/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Tera",
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` }
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
