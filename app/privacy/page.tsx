import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Tera handles information you submit through buildwithtera.com.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | Tera",
    description: "How Tera handles information you submit through buildwithtera.com.",
    url: "/privacy",
    images: [
      {
        url: "/tera-logo.webp",
        width: 500,
        height: 500,
        alt: "Tera"
      }
    ]
  },
  twitter: {
    title: "Privacy | Tera",
    description: "How Tera handles information you submit through buildwithtera.com.",
    images: ["/tera-logo.webp"]
  }
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy pb-16 pt-28 text-white/80">
      <div className="container max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tera-nav-logo-96.webp"
              width={96}
              height={96}
              alt={siteConfig.name}
              className="h-full w-full scale-105 object-contain"
            />
          </span>
          <span className="font-semibold text-white">{siteConfig.name}</span>
        </Link>

        <h1 className="mt-10 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Privacy
        </h1>
        <p className="mt-2 text-sm text-white/50">Last updated: April 20, 2026</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed">
          <p>
            This page describes how we handle information collected through{" "}
            <Link href="/" className="text-electric-blue hover:underline">
              buildwithtera.com
            </Link>
            .
          </p>
          <h2 className="text-lg font-semibold text-white">Contact form</h2>
          <p>
            When you submit the project form, your name, email, company (if provided), and message
            are sent to us through{" "}
            <a
              href="https://formspree.io"
              className="text-electric-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree
            </a>
            , a third-party form processor. Formspree processes submissions on our behalf so we can
            respond to you. Do not include passwords, payment card numbers, or other highly sensitive
            data in the form.
          </p>
          <h2 className="text-lg font-semibold text-white">Email</h2>
          <p>
            If you email us directly at{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-electric-blue hover:underline">
              {siteConfig.contactEmail}
            </a>
            , we use that correspondence to reply and follow up about your project.
          </p>
          <h2 className="text-lg font-semibold text-white">Retention</h2>
          <p>
            We keep inquiry records only as long as needed to respond, operate the business, and meet
            legal obligations.
          </p>
          <h2 className="text-lg font-semibold text-white">Questions</h2>
          <p>
            For privacy questions, contact{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-electric-blue hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>

        <p className="mt-12">
          <Link href="/" className="text-sm text-electric-blue hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
