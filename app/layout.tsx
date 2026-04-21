import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tera | Custom websites & software for U.S. businesses",
    template: "%s | Tera"
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tera | Custom websites & software for U.S. businesses",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Tera",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/custom-software-contact-form-cover.webp",
        width: 2560,
        height: 1440,
        alt: "Tera — custom software for U.S. businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tera | Custom websites & software for U.S. businesses",
    description: siteConfig.description,
    images: ["/custom-software-contact-form-cover.webp"]
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" }
    ],
    apple: "/favicon/apple-touch-icon.png"
  },
  manifest: "/favicon/site.webmanifest"
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#organization`,
  name: "Tera",
  url: siteConfig.url,
  logo: `${siteConfig.url}/tera-logo.webp`,
  description: siteConfig.description,
  email: siteConfig.contactEmail,
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-navy font-sans text-white antialiased">
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
