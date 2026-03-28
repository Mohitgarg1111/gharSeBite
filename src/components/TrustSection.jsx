import { motion } from 'framer-motion'
import { MapPin, Leaf, Snowflake, ShieldCheck, Users2 } from 'lucide-react'
import TextReveal   from './TextReveal'
import ScrollReveal from './ScrollReveal'
import MagneticButton from './MagneticButton'

const highlights = [
  { Icon: MapPin,      title: 'Local Delivery Only', desc: 'Serving select areas in your city. Fresh food, short distances, on-time always.',              iconBg: 'bg-rose-100',   iconColor: 'text-rose-500'   },
  { Icon: Leaf,        title: 'Made Fresh Daily',     desc: 'Every dish prepared from scratch each morning. No day-old food, ever.',                        iconBg: 'bg-green-100',  iconColor: 'text-green-600'  },
  { Icon: Snowflake,   title: 'Zero Frozen Food',     desc: "No freezers in meal prep. Just fresh ingredients, fresh every single day.",                   iconBg: 'bg-blue-100',   iconColor: 'text-blue-500'   },
  { Icon: ShieldCheck, title: 'Hygienic Kitchen',     desc: 'Prepared in a well-maintained home kitchen with the highest hygiene standards.',               iconBg: 'bg-orange-100', iconColor: 'text-orange-500' },
  { Icon: Users2,      title: 'For Everyone',         desc: 'Ideal for office lunch, college students, working professionals, and families.',              iconBg: 'bg-purple-100', iconColor: 'text-purple-500' },
]

export default function TrustSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #3D2314 0%, #2C1A0E 60%, #1E1008 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal variant="slideRight" className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-400" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
              Our Promise
            </span>
          </ScrollReveal>

          <h2 className="font-display text-4xl sm:text-5xl font-light text-parchment leading-tight mb-4">
            <TextReveal text="Why thousands trust" className="block" delay={0} />
            <TextReveal text="GharSeBite" className="block text-gradient-warm italic font-semibold" delay={0.15} />
          </h2>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="font-body text-sm text-parch-4/55 max-w-md">
              We're not a startup trying to disrupt food. We're your neighborhood cook who genuinely cares.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map(({ Icon, title, desc, iconBg, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.28 } }}
              className="group rounded-2xl p-6 border border-white/[0.07] hover:border-orange-500/20 transition-all duration-400 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
              />

              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </motion.div>
              <h3 className="font-display font-semibold text-lg text-parchment mb-2">{title}</h3>
              <p  className="font-body text-sm text-parch-4/55 leading-relaxed">{desc}</p>

              {/* Bottom line reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/50 to-orange-300/50 origin-left"
              />
            </motion.div>
          ))}

          {/* CTA wide card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: highlights.length * 0.09, duration: 0.65 }}
            className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(251,191,36,0.10) 100%)', border: '1px solid rgba(249,115,22,0.25)' }}
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl" />
            <div>
              <h3 className="font-display font-semibold text-2xl text-parchment mb-2">
                Ready to taste the difference?
              </h3>
              <p className="font-body text-sm text-parch-4/60">
                Order your first meal and experience real home cooking today.
              </p>
            </div>
            <MagneticButton
              onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shine flex-shrink-0 bg-orange-500 hover:bg-orange-400 text-white font-body font-bold text-sm px-8 py-3.5 rounded-full shadow-orange-glow transition-colors duration-300"
              strength={0.3}
            >
              Place an Order →
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}