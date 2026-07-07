import { MetadataRoute } from 'next';

const baseUrl = 'https://powerenerlytics.com';

const insightSlugs = [
  'om-lessons',
  'om-failure-precursors',
  'performance-engineering',
  'grid-regulation',
  'failure-analysis',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'tr', 'de'];

  const homePages: MetadataRoute.Sitemap = locales.map((locale) => ({
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

  const insightPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    insightSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}/insights/${slug}`])
        ),
      },
    }))
  );

  return [...homePages, ...insightPages];
}
