export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Automation",
      desc: "AI অটোমেশনের মাধ্যমে আপনার ব্যবসার কাজ আরও দ্রুত সম্পন্ন করুন।",
    },
    {
      icon: "🤖",
      title: "Smart AI Chatbot",
      desc: "২৪/৭ স্বয়ংক্রিয় কাস্টমার সাপোর্ট দিয়ে বিক্রয় বৃদ্ধি করুন।",
    },
    {
      icon: "📈",
      title: "Business Growth",
      desc: "AI ব্যবহার করে আরও বেশি কাস্টমার ও আয় বৃদ্ধি করুন।",
    },
  ];

  return (
    <section className="bg-[#08101f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-5xl font-extrabold">
            কেন <span className="text-blue-500">Tairanos</span>?
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            আধুনিক AI প্রযুক্তি ব্যবহার করে আমরা আপনার ব্যবসাকে আরও দ্রুত,
            স্মার্ট এবং লাভজনক করে তুলতে সাহায্য করি।
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
                {item.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}