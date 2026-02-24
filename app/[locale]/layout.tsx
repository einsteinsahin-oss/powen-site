import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../globals.css';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}, {locale: 'de'}];
}

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
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

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: `https://powen-site.vercel.app/${locale}`,
      siteName: 'POWEN',
      locale: locale,
      type: 'website',
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
