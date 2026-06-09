const steps = [
  {
    n: "01",
    k: "Discover & De-risk",
    h: "Map the unknown before building.",
    p: "Audit existing systems, define scope rigidly, and identify technical risks to keep timelines predictable.",
    out: "→ Reduced technical risk",
  },
  {
    n: "02",
    k: "Architect & Align",
    h: "Design for scale and clarity.",
    p: "Draft APIs, establish data contracts, and align the team on resilient, scalable architecture.",
    out: "→ Shared source of truth",
  },
  {
    n: "03",
    k: "Execute & Operate",
    h: "Ship reliably, monitor constantly.",
    p: "Automated testing, robust CI/CD, and strict telemetry. Launching shouldn't be stressful.",
    out: "→ Calm, confident launches",
  },
];

const foot = [
  {
    k: "Discovery → Delivery",
    v: "3–6 weeks",
    d: "Typical loop from kickoff to first launch.",
  },
  {
    k: "Feedback loops",
    v: "Daily async notes",
    d: "Docs, Looms, and dashboards keep everyone aligned.",
  },
  {
    k: "Confidence",
    v: "Telemetry + QA",
    d: "Observability & CI guardrails from day one.",
  },
];

export default function ProcessSection() {
  return (
    <section className="dark pad" id="process">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Process <span className="bk">/ 05</span>
            </span>
            <span className="sidx">How I work</span>
          </div>
          <div className="lead-row">
            <h2 className="section-title reveal">
              Predictable execution, zero surprises.
            </h2>
            <p className="section-lead reveal d1">
              A structured engineering cadence designed to reduce risk, keep momentum,
              and ship reliable software.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className={`step reveal${i > 0 ? ` d${i}` : ""}`} key={s.n}>
              <div className="n">{s.n}</div>
              <div className="k">{s.k}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
              <div className="out">{s.out}</div>
            </div>
          ))}
        </div>

        <div className="process-foot">
          {foot.map((f, i) => (
            <div className={`pf reveal${i > 0 ? ` d${i}` : ""}`} key={f.k}>
              <div className="k">{f.k}</div>
              <div className="v">{f.v}</div>
              <div className="d">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
