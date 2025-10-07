import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const testimonials = [
  {
    quote:
      '“Insert an enthusiastic recommendation about your leadership, collaboration, and ability to translate ideas into quality software.”',
    person: 'Placeholder Product Leader',
    role: 'Future Company',
  },
  {
    quote:
      '“Describe how you de-risked launches, mentored teammates, or delivered delightful experiences across the stack.”',
    person: 'Placeholder Engineering Manager',
    role: 'Previous Org',
  },
  {
    quote:
      '“Call out how you balance speed with quality, bring partners along the journey, and keep teams focused on outcomes.”',
    person: 'Placeholder Design Partner',
    role: 'Collaborator',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Let partners tell the story of working with you."
          description="Replace each card with real quotes, roles, and impact statements that back up your experience."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.person} delay={index * 0.05}>
              <figure className="glow-card flex h-full flex-col gap-6 p-8 text-white/75 transition-colors hover:text-white">
                <blockquote className="text-sm sm:text-base text-white/80">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm font-semibold text-white">{testimonial.person}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {testimonial.role}
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
