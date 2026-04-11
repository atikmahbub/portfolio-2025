import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col">
      <HeroSection />
      
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 mb-8 mt-4">
        <div className="glass-panel flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-3xl p-6 sm:p-8 shadow-sm transition-all hover:bg-slate-50/50 dark:hover:bg-white/[0.03]">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl dark:bg-white/10">
            💼
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium italic leading-relaxed text-slate-700 dark:text-white/80 sm:text-base">
              "Atik is <strong className="font-semibold text-slate-900 dark:text-white">hardworking, communicative</strong>, and I could <strong className="font-semibold text-slate-900 dark:text-white">always trust his work</strong>. I enjoyed working with him so much that I asked him to consult for my startup."
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
              — Lucas Novak, CTO & Founder
            </p>
          </div>
        </div>
      </div>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <div className="opacity-90"><SkillsSection /></div>
      <div className="opacity-90"><ProcessSection /></div>
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
