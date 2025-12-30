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
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            LATEST DROPS
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Fresh mixes and selections from the collective. Turn it up.
          </p>
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
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-all"
          >
            View all on SoundCloud →
          </a>
        </div>
      </div>
    </Section>
  )
}
