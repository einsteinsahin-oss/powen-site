'use client'
import {useTranslations} from 'next-intl'

export default function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs')

  const items = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl">{t('subtitle')}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((idx) => {
            let item: {title: string; desc: string} | null = null
            try {
              item = t.raw(`items.${idx}`)
            } catch (e) {
              item = null
            }
            if (!item) return null
            return (
              <div key={idx} className="border border-gray-200 hover:border-teal-400 transition-colors p-6 bg-gray-50">
                <div className="text-xs font-mono text-teal-600 mb-3">0{idx + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
