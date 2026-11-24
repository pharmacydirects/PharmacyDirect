"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartDrawer from "./CartDrawer";
import { useCart } from "./CartContext";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

export const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Online Store", href: "/store" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

function CartBtn({ onClick }: { onClick: () => void }) {
  const { count, total } = useCart();
  return (
    <button onClick={onClick} className="relative flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition group" aria-label="Open cart">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="text-gray-700 group-hover:text-[#006b3c] transition">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {count > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#006b3c] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">{count}</span>
        )}
      </div>
      {count > 0 && <span className="hidden sm:block text-xs font-bold text-[#006b3c]">${total.toFixed(2)}</span>}
    </button>
  );
}

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#063f2a] text-white text-[11px] sm:text-xs py-2.5 text-center px-4 font-medium tracking-[0.06em]">
        <span className="text-[#b9dbc5] mr-2">●</span>
        Free discreet delivery on orders over $150
        <span className="hidden sm:inline"> &nbsp;·&nbsp; </span>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="block sm:inline underline decoration-white/30 underline-offset-4 font-bold mt-1 sm:mt-0 hover:text-[#b9dbc5] transition">
          WhatsApp: +27 860 027 800
        </a>
      </div>

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
              {navLinks.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link key={href} href={href}
                    className={`h-full flex items-center whitespace-nowrap transition ${active ? "text-[#063f2a] border-b-2 border-[#17854f]" : "hover:text-[#17854f]"}`}>
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
