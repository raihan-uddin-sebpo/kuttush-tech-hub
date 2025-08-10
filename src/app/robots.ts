import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/sitemap.xml',
  }
}
