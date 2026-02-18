'use client'
import {useTranslations} from 'next-intl'

export default function Insights() {
  const t = useTranslations('Insights')

  return (
    <section id="insights" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[0,1,2,3].map((idx) => {
            try {
              const item = t.raw(`items.${idx}`)
              return (
                <div key={idx} className="bg-white p-8 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="text-base text-teal-500 font-medium mb-3">{item.subtitle}</div>
                  <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            } catch {
              return null
            }
          })}
        </div>
      </div>
    </section>
  )
}
