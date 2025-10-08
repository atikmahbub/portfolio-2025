import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    icon: "💼",
    person: "Lucas Novak — CTO",
    role: "Engineering Leader & Startup Founder",
    quote:
      "“I’ve had the pleasure of working with Atik as his engineering manager. Atik is hardworking, communicative, and I could always trust his work. I enjoyed working with him so much that I asked him to consult as a FE engineer for my startup.”",
    attribution: "— Lucas Novak, CTO",
  },
  {
    icon: "👨‍💻",
    person: "Md Masud Rana — Full-Stack Developer",
    role: "Engineering Partner",
    quote:
      "“I had the opportunity to work alongside Atik, and he truly stands out as a talented engineer. He has a sharp eye for performance and detail, always striving to deliver clean, efficient solutions. Beyond his technical skills, he’s dependable, easy to work with, and brings a thoughtful approach to every project. Atik also has a positive, can-do attitude that makes working with him a great experience. He’s the kind of teammate you can count on in high-pressure situations and he always brings value to the team.”",
    attribution: "— Md Masud Rana, Full-Stack Developer",
  },
  {
    icon: "🌍",
    person: "Freelance Client — CEO",
    role: "Product Founder",
    quote:
      "“Atik delivered good work on this React.js development project and I enjoyed working with him. His communication and coding skills were excellent, he met all deadlines, and his skills were reasonably strong.”",
    attribution: "— Client Feedback",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Let partners tell the story of working with you."
          description="Real words from collaborators, leaders, and clients—highlighting trust, impact, and collaboration."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.person} delay={index * 0.05}>
              <figure className="glow-card flex h-full flex-col gap-6 p-8 text-slate-700 transition-colors hover:text-slate-900 dark:text-white/75 dark:hover:text-white">
                <span className="text-2xl">{testimonial.icon}</span>
                <blockquote className="text-sm text-slate-600 sm:text-base dark:text-white/80">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {testimonial.person}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/40">
                    {testimonial.role}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-white/50">
                    {testimonial.attribution}
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
