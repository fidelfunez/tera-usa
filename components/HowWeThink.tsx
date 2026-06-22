"use client";

import { motion } from "framer-motion";
import { ProcessFlow } from "./svg/ProcessFlow";

const steps = [
  {
    number: "01",
    title: "Entender el negocio",
    description:
      "Operaciones, audiencia, restricciones y objetivos. No empezamos con wireframes. Empezamos con contexto."
  },
  {
    number: "02",
    title: "Diseñar la arquitectura",
    description:
      "Estructura de información, flujos, integraciones y decisiones técnicas. El sistema antes del estilo."
  },
  {
    number: "03",
    title: "Construir con precisión",
    description:
      "Código limpio, diseño editorial, rendimiento y detalle. Lo que se ve premium se siente premium porque está bien hecho por dentro."
  },
  {
    number: "04",
    title: "Evolucionar el sistema",
    description:
      "Lanzar es el inicio. Acompañamos iteraciones, mantenimiento y crecimiento de la infraestructura digital."
  }
];

export function HowWeThink() {
  return (
    <section id="proceso" className="border-b border-border bg-paper py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
            Proceso
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Pensamos en sistemas.
          </h2>
          <p className="mt-4 text-stone md:text-lg">
            Cada proyecto es una pieza de arquitectura digital. Así es como
            abordamos la construcción.
          </p>
        </div>

        <div className="mt-10 hidden justify-center text-ink/30 md:flex">
          <ProcessFlow className="w-full max-w-lg" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-display text-sm font-bold text-stone">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
