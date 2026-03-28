import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Phone, MapPin, ShoppingBag, Hash,
  Clock, MessageSquare, CheckCircle2, Send,
  AlertCircle, ExternalLink, RefreshCw,
} from 'lucide-react'
import { menuItems, deliveryTimes } from '../data/menuData'

// ✅ Business WhatsApp number
const WHATSAPP_NUMBER = '91919878100496'

const EMPTY_FORM = {
  customerName: '', phone: '', address: '',
  selectedMeal: '', quantity: '1',
  deliveryTime: '', specialInstructions: '',
}

function makeOrderId() {
  const ts   = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `GSB-${ts}-${rand}`
}

function Field({ label, icon: Icon, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs font-semibold uppercase tracking-widest text-warm-gray flex items-center gap-1">
        {label}
        {required && <span className="text-orange-500">*</span>}
      </label>
      <div className="relative group/field">
        {Icon && (
          <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 z-10">
            <Icon className="w-4 h-4 text-warm-gray/50 group-focus-within/field:text-orange-500 transition-colors duration-300" />
          </div>
        )}
        {children}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0,  height: 'auto' }}
            exit={{    opacity: 0, y: -6, height: 0 }}
            className="flex items-center gap-1.5 font-body text-xs text-red-500"
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls = (hasError, withIcon = true) =>
  [
    'w-full font-body text-sm text-espresso bg-white rounded-xl py-3.5 pr-4',
    'placeholder-warm-gray/40 transition-all duration-300 focus:outline-none',
    'border',
    withIcon ? 'pl-10' : 'pl-4',
    hasError
      ? 'border-red-300 focus:border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-100'
      : 'border-parch-4/50 focus:border-orange-400 focus:ring-2 focus:ring-orange-100',
  ].join(' ')

