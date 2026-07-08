'use client'
import {useState} from 'react'
import {useTranslations} from 'next-intl'

export default function Industries() {
  const t = useTranslations('Industries')
  const [activeTech, setActiveTech] = useState('wind')
  const [expanded, setExpanded] = useState(false)

  const technologies = [
    {id: 'wind', icon: '💨'},
    {id: 'solar', icon: '☀️'},
    {id: 'hydro', icon: '💧'},
    {id: 'gas', icon: '⚡'},
    {id: 'bess', icon: '🔋'},
  ]

  const handleTechChange = (id: string) => {
    setActiveTech(id)
    setExpanded(false) // ── sekme değişince açılır bölüm kapansın ──
  }

  // ── Kısa madde listeleri — çeviri dosyasında yoksa sayfa çökmesin diye güvenli varsayılan ──
  const getBullets = (field: string): string[] => {
    try {
      const raw = t.raw(`${activeTech}.${field}Bullets`)
      if (Array.isArray(raw)) return raw
    } catch (e) {
      // ignore
    }
    return []
  }

  const complexityBullets = getBullets('complexity')
  const riskBullets = getBullets('risk')
  const outputBullets = getBullets('output')
  const hasBullets = complexityBullets.length > 0 || riskBullets.length > 0 || outputBullets.length > 0

  let readMoreLabel: string
  let readLessLabel: string
  try {
    readMoreLabel = t('labels.readMore')
  } catch (e) {
    readMoreLabel = 'Read our full technical approach'
  }
  try {
    readLessLabel = t('labels.readLess')
  } catch (e) {
    readLessLabel = 'Show less'
  }

  return (
    <section id="industries" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">{t('title')}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => handleTechChange(tech.id)}
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

          {hasBullets ? (
            <>
              {/* ── YENİ: Kısa madde formatı (tarama-dostu) ── */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                    {t('labels.complexity')}
                  </div>
                  <ul className="space-y-3">
                    {complexityBullets.map((b, i) => (
                      <li key={i} className="text-base text-gray-900 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                    {t('labels.risk')}
                  </div>
                  <ul className="space-y-3">
                    {riskBullets.map((b, i) => (
                      <li key={i} className="text-base text-gray-900 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                    {t('labels.output')}
                  </div>
                  <ul className="space-y-3">
                    {outputBullets.map((b, i) => (
                      <li key={i} className="text-base text-gray-900 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── YENİ: Devamını oku / daha az göster ── */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                {expanded ? readLessLabel : readMoreLabel}
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expanded && (
                <div className="grid lg:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.complexity`)}</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.risk`)}</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.output`)}</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            // ── Eski format — çeviri dosyasında bullet yoksa sayfa çökmesin, eski uzun metin gösterilsin ──
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                  {t('labels.complexity')}
                </div>
                <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.complexity`)}</p>
              </div>
              <div>
                <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                  {t('labels.risk')}
                </div>
                <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.risk`)}</p>
              </div>
              <div>
                <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3">
                  {t('labels.output')}
                </div>
                <p className="text-base text-gray-900 leading-relaxed text-justify">{t(`${activeTech}.output`)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
