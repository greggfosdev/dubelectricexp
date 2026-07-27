import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/ui/ContactForm'
import type { SiteConfig } from '@/types/content'

interface ContactSectionProps {
  siteConfig: SiteConfig
}

export function ContactSection({ siteConfig }: ContactSectionProps) {
  const { contactName, phone } = siteConfig.booking
  const telHref = `tel:${phone.replace(/[^+\d]/g, '')}`

  return (
    <Section id="contact" className="bg-background">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Bookings & Inquiries
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            WHAT ARE YOU PLANNING?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Tell us what you&apos;re building and the right person gets back to you, usually
            within 24-48 hours.
          </p>
          <p className="text-base text-muted">
            Prefer to talk? Call or text {contactName} at{' '}
            <a
              href={telHref}
              className="text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              {phone}
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </Section>
  )
}
