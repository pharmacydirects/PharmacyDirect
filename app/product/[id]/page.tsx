"use client";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../components/products";
import { useCart } from "../../components/CartContext";
import CartDrawer from "../../components/CartDrawer";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function CartBtn({ onClick }: { onClick: () => void }) {
  const { count, total } = useCart();
  return (
    <button onClick={onClick} className="relative flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {count > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#006b3c] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
      {count > 0 && <span className="hidden sm:block text-xs font-bold text-[#006b3c]">${total.toFixed(2)}</span>}
    </button>
  );
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const { items, add, inc, dec } = useCart();
  const item = items.find((i) => i.id === product.id);
  const cartQty = item?.qty ?? 0;
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const images = [product.image, ...(product.image2 ? [product.image2] : [])];
  const [activeImg, setActiveImg] = useState(0);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f8f9fb] antialiased">

      {/* Announcement bar */}
      <div className="bg-[#004d2b] text-white text-xs py-2.5 text-center px-4 font-medium">
        🚚 Free discreet delivery on orders over $150 &nbsp;·&nbsp;
        <a href={WA} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-green-300 transition">
          WhatsApp: +27 860 027 800
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#006b3c] to-[#004d2b] flex items-center justify-center shadow-lg shadow-green-900/20">
                <span className="text-white font-black text-lg">Rx</span>
              </div>
              <div className="leading-none">
                <span className="block text-gray-900 font-black text-xl tracking-tight">Pharmacy</span>
                <span className="block text-[#006b3c] font-black text-xl tracking-tight -mt-0.5">Direct</span>
              </div>
            </Link>
            <div className="flex items-center gap-2 ml-auto">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#25d366] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#1ebe5d] transition">
                <WaIcon /> WhatsApp
              </a>
              <CartBtn onClick={() => setCartOpen(true)} />
            </div>
          </div>
        </div>
        <nav className="bg-[#006b3c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-10 gap-6 text-xs font-bold tracking-widest text-white/90 uppercase">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/#shop" className="hover:text-white transition">Online Store</Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact Us</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#006b3c] transition font-medium">Home</Link>
          <span>›</span>
          <Link href="/#shop" className="hover:text-[#006b3c] transition font-medium">Online Store</Link>
          <span>›</span>
          <span className="text-gray-600 font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left — image gallery */}
            <div className="lg:w-5/12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col gap-4 p-8">
              {/* Main image */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center" style={{ minHeight: 300 }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#006b3c]/5 rounded-full blur-3xl scale-150" />
                  <Image
                    src={images[activeImg]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="relative object-contain w-64 h-64 mix-blend-multiply drop-shadow-2xl transition-all duration-300"
                    priority
                  />
                </div>
              </div>
              {/* Thumbnails — only show if there are multiple images */}
              {images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center bg-white transition-all ${
                        activeImg === i ? "border-[#006b3c] shadow-md" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        width={52}
                        height={52}
                        className="object-contain w-12 h-12 mix-blend-multiply"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — details */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col gap-5">

              {/* Category + badge */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#006b3c] bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-white bg-[#006b3c] px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-wide leading-tight">
                {product.name}
              </h1>

              {/* Dose pills */}
              <div className="flex flex-wrap gap-2">
                {product.doses.split(" / ").map((d) => (
                  <span key={d} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">
                    {d}
                  </span>
                ))}
                {product.meta && (
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200">
                    {product.meta}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-[#006b3c]">{product.priceLabel}</span>
                <span className="text-sm text-gray-400 font-medium">per pack</span>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="text-[#006b3c]" xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-gray-100" />

              {/* Qty + Add to cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Qty stepper */}
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden w-36 shrink-0">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 flex items-center justify-center text-gray-500 font-black text-xl hover:bg-gray-100 hover:text-[#006b3c] transition"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-base font-extrabold text-gray-900 select-none">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-12 flex items-center justify-center text-gray-500 font-black text-xl hover:bg-gray-100 hover:text-[#006b3c] transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to cart */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-xl transition-all active:scale-95 shadow-lg ${
                    added
                      ? "bg-green-500 text-white shadow-green-500/30"
                      : "bg-[#006b3c] text-white hover:bg-[#005530] shadow-green-900/20"
                  }`}
                >
                  {added ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      ADD TO CART
                    </>
                  )}
                </button>

                {/* WhatsApp */}
                <a
                  href={`${WA}&text=${encodeURIComponent(`Hi, I'd like to order ${qty}x ${product.name} (${product.doses}) — ${product.priceLabel}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-[#25d366] text-[#25d366] font-bold text-sm py-3.5 px-5 rounded-xl hover:bg-[#25d366] hover:text-white transition"
                >
                  <WaIcon />
                  <span className="hidden sm:inline">Order via WhatsApp</span>
                </a>
              </div>

              {/* Cart qty row — shows if already in cart */}
              {cartQty > 0 && (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                  <span className="text-sm text-[#006b3c] font-semibold">
                    {cartQty} item{cartQty > 1 ? "s" : ""} in your cart
                  </span>
                  <div className="flex items-center border-2 border-[#006b3c] rounded-lg overflow-hidden">
                    <button onClick={() => dec(product.id)} className="w-8 h-8 flex items-center justify-center text-[#006b3c] font-black text-lg hover:bg-green-100 transition">−</button>
                    <span className="w-8 text-center text-sm font-bold text-gray-900">{cartQty}</span>
                    <button onClick={() => inc(product.id)} className="w-8 h-8 flex items-center justify-center text-[#006b3c] font-black text-lg hover:bg-green-100 transition">+</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-black text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-[#006b3c]/30 transition-all group overflow-hidden"
                >
                  <div className="flex items-center justify-center bg-gray-50 p-6" style={{ height: 160 }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={120}
                      height={120}
                      className="object-contain h-32 w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-800 line-clamp-2">{p.name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{p.doses}</p>
                    <p className="text-[#006b3c] font-extrabold text-sm mt-1">{p.priceLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1117] text-gray-500 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#006b3c] to-[#004d2b] flex items-center justify-center">
              <span className="text-white font-black text-sm">Rx</span>
            </div>
            <div>
              <span className="block text-white font-black text-sm leading-none">Pharmacy</span>
              <span className="block text-[#25d366] font-black text-sm leading-none">Direct</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Shipping Info", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition">{l}</a>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-gray-700 mt-6">© 2026 Pharmacy Direct. All rights reserved.</p>
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
