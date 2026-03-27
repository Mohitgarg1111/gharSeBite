import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Sun, IndianRupee, Clock4 } from 'lucide-react'

const features = [
  {
    Icon:        Heart,
    emoji:       '❤️',
    title:       'Made with Care',
    description: 'Every meal is cooked with love in a clean home kitchen — just like your own family would make it.',
    bg:          'bg-pink-50',
    iconBg:      'bg-pink-100',
    iconColor:   'text-pink-500',
    border:      'border-pink-100',
  },
  {
    Icon:        Sun,
    emoji:       '🌅',
    title:       'Freshly Prepared Daily',
    description: 'No frozen food, no preservatives. Every dish is prepared fresh each morning for same-day delivery.',
    bg:          'bg-orange-50',
    iconBg:      'bg-orange-100',
    iconColor:   'text-orange-500',
    border:      'border-orange-100',
  },
  {
    Icon:        IndianRupee,
    emoji:       '💰',
    title:       'Honestly Affordable',
    description: 'Restaurant-quality home food at prices that make sense. No hidden charges, no delivery surprises.',
    bg:          'bg-green-50',
    iconBg:      'bg-green-100',
    iconColor:   'text-green-600',
    border:      'border-green-100',
  },
  {
    Icon:        Clock4,
    emoji:       '⏰',
    title:       'On-Time Delivery',
    description: 'We respect your lunch breaks and dinner schedules. Your food arrives in the window you choose.',
    bg:          'bg-blue-50',
    iconBg:      'bg-blue-100',
    iconColor:   'text-blue-500',
    border:      'border-blue-100',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay:    i * 0.1,
      duration: 0.6,
      ease:     [0.22, 1, 0.36, 1],
    },
  }),
}

export default function WhyChooseUs() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Soft background radials */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, #FFF7ED 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, #F0FDF4 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Why GharSeBite?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Food that feels like <span className="italic text-orange-500">home</span>
          </h2>
          <p className="font-body text-stone-500 max-w-md mx-auto text-base leading-relaxed">
            We're not a restaurant. We're your neighbor who cooks really, really well.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ Icon, emoji, title, description, bg, iconBg, iconColor, border }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative ${bg} border ${border} rounded-2xl p-6 cursor-default`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>

              {/* Decorative emoji */}
              <span className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-200 select-none">
                {emoji}
              </span>

              <h3 className="font-display font-bold text-lg text-charcoal mb-2">{title}</h3>
              <p  className="font-body text-sm text-stone-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}