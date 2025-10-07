import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Project Nebula',
    summary:
      'Placeholder case study: describe the product vision, the constraints, and the measurable outcomes your engineering delivered.',
    stack: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL'],
  },
  {
    name: 'Aurora Design System',
    summary:
      'Placeholder highlight: modular component library, tooling, and accessibility standards that elevated shipping velocity.',
    stack: ['Storybook', 'Tailwind', 'Playwright', 'GSAP'],
  },
  {
    name: 'Lighthouse Analytics',
    summary:
      'Placeholder story: orchestrated data pipelines, real-time dashboards, and alerting strategies for product teams.',
    stack: ['Node.js', 'Prisma', 'Kafka', 'Supabase'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Placeholder case studies waiting for your finishing touches."
          description="Swap in real projects, metrics, and visuals when ready. Each card links to a deeper story about the impact you led."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <article className="glow-card group flex h-full flex-col gap-6 p-7 text-white/80">
                <span className="self-start rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#7DD3FC]">
                  Coming Soon
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-white/70 group-hover:text-white/80">{project.summary}</p>
                </div>
                <div className="mt-auto space-y-5">
                  <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A9A3FF] transition hover:text-white"
                  >
                    View Placeholder Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
