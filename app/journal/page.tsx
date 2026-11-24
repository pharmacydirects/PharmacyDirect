import Link from "next/link";

export const metadata = {
  title: "Journal | Pharmacy Direct",
  description: "Health insights, medication guides, and pharmacy news from the Pharmacy Direct team.",
};

const articles = [
  {
    tag: "Pain Management",
    title: "Understanding Long-Acting Opioids: What Patients Should Know",
    excerpt: "Extended-release opioid formulations offer consistent pain control for patients with chronic conditions. This guide explains how they work, their benefits over immediate-release options, and the importance of adherence to prescribed dosing schedules.",
    date: "12 Jan 2026",
    readTime: "5 min read",
  },
  {
    tag: "Anxiety & Sleep",
    title: "Benzodiazepines vs. Non-Benzodiazepine Hypnotics: A Comparison",
    excerpt: "Both drug classes are widely prescribed for anxiety and insomnia, but they differ significantly in mechanism, duration of action, and risk profile. We break down the key differences to help patients have more informed conversations with their doctors.",
    date: "28 Feb 2026",
    readTime: "6 min read",
  },
  {
    tag: "Nerve Pain",
    title: "Pregabalin for Neuropathic Pain: Clinical Evidence Reviewed",
    excerpt: "Pregabalin (Lyrica) has become a first-line treatment for several neuropathic pain conditions. We review the clinical evidence supporting its use, typical dosing protocols, and what patients can realistically expect from treatment.",
    date: "15 Mar 2026",
    readTime: "7 min read",
  },
  {
    tag: "Focus & Energy",
    title: "ADHD Medication in Adults: Navigating Treatment Options",
    excerpt: "Adult ADHD is increasingly recognised and treated. This article explores the stimulant and non-stimulant medications available, how they differ, and what the evidence says about long-term management.",
    date: "02 Apr 2026",
    readTime: "8 min read",
  },
  {
    tag: "Pharmacy Advice",
    title: "How to Store Your Medications Safely at Home",
    excerpt: "Improper storage can reduce the effectiveness of your medication or even make it harmful. Learn the correct storage conditions for common prescription medications and how to dispose of unused medicines responsibly.",
    date: "18 Apr 2026",
    readTime: "4 min read",
  },
  {
    tag: "Pain Management",
    title: "Tramadol: Uses, Dosage, and What to Expect",
    excerpt: "Tramadol is a widely prescribed opioid analgesic for moderate to severe pain. This guide covers its mechanism of action, available formulations including slow-release options, and important safety considerations.",
    date: "05 May 2026",
    readTime: "5 min read",
  },
  {
    tag: "Anxiety & Sleep",
    title: "Insomnia and Medication: When Short-Term Treatment Makes Sense",
    excerpt: "Sleep medications are often misunderstood. We explore when pharmacological intervention is appropriate, which medications are most commonly prescribed, and how to use them safely as part of a broader sleep strategy.",
    date: "20 May 2026",
    readTime: "6 min read",
  },
  {
    tag: "Pharmacy Advice",
    title: "Understanding Your Prescription: A Patient's Guide",
    excerpt: "Prescriptions contain important information that patients often overlook. This guide explains what each section of a prescription means, how to read dosage instructions, and what to do if something is unclear.",
    date: "10 Jun 2026",
    readTime: "4 min read",
  },
  {
    tag: "Nerve Pain",
    title: "Diabetic Neuropathy: Managing Pain with Medication",
    excerpt: "Peripheral neuropathy is one of the most common complications of diabetes. We review the medications most effective for managing diabetic nerve pain, including Pregabalin, Duloxetine, and Tramadol.",
    date: "25 Jun 2026",
    readTime: "7 min read",
  },
];

const tagColors: Record<string, string> = {
  "Pain Management": "bg-orange-50 text-orange-700 border-orange-200",
  "Anxiety & Sleep": "bg-blue-50 text-blue-700 border-blue-200",
  "Nerve Pain": "bg-purple-50 text-purple-700 border-purple-200",
  "Focus & Energy": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Pharmacy Advice": "bg-[#ddeadf] text-[#063f2a] border-[#17854f]/20",
};

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="bg-[#f4f6f1] text-[#17211b]">

      {/* Hero */}
      <div className="bg-[#063f2a] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#b9dbc5] mb-3">Health insights</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mb-5 max-w-2xl">
            The Pharmacy Direct Journal
          </h1>
          <p className="text-[#dce9df]/70 text-sm sm:text-base max-w-xl leading-relaxed">
            Evidence-based articles, medication guides, and pharmacy advice written by our team of registered pharmacists.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">

        {/* Featured article */}
        <div className="mb-12">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-5">Featured article</p>
          <div className="bg-[#fafbf7] border border-[#17211b]/8 p-8 sm:p-10 hover:shadow-lg transition-shadow">
            <span className={`text-[9px] font-black uppercase tracking-[0.18em] border px-2 py-1 self-start inline-block mb-4 ${tagColors[featured.tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
              {featured.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.04em] mb-4 max-w-2xl">{featured.title}</h2>
            <p className="text-sm text-[#17211b]/60 leading-relaxed max-w-2xl mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-[#17211b]/40 font-semibold">{featured.date}</span>
              <span className="text-[10px] text-[#17211b]/40">·</span>
              <span className="text-[10px] text-[#17211b]/40 font-semibold">{featured.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#17854f] mb-5">All articles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(({ tag, title, excerpt, date, readTime }) => (
            <article key={title} className="bg-[#fafbf7] border border-[#17211b]/8 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow group cursor-pointer">
              <span className={`text-[9px] font-black uppercase tracking-[0.18em] border px-2 py-1 self-start ${tagColors[tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                {tag}
              </span>
              <h3 className="font-black text-[#17211b] text-sm leading-snug group-hover:text-[#17854f] transition flex-1">{title}</h3>
              <p className="text-xs text-[#17211b]/55 leading-relaxed line-clamp-3">{excerpt}</p>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[10px] text-[#17211b]/35 font-semibold">{date}</span>
                <span className="text-[10px] text-[#17211b]/35">·</span>
                <span className="text-[10px] text-[#17211b]/35 font-semibold">{readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#063f2a] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] mb-4">Have a question about your medication?</h2>
          <p className="text-[#dce9df]/70 text-sm mb-8 max-w-md mx-auto">Our pharmacists are available to help. Reach out via WhatsApp for personalised advice.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#063f2a] font-black px-7 py-3.5 rounded-full text-sm hover:bg-[#ddeadf] transition">
            Contact our team →
          </Link>
        </div>
      </section>

    </div>
  );
}
