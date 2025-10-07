'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  once = true,
  className,
}: RevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (once && hasAnimatedRef.current) return;

          hasAnimatedRef.current = true;
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            delay,
            duration: 1,
            ease: 'power3.out',
          });

          if (once) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, y, once]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
