"use client";

import SectionHeading from "@/components/SectionHeading";
import { preventOrphans } from "@/lib/utils";

const skillBuckets = [
  {
    title: "Frontend & Product Craft",
    description:
      "Bridging the gap between design and high-performance user interfaces.",
    spotlight: "Building UIs that feel instantly responsive.",
    items: [
      "Deliver pixel-perfect, responsive UX",
      "Architect scalable, reusable design systems",
      "Optimize frontend performance at scale",
      "Integrate AI & Web3 features seamlessly",
      "Translate roadmaps into clear tech plans",
    ],
  },
  {
    title: "Backend & Systems Architecture",
    description:
      "Engineering robust foundations that handle real-world traffic reliably.",
    spotlight: "Strict TypeScript and scalable data layers.",
    items: [
      "Design APIs that scale under load",
      "Enforce strict TypeScript data contracts",
      "Model robust relational database schemas",
      "Build type-safe, resilient microservices",
      "Develop secure, production-ready smart contracts",
    ],
  },
  {
    title: "Engineering Operations",
    description:
      "Turning unpredictable development into a predictable, calm machine.",
    spotlight: "From local commit to production deployment.",
    items: [
      "Automate CI/CD for zero-downtime deployments",
      "Implement production-ready telemetry & logging",
      "Mentor teams on scalable engineering habits",
      "Establish standards that prevent regressions",
      "Write documentation that drives team adoption",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where engineering meets product vision."
          description="How I blend product thinking with dependable engineering habits."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillBuckets.map((bucket) => (
            <div key={bucket.title} className="glow-card flex h-full flex-col gap-5 p-7 text-slate-700 transition-all duration-300 hover:text-slate-900 dark:text-white/70 dark:hover:text-white opacity-85 hover:opacity-100">
              <span className="self-start rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/40">
                {bucket.title}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {preventOrphans(bucket.title)}
              </h3>
              <p className="text-sm text-slate-600 dark:text-white/65">
                {preventOrphans(bucket.description)}
              </p>
              {bucket.spotlight && (
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-400/60">
                  {preventOrphans(bucket.spotlight)}
                </p>
              )}
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
          ))}
        </div>
      </div>
    </section>
  );
}
