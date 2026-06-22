"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../config/site";

export function Testimonial() {
  const { testimonial } = siteConfig;

  return (
    <section className="border-b border-border bg-white py-20 md:py-28">
      <div className="container">
        <motion.blockquote
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-ink">
              {testimonial.author}
            </p>
            {testimonial.companyUrl ? (
              <a
                href={testimonial.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-stone transition hover:text-ink"
              >
                {testimonial.companyName}
              </a>
            ) : (
              <p className="mt-1 text-sm text-stone">{testimonial.companyName}</p>
            )}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
