import { motion } from 'framer-motion'
import { MapPin, Leaf, Snowflake, ShieldCheck, Users2 } from 'lucide-react'

const highlights = [
  { Icon: MapPin,     title: 'Local Delivery',    desc: 'Serving select areas. Fresh food, short distances, on-time always.',              color: 'text-rose-400',   bg: 'bg-rose-500/10'   },
  { Icon: Leaf,       title: 'Made Fresh Daily',  desc: 'Every dish prepared from scratch each morning. No day-old food, ever.',           color: 'text-green-400',  bg: 'bg-green-500/10'  },
  { Icon: Snowflake,  title: 'Zero Frozen Food',  desc: "No freezers in meal prep. Just fresh ingredients, fresh every single day.",      color: 'text-blue-400',   bg: 'bg-blue-500/10'   },
  { Icon: ShieldCheck,title: 'Hygienic Kitchen',  desc: 'Prepared in a well-maintained home kitchen with the highest hygiene standards.', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { Icon: Users2,     title: 'For Everyone',      desc: 'Ideal for office lunch, college students, working professionals, and families.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
]

export default function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.05) 0%, transparent 60%)' }}
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
              Our Promise
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight">
            Why thousands trust
            <br />
            <span className="text-gradient-warm italic font-semibold">GharSeBite</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map(({ Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-400"
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-display font-semibold text-lg text-cream mb-2">{title}</h3>
              <p  className="font-body text-sm text-cream/40 leading-relaxed">{desc}</p>
            </motion.div>
          ))}

          {/* Wide CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: highlights.length * 0.08, duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(251,191,36,0.08) 100%)', border: '1px solid rgba(249,115,22,0.2)' }}
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl" />
            <div>
              <h3 className="font-display font-semibold text-2xl text-cream mb-2">
                Ready to taste the difference?
              </h3>
              <p className="font-body text-sm text-cream/50">
                Order your first meal and experience real home cooking today.
              </p>
            </div>
            <motion.button
              onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 relative overflow-hidden btn-shine bg-orange-500 hover:bg-orange-400 text-obsidian font-body font-bold text-sm px-8 py-3.5 rounded-full glow-orange-sm transition-colors duration-300"
            >
              Place an Order →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}