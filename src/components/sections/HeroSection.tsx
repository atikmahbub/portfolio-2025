"use client";

import TextType from "@/components/TextType";
import Reveal from "@/components/Reveal";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const highlightPills = [
  "Full-Stack Problem Solver",
  "Systems Design Enthusiast",
  "Product-Focused Collaborator",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center px-6 pb-28 pt-32 sm:pt-36 lg:pt-40"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Software Engineer
            </span>
            <span className="rounded-full border border-[#6EE7B7]/30 px-3 py-1 text-xs font-medium text-[#6EE7B7]/80">
              Remote-Friendly • Open to Collaborations
            </span>
          </div>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="flex flex-col gap-10">
            <Reveal>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Designing future-proof products with clean code and curious
                mindsets.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <TextType
                as="p"
                className="max-w-3xl text-2xl font-medium leading-snug text-[#A9A3FF] sm:text-3xl"
                text={[
                  "Building delightful, resilient experiences across the stack.",
                  "Transforming product requirements into scalable solutions.",
                  "Championing developer experience and thoughtful architecture.",
                ]}
                typingSpeed={55}
                deletingSpeed={30}
                pauseDuration={2100}
                showCursor
                cursorCharacter="▍"
                cursorBlinkDuration={0.45}
                textColors={["#A9A3FF", "#6EE7B7", "#7DD3FC"]}
                variableSpeed={{ min: 40, max: 80 }}
                loop
              />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
                From early ideas to production launches, I craft dependable
                systems, design intuitive interfaces, and guide teams through
                smooth delivery. All copy is placeholder for now—we&apos;ll plug
                in the real story next.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#5227FF] px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(82,39,255,0.55)] transition-transform hover:-translate-y-1 hover:bg-[#5f3aff]"
                >
                  Explore Placeholder Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition-all hover:-translate-y-1 hover:border-white/50 hover:text-white"
                >
                  Let&apos;s Build Something
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="w-full justify-self-center lg:justify-self-stretch"
          >
            <div className="glow-card isolate w-full p-8">
              <div className="flex h-full flex-col gap-6 text-white/80">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Quick Snapshot
                  </span>
                  <p className="text-lg">
                    Pragmatic engineer shaping reliable web apps. Passionate
                    about design systems, performance, and developer tooling.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-white/60">
                  {highlightPills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="grid gap-3 text-white/70">
                  <a
                    href="mailto:placeholder@domain.dev"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        Email
                      </p>
                      <p className="text-sm font-medium text-white">
                        placeholder@domain.dev
                      </p>
                    </div>
                    <Mail className="h-4 w-4 text-white/50 transition group-hover:text-white" />
                  </a>
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Elsewhere
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/placeholder"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
                        aria-label="Placeholder GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="https://linkedin.com/in/placeholder"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/40 hover:text-white"
                        aria-label="Placeholder LinkedIn"
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
