const cols = [
  {
    glyph: "{ }",
    ix: "C/01",
    title: "Frontend & Product Craft",
    tease: "UIs that feel instantly responsive.",
    items: [
      "Pixel-perfect, responsive UX",
      "Scalable, reusable design systems",
      "Frontend performance at scale",
      "AI & Web3 feature integration",
      "Roadmaps → clear tech plans",
    ],
  },
  {
    glyph: "</>",
    ix: "C/02",
    title: "Backend & Systems Architecture",
    tease: "Strict types, scalable data layers.",
    items: [
      "APIs that scale under load",
      "Strict TypeScript data contracts",
      "Robust relational schemas",
      "Type-safe, resilient microservices",
      "Production-ready smart contracts",
    ],
  },
  {
    glyph: "⌘",
    ix: "C/03",
    title: "Engineering Operations",
    tease: "From local commit to production.",
    items: [
      "CI/CD for zero-downtime deploys",
      "Production telemetry & logging",
      "Mentoring on scalable habits",
      "Standards that prevent regressions",
      "Docs that drive adoption",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="pad" id="skills" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Capabilities <span className="bk">/ 04</span>
            </span>
            <span className="sidx">What I bring</span>
          </div>
          <div className="lead-row">
            <h2 className="section-title reveal">
              Where engineering meets product vision.
            </h2>
            <p className="section-lead reveal d1">
              How I blend product thinking with dependable engineering habits — from
              first commit to production.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {cols.map((col, i) => (
            <div className={`skill-col reveal${i > 0 ? ` d${i}` : ""}`} key={col.ix}>
              <div className="sc-top">
                <span className="glyph">{col.glyph}</span>
                <span className="ix">{col.ix}</span>
              </div>
              <h3>{col.title}</h3>
              <div className="tease">{col.tease}</div>
              <ul>
                {col.items.map((item, j) => (
                  <li key={j}>
                    <span className="no">{String(j + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
