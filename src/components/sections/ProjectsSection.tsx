import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  type: string;
  summary: string;
  stack: string[];
  cta?: {
    label: string;
    href?: string;
  };
};

const projects: Project[] = [
  {
    name: "Tracking Wallet",
    type: "Full-stack Fintech Web App",
    summary:
      "Tracking Wallet is a modern personal finance platform for tracking daily expenses, loans, and recurring transactions. I architected the Express + Prisma + MySQL backend, integrated Auth0 for secure authentication, and shipped a responsive React front-end. Deployed via Netlify and Railway in a monorepo foundation, the build showcases end-to-end ownership with scalability top of mind.",
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
      "Omni Intelligence unites business units under a single operational dashboard. As a front-end engineer, I built modular React UI components and documentation with Docusaurus, ensuring the platform could scale smoothly across teams. This project sharpened my approach to structuring complex enterprise applications.",
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
      "Smart Retina empowers eye-care professionals to detect Diabetic Retinopathy with AI image analysis. I delivered critical React interfaces and secure data flows to Django REST services, enabling fast screenings and automated AI predictions. It pairs healthcare rigor with modern cloud infrastructure for mission-critical impact.",
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
      "1Shot Prompt Builder is a Web3-integrated developer platform for orchestrating smart contract functions into reusable “prompts.” I led the React + Next.js architecture, implemented deep EVM integrations with ethers.js, and built recursive ABI parsing to dynamically render nested contract inputs. OpenAI embeddings and vector search power semantic discovery, keeping workflows intelligent and developer-friendly.",
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
      "A collaborative web platform connecting schools, teachers, parents, and students through shared dashboards and communication tools. I focused on TypeScript and Docker-powered workflows that kept shipping velocity high while ensuring reliability for classroom use.",
    stack: ["React", "Node.js", "TypeScript", "Docker"],
  },
  {
    name: "Istanbul Medic Agent",
    type: "AI Agentic Platform (In Progress)",
    summary:
      "Building healthcare agents that support contextual Q&A, RAG-powered interactions, and secure appointment flows.",
    stack: ["Next.js 15", "Tailwind", "OpenAI SDK", "Vectors"],
    cta: {
      label: "Future Case Study →",
      href: "https://istanbulmedic.com/en",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Projects"
          title="Product work across fintech, AI, and healthcare."
          description="A sample of platforms I’ve architected or helped scale—each pairing strong product vision with thoughtful engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <article className="glow-card group flex h-full flex-col gap-6 p-7 text-white/80">
                <span className="self-start rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#7DD3FC]">
                  {project.type}
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/70 group-hover:text-white/80">
                    {project.summary}
                  </p>
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
                  {project.cta?.label &&
                    (project.cta.href ? (
                      <a
                        href={project.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#A9A3FF] transition hover:text-white"
                        target="_blank"
                      >
                        {project.cta.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/50">
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
