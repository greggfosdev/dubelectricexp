'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { MobileNav } from './MobileNav'

const navLinks: Array<{ href: string; label: string; variant?: 'cta' }> = [
  { href: '#services', label: 'Services' },
  { href: '#events', label: 'Events' },
  { href: '#music', label: 'Mixes' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#history', label: 'Story' },
  { href: '#merch', label: 'Merch' },
  { href: '#contact', label: 'Book Now', variant: 'cta' },
]

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileNavOpen(false)

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Dub Electric"
                width={450}
                height={100}
                className="h-16 md:h-20 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={
                    link.variant === 'cta'
                      ? 'px-4 py-2 text-sm font-bold bg-accent text-background rounded-lg uppercase tracking-wide hover:bg-accent/90 hover:scale-105 transition-all cursor-pointer'
                      : 'text-sm font-semibold text-foreground hover:text-accent transition-all cursor-pointer uppercase tracking-wide hover:scale-105'
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        onNavClick={handleNavClick}
      />
    </>
  )
}
