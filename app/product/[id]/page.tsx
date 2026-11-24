"use client";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../components/products";
import { useCart } from "../../components/CartContext";
import { WaIcon } from "../../components/Navbar";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const { items, add, inc, dec } = useCart();
  const cartQty = items.find((i) => i.id === product.id)?.qty ?? 0;
  const [qty, setQty] = useState(1);
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
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#17211b]/45 font-medium">
          <Link href="/" className="hover:text-[#17854f] transition">Home</Link>
          <span>›</span>
          <Link href="/store" className="hover:text-[#17854f] transition">Online Store</Link>
          <span>›</span>
          <span className="text-[#17211b]/70 font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#fafbf7] border border-[#17211b]/8 overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left — image gallery */}
            <div className="lg:w-5/12 border-b lg:border-b-0 lg:border-r border-[#17211b]/8 flex flex-col gap-4 p-8">
              <div className="bg-[#f4f6f1] flex items-center justify-center" style={{ minHeight: 300 }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#17854f]/5 rounded-full blur-3xl scale-150" />
                  <Image
                    src={images[activeImg]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="relative object-contain w-64 h-64 mix-blend-multiply drop-shadow-xl transition-all duration-300"
                    priority
                  />
                </div>
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className={`w-16 h-16 border-2 flex items-center justify-center bg-white transition-all ${activeImg === i ? "border-[#17854f]" : "border-[#17211b]/10 hover:border-[#17211b]/25"}`}>
                      <Image src={img} alt={`${product.name} view ${i + 1}`} width={48} height={48} className="object-contain w-11 h-11 mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — details */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col gap-5">

              <div className="flex items-center gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#063f2a] border border-[#063f2a]/15 bg-[#ddeadf]/60 px-3 py-1">
                  {product.category}
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white bg-[#17854f] px-3 py-1">
                  In Stock
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide leading-tight">{product.name}</h1>

              <div className="flex flex-wrap gap-2">
                {product.doses.split(" / ").map((d) => (
                  <span key={d} className="text-xs font-semibold bg-[#f4f6f1] text-[#17211b]/65 px-3 py-1.5 border border-[#17211b]/10">{d}</span>
                ))}
                {product.meta && (
                  <span className="text-xs font-semibold bg-[#f4f6f1] text-[#17211b]/65 px-3 py-1.5 border border-[#17211b]/10">{product.meta}</span>
                )}
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-[#063f2a]">{product.priceLabel}</span>
                <span className="text-sm text-[#17211b]/40 font-medium">per pack</span>
              </div>

              <div className="h-px bg-[#17211b]/8" />

              {/* Full description — prominent */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#17854f] mb-2">About this medication</p>
                <p className="text-[#17211b]/70 text-sm leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#17211b]/75">
                    <span className="w-5 h-5 rounded-full bg-[#ddeadf] border border-[#17854f]/25 flex items-center justify-center shrink-0 text-[#17854f] text-[9px] font-black">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="h-px bg-[#17211b]/8" />

              {/* Qty + Add to cart */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center border-2 border-[#17211b]/12 overflow-hidden w-36 shrink-0">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 flex items-center justify-center text-[#17211b]/50 font-black text-xl hover:bg-[#ddeadf] hover:text-[#063f2a] transition">−</button>
                  <span className="flex-1 text-center text-base font-extrabold select-none">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-12 flex items-center justify-center text-[#17211b]/50 font-black text-xl hover:bg-[#ddeadf] hover:text-[#063f2a] transition">+</button>
                </div>

                <button onClick={handleAdd}
                  className={`flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 transition-all active:scale-95 ${
                    added ? "bg-[#17854f] text-white" : "bg-[#063f2a] text-white hover:bg-[#0b5739]"
                  }`}>
                  {added ? (
                    <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Added!</>
                  ) : (
                    <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> Add to Cart</>
                  )}
                </button>

                <a href={`${WA}&text=${encodeURIComponent(`Hi, I'd like to order ${qty}x ${product.name} (${product.doses}) — ${product.priceLabel}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-[#17854f]/40 text-[#063f2a] font-bold text-sm py-3.5 px-5 hover:bg-[#063f2a] hover:text-white hover:border-[#063f2a] transition">
                  <WaIcon size={16} />
                  <span className="hidden sm:inline">Order via WhatsApp</span>
                </a>
              </div>

              {cartQty > 0 && (
                <div className="flex items-center justify-between bg-[#ddeadf]/60 border border-[#17854f]/20 px-5 py-3">
                  <span className="text-sm text-[#063f2a] font-semibold">{cartQty} item{cartQty > 1 ? "s" : ""} in your cart</span>
                  <div className="flex items-center border-2 border-[#17854f]/40 overflow-hidden">
                    <button onClick={() => dec(product.id)} className="w-8 h-8 flex items-center justify-center text-[#063f2a] font-black text-lg hover:bg-[#ddeadf] transition">−</button>
                    <span className="w-8 text-center text-sm font-bold">{cartQty}</span>
                    <button onClick={() => inc(product.id)} className="w-8 h-8 flex items-center justify-center text-[#063f2a] font-black text-lg hover:bg-[#ddeadf] transition">+</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-2">More in {product.category}</p>
            <h2 className="text-2xl font-black tracking-[-0.03em] mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#17211b]/10 border border-[#17211b]/10 overflow-hidden">
              {related.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`}
                  className="bg-[#fafbf7] flex flex-col hover:bg-white transition-colors group">
                  <div className="flex items-center justify-center bg-[#f4f6f1] p-6" style={{ height: 160 }}>
                    <Image src={p.image} alt={p.name} width={120} height={120}
                      className="object-contain h-32 w-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="px-4 py-4 border-t border-[#17211b]/8">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#17211b] line-clamp-2 group-hover:text-[#17854f] transition">{p.name}</p>
                    <p className="text-[11px] text-[#17211b]/40 mt-0.5">{p.doses}</p>
                    <p className="text-[#063f2a] font-extrabold text-sm mt-1">{p.priceLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
