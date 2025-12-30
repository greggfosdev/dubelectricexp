import type { HistoryMilestone } from '@/types/content'

interface TimelineProps {
  milestones: HistoryMilestone[]
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-border" />

      {milestones.map((milestone, index) => (
        <div key={index} className="relative flex gap-6 group">
          {/* Dot */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-accent bg-background flex items-center justify-center group-hover:bg-accent transition-colors">
              <div className="h-2 w-2 rounded-full bg-accent group-hover:bg-background transition-colors" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-baseline gap-3 mb-2">
              <time className="text-xl font-bold text-accent">
                {milestone.year}
              </time>
            </div>
            <p className="text-base text-foreground leading-relaxed">
              {milestone.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
