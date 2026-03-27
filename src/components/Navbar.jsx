import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: "Today's Menu", href: '#menu' },
    { label: 'Order', href: '#order' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (href) => {
        setMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* ── Main bar ── */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_-4px_rgba(0,0,0,0.10)] border-b border-orange-100'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo */}
                        <button
                            onClick={() => scrollTo('#home')}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-orange group-hover:scale-110 transition-transform duration-200">
                                <Leaf className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-display font-bold text-xl text-charcoal">
                                Ghar<span className="text-orange-500">Se</span>Bite
                            </span>
                        </button>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative font-body text-sm font-medium text-stone-600 hover:text-orange-500 transition-colors duration-200 group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 rounded-full group-hover:w-full transition-all duration-300" />
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo('#order')}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Order Today
                            </button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen
                                ? <X className="w-5 h-5 text-charcoal" />
                                : <Menu className="w-5 h-5 text-charcoal" />
                            }
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile drawer ── */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
                            className="fixed top-0 right-0 h-full w-72 bg-cream z-50 md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="flex flex-col h-full pt-20 pb-8 px-6">
                                {/* Links */}
                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.href}
                                            onClick={() => scrollTo(link.href)}
                                            className="text-left font-body font-medium text-lg text-stone-700 hover:text-orange-500 py-3 border-b border-stone-100 transition-colors"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-8">
                                    <button
                                        onClick={() => scrollTo('#order')}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-body font-semibold text-base px-5 py-3 rounded-full shadow-orange transition-all duration-200"
                                    >
                                        Order Today 🍱
                                    </button>
                                </div>

                                <div className="mt-auto text-center">
                                    <p className="text-xs text-stone-400 font-body">
                                        Fresh meals, delivered with ❤️
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}