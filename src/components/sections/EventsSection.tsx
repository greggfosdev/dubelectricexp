'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Ticker } from '@/components/ui/Ticker'
import { EventRow } from '@/components/ui/EventRow'
import type { EventsContent } from '@/types/content'

interface EventsSectionProps {
  events: EventsContent
}

export function EventsSection({ events }: EventsSectionProps) {
  const [showPast, setShowPast] = useState(false)

  // Group events by year
  const eventsByYear = events.upcoming.reduce((acc, event) => {
    const year = event.date.split('-')[0]
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(event)
    return acc
  }, {} as Record<string, typeof events.upcoming>)

  const years = Object.keys(eventsByYear).sort()

  return (
    <>
      {/* Event Ticker */}
      <Ticker nextEvent={events.upcoming[0]} />

      {/* Events Section */}
      <Section id="events" className="bg-background">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-2 text-center">
            <p className="text-xs font-bold text-muted uppercase tracking-widest">
              Tour Dates
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              CATCH US LIVE
            </h2>
          </div>

          {/* Events Grouped by Year */}
          {events.upcoming.length > 0 ? (
            <div className="space-y-12">
              {years.map((year) => (
                <div key={year} className="space-y-0">
                  {/* Year Header */}
                  <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                    {year}
                  </h3>

                  {/* Events for this year */}
                  <div>
                    {eventsByYear[year].map((event) => (
                      <EventRow key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted py-8">
              No upcoming events posted — follow for updates
            </p>
          )}

          {/* Past Events Toggle */}
          {events.archive.length > 0 && (
            <div className="space-y-4 pt-8 border-t border-border">
              <button
                onClick={() => setShowPast(!showPast)}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {showPast ? '↑ Hide past events' : '↓ Show past events'}
              </button>

              {showPast && (
                <div className="pt-4">
                  {events.archive.map((event) => (
                    <EventRow key={event.id} event={event} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
