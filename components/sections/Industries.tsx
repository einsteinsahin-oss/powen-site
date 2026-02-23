'use client'
import {useState} from 'react'
import {useTranslations} from 'next-intl'

export default function Industries() {
  const t = useTranslations('Industries')
  const [activeTech, setActiveTech] = useState('wind')

  const technologies = [
    {id: 'wind', icon: '💨'},
    {id: 'solar', icon: '☀️'},
    {id: 'hydro', icon: '💧'},
    {id: 'gas', icon: '⚡'},
    {id: 'bess', icon: '🔋'},
  ]

  return (
    <section id="industries" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">{t('title')}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(tech.id)}
              className={`p-6 text-center transition-all ${
                activeTech === tech.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="font-semibold text-base">{t(`${tech.id}.title`)}</div>
            </button>
          ))}
        </div>

        <div className="bg-white p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">{t(`${activeTech}.title`)}</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                {t('labels.complexity')}
              </div>
              <p className="text-base text-gray-700 leading-relaxed">{t(`${activeTech}.complexity`)}</p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                {t('labels.risk')}
              </div>
              <p className="text-base text-gray-700 leading-relaxed">{t(`${activeTech}.risk`)}</p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                {t('labels.output')}
              </div>
              <p className="text-base text-gray-700 leading-relaxed">{t(`${activeTech}.output`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
