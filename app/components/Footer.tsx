import Link from "next/link";
import { WaIcon } from "./Navbar";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

export default function Footer() {
  return (
    <footer className="bg-[#101711] text-[#b5beb7] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#063f2a] border border-[#17854f] flex items-center justify-center">
                <span className="text-white font-black text-sm">Rx</span>
              </div>
              <div>
                <span className="block text-white font-black text-base leading-none">Pharmacy</span>
                <span className="block text-[#83c19a] font-black text-base leading-none mt-1">Direct</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/40">
              Trusted online pharmacy delivering genuine medication with care, discretion, and speed.
            </p>
          </div>

          <div>
            <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-4">Quick Links</p>
            <ul className="space-y-2 text-xs">
              {[["Home", "/"], ["About", "/about"], ["Our Services", "/services"], ["Online Store", "/store"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-4">Information</p>
            <ul className="space-y-2 text-xs">
              {[["Journal", "/journal"], ["Contact", "/contact"], ["Privacy Policy", "#"], ["Terms of Service", "#"]].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white transition">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-4">Get in Touch</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#17854f] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#0b5739] transition mb-3">
              <WaIcon size={14} /> WhatsApp Us
            </a>
            <p className="text-xs text-white/40 mt-2">+27 860 027 800</p>
            <p className="text-xs text-white/40">support@pharmacydirect.com</p>
          </div>
        </div>
        <p className="text-center text-[11px] text-white/25 mt-6">© 2026 Pharmacy Direct. All rights reserved.</p>
      </div>
    </footer>
  );
}
