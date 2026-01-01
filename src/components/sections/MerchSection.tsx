import { Section } from '@/components/ui/Section'
import { ProductCard } from '@/components/ui/ProductCard'
import type { MerchContent } from '@/types/content'

interface MerchSectionProps {
  merch: MerchContent
}

export function MerchSection({ merch }: MerchSectionProps) {
  return (
    <Section id="merch" className="bg-border/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6h-4zM10 4h4v2h-4V4zm7 15H7V8h10v11z"/>
            </svg>
            Official Merch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            MERCH
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Rep the collective. Premium gear for those who know.
          </p>
        </div>

        {/* Value Props */}
        <div className="bg-accent/5 border border-accent/10 rounded-lg p-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Exclusive Designs
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Premium Quality
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Worldwide Shipping
            </span>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merch.featured.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        {merch.storefrontUrl && (
          <div className="text-center pt-4">
            <a
              href={merch.storefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-all"
            >
              Browse full collection →
            </a>
          </div>
        )}
      </div>
    </Section>
  )
}
