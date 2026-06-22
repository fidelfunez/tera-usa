import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { BackToTopButton } from "../../components/BackToTopButton";
import { services, projectCriteria } from "../../config/services";
import { siteConfig } from "../../config/site";
import { WHATSAPP_URL } from "../../config/whatsapp";
import { CapabilityIcon } from "../../components/svg/CapabilityIcon";
import type { CapabilityId } from "../../config/capabilities";

const serviceIconMap: Record<string, CapabilityId> = {
  web: "web",
  apps: "apps",
  automation: "automation",
  ai: "ai",
  evolution: "automation"
};

export const metadata = {
  title: "Hablemos de tu proyecto | Tera",
  description:
    "Conversemos sobre tu proyecto. Tera diseña sitios web, aplicaciones, automatizaciones y sistemas de IA para empresas ambiciosas en LATAM.",
  alternates: {
    canonical: `${siteConfig.url}/proyecto`
  }
};

export default function ProyectoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border py-20 md:py-28">
          <div className="container">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
              Proyecto
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Hablemos de tu proyecto.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-stone">
              No aceptamos todo. Evaluamos si hay fit entre lo que necesitás y
              lo que podemos construir con excelencia. No se trata del dinero.
              Se trata del match.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
              >
                Conversemos
              </Link>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition hover:border-ink"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-16 md:py-20">
          <div className="container">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Qué buscamos
            </h2>
            <p className="mt-3 max-w-2xl text-stone">
              El tamaño de la empresa no importa. Lo que importa es la marca, la
              ambición y la disposición para construir algo con criterio.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {projectCriteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-paper p-5 text-sm text-ink"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border py-16 md:py-20">
          <div className="container">
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Qué construimos
            </h2>
            <p className="mt-3 max-w-2xl text-stone">
              Sin precios publicados. Cada sistema tiene distinta arquitectura,
              distinto alcance y distinto valor. Cotizamos después de entender
              tu proyecto.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="rounded-2xl border border-border p-6 md:p-8"
                >
                  <CapabilityIcon
                    id={serviceIconMap[service.id] ?? "web"}
                    className="h-7 w-7 text-ink"
                  />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-stone"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-stone" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white md:py-20">
          <div className="container text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              El primer paso es una conversación.
            </h2>
            <p className="mt-3 text-white/70">
              Cuéntanos sobre tu proyecto. Si hay fit, te proponemos un camino.
              Si no, te lo decimos con honestidad.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              Iniciar conversación
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
