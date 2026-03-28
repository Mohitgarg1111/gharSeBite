import { useState, useEffect, useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import WhyChooseUs      from './components/WhyChooseUs'
import MenuSection      from './components/MenuSection'
import TrustSection     from './components/TrustSection'
import OrderForm        from './components/OrderForm'
import Footer           from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null)

  // ── Custom cursor (desktop only) ──────────────────────────────
  useEffect(() => {
    // Skip on touch/mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor   = document.getElementById('custom-cursor')
    const follower = document.getElementById('cursor-follower')
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let raf

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top  = mouseY + 'px'
    }

    const loop = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      follower.style.left = followerX + 'px'
      follower.style.top  = followerY + 'px'
      raf = requestAnimationFrame(loop)
    }

    // Use event delegation instead of querying all buttons upfront
    const onMouseOver = (e) => {
      const el = e.target.closest('a, button')
      if (!el) return
      cursor.style.width   = '6px'
      cursor.style.height  = '6px'
      cursor.style.opacity = '0.6'
      follower.style.width        = '56px'
      follower.style.height       = '56px'
      follower.style.borderColor  = 'rgba(249,115,22,0.8)'
    }

    const onMouseOut = (e) => {
      const el = e.target.closest('a, button')
      if (!el) return
      cursor.style.width   = '12px'
      cursor.style.height  = '12px'
      cursor.style.opacity = '1'
      follower.style.width        = '36px'
      follower.style.height       = '36px'
      follower.style.borderColor  = 'rgba(249,115,22,0.5)'
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout',  onMouseOut)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout',  onMouseOut)
      cancelAnimationFrame(raf)
    }
  }, []) // empty deps — runs once after mount, DOM is ready

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
    <div className="min-h-screen bg-obsidian overflow-x-hidden">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            borderRadius: '12px',
            background: '#221E16',
            color: '#FAF7F2',
            border: '1px solid rgba(249,115,22,0.2)',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
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
  )
}