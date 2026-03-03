'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'

/** Signed distance from point to the edge of a pill (stadium) — negative = inside */
function pillSDF(px: number, py: number, cx: number, cy: number, hw: number, hh: number): number {
  const r = hh
  const dx = Math.max(Math.abs(px - cx) - (hw - r), 0)
  const dy = py - cy
  return Math.sqrt(dx * dx + dy * dy) - r
}

export default function PixelBorder({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect
      setSize({ w: Math.round(width), h: Math.round(height) })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  const bs = 4
  const gap = 0.6
  const border = bs
  const pad = bs * 4

  let svgContent = null
  let svgStyle: React.CSSProperties = {}
  let svgW = 0
  let svgH = 0

  if (size && size.w > 0) {
    const elW = Math.ceil(size.w / (bs * 2)) * bs * 2
    const elH = Math.ceil(size.h / (bs * 2)) * bs * 2

    svgW = elW + pad * 2
    svgH = elH + pad * 2

    const cx = svgW / 2
    const cy = svgH / 2

    const outerHW = elW / 2 + border
    const outerHH = elH / 2 + border
    const innerHW = elW / 2
    const innerHH = elH / 2

    const cols = svgW / bs
    const rows = svgH / bs
    const inner = bs - gap

    const bvTop = 1.2
    const bvSide = 1.0

    const mainPath: string[] = []
    const lightTopPath: string[] = []
    const lightLeftPath: string[] = []
    const darkBottomPath: string[] = []
    const darkRightPath: string[] = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const px = c * bs + bs / 2
        const py = r * bs + bs / 2

        const outerD = pillSDF(px, py, cx, cy, outerHW, outerHH)
        const innerD = pillSDF(px, py, cx, cy, innerHW, innerHH)

        if (outerD < 0 && innerD >= -0.5) {
          const bx = c * bs + gap / 2
          const by = r * bs + gap / 2

          mainPath.push(`M${bx},${by}h${inner}v${inner}h-${inner}z`)
          lightTopPath.push(`M${bx},${by}h${inner}v${bvTop}h-${inner}z`)
          lightLeftPath.push(`M${bx},${by + bvTop}h${bvSide}v${inner - bvTop}h-${bvSide}z`)
          darkBottomPath.push(`M${bx},${by + inner - bvTop}h${inner}v${bvTop}h-${inner}z`)
          darkRightPath.push(`M${bx + inner - bvSide},${by}h${bvSide}v${inner - bvTop}h-${bvSide}z`)
        }
      }
    }

    const d = mainPath.join(' ')
    const offX = -(svgW - size.w) / 2
    const offY = -(svgH - size.h) / 2
    svgStyle = { left: offX, top: offY, width: svgW, height: svgH }

    svgContent = (
      <>
        <defs>
          <filter id="pxGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          {/* Clip path matching the pixel blocks */}
          <clipPath id="pixelClip">
            <path d={d} />
          </clipPath>
        </defs>
        {/* Soft outer glow */}
        <path d={d} fill="#fed841" opacity={0.2} filter="url(#pxGlow)" />
        {/* Main block face — gold */}
        <path d={d} fill="#dab825" />
        {/* Top bevel highlight */}
        <path d={lightTopPath.join(' ')} fill="#ffe566" opacity={0.85} />
        {/* Left bevel highlight */}
        <path d={lightLeftPath.join(' ')} fill="#f5d740" opacity={0.6} />
        {/* Bottom shadow */}
        <path d={darkBottomPath.join(' ')} fill="#9e7a10" opacity={0.65} />
        {/* Right shadow */}
        <path d={darkRightPath.join(' ')} fill="#b08e15" opacity={0.5} />
        {/* Blue color wave — CSS animated, clipped to pixel blocks */}
        <foreignObject x="0" y="0" width={svgW} height={svgH} clipPath="url(#pixelClip)">
          <div
            style={{
              width: svgW * 2,
              height: svgH,
              background: `repeating-linear-gradient(90deg,
                transparent 0px,
                transparent ${svgW * 0.25}px,
                rgba(58,133,232,0.7) ${svgW * 0.38}px,
                rgba(100,180,255,0.9) ${svgW * 0.5}px,
                rgba(58,133,232,0.7) ${svgW * 0.62}px,
                transparent ${svgW * 0.75}px,
                transparent ${svgW}px
              )`,
              animation: 'pixelWave 3s linear infinite',
            }}
          />
        </foreignObject>
      </>
    )
  }

  return (
    <div ref={ref} className="relative inline-block">
      <style>{`
        @keyframes pixelWave {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {svgContent && (
        <svg
          className="absolute pointer-events-none"
          style={svgStyle}
          viewBox={`0 0 ${svgW} ${svgH}`}
          shapeRendering="crispEdges"
        >
          {svgContent}
        </svg>
      )}
      <span className="relative z-10">{children}</span>
    </div>
  )
}
