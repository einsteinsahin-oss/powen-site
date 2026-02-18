import {NextIntlClientProvider} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}, {locale: 'de'}];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const titles = {
    en: 'POWEN | Power Plant Engineering',
    tr: 'POWEN | Enerji Santrali Mühendisliği',
    de: 'POWEN | Kraftwerk Engineering'
  }
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    metadataBase: new URL('https://www.powerenerlytics.com'),
  }
}

export default async function LocaleLayout({children, params: {locale}}: {children: React.ReactNode; params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  
  const messages = (await import(`@/messages/${locale}.json`)).default;
  
  return (
    <html lang={locale}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
