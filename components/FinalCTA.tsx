import Link from "next/link";
import { WHATSAPP_URL } from "../config/whatsapp";
import { siteConfig } from "../config/site";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="bg-ink py-20 text-white md:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            ¿Tu proyecto tiene el fit?
          </h2>
          <p className="mt-4 text-white/70 md:text-lg">
            No aceptamos todo. Buscamos proyectos donde podemos construir algo
            con excelencia. Si eso suena como lo que necesitás, conversemos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/proyecto"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              Hablemos de tu proyecto
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:border-white/60"
            >
              Conversemos
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            o escríbenos a{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-white/80 transition hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
