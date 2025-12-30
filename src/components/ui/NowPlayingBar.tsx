'use client'

import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

interface NowPlayingBarProps {
  nowPlaying: {
    title: string
    url: string
  }
}

export function NowPlayingBar({ nowPlaying }: NowPlayingBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-t border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Now Playing Info */}
          <div className="flex items-center gap-3 min-w-0">
            <Play className="shrink-0 text-accent" size={20} />
            <div className="min-w-0">
              <p className="text-xs text-muted">Now Playing</p>
              <p className="text-sm font-medium text-foreground truncate">
                {nowPlaying.title}
              </p>
            </div>
          </div>

          {/* CTA Button */}
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
  )
}
