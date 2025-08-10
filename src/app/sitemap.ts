import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/reviews',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/reviews/smartwatch',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
