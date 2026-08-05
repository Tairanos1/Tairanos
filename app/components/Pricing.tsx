import { FaCheckCircle, FaStar } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "৳9,999",
      desc: "Perfect for startups and small businesses.",
      popular: false,
      features: [
        "Modern Business Website",
        "AI Chatbot Setup",
        "Email Support",
        "Mobile Responsive",
      ],
    },
    {
      name: "Business",
      price: "৳24,999",
      desc: "Best choice for growing businesses.",
      popular: true,
      features: [
        "Premium Website",
        "AI Automation",
        "SEO Optimization",
        "Priority Support",
        "Analytics Dashboard",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored AI solutions for large companies.",
      popular: false,
      features: [
        "Custom AI Solution",
        "AI Voice Agent",
        "Advanced Automation",
        "Dedicated Support",
        "Unlimited Scalability",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#08101f] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Choose The Perfect
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Plan For Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Flexible pricing designed for startups, growing businesses and enterprise companies.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan, index) => (

            <div
              key={plan.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              p-8
              transition-all
              duration-300
              backdrop-blur-xl
              hover:-translate-y-3
              ${
                plan.popular
                  ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                  : "border-white/10 bg-white/5 hover:border-cyan-500 hover:bg-white/10"
              }
              `}
            >

              {plan.popular && (
                <div className="absolute right-5 top-5">
                  <span className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold text-black">
                    <FaStar />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-4 text-4xl font-extrabold text-cyan-400">
                  {plan.price}
                </div>

                <p className="mt-4 text-gray-300">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-cyan-400" />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              <button
                className={`
                mt-10
                w-full
                rounded-xl
                py-4
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                ${
                  plan.popular
                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }
                `}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}