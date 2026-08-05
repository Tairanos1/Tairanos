import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Business Owner",
      review:
        "Tairanos transformed our customer support with AI automation. We now save hours every day and our clients are happier than ever.",
    },
    {
      name: "Sara Khan",
      role: "Marketing Manager",
      review:
        "The AI chatbot and automation system significantly improved our productivity. Highly recommended for growing businesses.",
    },
    {
      name: "David Smith",
      role: "Startup Founder",
      review:
        "Professional team, modern technology and excellent support. Tairanos truly understands AI-powered business solutions.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#0B1220] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Trusted By
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Businesses Worldwide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover why companies choose Tairanos to automate their
            business, improve customer experience and accelerate growth.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-cyan-500
                hover:bg-white/10
                hover:shadow-[0_0_35px_rgba(34,211,238,0.20)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-36
                  w-36
                  rounded-full
                  bg-cyan-500/20
                  blur-3xl
                  transition
                  duration-300
                  group-hover:bg-cyan-500/40
                "
              />

              {/* Quote */}
              <FaQuoteLeft className="relative text-4xl text-cyan-400 opacity-80" />

              {/* Stars */}
              <div className="relative mt-5 flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="relative mt-6 leading-8 text-gray-300 italic">
                "{item.review}"
              </p>

              {/* User */}

              <div className="relative mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400">
                  <FaUserCircle size={36} />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}