'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, X } from 'lucide-react'

interface NowPlayingBarProps {
  nowPlaying: {
    title: string
    url: string
  }
}

export function NowPlayingBar({ nowPlaying }: NowPlayingBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

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
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2300ff99&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`
  }

  return (
    <>
      {/* Now Playing Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-t border-border transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Now Playing Info */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="shrink-0 text-accent hover:text-accent/80 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <div className="min-w-0">
                <p className="text-xs text-muted">Now Playing</p>
                <p className="text-sm font-medium text-foreground truncate">
                  {nowPlaying.title}
                </p>
              </div>
            </div>

            {/* Open on SoundCloud Button */}
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

      {/* Embedded Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-background border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full text-foreground hover:text-accent transition-colors"
              aria-label="Close player"
            >
              <X size={20} />
            </button>

            {/* SoundCloud Embed */}
            <div className="w-full">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={getEmbedUrl(nowPlaying.url)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
