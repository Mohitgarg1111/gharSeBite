import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Sun, IndianRupee, Clock4 } from 'lucide-react'

const features = [
  {
    Icon:        Heart,
    number:      '01',
    title:       'Made with Care',
    description: 'Every meal is cooked with love in a clean home kitchen — just like your own family would make it.',
    accent:      'from-rose-500/20 to-rose-500/0',
    iconColor:   'text-rose-400',
    iconBg:      'bg-rose-500/10',
    border:      'hover:border-rose-500/20',
  },
  {
    Icon:        Sun,
    number:      '02',
    title:       'Freshly Prepared Daily',
    description: 'No frozen food, no preservatives. Every dish is prepared fresh each morning for same-day delivery.',
    accent:      'from-orange-500/20 to-orange-500/0',
    iconColor:   'text-orange-400',
    iconBg:      'bg-orange-500/10',
    border:      'hover:border-orange-500/30',
  },
  {
    Icon:        IndianRupee,
    number:      '03',
    title:       'Honestly Affordable',
    description: 'Restaurant-quality home food at prices that make sense. No hidden charges, no delivery surprises.',
    accent:      'from-green-500/20 to-green-500/0',
    iconColor:   'text-green-400',
    iconBg:      'bg-green-500/10',
    border:      'hover:border-green-500/20',
  },
  {
    Icon:        Clock4,
    number:      '04',
    title:       'On-Time Delivery',
    description: 'We respect your lunch breaks and dinner schedules. Your food arrives in the window you choose.',
    accent:      'from-blue-500/20 to-blue-500/0',
    iconColor:   'text-blue-400',
    iconBg:      'bg-blue-500/10',
    border:      'hover:border-blue-500/20',
  },
]

export default function WhyChooseUs() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-32 bg-dark-1 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-500" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Why GharSeBite
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight">
            Food that feels like
            <br />
            <span className="text-gradient-warm italic font-semibold">home</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ Icon, number, title, description, accent, iconColor, iconBg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className={`group relative glass rounded-2xl p-6 border border-white/5 ${border} transition-all duration-500 overflow-hidden`}
            >
              {/* Card accent gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Number */}
              <span className="absolute top-4 right-5 font-display text-5xl font-bold text-white/[0.04] select-none">
                {number}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </motion.div>

              <h3 className="relative font-display font-semibold text-xl text-cream mb-3 leading-tight">
                {title}
              </h3>
              <p className="relative font-body text-sm text-cream/45 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}