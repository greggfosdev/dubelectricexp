import type { Event } from '@/types/content'

interface EventRowProps {
  event: Event
}

export function EventRow({ event }: EventRowProps) {
  // Parse date as local date to avoid timezone issues
  const [year, month, day] = event.date.split('-').map(Number)
  const eventDate = new Date(year, month - 1, day)

  const monthShort = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const dayNum = eventDate.toLocaleDateString('en-US', { day: 'numeric' })

  return (
    <div className="group flex items-center justify-between py-6 border-b border-border/30 hover:border-accent/30 transition-colors">
      {/* Date */}
      <div className="flex items-baseline gap-2 min-w-[100px]">
        <time className="text-2xl font-bold text-foreground tracking-tight">
          {monthShort} {dayNum}
        </time>
      </div>

      {/* Location & Event Details */}
      <div className="flex-1 px-6">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
            {event.city}
          </h3>
          {event.note && (
            <span className="text-xs text-muted uppercase tracking-wide">
              {event.note}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-muted">{event.title}</p>
        </div>
      </div>

      {/* CTA */}
      {event.ticketUrl && (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:bg-accent transition-colors"
        >
          Get Tickets
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  )
}
