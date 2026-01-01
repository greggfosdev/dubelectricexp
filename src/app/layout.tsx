import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getSiteConfig } from '@/lib/content'

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
    default: "Dub Electric — Dancehall & Reggae DJ Collective",
    template: "%s | Dub Electric"
  },
  description: "Dub Electric is a dancehall and reggae DJ collective rooted in sound system culture. Stream our latest mixes on SoundCloud, catch us live at events, and book us for your next session.",
  keywords: [
    "Dub Electric",
    "dancehall DJ",
    "reggae DJ",
    "sound system",
    "DJ collective",
    "dancehall music",
    "reggae music",
    "Atlanta DJ",
    "Florida DJ",
    "Belize events",
    "Caribbean music",
    "bashment",
    "roots reggae",
    "DJ booking",
    "live events",
    "SoundCloud DJ",
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
    title: "Dub Electric — Dancehall & Reggae DJ Collective",
    description: "Dancehall and reggae DJ collective rooted in sound system culture. Stream our latest mixes, catch us live, and book us for your next event.",
    siteName: "Dub Electric",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dub Electric - Dancehall & Reggae Sound System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dub Electric — Dancehall & Reggae DJ Collective",
    description: "Dancehall and reggae DJ collective rooted in sound system culture. Stream our latest mixes, catch us live, and book us.",
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

  // JSON-LD Schema for Music Group
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
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
    sameAs: [
      siteConfig.social.soundcloud,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.social.email,
      contactType: 'Bookings',
    },
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
