"use client";

import type { MouseEvent } from "react";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

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
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white/85 px-6 py-8 text-sm text-slate-500 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-base text-slate-700 dark:text-white/70">
              <p>
                {preventOrphans(
                  "Crafting scalable products, AI-driven experiences, and future-ready systems — with clean code and curious minds. ✨",
                )}
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-white/50">
                {preventOrphans("Based in Dhaka · collaborating with teams worldwide")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/40">
              <a
                href="#home"
                onClick={(event) => handleSmoothScroll(event, "home")}
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                Back to top
              </a>
              <a
                href="#projects"
                onClick={(event) => handleSmoothScroll(event, "projects")}
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(event) => handleSmoothScroll(event, "contact")}
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/30">
            {preventOrphans("© 2025 Atik Mahbub. All rights reserved.")}
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
