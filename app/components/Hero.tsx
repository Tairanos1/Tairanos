export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-12 px-6 pt-28 pb-16 lg:flex-row">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
            🚀 AI Automation Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Grow Your Business
            <br />
            <span className="text-blue-500">With AI</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tairanos helps businesses automate customer support,
            websites, AI chatbots and business workflows using
            modern artificial intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-500 px-7 py-4 font-semibold hover:border-blue-500">
              View Services
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="flex h-96 w-96 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-2xl">
            <span className="text-8xl">🤖</span>
          </div>
        </div>
      </div>
    </section>
  );
}