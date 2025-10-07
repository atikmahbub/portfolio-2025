import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const strengths = [
  {
    title: 'End-to-End Ownership',
    description:
      'Placeholder copy: partner with teams from discovery to deployment, ensuring every technical choice ladders up to product goals.',
  },
  {
    title: 'Design Systems & DX',
    description:
      'Placeholder copy: lead component libraries, documentation, and tooling so teams ship consistently without friction.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Placeholder copy: architect resilient services, observability, and automation pipelines ready for real-world traffic.',
  },
];

const metrics = [
  { label: 'Shipped Products', value: '12+' },
  { label: 'Placeholder Teams', value: '8' },
  { label: 'Zones of Expertise', value: 'Full-Stack' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="About"
          title="Shaping polished experiences with technical empathy."
          description="Real story coming soon. For now, imagine a curious engineer who prioritizes collaboration, clarity, and momentum."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="flex flex-col gap-8 text-base text-white/70 sm:text-lg">
            <Reveal>
              <p>
                Placeholder paragraph: I love untangling complex product problems and translating them into clean,
                scalable solutions. My workflow balances fast iteration with thoughtful architecture, so teams can move
                quickly without sacrificing long-term health.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Whether it&apos;s refining design systems, optimizing data flows, or championing developer experience, I
                enjoy collaborating closely with designers, PMs, and engineers to ship meaningful work.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Let&apos;s plug your actual narrative here soon—mission, impact, values, and the sparks that motivate
                your next opportunity.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.05}>
                  <div className="glow-card flex flex-col items-center gap-3 p-6 text-center text-white/80 transition-colors hover:text-white">
                    <span className="text-4xl font-semibold text-white">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {metric.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4">
              {strengths.map((strength, index) => (
                <Reveal key={strength.title} delay={index * 0.05}>
                  <div className="glow-card group flex flex-col gap-3 p-6 text-white/75 transition-colors hover:text-white">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/45 group-hover:text-white/60">
                      Focus {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-white/70 group-hover:text-white/80">
                      {strength.description}
                    </p>
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
