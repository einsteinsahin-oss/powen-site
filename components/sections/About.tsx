'use client'
import {useTranslations} from 'next-intl'

export default function About() {
  const t = useTranslations('About')
  const sections = ['vision', 'leadership', 'culture', 'hse']

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">{t('title')}</h2>

        <div className="space-y-16">
          {sections.map((section, idx) => (
            <div key={idx} className="max-w-4xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{t(`${section}.title`)}</h3>
              <div className="text-blue-600 font-medium mb-4 text-lg">{t(`${section}.subtitle`)}</div>
              <p className="text-lg text-gray-700 leading-relaxed">{t(`${section}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
