import type { Metadata } from 'next';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/navigation/Navigation';

const baseUrl = 'https://powerenerlytics.com';

const content = {
  en: {
    metaTitle: 'The Turbine\'s Digital Nervous System | Performance Engineering | POWEN',
    metaDesc: 'How open architecture control, PLC/SCADA modernization, and pitch/torque optimization unlock hidden performance in wind turbines.',
    back: '← Back to Insights',
    title: 'The New Frontier in Performance Engineering: The Turbine\'s Digital Nervous System',
    body: [
      `During our field visits over the past week, standing in front of those massive nacelles, one thing became clear once again: the future of the sector isn't only about bigger blades, taller towers, or more powerful components. The real revolution is happening deep inside that massive body — in its "digital nervous system," the PLC and SCADA layers.`,
      `These enormous machines withstand storm after storm, snow and winter — yet they sometimes struggle to tell us what's wrong.`,
      `## From Mechanical Condition to the Software Layer`,
      `Until now, we've read turbine health almost entirely through mechanical condition: blades, gearboxes, generators. Yes, these remain the foundation. But today, the real key to unlocking the potential we already have lies in open architecture control systems and precise software interventions. There is still a vast, untapped seam of value here.`,
      `## The Resistance of Legacy Systems`,
      `Encountering the technical resistance of legacy systems in field operations is no secret. Protocol incompatibilities and hardware limitations bring an inevitable stress to putting field processes "on the operating table." But trying to manage today's variable grid demands with yesterday's control logic is a strategic loss of efficiency.`,
      `## The Critical Balance: Software Modernization and Fatigue Loads`,
      `Managing this balance is an art: while modernizing software, we must precisely calculate its effects on fatigue loads. The goal isn't just an instantaneous AEP (Annual Energy Production) boost — it's a "life extension" vision that adds years to the machine's operating life.`,
      `Working with open architectures such as the Delft Research Controller has shown us this: the task isn't replacing the system wholesale. It's about decoding the system's language and blending today's software flexibility with that solid engineering legacy.`,
      `## What This Means in Practice`,
      `- Fine-tuning pitch control algorithms\n- Optimizing torque control in response to the wind's momentary temperament`,
      `These interventions transform the turbine from a mere machine into an intelligent asset whose every movement speaks in data.`,
      `## Conclusion`,
      `Building new plants matters — but we also need to make the most of every blade and every sensor we already have. The time has come to make these "old friends" speak the language of the digital world, merging field experience with the speed of data.`,
    ],
    cta: 'POWEN provides Performance Engineering and control system modernization services for wind, solar, hydro, gas, and BESS power plants.',
    ctaLink: 'Contact our team',
  },
  tr: {
    metaTitle: 'Türbinin Dijital Sinir Sistemi | Performans Mühendisliği | POWEN',
    metaDesc: 'Açık mimarili kontrol sistemleri, PLC/SCADA modernizasyonu ve pitch/tork optimizasyonu rüzgar türbinlerindeki gizli performansı nasıl açığa çıkarır.',
    back: '← İçgörülere Dön',
    title: 'Performans Mühendisliğinde Yeni Cephe: Türbinin Dijital Sinir Sistemi',
    body: [
      `Geçtiğimiz hafta gerçekleştirdiğimiz saha ziyaretlerinde, o devasa gövdelerin karşısında dururken bir kez daha emin olduk: sektörün geleceği sadece daha büyük kanatlarda, daha yüksek kulelerde veya daha güçlü komponentlerde değil. Asıl devrim, o muazzam gövdenin en derinindeki "dijital sinir sisteminde" — yani PLC ve SCADA katmanlarında yaşanıyor.`,
      `Bu dev makineler onca fırtınaya, kara ve kışa göğüs geriyor; ancak dertlerini bize anlatmakta bazen zorlanıyorlar.`,
      `## Mekanik Kondisyondan Yazılım Katmanına`,
      `Bugüne kadar türbin sağlığını hep mekanik kondisyon üzerinden okuduk: kanatlar, dişli kutuları, jeneratörler... Evet, bunlar işin temeli. Ancak bugün elimizdeki potansiyeli açığa çıkaracak asıl anahtar; açık mimarili kontrol sistemleri (Open Architecture Control) ve hassas yazılım müdahaleleridir. Kabul etmek gerekir ki orada henüz dokunulmamış devasa bir cevher var.`,
      `## Legacy Sistemlerin Direnci`,
      `Saha operasyonlarında "legacy" (eski nesil) sistemlerin teknolojik direnciyle karşılaşmak bir sır değil. Protokol uyumsuzlukları veya donanım limitleri, sahadaki süreci "operasyon masasına" yatırmanın getirdiği kaçınılmaz stresin bir parçası. Fakat bugünün değişken şebeke taleplerini dünün kontrol mantığıyla yönetmeye çalışmak, stratejik bir verimlilik kaybıdır.`,
      `## Kritik Denge: Yazılım Modernizasyonu ve Yorulma Yükleri`,
      `Buradaki kritik dengeyi yönetmek bir sanat: yazılımı modernize ederken "Fatigue Loads" (yorulma yükleri) üzerindeki etkileri hassasiyetle hesaplamak zorundayız. Hedef sadece anlık bir AEP (Yıllık Enerji Üretimi) artışı değil; makinenin ömrüne ömür katacak bir "Life Extension" vizyonudur.`,
      `Delft Research Controller gibi açık mimariler üzerinde çalışmak şunu gösteriyor: mesele sistemi komple değiştirmek değil, sistemin dilini çözmek ve bugünün yazılım esnekliğini o sarsılmaz mühendislik mirasıyla harmanlamaktan geçiyor.`,
      `## Pratikte Ne Anlama Geliyor?`,
      `- Pitch control algoritmalarını bir tık hassaslaştırmak\n- Tork kontrolünü rüzgarın anlık huysuzluğuna göre optimize etmek`,
      `Bu müdahaleler, türbini sadece bir makine olmaktan çıkarıp her hareketi veriyle konuşan akıllı bir varlığa dönüştürüyor.`,
      `## Sonuç`,
      `Yeni santraller kurmak elbette önemli — ama elimizdeki her bir kanadın, her bir sensörün de hakkını sonuna kadar vermek gerekiyor. O "eski dostları" dijital dünyanın diliyle konuşturmanın, sahadaki tecrübeyi verinin hızıyla birleştirmenin vakti geldi.`,
    ],
    cta: 'POWEN, rüzgar, güneş, hidro, gaz ve BESS santralleri için Performans Mühendisliği ve kontrol sistemi modernizasyonu hizmetleri sunar.',
    ctaLink: 'Ekibimizle iletişime geçin',
  },
  de: {
    metaTitle: 'Das digitale Nervensystem der Turbine | Performance Engineering | POWEN',
    metaDesc: 'Wie offene Steuerungsarchitektur, PLC/SCADA-Modernisierung und Pitch-/Drehmomentoptimierung verborgene Leistung in Windturbinen freisetzen.',
    back: '← Zurück zu den Insights',
    title: 'Die neue Front im Performance Engineering: Das digitale Nervensystem der Turbine',
    body: [
      `Bei unseren Feldbesuchen in der vergangenen Woche wurde uns vor diesen gewaltigen Gondeln erneut klar: Die Zukunft der Branche liegt nicht nur in größeren Rotorblättern, höheren Türmen oder stärkeren Komponenten. Die eigentliche Revolution findet im Innersten dieses gewaltigen Körpers statt — im "digitalen Nervensystem", also in den PLC- und SCADA-Ebenen.`,
      `Diese gewaltigen Maschinen trotzen Sturm um Sturm, Schnee und Winter — doch manchmal fällt es ihnen schwer, uns mitzuteilen, was ihnen fehlt.`,
      `## Vom mechanischen Zustand zur Software-Ebene`,
      `Bisher haben wir den Zustand der Turbine fast ausschließlich über die mechanische Kondition gelesen: Rotorblätter, Getriebe, Generatoren. Ja, das bleibt die Grundlage. Doch der eigentliche Schlüssel, um das vorhandene Potenzial zu erschließen, liegt heute in offenen Steuerungsarchitekturen (Open Architecture Control) und präzisen Softwareeingriffen. Hier liegt noch ein gewaltiger, unberührter Schatz.`,
      `## Der Widerstand der Legacy-Systeme`,
      `Dass man im Feldbetrieb auf den technologischen Widerstand von Altsystemen ("Legacy") trifft, ist kein Geheimnis. Protokollinkompatibilitäten oder Hardwaregrenzen bringen den unvermeidlichen Stress mit sich, den Feldprozess "auf den OP-Tisch" zu legen. Doch der Versuch, die heutigen variablen Netzanforderungen mit der Steuerungslogik von gestern zu bewältigen, ist ein strategischer Effizienzverlust.`,
      `## Die kritische Balance: Software-Modernisierung und Ermüdungslasten`,
      `Diese kritische Balance zu managen ist eine Kunst: Bei der Modernisierung der Software müssen wir die Auswirkungen auf die "Fatigue Loads" (Ermüdungslasten) präzise berechnen. Ziel ist nicht nur eine kurzfristige AEP-Steigerung (Jahresenergieproduktion), sondern eine "Life Extension"-Vision, die der Maschine zusätzliche Lebensjahre verleiht.`,
      `Die Arbeit mit offenen Architekturen wie dem Delft Research Controller hat uns gezeigt: Es geht nicht darum, das System komplett auszutauschen, sondern seine Sprache zu entschlüsseln und die heutige Software-Flexibilität mit diesem soliden technischen Erbe zu verbinden.`,
      `## Was das in der Praxis bedeutet`,
      `- Die Feinabstimmung von Pitch-Control-Algorithmen\n- Die Optimierung der Drehmomentregelung entsprechend der momentanen Windunruhe`,
      `Diese Eingriffe verwandeln die Turbine von einer bloßen Maschine in eine intelligente Anlage, deren jede Bewegung in Daten spricht.`,
      `## Fazit`,
      `Neue Kraftwerke zu bauen ist wichtig — aber wir sollten auch jedes vorhandene Rotorblatt, jeden vorhandenen Sensor voll ausschöpfen. Die Zeit ist gekommen, diese "alten Freunde" in der Sprache der digitalen Welt sprechen zu lassen und die Felderfahrung mit der Geschwindigkeit der Daten zu verbinden.`,
    ],
    cta: 'POWEN bietet Performance-Engineering- und Steuerungssystem-Modernisierungsdienstleistungen für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke.',
    ctaLink: 'Kontaktieren Sie unser Team',
  },
} as const;

