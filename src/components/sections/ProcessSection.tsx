import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const phases = [
  {
    stage: '01 — Discover',
    title: 'Align on the next best move.',
    copy: 'Placeholder text: audit what exists, ask clarifying questions, and map technical constraints to product ambitions.',
  },
  {
    stage: '02 — Design',
    title: 'Prototype, validate, and architect.',
    copy: 'Placeholder text: pair with design, outline systems, choose the right tools, and chart a delivery plan teams can trust.',
  },
  {
    stage: '03 — Deliver',
    title: 'Ship with confidence, iterate with data.',
    copy: 'Placeholder text: implement with care, automate quality, track impact, and prepare the next iteration loop.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable cadence for shipping meaningful work."
          description="Customize these phases to reflect how you navigate ambiguity, lead teams, and deliver measured impact."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal key={phase.stage} delay={index * 0.07}>
              <div className="glow-card group flex h-full flex-col gap-4 p-8 text-white/75 transition-colors hover:text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/45 group-hover:text-white/60">
                  {phase.stage}
                </span>
                <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                <p className="text-sm text-white/70 group-hover:text-white/80">{phase.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
