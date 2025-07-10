import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function SEO({
  title = 'CareerPath - Karyerangizni rivojlantiring',
  description = 'AI yordamida kasb tanlash, shaxsiyat va IQ testlari, karyera yo\'l xaritasi. Eng mos kasb va ish o\'rinlarini toping.',
  keywords = 'career, job, test, AI, kariyra, kasb, ish, shaxsiyat testi, IQ test, karyera',
  image = '/images/og-image.jpg',
  url = 'https://careerpath-demo.vercel.app',
  type = 'website',
  siteName = 'CareerPath',
  locale = 'uz_UZ',
  author = 'CareerPath Team',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const fullTitle = title.includes('CareerPath') ? title : `${title} | CareerPath`
  const fullImage = image.startsWith('http') ? image : `${url}${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@careerpath_uz" />
      <meta name="twitter:creator" content="@careerpath_uz" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CareerPath" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://api.openai.com" />
      <link rel="preconnect" href="https://supabase.co" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "description": description,
            "url": url,
            "image": fullImage,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Head>
  )
}

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: 'CareerPath - Karyerangizni rivojlantiring',
    description: 'AI yordamida kasb tanlash, shaxsiyat va IQ testlari, karyera yo\'l xaritasi. Eng mos kasb va ish o\'rinlarini toping.',
    keywords: 'career, job, AI, kariyra, kasb, ish, career path, karyera'
  },
  
  tests: {
    title: 'Shaxsiyat va IQ testlari',
    description: 'Big Five shaxsiyat testi va IQ testini topshing. Natijalarga asoslangan kasb tavsiyalari oling.',
    keywords: 'shaxsiyat testi, IQ test, psixologik test, big five, personality test'
  },
  
  careers: {
    title: 'Kasb yo\'nalishlari va tavsiyalar',
    description: 'AI tahlili asosida sizga mos kasb yo\'nalishlarini ko\'ring va karyera yo\'l xaritasini yarating.',
    keywords: 'kasb, career, profession, karyera, kasb tanlash, kasb yo\'nalishi'
  },
  
  jobs: {
    title: 'Ish o\'rinlari va vakansiyalar',
    description: 'Sizga mos ish o\'rinlarini toping va AI yordamida eng yaxshi takliflarni oling.',
    keywords: 'ish, vakansiya, job, employment, ish o\'rni, ishga joylashish'
  },
  
  chat: {
    title: 'AI Karyera maslahatchi',
    description: 'Sun\'iy intellekt bilan suhbatlashing va kasb tanlash bo\'yicha professional maslahat oling.',
    keywords: 'AI, maslahatchi, career advisor, sun\'iy intellekt, chatbot'
  }
}