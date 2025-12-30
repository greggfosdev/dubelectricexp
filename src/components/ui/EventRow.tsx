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
    <div className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-border/5 border border-border/50 rounded-xl hover:border-accent/50 hover:bg-border/10 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Accent Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Event Details */}
      <div className="relative flex-1 space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <time className="inline-flex items-center px-3 py-1 text-xs font-bold text-background bg-accent rounded-full">
            {formattedDate}
          </time>
          {event.note && (
            <span className="text-xs text-muted bg-border/20 px-3 py-1 rounded-full">{event.note}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.city} • {event.venue}
        </p>
      </div>

      {/* CTA */}
      {event.ticketUrl ? (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold bg-accent text-background rounded-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-accent/50 whitespace-nowrap"
        >
          Get Tickets
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ) : (
        <div className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-muted">
          Details coming soon
        </div>
      )}
    </div>
  )
}
