import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
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
      "Built a personal finance tracker with an Express + Prisma + MySQL backend, Auth0 auth, and a Netlify + Railway monorepo.",
    outcome:
      "Early users could sort expenses and recurring payments right after launch.",
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
      label: "Live Case Study",
      href: "https://tracking-wallet.netlify.app/",
    },
  },
  {
    name: "Omni Intelligence",
    type: "AI + Operations Platform",
    summary:
      "Built modular React components plus Docusaurus docs so a shared ops dashboard stayed easy to extend.",
    outcome:
      "New teams shipped features in under two sprints by reusing the documented patterns.",
    stack: ["React", "Docusaurus", "Redux", "Docker", "TypeScript"],
    cta: {
      label: "View Case Study →",
      href: "https://omniintelligence.online/",
    },
  },
  {
    name: "Smart Retina",
    type: "Medical AI Screening Platform",
    summary:
      "Delivered React UIs and Django REST flows that let eye-care teams run AI screenings for Diabetic Retinopathy.",
    outcome:
      "Clinics spent less time on manual review thanks to instant AI second opinions.",
    stack: ["React", "Django REST", "Redux", "Docker", "Azure"],
    cta: {
      label: "View Case Study →",
      href: "#",
    },
  },
  {
    name: "1Shot Prompt Builder",
    type: "Smart Contract Prompt Orchestration Platform",
    summary:
      "Led the React + Next.js build for a Web3 prompt builder with ethers.js, recursive ABI parsing, and OpenAI-powered search.",
    outcome:
      "Protocol teams now templatize EVM workflows and share them like reusable building blocks.",
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
      label: "View Case Study →",
      href: "https://1shotapi.com/",
    },
  },
  {
    name: "Glu",
    type: "Education Platform",
    summary:
      "Built shared dashboards and messaging so schools, teachers, and families could stay aligned. Leaned on TypeScript + Docker workflows to keep releases calm.",
    outcome:
      "Multiple districts finally had one place for updates and analytics.",
    stack: ["React", "Node.js", "TypeScript", "Docker"],
  },
  {
    name: "Istanbul Medic Agent",
    type: "AI Agentic Platform (In Progress)",
    summary:
      "Designing healthcare agents that answer questions, surface RAG insights, and handle secure appointments.",
    outcome:
      "Goal: let patients get quick help while keeping clinicians in control.",
    stack: ["Next.js 15", "Tailwind", "OpenAI SDK", "Vectors"],
    cta: {
      label: "Future Case Study →",
      href: "https://istanbulmedic.com/en",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Product work across fintech, AI, and healthcare."
          description="A handful of builds I’ve helped bring to life, from finance tools to AI agents."
        />

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {projectMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-slate-200/70 bg-white/70 px-5 py-4 text-left text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
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
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <article className="glow-card group flex h-full flex-col gap-6 p-7 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white">
                <span className="self-start rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-600 shadow-sm dark:border-[#7DD3FC]/30 dark:bg-[#7DD3FC]/10 dark:text-[#7DD3FC]">
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
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition hover:text-slate-900 dark:text-[#A9A3FF] dark:hover:text-white"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
