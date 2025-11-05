import React from 'react';

export default function ProductShowcase() {
  return (
    <section id="acquista" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?q=80&w=1200&auto=format&fit=crop"
              alt="Lattina di olio extravergine d'oliva Riserva Rotundo"
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Riserva Rotundo — Olio Extravergine di Oliva Biologico (Lattina 5L)
            </h2>
            <p className="mt-3 text-[#333333]/80">
              Dalla cura della Famiglia Rotundo e dalle mani di Andrea nasce Riserva Rotundo: un olio extravergine di oliva biologico, puro, intenso e bilanciato. Raccolto a mano, molito entro 8 ore e spremuto a freddo per preservare aromi e proprietà nutrizionali.
            </p>
            <div className="mt-5 rounded-lg border border-[#F5F0E6] bg-[#F5F0E6]/60 p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-[#556B2F]">75,00 €</span>
                <span className="text-sm text-[#333333]/70">15,00 €/L — Spedizione inclusa</span>
              </div>
              <button className="mt-4 w-full rounded-md bg-[#556B2F] px-5 py-3 text-white hover:bg-[#465924] transition">
                Aggiungi al carrello — 75€
              </button>
              <p className="mt-3 text-sm text-[#333333]/70">Consegna standard in 3–5 giorni lavorativi.</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-[#333333]">Caratteristiche tecniche</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#333333]/80">
                  <li>Quantità: lattina da 5 litri</li>
                  <li>Metodo: raccolta manuale, molitura entro 8 ore, spremitura a freddo</li>
                  <li>Origine: Calabria, Italia (uliveti Famiglia Rotundo)</li>
                  <li>Monocultivar calabrese</li>
                  <li>Biologico certificato (inserire ente certificatore e numero)</li>
                  <li>Acidità: &lt; 0,3%</li>
                  <li>Conservazione: luogo fresco e al riparo dalla luce</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">Profilo organolettico</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#333333]/80">
                  <li>Olfatto: fruttato medio, erba fresca, pomodoro verde, mandorla</li>
                  <li>Gusto: equilibrato, leggero amaro iniziale, retrogusto piccante</li>
                  <li>Abbinamenti: insalate, zuppe, carpacci, verdure grigliate, pane tostato</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">Valori nutrizionali (100 g)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#333333]/80">
                  <li>Energia: 900 kcal</li>
                  <li>Grassi: 100 g (di cui saturi 14 g)</li>
                  <li>Carboidrati: 0 g</li>
                  <li>Proteine: 0 g</li>
                  <li>Sale: 0 g</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#333333]">Imballo & Note</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[#333333]/80">
                  <li>Lattina metallica alimentare 5L con tappo ermetico</li>
                  <li>Packaging esterno in cartone riciclabile</li>
                  <li>Spedizione inclusa — consegna 3–5 giorni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
