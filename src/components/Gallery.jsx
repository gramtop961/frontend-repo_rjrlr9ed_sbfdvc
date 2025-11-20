import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1604145559206-0bd84f646160?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092921461-eab62e97a469?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091012965-6df7c9d0f6d0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581094812482-60d8e00c2d79?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604145559206-57c4f4f105cb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604881983163-281bf2f18b16?q=80&w=1200&auto=format&fit=crop'
]

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="galerie">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Galerie lucrări</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Selecție de imagini premium din proiectele HVAC realizate.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt={`lucrare ${i+1}`} className="w-full h-48 md:h-56 object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
