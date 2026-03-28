import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Clock, ShieldCheck, ChevronDown } from 'lucide-react'

const trustBadges = [
  { icon: '🌿', label: 'Fresh Daily'  },
  { icon: '🏠', label: 'Homemade'     },
  { icon: '✨', label: 'Hygienic'     },
  { icon: '💰', label: 'Affordable'   },
]

const floatingCards = [
  {
    image:   'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    name:    'Rajma Chawal',
    price:   '₹99',
    tag:     'Best Seller',
    style:   { top: '4%',  left: '2%',  rotate: '-5deg', animClass: 'animate-float-slow' },
  },
  {
    image:   'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80',
    name:    'Paneer Thali',
    price:   '₹149',
    tag:     'Protein Rich',
    style:   { top: '30%', left: '33%', rotate:  '3deg', animClass: 'animate-float' },
  },
  {
    image:   'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80',
    name:    'Chole Rice',
    price:   '₹99',
    tag:     'Popular',
    style:   { top: '2%',  left: '55%', rotate: '-3deg', animClass: 'animate-float-slow' },
  },
]

// Letter-by-letter reveal
function SplitText({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%',   opacity: 1 }}
          transition={{
            delay:    delay + i * 0.022,
            duration: 0.55,
            ease:     [0.22, 1, 0.36, 1],
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
  const { scrollYProgress } = useScroll({
    target:  ref,
    offset:  ['start start', 'end start'],
  })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FBF6EE 0%, #F7EFE1 50%, #F2E4CC 100%)' }}
    >
      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm top-right glow */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)' }}
        />
        {/* Terracotta bottom-left */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)' }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #7C4A28 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        {/* Diagonal warm line */}
        <div
          className="absolute top-0 left-1/3 w-px h-full opacity-[0.07]"
          style={{ background: 'linear-gradient(180deg, transparent, #EA580C 40%, transparent)' }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 glass-warm px-4 py-2 rounded-full mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"
              />
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-body text-xs font-semibold text-orange-600 tracking-wide">
                Today's Special is Live!
              </span>
            </motion.div>

            {/* Heading */}
            <div className="mb-6">
              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-espresso leading-[1.0] tracking-tight">
                <div className="overflow-hidden mb-1">
                  <SplitText text="Fresh," className="block" delay={0.4} />
                </div>
                <div className="overflow-hidden mb-1">
                  <SplitText
                    text="Home-Cooked"
                    className="block text-gradient-warm italic font-semibold"
                    delay={0.55}
                  />
                </div>
                <div className="overflow-hidden">
                  <SplitText text="Meals Daily" className="block" delay={0.72} />
                </div>
              </h1>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6 origin-left"
            >
              <div className="h-px w-10 bg-orange-400" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-warm-gray">
                Delivered to your doorstep
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="font-body text-base sm:text-lg text-brown-4/80 leading-relaxed mb-10 max-w-md"
            >
              Healthy, hygienic, and affordable homemade food prepared fresh
              every morning — just like{' '}
              <em className="text-espresso font-medium not-italic">
                Maa ke haath ka khana.
              </em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={() => scrollTo('#order')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine group flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-body font-bold px-8 py-4 rounded-full shadow-orange-glow transition-colors duration-300 text-sm sm:text-base"
              >
                Order Today
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('#menu')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white/70 hover:bg-white text-espresso font-body font-semibold px-8 py-4 rounded-full border border-warm hover:border-orange-300 shadow-warm-sm transition-all duration-300 text-sm sm:text-base"
              >
                View Today's Menu
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.32, duration: 0.6 }}
              className="flex flex-wrap gap-2.5"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.38 + i * 0.07, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 bg-white/80 border border-warm px-3.5 py-1.5 rounded-full shadow-warm-sm"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="font-body text-xs font-medium text-brown-4">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: floating food cards ── */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Soft ambient glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(234,88,12,0.07) 0%, transparent 70%)',
              }}
            />

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 50, rotate: card.style.rotate }}
                animate={{ opacity: 1, y: 0,  rotate: card.style.rotate }}
                transition={{
                  delay:    0.85 + i * 0.15,
                  duration: 0.8,
                  ease:     [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: '0deg',
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className={`absolute w-44 rounded-2xl overflow-hidden shadow-warm-lg cursor-pointer ${card.style.animClass}`}
                style={{
                  top:    card.style.top,
                  left:   card.style.left,
                  zIndex: [1, 3, 2][i],
                  animationDelay: `${i * 0.9}s`,
                }}
              >
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-28 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                  <span className="absolute top-2 left-2 glass-warm text-orange-700 font-body text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <div className="card-parchment p-3">
                  <p className="font-display font-semibold text-sm text-espresso truncate">
                    {card.name}
                  </p>
                  <p className="font-body text-xs text-orange-600 font-bold mt-0.5">
                    {card.price}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
              className="absolute bottom-4 left-2 card-parchment rounded-2xl shadow-warm-lg p-3.5 flex items-center gap-3 w-44 z-10"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🍛</span>
              </div>
              <div>
                <p className="font-body text-xs text-warm-gray">Today's orders</p>
                <p className="font-display font-bold text-xl text-espresso leading-none">47+</p>
              </div>
            </motion.div>

            {/* Hygienic badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="absolute top-2 right-2 bg-orange-500 text-white rounded-xl px-3 py-2 flex items-center gap-1.5 z-10 shadow-orange-glow"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-body font-bold text-xs">100% Hygienic</span>
            </motion.div>

            {/* Delivery time badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="absolute bottom-24 right-0 card-parchment rounded-xl shadow-warm p-3 flex items-center gap-2 z-10"
            >
              <Clock className="w-4 h-4 text-orange-500" />
              <div>
                <p className="font-body text-[10px] text-warm-gray">Next delivery</p>
                <p className="font-body font-semibold text-xs text-espresso">12:00 – 1:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gray/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-warm-gray/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}