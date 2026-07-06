import type { Metadata } from 'next';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/navigation/Navigation';

const baseUrl = 'https://powerenerlytics.com';

const content = {
  en: {
    metaTitle: 'Operations & Maintenance Lessons | POWEN',
    metaDesc: 'What 20+ years in the field teach us about preventive maintenance, spare parts strategy, and asset reliability in power plants.',
    back: '← Back to Insights',
    title: 'Operations & Maintenance Lessons: What 20+ Years in the Field Teach Us About Keeping Power Plants Running',
    body: [
      `Power plants — whether wind, solar, hydro, gas, or battery storage — are only as profitable as their uptime. A turbine that isn't spinning or a solar array that isn't producing is a stranded asset, no matter how well it was designed or built. After two decades of supporting operations and maintenance (O&M) programs across commercial, industrial, and utility-scale renewable projects, a few hard-earned lessons stand out — the kind that don't show up in a datasheet but show up in a P&L.`,
      `## 1. Preventive Maintenance Is Cheaper Than Corrective Maintenance — Every Time`,
      `It sounds obvious, but the numbers make the case better than any argument. A scheduled gearbox oil analysis costs a fraction of an unplanned gearbox replacement — and the replacement almost always comes with weeks of lost generation on top of the parts and labor. Asset owners who track total cost of ownership rather than just CAPEX consistently find that a disciplined preventive maintenance schedule — vibration monitoring, thermal imaging, oil analysis, torque checks — pays for itself within the first year of operation.`,
      `The mistake most new asset owners make is treating O&M as a line item to minimize rather than an investment that protects the far larger line item: the asset itself.`,
      `## 2. Data Without Context Is Just Noise`,
      `Modern power plants generate enormous volumes of SCADA and condition-monitoring data. The problem isn't collecting it — it's knowing which signals actually predict failure. A vibration spike on its own means little; a vibration spike correlated with a specific wind speed band, ambient temperature, and time since last lubrication cycle means a great deal.`,
      `The most effective O&M programs we've supported don't just install more sensors — they build the analytical layer that turns raw telemetry into a short, prioritized list of "what to inspect this week." Without that layer, operators either drown in false alarms or miss the signal buried in the noise.`,
      `## 3. The First 90 Days After Commissioning Are the Highest-Risk Window`,
      `Failure rates in the first three months of operation are consistently higher than in year two or three of a well-run asset. Infant mortality — loose connections, torque settings that weren't fully seated, control logic edge cases that weren't caught in commissioning tests — accounts for a disproportionate share of early-life downtime.`,
      `Assets that get close, structured attention during this window (daily inspection logs, tightened punch-list follow-through, rapid escalation paths to the EPC contractor) come out of it with meaningfully better long-term reliability than assets where the O&M team simply "takes over" and assumes commissioning caught everything.`,
      `## 4. Spare Parts Strategy Is a Risk Management Exercise, Not a Procurement Exercise`,
      `Every asset owner eventually learns this lesson, usually the hard way: the part that fails is rarely the part that was in stock. Effective spares strategy starts with a criticality analysis — which components have the longest lead times, the highest failure probability, and the greatest production impact if unavailable — rather than simply stocking what the OEM recommends as a default list.`,
      `For remote or off-grid sites in particular, lead time is often the real enemy, not part cost. A $2,000 part that takes 12 weeks to airfreight can cost far more in lost generation than a $20,000 part with a spare sitting in a regional warehouse.`,
      `## 5. Documentation Discipline Is a Reliability Multiplier`,
      `Technicians rotate. Contractors change. Institutional knowledge that lives only in one senior technician's head is a single point of failure just as real as a faulty transformer. Assets with rigorous documentation — as-built drawings kept current, every corrective action logged with root cause, every setting change recorded — recover from unfamiliar faults faster because the next technician isn't starting from zero.`,
      `This is one of the most underrated aspects of asset management: the value isn't just in doing the maintenance correctly, but in making sure the next person doesn't have to rediscover what was already learned.`,
      `## The Bottom Line`,
      `None of these lessons are exotic. They're the product of paying close attention across hundreds of maintenance cycles, dozens of commissioning periods, and more than a few hard lessons about what happens when preventive maintenance gets deferred one quarter too many. The plants that perform best over a 20-25 year asset life aren't necessarily the ones with the newest technology — they're the ones where operations and maintenance is treated as a core engineering discipline, not an afterthought.`,
    ],
    cta: 'POWEN provides Operations & Maintenance advisory and Strategic Asset Management services for wind, solar, hydro, gas, and BESS power plants worldwide.',
    ctaLink: 'Contact our team',
  },
  tr: {
    metaTitle: 'İşletme & Bakım Dersleri | POWEN',
    metaDesc: '20+ yıllık saha deneyiminin bize öğrettikleri: önleyici bakım, yedek parça stratejisi ve enerji santrallerinde varlık güvenilirliği.',
    back: '← İçgörülere Dön',
    title: 'İşletme & Bakım Dersleri: 20+ Yıllık Saha Deneyimi Bize Ne Öğretiyor?',
    body: [
      `Enerji santralleri — ister rüzgar, ister güneş, hidro, gaz ya da batarya depolama olsun — yalnızca çalışma süreleri (uptime) kadar kârlıdır. Dönmeyen bir türbin ya da üretim yapmayan bir güneş paneli dizisi, ne kadar iyi tasarlanmış veya inşa edilmiş olursa olsun, atıl bir varlıktır. Ticari, endüstriyel ve şebeke ölçekli yenilenebilir enerji projelerinde iki yıllık dönem boyunca işletme ve bakım (O&M) programlarına destek verdikten sonra, bazı zor kazanılmış dersler öne çıkıyor — veri sayfasında görünmeyen ama kâr-zarar tablosunda kendini gösteren türden dersler.`,
      `## 1. Önleyici Bakım Her Zaman Düzeltici Bakımdan Daha Ucuzdur`,
      `Kulağa bariz geliyor, ama rakamlar bunu her argümandan daha iyi kanıtlıyor. Planlı bir dişli kutusu yağ analizi, plansız bir dişli kutusu değişiminin çok küçük bir kesridir — ve değişim neredeyse her zaman parça ve işçilik maliyetinin üzerine haftalarca üretim kaybı da ekler. Yalnızca CAPEX'i değil, toplam sahip olma maliyetini takip eden varlık sahipleri, disiplinli bir önleyici bakım programının (titreşim izleme, termal görüntüleme, yağ analizi, tork kontrolleri) ilk işletme yılı içinde kendini amorti ettiğini tutarlı şekilde görüyor.`,
      `Çoğu yeni varlık sahibinin yaptığı hata, O&M'i küçültülmesi gereken bir gider kalemi olarak görmek, çok daha büyük bir kalemi — varlığın kendisini — koruyan bir yatırım olarak görmemektir.`,
      `## 2. Bağlamdan Yoksun Veri Sadece Gürültüdür`,
      `Modern enerji santralleri devasa miktarda SCADA ve durum izleme verisi üretiyor. Sorun bu veriyi toplamak değil — hangi sinyallerin gerçekten arızayı öngördüğünü bilmek. Tek başına bir titreşim artışı çok az şey ifade eder; belirli bir rüzgar hızı aralığı, ortam sıcaklığı ve son yağlama döngüsünden bu yana geçen süreyle korelasyonlu bir titreşim artışı ise çok şey ifade eder.`,
      `Destek verdiğimiz en etkili O&M programları sadece daha fazla sensör kurmuyor — ham telemetriyi "bu hafta neyi kontrol etmeli" şeklinde kısa, önceliklendirilmiş bir listeye dönüştüren analitik katmanı inşa ediyor. Bu katman olmadan operatörler ya yanlış alarmlarda boğuluyor ya da gürültü içine gömülü sinyali kaçırıyor.`,
      `## 3. Devreye Almadan Sonraki İlk 90 Gün En Yüksek Risk Penceresidir`,
      `İşletmenin ilk üç ayındaki arıza oranları, iyi yönetilen bir varlığın ikinci veya üçüncü yılına göre tutarlı şekilde daha yüksektir. Erken dönem arızaları — gevşek bağlantılar, tam oturmamış tork ayarları, devreye alma testlerinde yakalanmamış kontrol mantığı uç durumları — erken dönem kesinti süresinin orantısız bir bölümünü oluşturur.`,
      `Bu pencerede yakın, yapılandırılmış ilgi gören varlıklar (günlük denetim kayıtları, sıkı takip edilen eksik iş listeleri, EPC yüklenicisine hızlı yükseltme yolları), O&M ekibinin devreye almanın her şeyi yakaladığını varsayarak "devraldığı" varlıklara göre anlamlı ölçüde daha iyi uzun vadeli güvenilirlikle çıkıyor.`,
      `## 4. Yedek Parça Stratejisi Bir Satın Alma Değil, Risk Yönetimi Egzersizidir`,
      `Her varlık sahibi bu dersi er ya da geç, genelde zor yoldan öğrenir: arızalanan parça nadiren stokta olan parçadır. Etkili bir yedek parça stratejisi, OEM'in varsayılan liste olarak önerdiğini stoklamak yerine bir kritiklik analiziyle başlar — hangi bileşenlerin en uzun tedarik süresi, en yüksek arıza olasılığı ve mevcut olmadığında en büyük üretim etkisi var.`,
      `Özellikle uzak veya şebekeden bağımsız sahalarda, gerçek düşman genellikle parça maliyeti değil tedarik süresidir. Hava kargoyla 12 hafta süren 2.000 dolarlık bir parça, bölgesel bir depoda yedeği bulunan 20.000 dolarlık bir parçadan üretim kaybı açısından çok daha pahalıya mal olabilir.`,
      `## 5. Dokümantasyon Disiplini Bir Güvenilirlik Çarpanıdır`,
      `Teknisyenler rotasyona girer. Yükleniciler değişir. Yalnızca bir kıdemli teknisyenin kafasında yaşayan kurumsal bilgi, arızalı bir transformatör kadar gerçek bir tekil arıza noktasıdır (single point of failure). Titiz dokümantasyona sahip varlıklar — güncel tutulan as-built çizimler, kök nedeniyle birlikte kayıtlı her düzeltici faaliyet, kaydedilen her ayar değişikliği — tanıdık olmayan arızalardan daha hızlı toparlanır, çünkü bir sonraki teknisyen sıfırdan başlamaz.`,
      `Bu, varlık yönetiminin en az takdir edilen yönlerinden biridir: değer sadece bakımı doğru yapmakta değil, bir sonraki kişinin zaten öğrenilmiş olanı yeniden keşfetmek zorunda kalmamasını sağlamaktadır.`,
      `## Sonuç`,
      `Bu derslerin hiçbiri egzotik değil. Yüzlerce bakım döngüsü, düzinelerce devreye alma dönemi boyunca yakın ilgi göstermenin ve önleyici bakımın bir çeyrek fazla ertelenmesinin ne getirdiğine dair birkaç zor dersin ürünüdür. 20-25 yıllık varlık ömrü boyunca en iyi performansı gösteren santraller, mutlaka en yeni teknolojiye sahip olanlar değildir — işletme ve bakımın sonradan akla gelen bir şey değil, temel bir mühendislik disiplini olarak ele alındığı santrallerdir.`,
    ],
    cta: 'POWEN, rüzgar, güneş, hidro, gaz ve BESS santralleri için İşletme & Bakım danışmanlığı ve Stratejik Varlık Yönetimi hizmetleri sunar.',
    ctaLink: 'Ekibimizle iletişime geçin',
  },
  de: {
    metaTitle: 'Betriebs- und Wartungserkenntnisse | POWEN',
    metaDesc: 'Was 20+ Jahre Felderfahrung über vorbeugende Wartung, Ersatzteilstrategie und Anlagenzuverlässigkeit in Kraftwerken lehren.',
    back: '← Zurück zu den Insights',
    title: 'Betriebs- und Wartungserkenntnisse: Was 20+ Jahre Felderfahrung über den Betrieb von Kraftwerken lehren',
    body: [
      `Kraftwerke — ob Wind, Solar, Wasserkraft, Gas oder Batteriespeicher — sind nur so profitabel wie ihre Verfügbarkeit. Eine Turbine, die nicht dreht, oder ein Solarpark, der nicht produziert, ist ein gestrandeter Vermögenswert, egal wie gut er konzipiert oder gebaut wurde. Nach zwei Jahrzehnten der Unterstützung von Betriebs- und Wartungsprogrammen (O&M) in gewerblichen, industriellen und Utility-Scale-Projekten für erneuerbare Energien kristallisieren sich einige hart erarbeitete Erkenntnisse heraus — jene Art, die in keinem Datenblatt steht, aber in der Gewinn- und Verlustrechnung sichtbar wird.`,
      `## 1. Vorbeugende Wartung ist immer günstiger als korrektive Wartung`,
      `Es klingt selbstverständlich, aber die Zahlen sprechen für sich. Eine planmäßige Ölanalyse am Getriebe kostet einen Bruchteil eines ungeplanten Getriebeaustauschs — und der Austausch geht fast immer mit wochenlangem Produktionsausfall einher, zusätzlich zu Teilen und Arbeitskosten. Anlagenbetreiber, die die Gesamtbetriebskosten und nicht nur die CAPEX verfolgen, stellen durchweg fest, dass ein diszipliniertes vorbeugendes Wartungsprogramm — Vibrationsüberwachung, Thermografie, Ölanalyse, Drehmomentkontrollen — sich bereits im ersten Betriebsjahr amortisiert.`,
      `Der Fehler, den die meisten neuen Anlagenbetreiber machen, besteht darin, O&M als zu minimierenden Kostenpunkt zu behandeln, anstatt als Investition, die den weitaus größeren Posten schützt: die Anlage selbst.`,
      `## 2. Daten ohne Kontext sind nur Rauschen`,
      `Moderne Kraftwerke erzeugen enorme Mengen an SCADA- und Zustandsüberwachungsdaten. Das Problem liegt nicht in der Erfassung, sondern darin, zu wissen, welche Signale tatsächlich einen Ausfall vorhersagen. Ein Vibrationsanstieg allein bedeutet wenig; ein Vibrationsanstieg, der mit einer bestimmten Windgeschwindigkeitsspanne, Umgebungstemperatur und der Zeit seit dem letzten Schmierzyklus korreliert, bedeutet hingegen sehr viel.`,
      `Die effektivsten O&M-Programme, die wir begleitet haben, installieren nicht einfach mehr Sensoren — sie bauen die analytische Ebene auf, die rohe Telemetriedaten in eine kurze, priorisierte Liste von "Was diese Woche zu inspizieren ist" verwandelt. Ohne diese Ebene ertrinken Betreiber entweder in Fehlalarmen oder übersehen das Signal im Rauschen.`,
      `## 3. Die ersten 90 Tage nach der Inbetriebnahme sind das risikoreichste Zeitfenster`,
      `Die Ausfallraten in den ersten drei Betriebsmonaten sind durchweg höher als im zweiten oder dritten Betriebsjahr einer gut geführten Anlage. Frühausfälle — lockere Verbindungen, nicht vollständig eingestellte Drehmomente, Grenzfälle in der Steuerungslogik, die bei den Inbetriebnahmetests nicht erfasst wurden — machen einen unverhältnismäßig großen Anteil der Ausfallzeiten in der Frühphase aus.`,
      `Anlagen, die in diesem Zeitfenster eine strukturierte, engmaschige Betreuung erhalten (tägliche Inspektionsprotokolle, konsequente Abarbeitung offener Mängellisten, schnelle Eskalationswege zum EPC-Auftragnehmer), zeigen langfristig eine deutlich bessere Zuverlässigkeit als Anlagen, bei denen das O&M-Team einfach "übernimmt" und davon ausgeht, dass die Inbetriebnahme alles erfasst hat.`,
      `## 4. Ersatzteilstrategie ist eine Risikomanagement-Übung, keine Beschaffungsübung`,
      `Jeder Anlagenbetreiber lernt diese Lektion irgendwann, meist auf die harte Tour: Das Teil, das ausfällt, ist selten das Teil, das auf Lager war. Eine effektive Ersatzteilstrategie beginnt mit einer Kritikalitätsanalyse — welche Komponenten haben die längsten Lieferzeiten, die höchste Ausfallwahrscheinlichkeit und die größten Produktionsauswirkungen bei Nichtverfügbarkeit — anstatt einfach die vom OEM empfohlene Standardliste vorzuhalten.`,
      `Besonders bei entlegenen oder netzunabhängigen Standorten ist oft die Lieferzeit der eigentliche Feind, nicht der Teilepreis. Ein 2.000-Euro-Teil, dessen Luftfracht 12 Wochen dauert, kann durch entgangene Produktion weitaus teurer werden als ein 20.000-Euro-Teil mit einem Ersatzteil im regionalen Lager.`,
      `## 5. Dokumentationsdisziplin ist ein Zuverlässigkeitsmultiplikator`,
      `Techniker wechseln. Auftragnehmer ändern sich. Institutionelles Wissen, das nur im Kopf eines erfahrenen Technikers existiert, ist ein ebenso realer Single Point of Failure wie ein defekter Transformator. Anlagen mit rigoroser Dokumentation — aktuell gehaltene As-Built-Zeichnungen, jede Korrekturmaßnahme mit Grundursache protokolliert, jede Einstellungsänderung erfasst — erholen sich schneller von unbekannten Störungen, weil der nächste Techniker nicht bei null anfängt.`,
      `Dies ist einer der am meisten unterschätzten Aspekte des Anlagenmanagements: Der Wert liegt nicht nur darin, die Wartung korrekt durchzuführen, sondern auch sicherzustellen, dass die nächste Person nicht neu entdecken muss, was bereits gelernt wurde.`,
      `## Fazit`,
      `Keine dieser Erkenntnisse ist exotisch. Sie sind das Ergebnis genauer Beobachtung über Hunderte von Wartungszyklen, Dutzende von Inbetriebnahmephasen und mehr als ein paar harte Lektionen darüber, was passiert, wenn vorbeugende Wartung ein Quartal zu oft verschoben wird. Die Anlagen, die über eine Lebensdauer von 20-25 Jahren am besten abschneiden, sind nicht unbedingt die mit der neuesten Technologie — es sind diejenigen, bei denen Betrieb und Wartung als zentrale ingenieurtechnische Disziplin behandelt werden, nicht als Nebensache.`,
    ],
    cta: 'POWEN bietet O&M-Beratung und strategisches Asset Management für Wind-, Solar-, Wasserkraft-, Gas- und BESS-Kraftwerke weltweit.',
    ctaLink: 'Kontaktieren Sie unser Team',
  },
} as const;

type Locale = keyof typeof content;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'de' }];
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const c = content[locale as Locale] ?? content.en;
  const url = `${baseUrl}/${locale}/insights/om-lessons`;
  return {
    title: c.metaTitle,
    description: c.metaDesc,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/insights/om-lessons`,
        tr: `${baseUrl}/tr/insights/om-lessons`,
        de: `${baseUrl}/de/insights/om-lessons`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDesc,
      url,
      type: 'article',
    },
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
    return (
      <p key={i} className="text-base text-gray-700 leading-relaxed mb-5">
        {p}
      </p>
    );
  });
}

export default function OmLessonsPage({ params: { locale } }: { params: { locale: string } }) {
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
            <a
              href="mailto:info@powerenerlytics.com"
              className="text-teal-600 font-semibold hover:underline"
            >
              {c.ctaLink} →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
