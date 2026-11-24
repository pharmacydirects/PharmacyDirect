"use client";
import Link from "next/link";
import Image from "next/image";
import { products } from "./components/products";
import HeroCarousel from "./components/HeroCarousel";
import { WaIcon } from "./components/Navbar";
import { useCart } from "./components/CartContext";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

const FEATURED = products.slice(0, 4);

const services = [
  { icon: "💊", title: "Prescription Medications", desc: "Genuine branded and generic medications dispensed safely and accurately." },
  { icon: "🚚", title: "Discreet Delivery", desc: "Plain packaging, fast dispatch. Your privacy is our priority." },
  { icon: "🩺", title: "Pharmacist Consultation", desc: "Speak directly with a qualified pharmacist via WhatsApp before ordering." },
  { icon: "🔒", title: "Secure Ordering", desc: "End-to-end encrypted checkout with multiple safe payment options." },
];



const journals = [
  {
    tag: "Pain Management",
    title: "Understanding Long-Acting Opioids: What Patients Should Know",
    excerpt: "A clear guide to how extended-release formulations work, their benefits, and safe usage practices.",
    date: "12 Jan 2026",
  },
  {
    tag: "Anxiety & Sleep",
    title: "Benzodiazepines vs. Non-Benzodiazepine Hypnotics: A Comparison",
    excerpt: "We break down the key differences between these two classes of sleep and anxiety medications.",
    date: "28 Feb 2026",
  },
  {
    tag: "Nerve Pain",
    title: "Pregabalin for Neuropathic Pain: Clinical Evidence Reviewed",
    excerpt: "An evidence-based look at how Pregabalin (Lyrica) performs in treating nerve pain conditions.",
    date: "15 Mar 2026",
  },
];

