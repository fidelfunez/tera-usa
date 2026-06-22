import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "../config/site";
import { faqs } from "../config/faq";

const GA_MEASUREMENT_ID = "G-0YVW95Z8SV";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const codePro = localFont({
  src: [
    {
      path: "../public/fonts/CODE-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/CODE-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-code-pro",
  display: "swap"
});

const pageTitle =
  "Tera | Arquitectura digital para empresas en Honduras y LATAM";

export const metadata = {
  title: pageTitle,
  icons: {
    icon: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico"
  },
  manifest: "/favicon/site.webmanifest",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: pageTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tera · Arquitectura digital para empresas en LATAM"
      }
    ],
    locale: siteConfig.locale.replace("_", "-"),
    type: "website"
  },
  alternates: {
    canonical: siteConfig.url
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tegucigalpa",
      addressRegion: "Francisco Morazán",
      addressCountry: "HN"
    },
    areaServed: ["Honduras", "Guatemala", "El Salvador", "Costa Rica", "Latinoamérica"],
    email: siteConfig.contactEmail,
    knowsAbout: [
      "Desarrollo web",
      "Aplicaciones móviles",
      "Automatización",
      "Inteligencia artificial",
      "Arquitectura de software"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "ProfessionalService",
      name: siteConfig.brandName
    },
    author: {
      "@type": "Person",
      name: siteConfig.testimonial.author
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: siteConfig.testimonial.quote
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    alternateName: siteConfig.name,
    url: siteConfig.url
  };

  return (
    <html lang="es" className={`${inter.variable} ${codePro.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </body>
    </html>
  );
}
