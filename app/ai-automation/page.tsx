import Link from "next/link";

export const metadata = {
  title: "AI Automation Services | Tairanos",
  description:
    "Tairanos provides AI automation, AI chatbots, workflow automation, AI voice agents and custom AI solutions for businesses worldwide.",
};

const solutions = [
  {
    icon: "🤖",
    title: "AI Chatbot Development",
    description:
      "Build intelligent AI chatbots that answer customer questions, provide support and help your business stay available 24/7.",
  },
  {
    icon: "⚡",
    title: "Business Automation",
    description:
      "Automate repetitive tasks, workflows, lead management and customer support so your team can focus on important work.",
  },
  {
    icon: "🎙️",
    title: "AI Voice Agents",
    description:
      "AI-powered voice assistants that can handle calls, answer questions, collect information and support customer communication.",
  },
  {
    icon: "🔗",
    title: "Workflow Integration",
    description:
      "Connect your business tools and create automated workflows that move information between your systems efficiently.",
  },
  {
    icon: "📊",
    title: "AI Business Solutions",
    description:
      "Use practical AI solutions to improve productivity, reduce manual work and create better customer experiences.",
  },
  {
    icon: "🧠",
    title: "Custom AI Solutions",
    description:
      "Get a custom AI solution designed around your business model, workflow, requirements and long-term growth goals.",
  },
];

const benefits = [
  {
    icon: "⏱️",
    title: "Save Time",
    text: "Automate repetitive tasks and give your team more time for valuable work.",
  },
  {
    icon: "💰",
    title: "Reduce Costs",
    text: "Reduce manual work and improve operational efficiency with automation.",
  },
  {
    icon: "🚀",
    title: "Grow Faster",
    text: "Use AI-powered systems to improve productivity and support business growth.",
  },
  {
    icon: "🌍",
    title: "24/7 Support",
    text: "Give your customers access to intelligent assistance around the clock.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We learn about your business, challenges and goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We identify where AI and automation can create the most value.",
  },
  {
    number: "03",
    title: "Build",
    text: "We create and configure the solution around your requirements.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We help you deploy the solution and improve it as your business grows.",
  },
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none fixed right-[-180px] top-[500px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/tairanos-logo.png"
              alt="Tairanos"
              className="h-9 w-auto object-contain"
            />

            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-cyan-400">T</span>airanos
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white sm:block"
            >
              Home
            </Link>

            <Link
              href="/#services"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white sm:block"
            >
              Services
            </Link>

            <Link
              href="/#contact"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-400">
              🚀 AI Automation Platform
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Automate Your Business
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                With AI
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Turn repetitive work into automated workflows, deliver smarter
              customer support and build AI-powered systems that help your
              business work faster and grow more efficiently.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/25"
              >
                Start Your AI Project →
              </Link>

              <Link
                href="/#services"
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-500/5 sm:p-8">
              <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-cyan-500/20 bg-[#111A2C] p-6">
                  <div className="mb-4 text-4xl">🤖</div>
                  <h3 className="text-lg font-bold">AI Assistant</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Intelligent customer interaction and support.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-[#111A2C] p-6">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="text-lg font-bold">Automation</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Connect tasks and automate repetitive workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-500/20 bg-[#111A2C] p-6">
                  <div className="mb-4 text-4xl">📈</div>
                  <h3 className="text-lg font-bold">Growth</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Improve productivity and create better customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative border-t border-white/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              AI Solutions
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              AI Solutions Built for
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Real Business Needs
              </span>
            </h2>

            <p className="mt-5 text-gray-400">
              Practical AI solutions designed to solve real problems and
              improve the way businesses operate.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(6,182,212,0.10)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-3xl transition duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <Link
                  href="/#contact"
                  className="mt-6 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Discuss Your Project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-[#0D1729] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                Why AI Automation?
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                Work Smarter.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Grow Faster.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                AI automation can take care of repetitive processes while your
                team focuses on customers, strategy and growth.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold transition hover:scale-105"
              >
                Talk to Tairanos →
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h3 className="mt-4 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
              Our Process
            </span>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              From Idea to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Automation
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="text-sm font-extrabold text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-10 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-600/10 px-6 py-14 text-center sm:px-10">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-3xl">
              🚀
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Ready to Automate Your Business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Tell us what you want to automate. We will discuss your
              requirements and help you find a practical AI-powered solution.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
            >
              Start Your AI Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tairanos. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="transition hover:text-cyan-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms
            </Link>

            <Link
              href="/"
              className="transition hover:text-cyan-400"
            >
              Tairanos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}