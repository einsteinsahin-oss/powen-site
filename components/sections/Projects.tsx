'use client'
import {useTranslations} from 'next-intl'

export default function Projects() {
  const t = useTranslations('Projects')

  const categories = [
    {id: 'technology', icon: '⚙️'},
    {id: 'geography', icon: '🌍'},
    {id: 'service', icon: '🔧'},
  ]

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-gray-300">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-gray-50 p-8">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    {t('labels.capacity')}
                  </div>
                  <p className="text-base text-gray-700">{t(`${cat.id}.capacity`)}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    {t('labels.scope')}
                  </div>
                  <p className="text-base text-gray-700">{t(`${cat.id}.scope`)}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    {t('labels.challenge')}
                  </div>
                  <p className="text-base text-gray-700">{t(`${cat.id}.challenge`)}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                    {t('labels.result')}
                  </div>
                  <p className="text-base font-medium text-blue-600">{t(`${cat.id}.result`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
