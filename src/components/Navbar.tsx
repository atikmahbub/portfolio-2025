"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "@/components/ThemeToggle";

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
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY < 120) {
        setActiveSection("#home");
      }
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

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      const headerOffset = 120; // keep section headings clear of the fixed nav
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(elementPosition - headerOffset, 0);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-0 pb-2 transition-colors",
        isOpen
          ? "bg-white dark:bg-slate-950"
          : "bg-white/80 dark:bg-slate-950/80",
        "shadow-[0_20px_60px_-35px_rgba(15,23,42,0.55)] xl:bg-transparent xl:shadow-none"
      )}
      role="navigation"
    >
      <div
        className={clsx(
          "pointer-events-auto flex w-full max-w-7xl justify-between",
          isOpen && "hidden xl:flex" // hide on mobile when menu open, keep flex on xl
        )}
      >
        {" "}
        <nav
          className={clsx(
            "flex w-full items-center justify-between gap-4 rounded-[3rem] border border-white/60 bg-white/70 px-6 py-3 text-sm text-slate-700 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)] transition-all duration-500 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70 dark:text-white/80",
            isScrolled ? "scale-[1.01]" : "",
            isOpen
              ? "opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto"
              : "opacity-100 pointer-events-auto"
          )}
          aria-label="Primary"
        >
          <div className="flex flex-shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#7DD3FC] dark:bg-[#7DD3FC] text-center" />
            Atik Mahbub
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white hover:dark:border-white/35 hover:dark:text-white xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden items-center gap-3 xl:flex">
            <ul
              id="primary-navigation"
              className={clsx(
                "flex gap-1 text-[0.8rem] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-white/60",
                isOpen && "flex"
              )}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={clsx(
                        "rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-white/60",
                        isActive
                          ? "bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.6)] dark:bg-slate-200/30 dark:text-white dark:from-transparent dark:via-transparent dark:to-transparent"
                          : "border border-transparent text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:text-white/60 dark:hover:border-white/30 dark:hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {isOpen ? (
        <div className="pointer-events-auto mt-0 flex w-full justify-center rounded-[2.5rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-950/95 xl:hidden">
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#7DD3FC]" />
                Atik Mahbub
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white hover:dark:border-white/35 hover:dark:text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-4 text-xs uppercase tracking-[0.3em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
              <div className="mb-3 flex justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-white/70">
                <span>Theme</span>
                <ThemeToggle variant="pill" />
              </div>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className={clsx(
                          "w-full rounded-2xl px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-white/50",
                          isActive
                            ? "bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 text-white dark:bg-slate-100/10 dark:text-white dark:from-transparent dark:via-transparent dark:to-transparent"
                            : "hover:bg-white/60 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
