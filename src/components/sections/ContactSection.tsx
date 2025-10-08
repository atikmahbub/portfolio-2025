import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowRight, MessageSquareText } from "lucide-react";

const contactOptions = [
  {
    label: "Email",
    value: "atikmahbub100@gmail.com",
    href: "mailto:atikmahbub100@gmail.com",
  },
  {
    label: "Calendly",
    value: "calendly.com/atikmahbub",
    href: "https://calendly.com/atikmahbub100",
  },
  {
    label: "Resume",
    value: "Download my latest résumé →",
    href: "/resume.pdf",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Connect"
          title="Let’s explore the right fit for your vision."
          description="I’m open to collaborating with startups, product teams, and founders on ambitious ideas. Whether it’s full-stack development, AI agent experiences, or Web3-integrated platforms, I bring a strong blend of product thinking and engineering execution."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <Reveal>
            <div className="glow-card flex h-full flex-col gap-6 p-8 text-white/75 transition-colors hover:text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                Open for Collaborations
              </span>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Let’s explore the right fit for your vision.
                </h3>
                <p className="text-sm text-white/65 sm:text-base">
                  I’m open to collaborating with startups, product teams, and
                  founders on ambitious ideas. Whether it’s full-stack
                  development, AI agent experiences, or Web3-integrated
                  platforms, I bring a strong blend of product thinking and
                  engineering execution.
                </p>
                <p className="text-sm text-white/65 sm:text-base">
                  If you’re looking for someone who can architect, ship, and
                  scale—let’s start a conversation.
                </p>
              </div>
              <a
                href="mailto:atikmahbub100@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Start Conversation
                <MessageSquareText className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {contactOptions.map((option, index) => (
              <Reveal key={option.label} delay={index * 0.05}>
                <a
                  href={option.href}
                  className="glow-card group flex flex-col gap-3 px-5 py-5 text-sm text-white/75 transition-colors hover:text-white"
                  target="_blank"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {option.label}
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      {option.value}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 self-end text-white/40 transition group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15}>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
            Building for the future — AI, Web3, and beautifully crafted
            experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
