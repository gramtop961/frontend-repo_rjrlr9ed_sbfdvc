import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Eroare trimitere')
      setStatus('sent')
      setForm({ name: '', phone: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Cere ofertă</h2>
          <p className="text-slate-600 text-center mb-8">Completează formularul și te contactăm în 60 de secunde în program.</p>
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
            <div>
              <label className="block text-slate-700 mb-2">Nume</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white" placeholder="Nume complet" />
            </div>
            <div>
              <label className="block text-slate-700 mb-2">Telefon</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white" placeholder="07xx xxx xxx" />
            </div>
            <div>
              <label className="block text-slate-700 mb-2">Mesaj</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white" placeholder="Descrie pe scurt lucrarea" />
            </div>
            <button type="submit" className="w-full px-6 py-4 rounded-xl text-lg font-semibold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 transition">
              {status === 'sending' ? 'Se trimite...' : 'Trimite cererea'}
            </button>
            {status === 'sent' && <p className="text-green-600 text-center">Cerere trimisă cu succes!</p>}
            {status === 'error' && <p className="text-red-600 text-center">A apărut o eroare. Încearcă din nou.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
