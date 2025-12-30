'use client'

import { useEffect, useRef, useState } from 'react'
import type { SiteConfig } from '@/types/content'

interface HeroProps {
  siteConfig: SiteConfig
}

export function Hero({ siteConfig }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(siteConfig.cta.bookAnchor)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const parallaxOffset = scrollY * 0.5

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Video Background with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content with Fade-in Animation */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground drop-shadow-2xl">
          Dub Electric — high-energy selections built for real sound.
        </h1>

        {/* Subcopy */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto drop-shadow-lg">
          Music, events, and culture from the collective. Tap in, catch us live, or book a session.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <a
            href={siteConfig.cta.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg hover:shadow-accent/50"
          >
            <span className="group-hover:mr-2 transition-all">Listen on SoundCloud</span>
            <svg className="w-0 group-hover:w-5 transition-all overflow-hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href={siteConfig.cta.bookAnchor}
            onClick={handleBookClick}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border-2 border-accent text-foreground rounded-lg hover:bg-accent hover:text-background transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg"
          >
            Book Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </div>
  )
}
