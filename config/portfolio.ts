export type PortfolioProject = {
  id: string;
  eyebrow: string;
  title: string;
  outcome: string;
  tags: string[];
  /** Path under `public/`, or null for a built-in browser-frame placeholder */
  imageSrc: string | null;
  /** When set, a single outbound link is shown (e.g. live product or case write-up) */
  href?: string | null;
  /** Label for `href`; defaults to “Visit site” in the UI */
  linkLabel?: string;
  /** `cover` fills the frame (may crop); `contain` shows the full shot. Default: contain */
  imageFit?: "contain" | "cover";
  /** Anchor when cropping (`cover`) or letterboxing (`contain`). Default: center */
  imageFocus?: "center" | "left" | "right" | "top" | "bottom" | "left-top";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "shark-reports-field-reporting-platform",
    eyebrow: "Company app · Construction reporting",
    title: "Shark Reports — two-minute daily reports from the crew",
    outcome:
      "We built this for Shark Builders: crew logins, end-of-day reports in English or Spanish, and a clear view for the office. The field finishes fast. The office searches past jobs instead of replaying voice notes.",
    tags: ["Company app", "Field reporting", "Auth", "Bilingual"],
    imageSrc: "/shark-reports-construction-daily-reporting-app-cover.webp",
    imageFit: "cover",
    imageFocus: "left",
    href: "https://www.sharkreports.com/",
    linkLabel: "Visit sharkreports.com"
  },
  {
    id: "paidin-bitcoin-business-operations-platform",
    eyebrow: "SaaS · Bitcoin payroll & back office",
    title: "PaidIn — payroll, books, and compliance on Bitcoin",
    outcome:
      "We built the product and the public site end to end: signup, payroll, invoices, accounting, and compliance for the U.S. and Canada. The product stays approachable for people who aren't Bitcoin experts.",
    tags: ["SaaS", "Landing page", "FinTech", "Compliance"],
    imageSrc: "/paidin-bitcoin-payroll-saas-platform-cover.webp",
    imageFit: "cover",
    imageFocus: "center",
    href: "https://www.paidin.io/",
    linkLabel: "Visit paidin.io"
  }
];
