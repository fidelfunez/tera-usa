import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-navy/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tera-nav-logo-96.webp"
              width={96}
              height={96}
              alt={siteConfig.name}
              className="h-full w-full scale-105 object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-semibold tracking-tight">{siteConfig.name}</span>
            <span className="hidden text-xs text-white/60 md:inline">{siteConfig.tagline}</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white transition hover:opacity-90"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <Link
            href="#contact"
            className="rounded-full bg-tera-green px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-tera-green/40 transition hover:brightness-110 md:px-5 md:py-2.5 md:text-sm"
          >
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
