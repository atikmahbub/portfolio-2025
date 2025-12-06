import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

const focusAreas = [
  {
    number: "01",
    label: "End-to-End Ownership",
    headline: "Own the journey from discovery to launch.",
    description:
      "Stay close to the problem, write the plan, build the thing, and keep watching it once it ships.",
  },
  {
    number: "02",
    label: "Design Systems & DX",
    headline: "Ship consistently, confidently, and fast.",
    description:
      "Build components, docs, and tooling that make it easy for every teammate to do their best work.",
  },
  {
    number: "03",
    label: "Scalable Architecture",
    headline: "Engineer clarity that scales with the roadmap.",
    description:
      "Lay down services, automation, and monitoring that handle real traffic without surprises.",
  },
];

const quickStats = [
  "20+ shipped products",
  "10+ cross-functional teams",
  "Full-Stack zones of expertise",
];

const principles = [
  {
    title: "Clarity beats volume.",
    description: "If everyone understands the plan, the build stays calm and honest.",
  },
  {
    title: "Systems over silver bullets.",
    description: "Great teams rely on habits—tests, monitoring, and docs—not heroics.",
  },
  {
    title: "Momentum with care.",
    description: "Move fast, check in often, and keep people in the loop.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="About"
          title="Shaping polished experiences with technical empathy."
          description="Full-stack engineer who mixes product sense with reliable code and kind communication."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="flex flex-col gap-8 text-base text-slate-600 sm:text-lg dark:text-white/70">
            <Reveal>
              <p>
                {preventOrphans(
                  "I like taking messy product ideas and turning them into simple, sturdy shipping plans. The goal is always the same: move fast without leaving a trail of stress behind.",
                )}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                {preventOrphans(
                  "Across 6+ years I've paired with founders, designers, and engineers to build web apps, systems, and design libraries. Clean code, good docs, and honest check-ins help everyone stay in sync.",
                )}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                {preventOrphans(
                  "I thrive where product thinking and engineering depth meet—keeping teams confident while features make their way to production.",
                )}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10">
            <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />

            <Reveal>
              <div className="glow-card flex flex-col gap-4 p-6 text-slate-700 dark:text-white/80">
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-white/45">
                  🚀 Quick Stats
                </span>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-white/70">
                  {quickStats.map((stat) => (
                    <li
                      key={stat}
                      className="flex items-center gap-3 rounded-full bg-white/80 px-3 py-2 text-slate-700 shadow-sm dark:bg-white/5 dark:text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/60" />
                      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-white/80">
                        {stat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />

            <Reveal delay={0.05}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600 backdrop-blur-sm shadow-[0_18px_38px_-22px_rgba(79,70,229,0.35)] dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:shadow-[0_18px_38px_-22px_rgba(59,130,246,0.45)]">
                  <span className="grid h-2 w-2 place-items-center">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4]" />
                  </span>
                  🧭 Focus Areas
                </span>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/40" />
              </div>
            </Reveal>

            <div className="grid gap-4">
              {focusAreas.map((area, index) => (
                <Reveal key={area.label} delay={0.1 + index * 0.05}>
                  <div className="glow-card group flex flex-col gap-4 p-6 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-slate-900 dark:text-white/80 dark:hover:text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.35em] text-slate-500 group-hover:text-slate-700 dark:text-white/45 dark:group-hover:text-white/60">
                        {area.number} — Focus
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 transition dark:border-white/10 dark:bg-white/5 dark:text-white/60 group-hover:border-slate-300 group-hover:text-slate-900 dark:group-hover:border-white/40 dark:group-hover:text-white/80">
                        {area.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {preventOrphans(area.headline)}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-800 dark:text-white/75 dark:group-hover:text-white/90">
                      {preventOrphans(area.description)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="glow-card grid gap-4 p-6 text-slate-700 dark:text-white/80">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-white/50">
                    Working Principles
                  </p>
                  <span className="rounded-full border border-slate-200/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-white/20 dark:text-white/80">
                    Built with teams
                  </span>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm leading-relaxed text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      <p className="text-base font-semibold text-slate-900 dark:text-white">
                        {preventOrphans(principle.title)}
                      </p>
                      <p className="mt-2 text-sm">
                        {preventOrphans(principle.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
