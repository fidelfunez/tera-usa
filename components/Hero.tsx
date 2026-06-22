"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "../config/whatsapp";
import { GridPattern } from "./svg/GridPattern";
import { ArchitectureLayers } from "./svg/ArchitectureLayers";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="pointer-events-none absolute inset-0 text-mist">
        <GridPattern className="absolute inset-0 opacity-60" />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-stone">
              Tera
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              La arquitectura digital detrás de grandes negocios.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-stone md:text-lg">
              Sitios, aplicaciones, automatizaciones y sistemas de IA. Diseñados
              para empresas que piensan en operaciones, no solo en pantallas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/proyecto"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
              >
                Hablemos de tu proyecto
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition hover:border-ink"
              >
                Conversemos
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <ArchitectureLayers className="w-full h-full text-ink" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl border border-border bg-paper/80 px-6 py-4 backdrop-blur-sm">
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-stone">
                    Sistemas
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-ink">
                    Infraestructura
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-ink opacity-40">
                    Percepción
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
