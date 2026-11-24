"use client";
import { useState } from "react";
import { products, categories } from "./products";
import ProductCard from "./ProductCard";

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Page header */}
      <div className="bg-[#063f2a] text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#b9dbc5] mb-3">The pharmacy collection</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-4">Online Store</h1>
          <p className="text-[#dce9df]/70 text-sm sm:text-base max-w-xl">
            Browse our full range of genuine prescription medications. All products are pharmacist-verified and dispatched with care.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 pb-20 flex gap-8">

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
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7 pb-5 border-b border-[#17211b]/10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211b] tracking-[-0.035em]">
                {activeCategory === "All" ? "All medications" : activeCategory}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              {/* Desktop search */}
              <div className="hidden md:block relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#17211b]/35" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search medications..." aria-label="Search medications"
                  className="border border-[#17211b]/10 rounded-full bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-[#17854f]/10 focus:border-[#17854f] transition w-56" />
              </div>
              <p className="text-xs text-[#17211b]/45">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
            </div>

            {/* Mobile category pills */}
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
    </div>
  );
}
