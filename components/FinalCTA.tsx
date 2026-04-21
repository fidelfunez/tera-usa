import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

const CONTACT_COVER_SRC = "/custom-software-contact-form-cover.webp";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#060b16] via-navy to-navy pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
          <div className="flex flex-1 flex-col justify-start rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.75)] md:rounded-r-none md:border-r-0 md:p-10 md:text-left">
            <figure className="relative mx-auto mb-8 aspect-[4/3] w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 md:mx-0 md:max-w-none">
              <Image
                src={CONTACT_COVER_SRC}
                alt="Warm, natural workspace—contact Tera about custom software for your business"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) min(100vw, 28rem), (max-width: 1024px) 45vw, 520px"
              />
            </figure>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Want software that matches how you work?
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Tell us what you are trying to fix. We reply within 24 hours with clear next steps—or a
              short note if we are not the right fit.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Prefer email?{" "}
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-white underline-offset-2 hover:text-electric-blue hover:underline"
              >
                {siteConfig.contactEmail}
              </Link>
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-navy/60 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.75)] md:w-[48%] md:min-w-[300px] md:flex-shrink-0 md:rounded-l-none md:border-l-0 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
