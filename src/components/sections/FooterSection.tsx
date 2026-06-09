const navigate = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

const more = [
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Top", href: "#home", arrow: "↑" },
];

const elsewhere = [
  { label: "GitHub", href: "https://github.com/atikmahbub", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/atik-mahbub", external: true },
  { label: "Email", href: "mailto:atikmahbub100@gmail.com", external: false },
];

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="lede">
            Building for the future — AI, Web3, and crafted experiences.
          </div>

          <div className="footer-col">
            <h5>Navigate</h5>
            {navigate.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label} <span>↗</span>
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h5>More</h5>
            {more.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label} <span>{l.arrow ?? "↗"}</span>
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h5>Elsewhere</h5>
            {elsewhere.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
              >
                {l.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Atik Mahbub — Dhaka, collaborating worldwide.</span>
          <span>Full-Stack Engineer / AI · Web3 · Product</span>
        </div>
      </div>
    </footer>
  );
}
