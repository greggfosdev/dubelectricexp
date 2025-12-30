'use client'

import { useEffect } from 'react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navLinks: Array<{ href: string; label: string }>
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function MobileNav({ isOpen, onClose, navLinks, onNavClick }: MobileNavProps) {
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Menu */}
      <nav className="fixed inset-x-0 top-[72px] bottom-0 z-40 md:hidden animate-in slide-in-from-top duration-300">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="text-2xl font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
