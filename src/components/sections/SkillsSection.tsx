import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

const skillBuckets = [
  {
    title: "Product-Led Craft",
    description:
      "Tie architecture, UX, and roadmap goals together so launches feel smooth.",
    spotlight: "From kickoff chats to QA sign-off.",
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
      "Tools I lean on to build modern, scalable systems.",
    spotlight: "TypeScript across web, mobile, and services.",
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
      "Simple habits that keep remote teams aligned from start to finish.",
    spotlight: "Remote rituals that keep everyone in sync.",
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
    <section id="skills" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where engineering meets product vision."
          description="How I blend product thinking with dependable engineering habits."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillBuckets.map((bucket, index) => (
            <Reveal key={bucket.title} delay={index * 0.05}>
              <div className="glow-card flex h-full flex-col gap-4 p-6 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
                    Discipline
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {preventOrphans(bucket.title)}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/65">
                    {preventOrphans(bucket.description)}
                  </p>
                  {bucket.spotlight ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-white/50">
                      {preventOrphans(bucket.spotlight)}
                    </p>
                  ) : null}
                </div>
                <ul className="mt-auto space-y-3 text-sm">
                  {bucket.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#A9A3FF] to-[#7DD3FC]" />
                      <span className="font-semibold text-slate-700 dark:text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#projects"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
                >
                  See examples →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
