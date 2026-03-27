import { motion } from 'framer-motion'
import { Leaf, Phone, Clock, MapPin, Heart } from 'lucide-react'

// ✅ Business WhatsApp — update number here if it changes
const WHATSAPP_URL =
  'https://wa.me/919878100496?text=Hi%20I%20would%20like%20to%20know%20more%20about%20GharSeBite'

const navLinks = [
  { label: 'Home',          href: '#home'    },
  { label: "Today's Menu",  href: '#menu'    },
  { label: 'Place an Order', href: '#order'  },
  { label: 'Contact Us',    href: '#contact' },
]

export default function Footer() {
  const year    = new Date().getFullYear()
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="contact" className="bg-dark-brown text-white relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize:  '24px 24px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-orange">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-2xl">
                Ghar<span className="text-orange-400">Se</span>Bite
              </span>
            </div>

            <p className="font-body text-stone-400 text-sm leading-relaxed mb-5 max-w-xs">
              Made fresh daily with care — your neighborhood's favorite
              home-cooked meal service. Healthy, hygienic, and delivered
              with love.
            </p>

            
             <a href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 font-body font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L0 24l6.341-1.516A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.657-.502-5.186-1.378l-.372-.219-3.766.901.944-3.668-.24-.389A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-stone-400 hover:text-orange-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-stone-500 mb-0.5">Call / WhatsApp</p>
                  {/* 📞 Replace with actual business phone number */}
                  
                  <a  href="tel:+919878100496"
                    className="font-body text-sm text-stone-300 hover:text-orange-400 transition-colors"
                  >
                    +91 98781 00496
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-stone-500 mb-0.5">Service Hours</p>
                  <p className="font-body text-sm text-stone-300">Mon–Sat · 10 AM – 9 PM</p>
                  <p className="font-body text-xs text-stone-500">Sunday: By prior booking</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-stone-500 mb-0.5">Delivery Area</p>
                  {/* 📍 Replace with actual service areas */}
                  <p className="font-body text-sm text-stone-300">Select local areas</p>
                  <p className="font-body text-xs text-stone-500">Contact us to confirm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-stone-500">
            © {year} GharSeBite. All rights reserved.
          </p>
          <p className="font-body text-xs text-stone-500 flex items-center gap-1">
            Made fresh daily with{' '}
            <Heart className="w-3 h-3 text-orange-400 fill-orange-400" />
          </p>
        </div>
      </div>
    </footer>
    )
}
