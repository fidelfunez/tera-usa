"use client";

import { motion } from "framer-motion";

const segments = [
  "Home services",
  "Clinics",
  "Construction",
  "Retail",
  "Logistics",
  "Professional services",
  "Hospitality",
  "Franchises",
  "Manufacturing",
  "Consulting",
  "Legal",
  "Creative studios"
];

export function SocialProofBar() {
  return (
    <section className="shrink-0 border-y border-white/5 bg-[#060b16]/95 py-4 backdrop-blur-[2px]">
      <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60 md:text-[11px]">
          For teams outgrowing one-size-fits-all software
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex min-w-full gap-6 text-xs text-white/60"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear"
            }}
          >
            {[...segments, ...segments].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap">
                {item}
                {index !== segments.length * 2 - 1 && (
                  <span className="mx-3 text-white/20">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
