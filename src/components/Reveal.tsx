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

    // Use a context for better cleanup
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(element, { opacity: 0, y, visibility: 'hidden' });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (once && hasAnimatedRef.current) return;

              hasAnimatedRef.current = true;
              gsap.to(element, {
                opacity: 1,
                y: 0,
                visibility: 'visible',
                delay,
                duration: 0.6, // Slightly faster for responsiveness
                ease: 'power2.out',
                overwrite: 'auto'
              });

              if (once) observer.unobserve(element);
            }
          });
        },
        { 
          threshold: 0.01, // Even more aggressive
          rootMargin: '100px 0px 100px 0px' // Start reveals much earlier
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, wrapperRef);

    return () => ctx.revert();
  }, [delay, y, once]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
