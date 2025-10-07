"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center"
      role="navigation"
    >
      <div
        className={clsx(
          "pointer-events-auto flex w-full max-w-screen-2xl justify-between px-6 pt-8",
          isOpen && "hidden xl:flex" // hide on mobile when menu open, keep flex on xl
        )}
      >
        {" "}
        <nav
          className={clsx(
            "glow-card flex w-full items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 transition-all duration-500 xl:rounded-[3rem]",
            isScrolled ? "scale-[1.01]" : "",
            isOpen
              ? "opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto"
              : "opacity-100 pointer-events-auto"
          )}
          aria-label="Primary"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#7DD3FC]" />
            Atik Mahbub
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-white/35 hover:text-white xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <ul
            id="primary-navigation"
            className={clsx(
              "hidden gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 xl:flex",
              isOpen && "flex"
            )}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/30 hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen ? (
        <div className="pointer-events-auto mt-[2rem] flex w-full justify-center px-0 xl:hidden">
          <div className="flex w-full flex-col gap-4 px-6">
            <div className="glow-card flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#7DD3FC]" />
                Atik Mahbub
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:border-white/35 hover:text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="glow-card rounded-[2.5rem] border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="w-full rounded-2xl px-4 py-3 text-left transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
