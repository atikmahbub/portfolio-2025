import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { StaggeredMenu } from "@/components/StaggeredMenu";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/constants/constants";

// Poppins removed in favor of Satoshi in globals.css

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070815",
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

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Experience', ariaLabel: 'View our experience', link: '#experience' },
  { label: 'Projects', ariaLabel: 'View our projects', link: '#projects' },
  { label: 'Skills', ariaLabel: 'View our skills', link: '#skills' },
  { label: 'Process', ariaLabel: 'View our process', link: '#process' },
  { label: 'Testimonials', ariaLabel: 'View our testimonials', link: '#testimonials' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/atikmahbub' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/atik-mahbub' }
];

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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap"
          rel="stylesheet"
        />
        {/* Google Search Console verification for Netlify site */}
        <meta
          name="google-site-verification"
          content="yuqjN30EZzmBHNsf2nKefO8rATnz2pR6Uo3x734rCsw"
        />
        {/* you can add other head meta tags here if needed */}
      </head>

      <body
        className={`font-sans ${inconsolata.variable} min-h-screen antialiased transition-colors duration-500`}
      >
        <ThemeScript />
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
          <StaggeredMenu
            isFixed
            items={menuItems}
            socialItems={socialItems}
            colors={['#7C3AED', '#6366F1', '#06B6D4']}
            accentColor="#6366F1"
            displayItemNumbering={false}
          />
          <div className="relative z-0 pt-20 sm:pt-24 overflow-x-hidden">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
