'use client'
import {useState} from 'react'
import {useTranslations, useLocale} from 'next-intl'
import {usePathname, useRouter} from 'next/navigation'

export default function Navigation() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    {name: t('capabilities'), href: '#capabilities'},
    {name: t('industries'), href: '#industries'},
    {name: t('projects'), href: '#projects'},
    {name: t('about'), href: '#about'},
    {name: t('insights'), href: '#insights'},
    {name: t('contact'), href: '#contact'},
  ]

  const languages = [
    {code: 'en', name: 'EN'},
    {code: 'tr', name: 'TR'},
    {code: 'de', name: 'DE'},
  ]

  const switchLocale = (newLocale: string) => {
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`))
  }

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#home" className="flex items-center py-3">
            <img 
              src="/images/logo.png"
              alt="POWEN" 
              className="h-20 w-auto object-contain"
              style={{maxWidth: '400px'}}
            />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-300 pl-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`px-3 py-2 text-base font-bold transition-all ${
                    locale === lang.code 
                      ? 'text-white bg-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-bold text-base hover:bg-teal-500 transition-all">
              {t('contact')}
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block py-3 text-xl font-bold text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
