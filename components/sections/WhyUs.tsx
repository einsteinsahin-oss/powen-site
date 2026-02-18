'use client'
import {useTranslations} from 'next-intl'

export default function WhyUs() {
  const t = useTranslations('WhyUs')

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[0,1,2,3].map((idx) => {
            try {
              const item = t.raw(`items.${idx}`)
              return (
                <div key={idx} className="border-l-4 border-teal-400 pl-8">
                  <div className="font-mono text-sm text-gray-400 mb-2">{item.number}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="text-teal-400 font-medium mb-4 text-lg">{item.subtitle}</div>
                  <p className="text-gray-300 leading-relaxed text-base">{item.desc}</p>
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
