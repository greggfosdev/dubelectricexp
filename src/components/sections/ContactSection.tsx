import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/ui/ContactForm'

export function ContactSection() {
  return (
    <Section id="contact" className="bg-border/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            BOOKINGS & INQUIRIES
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Need us for a session, event, or collaboration? Drop a message and we'll link up.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </Section>
  )
}
