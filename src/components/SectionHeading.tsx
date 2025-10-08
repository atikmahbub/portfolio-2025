"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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

  return (
    <header
      id={id}
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-white/10 via-[#7DD3FC]/20 to-[#A855F7]/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_12px_30px_-15px_rgba(125,211,252,0.8)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-25px_rgba(125,211,252,0.75)]">
          {eyebrow}
        </span>
      ) : null}
      <h2
        ref={titleRef}
        className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-4xl text-base text-white/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
