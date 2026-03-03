import { MetadataRoute } from 'next';

const baseUrl = 'https://powen-site.vercel.app'; // ← Canlı domain olunca güncelleyin

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'tr', 'de'];

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  }));
}
