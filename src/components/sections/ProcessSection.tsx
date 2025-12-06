import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

const phases = [
  {
    stage: "01 — Discover",
    title: "Align on the next best move.",
    copy: "Audit the current state, ask blunt questions, and agree on what success looks like before writing code.",
  },
  {
    stage: "02 — Design",
    title: "Prototype, validate, and architect.",
    copy: "Prototype just enough, pick the right tools, and draft contracts so everyone knows how the system will work.",
  },
  {
    stage: "03 — Deliver",
    title: "Ship with confidence, iterate with data.",
    copy: "Build carefully, lean on CI + telemetry, launch, and adjust using real-world signals.",
  },
];

const processSignals = [
  {
    label: "Discovery → Delivery",
    value: "3-6 weeks",
    detail: "Typical loop from kickoff to first launch.",
  },
  {
    label: "Feedback loops",
    value: "Daily async notes",
    detail: "Docs, Looms, and dashboards keep everyone aligned.",
  },
  {
    label: "Confidence",
    value: "Telemetry + QA",
    detail: "Observability + CI guardrails baked in from day one.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable cadence for shipping meaningful work."
          description="A simple loop I lean on to understand problems, prototype, and ship with confidence."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal key={phase.stage} delay={index * 0.07}>
              <div className="glow-card group flex h-full flex-col gap-4 border border-transparent p-8 text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-200 hover:text-slate-900 dark:text-white/75 dark:hover:border-white/10 dark:hover:text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-700 dark:text-white/45 dark:group-hover:text-white/60">
                  {phase.stage}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {preventOrphans(phase.title)}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-800 dark:text-white/70 dark:group-hover:text-white/80">
                  {preventOrphans(phase.copy)}
                </p>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/50">
                  Outcome: predictable greenlights
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="glow-card grid gap-4 p-8 text-slate-700 dark:text-white/80">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                What working together feels like
              </p>
              <span className="rounded-full border border-slate-200/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-white/15 dark:text-white/70">
                Builder / Partner
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {processSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 text-left text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-white/50">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {signal.value}
                  </p>
                  <p className="mt-1 text-sm">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
