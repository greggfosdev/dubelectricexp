import { Section } from '@/components/ui/Section'
import { PhotoGallery } from '@/components/ui/PhotoGallery'

const photos = [
  { src: '/gallery/1.jpg', alt: 'Dub Electric live session', position: 'center top' },
  { src: '/gallery/2.jpg', alt: 'Dub Electric event', position: 'center 30%' },
  { src: '/gallery/3.jpg', alt: 'Dub Electric performance', position: 'center 25%' },
  { src: '/gallery/4.jpg', alt: 'Dub Electric sound system', position: 'center 30%' },
  { src: '/gallery/5.jpg', alt: 'Dub Electric collective', position: 'center 35%' },
  { src: '/gallery/6.jpg', alt: 'Dub Electric live set', position: 'center 20%' },
  { src: '/gallery/7.jpg', alt: 'Dub Electric event moment', position: 'center 5%' },
]

export function GallerySection() {
  return (
    <Section id="gallery" className="bg-border/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            MOMENTS
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From the sessions to the stages—catch the vibe.
          </p>
        </div>

        {/* Photo Gallery */}
        <PhotoGallery photos={photos} />
      </div>
    </Section>
  )
}
