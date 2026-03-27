import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import MenuSection from './components/MenuSection'
import TrustSection from './components/TrustSection'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  // Tracks which meal card the user clicked "Order Now" on
  const [selectedMeal, setSelectedMeal] = useState(null)

  /**
   * Called when user clicks "Order Now" on any menu card.
   * Stores the meal in state (auto-fills the form),
   * then smoothly scrolls down to the order form.
   */
  const handleOrderNow = (meal) => {
    setSelectedMeal(meal)
    setTimeout(() => {
      document.querySelector('#order')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
  }

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Global toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            borderRadius: '12px',
          },
        }}
      />

      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 3: Today's Menu */}
        <MenuSection onOrderNow={handleOrderNow} />

        {/* Section 4: Trust & Service Highlights */}
        <TrustSection />

        {/* Section 5: Order Form */}
        <OrderForm
          selectedMeal={selectedMeal}
          setSelectedMeal={setSelectedMeal}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button — visible on all screens */}
      <FloatingWhatsApp />
    </div>
  )
}