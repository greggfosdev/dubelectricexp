import type { InquiryType } from '@/types/contact'

// Lets any client component (service cards, future CTAs) open the booking form
// with an inquiry type pre-selected. A module-level pub/sub is deliberate:
// query params would force a Suspense boundary on an otherwise static page and
// ignore repeat clicks, and hash payloads would break the smooth-scroll
// handlers that rely on hrefs being valid element-id selectors.

type Listener = (type: InquiryType) => void

const listeners = new Set<Listener>()
let pendingIntent: InquiryType | null = null

export function requestBookingIntent(type: InquiryType): void {
  pendingIntent = type
  listeners.forEach((listener) => listener(type))
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

export function subscribeBookingIntent(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// Covers a click that fires before the form has mounted and subscribed.
export function consumePendingIntent(): InquiryType | null {
  const pending = pendingIntent
  pendingIntent = null
  return pending
}
