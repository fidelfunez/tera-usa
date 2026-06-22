import Link from "next/link";
import { siteConfig } from "../config/site";
import { Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-10 text-sm text-stone">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div>
                <p className="font-display font-bold text-ink">{siteConfig.name}</p>
                <p className="text-xs text-stone">{siteConfig.tagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-stone transition hover:border-ink hover:text-ink"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-stone transition hover:border-ink hover:text-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/#filosofia" className="transition hover:text-ink">Filosofía</Link>
            <Link href="/#capacidades" className="transition hover:text-ink">Capacidades</Link>
            <Link href="/trabajo" className="transition hover:text-ink">Trabajo</Link>
            <Link href="/proyecto" className="transition hover:text-ink">Proyecto</Link>
            <Link href="/privacidad" className="transition hover:text-ink">Privacidad</Link>
          </div>

          <div className="text-xs md:text-right">
            <p>Honduras · Latinoamérica</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-1 block transition hover:text-ink"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-3 text-stone">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
