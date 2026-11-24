import Link from "next/link";

export const metadata = {
  title: "Our Services | Pharmacy Direct",
  description: "Discover the full range of pharmacy services offered by Pharmacy Direct.",
};

const services = [
  {
    icon: "💊",
    title: "Prescription Medications",
    desc: "We dispense a comprehensive range of genuine branded and generic prescription medications. Every product is sourced from licensed manufacturers and verified by our pharmacists before dispatch.",
    features: ["Branded & generic options", "Pharmacist-verified", "Competitive pricing", "All categories covered"],
  },
  {
    icon: "🚚",
    title: "Discreet Home Delivery",
    desc: "All orders are shipped in plain, unmarked packaging with no indication of the contents. We offer standard and express delivery options to suit your schedule.",
    features: ["Plain packaging", "Standard & express options", "Real-time tracking", "Free delivery over $150"],
  },
  {
    icon: "🩺",
    title: "Pharmacist Consultation",
    desc: "Before placing an order, speak directly with one of our registered pharmacists via WhatsApp. Get professional advice on dosage, interactions, and suitability.",
    features: ["Qualified pharmacists", "WhatsApp consultations", "Dosage guidance", "Drug interaction checks"],
  },
  {
    icon: "🔒",
    title: "Secure Online Ordering",
    desc: "Our checkout is fully encrypted and PCI-compliant. We accept multiple payment methods and never store sensitive payment data on our servers.",
    features: ["SSL encrypted", "Multiple payment methods", "No stored card data", "Fraud protection"],
  },
  {
    icon: "📋",
    title: "Prescription Management",
    desc: "Upload your prescription securely and we handle the rest. Our system stores your prescription history for easy repeat ordering.",
    features: ["Secure upload", "Repeat ordering", "Prescription history", "Expiry reminders"],
  },
  {
    icon: "💬",
    title: "Ongoing Patient Support",
    desc: "Our support team is available throughout the week to assist with order queries, delivery updates, and medication questions.",
    features: ["WhatsApp & email support", "Order tracking", "Returns assistance", "Medication FAQs"],
  },
];

const process = [
  { step: "01", title: "Browse & Select", desc: "Find your medication in our online store and add it to your cart." },
  { step: "02", title: "Upload Prescription", desc: "Securely upload your valid prescription during checkout." },
  { step: "03", title: "Pharmacist Review", desc: "Our pharmacist verifies your prescription and prepares your order." },
  { step: "04", title: "Discreet Delivery", desc: "Your order is dispatched in plain packaging and delivered to your door." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Hero */}
      <div className="bg-[#063f2a] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#b9dbc5] mb-3">What we offer</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-5 max-w-2xl">
            Professional pharmacy services, delivered to your door.
          </h1>
          <p className="text-[#dce9df]/70 text-sm sm:text-base max-w-xl leading-relaxed">
            From prescription dispensing to personalised pharmacist consultations, we provide a complete pharmacy experience — online, discreet, and professional.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 sm:py-20 bg-[#fafbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">Everything you need</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">Our Full Service Range</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, features }) => (
              <div key={title} className="bg-white border border-[#17211b]/8 p-7 flex flex-col hover:shadow-md transition-shadow">
                <span className="text-4xl mb-5 block">{icon}</span>
                <h3 className="font-black text-[#17211b] text-base mb-3">{title}</h3>
                <p className="text-xs text-[#17211b]/60 leading-relaxed mb-5 flex-1">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#17211b]/70">
                      <span className="w-4 h-4 shrink-0 rounded-full bg-[#ddeadf] flex items-center justify-center text-[#17854f] text-[9px] font-black">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-[#f4f6f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">Simple process</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-[#fafbf7] border border-[#17211b]/8 p-7 relative">
                <span className="text-5xl font-black text-[#063f2a]/10 absolute top-4 right-5 leading-none">{step}</span>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#17854f] mb-3">Step {step}</p>
                <h3 className="font-black text-[#17211b] mb-2">{title}</h3>
                <p className="text-xs text-[#17211b]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#063f2a] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-4">Start your order today</h2>
          <p className="text-[#dce9df]/70 text-sm mb-8 max-w-md mx-auto">Browse our full medication range and experience pharmacy care done right.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/store" className="inline-flex items-center gap-2 bg-white text-[#063f2a] font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#ddeadf] transition">
              Browse the store →
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
