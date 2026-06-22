import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
          Esta página no existe.
        </h1>
        <p className="mt-4 max-w-md text-stone">
          La ruta que buscás no está en nuestro mapa. Volvé al inicio o
          conversemos sobre tu proyecto.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
          >
            Ir al inicio
          </Link>
          <Link
            href="/proyecto"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition hover:border-ink"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
