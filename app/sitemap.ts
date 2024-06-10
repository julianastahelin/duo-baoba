import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://duobaoba.com.br',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://duobaoba.com.br/sobre/mayara',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://duobaoba.com.br/sobre/david',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://duobaoba.com.br/contato',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: 'https://duobaoba.com.br/eventos',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ]
}