import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    timeframe: "Nov 2024 — Present",
    title: "Software Engineer",
    company: "UXLY Software · Full-time",
    location: "United States · Remote",
    focus:
      "Driving TypeScript + React feature development for data-rich SaaS workflows, aligning cross-functional squads and shipping remote-first customer experiences.",
  },
  {
    timeframe: "Jul 2022 — Oct 2024",
    title: "Software Engineer",
    company: "Snickerdoodle Labs · Full-time",
    location: "United States · Remote",
    focus:
      "Owned end-to-end initiatives for a Web3 loyalty platform, modernized a large React/TypeScript codebase, and partnered with product to deliver privacy-preserving user journeys.",
  },
  {
    timeframe: "Feb 2022 — Jun 2022",
    title: "Software Engineer",
    company: "Hypernet Labs · Full-time",
    location: "California, United States · Remote",
    focus:
      "Built performant React dashboards on top of decentralized compute APIs, streamlined TypeScript integrations, and shipped features on a tight growth timeline.",
  },
  {
    timeframe: "Sep 2021 — May 2022",
    title: "Software Developer",
    company: "Yami · Freelance",
    location: "India · Remote",
    focus:
      "Delivered production-ready Node/TypeScript services and React micro frontends for fintech clients, coordinating hands-on with distributed stakeholders.",
  },
  {
    timeframe: "Feb 2021 — Jul 2021",
    title: "React Developer",
    company: "Antino · Freelance",
    location: "India · Remote",
    focus:
      "Rapidly prototyped React experiences, refined design handoffs, and embedded TypeScript best practices across multiple healthcare and logistics engagements.",
  },
  {
    timeframe: "Nov 2019 — Jan 2021",
    title: "Associate Software Engineer",
    company: "Smart Retina · Full-time",
    location: "Gulshan, Dhaka, Bangladesh",
    focus:
      "Delivered Django REST-powered services and React interfaces for healthcare analytics, coordinating closely with product leads to launch clinic-ready tools.",
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
    <section id="experience" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Experience"
          title="Trusted to guide roadmap-critical initiatives."
          description="Timeline is placeholder—swap with your actual roles, impact statements, and quantifiable wins when ready."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.timeframe} delay={index * 0.05}>
                <article className="glow-card flex flex-col gap-4 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 text-sm font-semibold text-[#7DD3FC]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        {experience.timeframe}
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-[#A9A3FF]">
                        {experience.company}
                      </p>
                      {experience.location && (
                        <p className="text-xs text-white/50">
                          {experience.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/75">{experience.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-6 lg:pl-6">
            <Reveal>
              <div className="glow-card p-6 text-white/80 transition-colors hover:text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Focus Areas
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Collaboration that scales with your ambitions.
                </h3>
                <p className="mt-4 text-sm text-white/65">
                  I thrive in spaces where strong engineering practices meet
                  product vision. These are the areas where I bring clarity,
                  structure, and impact to teams and products.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusTiles.map((tile, index) => (
                <Reveal key={tile.title} delay={index * 0.05}>
                  <div className="glow-card flex h-full flex-col gap-3 px-5 py-4 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:text-white">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7DD3FC]/30 bg-[#7DD3FC]/10 text-sm font-semibold text-[#7DD3FC]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-sm font-semibold text-white">
                        {tile.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/70 sm:text-sm">
                      {tile.description}
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
