import { Section } from '@/components/ui/Section'
import type { HistoryContent } from '@/types/content'

interface HistorySectionProps {
  history: HistoryContent
}

export function HistorySection({ history }: HistorySectionProps) {
  return (
    <Section id="history" className="bg-background">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            THE STORY
          </h2>
          <p className="text-xl md:text-2xl text-accent font-semibold max-w-3xl mx-auto">
            {history.intro}
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed text-center">
            {history.story}
          </p>
        </div>
      </div>
    </Section>
  )
}
