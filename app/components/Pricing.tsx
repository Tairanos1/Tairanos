"use client";

import { FaCheckCircle, FaStar, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { language } = useLanguage();

  const isBangla = language === "bn";

  const plans = [
    {
      name: isBangla ? "স্টার্টার" : "Starter",
      price: "$99+",
      desc: isBangla
        ? "ব্যক্তি, স্টার্টআপ এবং ছোট ব্যবসার জন্য উপযুক্ত।"
        : "Perfect for individuals, startups and small businesses.",
      popular: false,
      features: isBangla
        ? [
            "বিজনেস ওয়েবসাইট",
            "বেসিক AI চ্যাটবট",
            "মোবাইল রেসপন্সিভ",
            "বেসিক SEO সেটআপ",
            "ইমেইল সাপোর্ট",
          ]
        : [
            "Business Website",
            "Basic AI Chatbot",
            "Mobile Responsive",
            "Basic SEO Setup",
            "Email Support",
          ],
    },
    {
      name: isBangla ? "বিজনেস" : "Business",
      price: "$299+",
      desc: isBangla
        ? "অটোমেশন এবং ডিজিটাল গ্রোথের জন্য দ্রুত বাড়তে থাকা ব্যবসার জন্য সেরা।"
        : "Best for growing businesses that need automation and digital growth.",
      popular: true,
      features: isBangla
        ? [
            "প্রিমিয়াম ওয়েবসাইট",
            "AI চ্যাটবট",
            "বিজনেস অটোমেশন",
            "SEO অপটিমাইজেশন",
            "কনটেন্ট ও মার্কেটিং সাপোর্ট",
            "প্রায়োরিটি সাপোর্ট",
          ]
        : [
            "Premium Website",
            "AI Chatbot",
            "Business Automation",
            "SEO Optimization",
            "Content & Marketing Support",
            "Priority Support",
          ],
    },
    {
      name: isBangla ? "প্রফেশনাল" : "Professional",
      price: "$599+",
      desc: isBangla
        ? "ব্যবসাকে আরও বড় পরিসরে নিয়ে যাওয়ার জন্য উন্নত ডিজিটাল সমাধান।"
        : "Advanced digital solutions for businesses ready to scale.",
      popular: false,
      features: isBangla
        ? [
            "অ্যাডভান্সড AI সমাধান",
            "AI ভয়েস এজেন্ট",
            "অ্যাডভান্সড অটোমেশন",
            "SEO ও কীওয়ার্ড রিসার্চ",
            "কাস্টম ডিজিটাল সমাধান",
            "ডেডিকেটেড সাপোর্ট",
          ]
        : [
            "Advanced AI Solutions",
            "AI Voice Agent",
            "Advanced Automation",
            "SEO & Keyword Research",
            "Custom Digital Solutions",
            "Dedicated Support",
          ],
    },
    {
      name: isBangla ? "এন্টারপ্রাইজ" : "Enterprise",
      price: isBangla ? "কাস্টম" : "Custom",
      desc: isBangla
        ? "উন্নত প্রয়োজনীয়তা সম্পন্ন কোম্পানির জন্য সম্পূর্ণ কাস্টমাইজড সমাধান।"
        : "Tailored solutions for companies with advanced requirements.",
      popular: false,
      features: isBangla
        ? [
            "কাস্টম AI সিস্টেম",
            "অ্যাডভান্সড AI অটোমেশন",
            "AI ভয়েস সলিউশন",
            "কাস্টম ওয়েব অ্যাপ্লিকেশন",
            "ডেডিকেটেড ডেভেলপমেন্ট",
            "আনলিমিটেড স্কেলেবিলিটি",
          ]
        : [
            "Custom AI Systems",
            "Advanced AI Automation",
            "AI Voice Solutions",
            "Custom Web Applications",
            "Dedicated Development",
            "Unlimited Scalability",
          ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#08101f] py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            <FaGlobe />

            {isBangla ? "আন্তর্জাতিক মূল্য" : "Global Pricing"}
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {isBangla ? (
              <>
                সহজ ও নমনীয়
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  সবার জন্য মূল্য
                </span>
              </>
            ) : (
              <>
                Simple & Flexible
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Pricing For Everyone
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {isBangla
              ? "স্টার্টআপ, উদ্যোক্তা, পেশাজীবী এবং বিশ্বব্যাপী ব্যবসার জন্য নমনীয় ডিজিটাল সার্ভিস।"
              : "Flexible digital services for startups, entrepreneurs, professionals and businesses worldwide."}
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            {isBangla
              ? "দেখানো মূল্য প্রাথমিক মূল্য। প্রজেক্টের পরিধি, জটিলতা এবং প্রয়োজনীয়তার ওপর চূড়ান্ত মূল্য নির্ভর করবে।"
              : "Prices shown are starting estimates. Final pricing depends on project scope, complexity and requirements."}
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {plans.map((plan, index) => (

            <div
              key={plan.name}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                p-8
                transition-all
                duration-500
                backdrop-blur-xl
                hover:-translate-y-3
                ${
                  plan.popular
                    ? `
                      border-cyan-500
                      bg-cyan-500/10
                      shadow-[0_0_45px_rgba(34,211,238,0.20)]
                    `
                    : `
                      border-white/10
                      bg-white/5
                      hover:border-cyan-500/50
                      hover:bg-white/[0.08]
                      hover:shadow-[0_0_40px_rgba(6,182,212,.12)]
                    `
                }
              `}
            >

              {/* Card Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

              {/* Popular Badge */}

              {plan.popular && (
                <div className="absolute right-5 top-5">

                  <span className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold text-black shadow-lg">
                    <FaStar />

                    {isBangla ? "সবচেয়ে জনপ্রিয়" : "MOST POPULAR"}
                  </span>

                </div>
              )}

              {/* Plan Name */}

              <div className="relative">

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                {/* Price */}

                <div className="mt-5 flex items-end gap-2">

                  <span className="text-4xl font-extrabold text-cyan-400">
                    {plan.price}
                  </span>

                </div>

                {/* Description */}

                <p className="mt-4 min-h-[80px] text-sm leading-7 text-gray-300">
                  {plan.desc}
                </p>

              </div>

              {/* Divider */}

              <div className="my-7 border-t border-white/10" />

              {/* Features */}

              <ul className="flex-1 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >

                    <FaCheckCircle className="mt-1 shrink-0 text-cyan-400" />

                    <span className="text-sm leading-6 text-gray-300">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              {/* CTA */}

              <a
                href="#contact"
                className={`
                  mt-10
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  py-4
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  ${
                    plan.popular
                      ? `
                        bg-cyan-500
                        text-black
                        hover:bg-cyan-400
                        hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
                      `
                      : `
                        bg-blue-600
                        text-white
                        hover:bg-blue-700
                        hover:shadow-[0_0_25px_rgba(37,99,235,.30)]
                      `
                  }
                `}
              >
                {isBangla ? "শুরু করুন →" : "Get Started →"}
              </a>

            </div>

          ))}

        </div>

        {/* ================= PRICING NOTE ================= */}

        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-5
            text-center
          "
          data-aos="fade-up"
        >

          <p className="text-sm leading-7 text-gray-400">

            💡{" "}
            {isBangla
              ? "ছোট কোনো কাজ বা কাস্টম সার্ভিস প্রয়োজন?"
              : "Need a smaller task or a custom service?"}

            <a
              href="#contact"
              className="ml-1 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              {isBangla ? "যোগাযোগ করুন" : "Contact us"}
            </a>

            {" "}

            {isBangla
              ? "আপনার জন্য ব্যক্তিগত কোটেশন তৈরি করা হবে।"
              : "for a personalized quote."}

          </p>

        </div>

      </div>
    </section>
  );
}