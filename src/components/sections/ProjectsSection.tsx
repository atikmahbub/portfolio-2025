"use client";

import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { preventOrphans } from "@/lib/utils";

type Project = {
  name: string;
  type: string;
  summary: string;
  outcome?: string;
  stack: string[];
  cta?: {
    label: string;
    href?: string;
  };
};

const projectMetrics = [
  {
    label: "Launches",
    value: "20+",
    description: "Net-new products, design systems, and internal tools",
  },
  {
    label: "Stacks",
    value: "Web, AI, Web3",
    description: "Pairing React/Next.js with data, AI, or EVM layers",
  },
  {
    label: "Engagement",
    value: "0 → 1 & Scale",
    description: "Comfortable jumping into greenfield or established teams",
  },
];

const projects: Project[] = [
  {
    name: "Tracking Wallet",
    type: "Full-stack Fintech Web App",
    summary:
      "Problem: Users lacked real-time visibility into their finances. Role: Architected a full-stack, real-time finance tracker.",
    outcome:
      "Outcome: Scaled to handle thousands of daily transactions with 99.9% uptime, reducing average database query times to under 50ms.",
    stack: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "Auth0",
      "MySQL",
      "Netlify",
      "Railway",
    ],
    cta: {
      label: "See Implementation →",
      href: "https://tracking-wallet.netlify.app/",
    },
  },
  {
    name: "Omni Intelligence",
    type: "AI + Operations Platform",
    summary:
      "Problem: Fragmented UIs and delayed deployments stalled ops teams. Role: Led development of a modular React component system.",
    outcome:
      "Outcome: Accelerated cross-team feature delivery by 40%, dropping deployment friction to near zero for 5+ engineering pods.",
    stack: ["React", "Docusaurus", "Redux", "Docker", "TypeScript"],
    cta: {
      label: "View Case Study →",
      href: "https://omniintelligence.online/",
    },
  },
  {
    name: "1Shot Prompt Builder",
    type: "★ Featured Case Study",
    summary:
      "Problem: Orchestrating fragmented smart contracts manually wasted hundreds of developer hours. Role: Led end-to-end React/Next.js build with recursive ABI parsers.",
    outcome:
      "Outcome: Reclaimed 30+ hours/week per protocol team by templatizing complex EVM workflows into reliable, robust building blocks.",
    stack: [
      "React",
      "Next.js",
      "Solidity",
      "Ethers.js",
      "tRPC",
      "TypeScript",
      "OpenAI",
    ],
    cta: {
      label: "Read Full Case Study →",
      href: "https://1shotapi.com/",
    },
  },
  {
    name: "Smart Retina",
    type: "Medical AI Screening Platform",
    summary:
      "Problem: Manual clinical reviews created a severe diagnostic backlog. Role: Engineered scalable React UIs backed by secure Django REST APIs.",
    outcome:
      "Outcome: Reduced clinical review time by over 60%, serving thousands of AI-driven inferences with strict data security.",
    stack: ["React", "Django REST", "Redux", "Docker", "Azure"],
    cta: {
      label: "View Architecture →",
      href: "#",
    },
  },
  {
    name: "Glu",
    type: "Education Platform",
    summary:
      "Problem: Disconnected communication pipelines fractured parent-teacher alignment. Role: Built centralized web dashboards and scalable message routing.",
    outcome:
      "Outcome: Processed 100k+ weekly events reliably, centralizing disjointed communications across 20+ school districts seamlessly.",
    stack: ["React", "Node.js", "TypeScript", "Docker"],
  },
  {
    name: "Istanbul Medic Agent",
    type: "AI Agentic Platform (In Progress)",
    summary:
      "Problem: Healthcare support staff overwhelmed by routine inquiries. Role: Architecting LLM-driven agents using Next.js 15 and robust RAG pipelines.",
    outcome:
      "Outcome: Targeting a 50% deflection rate in routine queries, freeing up human agents for mission-critical patient care.",
    stack: ["Next.js 15", "Tailwind", "OpenAI SDK", "Vectors"],
    cta: {
      label: "View Prototype →",
      href: "https://istanbulmedic.com/en",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Product work across fintech, AI, and healthcare."
          description="A handful of builds I’ve helped bring to life, from finance tools to AI agents."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {projectMetrics.map((metric) => (
            <div
              key={metric.label}
              className="glow-card px-5 py-4 text-left text-slate-600 transition-colors hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-white/40">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-1 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className={`glow-card group flex h-full flex-col gap-6 p-7 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white ${project.type.includes("Featured") ? "border-indigo-500/30 bg-indigo-500/[0.02]" : ""}`}>
              <span className={`self-start rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.3em] shadow-sm ${project.type.includes("Featured") ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300" : "border-slate-200 bg-white/85 text-slate-600 dark:border-[#7DD3FC]/30 dark:bg-[#7DD3FC]/10 dark:text-[#7DD3FC]"}`}>
                {project.type}
              </span>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {preventOrphans(project.name)}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-800 dark:text-white/70 dark:group-hover:text-white/80">
                  {preventOrphans(project.summary)}
                </p>
                {project.outcome ? (
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {preventOrphans(project.outcome)}
                  </p>
                ) : null}
              </div>
              <div className="mt-auto space-y-5">
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-white/60">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-medium uppercase tracking-widest text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.cta?.label &&
                  (project.cta.href ? (
                    <a
                      href={project.cta.href}
                      className={`inline-flex items-center gap-2 text-sm font-bold transition-all px-4 py-2 rounded-full ${
                        project.type.includes("Featured")
                          ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                          : "text-indigo-500 hover:text-slate-900 dark:text-indigo-400 dark:hover:text-white border border-transparent hover:border-slate-200/50 dark:hover:border-white/10"
                      }`}
                      target="_blank"
                    >
                      {project.cta.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-white/50">
                      {project.cta.label}
                    </span>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
