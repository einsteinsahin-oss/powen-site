'use client'
import {useTranslations} from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} POWEN - Power Enerlytics. {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}
