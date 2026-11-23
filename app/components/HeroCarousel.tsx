"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { products } from "./products";

const SLIDES = products.slice(0, 6);

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 500);
  }, [animating]);

  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => go((current + 1) % SLIDES.length), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  const p = SLIDES[current];

  return (
    <div className="relative z-10 flex h-full w-full select-none items-center justify-center">
      <div className="relative flex w-full flex-col items-center">
        <div className="relative flex h-96 w-full items-center justify-center sm:h-[480px] lg:h-[520px]">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[min(72vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_45%_38%,#ffffff_0%,#e6eee5_54%,#ddeadf_100%)]" />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[min(84vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#063f2a]/[0.07]" />
          <div
            key={p.id}
            className="relative z-10 transition-all duration-500"
            style={{ transform: animating ? "scale(0.94) translateY(8px)" : "scale(1) translateY(0)" }}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={420}
              height={420}
              className="h-80 w-80 object-contain mix-blend-multiply drop-shadow-[0_20px_20px_rgba(23,33,27,0.16)] sm:h-[400px] sm:w-[400px]"
              priority
            />
          </div>
        </div>

        <div
          className="mt-1 flex w-full items-center justify-between gap-4 px-2 transition-all duration-500 sm:px-5"
          style={{ transform: animating ? "translateY(6px)" : "translateY(0)" }}
        >
          <div className="min-w-0">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#17854f]">Featured selection · {p.category}</p>
            <p className="truncate text-xl font-black tracking-[-0.04em] text-[#17211b] sm:text-2xl">{p.name}</p>
          </div>
          <p className="shrink-0 text-sm font-bold text-[#063f2a] sm:text-base">{p.priceLabel}</p>
        </div>

        <div className="mt-5 flex w-full items-center justify-between border-t border-[#17211b]/10 px-2 pt-4 sm:px-5">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17211b]/15 text-[#063f2a] transition hover:border-[#17854f]/40 hover:bg-white/70"
              aria-label="Previous featured product"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17211b]/15 text-[#063f2a] transition hover:border-[#17854f]/40 hover:bg-white/70"
              aria-label="Next featured product"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className="flex items-center gap-2" aria-label="Featured products">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Show featured product ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-7 bg-[#17854f]" : "w-1.5 bg-[#063f2a]/20 hover:bg-[#063f2a]/45"
                }`}
              />
            ))}
          </div>
          <span className="w-18 text-right text-[10px] font-semibold tabular-nums text-[#17211b]/45">0{current + 1} / 0{SLIDES.length}</span>
        </div>
      </div>
    </div>
  );
}
