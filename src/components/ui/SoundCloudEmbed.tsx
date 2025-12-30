import type { MusicEmbed } from '@/types/content'

interface SoundCloudEmbedProps {
  embed: MusicEmbed
}

export function SoundCloudEmbed({ embed }: SoundCloudEmbedProps) {
  return (
    <div className="space-y-3">
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground">{embed.title}</h3>

      {/* Embed */}
      <div className="relative w-full" style={{ paddingTop: '200px' }}>
        <iframe
          width="100%"
          height="200"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embed.embedSrc}
          loading="lazy"
          title={embed.title}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        />
      </div>

      {/* Caption */}
      {embed.caption && (
        <p className="text-sm text-muted">{embed.caption}</p>
      )}
    </div>
  )
}
