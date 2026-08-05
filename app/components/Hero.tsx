import Image from "next/image";
export default function Hero() {
  return (
    <section  
       id="home" 
       className="relative overflow-hidden bg-[#0B1220] text-white py-16 md:py-24">
      
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-10 px-6 pt-40 pb-16 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl" 
         data-aos="fade-right"
        >

          <span className="inline-flex animate-pulse rounded-full border border-blue-500 bg-blue-500/10 px-5 py-2 text-sm text-blue-400" 
          data-aos="fade-right" 
          >
            🚀 AI Automation Platform
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl"
              data-aos="fade-up"
              data-aos-delay="100"  
          >
              Build Smarter Businesses
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With AI Automation
            </span>
          </h1>


          <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg"
             data-aos="fade-up"
             data-aos-delay="200" 
          >
              Empower your business with AI-powered chatbots, smart websites,
              workflow automation and custom AI solutions designed to save time,
              reduce costs and accelerate growth.
          </p>


          {/* Services */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm" 
                  data-aos="fade-up"
                  data-aos-delay="300" 
            >
              🤖 AI Chatbot
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              🌐 Smart Website
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              ⚡ Automation
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              🎙️ Voice Agent
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              📈 SEO
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              💼 Business Growth
            </span>

          </div>


          <div className="mt-10 flex w-full flex-row gap-4" 
               data-aos="zoom-in"
               data-aos-delay="400"  
          >

            <button className="flex-1 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 sm:w-auto">
              Start Your Project
            </button>

            <button className="flex-1 rounded-xl border border-gray-500 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/5 sm:w-auto">
              Book Free Consultation
            </button>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-400">
              <span>✅ AI Powered</span>
              <span>✅ Fast Delivery</span>
              <span>✅ 24/7 Support</span>
            </div>

          </div>

        </div>


        {/* Right AI Visual */}

        <div className="flex items-center justify-center" 
             data-aos="fade-left"
             data-aos-delay="300" 
        >

          <div className="animate-pulse flex h-72 w-72 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 shadow-2xl sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px]"
               data-aos="zoom-in"
               data-aos-delay="500" 
          >

            <Image
             src="/tairanos-logo.png" 
             alt="Tairanos Logo"
             width={380}
             height={380}
             className="drop-shadow-2xl object-contain"
          />

          </div>

        </div>


      </div>

    </section>
  );
}