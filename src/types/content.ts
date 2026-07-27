import type { InquiryType } from './contact'

export interface SiteConfig {
  name: string
  tagline: string
  location: string
  primaryAccent: string
  social: {
    soundcloud: string
    instagram: string
    facebook: string
    tiktok: string
    email: string
  }
  cta: {
    listenUrl: string
    bookAnchor: string
  }
  booking: {
    contactName: string
    phone: string
  }
}

export interface MusicEmbed {
  title: string
  caption?: string
  embedSrc: string
}

export interface MusicContent {
  featured: MusicEmbed[]
  soundcloudProfileUrl: string
  nowPlaying: {
    title: string
    url: string
  }
}

export interface Event {
  id: string
  date: string
  title: string
  city: string
  venue: string
  ticketUrl: string
  note?: string
}

export interface EventsContent {
  upcoming: Event[]
  archive: Event[]
}

export interface MerchItem {
  id: string
  name: string
  price: number
  badge: string
  shippingNote: string
  image: string
  productUrl: string
  sizeGuideUrl?: string
  description?: string
}

export interface MerchContent {
  storefrontUrl: string
  featured: MerchItem[]
  items: MerchItem[]
  policy: {
    shipping: string
    returns: string
  }
}

export interface HistoryMilestone {
  year: string
  text: string
}

export interface HistoryContent {
  intro: string
  story: string
  milestones: HistoryMilestone[]
}

export interface ServiceItem {
  id: string
  icon: string // lucide icon key, resolved in ServiceCard
  title: string
  description: string
  bullets: string[]
  cta: {
    label: string
    inquiryType: InquiryType
  }
}

export interface ServicesContent {
  services: ServiceItem[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  image?: string
  quote: string
  rating?: number
  eventType?: string
}

export interface TestimonialsContent {
  testimonials: Testimonial[]
}
