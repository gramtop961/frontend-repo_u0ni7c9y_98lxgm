import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E6]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-[#C49A6C]/15 px-3 py-1 text-sm font-medium text-[#C49A6C]">
            Spedizione inclusa — consegna 3–5 giorni
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#333333] sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Riserva Rotundo — Olio extravergine d’oliva biologico calabrese
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#333333]/80">
            Dalle colline della Calabria, l'olio della Famiglia Rotundo: raccolto a mano, spremuto a freddo, 100% biologico.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#acquista" className="inline-flex items-center justify-center rounded-md bg-[#556B2F] px-6 py-3 text-white shadow hover:bg-[#465924] transition">
              Acquista la tua lattina da 5L
            </a>
            <a href="#storia" className="inline-flex items-center justify-center rounded-md border border-[#556B2F] px-6 py-3 text-[#556B2F] hover:bg-[#556B2F]/10 transition">
              Scopri la nostra storia
            </a>
          </div>
        </div>
        <div className="mt-12 hidden flex-1 justify-end lg:flex">
          <img
            src="https://images.unsplash.com/photo-1517260913320-4f3939780f04?auto=format&fit=crop&w=1200&q=80"
            alt="Uliveto calabrese con alberi di ulivo"
            className="h-[380px] w-full max-w-xl rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
