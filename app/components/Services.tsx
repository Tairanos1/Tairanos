export default function Services() {
  const services = [
    {
      title: "AI Chatbot",
      desc: "২৪/৭ স্বয়ংক্রিয় কাস্টমার সাপোর্ট।",
      icon: "🤖",
    },
    {
      title: "Website Development",
      desc: "আধুনিক ও দ্রুত ব্যবসায়িক ওয়েবসাইট।",
      icon: "💻",
    },
    {
      title: "Voice Agent",
      desc: "AI দিয়ে ফোন কল অটোমেশন।",
      icon: "🎙️",
    },
    {
      title: "Business Automation",
      desc: "ম্যানুয়াল কাজ স্বয়ংক্রিয় করুন।",
      icon: "⚙️",
    },
    {
      title: "SEO Optimization",
      desc: "Google-এ আরও বেশি ভিজিটর পান।",
      icon: "📈",
    },
    {
      title: "Digital Marketing",
      desc: "Facebook ও Google বিজ্ঞাপন।",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-[#0B1220] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          আমাদের সেবাসমূহ
        </h2>

        <p className="mb-14 text-center text-gray-400">
          আপনার ব্যবসাকে আরও দ্রুত এগিয়ে নিতে আমাদের AI সমাধান।
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}