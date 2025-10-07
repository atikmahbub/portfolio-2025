'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
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
              ease: 'power3.out',
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
      className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
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
        <p className="max-w-2xl text-base text-white/60 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
