"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, FileText, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "1",
    title: "Discovery call",
    description:
      "We walk through the problem, who uses it, and what “done” looks like. No slide deck—just clarity."
  },
  {
    icon: FileText,
    num: "2",
    title: "Scope & proposal",
    description:
      "You get it in writing: what we are building, milestones, timeline, and cost. Nothing starts until you approve."
  },
  {
    icon: Hammer,
    num: "3",
    title: "Build in the open",
    description:
      "We ship in steps you can click through. Weekly check-ins (or faster when needed) so the end of the project is not a surprise."
  },
  {
    icon: Rocket,
    num: "4",
    title: "Launch & handoff",
    description:
      "We go live together, watch real users, and document what matters. Add a care plan if you want us on speed dial after that."
  }
];

export function HowItWorks() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-[#060b16] pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            How we work at Tera
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            A simple process so you always know what ships next—and why it is on the list.
          </p>
        </div>

        <div ref={timelineRef} className="relative mt-12 md:mt-16">
          <div
            className="absolute left-8 right-8 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center rounded-2xl border border-transparent p-4 transition hover:-translate-y-1 hover:border-electric-blue/40 hover:bg-navy/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <motion.div
                  className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-electric-blue bg-[#060b16] text-lg font-bold text-electric-blue shadow-[0_0_20px_rgba(37,99,168,0.3)]"
                  animate={isInView ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.45,
                    ease: "easeInOut"
                  }}
                >
                  {step.num}
                </motion.div>

                <div className="mt-6 flex flex-col items-center text-center">
                  <div className="mb-3 hidden h-10 w-10 items-center justify-center rounded-lg bg-electric-blue/20 text-electric-blue md:inline-flex">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
