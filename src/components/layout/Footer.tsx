import type { SiteConfig } from '@/types/content'
import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  siteConfig: SiteConfig
}

export function Footer({ siteConfig }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Dub Electric"
            width={200}
            height={45}
            className="h-10 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />

          {/* Social Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href={siteConfig.social.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              SoundCloud
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              TikTok
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>

          {/* Booking Email */}
          <p className="text-sm text-muted">
            For bookings:{' '}
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-foreground hover:text-accent transition-colors"
            >
              {siteConfig.social.email}
            </a>
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-border">•</span>
            <Link
              href="/terms"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
