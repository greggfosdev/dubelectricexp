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
    <div className="group py-8 border-b border-border/30 hover:border-accent/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Date */}
        <div className="flex items-baseline gap-2 md:min-w-[120px] pt-1">
          <time className="text-4xl font-bold text-foreground tracking-tight">
            {monthShort} {dayNum}
          </time>
        </div>

        {/* Location & Event Details */}
        <div className="flex-1 md:px-8">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
              {event.city}
            </h3>
            {event.note && (
              <span className="text-sm text-muted uppercase tracking-wide">
                {event.note}
              </span>
            )}
          </div>
          <p className="text-base text-muted mt-2">{event.title}</p>
        </div>

        {/* CTA */}
        {event.ticketUrl && (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors w-full md:w-auto md:shrink-0"
          >
            Get Tickets
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
