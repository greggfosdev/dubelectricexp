'use client'

import Image from 'next/image'

interface Photo {
  src: string
  alt: string
  position?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Creative Collage Layout with Photos & Quotes */}
      <div className="grid grid-cols-12 gap-4 auto-rows-[250px]">

        {/* Image 1 - Large with Quote Overlay */}
        <div className="col-span-12 md:col-span-5 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            className="object-cover brightness-75"
            style={{ objectPosition: photos[0].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              "Sound system culture is about bringing people together through music."
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[1].position || 'center' }}
          />
        </div>

        {/* Quote Card 1 */}
        <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl font-bold text-foreground mb-2">
              "Dub Plates. Beats. Electronic Music."
            </p>
            <p className="text-sm text-muted">— Dub Electric</p>
          </div>
        </div>

        {/* Image 3 - Tall */}
        <div className="col-span-6 md:col-span-3 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[2].position || 'center' }}
          />
        </div>

        {/* Image 4 */}
        <div className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[3].src}
            alt={photos[3].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[3].position || 'center' }}
          />
        </div>

        {/* Quote Card 2 - Large */}
        <div className="col-span-12 md:col-span-6 row-span-1 relative overflow-hidden rounded-lg bg-black border border-accent/30 p-8 flex items-center justify-center">
          <div className="text-center max-w-xl">
            <svg className="w-12 h-12 text-accent/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Real sound for real people
            </p>
            <p className="text-accent text-sm mt-4 uppercase tracking-wider">The Dub Electric Way</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[4].src}
            alt={photos[4].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[4].position || 'center' }}
          />
        </div>

        {/* Image 6 */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[5].src}
            alt={photos[5].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[5].position || 'center' }}
          />
        </div>

        {/* Image 7 - Large */}
        <div className="col-span-12 md:col-span-7 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[6].src}
            alt={photos[6].alt}
            fill
            className="object-cover brightness-90"
            style={{ objectPosition: photos[6].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-8 -translate-y-1/2 max-w-md">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              From roots to bashment, we bring the energy
            </p>
          </div>
        </div>

        {/* Image 8 - Tall */}
        <div className="col-span-6 md:col-span-5 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[7].src}
            alt={photos[7].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[7].position || 'center' }}
          />
        </div>

        {/* Quote Card 3 */}
        <div className="col-span-6 md:col-span-4 row-span-1 relative overflow-hidden rounded-lg bg-gradient-to-br from-accent to-accent/80 p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-background">
              "In 2021 we built the sound system because the bass has to be real"
            </p>
          </div>
        </div>

        {/* Image 9 */}
        <div className="col-span-12 md:col-span-6 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[8].src}
            alt={photos[8].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[8].position || 'center' }}
          />
        </div>

        {/* Image 10 */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[9].src}
            alt={photos[9].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[9].position || 'center' }}
          />
        </div>

        {/* Image 11 */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[10].src}
            alt={photos[10].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[10].position || 'center' }}
          />
        </div>

        {/* Image 12 with Text Overlay */}
        <div className="col-span-12 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[11].src}
            alt={photos[11].alt}
            fill
            className="object-cover brightness-75"
            style={{ objectPosition: photos[11].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-lg font-bold">
              Quality first, always.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
