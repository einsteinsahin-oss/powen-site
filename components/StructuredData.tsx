export default function StructuredData({ locale }: { locale: string }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "POWEN Power Enerlytics",
    "url": "https://www.powerenerlytics.com",
    "logo": "https://www.powerenerlytics.com/images/logo.png",
    "description": locale === 'tr' 
      ? "Enerji santrali mühendisliği, varlık yönetimi."
      : locale === 'de'
      ? "Kraftwerk-Engineering, Asset-Management."
      : "Power plant engineering, asset management.",
    "email": "info@powerenerlytics.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
