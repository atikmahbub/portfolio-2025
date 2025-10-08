"use client";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
