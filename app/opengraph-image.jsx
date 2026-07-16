import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shubham Gupta - Full Stack Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #262626',
            borderRadius: '24px',
            padding: '80px 120px',
            backgroundColor: '#0f0f0f',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ fontSize: '80px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '10px' }}>
            Shubham Gupta
          </div>
          <div style={{ fontSize: '40px', color: '#a3a3a3', marginBottom: '60px', fontWeight: '500' }}>
            Full Stack Web Developer
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 40px',
              backgroundColor: '#052e16',
              border: '2px solid #14532d',
              borderRadius: '999px',
            }}
          >
            <div style={{ fontSize: '32px', color: '#4ade80', fontWeight: '600', letterSpacing: '0.02em' }}>
              Available for freelance
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
