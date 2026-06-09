const infoRows = [
  {
    k: "Email",
    v: "atikmahbub100@gmail.com",
    href: "mailto:atikmahbub100@gmail.com",
  },
  {
    k: "Calendly",
    v: "calendly.com/atikmahbub100/30min",
    href: "https://calendly.com/atikmahbub100/30min",
  },
  {
    k: "GitHub",
    v: "@atikmahbub",
    href: "https://github.com/atikmahbub",
  },
  {
    k: "LinkedIn",
    v: "in/atik-mahbub",
    href: "https://linkedin.com/in/atik-mahbub",
  },
  {
    k: "Résumé",
    v: "Download latest →",
    href: "/Atik_Mahbub_CV_1.pdf",
  },
];

const meta = [
  { k: "Timezone", v: "UTC+6 · overlap PST & EST daily" },
  { k: "Response", v: "Usually within 1 hour" },
  { k: "Engagements", v: "Fractional · consulting · full-time" },
];

export default function ContactSection() {
  return (
    <section className="contact pad" id="contact">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Connect <span className="bk">/ 07</span>
            </span>
            <span className="sidx">Replies within ~1 hr</span>
          </div>
          <h2 className="reveal">
            Let&apos;s build a system
            <br />
            that <span className="ac">scales.</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="reveal d1">
            <p className="contact-lead">
              Need to scale an existing platform, rescue a complex codebase, or build a
              scalable MVP from scratch? I bring predictable engineering delivery to your
              team. Expect a reply within 1–2 hours.
            </p>
            <div className="contact-cta">
              <a href="mailto:atikmahbub100@gmail.com" className="btn">
                Start a Project <span className="arrow">↗</span>
              </a>
              <a
                href="https://calendly.com/atikmahbub100/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="contact-info reveal d2">
            {infoRows.map((row) => (
              <a
                key={row.k}
                className="info-row"
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="k">{row.k}</span>
                <span className="v">{row.v}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-meta">
          {meta.map((m, i) => (
            <div className={`cm reveal${i > 0 ? ` d${i}` : ""}`} key={m.k}>
              <div className="k">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
