import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}, {locale: 'de'}];
}

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const baseUrl = 'https://powerenerlytics.com';
  const titles = {
    en: 'POWEN - Power Plant Engineering & Asset Management',
    tr: 'POWEN - Enerji Santrali Mühendisliği ve Varlık Yönetimi',
    de: 'POWEN - Kraftwerkstechnik und Vermögensverwaltung'
  };
  
  const descriptions = {
    en: 'Engineering excellence in renewable energy: Advisory, EPC, O&M, Asset Management for wind, solar, hydro, gas and BESS power plants.',
    tr: 'Yenilenebilir enerjide mühendislik mükemmeliyeti: Rüzgar, güneş, hidro, gaz ve BESS santralleri için danışmanlık, EPC ve işletme-bakım.',
    de: 'Engineering-Exzellenz: Beratung, EPC, O&M für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke.'
  };
  const ogLocale = { en: 'en_US', tr: 'tr_TR', de: 'de_DE' };//çalışmayabilir ilk kontrol
  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],

    // ── Canonical & hreflang ──────────────────────────────────────────────
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
        'de': `${baseUrl}/de`,
        'x-default': `${baseUrl}/en`,
      },
    },

    // ── Open Graph (LinkedIn, Facebook, WhatsApp) ─────────────────────────
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: `${baseUrl}/${locale}`,
      siteName: 'POWEN',
      locale: ogLocale[locale as keyof typeof ogLocale],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og/powen-og.jpg`, // ← 1200×630px görsel ekleyin (aşağıda açıklandı)
          width: 1200,
          height: 630,
          alt: 'POWEN - Power Plant Engineering & Asset Management',
        },
      ],
    },

    // ── Twitter / X Card ──────────────────────────────────────────────────
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: [`${baseUrl}/images/og/powen-og.jpg`],
    },

    // ── Robots ────────────────────────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
    },
  };
}


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
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
