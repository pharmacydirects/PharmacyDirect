"use client";
import { useState } from "react";
import { WaIcon } from "../components/Navbar";

const WA = "https://api.whatsapp.com/send/?phone=27860027800";

const faqs = [
  { q: "Do I need a prescription to order?", a: "Yes. All prescription medications require a valid prescription from a registered healthcare provider. You can upload your prescription securely during checkout." },
  { q: "How long does delivery take?", a: "Standard delivery takes 3–5 business days. Express delivery is available at checkout and typically arrives within 1–2 business days." },
  { q: "Is my order packaged discreetly?", a: "Absolutely. All orders are shipped in plain, unmarked packaging with no indication of the contents on the outside." },
  { q: "Can I speak to a pharmacist before ordering?", a: "Yes. You can reach our pharmacists directly via WhatsApp at +27 860 027 800 before placing your order." },
  { q: "What payment methods do you accept?", a: "We accept major credit and debit cards, EFT, and select digital payment methods. All transactions are SSL encrypted." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Hero */}
      <div className="bg-[#063f2a] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#b9dbc5] mb-3">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-5 max-w-2xl">
            We&apos;re here to help.
          </h1>
          <p className="text-[#dce9df]/70 text-sm sm:text-base max-w-xl leading-relaxed">
            Whether you have a question about an order, need pharmacist advice, or just want to get in touch — our team is ready to assist.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact info */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-6">Contact details</p>

            <div className="space-y-5 mb-10">
              {[
                { icon: "📱", label: "WhatsApp", value: "+27 860 027 800", href: WA },
                { icon: "📧", label: "Email", value: "support@pharmacydirect.com", href: "mailto:support@pharmacydirect.com" },
                { icon: "🕐", label: "Support hours", value: "Mon–Fri: 8am – 6pm · Sat: 9am – 2pm", href: null },
                { icon: "📦", label: "Order queries", value: "orders@pharmacydirect.com", href: "mailto:orders@pharmacydirect.com" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 bg-[#fafbf7] border border-[#17211b]/8 p-5">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#17854f] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#17211b] hover:text-[#17854f] transition">{value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[#17211b]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#063f2a] text-white font-black px-7 py-4 rounded-full text-sm hover:bg-[#0b5739] transition shadow-lg">
              <WaIcon size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-6">Send us a message</p>
            {sent ? (
              <div className="bg-[#ddeadf] border border-[#17854f]/30 p-8 text-center">
                <span className="text-4xl block mb-4">✅</span>
                <h3 className="font-black text-[#063f2a] text-lg mb-2">Message sent!</h3>
                <p className="text-sm text-[#17211b]/65">We&apos;ll get back to you within 1 business day. For urgent queries, please WhatsApp us directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email address", type: "email", placeholder: "your@email.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-[0.14em] text-[#17211b]/70 mb-1.5">{label}</label>
                    <input id={id} type={type} placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full border border-[#17211b]/12 bg-[#fafbf7] px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#17854f]/10 focus:border-[#17854f] transition" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.14em] text-[#17211b]/70 mb-1.5">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us more about your query..." required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#17211b]/12 bg-[#fafbf7] px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-[#17854f]/10 focus:border-[#17854f] transition resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#063f2a] text-white font-black py-4 text-sm hover:bg-[#0b5739] transition tracking-[0.06em] uppercase">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16 sm:mt-20">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">Common questions</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] mb-8">Frequently Asked Questions</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#fafbf7] border border-[#17211b]/8 p-6">
                <h3 className="font-black text-[#17211b] text-sm mb-2">{q}</h3>
                <p className="text-xs text-[#17211b]/60 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
