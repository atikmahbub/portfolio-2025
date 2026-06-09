const testimonials = [
  {
    feat: true,
    av: "L",
    quote: (
      <>
        I&apos;ve had the pleasure of working with Atik as his engineering manager. He is{" "}
        <b>hardworking, communicative</b>, and I could <b>always trust his work</b>. I
        enjoyed it so much I asked him to consult as a FE engineer for my startup.
      </>
    ),
    name: "Lucas Novak",
    role: "CTO & Founder — Dashboard & design system",
    delay: "",
  },
  {
    feat: false,
    av: "M",
    quote: (
      <>
        He has a <b>sharp eye for performance and detail</b>, always striving to deliver
        clean, efficient solutions. The kind of teammate you can count on in high-pressure
        situations.
      </>
    ),
    name: "Md Masud Rana",
    role: "Full-Stack Developer — Web3 platform",
    delay: "d1",
  },
  {
    feat: false,
    av: "C",
    quote: (
      <>
        Atik delivered excellent work. His{" "}
        <b>communication and coding skills were exceptional</b>, he met all deadlines,
        and his engineering fundamentals are highly reliable.
      </>
    ),
    name: "Freelance Client",
    role: "CEO — React.js acceleration",
    delay: "d2",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="pad" id="testimonials">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              Credibility <span className="bk">/ 06</span>
            </span>
            <span className="sidx">5.0 avg · 90%+ repeat</span>
          </div>
          <h2
            className="section-title reveal"
            style={{ maxWidth: "18ch" }}
          >
            Trusted by engineering leaders and founders.
          </h2>
        </div>

        <div className="test-grid">
          {testimonials.map((t) => (
            <div
              className={`quote${t.feat ? " feat" : ""} reveal${t.delay ? ` ${t.delay}` : ""}`}
              key={t.name}
            >
              <div className="qm">&ldquo;</div>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <div className="av">{t.av}</div>
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="rl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
