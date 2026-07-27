import { Section } from '@/components/ui/Section'
import { ServiceCard } from '@/components/ui/ServiceCard'
import type { ServicesContent } from '@/types/content'

interface ServicesSectionProps {
  services: ServicesContent
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section id="services" className="bg-border/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            WHAT WE DO
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            One crew, full stack: music, sound, and visuals for events of every size. East
            Coast based, traveling worldwide.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Section>
  )
}
