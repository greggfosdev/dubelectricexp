import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getServices, getSiteConfig } from '@/lib/content'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dubelectricexp.com'

export const metadata: Metadata = {
  title: {
    default: "Dub Electric Experience | DJs, Sound & Event Production",
    template: "%s | Dub Electric"
  },
  description: "Full-service DJ and event production company: pro sound systems, LED walls, and lighting for weddings, corporate events, festivals, nightlife, and Caribbean celebrations. East Coast based, traveling worldwide.",
  keywords: [
    "Dub Electric",
    "Dub Electric Experience",
    "event production",
    "DJ services",
    "wedding DJ",
    "corporate event DJ",
    "sound system rental",
    "LED wall rental",
    "event lighting",
    "festival production",
    "dancehall DJ",
    "reggae DJ",
    "soca",
    "Caribbean events",
    "sound system culture",
    "East Coast DJ",
    "DJ booking",
    "live events",
  ],
  authors: [{ name: "Dub Electric" }],
  creator: "Dub Electric",
  publisher: "Dub Electric",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dub Electric Experience | DJs, Sound & Event Production",
    description: "Full-service DJ and event production: pro sound systems, LED walls, and lighting for weddings, corporate events, festivals, nightlife, and Caribbean celebrations. East Coast based, traveling worldwide.",
    siteName: "Dub Electric",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dub Electric Experience | DJs, Sound & Event Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dub Electric Experience | DJs, Sound & Event Production",
    description: "DJs, pro sound, LED walls & event production, rooted in sound system culture. East Coast based, traveling worldwide.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@dubelectricexp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig()
  const services = await getServices()

  const socialProfiles = [
    siteConfig.social.soundcloud,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
  ]
  const businessId = `${siteUrl}/#business`
  const musicGroupId = `${siteUrl}/#musicgroup`

  // JSON-LD: the business is the primary entity; the DJ collective is a linked
  // sub-organization so the music identity stays represented.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: 'Dub Electric Experience',
        alternateName: ['Dub Electric', 'Dub Electric EXP'],
        description:
          'Full-service DJ and event production company: professional sound systems, LED video walls, and lighting for weddings, corporate events, festivals, nightlife, and Caribbean celebrations. Rooted in sound system culture. Based on the East Coast, traveling worldwide.',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.jpg`,
        email: siteConfig.social.email,
        foundingDate: '2015',
        areaServed: {
          '@type': 'Place',
          name: 'East Coast, United States',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Bookings',
          email: siteConfig.social.email,
          url: `${siteUrl}/#contact`,
        },
        sameAs: socialProfiles,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Event Services',
          itemListElement: services.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
        subOrganization: { '@id': musicGroupId },
      },
      {
        '@type': 'MusicGroup',
        '@id': musicGroupId,
        name: 'Dub Electric',
        alternateName: 'Dub Electric EXP',
        description: 'Dancehall and reggae DJ collective rooted in sound system culture',
        url: siteUrl,
        genre: ['Dancehall', 'Reggae', 'Caribbean', 'Bashment', 'Roots Reggae'],
        foundingDate: '2015',
        foundingLocation: {
          '@type': 'Place',
          name: 'NYC',
        },
        sameAs: socialProfiles,
        image: `${siteUrl}/og-image.jpg`,
        parentOrganization: { '@id': businessId },
      },
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer siteConfig={siteConfig} />
      </body>
    </html>
  );
}
