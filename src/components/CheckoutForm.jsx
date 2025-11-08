import React, { useState, useMemo } from 'react';

export default function CheckoutForm({ isOpen, onClose, product }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    address_line: '',
    city: '',
    province: '',
    postal_code: '',
    notes: '',
    newsletter_opt_in: false,
    quantity: product?.quantity || 1,
  });

  const totalPrice = useMemo(() => {
    const qty = Number(form.quantity) || 1;
    return (product?.unit_price || 0) * qty;
  }, [form.quantity, product]);

  React.useEffect(() => {
    // Reset quantity when product changes
    if (isOpen) {
      setForm((f) => ({ ...f, quantity: product?.quantity || 1 }));
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      product_name: product?.name || 'Riserva Rotundo 5L',
      quantity: Number(form.quantity) || 1,
      total_price: totalPrice,
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      address_line: form.address_line,
      city: form.city,
      province: form.province,
      postal_code: form.postal_code,
      notes: form.notes || undefined,
      newsletter_opt_in: !!form.newsletter_opt_in,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Errore durante l\'invio dell\'ordine');
      const data = await res.json();
      alert('Ordine inviato! Riceverai una conferma via email. ID: ' + data.id);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Si è verificato un problema con l\'invio. Riprova o contattaci.');
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-6">
      <div className="w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h3 className="text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Checkout spedizione</h3>
            <p className="text-sm text-[#333333]/70">{product?.name} — €{(product?.unit_price || 0).toFixed(2)} cad.</p>
          </div>
          <button onClick={onClose} className="rounded-md p-2 text-[#333333]/70 hover:bg-[#F5F0E6]">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Quantità</label>
            <input
              type="number"
              min="1"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Nome e Cognome</label>
            <input name="full_name" value={form.full_name} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Telefono / WhatsApp</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium">CAP</label>
            <input name="postal_code" value={form.postal_code} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Indirizzo (via e numero)</label>
            <input name="address_line" value={form.address_line} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Città</label>
            <input name="city" value={form.city} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Provincia</label>
            <input name="province" value={form.province} onChange={handleChange} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Note per il corriere</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="mt-1 w-full rounded-md border border-[#E8E1D5] px-3 py-2 focus:border-[#556B2F] focus:outline-none" placeholder="Citofono, piano, orari…" />
          </div>

          <div className="sm:col-span-2 flex items-center gap-2">
            <input id="newsletter" type="checkbox" name="newsletter_opt_in" checked={form.newsletter_opt_in} onChange={handleChange} className="h-4 w-4" />
            <label htmlFor="newsletter" className="text-sm">Voglio ricevere aggiornamenti e offerte</label>
          </div>

          <div className="sm:col-span-2 flex items-center justify-between border-t pt-4">
            <p className="text-sm text-[#333333]/80">Totale: <span className="text-lg font-semibold text-[#556B2F]">€{totalPrice.toFixed(2)}</span> (spedizione inclusa)</p>
            <div className="flex gap-3">
              <button type="button" onClick={onClose} className="rounded-md border border-[#C49A6C] px-5 py-2 text-[#C49A6C] hover:bg-[#C49A6C]/10">Annulla</button>
              <button type="submit" className="rounded-md bg-[#556B2F] px-5 py-2 text-white hover:bg-[#465924]">Invia ordine</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
