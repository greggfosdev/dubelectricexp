import Image from 'next/image'
import type { MerchItem } from '@/types/content'

interface ProductCardProps {
  item: MerchItem
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-4 border border-border rounded-lg hover:border-accent/50 transition-all">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-border/20">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-accent whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        {item.description && (
          <p className="text-sm text-muted line-clamp-2">
            {item.description}
          </p>
        )}
      </div>

      {/* CTA */}
      <a
        href={item.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-accent text-background rounded-lg hover:bg-accent/90 transition-all"
      >
        Buy Now
      </a>
    </div>
  )
}
