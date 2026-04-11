"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { preventOrphans } from "@/lib/utils";

const heroEmail = "atikmahbub100@gmail.com";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.21, 1, 0.36, 1] }
};

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveredOrbit, setIsHoveredOrbit] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(heroEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-4 sm:px-6 pb-12 pt-4 lg:pt-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between relative z-10">
        
        {/* Left Column: Typography & Content */}
        <div className="flex w-full lg:w-[50%] flex-col items-center lg:items-start gap-6 text-center lg:text-left z-10 shrink-0">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-white/90">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
              Software Engineer
            </span>
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-[#D1FAE5]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Remote-Friendly
            </span>
          </div>

          <motion.div {...fadeInUp} className="flex flex-col gap-3 relative">
            <div className="absolute -inset-10 bg-indigo-200/20 via-cyan-100/10 to-transparent dark:bg-fuchsia-500/5 blur-[80px] -z-10" />
            <h1 className="text-5xl font-light leading-[1.1] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              <span className="block font-semibold tracking-wide">BUILDING</span>
              <span className="block text-slate-500 dark:text-white/60">future-proof products</span>
            </h1>
          </motion.div>

          <p className="max-w-xl text-lg leading-relaxed text-[#050816] dark:text-white/70 sm:text-xl">
            {preventOrphans(
              "Hey 👋 I'm Atik. For the past 6+ years I've been helping teams ship stable web apps, design systems, and AI/Web3 features. I enjoy taking messy ideas, sorting them out with product and design, and then building calm, production-ready solutions."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
            <a
              href="#projects"
              className="glass-panel-deep inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-800 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/5 shadow-xl"
            >
              Explore Work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-slate-200/50 pt-6 dark:border-white/10 w-full">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative flex items-center justify-center sm:justify-start gap-3 text-left focus-visible:outline-none"
              aria-label="Copy Atik Mahbub's email"
            >
              <span className="glass-panel inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-700 transition duration-300 group-hover:bg-slate-100 dark:text-white/80 dark:group-hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </span>
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-white/40">
                  {copiedEmail ? "Copied!" : "Drop a line"}
                </p>
                <p className="text-sm font-semibold text-slate-800 transition group-hover:text-indigo-600 dark:text-white/90 dark:group-hover:text-fuchsia-400">
                  {heroEmail}
                </p>
              </div>
            </button>
            
            <div className="hidden sm:block h-8 w-px bg-slate-200/50 dark:bg-white/10" />

            <div className="flex justify-center gap-3">
              <a
                href="https://github.com/atikmahbub"
                className="glass-panel inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-600 transition duration-300 hover:bg-slate-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="GitHub"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/atik-mahbub/"
                className="glass-panel inline-flex h-12 w-12 items-center justify-center rounded-full text-slate-600 transition duration-300 hover:bg-slate-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div 
          className="relative flex hidden w-full items-center justify-center lg:flex lg:w-[50%] lg:min-h-[500px] group/orbit z-0"
          onMouseEnter={() => setIsHoveredOrbit(true)}
          onMouseLeave={() => setIsHoveredOrbit(false)}
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {/* Ambient Glow behind Orbit to separate from Background */}
          <div className="absolute inset-0 bg-indigo-500/5 dark:bg-[#4D1936]/10 blur-[100px] -z-10 rounded-full scale-110" />
          
          <div className="relative aspect-square w-full max-w-[450px]">
            {/* Center Node */}
            <div className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400 dark:bg-white/40 transition-all duration-700 ${isHoveredOrbit ? 'dark:bg-white/90 dark:shadow-[0_0_20px_rgba(255,255,255,0.7)] scale-150' : ''}`} />
            
            {/* Outer Orbit */}
            <div className="absolute inset-0 [transform:rotateX(60deg)_rotateY(20deg)]">
              <div className="w-full h-full rounded-full border border-slate-400/50 dark:border-white/[0.15] transition-colors duration-700 group-hover/orbit:border-slate-500/60 group-hover/orbit:dark:border-white/[0.25] animate-[spin_45s_linear_infinite]">
                <div className={`absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] dark:bg-white/80 dark:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500 ${isHoveredOrbit ? 'dark:bg-white dark:shadow-[0_0_20px_rgba(255,255,255,1)] scale-150' : ''}`} />
              </div>
            </div>
            
            {/* Mid Orbit */}
            <div className="absolute inset-[15%] [transform:rotateX(40deg)_rotateY(-30deg)] blur-[0.5px]">
              <div className="w-full h-full rounded-full border border-dashed border-slate-400/30 dark:border-white/[0.08] transition-colors duration-700 group-hover/orbit:border-slate-500/50 group-hover/orbit:dark:border-white/[0.2] animate-[spin_55s_linear_infinite]" style={{ animationDirection: "reverse" }}>
                <div className={`absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] dark:bg-fuchsia-400/90 dark:shadow-[0_0_10px_rgba(217,70,239,0.5)] transition-all duration-500 ${isHoveredOrbit ? 'dark:bg-fuchsia-300 dark:shadow-[0_0_15px_rgba(217,70,239,1)] scale-150' : ''}`} />
              </div>
            </div>
            
            {/* Inner Orbit */}
            <div className="absolute inset-[30%] [transform:rotateX(70deg)_rotateY(10deg)]">
              <div className="w-full h-full rounded-full border border-slate-400/60 dark:border-white/[0.15] transition-colors duration-700 group-hover/orbit:border-slate-500/70 group-hover/orbit:dark:border-white/[0.25] animate-[spin_35s_linear_infinite]">
                <div className={`absolute right-0 top-1/2 h-1 w-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] dark:bg-orange-400/90 dark:shadow-[0_0_10px_rgba(251,146,60,0.5)] transition-all duration-500 ${isHoveredOrbit ? 'dark:bg-orange-300 dark:shadow-[0_0_15px_rgba(251,146,60,1)] scale-150' : ''}`} />
              </div>
            </div>

            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `scale(${isHoveredOrbit ? 1.02 : 1})`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <div className="glass-panel absolute right-[-5%] top-[10%] rounded-md px-3 py-1.5 text-[10px] font-mono tracking-widest text-slate-500 dark:text-white/40 transition-colors group-hover/orbit:dark:text-white/70">
                → 51.11010
              </div>
              
              <div className="glass-panel absolute bottom-[5%] right-[5%] rounded-md px-3 py-1.5 text-[10px] font-mono tracking-widest text-slate-500 dark:text-white/40 transition-colors group-hover/orbit:dark:text-white/70">
                → 17.03345
              </div>
              
              <div className="absolute left-[-10%] top-[40%] -rotate-90 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-white/20 transition-colors group-hover/orbit:dark:text-white/40">
                Core Systems
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
