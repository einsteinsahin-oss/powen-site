import {unstable_setRequestLocale} from 'next-intl/server';
import Navigation from '@/components/navigation/Navigation';
import Hero from '@/components/hero/Hero';
import Capabilities from '@/components/sections/Capabilities';
import Industries from '@/components/sections/Industries';
import Projects from '@/components/sections/Projects';
import WhyUs from '@/components/sections/WhyUs';
import About from '@/components/sections/About';
import Insights from '@/components/sections/Insights';
import Contact from '@/components/sections/Contact';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'tr'}, {locale: 'de'}];
}

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Navigation />
      <Hero />
      <Capabilities />
      <Industries />
      <Projects />
      <WhyUs />
      <About />
      <Insights />
      <Contact />
    </>
  );
}
