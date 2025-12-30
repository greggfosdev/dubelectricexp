import type { Testimonial } from '@/types/content'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative flex flex-col gap-6 p-8 bg-gradient-to-br from-border/5 to-border/10 border border-border/50 rounded-2xl hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Quote Icon Background */}
      <div className="absolute top-4 right-4 text-accent/5 group-hover:text-accent/10 transition-colors">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Rating Stars */}
      {testimonial.rating && (
        <div className="relative flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-accent drop-shadow-sm"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="relative text-lg text-foreground leading-relaxed font-medium">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="relative flex items-center gap-4">
        {/* Avatar */}
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center ring-2 ring-accent/20">
            <span className="text-accent font-bold text-xl">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Name and Role */}
        <div className="flex-1 min-w-0">
          <p className="text-base font-bold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted">
            {testimonial.role}
            {testimonial.company && ` • ${testimonial.company}`}
          </p>
          {testimonial.eventType && (
            <p className="text-xs text-accent mt-1 font-medium">
              {testimonial.eventType}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
