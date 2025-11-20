import React, { useEffect, useState } from 'react'

const Testimonials = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([
          { name: 'Client', role: 'Local', quote: 'Profesioniști și serioși.' },
          { name: 'Client', role: 'Local', quote: 'Execuție rapidă și curată.' },
          { name: 'Client', role: 'Local', quote: 'Recomand cu încredere.' }
        ])
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white" id="testimoniale">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Ce spun clienții</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Feedback real după lucrări efectuate.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-700 italic">“{t.quote}”</p>
              <div className="mt-4">
                <p className="text-slate-900 font-semibold">{t.name}</p>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
