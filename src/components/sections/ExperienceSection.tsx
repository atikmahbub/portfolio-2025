const experiences = [
  {
    num: "01",
    role: "Senior Product Engineer",
    company: "UXLY Software · Full-time",
    meta: "United States · Remote",
    date: "Nov 2024 — Present",
    summary:
      "Scaling a data-heavy SaaS platform by driving frontend architecture and enforcing production reliability across remote pods.",
    bullets: [
      <>
        Re-architected rendering pipelines, dropping load times by <b>40%</b> for 100k+
        daily queries.
      </>,
      <>
        Integrated telemetry and automated QA, cutting bug pipelines by <b>30%</b> and
        saving 20+ dev hours weekly.
      </>,
    ],
  },
  {
    num: "02",
    role: "Senior Software Engineer",
    company: "Snickerdoodle Labs · Full-time",
    meta: "United States · Remote",
    date: "Jul 2022 — Oct 2024",
    summary:
      "Led end-to-end development for a Web3 loyalty platform, collaborating with product leads on scalable, privacy-first implementations.",
    bullets: [
      <>
        Built a reusable component system, accelerating development velocity by{" "}
        <b>2×</b>.
      </>,
      <>
        Engineered resilient authentication flows handling <b>50k+</b> daily on-chain
        queries.
      </>,
    ],
  },
  {
    num: "03",
    role: "Software Engineer",
    company: "Hypernet Labs · Full-time",
    meta: "California, US · Remote",
    date: "Feb 2022 — Jun 2022",
    summary:
      "Delivered high-performance React frontends integrating complex decentralized APIs within aggressive go-to-market timelines.",
    bullets: [
      <>Engineered performant data flows serving thousands of node operators seamlessly.</>,
      <>
        Enforced strict TypeScript contracts globally, eliminating data-shape bugs
        pre-deploy.
      </>,
    ],
  },
  {
    num: "04",
    role: "Product Engineer",
    company: "Yami · Freelance",
    meta: "India · Remote",
    date: "Sep 2021 — May 2022",
    summary:
      "Developed robust backend services and modular micro-frontends to accelerate time-to-market for enterprise fintech clients.",
    bullets: [
      <>
        Designed plug-and-play micro-frontends to cut release cycles by <b>50%</b>.
      </>,
      <>
        Established tight scope-review loops, closing <b>100%</b> of sprint commitments
        on time.
      </>,
    ],
  },
  {
    num: "05",
    role: "React Developer",
    company: "Antino · Freelance",
    meta: "India · Remote",
    date: "Feb 2021 — Jul 2021",
    summary:
      "Engineered production-ready React prototypes, translating complex business logic into scalable foundational systems.",
    bullets: [
      <>
        Built a modular, pixel-perfect reusable component library driving universal
        adoption.
      </>,
      <>
        Introduced strict linting/testing pipelines, reducing review cycles by <b>25%</b>.
      </>,
    ],
  },
  {
    num: "06",
    role: "Software Engineer",
    company: "Smart Retina · Full-time",
    meta: "Dhaka, Bangladesh",
    date: "Nov 2019 — Jan 2021",
    summary:
      "Built and deployed scalable Django REST APIs and immersive React interfaces for an AI-driven, high-compliance eye-care platform.",
    bullets: [
      <>
        Designed intuitive UI states for AI predictions, boosting clinical adoption across
        pilot hospitals.
      </>,
      <>
        Secured patient data flow between React clients and APIs, ensuring full medical
        compliance.
      </>,
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="dark pad" id="experience">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Experience <span className="bk">/ 02</span>
            </span>
            <span className="sidx">2019 — Present</span>
          </div>
          <div className="lead-row">
            <h2 className="section-title reveal">
              Trusted to guide roadmap-critical initiatives.
            </h2>
            <p className="section-lead reveal d1">
              The teams I&apos;ve helped and the kind of work I lead day to day —
              frontend architecture, reliability, and scale.
            </p>
          </div>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="exp-row reveal" key={exp.num}>
              <div className="num">{exp.num}</div>
              <div className="exp-role">
                <h3>{exp.role}</h3>
                <div className="co">{exp.company}</div>
                <div className="meta">{exp.meta}</div>
                <span className="date">{exp.date}</span>
              </div>
              <div className="exp-detail">
                <p className="summary">{exp.summary}</p>
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
