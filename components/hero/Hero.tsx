'use client'
import {useState, useEffect} from 'react'
import {useTranslations, useLocale} from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')
  const locale = useLocale()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {image: '/images/hero/engineering-consulting.png', title: t('slides.0.title'), subtitle: t('slides.0.subtitle'), tagline: t('slides.0.tagline')},
    {image: '/images/hero/epc-construction.jpg', title: t('slides.1.title'), subtitle: t('slides.1.subtitle'), tagline: t('slides.1.tagline')},
    {image: '/images/hero/om-services.png', title: t('slides.2.title'), subtitle: t('slides.2.subtitle'), tagline: t('slides.2.tagline')},
    {image: '/images/hero/asset-management.png', title: t('slides.3.title'), subtitle: t('slides.3.subtitle') || '', tagline: t('slides.3.tagline')},
    {image: '/images/hero/performance-optimization.png', title: t('slides.4.title'), subtitle: t('slides.4.subtitle'), tagline: t('slides.4.tagline')},
    {image: '/images/hero/digital-solutions.jpg', title: t('slides.5.title'), subtitle: t('slides.5.subtitle'), tagline: t('slides.5.tagline')}
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const stats = [
    {value: '12+', label: t('stats.capacity')},
    {value: '96.8%', label: t('stats.availability')},
    {value: '45+', label: t('stats.projects')},
    {value: '15', label: t('stats.countries')},
  ]

  return (
    <section id="home" className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{opacity: currentSlide === index ? 1 : 0}}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{filter: 'brightness(1.3) contrast(1.1)'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl min-h-[60vh] flex flex-col justify-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>
            
            {slides[currentSlide].subtitle && (
              <p className="text-2xl lg:text-3xl text-gray-100 mb-8 leading-relaxed max-w-3xl drop-shadow-lg font-medium">
                {slides[currentSlide].subtitle}
              </p>
            )}
            
            <div className="inline-block mb-8">
              <p className="text-xl lg:text-2xl text-teal-400 font-semibold italic border-l-4 border-teal-400 pl-4 drop-shadow-lg">
                "{slides[currentSlide].tagline}"
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#capabilities" className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-xl">
                {locale === 'tr' ? 'Yetenekleri Keşfet' : locale === 'de' ? 'Fähigkeiten Erkunden' : 'Explore Capabilities'}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mt-16 bg-white/20 backdrop-blur-md">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-black/30 p-8 backdrop-blur-sm border-l-2 border-teal-400">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  currentSlide === index ? 'w-16 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
