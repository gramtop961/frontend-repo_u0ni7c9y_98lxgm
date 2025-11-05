import React from 'react';

const bundles = [
  {
    name: 'Riserva 1',
    qty: '1 x 5L',
    price: '75,00 €',
    perL: '15,00 €/L',
    save: '—',
    highlight: 'Spedizione inclusa',
  },
  {
    name: 'Riserva 2 Famiglia',
    qty: '2 x 5L (10L)',
    price: '140,00 €',
    perL: '14,00 €/L',
    save: 'Risparmi 10,00 €',
    highlight: 'Perfetto per famiglie o regali',
  },
  {
    name: 'Riserva 3 Scorta',
    qty: '3 x 5L (15L)',
    price: '200,00 €',
    perL: '13,33 €/L',
    save: 'Risparmi 25,00 € (−11%)',
    highlight: 'Convenienza per ristoranti o scorte lunghe',
  },
];

export default function Bundles() {
  return (
    <section className="bg-[#F5F0E6]" id="offerte">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Offerte e Bundle
          </h2>
          <p className="mt-2 text-[#333333]/80">Spedizione inclusa su tutti i pacchetti</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <div key={b.name} className="rounded-xl bg-white p-6 shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#333333]">{b.name}</h3>
                  <p className="text-sm text-[#333333]/70">{b.qty}</p>
                </div>
                <span className="rounded-full bg-[#C49A6C]/15 px-3 py-1 text-sm font-medium text-[#C49A6C]">
                  {b.perL}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-[#556B2F]">{b.price}</span>
                <span className="text-sm text-green-700">{b.save}</span>
              </div>
              <p className="mt-2 text-sm text-[#333333]/80">{b.highlight}</p>
              <button className="mt-5 w-full rounded-md bg-[#556B2F] px-5 py-3 text-white hover:bg-[#465924] transition">
                Aggiungi al carrello
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[#C49A6C]/30 bg-white p-5 text-sm text-[#333333]/80">
          <p className="font-medium text-[#333333]">FAQ rapida</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Imballo sicuro in cartone riciclabile con protezioni interne.</li>
            <li>I prezzi includono la spedizione in tutta Italia.</li>
            <li>Consegna standard 3–5 giorni lavorativi.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
