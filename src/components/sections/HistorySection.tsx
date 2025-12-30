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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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
