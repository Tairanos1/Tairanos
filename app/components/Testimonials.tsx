import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "AI Automation",
      role: "Business Efficiency",
      review:
        "Automate repetitive tasks, improve customer support and give your team more time to focus on important business activities.",
    },
    {
      name: "Modern Websites",
      role: "Digital Presence",
      review:
        "Build responsive, professional and SEO-friendly websites designed to give businesses a strong online presence.",
    },
    {
      name: "Digital Growth",
      role: "Business Development",
      review:
        "Use practical AI, SEO, content and digital solutions to improve your online presence and support long-term business growth.",
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
            Why Businesses Choose Tairanos
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Built For
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real Business Needs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tairanos combines AI, automation and modern digital services
            to help businesses work smarter, improve their online presence
            and achieve their goals.
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

              <FaQuoteLeft
                className="relative text-4xl text-cyan-400 opacity-80"
              />

              {/* Stars */}

              <div className="relative mt-5 flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Description */}

              <p className="relative mt-6 leading-8 text-gray-300 italic">
                    &quot;{item.review}&quot;
              </p>

              {/* Service */}

              <div className="relative mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400">
                  <FaUserCircle size={36} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-cyan-400">
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