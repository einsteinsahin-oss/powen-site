'use client'
import {useTranslations} from 'next-intl'

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[0,1,2].map((idx) => {
            try {
              const item = t.raw(`items.${idx}`)
              return (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="text-teal-400 text-base font-medium mb-4">{item.subtitle}</div>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="inline-block px-6 py-3 bg-white text-gray-900 font-medium hover:bg-teal-400 hover:text-white transition-all">
                    {item.email}
                  </a>
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
