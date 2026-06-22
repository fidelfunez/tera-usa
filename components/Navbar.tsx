import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "../config/site";
import { WHATSAPP_URL } from "../config/whatsapp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-stone transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-white transition hover:bg-charcoal md:px-5 md:py-2.5 md:text-sm"
        >
          Conversemos
        </Link>
      </nav>
    </header>
  );
}
