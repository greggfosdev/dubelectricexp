import { Section } from '@/components/ui/Section'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import type { TestimonialsContent } from '@/types/content'

interface TestimonialsSectionProps {
  testimonials: TestimonialsContent
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <Section id="testimonials" className="bg-background">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            WHAT PEOPLE SAY
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            From venues to festivals, here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-muted mb-4">
            Ready to work together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Section>
  )
}
