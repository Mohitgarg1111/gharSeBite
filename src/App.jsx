import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
// import CustomCursor from './components/CustomCursor'
// import SmoothScroll from './components/SmoothScroll'
import PageTransition from './components/PageTransition'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import WhyChooseUs from './components/WhyChooseUs'
import MenuSection from './components/MenuSection'
import TrustSection from './components/TrustSection'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null)

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
    <>
      {/* Page load curtain */}
      <PageTransition />

      {/* TEMPORARILY DISABLED because they can block clicks */}
      {/* <CustomCursor /> */}

      <div className="min-h-screen bg-parchment overflow-x-hidden">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              borderRadius: '12px',
              background: '#FFFDF7',
              color: '#2C1A0E',
              border: '1px solid rgba(210,160,100,0.25)',
              boxShadow: '0 8px 32px rgba(120,60,20,0.12)',
            },
          }}
        />

        <Navbar />

        <main>
          <Hero />
          <MarqueeStrip />
          <WhyChooseUs />
          <MarqueeStrip reverse />
          <MenuSection onOrderNow={handleOrderNow} />
          <TrustSection />
          <OrderForm
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
          />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  )
}