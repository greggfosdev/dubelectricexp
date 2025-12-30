import type { Event } from '@/types/content'

interface EventRowProps {
  event: Event
}

export function EventRow({ event }: EventRowProps) {
  // Parse date as local date to avoid timezone issues
  const [year, month, day] = event.date.split('-').map(Number)
  const eventDate = new Date(year, month - 1, day)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border rounded-lg hover:border-accent/50 hover:translate-y-[-2px] transition-all">
      {/* Event Details */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-3 flex-wrap">
          <time className="text-sm font-bold text-accent">{formattedDate}</time>
          {event.note && (
            <span className="text-xs text-muted">• {event.note}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted">
          {event.city} • {event.venue}
        </p>
      </div>

      {/* CTA */}
      {event.ticketUrl && (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-all"
        >
          Tickets / RSVP
        </a>
      )}
    </div>
  )
}
