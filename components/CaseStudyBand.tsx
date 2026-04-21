"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "< 3 weeks", label: "Recent build: kickoff to live" },
  { value: "2 min", label: "Typical end-of-day report" },
  { value: "100%", label: "Team using it on day one" }
];

export function CaseStudyBand() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-r from-navy/90 via-[#0f2744] to-navy/90 py-10 md:py-12">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-tera-green/5 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tera-green">
              Proof, not pitch decks
            </p>
            <p className="mt-2 text-sm text-white/75 md:text-base">
              One construction team swapped scattered voice notes for a short mobile report at the
              end of each day. The office gets a clean, searchable view—and crews actually use it.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:min-w-[420px]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-xl border border-white/10 bg-navy/70 px-3 py-3 text-center shadow-lg shadow-black/20 md:px-4 md:py-4"
              >
                <p className="text-lg font-semibold text-white md:text-xl">{s.value}</p>
                <p className="mt-1 text-[10px] leading-snug text-white/50 md:text-[11px]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
