const projects = [
  {
    num: "01",
    tag: "Mobile · Fintech",
    status: "live" as const,
    statusLabel: "Live on Play Store",
    title: "Scalar",
    desc: "A real-time finance tracker giving users live visibility into their money — live on Google Play Store.",
    chips: ["React Native", "TypeScript", "Express", "Prisma", "MySQL"],
    linkLabel: "View on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.atik.aether",
  },
  {
    num: "02",
    tag: "AI + Operations",
    status: "live" as const,
    statusLabel: "Live",
    title: "Omni Intelligence",
    desc: "A modular React component system that cut deployment friction to near zero for 5+ engineering pods.",
    chips: ["React", "Docusaurus", "Redux", "Docker", "TypeScript"],
    linkLabel: "View case study",
    href: "https://omniintelligence.online/",
  },
  {
    num: "03",
    tag: "Medical AI",
    status: "case" as const,
    statusLabel: "Case study",
    title: "Smart Retina",
    desc: "Scalable React UIs backed by secure Django REST APIs, cutting clinical review time by over 60%.",
    chips: ["React", "Django REST", "Redux", "Docker", "Azure"],
    linkLabel: "Ask for architecture",
    href: "#contact",
  },
  {
    num: "04",
    tag: "AI Agentic",
    status: "wip" as const,
    statusLabel: "In progress",
    title: "Istanbul Medic Agent",
    desc: "LLM-driven agents on Next.js 15 with robust RAG pipelines, targeting a 50% deflection rate on routine queries.",
    chips: ["Next.js 15", "Tailwind", "OpenAI SDK", "Vectors"],
    linkLabel: "View prototype",
    href: "https://istanbulmedic.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="pad" id="work">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Selected Work <span className="bk">/ 03</span>
            </span>
            <span className="sidx">Fintech · AI · Web3 · Health</span>
          </div>
          <div className="lead-row">
            <h2 className="section-title reveal">
              Product work that shipped and scaled.
            </h2>
            <p className="section-lead reveal d1">
              A handful of builds I&apos;ve helped bring to life — from finance tools to AI
              agents and on-chain platforms.
            </p>
          </div>
        </div>

        {/* Featured */}
        <div className="featured reveal">
          <div className="f-l">
            <div className="f-num">★ Featured / 1Shot Prompt Builder</div>
            <h3>1Shot Prompt Builder</h3>
            <p>
              Orchestrating fragmented smart contracts manually wasted hundreds of
              developer hours. I led the end-to-end React/Next.js build with recursive
              ABI parsers that templatize complex EVM workflows.
            </p>
            <div className="chips">
              {["React", "Next.js", "Solidity", "Ethers.js", "tRPC", "TypeScript", "OpenAI"].map(
                (c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                )
              )}
            </div>
            <a
              href="https://1shotapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn acc"
            >
              Read Case Study <span className="arrow">↗</span>
            </a>
          </div>
          <div className="f-r">
            <div className="k">Outcome</div>
            <div className="big">
              Reclaimed <span className="ac">30+ hrs/week</span> per protocol team.
            </div>
            <div className="out">
              Complex on-chain workflows reduced to reliable, reusable building blocks.
            </div>
          </div>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <article className={`work-card reveal${i % 2 === 1 ? " d1" : ""}`} key={p.num}>
              <div className="wc-top">
                <div className="wc-num">{p.num}</div>
                <div className="wc-tag">
                  {p.tag}
                  <br />
                  <span className={`st ${p.status}`}>
                    <span className="d" />
                    {p.statusLabel}
                  </span>
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="link"
              >
                {p.linkLabel} <span className="arrow">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
