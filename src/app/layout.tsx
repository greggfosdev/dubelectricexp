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
    default: "Dub Electric — High-Energy DJ Collective",
    template: "%s | Dub Electric"
  },
  description: "Dub Electric is a high-energy DJ collective rooted in sound system culture. Listen to our latest mixes, catch us live, and book us for your next event.",
  keywords: ["DJ collective", "Dub Electric", "sound system", "electronic music", "live sets", "NYC DJs", "booking"],
  authors: [{ name: "Dub Electric" }],
  creator: "Dub Electric",
  publisher: "Dub Electric",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dub Electric — High-Energy DJ Collective",
    description: "High-energy DJ collective rooted in sound system culture. Listen, catch us live, or book a session.",
    siteName: "Dub Electric",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dub Electric",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dub Electric — High-Energy DJ Collective",
    description: "High-energy DJ collective rooted in sound system culture. Listen, catch us live, or book a session.",
    images: [`${siteUrl}/og-image.jpg`],
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig()

  // JSON-LD Schema for Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Dub Electric',
    description: 'High-energy DJ collective rooted in sound system culture',
    url: siteUrl,
    sameAs: [
      siteConfig.social.soundcloud,
      siteConfig.social.instagram,
    ],
    email: siteConfig.social.email,
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
