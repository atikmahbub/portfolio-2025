import Reveal from '@/components/Reveal';

export default function FooterSection() {
  return (
    <footer className="relative px-6 pb-16">
      <Reveal>
        <div className="mx-auto w-full max-w-screen-2xl rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-sm text-white/60 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Placeholder footer tagline — use this space to reiterate your value prop or link to a newsletter, blog, or
              community.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
              <a href="#home" className="transition hover:text-white">
                Back to top
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/30">
            © {new Date().getFullYear()} Placeholder Name. All rights reserved.
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
