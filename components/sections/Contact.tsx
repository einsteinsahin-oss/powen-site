'use client'
import {useTranslations} from 'next-intl'

export default function Contact() {
  const t = useTranslations('Contact')

  const items = ['projects', 'investors', 'support']

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-16">{t('title')}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <div className="bg-gray-800 p-8 rounded-lg flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{t(`items.${idx}.title`)}</h3>
                <div className="text-base text-teal-400 font-medium mb-4">{t(`items.${idx}.subtitle`)}</div>
                <p className="text-gray-300 mb-6 text-base leading-relaxed flex-1">{t(`items.${idx}.desc`)}</p>
                <a 
                  href={`mailto:${t(`items.${idx}.email`)}`} 
                  className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium text-center transition-colors rounded"
                >
                  {t(`items.${idx}.email`)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
