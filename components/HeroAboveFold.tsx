import { Hero } from "@/components/Hero";
import { SocialProofBar } from "@/components/SocialProofBar";

/**
 * First screen: hero + social proof bar together fill the viewport below the sticky nav.
 * No nested scroll—only normal page scroll if content is taller than the screen.
 */
export function HeroAboveFold() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col overflow-x-hidden bg-gradient-to-b from-navy via-navy to-[#060b16] md:min-h-[calc(100dvh-5rem)]">
      <Hero />
      <SocialProofBar />
    </div>
  );
}
