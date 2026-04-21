export type Engagement = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  timeline: string;
  badge?: string;
  footnote?: string;
};

export const engagements: Engagement[] = [
  {
    id: "web",
    title: "Websites & landing pages",
    description:
      "A site that loads fast, reads clearly, and turns visitors into leads—without a cookie-cutter template.",
    outcomes: [
      "Mobile-first layout shaped around your offer",
      "Clear calls to action and organized content",
      "Solid performance and technical SEO from day one",
      "Analytics wired so you can see what works"
    ],
    timeline: "Typical focused launches: 2–5 weeks"
  },
  {
    id: "product",
    title: "Portals, dashboards & customer apps",
    description:
      "One place for logins, workflows, and data—instead of stitching together five off-the-shelf tools.",
    outcomes: [
      "Sign-in and roles that match how your team actually works",
      "Dashboards and forms built around your process",
      "Bookings, billing handoffs, or client updates—whatever you need",
      "Architecture that leaves room for the next feature, not just launch day"
    ],
    timeline: "Discovery first, then a fixed scope & proposal",
    badge: "MOST REQUESTED"
  },
  {
    id: "ops",
    title: "Operations & field software",
    description:
      "Software for people on the job: reports, jobs, inventory, handoffs—and the integrations that tie them together.",
    outcomes: [
      "Flows on phones that workers can finish in the field",
      "Admin views that replace spreadsheets and group chats",
      "Search, export, and audit trails when you need them",
      "Integrations (email, payments, CRM, and more) only where they help"
    ],
    timeline: "Milestones you can see weekly during the build"
  }
];

export const carePlan = {
  title: "Want us to stay on after launch?",
  description:
    "We can keep things running: hosting coordination, security updates, small fixes, and a direct line when something breaks.",
  bullets: [
    "Monitoring and backups (depends on your stack)",
    "Priority turnaround on fixes and tweaks",
    "A monthly window for improvements so the product keeps moving",
    "Updates in plain English—no ticket theater"
  ],
  cta: "Ask about a care plan"
};
