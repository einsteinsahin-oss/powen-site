import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';
import Footer from '@/components/Footer';

// ── Schema.org JSON-LD bileşeni ───────────────────────────────────────────────
function JsonLd({ locale }: { locale: string }) {
  const baseUrl = 'https://powerenerlytics.com';

  const descriptions: Record<string, string> = {
    en: 'Engineering excellence in renewable energy: Advisory, EPC, O&M, Asset Management for wind, solar, hydro, gas and BESS power plants.',
    tr: 'Yenilenebilir enerjide mühendislik mükemmeliyeti: Rüzgar, güneş, hidro, gaz ve BESS santralleri için danışmanlık, EPC ve işletme-bakım.',
    de: 'Engineering-Exzellenz: Beratung, EPC, O&M für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke.',
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'POWEN',
    legalName: 'POWEN - Power Enerlytics',
    url: `${baseUrl}/${locale}`,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo.png`,
    },
    description: descriptions[locale] ?? descriptions['en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    areaServed: 'Worldwide',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'info@powerenerlytics.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Turkish', 'German'],
      },
      {
        '@type': 'ContactPoint',
        email: 'projects@powerenerlytics.com',
        contactType: 'sales',
        availableLanguage: ['English', 'Turkish', 'German'],
      },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: `${baseUrl}/${locale}`,
    name: 'POWEN',
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: locale === 'en' ? 'en-US' : locale === 'tr' ? 'tr-TR' : 'de-DE',
  };

  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'POWEN Engineering Services',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Strategic Consulting & Engineering', provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'EPC & Construction',                  provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
      { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Operations & Maintenance (O&M)',      provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
      { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Strategic Asset Management',         provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
      { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Performance Engineering',            provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
      { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Digital Transformation & Software',  provider: { '@id': `${baseUrl}/#organization` }, areaServed: 'Worldwide' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
    </>
  );
}

// ── generateStaticParams ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}, {locale: 'de'}];
}

// ── generateMetadata ──────────────────────────────────────────────────────────
export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const baseUrl = 'https://powerenerlytics.com';

  const titles: Record<string, string> = {
    en: 'POWEN - Power Plant Engineering & Asset Management',
    tr: 'POWEN - Enerji Santrali Mühendisliği ve Varlık Yönetimi',
    de: 'POWEN - Kraftwerkstechnik und Vermögensverwaltung',
  };

  const descriptions: Record<string, string> = {
    en: 'Engineering excellence in renewable energy: Advisory, EPC, O&M, Asset Management for wind, solar, hydro, gas and BESS power plants.',
    tr: 'Yenilenebilir enerjide mühendislik mükemmeliyeti: Rüzgar, güneş, hidro, gaz ve BESS santralleri için danışmanlık, EPC ve işletme-bakım.',
    de: 'Engineering-Exzellenz: Beratung, EPC, O&M für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke.',
  };

  const ogLocale: Record<string, string> = { en: 'en_US', tr: 'tr_TR', de: 'de_DE' };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
        'de': `${baseUrl}/de`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `${baseUrl}/${locale}`,
      siteName: 'POWEN',
      locale: ogLocale[locale],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: 'POWEN - Power Plant Engineering & Asset Management',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: [`${baseUrl}/en/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ── Layout bileşeni ───────────────────────────────────────────────────────────
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <JsonLd locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
