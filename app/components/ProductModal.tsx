"use client";
import { useState } from "react";
import Image from "next/image";
import { Product } from "./products";
import { useCart } from "./CartContext";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { items, add, inc, dec } = useCart();
  const item = items.find((i) => i.id === product.id);
  const cartQty = item?.qty ?? 0;
  const [localQty, setLocalQty] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < localQty; i++) add(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition text-xl leading-none"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left — image */}
          <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-10 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none min-h-[280px]">
            <Image
              src={product.image}
              alt={product.name}
              width={240}
              height={240}
              className="object-contain w-full max-h-56 mix-blend-multiply drop-shadow-lg"
              priority
            />
          </div>

          {/* Right — details */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-4">
            {/* Category badge */}
            <span className="inline-flex w-fit text-xs font-bold uppercase tracking-widest text-[#006b3c] bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              {product.category}
            </span>

            {/* Name */}
            <h2 className="text-2xl font-black text-gray-900 leading-tight uppercase tracking-wide">
              {product.name}
            </h2>

            {/* Doses & meta */}
            <div className="flex flex-wrap gap-2">
              {product.doses.split(" / ").map((d) => (
                <span key={d} className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                  {d}
                </span>
              ))}
              {product.meta && (
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                  {product.meta}
                </span>
              )}
            </div>

            {/* Price */}
            <p className="text-3xl font-black text-[#006b3c]">{product.priceLabel}</p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

            {/* Features */}
            <ul className="space-y-1.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="text-[#006b3c] shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* Qty + Add to cart */}
            <div className="flex items-center gap-3 mt-2">
              {/* Local qty stepper */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setLocalQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 font-black text-xl hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-extrabold text-gray-900 select-none">
                  {localQty}
                </span>
                <button
                  onClick={() => setLocalQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 font-black text-xl hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-[#006b3c] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#005530] active:scale-95 transition-all shadow-lg shadow-green-900/20"
              >
                ADD TO CART
              </button>
            </div>

            {/* Cart qty indicator */}
            {cartQty > 0 && (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
                <span className="text-sm text-[#006b3c] font-semibold">In your cart: {cartQty} item{cartQty > 1 ? "s" : ""}</span>
                <div className="flex items-center border border-[#006b3c] rounded-lg overflow-hidden">
                  <button onClick={() => dec(product.id)} className="w-7 h-7 flex items-center justify-center text-[#006b3c] font-black hover:bg-green-100 transition">−</button>
                  <span className="w-7 text-center text-xs font-bold">{cartQty}</span>
                  <button onClick={() => inc(product.id)} className="w-7 h-7 flex items-center justify-center text-[#006b3c] font-black hover:bg-green-100 transition">+</button>
                </div>
              </div>
            )}

            {/* WhatsApp order */}
            <a
              href={`${WA}&text=${encodeURIComponent(`Hi, I'd like to order ${localQty}x ${product.name} (${product.doses}) — ${product.priceLabel}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#25d366] text-[#25d366] font-bold text-sm py-3 rounded-xl hover:bg-[#25d366] hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
