import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Analytics from "@/components/Analytics";
import ScrollReveal from "@/components/ScrollReveal";
import BackToTop from "@/components/BackToTop";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/constants/constants";

const title = "Atik Mahbub — Full-Stack Engineer";
const description =
  "Portfolio of Atik Mahbub, a full-stack engineer building scalable web and mobile products, AI/LLM-driven experiences, and Web3-integrated platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Atik Mahbub",
  },
  description,
  keywords: [
    "Atik Mahbub",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React Native",
    "AI Integration",
    "LLM",
    "RAG",
    "OpenAI",
    "Web3",
    "Software Engineer",
    "Portfolio",
    "Product Engineering",
  ],
  authors: [{ name: "Atik Mahbub", url: SITE_URL }],
  creator: "Atik Mahbub",
  publisher: "Atik Mahbub",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Building scalable products, AI agent experiences, and Web3-integrated platforms with a curious, craft-driven mindset.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    // og:image comes from app/opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Full-stack engineer delivering thoughtful product experiences across AI, Web3, and modern web stacks.",
    creator: "@atikmahbub",
    // twitter:image comes from app/twitter-image.tsx (1200x630).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EEEBE3",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Atik Mahbub",
      jobTitle: "Full-Stack Engineer",
      url: SITE_URL,
      sameAs: [
        "https://github.com/atikmahbub",
        "https://www.linkedin.com/in/atik-mahbub/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Atik Mahbub Studio",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isGaEnabled =
    process.env.NODE_ENV === "production" && Boolean(GA_MEASUREMENT_ID);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen antialiased">
        {isGaEnabled && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </>
        )}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <Providers>
          <Navbar />
          <div className="overflow-x-hidden">{children}</div>
          <ScrollReveal />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
