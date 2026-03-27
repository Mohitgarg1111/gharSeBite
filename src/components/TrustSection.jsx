import { motion } from 'framer-motion'
import { MapPin, Leaf, Snowflake, ShieldCheck, Users2 } from 'lucide-react'

const highlights = [
  {
    Icon:  MapPin,
    title: 'Local Delivery Only',
    desc:  'Serving select areas in your city. Fresh food, short distances, on-time always.',
    color: 'text-rose-500',
    bg:    'bg-rose-50',
  },
  {
    Icon:  Leaf,
    title: 'Made Fresh Daily',
    desc:  'Every dish is prepared from scratch each morning. No day-old food, ever.',
    color: 'text-green-600',
    bg:    'bg-green-50',
  },
  {
    Icon:  Snowflake,
    title: 'Zero Frozen Food',
    desc:  "We don't use freezers for meal prep. Just fresh ingredients, fresh every day.",
    color: 'text-blue-500',
    bg:    'bg-blue-50',
  },
  {
    Icon:  ShieldCheck,
    title: 'Hygienic Kitchen',
    desc:  'Prepared in a well-maintained home kitchen with the highest hygiene standards.',
    color: 'text-orange-500',
    bg:    'bg-orange-50',
  },
  {
    Icon:  Users2,
    title: 'For Everyone',
    desc:  'Ideal for office lunch, college students, working professionals, and families.',
    color: 'text-purple-500',
    bg:    'bg-purple-50',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-charcoal relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize:  '28px 28px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Our Promise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Why thousands trust{' '}
            <span className="text-orange-400 italic">GharSeBite</span>
          </h2>
          <p className="font-body text-stone-400 max-w-md mx-auto text-base">
            We're not a startup trying to disrupt food. We're your neighborhood
            cook who genuinely cares.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map(({ Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/8 transition-colors duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">{title}</h3>
              <p  className="font-body text-sm text-stone-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}

          {/* Wide CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: highlights.length * 0.08, duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Ready to taste the difference?
              </h3>
              <p className="font-body text-orange-100 text-sm">
                Order your first meal and experience real home cooking today.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 bg-white hover:bg-orange-50 text-orange-600 font-body font-bold text-sm px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Place an Order →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}