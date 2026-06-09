"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    let current = "";
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) current = "#" + e.target.id;
        });
        setActive(current);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 940) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
        >
          <span className="dot" />
          Atik&nbsp;Mahbub
          <span className="sub">/ Full-Stack Engineer</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a
            href="https://github.com/atikmahbub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            GitHub
          </a>
          <a
            href="https://calendly.com/atikmahbub100/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Book a Call <span className="arrow">↗</span>
          </a>
        </div>

        <button
          className={`nav-burger${mobileOpen ? " open" : ""}`}
          id="navBurger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobileMenu">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mlink"
            onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
        <div className="mcta">
          <a
            href="https://github.com/atikmahbub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            GitHub
          </a>
          <a
            href="https://calendly.com/atikmahbub100/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Book a Call <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
