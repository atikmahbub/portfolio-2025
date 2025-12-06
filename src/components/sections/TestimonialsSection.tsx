import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { preventOrphans } from "@/lib/utils";

const testimonials = [
  {
    icon: "💼",
    person: "Lucas Novak — CTO",
    role: "Engineering Leader & Startup Founder",
    quote:
      "“I’ve had the pleasure of working with Atik as his engineering manager. Atik is hardworking, communicative, and I could always trust his work. I enjoyed working with him so much that I asked him to consult as a FE engineer for my startup.”",
    attribution: "— Lucas Novak, CTO",
    rating: 5,
    project: "Enterprise dashboard & design system",
  },
  {
    icon: "👨‍💻",
    person: "Md Masud Rana — Full-Stack Developer",
    role: "Engineering Partner",
    quote:
      "“I had the opportunity to work alongside Atik, and he truly stands out as a talented engineer. He has a sharp eye for performance and detail, always striving to deliver clean, efficient solutions. Beyond his technical skills, he’s dependable, easy to work with, and brings a thoughtful approach to every project. Atik also has a positive, can-do attitude that makes working with him a great experience. He’s the kind of teammate you can count on in high-pressure situations and he always brings value to the team.”",
    attribution: "— Md Masud Rana, Full-Stack Developer",
    rating: 5,
    project: "Web3 loyalty platform",
  },
  {
    icon: "🌍",
    person: "Freelance Client — CEO",
    role: "Product Founder",
    quote:
      "“Atik delivered good work on this React.js development project and I enjoyed working with him. His communication and coding skills were excellent, he met all deadlines, and his skills were reasonably strong.”",
    attribution: "— Client Feedback",
    rating: 5,
    project: "React.js acceleration engagement",
  },
];

const testimonialSignals = [
  { label: "Avg. Satisfaction", value: "5 / 5" },
  { label: "Repeat Engagements", value: "90%+" },
  { label: "Collaboration Modes", value: "Full-time · Freelance · Consulting" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-6 py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Let partners tell the story of working with you."
          description="Notes from people I've worked with—covering trust, speed, and teamwork."
        />

        <div className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-6 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:grid-cols-3">
          {testimonialSignals.map((signal) => (
            <div key={signal.label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-white/50">
                {signal.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                {signal.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.person} delay={index * 0.05}>
              <figure className="glow-card flex h-full flex-col gap-6 p-8 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
                <span className="text-2xl">{testimonial.icon}</span>
                {testimonial.rating ? (
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                ) : null}
                <blockquote className="text-sm text-slate-600 sm:text-base dark:text-white/80">
                  {preventOrphans(testimonial.quote)}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {preventOrphans(testimonial.person)}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
                    {preventOrphans(testimonial.role)}
                  </p>
                  {testimonial.project ? (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-white/50">
                      {preventOrphans(testimonial.project)}
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs text-slate-500 dark:text-white/50">
                    {preventOrphans(testimonial.attribution)}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
