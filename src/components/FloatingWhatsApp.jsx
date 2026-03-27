import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// ✅ Business WhatsApp number — update here if it changes
const WHATSAPP_URL =
  'https://wa.me/919878100496?text=Hi%20I%20just%20placed%20an%20order%20on%20the%20website'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed,   setDismissed]   = useState(false)

  // Show tooltip 3 s after mount
  useEffect(() => {
    const t = setTimeout(() => {
      if (!dismissed) setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(t)
  }, [dismissed])

  // Auto-hide tooltip after 5 s
  useEffect(() => {
    if (!showTooltip) return
    const t = setTimeout(() => setShowTooltip(false), 5000)
    return () => clearTimeout(t)
  }, [showTooltip])

  const dismiss = () => {
    setShowTooltip(false)
    setDismissed(true)
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">

      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1,   y: 0 }}
            exit={{    opacity: 0, scale: 0.8, y: 8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-card-hover border border-green-100 p-3 pr-8 max-w-[200px]"
          >
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute top-1.5 right-1.5 text-stone-300 hover:text-stone-500 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-body text-xs text-stone-600 font-medium leading-snug">
              💬 Have questions? Chat with us on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{  scale: 0.95 }}
        onClick={dismiss}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-green flex items-center justify-center transition-colors duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

        {/* WhatsApp icon */}
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 sm:w-8 sm:h-8 relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L0 24l6.341-1.516A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.657-.502-5.186-1.378l-.372-.219-3.766.901.944-3.668-.24-.389A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </motion.a>
    </div>
  )
}