export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        <div className="hero-tag">
          <span className="avail">
            <span className="led" />
            Available for select engagements — 2026
          </span>
          <span>Dhaka, BD · UTC+6 — collaborating worldwide</span>
        </div>
        <h1 className="reveal">
          I build <span className="ac">scalable</span>
          <br />
          platforms for <span className="out">high-growth</span>
          <br />
          product teams.
        </h1>
      </div>

      <div className="wrap hero-foot">
        <p className="hero-sub reveal d1">
          I turn messy product ideas into stable, scalable systems teams can trust —{" "}
          <b>shipped reliably, built to scale calmly.</b>
        </p>
        <div className="hero-cta reveal d2">
          <a href="#work" className="btn acc">
            View Projects <span className="arrow">↗</span>
          </a>
          <a href="#contact" className="btn ghost">
            Book a Call
          </a>
        </div>
      </div>

      <div className="hero-spec">
        <div className="cell reveal">
          <div className="k">Experience</div>
          <div className="v">
            6<small>+ yrs</small>
          </div>
        </div>
        <div className="cell reveal d1">
          <div className="k">Products shipped</div>
          <div className="v">
            20<small>+</small>
          </div>
        </div>
        <div className="cell reveal d2">
          <div className="k">Teams partnered</div>
          <div className="v">
            10<small>+</small>
          </div>
        </div>
        <div className="cell reveal d3">
          <div className="k">Discipline</div>
          <div className="v">Full-stack</div>
        </div>
      </div>
    </section>
  );
}
