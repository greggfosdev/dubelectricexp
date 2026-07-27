'use client'

import { Check, Disc3, MonitorPlay, Sparkles, Speaker, type LucideIcon } from 'lucide-react'
import type { ServiceItem } from '@/types/content'
import { requestBookingIntent } from '@/lib/bookingIntent'

const ICONS: Record<string, LucideIcon> = {
  'disc-3': Disc3,
  speaker: Speaker,
  'monitor-play': MonitorPlay,
}

interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS[service.icon] ?? Sparkles

  return (
    <div className="group relative flex flex-col gap-6 p-8 bg-gradient-to-br from-border/5 to-border/10 border border-border/50 rounded-2xl hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300">
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
        <Icon size={24} />
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
        <p className="text-sm text-muted leading-relaxed">{service.description}</p>
      </div>

      {/* Bullets */}
      <ul className="space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-foreground">
            <Check size={16} className="text-accent shrink-0 mt-1" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* CTA: pre-selects the matching inquiry type on the booking form */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          requestBookingIntent(service.cta.inquiryType)
        }}
        className="mt-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium border-2 border-accent text-foreground rounded-lg hover:bg-accent hover:text-background transition-all"
      >
        {service.cta.label}
      </a>
    </div>
  )
}
