import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

const experiences = [
  {
    timeframe: "Nov 2024 — Present",
    title: "Senior Product Engineer",
    company: "UXLY Software · Full-time",
    location: "United States · Remote",
    focus:
      "Scaling a data-heavy SaaS platform by driving frontend architecture and enforcing production reliability across remote engineering pods.",
    highlights: [
      "Problem: Complex data visualizations caused UI blocking. Action: Re-architected rendering pipelines, dropping load times by 40% for 100k+ daily queries.",
      "Problem: Frequent regressions degraded user trust. Action: Integrated telemetry and automated QA, reducing bug pipelines by 30% and saving 20+ dev hours weekly.",
    ],
  },
  {
    timeframe: "Jul 2022 — Oct 2024",
    title: "Senior Software Engineer",
    company: "Snickerdoodle Labs · Full-time",
    location: "United States · Remote",
    focus:
      "Led end-to-end development for a Web3 loyalty platform, collaborating directly with product leads to ensure scalable, privacy-first business implementations.",
    highlights: [
      "Problem: Tech debt stalled feature delivery. Action: Built a robust reusable component system, accelerating development velocity by 2x for the entire team.",
      "Problem: Unstable wallet connections impacting user trust. Action: Engineered resilient authentication flows, reliably handling 50k+ daily on-chain queries.",
    ],
  },
  {
    timeframe: "Feb 2022 — Jun 2022",
    title: "Software Engineer",
    company: "Hypernet Labs · Full-time",
    location: "California, United States · Remote",
    focus:
      "Delivered high-performance React frontends integrating complex decentralized APIs within aggressive go-to-market timelines.",
    highlights: [
      "Problem: Strict shipping deadline for compute dashboard. Action: Engineered highly performant data flows serving thousands of node operators seamlessly.",
      "Problem: API mismatches causing production errors. Action: Enforced strict TypeScript contracts globally, eliminating data shape bugs pre-deployment.",
    ],
  },
  {
    timeframe: "Sep 2021 — May 2022",
    title: "Product Engineer",
    company: "Yami · Freelance",
    location: "India · Remote",
    focus:
      "Developed robust backend services and modular micro-frontends to accelerate time-to-market for enterprise fintech clients.",
    highlights: [
      "Problem: Monolithic frontend architecture caused severe deployment friction. Action: Designed plug-and-play micro-frontends to cut release cycles by 50%.",
      "Problem: Unclear async communication stalling progress. Action: Established tight scope-review loops, closing 100% of sprint commitments on time.",
    ],
  },
  {
    timeframe: "Feb 2021 — Jul 2021",
    title: "React Developer",
    company: "Antino · Freelance",
    location: "India · Remote",
    focus:
      "Engineered production-ready React prototypes, translating complex business logic into scalable foundational systems.",
    highlights: [
      "Problem: Inconsistent UI deployments across teams. Action: Built a modular, pixel-perfect reusable component library driving universal adoption.",
      "Problem: Lack of standardized code quality. Action: Introduced strict linting/testing pipelines, reducing code review cycles by 25%.",
    ],
  },
  {
    timeframe: "Nov 2019 — Jan 2021",
    title: "Software Engineer",
    company: "Smart Retina · Full-time",
    location: "Gulshan, Dhaka, Bangladesh",
    focus:
      "Built and deployed scalable Django REST APIs and immersive React interfaces for an AI-driven, high-compliance eye-care platform.",
    highlights: [
      "Problem: Clinicians didn't understand raw AI outputs. Action: Designed intuitive UI states for AI predictions, boosting clinical adoption across multiple pilot hospitals.",
      "Problem: Vulnerable data pipelines. Action: Secured patient data flow between React clients and APIs, ensuring full medical data compliance.",
    ],
  },
];

const focusTiles = [
  {
    title: "Concept to Production Ownership",
    description:
      "Driving initiatives from the first line of code to successful launches—ensuring every decision ladders up to business goals.",
  },
  {
    title: "Design System Implementation",
    description:
      "Leading the creation of component libraries, accessibility standards, and documentation that empower teams to ship fast and consistently.",
  },
  {
    title: "API Design and Integration",
    description:
      "Designing clear, reliable API contracts and integrating complex systems with a focus on maintainability and developer experience.",
  },
  {
    title: "Continuous Delivery Pipelines",
    description:
      "Automating build, test, and deployment workflows to increase release velocity and reduce human error.",
  },
  {
    title: "Observability and Telemetry",
    description:
      "Instrumenting systems with logging, metrics, and monitoring to catch issues early and maintain production confidence.",
  },
  {
    title: "Technical Leadership & Mentorship",
    description:
      "Guiding teams through architecture decisions, sharing knowledge, and helping engineers grow with clarity and empathy.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Experience"
          title="Trusted to guide roadmap-critical initiatives."
          description="A look at the teams I've helped and the kind of work I lead day to day."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.timeframe} delay={index * 0.05}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-4 w-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] shadow-[0_0_0_6px_rgba(99,102,241,0.2)] dark:shadow-[0_0_0_6px_rgba(125,211,252,0.25)]" />
                    {index !== experiences.length - 1 && (
                      <span className="mt-1 h-full w-px bg-slate-200 dark:bg-white/10" />
                    )}
                  </div>
                  <article className="glow-card flex flex-1 flex-col gap-4 p-6 text-slate-700 dark:text-white">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-sm font-semibold text-slate-700 shadow-sm dark:border-[#7DD3FC]/30 dark:bg-[#7DD3FC]/10 dark:text-[#7DD3FC]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                          {preventOrphans(experience.timeframe)}
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {preventOrphans(experience.title)}
                        </h3>
                        <p className="text-sm text-indigo-500 dark:text-[#A9A3FF]">
                          {preventOrphans(experience.company)}
                        </p>
                        {experience.location && (
                          <p className="text-xs text-slate-500 dark:text-white/50">
                            {preventOrphans(experience.location)}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/75">
                      {preventOrphans(experience.focus)}
                    </p>
                    {experience.highlights ? (
                      <ul className="grid gap-2 text-sm text-slate-600 dark:text-white/75">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 rounded-full bg-slate-400 dark:bg-white/60" />
                            <span>{preventOrphans(highlight)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 lg:pl-6">
            <Reveal>
              <div className="glow-card p-6 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
                  Focus Areas
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                  {preventOrphans("Collaboration that scales with your ambitions.")}
                </h3>
                <p className="mt-4 text-sm text-slate-600 dark:text-white/65">
                  {preventOrphans(
                    "I thrive in spaces where strong engineering practices meet product vision. These are the areas where I bring clarity, structure, and impact to teams and products.",
                  )}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusTiles.map((tile, index) => (
                <Reveal key={tile.title} delay={index * 0.05}>
                  <div className="glow-card flex h-full flex-col gap-3 px-5 py-4 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-slate-900 dark:text-white/80 dark:hover:text-white">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-sm font-semibold text-slate-700 shadow-sm dark:border-[#7DD3FC]/30 dark:bg-[#7DD3FC]/10 dark:text-[#7DD3FC]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {preventOrphans(tile.title)}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 sm:text-sm dark:text-white/70">
                      {preventOrphans(tile.description)}
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
