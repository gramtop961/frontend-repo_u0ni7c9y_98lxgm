import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Playfair Display, serif' }}>
          Domande frequenti
        </h2>
        <div className="mt-8 space-y-6">
          <details className="group rounded-lg border border-[#F5F0E6] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-[#333333]">
              L’olio è davvero biologico?
              <span className="ml-3 text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-[#333333]/80">
              Sì, Riserva Rotundo è biologico certificato. Sull’etichetta sono riportati ente certificatore e codice.
            </p>
          </details>
          <details className="group rounded-lg border border-[#F5F0E6] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-[#333333]">
              In che condizioni viene spedito?
              <span className="ml-3 text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-[#333333]/80">
              Le lattine vengono imballate in cartone riciclabile con protezioni interne per garantire integrità e sicurezza durante il trasporto. Spedizione inclusa.
            </p>
          </details>
          <details className="group rounded-lg border border-[#F5F0E6] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-[#333333]">
              Tempi di consegna?
              <span className="ml-3 text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-[#333333]/80">
              Consegna standard 3–5 giorni lavorativi in Italia. Tempi variabili per isole o zone remote.
            </p>
          </details>
          <details className="group rounded-lg border border-[#F5F0E6] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-[#333333]">
              Posso restituire il prodotto?
              <span className="ml-3 text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-[#333333]/80">
              Accettiamo resi solo per prodotti danneggiati o difettosi. Contatta l’assistenza entro 7 giorni dalla consegna allegando foto del problema.
            </p>
          </details>
          <details className="group rounded-lg border border-[#F5F0E6] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-[#333333]">
              Come conservare l’olio?
              <span className="ml-3 text-[#556B2F] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-[#333333]/80">
              Conservare in luogo fresco e buio, evitare temperature estreme. Consumare preferibilmente entro 18 mesi dalla produzione.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
