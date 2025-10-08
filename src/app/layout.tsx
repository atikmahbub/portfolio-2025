import type { Metadata } from "next";
import { Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import DotGridBackground from "@/components/DotGridBackground";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import ThemeScript from "@/components/ThemeScript";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const inconsolata = Inconsolata({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atikmahbub.com"),
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
  openGraph: {
    title: "Atik Mahbub — Full-Stack Engineer",
    description:
      "Building scalable products, AI agent experiences, and Web3-integrated platforms with a curious, craft-driven mindset.",
    url: "https://atikmahbub.com",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inconsolata.variable} min-h-screen antialiased transition-colors duration-500`}
      >
        <ThemeScript />
        <Providers>
          <DotGridBackground />
          <Navbar />
          <div className="relative z-0 pt-20 sm:pt-24">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
