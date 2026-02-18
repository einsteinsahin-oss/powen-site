'use client'
import {useState} from 'react'
import {useTranslations} from 'next-intl'

export default function Capabilities() {
  const t = useTranslations('Capabilities')
  const [activeTab, setActiveTab] = useState('advisory')

  const tabs = [
    {id: 'advisory', title: t('advisory.title')},
    {id: 'epc', title: t('epc.title')},
    {id: 'om', title: t('om.title')},
    {id: 'asset', title: t('asset.title')},
    {id: 'performance', title: t('performance.title')},
    {id: 'digital', title: t('digital.title')},
  ]

  const renderItems = (category: string, count: number) => {
    return [0,1,2,3,4,5,6,7,8,9,10].map((idx) => {
      if (idx >= count) return null
      try {
        const item = t.raw(`${category}.items.${idx}`)
        return (
          <div key={idx} className="group">
            <div className="border-l-2 border-gray-200 pl-6 py-4 hover:border-teal-500 transition-all">
              <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        )
      } catch {
        return null
      }
    })
  }

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'advisory' && renderItems('advisory', 11)}
          {activeTab === 'epc' && renderItems('epc', 10)}
          {activeTab === 'om' && renderItems('om', 10)}
          {activeTab === 'asset' && renderItems('asset', 9)}
          {activeTab === 'performance' && renderItems('performance', 9)}
          {activeTab === 'digital' && renderItems('digital', 9)}
        </div>
      </div>
    </section>
  )
}
