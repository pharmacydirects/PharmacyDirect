"use client";
import { useCart } from "./CartContext";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, inc, dec, remove, total, count } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-gray-900">Your Cart</span>
            {count > 0 && (
              <span className="bg-[#006b3c] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition text-2xl leading-none">
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm font-medium">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.doses}</p>
                  <p className="text-sm font-extrabold text-[#006b3c]">${(item.basePrice * item.qty).toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center border-2 border-[#006b3c] rounded-lg overflow-hidden">
                    <button onClick={() => dec(item.id)} className="w-7 h-7 flex items-center justify-center text-[#006b3c] font-black text-lg hover:bg-green-50 transition">−</button>
                    <span className="w-7 text-center text-sm font-bold">{item.qty}</span>
                    <button onClick={() => inc(item.id)} className="w-7 h-7 flex items-center justify-center text-[#006b3c] font-black text-lg hover:bg-green-50 transition">+</button>
                  </div>
                  <button onClick={() => remove(item.id)} className="text-[10px] text-red-400 hover:text-red-600 transition">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm font-bold text-gray-900">
              <span>Total</span>
              <span className="text-[#006b3c] text-base">${total.toFixed(2)}</span>
            </div>
            <a
              href={`https://api.whatsapp.com/send/?phone=27860027800&text=${encodeURIComponent(
                "Hi, I'd like to order:\n" +
                  items.map((i) => `• ${i.name} x${i.qty} — $${(i.basePrice * i.qty).toFixed(2)}`).join("\n") +
                  `\n\nTotal: $${total.toFixed(2)}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25d366] text-white font-bold py-3 text-sm hover:bg-[#1ebe5d] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
}
