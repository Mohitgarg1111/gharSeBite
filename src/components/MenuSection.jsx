import { motion } from 'framer-motion'
import { ShoppingBag, Flame, Clock } from 'lucide-react'
import { menuItems, tagStyles } from '../data/menuData'

// ── Individual menu card ──────────────────────────────────────────────
function MenuCard({ item, index, onOrderNow }) {
  const style = tagStyles[item.tagColor] ?? tagStyles.orange

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay:    index * 0.08,
        duration: 0.55,
        ease:     [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Tag */}
        <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 ${style.bg} px-2.5 py-1 rounded-full border border-white/20`}>
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          <span className={`font-body text-xs font-semibold ${style.text}`}>{item.tag}</span>
        </div>

        {/* Price pill */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal font-display font-bold text-base px-3 py-1 rounded-full shadow-sm">
          ₹{item.price}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-charcoal mb-1.5">
          {item.name}
        </h3>
        <p className="font-body text-sm text-stone-500 leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Calories + prep time */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-stone-400 font-body text-xs">
            <Flame className="w-3.5 h-3.5" /> {item.calories}
          </span>
          <span className="flex items-center gap-1 text-stone-400 font-body text-xs">
            <Clock className="w-3.5 h-3.5" /> {item.prepTime}
          </span>
        </div>

        {/* Order button */}
        <button
          onClick={() => onOrderNow(item)}
          className="w-full flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white font-body font-semibold text-sm py-2.5 rounded-xl border border-orange-200 hover:border-orange-500 transition-all duration-200"
        >
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </button>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────
export default function MenuSection({ onOrderNow }) {
  return (
    <section id="menu" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            🍽️ Today's Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            What's cooking <span className="italic text-orange-500">today?</span>
          </h2>
          <p className="font-body text-stone-500 max-w-md mx-auto text-base leading-relaxed">
            Our menu is freshly prepared each morning using seasonal produce.
            Order before slots fill up!
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              index={i}
              onOrderNow={onOrderNow}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-body text-sm text-stone-400 mt-10"
        >
          ✅ All meals freshly prepared each morning · No frozen ingredients · 100% vegetarian
        </motion.p>
      </div>
    </section>
  )
}