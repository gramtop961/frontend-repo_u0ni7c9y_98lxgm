import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Bundles from './components/Bundles';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Top Bar */}
      <div className="w-full bg-[#556B2F] px-6 py-2 text-center text-sm text-white">
        Acquista 2 lattine, risparmia 10€ — Spedizione inclusa
      </div>

      {/* Simple Navbar */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-[#F5F0E6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo-riserva-rotundo.svg" alt="Logo Riserva Rotundo" className="h-8 w-auto"/>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Riserva Rotundo
            </span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#acquista" className="hover:text-[#556B2F]">Prodotto</a>
            <a href="#offerte" className="hover:text-[#556B2F]">Offerte</a>
            <a href="#storia" className="hover:text-[#556B2F]">Chi siamo</a>
            <a href="#faq" className="hover:text-[#556B2F]">FAQ</a>
          </nav>
          <a href="#acquista" className="rounded-md bg-[#556B2F] px-4 py-2 text-sm text-white hover:bg-[#465924]">
            Aggiungi al carrello — 75€
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <section className="bg-white" id="home-intro">
          <div className="mx-auto max-w-4xl px-6 py-12 text-center">
            <h2 className="text-2xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Riserva Rotundo — L’olio biologico delle colline calabresi
            </h2>
            <p className="mt-3 text-[#333333]/80">
              Dalla Famiglia Rotundo nasce un olio extravergine d’oliva che racconta il territorio. Andrea cura ogni pianta, segue la raccolta e si assicura che ogni goccia sia pura, fresca e biologica. Scopri le nostre lattine da 5L e le offerte famiglia.
            </p>
          </div>
        </section>
        <ProductShowcase />
        <Bundles />
        <section id="storia" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                La Famiglia Rotundo
              </h2>
              <p className="mt-3 text-[#333333]/80">
                Siamo produttori a conduzione familiare da generazioni. I nostri uliveti crescono sulle colline calabresi, esposti al sole e nutriti dal vento marino. Andrea, responsabile agronomico della famiglia, segue la cura degli alberi e coordina la raccolta. Puntiamo su qualità, sostenibilità e trasparenza: ogni lattina racconta il nostro lavoro.
              </p>
              <ul className="mt-6 list-disc space-y-1 pl-5 text-[#333333]/80">
                <li>Biologico certificato</li>
                <li>Raccolta a mano e molitura entro 8 ore</li>
                <li>Spremitura a freddo, acidità &lt;0,3%</li>
                <li>Filiera corta di famiglia</li>
              </ul>
            </div>
            <div>
              <img
                src="/story-portrait.svg"
                alt="Ritratto stilizzato tra gli ulivi"
                className="w-full rounded-xl object-cover shadow"
              />
            </div>
          </div>
        </section>
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F5F0E6] bg-[#F5F0E6]">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-riserva-rotundo.svg" alt="Logo Riserva Rotundo" className="h-8 w-auto"/>
              <p className="text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Riserva Rotundo</p>
            </div>
            <p className="mt-2 text-sm text-[#333333]/80">Olio extravergine d’oliva biologico calabrese. Lattina 5L — spedizione inclusa.</p>
          </div>
          <div>
            <p className="font-semibold">Contatti</p>
            <ul className="mt-2 space-y-1 text-sm text-[#333333]/80">
              <li>Email: info@riservarotundo.it</li>
              <li>Telefono: +39 000 000 000</li>
              <li>Indirizzo: Calabria, Italia</li>
              <li>Orari: Lun–Ven 9:00–18:00</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Policy</p>
            <ul className="mt-2 space-y-1 text-sm text-[#333333]/80">
              <li>Spedizioni: incluse, 3–5 giorni</li>
              <li>Resi & Rimborsi: entro 7 giorni per prodotti danneggiati</li>
              <li>Privacy: GDPR compliant</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Seguici</p>
            <ul className="mt-2 space-y-1 text-sm text-[#333333]/80">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E8E1D5] py-4 text-center text-xs text-[#333333]/70">
          © {new Date().getFullYear()} Famiglia Rotundo — Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
}

export default App;
