import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, Heart, ArrowUpRight } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/919878100496?text=Hi%20I%20would%20like%20to%20know%20more%20about%20GharSeBite'

const navLinks = [
  { label: 'Home',           href: '#home'    },
  { label: "Today's Menu",   href: '#menu'    },
  { label: 'Place an Order', href: '#order'   },
  { label: 'Contact Us',     href: '#contact' },
]

export default function Footer() {
  const year     = new Date().getFullYear()
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="contact" className="bg-dark-2 text-cream relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center glow-orange-sm">
                <span className="text-base">🍛</span>
              </div>
              <span className="font-display font-semibold text-2xl text-cream">
                Ghar<span className="text-orange-400">Se</span>Bite
              </span>
            </div>
            <p className="font-body text-sm text-cream/35 leading-relaxed mb-6 max-w-xs">
              Made fresh daily with care — your neighborhood's favorite home-cooked meal service. Healthy, hygienic, delivered with love.
            </p>
            
             <a href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-warm text-green-400 hover:text-green-300 font-body font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L0 24l6.341-1.516A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.657-.502-5.186-1.378l-.372-.219-3.766.901.944-3.668-.24-.389A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream/30 mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group font-body text-sm text-cream/45 hover:text-orange-400 transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="w-0 h-px bg-orange-400 group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-cream/30 mb-5">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-cream/25 mb-0.5">Call / WhatsApp</p>
                  <a href="tel:+919878100496" className="font-body text-sm text-cream/60 hover:text-orange-400 transition-colors">
                    +91 98781 00496
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-cream/25 mb-0.5">Service Hours</p>
                  <p className="font-body text-sm text-cream/60">Mon–Sat · 10 AM – 9 PM</p>
                  <p className="font-body text-xs text-cream/25">Sunday: By prior booking</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-cream/25 mb-0.5">Delivery Area</p>
                  <p className="font-body text-sm text-cream/60">Select local areas</p>
                  <p className="font-body text-xs text-cream/25">Contact us to confirm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/20">© {year} GharSeBite. All rights reserved.</p>
          <p className="font-body text-xs text-cream/20 flex items-center gap-1.5">
            Made fresh daily with <Heart className="w-3 h-3 text-orange-400 fill-orange-400" />
          </p>
        </div>
      </div>
    </footer>
  )
}