import type { Metadata } from 'next'
import './globals.css'
import EasterEgg from '@/components/EasterEgg'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Punya Jain - Portfolio',
  description: 'Portfolio website showcasing my work and experience',
  icons: {
    icon: '/punya.jpg',
    shortcut: '/punya.jpg',
    apple: '/punya.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
      </body>
    </html>
  )
}
