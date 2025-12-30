import type { Event } from '@/types/content'

interface TickerProps {
  nextEvent: Event | undefined
}

export function Ticker({ nextEvent }: TickerProps) {
  if (!nextEvent) {
    return (
      <div className="w-full bg-border/30 py-3">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="text-center text-sm text-muted">
            No upcoming events posted — follow for updates
          </p>
        </div>
      </div>
    )
  }

  // Format date as "Jan 20" - parse as local date to avoid timezone issues
  const [year, month, day] = nextEvent.date.split('-').map(Number)
  const eventDate = new Date(year, month - 1, day)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="w-full bg-accent/10 border-y border-accent/20 py-3">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="font-bold text-accent">NEXT UP:</span>
          <span className="text-foreground">{formattedDate}</span>
          <span className="text-muted">•</span>
          <span className="text-foreground">
            {nextEvent.city}
          </span>
          <span className="text-muted">•</span>
          <span className="text-foreground">{nextEvent.venue}</span>
          {nextEvent.ticketUrl && (
            <>
              <span className="text-muted">•</span>
              <a
                href={nextEvent.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-1"
              >
                Tickets →
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