type Locale = keyof typeof content;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'de' }];
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const c = content[locale as Locale] ?? content.en;
  const url = `${baseUrl}/${locale}/insights/performance-engineering`;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/insights/performance-engineering`,
        tr: `${baseUrl}/tr/insights/performance-engineering`,
        de: `${baseUrl}/de/insights/performance-engineering`,
      },
    },
    openGraph: { title: c.metaTitle, description: c.metaDesc, url, type: 'article' },
  };
}

function renderBody(paragraphs: readonly string[]) {
  return paragraphs.map((p, i) => {
    if (p.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {p.replace('## ', '')}
        </h2>
      );
    }
    if (p.includes('\n- ') || p.startsWith('- ')) {
      const items = p.split('\n').map((s) => s.replace(/^-\s*/, ''));
      return (
        <ul key={i} className="list-disc pl-6 mb-5 space-y-1 text-gray-700">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-base text-gray-700 leading-relaxed mb-5">
        {p}
      </p>
    );
  });
}

export default function PerformanceEngineeringPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const c = content[locale as Locale] ?? content.en;

  return (
    <>
      <Navigation />
      <article className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}#insights`} className="text-teal-600 font-medium hover:underline">
            {c.back}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-6 mb-8 leading-tight">
            {c.title}
          </h1>
          <div>{renderBody(c.body)}</div>
          <div className="mt-12 border-l-4 border-blue-600 bg-gray-50 p-6">
            <p className="text-base text-gray-700 mb-2">{c.cta}</p>
            <a href="mailto:info@powerenerlytics.com" className="text-teal-600 font-semibold hover:underline">
              {c.ctaLink} →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
