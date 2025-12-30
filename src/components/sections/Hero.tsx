'use client'

import { useEffect, useRef } from 'react'
import type { SiteConfig } from '@/types/content'

interface HeroProps {
  siteConfig: SiteConfig
}

export function Hero({ siteConfig }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Smooth loop by seeking slightly before the end
    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.3) {
        video.currentTime = 0
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(siteConfig.cta.bookAnchor)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Dub Electric — high-energy selections built for real sound.
        </h1>

        {/* Subcopy */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
          Music, events, and culture from the collective. Tap in, catch us live, or book a session.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <a
            href={siteConfig.cta.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Listen on SoundCloud
          </a>

          {/* Secondary CTA */}
          <a
            href={siteConfig.cta.bookAnchor}
            onClick={handleBookClick}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-border text-foreground rounded-lg hover:border-accent hover:text-accent transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Book Us
          </a>
        </div>
      </div>
    </div>
  )
}
