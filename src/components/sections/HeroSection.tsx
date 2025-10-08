"use client";

import Reveal from "@/components/Reveal";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const highlightPills = [
  {
    label: "FULL-STACK PROBLEM SOLVER",
    gradient:
      "from-indigo-100/70 via-indigo-200/40 to-white dark:from-[#6366F1]/25 dark:via-[#8B5CF6]/20 dark:to-transparent",
    accent: "bg-indigo-400/70 dark:bg-[#8B5CF6]",
  },
  {
    label: "DESIGN SYSTEMS ENTHUSIAST",
    gradient:
      "from-teal-100/70 via-cyan-100/50 to-white dark:from-[#14B8A6]/25 dark:via-[#22D3EE]/20 dark:to-transparent",
    accent: "bg-teal-400/70 dark:bg-[#22D3EE]",
  },
  {
    label: "PRODUCT-FOCUSED BUILDER",
    gradient:
      "from-amber-100/70 via-orange-100/50 to-white dark:from-[#F59E0B]/25 dark:via-[#F97316]/20 dark:to-transparent",
    accent: "bg-amber-400/70 dark:bg-[#F97316]",
  },
];

const heroHighlight =
  "Turning ambitious ideas into scalable, elegant, and measurable digital experiences.";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center px-6 pb-24 pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 text-center">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-gradient-to-r from-white via-sky-100/70 to-violet-100/70 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-[0_16px_45px_-25px_rgba(99,102,241,0.32)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(99,102,241,0.42)] dark:border-white/25 dark:from-white/10 dark:via-[#7DD3FC]/25 dark:to-[#A855F7]/25 dark:text-white dark:shadow-[0_12px_30px_-15px_rgba(125,211,252,0.8)] dark:hover:shadow-[0_22px_55px_-25px_rgba(125,211,252,0.75)]">
              {"{ Software Engineer }"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-gradient-to-r from-emerald-50 via-emerald-100/70 to-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-600 shadow-[0_12px_30px_-20px_rgba(16,185,129,0.45)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-28px_rgba(16,185,129,0.55)] dark:border-[#6EE7B7]/30 dark:from-[#6EE7B7]/20 dark:via-[#10B981]/20 dark:to-transparent dark:text-[#D1FAE5] dark:shadow-[0_12px_30px_-18px_rgba(16,185,129,0.85)] dark:hover:shadow-[0_22px_55px_-30px_rgba(16,185,129,0.75)]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-[#6EE7B7]" />
              Remote-Friendly
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-gradient-to-r from-amber-50 via-amber-100/70 to-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-600 shadow-[0_12px_30px_-18px_rgba(245,158,11,0.45)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-28px_rgba(245,158,11,0.55)] dark:border-[#FDE68A]/30 dark:from-[#FDE68A]/20 dark:via-[#F59E0B]/20 dark:to-transparent dark:text-[#FEF3C7] dark:shadow-[0_12px_30px_-18px_rgba(245,158,11,0.75)] dark:hover:shadow-[0_22px_55px_-30px_rgba(245,158,11,0.65)]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-400 dark:bg-[#F59E0B]" />
              {"<Open to Collaborations />"}
            </span>
          </div>
        </Reveal>

        <div className="flex w-full flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-10">
            <Reveal>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Building future-proof products with clean code and curious
                mindsets.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="gradient-aurora-text max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">
                {heroHighlight}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-white/70 sm:text-xl">
                Hey 👋 I&apos;m Atik, a full-stack engineer with 6+ years of
                experience crafting reliable web apps, design systems, and
                blockchain-integrated products. I love bringing clarity to
                complex problems and turning concepts into production-ready
                solutions — fast, thoughtfully, and with a strong sense of
                craft.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#06B6D4] px-8 py-3 text-sm font-semibold text-white shadow-[0_30px_60px_-25px_rgba(82,39,255,0.55)] ring-1 ring-white/40 transition-all hover:-translate-y-1 hover:shadow-[0_35px_75px_-25px_rgba(6,182,212,0.8)] dark:from-[#5227FF] dark:shadow-[0_30px_60px_-25px_rgba(82,39,255,0.75)] dark:ring-white/20"
                >
                  🚀 Explore My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-400 hover:text-slate-900 dark:border-white/30 dark:bg-white/5 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                >
                  🛠️ Let&apos;s Build Something
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="w-full">
            <div className="glow-card isolate w-full p-8">
              <div className="flex h-full flex-col items-center gap-6 text-slate-700 dark:text-white/80">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                    Quick Snapshot
                  </span>
                  <p className="text-lg text-slate-800 dark:text-white/90">
                    Pragmatic engineer shaping modern web experiences.
                    Passionate about scalability, developer experience, and
                    clean architecture.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-500 dark:text-white/60">
                  {highlightPills.map(({ label, gradient, accent }) => (
                    <span
                      key={label}
                      className={`group relative inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-gradient-to-r ${gradient} px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 dark:border-white/10 dark:text-white/90 dark:hover:text-white`}
                    >
                      <span
                        className={`inline-flex h-2 w-2 rounded-full ${accent} shadow-[0_0_0_6px_rgba(148,163,184,0.18)] dark:shadow-[0_0_0_6px_rgba(255,255,255,0.07)]`}
                      />
                      {label}
                      <span className="pointer-events-none absolute inset-x-6 bottom-1 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-white/40" />
                    </span>
                  ))}
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/20" />
                <div className="grid gap-3 text-slate-600 dark:text-white/70">
                  <a
                    href="mailto:atikmahbub100@gmail.com"
                    className="group relative flex w-full flex-col items-center gap-4 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 px-6 py-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_35px_75px_-35px_rgba(82,39,255,0.28)] dark:border-white/15 dark:bg-white/[0.05] dark:hover:border-white/40 dark:hover:shadow-[0_35px_75px_-30px_rgba(125,211,252,0.55)] sm:flex-row sm:items-center sm:justify-between sm:text-left"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-indigo-100/40 to-cyan-100/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/12 dark:via-[#7C3AED]/15 dark:to-[#06B6D4]/20" />
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_18px_38px_-24px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:bg-slate-100 group-hover:text-slate-900 dark:bg-white/10 dark:text-white/80 dark:group-hover:bg-white/20 dark:group-hover:text-white">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div className="relative space-y-1">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-white/40">
                        Email
                      </p>
                      <p className="text-lg font-semibold text-slate-800 dark:text-white">
                        atikmahbub100@gmail.com
                      </p>
                    </div>
                    <span className="relative hidden text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 transition group-hover:text-slate-900 dark:text-white/50 dark:group-hover:text-white sm:inline">
                      Say Hello
                    </span>
                  </a>
                  <div className="flex flex-col items-center gap-2 text-slate-500 dark:text-white/50">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/40">
                      Elsewhere
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/atikmahbub"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                        aria-label="Atik Mahbub GitHub"
                        target="_blank"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/atik-mahbub/"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                        aria-label="Atik Mahbub LinkedIn"
                        target="_blank"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
