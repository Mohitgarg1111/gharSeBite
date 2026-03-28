import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Sun, IndianRupee, Clock4 } from 'lucide-react'

const features = [
  {
    Icon:        Heart,
    number:      '01',
    title:       'Made with Care',
    description: 'Every meal is cooked with love in a clean home kitchen — just like your own family would make it.',
    iconBg:      'bg-rose-100',
    iconColor:   'text-rose-500',
    hoverBorder: 'hover:border-rose-200',
    hoverBg:     'hover:bg-rose-50/50',
  },
  {
    Icon:        Sun,
    number:      '02',
    title:       'Freshly Prepared Daily',
    description: 'No frozen food, no preservatives. Every dish is prepared fresh each morning for same-day delivery.',
    iconBg:      'bg-orange-100',
    iconColor:   'text-orange-500',
    hoverBorder: 'hover:border-orange-200',
    hoverBg:     'hover:bg-orange-50/50',
  },
  {
    Icon:        IndianRupee,
    number:      '03',
    title:       'Honestly Affordable',
    description: 'Restaurant-quality home food at prices that make sense. No hidden charges, no delivery surprises.',
    iconBg:      'bg-green-100',
    iconColor:   'text-green-600',
    hoverBorder: 'hover:border-green-200',
    hoverBg:     'hover:bg-green-50/50',
  },
  {
    Icon:        Clock4,
    number:      '04',
    title:       'On-Time Delivery',
    description: 'We respect your lunch breaks and dinner schedules. Your food arrives in the window you choose.',
    iconBg:      'bg-blue-100',
    iconColor:   'text-blue-500',
    hoverBorder: 'hover:border-blue-200',
    hoverBg:     'hover:bg-blue-50/50',
  },
]

export default function WhyChooseUs() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F7EFE1 0%, #FBF6EE 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      {/* Soft bg blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(251,191,36,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-400" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Why GharSeBite?
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-espresso leading-tight">
            Food that feels like
            <br />
            <span className="text-gradient-warm italic font-semibold">home</span>
          </h2>
          <p className="font-body text-base text-warm-gray mt-4 max-w-md">
            We're not a restaurant. We're your neighbor who cooks really, really well.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ Icon, number, title, description, iconBg, iconColor, hoverBorder, hoverBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
              className={`group relative card-parchment ${hoverBg} ${hoverBorder} rounded-2xl p-6 border border-warm shadow-warm-sm hover:shadow-warm transition-all duration-400 overflow-hidden`}
            >
              {/* Faint number watermark */}
              <span className="absolute top-3 right-4 font-display text-5xl font-bold text-espresso/[0.04] select-none">
                {number}
              </span>

              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 350 }}
                className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </motion.div>

              <h3 className="font-display font-semibold text-xl text-espresso mb-2 leading-tight">
                {title}
              </h3>
              <p className="font-body text-sm text-warm-gray leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}