export default function OrderForm({ selectedMeal, setSelectedMeal }) {
  const [form,        setForm]        = useState(EMPTY_FORM)
  const [errors,      setErrors]      = useState({})
  const [loading,     setLoading]     = useState(false)
  const [success,     setSuccess]     = useState(false)
  const [orderId,     setOrderId]     = useState('')
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    if (selectedMeal) {
      setForm(prev => ({ ...prev, selectedMeal: selectedMeal.name }))
      setErrors(prev => ({ ...prev, selectedMeal: '' }))
    }
  }, [selectedMeal])

  const validate = () => {
    const e = {}
    if (!form.customerName.trim() || form.customerName.trim().length < 2)
      e.customerName = 'Enter your full name (min 2 characters)'
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid 10-digit Indian mobile number'
    if (!form.address.trim() || form.address.trim().length < 10)
      e.address = 'Enter a complete delivery address'
    if (!form.selectedMeal)
      e.selectedMeal = 'Please select a meal'
    const qty = parseInt(form.quantity, 10)
    if (isNaN(qty) || qty < 1) e.quantity = 'Minimum quantity is 1'
    if (qty > 20)              e.quantity = 'Maximum 20 servings'
    if (!form.deliveryTime)
      e.deliveryTime = 'Choose a delivery time slot'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name])  setErrors(prev => ({ ...prev, [name]: '' }))
    if (serverError)   setServerError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)

    const message = `
🍛 *New Order — GharSeBite*

👤 *Name:* ${form.customerName}
📞 *Phone:* ${form.phone}
📍 *Address:* ${form.address}
🍽️ *Meal:* ${form.selectedMeal}
🔢 *Quantity:* ${form.quantity}
⏰ *Delivery Time:* ${form.deliveryTime}
📝 *Instructions:* ${form.specialInstructions || 'None'}
    `.trim()

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      setLoading(false)
      setOrderId(makeOrderId())
      setSuccess(true)
      window.open(whatsappURL, '_blank')
      setForm(EMPTY_FORM)
      setSelectedMeal(null)
    }, 900)
  }

  const handleReset = () => {
    setSuccess(false)
    setOrderId('')
    setForm(EMPTY_FORM)
    setErrors({})
    setServerError('')
  }

  return (
    <section
      id="order"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F7EFE1 0%, #FBF6EE 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 0%, rgba(234,88,12,0.06) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange-400" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Place Your Order
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-espresso leading-tight">
            Order your
            <br />
            <span className="text-gradient-warm italic font-semibold">meal today</span>
          </h2>
          <p className="font-body text-sm text-warm-gray mt-4 leading-relaxed">
            Fill the form — your order goes straight to our WhatsApp instantly.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="card-parchment rounded-3xl border-warm shadow-warm-lg overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {/* ── SUCCESS ── */}
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 sm:p-12 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>

                <h3 className="font-display text-3xl font-semibold text-espresso mb-2">
                  Order Placed! 🎉
                </h3>
                <p className="font-body text-sm text-warm-gray mb-6 leading-relaxed">
                  Your order details were sent to WhatsApp.<br />
                  We'll confirm your delivery shortly.
                </p>

                <div className="w-full bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
                  <p className="font-body text-xs text-warm-gray mb-1">Order Reference</p>
                  <p className="font-display font-bold text-2xl text-orange-600 tracking-widest">
                    {orderId}
                  </p>
                  <p className="font-body text-xs text-warm-gray mt-1">Save this for your records</p>
                </div>

                
                 <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20just%20placed%20an%20order%20on%20the%20website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-base py-4 rounded-2xl shadow-green-glow transition-all duration-300 hover:-translate-y-0.5 mb-4"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L0 24l6.341-1.516A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.657-.502-5.186-1.378l-.372-.219-3.766.901.944-3.668-.24-.389A9.936 9.936 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Confirm on WhatsApp
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </a>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-warm-gray hover:text-espresso font-body text-sm transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Place another order
                </button>
              </motion.div>
            ) : (
              /* ── FORM ── */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 flex flex-col gap-5"
              >
                {/* Top bar */}
                <div className="flex items-center gap-3 pb-5 border-b border-parch-4/30">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-espresso">
                      Your Order Details
                    </h3>
                    <p className="font-body text-xs text-warm-gray">
                      Fields marked * are required
                    </p>
                  </div>
                </div>

                {/* Meal chip */}
                <AnimatePresence>
                  {selectedMeal && (
                    <motion.div
                      key="chip"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{    opacity: 0, height: 0 }}
                      className="flex items-center gap-3 glass-warm rounded-xl p-3"
                    >
                      <img src={selectedMeal.image} alt={selectedMeal.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-xs text-warm-gray">Selected meal</p>
                        <p className="font-body font-semibold text-sm text-espresso truncate">{selectedMeal.name}</p>
                      </div>
                      <span className="font-display font-bold text-orange-600">₹{selectedMeal.price}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Field label="Your Name" icon={User} error={errors.customerName} required>
                  <input type="text" name="customerName" value={form.customerName} onChange={handleChange}
                    placeholder="e.g. Priya Sharma" autoComplete="name" className={inputCls(!!errors.customerName)} />
                </Field>

                <Field label="Phone Number" icon={Phone} error={errors.phone} required>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile number" autoComplete="tel" maxLength={10} className={inputCls(!!errors.phone)} />
                </Field>

                <Field label="Delivery Address" icon={MapPin} error={errors.address} required>
                  <textarea name="address" value={form.address} onChange={handleChange}
                    placeholder="House/Flat no., Street, Area, City" rows={2}
                    className={`${inputCls(!!errors.address)} resize-none pt-3.5`} />
                </Field>

                <Field label="Selected Meal" icon={ShoppingBag} error={errors.selectedMeal} required>
                  <select name="selectedMeal" value={form.selectedMeal} onChange={handleChange}
                    className={`${inputCls(!!errors.selectedMeal)} appearance-none cursor-pointer`}>
                    <option value="">— Choose a meal —</option>
                    {menuItems.map(item => (
                      <option key={item.id} value={item.name}>
                        {item.name} — ₹{item.price}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Quantity" icon={Hash} error={errors.quantity} required>
                    <input type="number" name="quantity" value={form.quantity} onChange={handleChange}
                      min="1" max="20" className={inputCls(!!errors.quantity)} />
                  </Field>
                  <Field label="Delivery Slot" icon={Clock} error={errors.deliveryTime} required>
                    <select name="deliveryTime" value={form.deliveryTime} onChange={handleChange}
                      className={`${inputCls(!!errors.deliveryTime)} appearance-none cursor-pointer`}>
                      <option value="">— Pick a time —</option>
                      {deliveryTimes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Special Instructions (optional)" icon={MessageSquare} error="">
                  <textarea name="specialInstructions" value={form.specialInstructions} onChange={handleChange}
                    placeholder="Allergies, spice level, extra requests..." rows={2}
                    className={`${inputCls(false)} resize-none pt-3.5`} />
                </Field>

                <AnimatePresence>
                  {serverError && (
                    <motion.div
                      key="server-err"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{    opacity: 0, height: 0 }}
                      className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-500 rounded-xl p-3 font-body text-sm"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {serverError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!loading  ? { scale: 0.98 } : {}}
                  className="btn-shine mt-2 flex items-center justify-center gap-2.5 w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-body font-bold text-base py-4 rounded-2xl shadow-orange-glow transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending to WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Place My Order
                    </>
                  )}
                </motion.button>

                <p className="text-center font-body text-xs text-warm-gray">
                  Your order will open WhatsApp with all details pre-filled. Just hit Send. 💬
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}