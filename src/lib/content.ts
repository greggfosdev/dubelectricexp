import { promises as fs } from 'fs'
import path from 'path'
import type {
  SiteConfig,
  MusicContent,
  EventsContent,
  MerchContent,
  HistoryContent,
  TestimonialsContent,
} from '@/types/content'

const contentDir = path.join(process.cwd(), 'src', 'content')

async function loadJSON<T>(filename: string): Promise<T> {
  const filePath = path.join(contentDir, filename)
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents) as T
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return loadJSON<SiteConfig>('site.json')
}

export async function getMusic(): Promise<MusicContent> {
  return loadJSON<MusicContent>('music.json')
}

export async function getEvents(): Promise<EventsContent> {
  const events = await loadJSON<EventsContent>('events.json')

  // Sort upcoming events by date (ascending)
  events.upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Sort archive events by date (descending)
  events.archive.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return events
}

export async function getMerch(): Promise<MerchContent> {
  const rawData = await loadJSON<{
    storefrontUrl: string
    featured: string[]
    items: MerchContent['items']
    policy: MerchContent['policy']
  }>('merch.json')

  // Filter featured items based on IDs
  const featuredItems = rawData.featured
    .map(id => rawData.items.find(item => item.id === id))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)

  return {
    ...rawData,
    featured: featuredItems,
  }
}

export async function getHistory(): Promise<HistoryContent> {
  return loadJSON<HistoryContent>('history.json')
}

export async function getTestimonials(): Promise<TestimonialsContent> {
  return loadJSON<TestimonialsContent>('testimonials.json')
}

// Helper to get the next upcoming event
export function getNextEvent(events: EventsContent) {
  const now = new Date()
  return events.upcoming.find(event => new Date(event.date) >= now)
}
