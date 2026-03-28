import { motion } from 'framer-motion'

const items = [
  '🍛 Freshly Made',
  '✨ Hygienic Kitchen',
  '🏠 Home Cooked',
  '💰 Affordable',
  '⏰ On-Time Delivery',
  '🌿 No Preservatives',
  '❤️ Made with Love',
  '🥗 Healthy Meals',
]

/**
 * Infinite horizontal marquee — seen on every Awwwards site.
 * Duplicated items for seamless loop.
 */
export default function MarqueeStrip({ reverse = false }) {
  const all = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-4 border-y border-orange-200/40"
      style={{ background: 'rgba(234,88,12,0.04)' }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #FBF6EE, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #FBF6EE, transparent)' }} />

      <motion.div
        className="flex whitespace-nowrap gap-0"
        animate={{ x: reverse ? ['0%', '33.33%'] : ['0%', '-33.33%'] }}
        transition={{
          duration:  22,
          repeat:    Infinity,
          ease:      'linear',
          repeatType: 'loop',
        }}
      >
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brown-4/60">
              {item}
            </span>
            <span className="text-orange-300/50 text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}