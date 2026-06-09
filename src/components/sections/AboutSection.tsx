export default function AboutSection() {
  return (
    <section className="pad" id="about">
      <div className="wrap">
        <div className="shead">
          <div className="shead-top">
            <span className="eyebrow">
              About <span className="bk">/ 01</span>
            </span>
            <span className="sidx">Profile</span>
          </div>
          <div className="about-grid">
            <h2 className="section-title reveal">
              Shaping polished products with technical{" "}
              <span className="ac">empathy.</span>
            </h2>
            <div className="about-body reveal d1">
              <p>
                Product development is messy. Requirements shift, edge cases emerge,
                deadlines loom.{" "}
                <strong>
                  I step into that ambiguity and turn it into predictable, engineered
                  delivery.
                </strong>
              </p>
              <p>
                Over 6+ years I&apos;ve partnered with cross-functional teams to rescue
                struggling codebases, architect scalable web platforms from scratch, and
                set standards that prevent production fires before they happen.
              </p>
              <p>
                My focus is never just writing code — it&apos;s building the right features
                efficiently, shipping them reliably, and making sure the product scales
                calmly so the team sleeps well at night.
              </p>
              <div className="about-stats">
                <div className="s">
                  <div className="n">
                    20<span className="ac">+</span>
                  </div>
                  <div className="l">Shipped products</div>
                </div>
                <div className="s">
                  <div className="n">
                    10<span className="ac">+</span>
                  </div>
                  <div className="l">Cross-functional teams</div>
                </div>
                <div className="s">
                  <div className="n">3</div>
                  <div className="l">Domains — AI · Web3 · Health</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="focus-grid">
          <div className="focus-card reveal">
            <div className="idx">F/01</div>
            <h3>End-to-end ownership</h3>
            <p>
              Stay close to the problem, write the plan, build the thing, and keep
              watching it once it ships.
            </p>
            <span className="bar" />
          </div>
          <div className="focus-card reveal d1">
            <div className="idx">F/02</div>
            <h3>Design systems &amp; DX</h3>
            <p>
              Components, docs, and tooling that make it easy for every teammate to do
              their best work.
            </p>
            <span className="bar" />
          </div>
          <div className="focus-card reveal d2">
            <div className="idx">F/03</div>
            <h3>Scalable architecture</h3>
            <p>
              Services, automation, and monitoring that handle real traffic without
              surprises.
            </p>
            <span className="bar" />
          </div>
        </div>

        <div className="principles">
          <div className="ptitle reveal">Working principles — built with teams.</div>
          <div className="principles-list">
            <div className="principle reveal">
              <div className="pn">P/01</div>
              <h4>Clarity beats volume.</h4>
              <p>If everyone understands the plan, the build stays calm and honest.</p>
            </div>
            <div className="principle reveal d1">
              <div className="pn">P/02</div>
              <h4>Systems over silver bullets.</h4>
              <p>
                Great teams rely on habits — tests, monitoring, docs — not heroics.
              </p>
            </div>
            <div className="principle reveal d2">
              <div className="pn">P/03</div>
              <h4>Momentum with care.</h4>
              <p>Move fast, check in often, keep people in the loop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
