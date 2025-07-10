import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareerPath - Karyera yo'l xaritangiz",
  description: "AI yordamida kasb tanlash va karyera rivojlantirish platformasi",
  keywords: "career, job, test, AI, kariyra, kasb, ish",
  authors: [{ name: "CareerPath Team" }],
  openGraph: {
    title: "CareerPath - Karyerangizni rivojlantiring",
    description: "AI yordamida kasb tanlash, testlar va karyera yo'l xaritasi",
    type: "website",
    locale: "uz_UZ",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <div className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="text-2xl font-bold">
              <Link href="/">CareerPath</Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <button className="btn btn-primary btn-rounded">Kirish</button>
              </Link>
              <Link href="/register">
                <button className="btn btn-primary btn-rounded">Ro'yxatdan o'tish</button>
              </Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}