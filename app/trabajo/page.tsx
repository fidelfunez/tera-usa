import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { BackToTopButton } from "../../components/BackToTopButton";
import { caseStudies } from "../../config/caseStudies";
import { siteConfig } from "../../config/site";

export const metadata = {
  title: "Trabajo | Tera",
  description:
    "Arquitectura digital para Girón & Schwartz, Shark Builders, The Corporate Consulting y más empresas en Honduras y LATAM.",
  alternates: {
    canonical: `${siteConfig.url}/trabajo`
  }
};

export default function TrabajoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border py-20 md:py-28">
          <div className="container">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
              Trabajo
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Infraestructura digital para marcas que ya tenían algo que contar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-stone">
              Sitios web, aplicaciones y sistemas construidos para empresas en
              Honduras, Roatán y Latinoamérica. Sin plantillas. Sin atajos.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.id}
                  className="flex flex-col rounded-2xl border border-border bg-paper p-6 md:p-8"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-stone">
                    {study.categoryLabel}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                    {study.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-ink/80">
                    {study.headline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {study.description}
                  </p>
                  <p className="mt-4 font-display text-sm font-bold text-ink/40">
                    {study.observation}
                  </p>
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink transition hover:opacity-70"
                    >
                      Visitar sitio
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-paper py-16 md:py-20">
          <div className="container text-center">
            <p className="font-display text-2xl font-bold text-ink md:text-3xl">
              ¿Tu proyecto podría estar aquí?
            </p>
            <p className="mt-3 text-stone">
              Si la marca es fuerte y el proyecto tiene impacto, conversemos.
            </p>
            <Link
              href="/proyecto"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
