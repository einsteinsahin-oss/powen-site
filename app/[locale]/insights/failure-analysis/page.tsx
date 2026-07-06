import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/navigation/Navigation';

const baseUrl = 'https://powerenerlytics.com';

const content = {
  en: {
    metaTitle: 'Remote Monitoring, AI & Reliability-Centered Maintenance | Failure Analysis | POWEN',
    metaDesc: 'How remote monitoring, AI-driven predictive maintenance, and digital twins are becoming the strongest lever for power plant production gains.',
    back: '← Back to Insights',
    title: 'The New Efficiency Threshold in Power Plants: Remote Monitoring, AI, and Reliability-Centered Maintenance',
    body: [
      `Competition in power generation no longer runs solely on installed capacity or equipment quality. Today, the real differentiator is how assets are monitored, how they're maintained, and how data is converted into action.`,
      `Recent studies make it clear: remote monitoring, AI-driven predictive maintenance, and digital twin applications have become one of the strongest levers for production gains in power plants.`,
      `## Remote Monitoring Is Now a Standard`,
      `Modern power plants generate massive volumes of operational data through SCADA, IoT sensors, vibration monitoring, thermal imaging, and condition monitoring systems. But the real value doesn't come from simply monitoring this data — it comes from making sense of it through advanced analytics and machine learning.`,
      `## AI-Powered Reliability-Centered Maintenance (RCM)`,
      `Traditional time-based maintenance is rapidly giving way to condition-based and predictive maintenance (PdM) models — a shift that, if anything, is already overdue. Thanks to machine learning algorithms:`,
      `1. Failure modes can be detected at an early stage\n2. Anomaly detection prevents unexpected failures\n3. Remaining Useful Life (RUL) predictions allow maintenance to be scheduled at the right time`,
      `Combined with Reliability-Centered Maintenance principles, this approach significantly reduces unplanned outages while directly improving asset availability and operational reliability.`,
      `## Digital Twin: From Analytics to Decision Support`,
      `The real transformation happens when AI and digital twin technology are used together. A digital twin is a real-time, data-fed digital replica of physical equipment. This makes it possible to:`,
      `1. Simulate failure scenarios\n2. Test maintenance strategies in advance\n3. Manage operational risk without affecting production`,
      `As a result, decisions become data-driven rather than intuitive.`,
      `## Operational and Financial Impact`,
      `Field applications show that AI-powered maintenance and remote monitoring solutions deliver:`,
      `1. Higher uptime\n2. Lower forced outage rates\n3. Reduced maintenance costs\n4. Measurable production uplift`,
      `The most critical point: reliability is no longer a cost item — it's becoming a strategic performance parameter.`,
      `## The Question Has Changed`,
      `Today, the real question in the energy sector isn't "should we use AI?" The real question is: "how quickly can AI and advanced analytics be integrated into operational decision-making?"`,
      `Power plants should no longer be defined solely by turbines, inverters, or transformers, but by algorithms, data quality, and AI-driven maintenance strategies. Even without new investment, there is real, hidden production potential waiting to be unlocked in existing assets.`,
    ],
    cta: 'POWEN provides failure analysis, predictive maintenance, and digital twin advisory for wind, solar, hydro, gas, and BESS power plants.',
    ctaLink: 'Contact our team',
  },
  tr: {
    metaTitle: 'Remote Monitoring, AI ve Reliability-Centered Maintenance | Arıza Analizi | POWEN',
    metaDesc: 'Uzaktan izleme, yapay zeka destekli kestirimci bakım ve dijital ikizlerin enerji santrallerinde üretim artışının en güçlü kaldıraçları haline gelişi.',
    back: '← İçgörülere Dön',
    title: 'Enerji Santrallerinde Yeni Verimlilik Eşiği: Remote Monitoring, AI ve Reliability-Centered Maintenance',
    body: [
      `Enerji üretiminde rekabet artık yalnızca kurulu güç veya ekipman kalitesi üzerinden yürümüyor. Bugün asıl fark yaratan unsur, varlıkların nasıl izlendiği, nasıl bakımı yapıldığı ve verinin nasıl aksiyona dönüştürüldüğüdür.`,
      `Son dönemde yapılan çalışmalar, remote monitoring, AI-driven predictive maintenance ve digital twin uygulamalarının, enerji santrallerinde üretim artışının en güçlü kaldıraçlarından biri haline geldiğini net biçimde ortaya koyuyor.`,
      `## Remote Monitoring Artık Bir Standart`,
      `Modern enerji santralleri; SCADA, IoT sensors, vibration monitoring, thermal imaging ve condition monitoring sistemleri üzerinden büyük miktarda operasyonel veri üretiyor. Ancak gerçek değer, bu verinin sadece izlenmesiyle değil, advanced analytics ve machine learning ile anlamlandırılmasıyla ortaya çıkıyor.`,
      `## AI Destekli Reliability-Centered Maintenance (RCM)`,
      `Geleneksel time-based maintenance yaklaşımı, yerini hızla condition-based ve predictive maintenance (PdM) modellerine bırakıyor, çok geç bile kalınmış bir unsur. Makine öğrenimi algoritmaları sayesinde:`,
      `1. Failure modes erken aşamada tespit edilebiliyor\n2. Anomaly detection ile beklenmeyen arızalar önleniyor\n3. Remaining Useful Life (RUL) tahminleriyle bakım doğru zamanda planlanıyor`,
      `Bu yaklaşım, Reliability-Centered Maintenance prensipleriyle birleştiğinde, plansız duruşları ciddi şekilde azaltırken asset availability ve operational reliability üzerinde doğrudan etki yaratıyor.`,
      `## Digital Twin: Analitikten Karar Desteğine`,
      `Asıl dönüşüm, AI ile digital twin teknolojisinin birlikte kullanılmasıyla gerçekleşiyor. Digital twin; fiziksel ekipmanın gerçek zamanlı verilerle beslenen dijital bir kopyasıdır. Bu yapı sayesinde:`,
      `1. Arıza senaryoları simüle edilebiliyor\n2. Bakım stratejileri önceden test ediliyor\n3. Operasyonel riskler üretimi etkilemeden yönetilebiliyor`,
      `Sonuç olarak kararlar, sezgisel değil data-driven hale geliyor.`,
      `## Operasyonel ve Finansal Etki`,
      `Saha uygulamaları, AI destekli bakım ve uzaktan izleme çözümlerinin şu çıktıları sağladığını gösteriyor:`,
      `1. Daha yüksek uptime\n2. Azalan forced outage oranları\n3. Bakım maliyetlerinde düşüş\n4. Ölçülebilir production uplift`,
      `En kritik nokta ise şu: Güvenilirlik artık bir maliyet kalemi değil, stratejik bir performans parametresi haline geliyor.`,
      `## Asıl Soru Değişti`,
      `Bugün enerji sektöründe asıl soru "AI kullanılmalı mı?" değil. Asıl soru: "AI ve advanced analytics, operasyonel karar alma süreçlerine ne kadar hızlı entegre edilebiliyor?"`,
      `Enerji santralleri yalnızca türbin, inverter veya trafolarla değil; algoritmalar, veri kalitesi ve AI maintenance stratejileri ile tanımlanması gerekir. Yeni yatırım yapmadan bile, mevcut assetlerde gizli üretim potansiyelini ortaya çıkarabilmenin mümkün olduğu bir gerçektir.`,
    ],
    cta: 'POWEN, rüzgar, güneş, hidro, gaz ve BESS santralleri için arıza analizi, kestirimci bakım ve dijital ikiz danışmanlığı sunar.',
    ctaLink: 'Ekibimizle iletişime geçin',
  },
  de: {
    metaTitle: 'Remote Monitoring, KI und zuverlässigkeitszentrierte Instandhaltung | Fehleranalyse | POWEN',
    metaDesc: 'Wie Remote Monitoring, KI-gestützte vorausschauende Wartung und Digital Twins zum stärksten Hebel für Produktionssteigerungen in Kraftwerken werden.',
    back: '← Zurück zu den Insights',
    title: 'Die neue Effizienzschwelle bei Kraftwerken: Remote Monitoring, KI und zuverlässigkeitszentrierte Instandhaltung',
    body: [
      `Der Wettbewerb in der Energieerzeugung läuft längst nicht mehr allein über installierte Leistung oder Anlagenqualität. Der entscheidende Unterschied liegt heute darin, wie Anlagen überwacht werden, wie ihre Wartung erfolgt und wie Daten in Handlungen umgesetzt werden.`,
      `Aktuelle Studien zeigen deutlich: Remote Monitoring, KI-gestützte vorausschauende Wartung und Digital-Twin-Anwendungen sind zu einem der stärksten Hebel für Produktionssteigerungen in Kraftwerken geworden.`,
      `## Remote Monitoring ist längst Standard`,
      `Moderne Kraftwerke erzeugen über SCADA, IoT-Sensoren, Vibrationsüberwachung, Thermografie und Zustandsüberwachungssysteme gewaltige Mengen an Betriebsdaten. Der eigentliche Wert entsteht jedoch nicht durch das bloße Überwachen dieser Daten, sondern durch ihre Interpretation mittels Advanced Analytics und maschinellem Lernen.`,
      `## KI-gestützte zuverlässigkeitszentrierte Instandhaltung (RCM)`,
      `Die klassische zeitbasierte Wartung weicht rasant zustandsbasierten und vorausschauenden Wartungsmodellen (PdM) — ein Wandel, der ohnehin längst überfällig war. Dank Machine-Learning-Algorithmen:`,
      `1. Können Fehlerarten (Failure Modes) frühzeitig erkannt werden\n2. Verhindert Anomalieerkennung unerwartete Ausfälle\n3. Ermöglichen RUL-Prognosen (Remaining Useful Life) die Wartungsplanung zum richtigen Zeitpunkt`,
      `In Kombination mit den Prinzipien der zuverlässigkeitszentrierten Instandhaltung reduziert dieser Ansatz ungeplante Stillstände erheblich und wirkt sich direkt auf Anlagenverfügbarkeit und operative Zuverlässigkeit aus.`,
      `## Digital Twin: Von der Analytik zur Entscheidungsunterstützung`,
      `Die eigentliche Transformation entsteht durch die gemeinsame Nutzung von KI und Digital-Twin-Technologie. Ein Digital Twin ist ein in Echtzeit mit Daten gespeistes digitales Abbild der physischen Anlage. Dies ermöglicht:`,
      `1. Die Simulation von Ausfallszenarien\n2. Das vorab Testen von Wartungsstrategien\n3. Das Management operativer Risiken, ohne die Produktion zu beeinträchtigen`,
      `Entscheidungen werden dadurch datengetrieben statt intuitiv getroffen.`,
      `## Betriebliche und finanzielle Auswirkungen`,
      `Feldanwendungen zeigen, dass KI-gestützte Wartung und Remote Monitoring Folgendes bewirken:`,
      `1. Höhere Verfügbarkeit (Uptime)\n2. Geringere Zwangsabschaltungsraten\n3. Sinkende Wartungskosten\n4. Messbare Produktionssteigerungen`,
      `Der entscheidende Punkt: Zuverlässigkeit ist kein Kostenposten mehr, sondern wird zu einem strategischen Leistungsparameter.`,
      `## Die Frage hat sich geändert`,
      `Die eigentliche Frage im Energiesektor lautet heute nicht mehr "Sollte KI eingesetzt werden?" Die eigentliche Frage lautet: "Wie schnell lassen sich KI und Advanced Analytics in die operative Entscheidungsfindung integrieren?"`,
      `Kraftwerke sollten nicht mehr nur über Turbinen, Wechselrichter oder Transformatoren definiert werden, sondern über Algorithmen, Datenqualität und KI-gestützte Wartungsstrategien. Auch ohne neue Investitionen lässt sich in bestehenden Anlagen verborgenes Produktionspotenzial erschließen.`,
    ],
    cta: 'POWEN bietet Beratung zu Fehleranalyse, vorausschauender Wartung und Digital Twin für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke.',
    ctaLink: 'Kontaktieren Sie unser Team',
  },
} as const;

type Locale = keyof typeof content;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'de' }];
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const c = content[locale as Locale] ?? content.en;
  const url = `${baseUrl}/${locale}/insights/failure-analysis`;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/insights/failure-analysis`,
        tr: `${baseUrl}/tr/insights/failure-analysis`,
        de: `${baseUrl}/de/insights/failure-analysis`,
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
    if (/^\d+\.\s/.test(p)) {
      const items = p.split('\n').map((s) => s.replace(/^\d+\.\s*/, ''));
      return (
        <ol key={i} className="list-decimal pl-6 mb-5 space-y-1 text-gray-700">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="text-base text-gray-700 leading-relaxed mb-5">
        {p}
      </p>
    );
  });
}

export default function FailureAnalysisPage({ params: { locale } }: { params: { locale: string } }) {
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
