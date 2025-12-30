import { Section } from '@/components/ui/Section'
import { SoundCloudEmbed } from '@/components/ui/SoundCloudEmbed'
import type { MusicContent } from '@/types/content'

interface MusicSectionProps {
  music: MusicContent
}

export function MusicSection({ music }: MusicSectionProps) {
  return (
    <Section id="music" className="bg-background">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Latest Releases
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            LATEST DROPS
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Fresh mixes and selections from the collective. Turn it up.
          </p>

          {/* Streaming Platforms */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <span className="text-sm text-muted">Stream on:</span>
            <a
              href={music.soundcloudProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-border/10 hover:bg-accent/10 border border-border/50 hover:border-accent/50 rounded-lg transition-all"
            >
              <svg className="w-5 h-5 text-muted group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.263-2.068-3.772-4.121-2.815z"/>
              </svg>
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">SoundCloud</span>
            </a>
          </div>
        </div>

        {/* Featured Embeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {music.featured.map((embed, index) => (
            <SoundCloudEmbed key={index} embed={embed} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href={music.soundcloudProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-accent text-background rounded-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-accent/50"
          >
            <span>View Full Catalog</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  )
}
