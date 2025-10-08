"use client";

import DotGrid from "@/components/DotGrid";
import { useTheme } from "@/components/ThemeProvider";

export default function DotGridBackground() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const baseColor = isDark ? "#271E37" : "#d9def6";
  const activeColor = isDark ? "#5227FF" : "#6366F1";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor={baseColor}
        activeColor={activeColor}
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
