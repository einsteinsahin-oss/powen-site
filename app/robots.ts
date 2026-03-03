import { MetadataRoute } from 'next';

const baseUrl = 'https://powen-site.vercel.app'; // ← Canlı domain olunca güncelleyin

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
