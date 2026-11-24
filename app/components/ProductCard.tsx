"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./products";
import { useCart } from "./CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { items, add, inc, dec } = useCart();
  const item = items.find((i) => i.id === product.id);
  const qty = item?.qty ?? 0;

  return (
    <article className="flex flex-col bg-white hover:bg-[#fdfefb] transition-colors group h-full">
      {/* Image — navigates to product page */}
      <Link href={`/product/${product.id}`} className="relative flex items-center justify-center bg-[#f7f8f4] m-3 mb-0 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17854f]" style={{ height: 210 }} aria-label={`View ${product.name}`}>
        <span className="absolute left-3 top-3 z-10 text-[9px] font-black uppercase tracking-[0.16em] text-[#063f2a] border border-[#063f2a]/10 bg-white/90 px-2 py-1">
          {product.category}
        </span>
        <Image
          src={product.image}
          alt={product.name}
          width={170}
          height={170}
          className="object-contain h-40 w-[82%] mix-blend-multiply group-hover:scale-[1.04] transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-1 px-4 py-5 gap-2">
        {/* Name — navigates to product page */}
        <Link
          href={`/product/${product.id}`}
          className="text-[13px] font-extrabold text-[#17211b] uppercase tracking-wide leading-snug line-clamp-2 min-h-10 hover:text-[#17854f] transition-colors"
        >
          {product.name}
        </Link>

        <p className="text-[11px] text-[#17211b]/45 leading-relaxed">
          {product.doses}{product.meta ? ` · ${product.meta}` : ""}
        </p>

        <p className="text-[11px] text-[#17211b]/60 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <p className="text-[#063f2a] font-black text-xl leading-none mt-1">{product.priceLabel}</p>

        {/* Stepper / Add to cart */}
        <div className="mt-auto pt-4">
          {qty === 0 ? (
            <button
              onClick={() => add(product)}
              className="w-full border border-[#063f2a] text-[#063f2a] text-[11px] font-black tracking-[0.08em] uppercase py-3 hover:bg-[#063f2a] hover:text-white transition-all active:scale-[0.98]"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to cart
            </button>
          ) : (
            <div className="flex items-center border border-[#063f2a] overflow-hidden">
              <button
                onClick={() => dec(product.id)}
                className="w-10 h-10 flex items-center justify-center text-[#063f2a] font-black text-xl hover:bg-[#ddeadf] transition-colors shrink-0"
                aria-label={`Decrease ${product.name} quantity`}
              >
                −
              </button>
              <span className="flex-1 text-center text-sm font-extrabold text-[#17211b] select-none">
                {qty}
              </span>
              <button
                onClick={() => inc(product.id)}
                className="w-10 h-10 flex items-center justify-center text-[#063f2a] font-black text-xl hover:bg-[#ddeadf] transition-colors shrink-0"
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
