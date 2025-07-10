import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareerPath - Karyerangizni rivojlantiring',
  description: 'AI yordamida kasb tanlash, testlar va karyera yo\'l xaritasi',
  keywords: 'career, job, test, AI, kariyra, kasb, ish',
  authors: [{ name: 'CareerPath Team' }],
  openGraph: {
    title: 'CareerPath - Karyerangizni rivojlantiring',
    description: 'AI yordamida kasb tanlash, testlar va karyera yo\'l xaritasi',
    type: 'website',
    locale: 'uz_UZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerPath - Karyerangizni rivojlantiring',
    description: 'AI yordamida kasb tanlash, testlar va karyera yo\'l xaritasi',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}