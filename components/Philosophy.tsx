"use client";

import { motion } from "framer-motion";
import { observations } from "../config/philosophy";

export function Philosophy() {
  return (
    <section id="filosofia" className="border-b border-border bg-paper py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
            Filosofía
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Tera habla en observaciones.
          </h2>
          <p className="mt-4 text-stone md:text-lg">
            No vendemos con promesas. Nombramos lo que muchos negocios ya saben
            pero no articulan.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {observations.map((item, index) => (
            <motion.article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 transition hover:border-ink/20 hover:shadow-sm md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div>
                <p className="text-sm text-stone md:text-base">{item.line1}</p>
                <p className="mt-1 font-display text-2xl font-bold text-ink md:text-3xl">
                  {item.emphasis}
                </p>
                {item.line2 && (
                  <p className="mt-2 text-sm text-stone">{item.line2}</p>
                )}
              </div>
              <div className="mt-6 h-px w-8 bg-ink/20 transition group-hover:w-12 group-hover:bg-ink/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
