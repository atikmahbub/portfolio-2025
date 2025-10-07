import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { ArrowRight, MessageSquareText } from 'lucide-react';

const contactOptions = [
  {
    label: 'Email',
    value: 'placeholder@domain.dev',
    href: 'mailto:placeholder@domain.dev',
  },
  {
    label: 'Calendly',
    value: 'placeholder scheduling link',
    href: '#',
  },
  {
    label: 'Resume',
    value: 'Download coming soon',
    href: '#',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Connect"
          title="Ready to collaborate on your next chapter."
          description="Swap in real contact details and a short note about the type of collaborations you’re seeking."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <Reveal>
            <div className="glow-card flex h-full flex-col gap-6 p-8 text-white/75 transition-colors hover:text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                Placeholder Invite
              </span>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Placeholder note about the collaborations, roles, or projects you want to explore.
                </h3>
                <p className="text-sm text-white/65 sm:text-base">
                  Outline the problems you solve, industries you love, or the types of teams you thrive with. This is the
                  invitation to reach out.
                </p>
              </div>
              <a
                href="mailto:placeholder@domain.dev"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Start Placeholder Conversation
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
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">{option.label}</p>
                    <p className="mt-2 text-base font-semibold">{option.value}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 self-end text-white/40 transition group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
