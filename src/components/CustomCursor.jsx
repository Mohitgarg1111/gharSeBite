import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Awwwards-style custom cursor system:
 * - Tiny orange dot that follows mouse exactly
 * - Large lagging ring follower with spring physics
 * - Morphs into a "View" label on image hover
 * - Morphs into a big filled circle on button hover
 * - Hides on touch devices
 */
export default function CustomCursor() {
  const dotRef      = useRef(null)
  const ringRef     = useRef(null)
  const labelRef    = useRef(null)
  const pos         = useRef({ x: 0, y: 0 })
  const ring        = useRef({ x: 0, y: 0 })
  const raf         = useRef(null)

  const [cursorState, setCursorState] = useState('default')
  // states: 'default' | 'button' | 'image' | 'text' | 'link'

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot      = dotRef.current
    const ringEl   = ringRef.current
    const labelEl  = labelRef.current
    if (!dot || !ringEl) return

    // Hide native cursor globally
    document.documentElement.style.cursor = 'none'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      // Dot follows instantly
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    // Smooth follower loop
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      if (labelEl) {
        labelEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    // Determine cursor state from element
    const getState = (el) => {
      if (!el) return 'default'
      if (el.closest('button, a, [role="button"]')) return 'button'
      if (el.closest('img'))                         return 'image'
      if (el.closest('input, textarea, select'))     return 'text'
      if (el.closest('h1, h2, h3'))                  return 'default'
      return 'default'
    }

    const onOver = (e) => setCursorState(getState(e.target))
    const onOut  = ()  => setCursorState('default')

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    raf.current = requestAnimationFrame(loop)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  // Ring size/style per state
  const ringConfig = {
    default: { size: 38, bg: 'transparent', border: 'rgba(234,88,12,0.55)', opacity: 1   },
    button:  { size: 56, bg: 'rgba(234,88,12,0.12)', border: 'rgba(234,88,12,0.8)', opacity: 1 },
    image:   { size: 72, bg: 'rgba(234,88,12,0.10)', border: 'rgba(234,88,12,0.5)', opacity: 1 },
    text:    { size: 4,  bg: 'rgba(234,88,12,0.9)',  border: 'transparent',          opacity: 0.7 },
    link:    { size: 48, bg: 'rgba(234,88,12,0.15)', border: 'rgba(234,88,12,0.9)', opacity: 1 },
  }

  const cfg = ringConfig[cursorState] ?? ringConfig.default

  return (
    <>
      {/* Tiny dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#EA580C',
          marginLeft: -4, marginTop: -4,
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          width:        cfg.size,
          height:       cfg.size,
          marginLeft:   -cfg.size / 2,
          marginTop:    -cfg.size / 2,
          borderRadius: '50%',
          background:   cfg.bg,
          border:       `1.5px solid ${cfg.border}`,
          opacity:      cfg.opacity,
          willChange:   'transform',
          transition:   'width 0.35s cubic-bezier(0.22,1,0.36,1), height 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s, margin 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      />

      {/* "View" label on image hover */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 z-[99997] pointer-events-none flex items-center justify-center"
        style={{
          width: 72, height: 72,
          marginLeft: -36, marginTop: -36,
          willChange: 'transform',
          opacity: cursorState === 'image' ? 1 : 0,
          transition: 'opacity 0.25s',
        }}
      >
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#EA580C',
          }}
        >
          View
        </span>
      </div>
    </>
  )
}