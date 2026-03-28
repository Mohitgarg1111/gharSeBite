import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Flame, Clock } from 'lucide-react'
import { menuItems } from '../data/menuData'
import TextReveal    from './TextReveal'
import ScrollReveal  from './ScrollReveal'
import MagneticButton from './MagneticButton'

const tagColors = {
  orange: 'bg-orange-100 text-orange-700',
  green:  'bg-green-100  text-green-700',
  yellow: 'bg-amber-100  text-amber-700',
  pink:   'bg-pink-100   text-pink-700',
  blue:   'bg-blue-100   text-blue-700',
}

function MenuCard({ item, index, onOrderNow }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const tagCls = tagColors[item.tagColor] ?? tagColors.orange

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left)  / rect.width  - 0.5) * 8
    const y = ((e.clientY - rect.top)   / rect.height - 0.5) * -8
    setTilt({ x, y })
  }
  const resetTilt = () => { setTilt({ x: 0, y: 0 }); setHovered(false) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: !hovered ? 'transform 0.5s ease' : 'transform 0.08s ease',
      }}
      className="group card-parchment rounded-2xl overflow-hidden border border-warm hover:border-orange-300/60 shadow-warm-sm hover:shadow-warm-lg transition-all duration-400 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parch-3/60 via-transparent to-transparent" />

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.09 + 0.3, duration: 0.5 }}
          className={`absolute top-3 left-3 inline-flex items-center gap-1 ${tagCls} font-body text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-warm-sm`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
          {item.tag}
        </motion.div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-espresso font-display font-bold text-sm px-3 py-1 rounded-full shadow-warm-sm border border-warm">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-espresso mb-1.5 leading-tight">
          {item.name}
        </h3>
        <p className="font-body text-sm text-warm-gray leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-warm-gray/60 font-body text-xs">
            <Flame className="w-3 h-3 text-orange-400" /> {item.calories}
          </span>
          <span className="flex items-center gap-1 text-warm-gray/60 font-body text-xs">
            <Clock className="w-3 h-3 text-orange-400" /> {item.prepTime}
          </span>
        </div>

        {/* Animated underline button */}
        <motion.button
          onClick={() => onOrderNow(item)}
          whileTap={{ scale: 0.97 }}
          className="btn-shine w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-body font-semibold text-sm py-2.5 rounded-xl shadow-orange-glow transition-colors duration-300"
        >
          <motion.span
            animate={hovered ? { rotate: 15 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.span>
          Order Now
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function MenuSection({ onOrderNow }) {
  return (
    <section
      id="menu"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FBF6EE 0%, #F7EFE1 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(234,88,12,0.05) 0%, transparent 55%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal variant="slideRight" className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-orange-400" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                🍽️ Today's Menu
              </span>
            </ScrollReveal>

            <h2 className="font-display text-4xl sm:text-5xl font-light text-espresso leading-tight">
              <TextReveal text="What's cooking" className="block" delay={0} />
              <TextReveal text="today?" className="block text-gradient-warm italic font-semibold" delay={0.12} />
            </h2>
          </div>

          <ScrollReveal variant="fadeIn" delay={0.2}>
            <p className="font-body text-sm text-warm-gray max-w-xs lg:text-right leading-relaxed">
              Freshly prepared each morning using seasonal produce.
              Order before slots fill up!
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} onOrderNow={onOrderNow} />
          ))}
        </div>

        {/* Footer note */}
        <ScrollReveal variant="fadeIn" delay={0.4} className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-10 bg-orange-200" />
          <p className="font-body text-xs text-warm-gray text-center">
            ✅ All meals freshly prepared · No frozen ingredients · 100% vegetarian
          </p>
          <div className="h-px w-10 bg-orange-200" />
        </ScrollReveal>
      </div>
    </section>
  )
}