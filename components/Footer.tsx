'use client'
import {useTranslations} from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">POWEN</h3>
            <p className="text-gray-400 text-sm mb-6">{t('tagline')}</p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/powerenerlytics" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/powerenerlytics" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="mailto:info@powerenerlytics.com"
                 className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#capabilities" className="hover:text-white transition">{t('capabilities')}</a></li>
              <li><a href="#industries" className="hover:text-white transition">{t('industries')}</a></li>
              <li><a href="#projects" className="hover:text-white transition">{t('projects')}</a></li>
              <li><a href="#about" className="hover:text-white transition">{t('about')}</a></li>
              <li><a href="#insights" className="hover:text-white transition">{t('insights')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#capabilities" className="hover:text-white transition">{t('advisory')}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">{t('epc')}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">{t('om')}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">{t('asset')}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">{t('digital')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{t('location')}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+902121234567" className="hover:text-white transition">+90 212 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@powerenerlytics.com" className="hover:text-white transition">info@powerenerlytics.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} POWEN - Power Enerlytics. {t('rights')}
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-white transition">{t('privacy')}</a>
            <a href="/terms" className="hover:text-white transition">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
