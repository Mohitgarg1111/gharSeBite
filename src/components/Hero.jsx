import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Clock, Shield, ChevronDown } from 'lucide-react'

const trustBadges = [
  { icon: '🌿', label: 'Fresh Daily'  },
  { icon: '🏠', label: 'Homemade'     },
  { icon: '✨', label: 'Hygienic'     },
  { icon: '💰', label: 'Affordable'   },
]

// Reusable fade-up variant
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.12,
      duration: 0.6,
      ease:     [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100 opacity-60 blur-3xl" />
        <div className="absolute top-1/2  -left-32   w-80 h-80 rounded-full bg-green-100  opacity-50 blur-3xl" />
        <div className="absolute bottom-0  right-1/3  w-64 h-64 rounded-full bg-orange-50  opacity-70 blur-2xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #92400e 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* "Today's Special" badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-body font-semibold px-3.5 py-1.5 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Today's Special is Live! 🎉
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-charcoal mb-6"
            >
              Fresh{' '}
              <span className="text-gradient italic">Home-Cooked</span>
              <br />
              Meals Delivered
              <br />
              <span className="text-orange-500">Daily</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-body text-base sm:text-lg text-stone-500 leading-relaxed mb-8 max-w-md"
            >
              Healthy, hygienic, and affordable homemade food prepared fresh
              every day and delivered right to your doorstep — just like
              <em> Maa ke haath ka khana.</em>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('#order')}
                className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-body font-semibold px-6 py-3.5 rounded-full shadow-orange hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base"
              >
                Order Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollTo('#menu')}
                className="flex items-center gap-2 bg-white hover:bg-orange-50 text-stone-700 hover:text-orange-600 font-body font-semibold px-6 py-3.5 rounded-full border border-stone-200 hover:border-orange-200 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
              >
                View Today's Menu
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-stone-100 px-3 py-1.5 rounded-full shadow-sm"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="font-body text-xs font-medium text-stone-600">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: visual cards (desktop only) ── */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Hero food image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80"
                  alt="Delicious home-cooked Indian meal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating card: orders count */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x:   0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-8 top-1/3 bg-white rounded-2xl shadow-card p-3.5 flex items-center gap-3 w-44"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🍛</span>
                </div>
                <div>
                  <p className="font-body text-xs text-stone-400">Today's orders</p>
                  <p className="font-display font-bold text-xl text-charcoal leading-none">47+</p>
                </div>
              </motion.div>

              {/* Floating card: next delivery */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x:  0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-6 bottom-8 bg-white rounded-2xl shadow-card p-3.5 flex items-center gap-3 w-48"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-body text-xs text-stone-400">Next delivery</p>
                  <p className="font-body font-semibold text-sm text-charcoal">12:00 – 1:00 PM</p>
                </div>
              </motion.div>

              {/* Floating badge: 100% hygienic */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y:   0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-4 right-8 bg-orange-500 text-white rounded-2xl shadow-orange p-3 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span className="font-body font-semibold text-sm">100% Hygienic</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-body text-xs text-stone-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-stone-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}