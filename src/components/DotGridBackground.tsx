"use client";

import DotGrid from "@/components/DotGrid";
import { useTheme } from "@/components/ThemeProvider";

export default function DotGridBackground() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const baseColor = isDark ? "#ffffff" : "#94a3b8"; // White dots for contrast against the dark gradient
  const activeColor = isDark ? "#22d3ee" : "#4f46e5"; // Cyan glow on hover

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background bg-dark-orbital">
      {/* Mid Layer: Soft volumetric light diffusion for depth illusion */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 dark:bg-fuchsia-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/10 dark:bg-indigo-500/5 blur-[150px]" />
      
      {/* Grid Pattern: Visible dots over the gradient */}
      <div className="absolute inset-0 opacity-60 dark:opacity-[0.12]">
        <DotGrid
          dotSize={2}
          gap={30}
          baseColor={baseColor}
          activeColor={activeColor}
          proximity={180}
          shockRadius={200}
          shockStrength={4}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Texture Layer: Subtle noise for organic film-grain feel exactly like the image */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />
    </div>
  );
}
