import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careerpath-demo.vercel.app'
  
  const routes = [
    '',
    '/about',
    '/features', 
    '/pricing',
    '/careers',
    '/dashboard',
    '/dashboard/tests',
    '/dashboard/tests/personality',
    '/dashboard/tests/iq',
    '/dashboard/careers',
    '/dashboard/chat',
    '/dashboard/jobs',
    '/auth/login',
    '/auth/register'
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/dashboard') ? 0.8 : 0.6,
  }))
}