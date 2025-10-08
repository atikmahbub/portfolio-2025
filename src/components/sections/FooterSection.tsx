"use client";

import type { MouseEvent } from "react";
import Reveal from "@/components/Reveal";

export default function FooterSection() {
  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative px-6 pb-16">
      <Reveal>
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-sm text-white/60 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-white/70">
              Crafting scalable products, AI-driven experiences, and future-ready systems — with clean code and curious
              minds. ✨
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
              <a
                href="#home"
                onClick={(event) => handleSmoothScroll(event, "home")}
                className="transition hover:text-white"
              >
                Back to top
              </a>
              <a
                href="#projects"
                onClick={(event) => handleSmoothScroll(event, "projects")}
                className="transition hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(event) => handleSmoothScroll(event, "contact")}
                className="transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/30">
            © 2025 Atik Mahbub. All rights reserved.
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
