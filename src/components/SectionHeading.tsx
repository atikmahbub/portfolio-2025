"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { preventOrphans } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 24 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const alignmentClasses =
    align === "center"
      ? "items-center text-center"
      : "items-center text-center sm:items-start sm:text-left";

  return (
    <header id={id} className={`flex flex-col gap-3 ${alignmentClasses} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-gradient-to-r from-white via-indigo-100/70 to-sky-100/70 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-[0_18px_36px_-22px_rgba(79,70,229,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_rgba(59,130,246,0.4)] dark:border-white/20 dark:from-white/10 dark:via-[#7DD3FC]/20 dark:to-[#A855F7]/20 dark:text-white dark:shadow-[0_12px_30px_-15px_rgba(125,211,252,0.8)] dark:hover:shadow-[0_22px_55px_-25px_rgba(125,211,252,0.75)]">
          {eyebrow}
        </span>
      ) : null}
      <h2
        ref={titleRef}
        className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
      >
        {preventOrphans(title)}
      </h2>
      {description ? (
        <p className="max-w-4xl text-base text-slate-600 dark:text-white/60 sm:text-lg">
          {preventOrphans(description)}
        </p>
      ) : null}
    </header>
  );
}
