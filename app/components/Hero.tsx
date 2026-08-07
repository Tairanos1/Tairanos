"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1220] py-16 text-white md:py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-6 pb-16 pt-40 lg:flex-row">

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="max-w-2xl"
          data-aos="fade-right"
        >
          {/* Badge */}
          <span
            className="inline-flex animate-pulse rounded-full border border-blue-500 bg-blue-500/10 px-5 py-2 text-sm text-blue-400"
            data-aos="fade-right"
          >
            🚀 AI Automation Platform
          </span>

          {/* Heading */}
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Build Smarter Businesses
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With AI Automation
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Empower your business with AI-powered chatbots, smart websites,
            workflow automation and custom AI solutions designed to save time,
            reduce costs and accelerate growth.
          </p>

          {/* Services */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              🤖 AI Chatbot
            </span>

            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              🌐 Smart Website
            </span>

            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              ⚡ Automation
            </span>

            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              🎙️ Voice Agent
            </span>

            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              📈 SEO
            </span>

            <span
              className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-cyan-500/10"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              💼 Business Growth
            </span>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {/* Start Your Project */}
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 sm:flex-none"
            >
              Start Your Project →
            </a>

            {/* Book Free Consultation */}
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-gray-500 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white/5 sm:flex-none"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Trust Points */}
          <div
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span>✅ AI Powered</span>
            <span>✅ Fast Delivery</span>
            <span>✅ 24/7 Support</span>
          </div>
        </div>

        {/* ================= RIGHT AI VISUAL ================= */}
        <div
          className="flex items-center justify-center"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div
            className="flex h-72 w-72 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 shadow-2xl sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Image
              src="/tairanos-logo.png"
              alt="Tairanos Logo"
              width={380}
              height={380}
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}