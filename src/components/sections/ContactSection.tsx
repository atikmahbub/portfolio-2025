import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { preventOrphans } from "@/lib/utils";

type ContactOption = {
  label: string;
  value: string;
  href: string;
  download?: boolean;
};

const contactOptions: ContactOption[] = [
  {
    label: "Email",
    value: "atikmahbub100@gmail.com",
    href: "mailto:atikmahbub100@gmail.com",
  },
  {
    label: "Calendly",
    value: "calendly.com/atikmahbub",
    href: "https://calendly.com/atikmahbub",
  },
  {
    label: "Resume",
    value: "Download my latest résumé →",
    href: "/Atik_Mahbub_CV_1.pdf",
    download: true,
  },
];

const availability = [
  {
    label: "Timezones",
    value: "UTC+6 base · overlap PST & EST daily",
  },
  {
    label: "Response time",
    value: "Usually replies within 1 hour",
  },
  {
    label: "Engagements",
    value: "Fractional, consulting, or full-time",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Connect"
          title="Ready to build a reliable system that scales?"
          description="Product-focused engineer who builds reliable systems that scale."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <Reveal>
            <div className="glow-card flex h-full flex-col gap-6 p-8 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" /> Available for Full-Time / Freelance
              </span>
              <div className="space-y-4">
               <h3 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                  {preventOrphans("Ready to engineer your next big launch?")}
                </h3>
                <p className="text-sm text-slate-600 sm:text-base dark:text-white/65">
                  {preventOrphans(
                    "Whether you need to scale an existing platform, rescue a complex codebase, or build a scalable MVP from scratch, I'm ready to bring predictable engineering delivery to your team.",
                  )}
                </p>
                <p className="text-sm font-medium text-slate-800 sm:text-base dark:text-white/80">
                  {preventOrphans(
                    "Expect a reply within 1-2 hours—let's make contacting easy and fast.",
                  )}
                </p>
              </div>
              <div className="grid gap-3 rounded-3xl border border-slate-200/60 bg-white/70 p-4 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:grid-cols-3">
                {availability.map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-white/50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="mailto:atikmahbub100@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-[0_0_20px_rgba(30,41,59,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://calendly.com/atikmahbub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel-deep inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-800 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/5 shadow-xl"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {contactOptions.map((option, index) => {
              const isExternal =
                option.href.startsWith("http://") ||
                option.href.startsWith("https://");
              return (
                <Reveal key={option.label} delay={index * 0.05}>
                  <a
                    href={option.href}
                    className="glow-card group flex flex-col gap-3 px-5 py-5 text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white"
                    target={
                      !option.download && isExternal ? "_blank" : undefined
                    }
                    rel={
                      !option.download && isExternal
                        ? "noopener noreferrer"
                        : undefined
                    }
                    {...(option.download ? { download: true } : {})}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
                        {preventOrphans(option.label)}
                      </p>
                      <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                        {preventOrphans(option.value)}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 self-end text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900 dark:text-white/40 dark:group-hover:text-white" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
        <Reveal delay={0.15}>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
            {preventOrphans(
              "Building for the future — AI, Web3, and beautifully crafted experiences.",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
