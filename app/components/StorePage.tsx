"use client";
import { useState } from "react";
import { products, categories } from "./products";
import ProductCard from "./ProductCard";
import CartDrawer from "./CartDrawer";
import HeroCarousel from "./HeroCarousel";
import { useCart } from "./CartContext";
import Link from "next/link";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function CartBtn({ onClick }: { onClick: () => void }) {
  const { count, total } = useCart();
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition group"
      aria-label="Open cart"
    >
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-gray-700 group-hover:text-[#006b3c] transition">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {count > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#006b3c] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
      {count > 0 && (
        <span className="hidden sm:block text-xs font-bold text-[#006b3c]">${total.toFixed(2)}</span>
      )}
    </button>
  );
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f6f1] text-[#17211b] antialiased">

      {/* Announcement bar */}
      <div className="bg-[#063f2a] text-white text-[11px] sm:text-xs py-2.5 text-center px-4 font-medium tracking-[0.06em]">
        <span className="text-[#b9dbc5] mr-2">●</span>
        Free discreet delivery on orders over $150
        <span className="hidden sm:inline"> &nbsp;·&nbsp; </span>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="block sm:inline underline decoration-white/30 underline-offset-4 font-bold mt-1 sm:mt-0 hover:text-[#b9dbc5] transition">
          WhatsApp: +27 860 027 800
        </a>
      </div>

      {/* Header */}
      <header className="bg-[#fafbf7]/95 backdrop-blur-md border-b border-[#17211b]/8 sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 sm:h-20 items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Pharmacy Direct home">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#063f2a]/15 bg-[#063f2a] flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-[15px] tracking-tight">Rx</span>
              </div>
              <div className="leading-[0.92]">
                <span className="block text-[#17211b] font-black text-lg sm:text-xl tracking-[-0.04em]">Pharmacy</span>
                <span className="block text-[#17854f] font-black text-lg sm:text-xl tracking-[-0.04em]">Direct</span>
              </div>
            </Link>

            <div className="flex-1 max-w-xl hidden md:flex mx-auto">
              <div className="relative w-full">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#17211b]/35" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search the pharmacy"
                  className="w-full border border-[#17211b]/10 rounded-full bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#17854f]/10 focus:border-[#17854f] transition shadow-sm"
                  aria-label="Search medications"
                />
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 ml-auto">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 border border-[#17854f]/25 text-[#063f2a] text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#063f2a] hover:text-white transition">
                <WaIcon /> WhatsApp
              </a>
              <CartBtn onClick={() => setCartOpen(true)} />
            </div>
          </div>
        </div>

        <nav className="border-t border-[#17211b]/6 bg-[#fafbf7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-11 gap-7 text-[11px] font-bold tracking-[0.12em] text-[#17211b]/65 uppercase overflow-x-auto scrollbar-none">
              <a href="#" className="hover:text-[#17854f] whitespace-nowrap transition">Home</a>
              <a href="#" className="hover:text-[#17854f] whitespace-nowrap transition">About</a>
              <a href="#" className="hover:text-[#17854f] whitespace-nowrap transition">Our Services</a>
              <a href="#shop" className="h-full flex items-center text-[#063f2a] whitespace-nowrap border-b-2 border-[#17854f]">Online Store</a>
              <a href="#" className="hover:text-[#17854f] whitespace-nowrap transition">Journal</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-[#17854f] whitespace-nowrap transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#f4f6f1] text-[#17211b]">
        <div className="pointer-events-none absolute -right-44 -top-56 h-[38rem] w-[38rem] rounded-full bg-[#ddeadf]/65 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#17211b]/8" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-18">
          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17854f] mb-6">
                <span className="w-8 h-px bg-[#17854f]" />
                Established online pharmacy
              </div>

              <h1 className="text-[2.65rem] sm:text-[4.25rem] lg:text-[5rem] leading-[0.96] font-black tracking-[-0.065em] max-w-3xl">
                Care you can
                <span className="block mt-2 text-[#17854f]">trust. Delivered.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] sm:text-lg leading-relaxed text-[#17211b]/68">
                Discover genuine medication with clear pricing, professional service and discreet delivery from a pharmacy that puts your care first.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <a href="#shop" className="inline-flex items-center justify-center gap-3 bg-[#063f2a] text-white font-bold px-6 sm:px-7 py-3.5 rounded-full text-sm hover:bg-[#0b5739] transition shadow-lg shadow-[#063f2a]/15">
                  Explore medications
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-[#17211b]/15 text-[#17211b] font-bold px-6 py-3.5 rounded-full text-sm hover:border-[#17854f]/40 hover:bg-white/60 transition">
                  <WaIcon size={17} /> Speak to our team
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4 mt-9 pt-6 border-t border-[#17211b]/10">
                {["Secure ordering", "Genuine medication", "Discreet service", "Fast dispatch"].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-xs font-semibold text-[#17211b]/75">
                    <span className="w-5 h-5 shrink-0 rounded-full border border-[#17854f]/35 flex items-center justify-center text-[#17854f]">✓</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] sm:min-h-[600px] flex items-center justify-center">
              <div className="absolute right-[8%] top-[8%] h-3 w-3 rounded-full bg-[#17854f]/45" />
              <div className="absolute bottom-[13%] left-[12%] h-2 w-2 rounded-full bg-[#17854f]/30" />
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP ── */}
      <div id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 pb-20 flex gap-8">

        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="bg-[#fafbf7] border border-[#17211b]/8 overflow-hidden sticky top-32">
            <div className="text-[#063f2a] text-[10px] font-black uppercase tracking-[0.18em] px-5 py-4 border-b border-[#17211b]/8">
              Categories
            </div>
            <ul>
              {categories.map((cat, i) => (
                <li key={cat} className={i < categories.length - 1 ? "border-b border-gray-100" : ""}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-5 py-3 text-sm transition-all flex items-center justify-between ${
                      activeCategory === cat
                        ? "text-[#006b3c] font-bold bg-green-50"
                        : "text-gray-600 hover:text-[#006b3c] hover:bg-gray-50 font-medium"
                    }`}
                  >
                    {cat}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      className={`transition-opacity ${activeCategory === cat ? "opacity-100 text-[#006b3c]" : "opacity-0"}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7 pb-5 border-b border-[#17211b]/10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#17854f] mb-2">The pharmacy collection</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211b] tracking-[-0.035em]">
                {activeCategory === "All" ? "All medications" : activeCategory}
              </h2>
            </div>
            <p className="text-xs text-[#17211b]/45 pb-1">{filtered.length} product{filtered.length !== 1 ? "s" : ""} available</p>

            <div className="flex gap-2 flex-wrap lg:hidden w-full">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-2 text-xs font-bold border transition ${
                    activeCategory === cat
                      ? "bg-[#063f2a] text-white border-[#063f2a]"
                      : "bg-[#fafbf7] text-[#17211b]/65 border-[#17211b]/10 hover:border-[#17854f] hover:text-[#17854f]"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mb-5">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#17211b]/35" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medications..." aria-label="Search medications"
                className="w-full border border-[#17211b]/10 rounded-full bg-[#fafbf7] pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#17854f]/10 focus:border-[#17854f] transition" />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#17211b]/45 border border-[#17211b]/8 bg-[#fafbf7]">
              <p className="text-lg font-black text-[#17211b]">No medications found</p>
              <p className="text-sm mt-1">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#17211b]/10 border border-[#17211b]/10 overflow-hidden shadow-[0_12px_40px_rgba(23,33,27,.05)]">
              {filtered.map((p) => (
                <div key={p.id} className="bg-[#fafbf7]">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#063f2a] text-white py-16">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b9dbc5] mb-3">Personal pharmacy support</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.045em]">Need help with an order?</h2>
            <p className="text-[#dce9df]/70 text-sm md:text-base mt-3">Our team is available to help you by WhatsApp.</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#fafbf7] px-7 py-4 text-[#063f2a] font-black text-sm rounded-full hover:bg-[#ddeadf] transition shadow-xl">
            <WaIcon size={18} /> Chat with our team
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101711] text-[#b5beb7] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#063f2a] border border-[#17854f] flex items-center justify-center">
                <span className="text-white font-black text-sm">Rx</span>
              </div>
              <div>
                <span className="block text-white font-black text-base leading-none">Pharmacy</span>
                <span className="block text-[#83c19a] font-black text-base leading-none mt-1">Direct</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
              {["Privacy Policy", "Terms of Service", "Shipping Info", "Contact"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition">{l}</a>
              ))}
            </div>
          </div>
          <p className="text-center text-[11px] text-white/25 mt-6">© 2026 Pharmacy Direct. All rights reserved.</p>
        </div>
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
