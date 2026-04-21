import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-6 text-xs text-white/60">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tera-logo-transparent.webp"
                alt={siteConfig.name}
                className="h-full w-full scale-105 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-white/90">{siteConfig.name}</span>
              <span className="text-[11px]">{siteConfig.tagline}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="text-white transition hover:opacity-90">
            Work
          </a>
          <a href="#engagements" className="text-white transition hover:opacity-90">
            What we build
          </a>
          <a href="#process" className="text-white transition hover:opacity-90">
            Process
          </a>
          <a href="#faq" className="text-white transition hover:opacity-90">
            FAQ
          </a>
          <a href="#contact" className="text-white transition hover:opacity-90">
            Contact
          </a>
          <Link href="/privacy" className="text-white transition hover:opacity-90">
            Privacy
          </Link>
        </div>
        <div className="text-center text-[11px] md:text-right">
          <p>Built with care · The Woodlands, Texas · Serving U.S. businesses nationwide</p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
