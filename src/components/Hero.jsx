import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const trustBadges = [
  { icon: '🌿', label: 'Fresh Daily'  },
  { icon: '🏠', label: 'Homemade'     },
  { icon: '✨', label: 'Hygienic'     },
  { icon: '💰', label: 'Affordable'   },
]

const floatingCards = [
  {
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    name: 'Rajma Chawal',
    price: '₹99',
    tag: 'Best Seller',
    delay: 0,
  },
  {
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80',
    name: 'Paneer Thali',
    price: '₹149',
    tag: 'Protein Rich',
    delay: 0.15,
  },
  {
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80',
    name: 'Chole Rice',
    price: '₹99',
    tag: 'Popular',
    delay: 0.3,
  },
]

// Staggered character reveal
function SplitText({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%',   opacity: 1 }}
          transition={{
            delay: delay + i * 0.025,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y        = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian noise-overlay"
    >
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
        />
        {/* Secondary glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)' }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-1/3 w-px h-full opacity-[0.06]"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(249,115,22,0.8), transparent)' }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div className="relative">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 glass-warm px-4 py-2 rounded-full mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"
              />
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-body text-xs font-semibold text-orange-300 tracking-wide">
                Today's Special is Live
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="overflow-hidden mb-2">
              <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-tight">
                <div className="overflow-hidden">
                  <SplitText text="Fresh" className="block" delay={0.4} />
                </div>
                <div className="overflow-hidden">
                  <SplitText
                    text="Home-Cooked"
                    className="block text-gradient-warm italic font-semibold"
                    delay={0.55}
                  />
                </div>
                <div className="overflow-hidden">
                  <SplitText text="Meals" className="block" delay={0.7} />
                </div>
              </h1>
            </div>

            {/* Subline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-orange-500/50" />
              <span className="font-body text-sm text-orange-400/80 tracking-widest uppercase font-medium">
                Delivered Daily
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="font-body text-base sm:text-lg text-cream/50 leading-relaxed mb-10 max-w-md"
            >
              Healthy, hygienic, and affordable homemade food prepared fresh
              every day — just like <em className="text-cream/70 not-italic font-medium">Maa ke haath ka khana.</em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollTo('#order')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden btn-shine flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-obsidian font-body font-bold px-8 py-4 rounded-full glow-orange-sm transition-colors duration-300 text-sm sm:text-base"
              >
                Order Today
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('#menu')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 glass text-cream/80 hover:text-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base border border-white/10 hover:border-orange-500/30"
              >
                View Menu
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="flex flex-wrap gap-2.5"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.07, duration: 0.4, type: 'spring' }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="flex items-center gap-1.5 glass px-3.5 py-1.5 rounded-full"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="font-body text-xs font-medium text-cream/60">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: stacked food cards ── */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">
            {/* Ambient glow behind cards */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
            />

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 60, rotate: [-8, 4, -4][i] }}
                animate={{ opacity: 1, y: 0,   rotate: [-8, 4, -4][i] }}
                transition={{ delay: 0.9 + card.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  left:   ['5%',  '30%', '52%'][i],
                  top:    ['8%',  '28%', '5%'][i],
                  zIndex: [1, 3, 2][i],
                  animation: `float-slow ${5 + i * 1.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10, transition: { duration: 0.3 } }}
                className="w-44 rounded-2xl overflow-hidden shadow-premium cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-28 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-2 left-2 glass-warm text-orange-300 font-body text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <div className="bg-dark-3 p-3">
                  <p className="font-display font-semibold text-sm text-cream truncate">{card.name}</p>
                  <p className="font-body text-xs text-orange-400 font-bold mt-0.5">{card.price}</p>
                </div>
              </motion.div>
            ))}

            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5, type: 'spring' }}
              className="absolute bottom-6 left-4 glass border-glow rounded-2xl p-3.5 flex items-center gap-3 w-44 z-10"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🍛</span>
              </div>
              <div>
                <p className="font-body text-xs text-cream/40">Today's orders</p>
                <p className="font-display font-bold text-xl text-cream leading-none">47+</p>
              </div>
            </motion.div>

            {/* Hygienic badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute top-4 right-0 bg-orange-500 text-obsidian rounded-xl px-3 py-2 flex items-center gap-1.5 z-10"
            >
              <span className="text-sm">✅</span>
              <span className="font-body font-bold text-xs">100% Hygienic</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/25">Scroll</span>
          <div className="w-px h-12 overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent to-orange-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}