import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingBag, Flame, Clock, Star } from 'lucide-react'
import { menuItems, tagStyles } from '../data/menuData'

function MenuCard({ item, index, onOrderNow }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const style = tagStyles[item.tagColor] ?? tagStyles.orange

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10
    setTilt({ x, y })
  }
  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
      }}
      className="group relative bg-dark-3 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-colors duration-500 flex flex-col shadow-card hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-3 via-transparent to-transparent opacity-80" />

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3 }}
          className="absolute top-3 left-3 flex items-center gap-1.5 glass-warm px-2.5 py-1 rounded-full"
        >
          <span className={`w-1.5 h-1.5 rounded-full bg-orange-400`} />
          <span className="font-body text-[11px] font-semibold text-orange-300">{item.tag}</span>
        </motion.div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-dark-3/90 backdrop-blur-sm border border-white/10 text-cream font-display font-bold text-base px-3 py-1 rounded-full">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-cream mb-1.5 leading-tight">
          {item.name}
        </h3>
        <p className="font-body text-sm text-cream/45 leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-cream/30 font-body text-xs">
            <Flame className="w-3 h-3" /> {item.calories}
          </span>
          <span className="flex items-center gap-1 text-cream/30 font-body text-xs">
            <Clock className="w-3 h-3" /> {item.prepTime}
          </span>
        </div>

        {/* Order button */}
        <motion.button
          onClick={() => onOrderNow(item)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group/btn relative overflow-hidden w-full flex items-center justify-center gap-2 bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-obsidian font-body font-semibold text-sm py-2.5 rounded-xl transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:rotate-12 duration-300" />
          Order Now
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function MenuSection({ onOrderNow }) {
  return (
    <section id="menu" className="py-24 md:py-32 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 60%)' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-orange-500" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Today's Menu
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream leading-tight">
              What's cooking
              <br />
              <span className="text-gradient-warm italic font-semibold">today?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-sm text-cream/40 max-w-xs lg:text-right leading-relaxed"
          >
            Freshly prepared each morning using seasonal produce. Order before slots fill up.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} onOrderNow={onOrderNow} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          <div className="h-px w-12 bg-white/10" />
          <p className="font-body text-xs text-cream/25 text-center">
            All meals freshly prepared · No frozen ingredients · 100% vegetarian
          </p>
          <div className="h-px w-12 bg-white/10" />
        </motion.div>
      </div>
    </section>
  )
}