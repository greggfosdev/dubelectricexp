import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { MusicSection } from '@/components/sections/MusicSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { MerchSection } from '@/components/sections/MerchSection'
import { HistorySection } from '@/components/sections/HistorySection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { NowPlayingBar } from '@/components/ui/NowPlayingBar'
import {
  getSiteConfig,
  getMusic,
  getEvents,
  getMerch,
  getHistory,
  getServices,
  getTestimonials,
} from '@/lib/content'

export default async function HomePage() {
  const siteConfig = await getSiteConfig()
  const services = await getServices()
  const music = await getMusic()
  const events = await getEvents()
  const merch = await getMerch()
  const history = await getHistory()
  const testimonials = await getTestimonials()

  return (
    <>
      <Hero siteConfig={siteConfig} />
      <ServicesSection services={services} />
      <EventsSection events={events} />
      <MusicSection music={music} />
      <GallerySection />
      <HistorySection history={history} />
      <TestimonialsSection testimonials={testimonials} />
      <MerchSection merch={merch} />
      <ContactSection siteConfig={siteConfig} />
      <NowPlayingBar nowPlaying={music.nowPlaying} />
    </>
  )
}
