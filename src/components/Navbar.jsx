import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',         href: '#home'    },
  { label: 'Menu',         href: '#menu'    },
  { label: 'Order',        href: '#order'   },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-parchment/90 backdrop-blur-xl border-b border-orange-200/40 shadow-warm-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-2.5 group"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-terra flex items-center justify-center shadow-orange-glow"
              >
                <span className="text-lg">🍛</span>
              </motion.div>
              <span className="font-display font-semibold text-xl text-espresso tracking-wide">
                Ghar<span className="text-orange-500">Se</span>Bite
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 font-body text-sm font-medium text-brown-4 hover:text-orange-600 transition-colors duration-300 group"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-orange-400 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </button>
              ))}

              <motion.button
                onClick={() => scrollTo('#order')}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine ml-4 bg-orange-500 hover:bg-orange-600 text-white font-body font-bold text-sm px-6 py-2.5 rounded-full shadow-orange-glow transition-colors duration-300"
              >
                Order Now
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-parch-3/60 border border-warm text-espresso"
            >
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.div key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X    className="w-5 h-5" /></motion.div>
                  : <motion.div key="menu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="w-5 h-5" /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-espresso/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-72 bg-parchment border-l border-orange-100 z-50 md:hidden flex flex-col shadow-warm-lg"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0,  opacity: 1 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => scrollTo(link.href)}
                      className="text-left font-display text-2xl font-medium text-espresso/70 hover:text-orange-600 py-3.5 border-b border-parch-3 transition-colors"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <button
                    onClick={() => scrollTo('#order')}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-body font-bold text-base px-5 py-3.5 rounded-2xl shadow-orange-glow transition-colors"
                  >
                    Order Now 🍱
                  </button>
                </motion.div>
                <p className="mt-auto text-center font-body text-xs text-warm-gray">
                  Fresh daily · Delivered with love ❤️
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}