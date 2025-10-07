"use client";

import DotGrid from "@/components/DotGrid";

export default function DotGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
