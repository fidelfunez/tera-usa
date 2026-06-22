"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredCaseStudies } from "../config/caseStudies";

export function CaseStudies() {
  return (
    <section id="trabajo" className="border-b border-border bg-white py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
              Trabajo
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Infraestructura para marcas reales.
            </h2>
            <p className="mt-4 text-stone md:text-lg">
              No es un portfolio de plantillas. Es arquitectura digital para
              empresas que ya tenían algo que contar.
            </p>
          </div>
          <Link
            href="/trabajo"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink transition hover:opacity-70"
          >
            Ver todo el trabajo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredCaseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-paper p-6 transition hover:border-ink/20 md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-stone">
                {study.categoryLabel}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {study.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-ink/80">
                {study.headline}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                {study.description}
              </p>
              <p className="mt-4 font-display text-sm font-bold text-ink/50">
                {study.observation}
              </p>
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink transition group-hover:opacity-70"
                >
                  Visitar sitio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
