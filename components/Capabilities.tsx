"use client";

import { motion } from "framer-motion";
import { capabilities } from "../config/capabilities";
import { CapabilityIcon } from "./svg/CapabilityIcon";

export function Capabilities() {
  return (
    <section id="capacidades" className="border-b border-border bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
              Capacidades
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Lo que construimos.
            </h2>
            <p className="mt-4 text-stone md:text-lg">
              Sitios web, apps, automatizaciones e IA son outputs. El objetivo
              siempre es la misma cosa: infraestructura digital que sostiene tu
              negocio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                className="rounded-2xl border border-border p-6 transition hover:border-ink/20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CapabilityIcon id={cap.id} className="h-8 w-8 text-ink" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-stone">{cap.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone/80">
                  {cap.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
