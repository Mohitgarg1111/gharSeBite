import { useEffect, useRef } from 'react'

/**
 * Lenis-style smooth scroll implemented in vanilla JS.
 * Gives that buttery Awwwards scroll feel without adding
 * a heavy library. Uses RAF lerp approach.
 */
export default function SmoothScroll({ children }) {
  const containerRef = useRef(null)
  const state = useRef({
    current: 0,
    target: 0,
    ease: 0.085,
    raf: null,
  })

  useEffect(() => {
    // Only on desktop — mobile native scroll is better
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.innerWidth < 1024) return

    const container = containerRef.current
    if (!container) return

    const setHeight = () => {
      document.body.style.height = container.scrollHeight + 'px'
    }

    const smoothLoop = () => {
      state.current.target = window.scrollY
      state.current.current +=
        (state.current.target - state.current.current) * state.current.ease

      const rounded = Math.round(state.current.current * 100) / 100
      container.style.transform = `translateY(${-rounded}px)`
      state.current.raf = requestAnimationFrame(smoothLoop)
    }

    // Set body height to match container
    setHeight()
    const ro = new ResizeObserver(setHeight)
    ro.observe(container)

    // Fix position
    container.style.position = 'fixed'
    container.style.top      = '0'
    container.style.left     = '0'
    container.style.width    = '100%'
    container.style.willChange = 'transform'

    state.current.raf = requestAnimationFrame(smoothLoop)

    return () => {
      cancelAnimationFrame(state.current.raf)
      ro.disconnect()
      document.body.style.height = ''
      container.style.position   = ''
      container.style.transform  = ''
      container.style.top        = ''
      container.style.left       = ''
      container.style.width      = ''
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}