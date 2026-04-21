"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Smartphone,
  Search,
  BarChart3,
  ShieldCheck,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { siteConfig } from "@/config/site";

const CARD_WIDTH = 280;
const CARD_HEIGHT = 196;
const GAP = 24;

const features = [
  {
    icon: Zap,
    title: "Ship in weeks",
    description: "Tight scope, clear milestones, and a build that does not drift for months."
  },
  {
    icon: Users,
    title: "Talk to the builders",
    description: "You work with the people writing the code—not a new account manager every week."
  },
  {
    icon: Smartphone,
    title: "Built for real devices",
    description: "Thumb-friendly flows for crews in the field. Fast pages for customers. Clear screens for admins."
  },
  {
    icon: Search,
    title: "Discoverable by design",
    description: "Marketing sites launch with solid technical SEO—not a last-minute checklist."
  },
  {
    icon: BarChart3,
    title: "Measure what matters",
    description: "Analytics you can read, so the next improvement is an informed choice—not a guess."
  },
  {
    icon: ShieldCheck,
    title: "Own your roadmap",
    description: "Clean handoff, sensible defaults, and optional support—without lock-in games."
  }
];

const infiniteFeatures = [...features, ...features, ...features];

export function WhyTera() {
  const { testimonial } = siteConfig;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -(CARD_WIDTH + GAP) : CARD_WIDTH + GAP,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const segment = el.scrollWidth / 3;

    const handleScroll = () => {
      const left = el.scrollLeft;
      if (left >= segment * 2 - 10) {
        el.scrollLeft = left - segment;
      } else if (left <= 10) {
        el.scrollLeft = left + segment;
      }
    };

    el.scrollLeft = segment;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="why-tera"
      className="relative overflow-hidden bg-gradient-to-br from-[#060b16] via-navy to-[#0f2744] pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-tera-green/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-tera-green/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Why teams choose Tera
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            We are not here to win an award and vanish. We build software your staff and customers
            will keep using after launch week.
          </p>
          <p className="mt-4 text-sm font-medium text-tera-green">{siteConfig.socialProof}</p>
        </div>

        <div className="mx-auto mt-10 flex items-center gap-3 md:mt-14">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-navy/90 text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scrollRef}
            className="min-w-0 flex-1 overflow-x-auto scroll-smooth px-2 pb-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex" style={{ gap: GAP }}>
              {infiniteFeatures.map((feature, index) => (
                <motion.div
                  key={`${feature.title}-${index}`}
                  className="flex flex-shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-navy/80 p-6 transition hover:border-tera-green/40"
                  style={{
                    scrollSnapAlign: "start",
                    width: CARD_WIDTH,
                    minHeight: CARD_HEIGHT
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tera-green/20 text-tera-green">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                    <p className="mt-2 line-clamp-4 text-sm leading-snug text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-navy/90 text-white/80 transition hover:bg-white/10 hover:text-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <motion.div
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 md:h-24 md:w-24">
            {testimonial.imageUrl ? (
              <Image
                src={testimonial.imageUrl}
                alt={`${testimonial.author}, ${testimonial.companyName}`}
                width={96}
                height={96}
                className="h-full w-full object-cover"
                sizes="96px"
              />
            ) : (
              <User className="h-12 w-12 text-white/40" aria-hidden />
            )}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <blockquote className="text-lg leading-relaxed text-white/95 md:text-xl">
              {testimonial.quote}
            </blockquote>
            <cite className="mt-4 block text-sm not-italic text-white/60">
              — {testimonial.author}
              {testimonial.companyName &&
                (testimonial.companyUrl ? (
                  <>
                    ,{" "}
                    <a
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-white/40 underline-offset-2 hover:text-white/90 hover:decoration-white/60"
                    >
                      {testimonial.companyName}
                    </a>
                  </>
                ) : (
                  `, ${testimonial.companyName}`
                ))}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
