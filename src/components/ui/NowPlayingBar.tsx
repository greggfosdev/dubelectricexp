'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, ChevronDown } from 'lucide-react'

interface NowPlayingBarProps {
  nowPlaying: {
    title: string
    url: string
  }
}

export function NowPlayingBar({ nowPlaying }: NowPlayingBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Convert SoundCloud URL to embed URL
  const getEmbedUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2300ff99&auto_play=${isExpanded}&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-t border-border transition-all duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Collapsed Bar */}
        <div className="px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Now Playing Info */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="shrink-0 text-accent hover:text-accent/80 transition-colors"
                aria-label={isExpanded ? 'Collapse player' : 'Expand player'}
              >
                {isExpanded ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <div className="min-w-0">
                <p className="text-xs text-muted">Now Playing</p>
                <p className="text-sm font-medium text-foreground truncate">
                  {nowPlaying.title}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              {isExpanded && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="shrink-0 p-2 text-muted hover:text-foreground transition-colors"
                  aria-label="Collapse player"
                >
                  <ChevronDown size={20} />
                </button>
              )}
              <a
                href={nowPlaying.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all"
              >
                Open
              </a>
            </div>
          </div>
        </div>

        {/* Expanded Player */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[166px]' : 'max-h-0'
          }`}
        >
          <div className="px-4 pb-4 lg:px-6">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={isExpanded ? getEmbedUrl(nowPlaying.url) : ''}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
