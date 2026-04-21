export const siteConfig = {
  name: "Tera",
  tagline: "Custom software—clear scope, no agency runaround.",
  url: "https://buildwithtera.com",
  description:
    "Tera builds custom websites, apps, and internal tools for U.S. businesses. We ship quickly, keep adoption simple, and scope work to how you already operate.",
  /**
   * Contact form POST URL. Set `NEXT_PUBLIC_FORMSPREE_ID` to either:
   * - full URL from Formspree (e.g. `https://formspree.io/p/…/f/contact`), or
   * - classic slug only (letters/numbers after `/f/` in the integration link).
   */
  formspreeSubmitUrl: (() => {
    const raw = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() ?? "";
    if (!raw || raw === "REPLACE_WITH_YOUR_FORMSPREE_ID") return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    return `https://formspree.io/f/${raw}`;
  })(),
  contactEmail: "fidel@teralatam.co",
  navLinks: [
    { href: "#work", label: "Work" },
    { href: "#engagements", label: "What we build" },
    { href: "#process", label: "Process" },
    { href: "#why-tera", label: "Why Tera" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ] as const,
  socialProof:
    "Owners and operators across Texas and the U.S. hire Tera for public sites and the tools their teams use every day.",
  testimonial: {
    quote:
      "We stopped losing updates in chat. The crew does one short report at the end of the day. I finally see every job in one place.",
    author: "Marnie Alonzo",
    companyName: "Shark Builders LLC, Arizona",
    companyUrl: null as string | null,
    imageUrl: "/marnie-alonzo-shark-builders-llc-founder.png"
  },
  social: {
    facebook: "https://www.facebook.com/teralatam.co",
    instagram: "https://www.instagram.com/teralatam/"
  }
} as const;
