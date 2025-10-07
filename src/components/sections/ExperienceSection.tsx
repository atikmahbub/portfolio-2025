import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const experiences = [
  {
    timeframe: '2024 — Present',
    title: 'Placeholder Staff Engineer',
    company: 'Future Startup',
    focus:
      'Leading cross-functional squads, installing architecture guardrails, and launching a greenfield product to market.',
  },
  {
    timeframe: '2022 — 2024',
    title: 'Placeholder Senior Engineer',
    company: 'Scale-Up Co.',
    focus:
      'Scaled monorepo and platform tooling, mentored engineers, and partnered with design to deliver flagship experiences.',
  },
  {
    timeframe: '2019 — 2022',
    title: 'Placeholder Full-Stack Developer',
    company: 'Product Studio',
    focus:
      'Shipped end-to-end features, improved performance budgets, and refined developer workflows across multiple teams.',
  },
];

const workflows = [
  'Concept to production ownership',
  'Design system implementation',
  'API design and integration',
  'Continuous delivery pipelines',
  'Observability and telemetry',
  'Technical leadership & mentorship',
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Experience"
          title="Trusted to guide roadmap-critical initiatives."
          description="Timeline is placeholder—swap with your actual roles, impact statements, and quantifiable wins when ready."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.timeframe} delay={index * 0.05}>
                <article className="glow-card flex flex-col gap-4 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 text-sm font-semibold text-[#7DD3FC]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          {experience.timeframe}
                        </p>
                        <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                        <p className="text-sm text-[#A9A3FF]">{experience.company}</p>
                      </div>
                    </div>
                  <p className="text-sm text-white/75">{experience.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 lg:pl-6">
            <Reveal>
              <div className="glow-card p-6 text-white/80 transition-colors hover:text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Placeholder Focus Areas
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Collaboration that scales with your ambitions.
                </h3>
                <p className="mt-4 text-sm text-white/65">
                  Drop in your working style, leadership approach, and technical strengths. These tiles outline the type
                  of impact you bring to teams and products.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {workflows.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="glow-card flex items-center gap-3 px-5 py-4 text-sm text-white/75">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 text-[#7DD3FC]">
                      •
                    </span>
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
