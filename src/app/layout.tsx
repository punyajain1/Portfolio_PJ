import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Punya Jain - Portfolio',
  description: 'Portfolio website showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-typewriter antialiased bg-white text-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
