import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Punya Jain — Full-Stack & AI Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <p style={{ color: '#888', fontSize: 24, margin: '0 0 16px' }}>
          jainsahab.tech
        </p>
        <h1
          style={{
            color: '#fff',
            fontSize: 72,
            margin: '0 0 24px',
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Punya Jain
        </h1>
        <p style={{ color: '#aaa', fontSize: 32, margin: '0 0 48px' }}>
          Full-Stack &amp; AI Developer · Delhi 🇮🇳
        </p>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {['Next.js', 'TypeScript', 'Node.js', 'AI Agents'].map((tag) => (
            <span
              key={tag}
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                color: '#aaa',
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '18px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  )
}