function MiniProductCard({ product }: { product: typeof products[0] }) {
  const { items, add, inc, dec } = useCart();
  const qty = items.find((i) => i.id === product.id)?.qty ?? 0;
  return (
    <article className="bg-[#fafbf7] border border-[#17211b]/8 flex flex-col group hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`} className="relative flex items-center justify-center bg-[#f4f6f1] overflow-hidden" style={{ height: 200 }}>
        <span className="absolute left-3 top-3 z-10 text-[9px] font-black uppercase tracking-[0.16em] text-[#063f2a] border border-[#063f2a]/10 bg-white/90 px-2 py-1">
          {product.category}
        </span>
        <Image src={product.image} alt={product.name} width={160} height={160}
          className="object-contain h-36 w-[80%] mix-blend-multiply group-hover:scale-[1.04] transition-transform duration-500" />
      </Link>
      <div className="flex flex-col flex-1 px-4 py-4 gap-2">
        <Link href={`/product/${product.id}`} className="text-[13px] font-extrabold text-[#17211b] uppercase tracking-wide leading-snug hover:text-[#17854f] transition-colors">
          {product.name}
        </Link>
        <p className="text-[11px] text-[#17211b]/45">{product.doses}</p>
        <p className="text-[#063f2a] font-black text-lg">{product.priceLabel}</p>
        <div className="mt-auto pt-3">
          {qty === 0 ? (
            <button onClick={() => add(product)}
              className="w-full border border-[#063f2a] text-[#063f2a] text-[11px] font-black tracking-[0.08em] uppercase py-2.5 hover:bg-[#063f2a] hover:text-white transition-all">
              Add to cart
            </button>
          ) : (
            <div className="flex items-center border border-[#063f2a] overflow-hidden">
              <button onClick={() => dec(product.id)} className="w-9 h-9 flex items-center justify-center text-[#063f2a] font-black text-xl hover:bg-[#ddeadf] transition-colors">−</button>
              <span className="flex-1 text-center text-sm font-extrabold text-[#17211b]">{qty}</span>
              <button onClick={() => inc(product.id)} className="w-9 h-9 flex items-center justify-center text-[#063f2a] font-black text-xl hover:bg-[#ddeadf] transition-colors">+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#f4f6f1]">
        <div className="pointer-events-none absolute -right-44 -top-56 h-[38rem] w-[38rem] rounded-full bg-[#ddeadf]/65 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
                <Link href="/store" className="inline-flex items-center justify-center gap-3 bg-[#063f2a] text-white font-bold px-6 sm:px-7 py-3.5 rounded-full text-sm hover:bg-[#0b5739] transition shadow-lg shadow-[#063f2a]/15">
                  Explore medications
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
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
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

     

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-16 sm:py-20 bg-[#fafbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-2">What we offer</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">Our Services</h2>
            </div>
            <Link href="/services" className="text-xs font-bold text-[#17854f] hover:underline underline-offset-4 shrink-0">View all services →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#17211b]/8 p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="font-black text-[#17211b] text-sm mb-2">{title}</h3>
                <p className="text-xs text-[#17211b]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-16 sm:py-20 bg-[#f4f6f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-2">The pharmacy collection</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">Featured Medications</h2>
            </div>
            <Link href="/store" className="text-xs font-bold text-[#17854f] hover:underline underline-offset-4 shrink-0">Browse all products →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#17211b]/10 border border-[#17211b]/10 overflow-hidden">
            {FEATURED.map((p) => (
              <div key={p.id} className="bg-[#fafbf7]">
                <MiniProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/store" className="inline-flex items-center gap-2 bg-[#063f2a] text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#0b5739] transition shadow-lg shadow-[#063f2a]/15">
              View all {products.length} medications
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 sm:py-20 bg-[#fafbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">Why Pharmacy Direct</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-6">A pharmacy built around your wellbeing</h2>
              <p className="text-[#17211b]/65 text-sm leading-relaxed mb-8">
                We combine the convenience of online ordering with the trust and expertise of a registered pharmacy. Every order is handled with care, every medication is verified for authenticity, and every customer receives personalised support.
              </p>
              <ul className="space-y-4">
                {[
                  ["Registered & regulated", "Fully compliant with pharmaceutical regulations and standards."],
                  ["Pharmacist-verified orders", "Every prescription is reviewed by a qualified pharmacist before dispatch."],
                  ["Plain, discreet packaging", "Your privacy matters. All orders ship in unmarked packaging."],
                  ["Real-time WhatsApp support", "Get answers fast from our dedicated support team."],
                ].map(([title, desc]) => (
                  <li key={title as string} className="flex gap-3">
                    <span className="w-5 h-5 shrink-0 mt-0.5 rounded-full bg-[#ddeadf] border border-[#17854f]/30 flex items-center justify-center text-[#17854f] text-[10px] font-black">✓</span>
                    <div>
                      <p className="text-sm font-bold text-[#17211b]">{title}</p>
                      <p className="text-xs text-[#17211b]/55 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-[#063f2a] border border-[#063f2a]/20 px-6 py-3 rounded-full hover:bg-[#063f2a] hover:text-white transition">
                Learn more about us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Pain Relief", count: products.filter(p => p.category === "Pain Relief").length },
                { label: "Anxiety & Sleep", count: products.filter(p => p.category === "Anxiety & Sleep").length },
                { label: "Nerve Pain", count: products.filter(p => p.category === "Nerve Pain").length },
                { label: "Focus & Energy", count: products.filter(p => p.category === "Focus & Energy").length },
              ].map(({ label, count }) => (
                <Link key={label} href="/store"
                  className="bg-[#f4f6f1] border border-[#17211b]/8 p-6 flex flex-col justify-between min-h-32 hover:border-[#17854f]/40 hover:bg-white transition group">
                  <p className="text-2xl font-black text-[#063f2a]">{count}</p>
                  <div>
                    <p className="text-sm font-bold text-[#17211b] group-hover:text-[#17854f] transition">{label}</p>
                    <p className="text-[10px] text-[#17211b]/40 mt-0.5">products available</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      <section className="py-16 sm:py-20 bg-[#f4f6f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-2">Health insights</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">From the Journal</h2>
            </div>
            <Link href="/journal" className="text-xs font-bold text-[#17854f] hover:underline underline-offset-4 shrink-0">Read all articles →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {journals.map(({ tag, title, excerpt, date }) => (
              <Link key={title} href="/journal" className="bg-[#fafbf7] border border-[#17211b]/8 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow group">
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#17854f] border border-[#17854f]/20 bg-[#ddeadf]/40 px-2 py-1 self-start">{tag}</span>
                <h3 className="font-black text-[#17211b] text-sm leading-snug group-hover:text-[#17854f] transition">{title}</h3>
                <p className="text-xs text-[#17211b]/55 leading-relaxed flex-1">{excerpt}</p>
                <p className="text-[10px] text-[#17211b]/35 font-semibold">{date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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

    </div>
  );
}
