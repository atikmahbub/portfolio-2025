'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  once = true,
  className,
  duration = 0.6,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1, 0.36, 1] as const, // Professional cubic-bezier ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
