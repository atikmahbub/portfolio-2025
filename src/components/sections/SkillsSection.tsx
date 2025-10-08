import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const skillBuckets = [
  {
    title: "Product-Led Craft",
    description:
      "Bringing architecture, UX, and strategy together to ship meaningful products.",
    items: [
      "UX Collaboration",
      "Roadmap Co-Creation",
      "Design Systems",
      "Analytics & Feedback Loops",
      "AI-Driven Product Thinking",
      "Web3-Integrated Experiences",
    ],
  },
  {
    title: "Engineering Stack",
    description:
      "The tools and technologies I rely on to build scalable, modern, and intelligent systems.",
    items: [
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Node & Edge APIs",
      "Express.js",
      "PostgreSQL / Prisma",
      "Tailwind CSS",
      "tRPC",
      "AI & Agentic Systems",
      "Web3 / Solidity",
    ],
  },
  {
    title: "Ways of Working",
    description:
      "How I guide teams, processes, and systems across the entire product lifecycle—ensuring clarity, velocity, and resilience.",
    items: [
      "Technical Leadership",
      "Mentorship",
      "CI/CD Pipelines",
      "Observability & Telemetry",
      "Performance Budgets",
      "Documentation & Standards",
      "AI + Web3 Governance",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where engineering meets product vision."
          description="Aligning clean architecture, UX, and strategy to ship meaningful products."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillBuckets.map((bucket, index) => (
            <Reveal key={bucket.title} delay={index * 0.05}>
              <div className="glow-card flex h-full flex-col gap-4 p-6 text-white/75 transition-colors hover:text-white">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Discipline
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {bucket.title}
                  </h3>
                  <p className="text-sm text-white/65">{bucket.description}</p>
                </div>
                <ul className="mt-auto space-y-3 text-sm">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#A9A3FF] to-[#7DD3FC]" />
                      <span className="font-semibold text-white/90">
                        {item}
                      </span>
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
