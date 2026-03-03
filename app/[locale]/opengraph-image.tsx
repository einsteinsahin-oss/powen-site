import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'POWEN - Power Plant Engineering & Asset Management';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #1a3a5c 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Arka plan dekoratif çizgiler */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0,120,255,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Üst kısım: Logo + marka adı */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              background: '#0066ff',
              borderRadius: '10px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            ⚡
          </div>
          <span style={{ color: '#ffffff', fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px' }}>
            POWEN
          </span>
        </div>

        {/* Orta kısım: Ana başlık */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              color: '#4da6ff',
              fontSize: '18px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Power Plant Engineering
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '52px',
              fontWeight: 'bold',
              lineHeight: 1.1,
              maxWidth: '800px',
            }}
          >
            Engineering Excellence in Renewable Energy
          </div>
          <div style={{ color: '#94b8d8', fontSize: '22px', maxWidth: '700px', lineHeight: 1.5 }}>
            Advisory · EPC · O&M · Asset Management · Digital Solutions
          </div>
        </div>

        {/* Alt kısım: İstatistikler */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-end' }}>
          {[
            { value: '12+ GW', label: 'Under Management' },
            { value: '96.8%', label: 'Avg. Availability' },
            { value: '45+', label: 'Active Projects' },
            { value: '15', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ color: '#4da6ff', fontSize: '28px', fontWeight: 'bold' }}>
                {stat.value}
              </span>
              <span style={{ color: '#94b8d8', fontSize: '14px' }}>{stat.label}</span>
            </div>
          ))}

          {/* Sağ alt: CTA */}
          <div style={{ marginLeft: 'auto', display: 'flex' }}>
            <div
              style={{
                background: '#0066ff',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                display: 'flex',
              }}
            >
              powen-site.vercel.app →
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
