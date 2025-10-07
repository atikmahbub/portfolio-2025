import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const skillBuckets = [
  {
    title: 'Product Craft',
    description: 'Placeholder: areas where engineering decisions intersect with product strategy.',
    items: ['UX Collaboration', 'Roadmap Co-Creation', 'Design Systems', 'Analytics Feedback Loops'],
  },
  {
    title: 'Engineering Stack',
    description: 'Placeholder: the technologies you reach for to ship resilient, maintainable software.',
    items: ['TypeScript', 'Next.js', 'Node & Edge APIs', 'PostgreSQL', 'Prisma', 'Tailwind', 'tRPC'],
  },
  {
    title: 'Ways of Working',
    description: 'Placeholder: how you guide teams, processes, and quality across the lifecycle.',
    items: ['Technical Leadership', 'Mentorship', 'CI/CD', 'Observability', 'Performance Budgets', 'Documentation'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="Shape the narrative around the expertise you bring."
          description="Every bullet is placeholder copy—swap with the specific tools, disciplines, and processes that define your craft."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillBuckets.map((bucket, index) => (
            <Reveal key={bucket.title} delay={index * 0.05}>
              <div className="glow-card flex h-full flex-col gap-4 p-6 text-white/75 transition-colors hover:text-white">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">Discipline</span>
                  <h3 className="text-xl font-semibold text-white">{bucket.title}</h3>
                  <p className="text-sm text-white/65">{bucket.description}</p>
                </div>
                <ul className="mt-auto space-y-2 text-sm">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#A9A3FF] to-[#7DD3FC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
