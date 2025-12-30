import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-16 lg:px-6 lg:py-24 ${className}`}
    >
      {children}
    </section>
  )
}
