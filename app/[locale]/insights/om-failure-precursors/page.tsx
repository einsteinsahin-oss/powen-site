import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/navigation/Navigation';

const baseUrl = 'https://powerenerlytics.com';

const content = {
  en: {
    metaTitle: 'The Real Problem in O&M Isn\'t Failures | POWEN',
    metaDesc: 'Why failure is a process, not an event — and how condition-based, reliability-centered O&M catches precursors months in advance.',
    back: '← Back to Insights',
    title: 'The Real Problem in O&M Isn\'t Failures: It\'s What We Don\'t Measure, Trend, or Take Seriously',
    body: [
      `The real problem in O&M isn't failures themselves. It's everything we didn't measure, trend, or take seriously before the failure occurred. A failure doesn't simply appear out of nowhere — failure is not an event, it's a process.`,
      `## Failures Begin Quietly`,
      `Most failures begin in:`,
      `- Rising vibration signatures\n- Slowly degrading yaw & pitch response times\n- Gearbox oil particle trends\n- Converter IGBT thermal drift\n- SCADA parameters that don't trigger an alarm but whose behavior has changed\n- IV curve deviations\n- Silently progressing load misalignment and fatigue`,
      `None of these signals alone triggers an alarm. But read together, they can announce a failure months in advance.`,
      `## From Alarm-Driven to Condition-Based`,
      `Most O&M programs are still managed on an alarm-driven basis — reacting once an alarm fires. What's actually needed is a condition-based, reliability-centered O&M approach.`,
      `Why does this distinction matter so much? Because:`,
      `- Availability figures can look strong, yet AEP (Annual Energy Production) loss shows up as a surprise at year-end\n- MTBF (Mean Time Between Failures) can look good on paper while failure precursor signals never make it into the decision process at all`,
      `## What Actually Makes the Difference`,
      `The real difference comes from four elements working together:`,
      `1. CMS (Condition Monitoring System) data being interpreted, not just monitored\n2. EL / IR / vibration / oil data being read together, cross-referenced\n3. SCADA KPIs being evaluated against trends and anomalies rather than static thresholds\n4. Field experience feeding back into the algorithm, rather than sitting separately from it`,
      `## The Bottom Line`,
      `O&M is not a maintenance task. It is asset health and lifetime risk management. The moment we start treating a failure as a months-long process rather than a single event, the same data gives us the chance to intervene far earlier — and far more cheaply.`,
    ],
    cta: 'POWEN provides condition-based, reliability-centered O&M advisory for wind, solar, hydro, gas, and BESS power plants worldwide.',
    ctaLink: 'Contact our team',
  },
  tr: {
    metaTitle: 'O&M\'de Asıl Sorun Arızalar Değil | POWEN',
    metaDesc: 'Arıza bir olay değil bir süreçtir — condition-based ve reliability-centered O&M yaklaşımı arıza öncüsü sinyalleri aylar öncesinden nasıl yakalar.',
    back: '← İçgörülere Dön',
    title: 'O&M\'de Asıl Sorun Arızalar Değil: Neyi Ölçmediğimiz, Trendlemediğimiz ve Ciddiye Almadığımız',
    body: [
      `O&M'de asıl sorun arızalar değil. Arızaya gelene kadar neyi ölçmediğimiz, trendlemediğimiz ve ciddiye almadığımızdır. Bir anda herhangi bir arızanın ortaya çıkması beklenemez — arıza bir olay değil, bir süreçtir.`,
      `## Arızalar Aslında Sessizce Başlar`,
      `Arızaların büyük kısmı şu belirtilerde başlar:`,
      `- Artan vibration signature'larda\n- Yavaş bozulan yaw & pitch response sürelerinde\n- Gearbox oil particle trendlerinde\n- Converter IGBT thermal drift'lerinde\n- SCADA'da "alarm üretmeyen" ama davranışı değişen parametrelerde\n- IV curve sapmalarında\n- Sessizce ilerleyen load misalignment ve fatigue durumlarında`,
      `Bu sinyallerin hiçbiri tek başına bir alarm tetiklemez. Ama birlikte okunduklarında, aylar öncesinden bir arızanın habercisi olurlar.`,
      `## Alarm-Driven'dan Condition-Based'e`,
      `Çoğu O&M programı hâlâ alarm-driven (alarm tetiklendiğinde harekete geçen) mantıkla yönetiliyor. Oysa ihtiyaç duyulan yaklaşım condition-based + reliability-centered O&M'dir.`,
      `Bu fark neden bu kadar önemli? Çünkü:`,
      `- Availability rakamı yüksek görünebilir, ama AEP (Yıllık Enerji Üretimi) kaybı yıl sonunda sürpriz yapar\n- MTBF (Mean Time Between Failures) kağıt üzerinde iyi görünebilir, ama arıza öncüsü sinyaller (failure precursor'lar) karar mekanizmasına hiç girmemiş olabilir`,
      `## Gerçek Farkı Yaratan Şey`,
      `Gerçek fark şu dört unsurun bir araya gelmesinden doğar:`,
      `1. CMS (Condition Monitoring System) verisinin sadece "izlenen" değil, "yorumlanan" veri olması\n2. EL / IR / vibration / oil data'nın birlikte, çapraz okunması\n3. SCADA KPI'larının statik eşikler yerine trend ve anomali bazlı değerlendirilmesi\n4. Saha tecrübesinin algoritma ile konuşması — yani sahadaki insan bilgisinin veri modeline geri beslenmesi`,
      `## Sonuç`,
      `O&M bir bakım işi değildir. Asset health ve lifetime risk yönetimidir. Arızayı bir "olay" olarak değil, aylar süren bir "süreç" olarak görmeye başladığımız an, aynı veriyle çok daha erken ve çok daha ucuz müdahale etme şansı buluruz.`,
    ],
    cta: 'POWEN, rüzgar, güneş, hidro, gaz ve BESS santralleri için condition-based ve reliability-centered O&M danışmanlığı sunar.',
    ctaLink: 'Ekibimizle iletişime geçin',
  },
  de: {
    metaTitle: 'Das eigentliche Problem in der O&M sind nicht die Ausfälle | POWEN',
    metaDesc: 'Warum ein Ausfall ein Prozess ist, kein Ereignis — und wie zustandsbasierte, zuverlässigkeitszentrierte O&M Vorläufersignale Monate im Voraus erkennt.',
    back: '← Zurück zu den Insights',
    title: 'Das eigentliche Problem in der O&M sind nicht die Ausfälle: Es ist das, was wir nicht messen, tracken oder ernst nehmen',
    body: [
      `Das eigentliche Problem in der O&M sind nicht die Ausfälle selbst. Es ist alles, was wir bis zum Ausfall nicht gemessen, getrendet oder ernst genommen haben. Ein Ausfall entsteht nicht plötzlich aus dem Nichts — ein Ausfall ist kein Ereignis, sondern ein Prozess.`,
      `## Ausfälle beginnen leise`,
      `Die meisten Ausfälle beginnen mit:`,
      `- Steigenden Vibrationssignaturen\n- Sich langsam verschlechternden Yaw- & Pitch-Reaktionszeiten\n- Trends bei Getriebeölpartikeln\n- Thermischer Drift der Umrichter-IGBTs\n- SCADA-Parametern, die keinen Alarm auslösen, deren Verhalten sich aber verändert hat\n- Abweichungen der IV-Kurve\n- Sich leise entwickelnder Lastfehlausrichtung und Materialermüdung`,
      `Keines dieser Signale löst für sich genommen einen Alarm aus. Zusammen gelesen können sie jedoch einen Ausfall Monate im Voraus ankündigen.`,
      `## Vom alarmgesteuerten zum zustandsbasierten Ansatz`,
      `Die meisten O&M-Programme werden noch immer alarmgesteuert betrieben — man reagiert erst, wenn ein Alarm ausgelöst wird. Was tatsächlich benötigt wird, ist ein zustandsbasierter, zuverlässigkeitszentrierter O&M-Ansatz.`,
      `Warum ist dieser Unterschied so wichtig? Weil:`,
      `- Verfügbarkeitswerte gut aussehen können, während der AEP-Verlust (Jahresenergieproduktion) am Jahresende zur Überraschung wird\n- MTBF (mittlere Zeit zwischen Ausfällen) auf dem Papier gut aussehen kann, während Ausfall-Vorläufersignale nie in den Entscheidungsprozess einfließen`,
      `## Was den tatsächlichen Unterschied ausmacht`,
      `Der eigentliche Unterschied entsteht durch das Zusammenspiel von vier Elementen:`,
      `1. CMS-Daten (Condition Monitoring System), die interpretiert und nicht nur überwacht werden\n2. EL-/IR-/Vibrations-/Öldaten, die gemeinsam und kreuzweise gelesen werden\n3. SCADA-KPIs, die anhand von Trends und Anomalien statt statischer Schwellenwerte bewertet werden\n4. Felderfahrung, die in den Algorithmus zurückfließt, statt getrennt von ihm zu existieren`,
      `## Fazit`,
      `O&M ist keine Wartungsaufgabe. Es ist Asset-Health- und Lebenszyklus-Risikomanagement. In dem Moment, in dem wir beginnen, einen Ausfall als monatelangen Prozess statt als einzelnes Ereignis zu betrachten, geben uns dieselben Daten die Chance, weitaus früher und weitaus kostengünstiger einzugreifen.`,
    ],
    cta: 'POWEN bietet zustandsbasierte, zuverlässigkeitszentrierte O&M-Beratung für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke weltweit.',
    ctaLink: 'Kontaktieren Sie unser Team',
  },
} as const;

type Locale = keyof typeof content;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'de' }];
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const c = content[locale as Locale] ?? content.en;
  const url = `${baseUrl}/${locale}/insights/om-failure-precursors`;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/insights/om-failure-precursors`,
        tr: `${baseUrl}/tr/insights/om-failure-precursors`,
        de: `${baseUrl}/de/insights/om-failure-precursors`,
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

export default function OmFailurePrecursorsPage({ params: { locale } }: { params: { locale: string } }) {
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
