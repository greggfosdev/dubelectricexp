import { Hero } from '@/components/sections/Hero'
import { MusicSection } from '@/components/sections/MusicSection'
import { EventsSection } from '@/components/sections/EventsSection'
// import { MerchSection } from '@/components/sections/MerchSection'
import { HistorySection } from '@/components/sections/HistorySection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { NowPlayingBar } from '@/components/ui/NowPlayingBar'
import { getSiteConfig, getMusic, getEvents, getHistory, getTestimonials } from '@/lib/content'

export default async function HomePage() {
  const siteConfig = await getSiteConfig()
  const music = await getMusic()
  const events = await getEvents()
  // const merch = await getMerch()
  const history = await getHistory()
  const testimonials = await getTestimonials()

  return (
    <>
      <Hero siteConfig={siteConfig} />
      <MusicSection music={music} />
      <EventsSection events={events} />
      {/* <MerchSection merch={merch} /> */}
      <HistorySection history={history} />
      <GallerySection />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <NowPlayingBar nowPlaying={music.nowPlaying} />
    </>
  )
}
