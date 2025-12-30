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

  return (
    <>
      {/* Event Ticker */}
      <Ticker nextEvent={events.upcoming[0]} />

      {/* Events Section */}
      <Section id="events" className="bg-background">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              CATCH US LIVE
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Upcoming shows and events. Lock in early.
            </p>
          </div>

          {/* Upcoming Events */}
          {events.upcoming.length > 0 ? (
            <div className="space-y-4">
              {events.upcoming.map((event) => (
                <EventRow key={event.id} event={event} />
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
                <div className="space-y-4 pt-4">
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
