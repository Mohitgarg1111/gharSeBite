import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Cinematic page entrance — warm curtain wipe that reveals
 * the site on first load, Awwwards style.
 */
export default function PageTransition() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Mark done after animation completes
    const t = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  if (done) return null

  return (
    <AnimatePresence>
      {!done && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
          {/* Left panel */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            // style={{ originX: 0 }}
            className="flex-1 h-full"
            style={{
                originX: 0,
              background: 'linear-gradient(135deg, #2C1A0E 0%, #3D2314 100%)',
              transformOrigin: 'left center',
            }}
          />
          {/* Right panel */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 h-full"
            style={{
              background: 'linear-gradient(135deg, #3D2314 0%, #EA580C 100%)',
              transformOrigin: 'right center',
            }}
          />

          {/* Center logo during load */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.95] }}
            transition={{ duration: 1.6, times: [0, 0.2, 0.7, 1], ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.5)]">
              <span className="text-3xl">🍛</span>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 28,
                fontWeight: 600,
                color: '#FBF6EE',
                letterSpacing: '0.05em',
              }}
            >
              GharSeBite
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 1, background: 'rgba(234,88,12,0.6)', borderRadius: 99 }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}