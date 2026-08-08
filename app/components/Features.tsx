import {
  FaBrain,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBrain size={38} />,
      title: "Advanced AI Technology",
      description:
        "We leverage cutting-edge artificial intelligence to create smarter business solutions that boost efficiency and innovation.",
    },
    {
      icon: <FaBolt size={38} />,
      title: "Lightning Fast Automation",
      description:
        "Automate repetitive processes and save valuable time with intelligent workflows designed for maximum productivity.",
    },
    {
      icon: <FaShieldAlt size={38} />,
      title: "Enterprise Security",
      description:
        "Your business data stays protected with secure, reliable and scalable AI-powered infrastructure.",
    },
    {
      icon: <FaChartLine size={38} />,
      title: "Accelerated Growth",
      description:
        "Increase sales, improve customer experience and grow your business using data-driven AI solutions.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#0B1220] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Why Choose Tairanos?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Powerful AI For
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We combine Artificial Intelligence, Automation and Modern
            Technology to help businesses work smarter, grow faster and
            stay ahead of the competition.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (

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

              {/* Icon */}
              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-blue-600/20
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:rotate-12
                "
              >
                {feature.icon}
              </div>

              <h3 className="relative mt-7 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="relative mt-4 leading-7 text-gray-300">
                {feature.description}
              </p>

              <div className="relative mt-8">
                <a
                  href="#contact"
                  className="
                     inline-flex
                     items-center
                     gap-2
                     text-sm
                     font-semibold
                     text-cyan-400
                     transition-all
                     duration-300
                     hover:gap-3
                     hover:text-cyan-300
                     "
                  >
                      Learn More →
                </a>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}