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
      {/* Asymmetric Grid Collage Layout */}
      <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
        {/* Image 1 - Large */}
        <div className="col-span-12 md:col-span-5 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[0].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 2 - Medium */}
        <div className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[1].src}
            alt={photos[1].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[1].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 3 - Medium */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[2].src}
            alt={photos[2].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[2].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 4 - Tall */}
        <div className="col-span-6 md:col-span-3 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[3].src}
            alt={photos[3].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[3].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 5 - Medium */}
        <div className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[4].src}
            alt={photos[4].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[4].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 6 - Wide */}
        <div className="col-span-12 md:col-span-6 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[5].src}
            alt={photos[5].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[5].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 7 - Medium */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[6].src}
            alt={photos[6].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[6].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 8 - Medium */}
        <div className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[7].src}
            alt={photos[7].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[7].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 9 - Large */}
        <div className="col-span-12 md:col-span-7 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[8].src}
            alt={photos[8].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[8].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 10 - Tall */}
        <div className="col-span-6 md:col-span-5 row-span-2 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[9].src}
            alt={photos[9].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[9].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 11 - Wide */}
        <div className="col-span-12 md:col-span-6 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[10].src}
            alt={photos[10].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[10].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Image 12 - Medium */}
        <div className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden rounded-lg">
          <Image
            src={photos[11].src}
            alt={photos[11].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: photos[11].position || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  )
}
