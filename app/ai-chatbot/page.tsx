import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Chatbot Development | Tairanos",
  description:
    "Build powerful AI chatbots for your business with Tairanos. Automate customer support, generate leads, answer questions and grow your business 24/7.",
  keywords: [
    "AI Chatbot",
    "AI Chatbot Development",
    "Business Chatbot",
    "Customer Support Chatbot",
    "AI Automation",
    "Tairanos",
  ],
  alternates: {
    canonical: "https://www.tairanos.com/ai-chatbot",
  },
  openGraph: {
    title: "AI Chatbot Development | Tairanos",
    description:
      "AI-powered chatbots that automate customer support, generate leads and help businesses grow.",
    url: "https://www.tairanos.com/ai-chatbot",
    siteName: "Tairanos",
    type: "website",
  },
};

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Conversations",
    description:
      "Give your customers fast, natural and intelligent answers using modern AI technology.",
  },
  {
    icon: "⚡",
    title: "24/7 Customer Support",
    description:
      "Your chatbot can answer common questions and support customers day and night.",
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    description:
      "Capture customer information and turn website visitors into potential leads.",
  },
  {
    icon: "💬",
    title: "WhatsApp & Website",
    description:
      "Connect your chatbot with your website and customer communication channels.",
  },
  {
    icon: "📊",
    title: "Business Insights",
    description:
      "Understand customer questions and conversations to improve your business.",
  },
  {
    icon: "🔧",
    title: "Custom Solutions",
    description:
      "We build chatbot experiences around your business, services and customers.",
  },
];

const useCases = [
  "Customer support",
  "Online stores",
  "Real estate businesses",
  "Restaurants & food businesses",
  "Education & training",
  "Healthcare information",
  "Service businesses",
  "Lead generation",
];

export default function AIChatbotPage() {
  return (
    <main className="min-h-screen bg-[#070d1a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,190,218,0.14),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              ← Back to Tairanos
            </Link>

            <div className="mb-7 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              🤖 AI Chatbot Development
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Turn Your Website Into a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                24/7 AI Assistant
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
              Give your customers instant answers, automate repetitive
              questions and capture more leads with a smart AI chatbot built
              specifically for your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-center font-bold shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                Build My AI Chatbot →
              </Link>

              <Link
                href="/#services"
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-center font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-[#0a1222]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          <div className="px-5 py-8 text-center">
            <div className="text-3xl font-extrabold text-cyan-400">24/7</div>
            <div className="mt-2 text-sm text-gray-400">Availability</div>
          </div>

          <div className="px-5 py-8 text-center">
            <div className="text-3xl font-extrabold text-blue-400">AI</div>
            <div className="mt-2 text-sm text-gray-400">Powered</div>
          </div>

          <div className="border-t border-white/10 px-5 py-8 text-center sm:border-t-0">
            <div className="text-3xl font-extrabold text-purple-400">Fast</div>
            <div className="mt-2 text-sm text-gray-400">Responses</div>
          </div>

          <div className="border-t border-white/10 px-5 py-8 text-center sm:border-t-0">
            <div className="text-3xl font-extrabold text-cyan-400">Custom</div>
            <div className="mt-2 text-sm text-gray-400">Solutions</div>
          </div>
        </div>
      </section>

      {/* Why AI Chatbot */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Why Your Business Needs AI
          </div>

          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Stop Making Customers Wait
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Customers expect quick answers. An AI chatbot can handle common
            questions instantly while your team focuses on the work that
            matters most.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "⏱️",
              title: "Save Time",
              text: "Automate repetitive customer questions and reduce manual support work.",
            },
            {
              icon: "💰",
              title: "Reduce Costs",
              text: "Handle more customer conversations without increasing your support workload.",
            },
            {
              icon: "📈",
              title: "Grow Faster",
              text: "Respond to visitors quickly and capture opportunities before they disappear.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#101827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-[#0a1222]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Powerful Features
            </div>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              Everything Your AI Chatbot Needs
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We create chatbot solutions that are designed around your
              business goals and customer needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-[#101827] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Simple Process
          </div>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell Us Your Needs",
              text: "We learn about your business, customers, services and common questions.",
            },
            {
              number: "02",
              title: "We Build Your AI",
              text: "Our team designs and develops a chatbot tailored to your business.",
            },
            {
              number: "03",
              title: "Launch & Grow",
              text: "Your chatbot goes live and starts helping customers and generating opportunities.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-black text-cyan-400/15">
                {step.number}
              </div>

              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-y border-white/10 bg-[#0a1222]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Built For Businesses
            </div>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              Where Can You Use an AI Chatbot?
            </h2>

            <p className="mt-6 text-lg text-gray-400">
              From answering customer questions to generating leads, AI
              chatbots can support many different types of businesses.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-xl border border-white/10 bg-[#101827] px-5 py-4 text-center text-gray-200 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                ✓ {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,190,218,0.16),transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center sm:px-8">
          <div className="text-5xl">🤖</div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Ready to Build Your AI Chatbot?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Let Tairanos build a smart AI chatbot that helps your business
            save time, serve customers and grow faster.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-9 py-4 font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
            >
              Start Your Project →
            </Link>

            <a
              href="https://wa.me/8801341133374"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-500/40 bg-green-500/10 px-9 py-4 font-bold text-green-400 transition hover:bg-green-500/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer link */}
      <footer className="border-t border-white/10 bg-[#050a13] px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tairanos. AI Automation & Business
          Solutions.
        </p>

        <div className="mt-3 flex justify-center gap-5 text-sm">
          <Link
            href="/privacy"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            Terms
          </Link>

          <Link
            href="/"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            Home
          </Link>
        </div>
      </footer>
    </main>
  );
}