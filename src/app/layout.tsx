import type { Metadata } from 'next'
import './globals.css'
import EasterEgg from '@/components/EasterEgg'
import { ThemeProvider } from '@/context/ThemeContext'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://jainsahab.tech'),

  title: {
    default: 'Punya Jain | Full-Stack & AI Developer',
    template: '%s | Punya Jain',
  },
  description:
    'Punya Jain — CS undergrad from Delhi building AI-powered tools, automation bots, and full-stack apps with Next.js, TypeScript, and Node.js. Open to collaborations.',
  keywords: [
    'Punya Jain',
    'jainsahab.tech',
    'portfolio',
    'full-stack developer',
    'frontend developer',
    'Next.js developer',
    'TypeScript developer',
    'AI engineer',
    'Delhi developer',
    'React developer',
    'Node.js developer',
    'automation engineer',
  ],
  authors: [{ name: 'Punya Jain', url: 'https://jainsahab.tech' }],
  creator: 'Punya Jain',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jainsahab.tech',
    siteName: 'Punya Jain Portfolio',
    title: 'Punya Jain | Full-Stack & AI Developer',
    description:
      'Building AI tools, automation systems, and full-stack apps. CS undergrad from Delhi. Open to collaborations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Punya Jain — Full-Stack & AI Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Punya Jain | Full-Stack & AI Developer',
    description:
      'Building in public — AI tools, automation, and full-stack with Next.js & TypeScript.',
    creator: '@PunyaJain01',
    images: ['/og-image.png'],
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

  alternates: {
    canonical: 'https://jainsahab.tech',
  },

  icons: {
    icon: '/punya.jpg',
    shortcut: '/punya.jpg',
    apple: '/punya.jpg',
  },

  verification: {
    // Add your Google Search Console verification token here:
    // google: 'your-verification-token',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Punya Jain',
  url: 'https://jainsahab.tech',
  jobTitle: 'Full-Stack & AI Developer',
  description:
    'CS undergrad from Delhi building AI tools, automation bots, and full-stack apps with Next.js, TypeScript, and Node.js.',
  image: 'https://jainsahab.tech/punya_2.jpg',
  email: 'punyajain1@gmail.com',
  sameAs: [
    'https://github.com/punyajain1',
    'https://linkedin.com/in/punya-jain-40ab8b2a6',
    'https://x.com/PunyaJain01',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'AI Agents',
    'LangChain',
    'Python',
    'PostgreSQL',
    'MongoDB',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'JSS Academy of Technical Education',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen transition-colors duration-200">
        <ThemeProvider>
          <EasterEgg />
          {children}
        </ThemeProvider>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
