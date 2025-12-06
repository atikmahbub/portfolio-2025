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
    <section id="contact" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Connect"
          title="Let’s explore the right fit for your vision."
          description="I’m open to teaming up with startups, product groups, and founders to ship web, AI, or Web3 work."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <Reveal>
            <div className="glow-card flex h-full flex-col gap-6 p-8 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white/60">
                Open for Collaborations
              </span>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                  {preventOrphans("Let’s explore the right fit for your vision.")}
                </h3>
                <p className="text-sm text-slate-600 sm:text-base dark:text-white/65">
                  {preventOrphans(
                    "Need help shaping a product idea, polishing a feature, or rolling out an AI/Web3 workflow? I'm happy to jump in.",
                  )}
                </p>
                <p className="text-sm text-slate-600 sm:text-base dark:text-white/65">
                  {preventOrphans(
                    "If you're looking for someone who can plan, build, and keep things steady after launch, let's chat. I typically reply within the hour.",
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
              <a
                href="mailto:atikmahbub100@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Start Conversation
                <MessageSquareText className="h-4 w-4" />
              </a>
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
