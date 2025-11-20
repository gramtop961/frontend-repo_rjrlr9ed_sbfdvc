import React, { useRef } from 'react'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onCTAClick={scrollToContact} />
      <WhyUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Coverage />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
