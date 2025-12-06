import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import DotGridBackground from "@/components/DotGridBackground";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inconsolata = Inconsolata({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atikmahbub.netlify.app"),
  title: {
    default: "Atik Mahbub — Full-Stack Engineer",
    template: "%s | Atik Mahbub",
  },
  description:
    "Portfolio of Atik Mahbub, a full-stack engineer building scalable products, AI-driven experiences, and Web3-integrated platforms.",
  keywords: [
    "Atik Mahbub",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
    "Web3",
    "Software Engineer",
    "Portfolio",
    "Product Engineering",
  ],
  authors: [{ name: "Atik Mahbub" }],
  creator: "Atik Mahbub",
  alternates: {
    canonical: "https://atikmahbub.netlify.app",
  },
  openGraph: {
    title: "Atik Mahbub — Full-Stack Engineer",
    description:
      "Building scalable products, AI agent experiences, and Web3-integrated platforms with a curious, craft-driven mindset.",
    url: "https://atikmahbub.netlify.app",
    siteName: "Atik Mahbub Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atik Mahbub — Full-Stack Engineer",
    description:
      "Full-stack engineer delivering thoughtful product experiences across AI, Web3, and modern web stacks.",
    creator: "@atikmahbub",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://atikmahbub.netlify.app/#person",
      name: "Atik Mahbub",
      jobTitle: "Full-Stack Engineer",
      url: "https://atikmahbub.netlify.app",
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
      "@id": "https://atikmahbub.netlify.app/#website",
      url: "https://atikmahbub.netlify.app",
      name: "Atik Mahbub Portfolio",
      publisher: { "@id": "https://atikmahbub.netlify.app/#person" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification for Netlify site */}
        <meta
          name="google-site-verification"
          content="yuqjN30EZzmBHNsf2nKefO8rATnz2pR6Uo3x734rCsw"
        />
        {/* you can add other head meta tags here if needed */}
      </head>

      <body
        className={`${poppins.variable} ${inconsolata.variable} min-h-screen antialiased transition-colors duration-500`}
      >
        <ThemeScript />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <Providers>
          <DotGridBackground />
          <Navbar />
          <div className="relative z-0 pt-20 sm:pt-24">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
