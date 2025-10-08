import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const phases = [
  {
    stage: "01 — Discover",
    title: "Align on the next best move.",
    copy: "I start by understanding the full picture—auditing existing systems, asking the right questions, and clarifying constraints. This phase aligns product vision with technical reality, ensuring every next step is deliberate and strategic.",
  },
  {
    stage: "02 — Design",
    title: "Prototype, validate, and architect.",
    copy: "Collaborating closely with design and product, I translate ideas into tangible solutions. I choose the right tools, prototype early to de-risk assumptions, and design systems that are scalable, maintainable, and developer-friendly—whether it’s front-end architecture, API contracts, or AI agent flows.",
  },
  {
    stage: "03 — Deliver",
    title: "Ship with confidence, iterate with data.",
    copy: "I build with care and precision, automating quality checks through CI/CD pipelines and observability layers. Once shipped, I track performance, gather real-world data, and use it to inform the next iteration—ensuring products continuously evolve with clarity and speed.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable cadence for shipping meaningful work."
          description="This is how I navigate ambiguity, align teams, and deliver high-quality products—from concept to production and beyond."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal key={phase.stage} delay={index * 0.07}>
              <div className="glow-card group flex h-full flex-col gap-4 p-8 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-700 dark:text-white/45 dark:group-hover:text-white/60">
                  {phase.stage}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-800 dark:text-white/70 dark:group-hover:text-white/80">
                  {phase.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
