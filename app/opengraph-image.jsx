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
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle premium accent line at the top */}
        <div style={{ display: 'flex', position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundImage: 'linear-gradient(90deg, #3b82f6, #10b981)' }} />

        {/* Main Content Container (centered vertically) */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', zIndex: 10 }}>

          {/* Top Badge */}
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 28px',
                backgroundColor: '#052e16',
                border: '1px solid #14532d',
                borderRadius: '999px',
                fontSize: '26px',
                color: '#4ade80',
                fontWeight: 'bold',
              }}
            >
              <div style={{ display: 'flex', width: '12px', height: '12px', backgroundColor: '#4ade80', borderRadius: '50%', marginRight: '14px' }} />
              Open for Freelance Work
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '80px' }}>
            <div style={{ fontSize: '120px', color: '#ffffff', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1', marginBottom: '16px' }}>
              Shubham Gupta
            </div>
            <div style={{ fontSize: '48px', color: '#ffffff', fontWeight: '500', letterSpacing: '-0.01em' }}>
              Full Stack Developer
            </div>
          </div>

          {/* Contact Pills Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', maxWidth: '1000px' }}>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '16px 28px', color: '#ffffff', fontSize: '28px', fontWeight: '500' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '16px', color: '#ffffff' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              shubhamkgupta720@gmail.com
            </div>

            {/* Github */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '16px 28px', color: '#ffffff', fontSize: '28px', fontWeight: '500' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '16px', color: '#ffffff' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              /shubGupta10
            </div>

            {/* Twitter */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '16px 28px', color: '#ffffff', fontSize: '28px', fontWeight: '500' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '16px', color: '#ffffff' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              /buildwithshub
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
