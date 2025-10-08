import type { Metadata } from "next";
import { Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import DotGridBackground from "@/components/DotGridBackground";
import Navbar from "@/components/Navbar";

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
  title: "Atik Mahbub - Portfolio",
  description: "Atik Mahbub's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inconsolata.variable} min-h-screen antialiased`}
      >
        <DotGridBackground />
        <Navbar />
        <div className="relative z-0 pt-20 sm:pt-24">{children}</div>
      </body>
    </html>
  );
}
