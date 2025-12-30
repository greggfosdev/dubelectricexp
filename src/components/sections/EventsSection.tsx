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
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
              </svg>
              Tour Dates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              CATCH US LIVE
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              Upcoming shows and events. Lock in early.
            </p>
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
