export type Product = {
  id: string;
  name: string;
  image: string;
  image2?: string;
  basePrice: number;
  priceLabel: string;
  doses: string;
  meta: string;
  category: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "diazepam", name: "Diazepam",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.20_PM__2_-removebg-preview.png",
    image2: "/site images/WhatsApp_Image_2026-11-22_at_9.32.20_PM__2_-removebg-preview.png",
    basePrice: 12.70, priceLabel: "From $12.70", doses: "5mg / 10mg", meta: "28 tablets",
    category: "Anxiety & Sleep",
    description: "Diazepam belongs to the benzodiazepine family and acts on the brain and nerves (central nervous system) to produce a calming effect. It is used to treat anxiety, alcohol withdrawal, and seizures. It is also used to relieve muscle spasms and to provide sedation before medical procedures.",
    features: ["Fast-acting relief", "Available in 5mg and 10mg", "28 tablets per pack", "Prescription required"],
  },
  {
    id: "oxycodone", name: "Oxycodone",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.18_PM-removebg-preview.png",
    image2: "/site images/WhatsApp_Image_2026-11-22_at_9.32.18_PM-removebg-preview.png",
    basePrice: 10.75, priceLabel: "From $10.75", doses: "60mg / 80mg", meta: "56 tablets",
    category: "Pain Relief",
    description: "Oxycodone is a strong opioid painkiller used to treat severe pain that cannot be controlled with other pain medicines. It works by blocking pain signals in the brain and changing how your body feels and responds to pain.",
    features: ["Strong pain relief", "Available in 60mg and 80mg", "56 tablets per pack", "Extended release formula"],
  },
  {
    id: "xanax", name: "Xanax",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.19_PM__2_-removebg-preview.png",
    basePrice: 8.32, priceLabel: "From $8.32", doses: "2mg / 10mg", meta: "30 tablets",
    category: "Anxiety & Sleep",
    description: "Xanax (alprazolam) is a benzodiazepine medication used to treat anxiety disorders and panic disorder. It works by enhancing the effect of a natural chemical in the body (GABA) to produce a calming effect on the brain and nerves.",
    features: ["Rapid anxiety relief", "Available in 2mg and 10mg", "30 tablets per pack", "Clinically proven"],
  },
  {
    id: "zolpidex", name: "Zolpidex",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.19_PM__3_-removebg-preview.png",
    image2: "/site images/WhatsApp_Image_2026-11-22_at_9.32.22_PM__1_-removebg-preview.png",
    basePrice: 11.25, priceLabel: "From $11.25", doses: "5mg / 10mg", meta: "20 tablets",
    category: "Anxiety & Sleep",
    description: "Zolpidex (zolpidem) is a sedative used to treat insomnia. It helps you fall asleep faster and stay asleep longer. It works by slowing activity in the brain to allow sleep.",
    features: ["Promotes restful sleep", "Available in 5mg and 10mg", "20 tablets per pack", "Non-habit forming at prescribed doses"],
  },
  {
    id: "oxycotin-lp", name: "Oxycotin LP",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.22_PM__1_-removebg-preview.png",
    image2: "/site images/WhatsApp_Image_2026-11-22_at_9.32.22_PM__1_-removebg-preview.png",
    basePrice: 11.54, priceLabel: "From $11.54", doses: "30mg / 40mg / 80mg", meta: "",
    category: "Pain Relief",
    description: "OxyContin LP is a long-acting form of oxycodone used for around-the-clock treatment of severe pain. The LP (long-acting) formulation provides extended pain relief over 12 hours.",
    features: ["12-hour extended release", "Available in 30mg, 40mg, 80mg", "Consistent pain control", "Tamper-resistant formula"],
  },
  {
    id: "oxynorm", name: "Oxynorm",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.21_PM__3_-removebg-preview.png",
    basePrice: 10.43, priceLabel: "From $10.43", doses: "5mg / 10mg", meta: "",
    category: "Pain Relief",
    description: "Oxynorm is an immediate-release oxycodone used for the management of moderate to severe pain. It provides fast-acting relief and is often used alongside long-acting opioids for breakthrough pain.",
    features: ["Immediate release formula", "Available in 5mg and 10mg", "Fast-acting breakthrough pain relief", "Prescription required"],
  },
  {
    id: "dexafetamine", name: "Dexafetamine",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.21_PM__1_-removebg-preview.png",
    basePrice: 10.95, priceLabel: "From $10.95", doses: "5mg / 7.5mg / 10mg", meta: "",
    category: "Focus & Energy",
    description: "Dexamfetamine is a central nervous system stimulant used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy. It helps increase attention and decrease impulsiveness and hyperactivity.",
    features: ["Improves focus and concentration", "Available in 5mg, 7.5mg, 10mg", "Treats ADHD and narcolepsy", "Clinically tested"],
  },
  {
    id: "pregrablin", name: "Pregabalin (Lyrica)",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.20_PM__1_-removebg-preview.png",
    basePrice: 17.95, priceLabel: "From $17.95", doses: "300mg", meta: "",
    category: "Nerve Pain",
    description: "Pregabalin (Lyrica) is used to treat nerve pain caused by diabetes, shingles, or spinal cord injury. It is also used to treat fibromyalgia and seizures. It works by slowing down impulses in the brain that cause seizures and affects chemicals in the brain that send pain signals.",
    features: ["Effective nerve pain relief", "300mg capsules", "Also treats fibromyalgia", "FDA approved"],
  },
  {
    id: "tramal-sr", name: "Tramal SR",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.19_PM-removebg-preview.png",
    basePrice: 13.45, priceLabel: "From $13.45", doses: "200mg", meta: "",
    category: "Pain Relief",
    description: "Tramal SR (tramadol) is a slow-release opioid pain medication used to treat moderate to severe pain. The SR (slow release) formulation provides sustained pain relief over an extended period.",
    features: ["Slow-release formula", "200mg tablets", "12-hour pain relief", "Moderate to severe pain"],
  },
  {
    id: "zoplicon", name: "Zoplicon Tablet BP",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.22_PM-removebg-preview.png",
    image2: "/site images/WhatsApp_Image_2026-11-22_at_9.32.22_PM-removebg-preview.png",
    basePrice: 12.54, priceLabel: "From $12.54", doses: "7.5mg", meta: "",
    category: "Anxiety & Sleep",
    description: "Zoplicon (zopiclone) is a sleeping tablet used for the short-term treatment of insomnia. It helps you fall asleep more quickly and also helps stop you waking up during the night.",
    features: ["Promotes deep sleep", "7.5mg tablets", "Short-term insomnia treatment", "Non-benzodiazepine hypnotic"],
  },
  {
    id: "longtec", name: "Longtec",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.21_PM__2_-removebg-preview.png",
    basePrice: 8.56, priceLabel: "From $8.56", doses: "5mg / 10mg / 15mg / 20mg", meta: "56 tablets",
    category: "Pain Relief",
    description: "Longtec is a prolonged-release oxycodone hydrochloride tablet used for the management of severe pain requiring continuous, around-the-clock opioid treatment. Available in multiple strengths for tailored pain management.",
    features: ["Prolonged release", "4 strength options", "56 tablets per pack", "Around-the-clock pain control"],
  },
  {
    id: "doromin", name: "Doromin",
    image: "/site images/WhatsApp_Image_2026-11-22_at_9.32.23_PM-removebg-preview.png",
    basePrice: 14.95, priceLabel: "From $14.95", doses: "40mg", meta: "30 capsules",
    category: "Nerve Pain",
    description: "Doromin is used for the treatment of neuropathic pain associated with diabetic peripheral neuropathy and post-herpetic neuralgia. It works by inhibiting the reuptake of serotonin and norepinephrine.",
    features: ["Neuropathic pain relief", "40mg capsules", "30 capsules per pack", "Dual-action formula"],
  },
];

export const categories = ["All", "Pain Relief", "Anxiety & Sleep", "Nerve Pain", "Focus & Energy"];
