export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "৳9,999",
      desc: "Small business শুরু করার জন্য",
      features: [
        "Basic Website",
        "AI Chatbot Setup",
        "Email Support",
      ],
    },
    {
      name: "Business",
      price: "৳24,999",
      desc: "Growing business এর জন্য",
      features: [
        "Premium Website",
        "AI Automation",
        "SEO Setup",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "বড় প্রতিষ্ঠানের জন্য",
      features: [
        "Custom AI Solution",
        "Voice Agent",
        "Advanced Automation",
      ],
    },
  ];

  return (
    <section className="bg-[#08101f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-400 font-semibold">
            PRICING
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            আমাদের প্যাকেজ
          </h2>

          <p className="mt-5 text-gray-400">
            আপনার ব্যবসার প্রয়োজন অনুযায়ী সঠিক পরিকল্পনা নির্বাচন করুন।
          </p>
        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-[#111827] p-8 hover:-translate-y-3 transition"
            >

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-5 text-4xl font-bold text-blue-400">
                {plan.price}
              </div>

              <p className="mt-4 text-gray-400">
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700">
                Get Started
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}