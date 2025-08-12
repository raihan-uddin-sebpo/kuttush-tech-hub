import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/_next/', '/api/'],
      }
    ],
    sitemap: 'https://kuttush-tech-hub-three.vercel.app/sitemap.xml',
    host: 'https://kuttush-tech-hub-three.vercel.app',
  }
}
