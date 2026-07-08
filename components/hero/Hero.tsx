'use client'
import {useState, useEffect} from 'react'
import {useTranslations, useLocale} from 'next-intl'
import Image from 'next/image'

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
    {value: '25+', label: t('stats.experience')},
  ]

  // ── Rol / yetkinlik şeridi: çeviri dosyasında bulunamazsa sayfa çökmesin diye güvenli varsayılan ──
  let roles: string[] = []
  try {
    const raw = t.raw('roles')
    if (Array.isArray(raw)) roles = raw
  } catch (e) {
    roles = []
  }

  // ── Birincil (primary) CTA metni — çeviri dosyasında bulunamazsa güvenli varsayılan ──
  let ctaPrimary: string
  try {
    ctaPrimary = t('ctaPrimary')
  } catch (e) {
    ctaPrimary = locale === 'tr' ? 'Teknik Görüşme Talep Edin' : locale === 'de' ? 'Technisches Beratungsgespräch vereinbaren' : 'Schedule a Technical Consultation'
  }

  return (
    <section id="home" className="relative min-h-screen bg-gray-900 overflow-hidden">

      {/* ── SEO: Sabit H1 — görsel olarak gizli, Google tarafından okunur ── */}
      <h1 className="sr-only">
        {locale === 'tr'
          ? 'POWEN — Enerji Santrali Mühendisliği, EPC, O&M ve Varlık Yönetimi'
          : locale === 'de'
          ? 'POWEN — Kraftwerkstechnik, EPC, Betrieb & Instandhaltung und Asset Management'
          : 'POWEN — Power Plant Engineering, EPC, O&M and Asset Management'}
      </h1>

      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{opacity: currentSlide === index ? 1 : 0}}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              quality={70}
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="object-cover"
              style={{filter: 'brightness(0.9) contrast(1.1)'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl min-h-[42vh] flex flex-col justify-center">

            {/* ── h1 → h2 olarak değiştirildi ── */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            </h2>
            
            {slides[currentSlide].subtitle && (
              <p className="text-lg lg:text-2xl text-gray-100 mb-4 leading-relaxed max-w-3xl drop-shadow-lg font-medium">
                {slides[currentSlide].subtitle}
              </p>
            )}
            
            <div className="inline-block mb-4">
              <p className="text-base lg:text-xl text-teal-400 font-semibold italic border-l-4 border-teal-400 pl-4 drop-shadow-lg">
                "{slides[currentSlide].tagline}"
              </p>
            </div>

            {/* ── YENİ: Rol / yetkinlik şeridi ── */}
            {roles.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] md:text-xs text-gray-200 border border-white/30 rounded-full px-2.5 py-0.5 backdrop-blur-sm bg-white/5"
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}

            {/* ── GÜNCELLENDİ: İkinci (primary) CTA butonu eklendi ── */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-teal-400 text-gray-900 font-bold hover:bg-white transition-all duration-300 shadow-xl text-sm lg:text-base">
                {ctaPrimary}
              </a>
              <a href="#capabilities" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-xl text-sm lg:text-base">
                {locale === 'tr' ? 'Yetenekleri Keşfet' : locale === 'de' ? 'Fähigkeiten Erkunden' : 'Explore Capabilities'}
                <svg className="ml-2 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 mt-8 bg-white/20 backdrop-blur-md">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-black/30 p-4 lg:p-5 backdrop-blur-sm border-l-2 border-teal-400">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] lg:text-xs font-mono uppercase tracking-wider text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
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
