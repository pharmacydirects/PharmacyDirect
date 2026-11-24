import Link from "next/link";

export const metadata = {
  title: "About Us | Pharmacy Direct",
  description: "Learn about Pharmacy Direct — our mission, values, and the team behind your care.",
};

const team = [
  { name: "Dr. Sarah Nkosi", role: "Chief Pharmacist", bio: "Over 18 years of clinical pharmacy experience across hospital and retail settings." },
  { name: "James Okafor", role: "Head of Operations", bio: "Ensures every order is processed, verified, and dispatched with precision and care." },
  { name: "Priya Reddy", role: "Patient Support Lead", bio: "Dedicated to providing compassionate, knowledgeable support to every customer." },
  { name: "Marcus van der Berg", role: "Compliance Officer", bio: "Maintains our strict regulatory standards and pharmaceutical compliance protocols." },
];

const values = [
  { icon: "🎯", title: "Accuracy", desc: "Every order is double-checked by a qualified pharmacist before it leaves our facility." },
  { icon: "🤝", title: "Trust", desc: "We build lasting relationships with our patients through transparency and reliability." },
  { icon: "🔐", title: "Privacy", desc: "Your health information and orders are handled with the utmost confidentiality." },
  { icon: "💚", title: "Care", desc: "We treat every patient as an individual, not a transaction." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Hero */}
      <div className="bg-[#063f2a] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#b9dbc5] mb-3">Our story</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-5 max-w-2xl">
            A pharmacy built on trust, expertise, and genuine care.
          </h1>
          <p className="text-[#dce9df]/70 text-sm sm:text-base max-w-xl leading-relaxed">
            Pharmacy Direct was founded with a single purpose: to make safe, genuine medication accessible to everyone — with the professional support they deserve.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-[#fafbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">Our mission</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-6">Putting patients first, every single time.</h2>
              <p className="text-[#17211b]/65 text-sm leading-relaxed mb-4">
                We believe that access to quality medication should never be complicated. Since our founding, we have served thousands of patients across the country, providing genuine prescription medications with the care and professionalism of a trusted local pharmacy — delivered directly to your door.
              </p>
              <p className="text-[#17211b]/65 text-sm leading-relaxed mb-8">
                Our team of registered pharmacists reviews every order, ensuring accuracy, safety, and appropriateness before dispatch. We are fully regulated and committed to the highest standards of pharmaceutical practice.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#063f2a] text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#0b5739] transition">
                Explore our services →
              </Link>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2018", label: "Year founded" },
                { value: "12,000+", label: "Patients served" },
                { value: "4", label: "Registered pharmacists" },
                { value: "100%", label: "Genuine medication" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#f4f6f1] border border-[#17211b]/8 p-6 text-center">
                  <p className="text-3xl font-black text-[#063f2a] tracking-[-0.04em]">{value}</p>
                  <p className="text-xs text-[#17211b]/55 font-semibold mt-1 uppercase tracking-[0.1em]">{label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-[#f4f6f1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">What drives us</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#fafbf7] border border-[#17211b]/8 p-7 text-center hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="font-black text-[#17211b] mb-2">{title}</h3>
                <p className="text-xs text-[#17211b]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-16 sm:py-20 bg-[#fafbf7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-3">The people behind your care</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em]">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="bg-[#f4f6f1] border border-[#17211b]/8 p-6">
                <div className="w-14 h-14 rounded-full bg-[#063f2a] flex items-center justify-center mb-4">
                  <span className="text-white font-black text-lg">{name.charAt(0)}</span>
                </div>
                <h3 className="font-black text-[#17211b] text-sm">{name}</h3>
                <p className="text-[10px] font-bold text-[#17854f] uppercase tracking-[0.12em] mt-0.5 mb-3">{role}</p>
                <p className="text-xs text-[#17211b]/55 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#063f2a] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-4">Ready to experience the difference?</h2>
          <p className="text-[#dce9df]/70 text-sm mb-8 max-w-md mx-auto">Browse our full range of medications or get in touch with our team today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/store" className="inline-flex items-center gap-2 bg-white text-[#063f2a] font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#ddeadf] transition">
              Browse the store →
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
