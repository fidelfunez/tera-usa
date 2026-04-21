"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/config/portfolio";
import { portfolioProjects } from "@/config/portfolio";

const focusClass: Record<NonNullable<PortfolioProject["imageFocus"]>, string> = {
  center: "object-center",
  left: "object-left",
  right: "object-right",
  top: "object-top",
  bottom: "object-bottom",
  "left-top": "object-left-top"
};

function ProjectScreenshot({
  imageSrc,
  title,
  imageFit = "contain",
  imageFocus = "center",
  priority = false
}: {
  imageSrc: string;
  title: string;
  imageFit?: PortfolioProject["imageFit"];
  imageFocus?: PortfolioProject["imageFocus"];
  /** First project cards: eager load so mobile PSI can resolve LCP (avoids NO_LCP with lazy + in-viewport). */
  priority?: boolean;
}) {
  const fit = imageFit === "cover" ? "object-cover" : "object-contain";
  const position = focusClass[imageFocus ?? "center"] ?? focusClass.center;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a1220]">
      <Image
        src={imageSrc}
        alt={`${title} — product preview`}
        fill
        priority={priority}
        className={`${fit} ${position}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 48vw, 560px"
      />
    </div>
  );
}

function ProjectPlaceholder({ accentClass }: { accentClass: string }) {
  return (
    <div className={`flex aspect-[16/10] w-full flex-col overflow-hidden bg-black/30 ${accentClass}`}>
      <div
        className="flex h-9 shrink-0 items-center gap-2 border-b border-white/10 bg-black/40 px-3"
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full bg-white/[0.22]" />
        <span className="h-2 w-2 rounded-full bg-white/[0.22]" />
        <span className="h-2 w-2 rounded-full bg-white/[0.22]" />
      </div>
      <div className="relative flex flex-1 items-stretch">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_0%,rgba(255,255,255,0.04)_45%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,168,0.18),transparent_55%)]" />
        <div className="m-4 flex-1 rounded-lg border border-white/[0.08] bg-navy/40 backdrop-blur-sm" />
      </div>
    </div>
  );
}

function ProjectVisual({
  imageSrc,
  title,
  accentClass,
  imageFit,
  imageFocus,
  imagePriority
}: {
  imageSrc: string | null;
  title: string;
  accentClass: string;
  imageFit?: PortfolioProject["imageFit"];
  imageFocus?: PortfolioProject["imageFocus"];
  imagePriority?: boolean;
}) {
  if (imageSrc) {
    return (
      <ProjectScreenshot
        imageSrc={imageSrc}
        title={title}
        imageFit={imageFit}
        imageFocus={imageFocus}
        priority={imagePriority}
      />
    );
  }
  return <ProjectPlaceholder accentClass={accentClass} />;
}

export function Portfolio() {
  if (!portfolioProjects.length) return null;

  const accents = [
    "from-electric-blue/[0.12] via-navy/90 to-navy",
    "from-tera-green/[0.10] via-navy/90 to-navy"
  ];

  return (
    <section
      id="work"
      className="border-t border-white/5 bg-navy pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tera-green">
            Selected work
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            A few projects we&apos;re proud of
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Live products scoped to how teams work—not generic templates. When a client needs
            privacy, we adjust names or details on purpose.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:mt-14 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy/80 shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:border-electric-blue/50 hover:shadow-[0_22px_55px_rgba(0,0,0,0.5)]"
            >
              <div className="overflow-hidden rounded-t-2xl border-b border-white/10">
                <ProjectVisual
                  imageSrc={project.imageSrc}
                  title={project.title}
                  accentClass={`bg-gradient-to-br ${accents[index % accents.length]}`}
                  imageFit={project.imageFit}
                  imageFocus={project.imageFocus}
                  imagePriority={index < 2}
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {project.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{project.outcome}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project tags">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-blue underline-offset-2 transition hover:text-white hover:underline"
                  >
                    {project.linkLabel ?? "Visit site"}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
