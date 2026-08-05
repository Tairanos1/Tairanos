"use client";

import CountUp from "react-countup";
import {
  FaUsers,
  FaRocket,
  FaHeadset,
  FaAward,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaUsers size={34} />,
      number: 100,
      suffix: "+",
      label: "Happy Clients",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaRocket size={34} />,
      number: 250,
      suffix: "+",
      label: "Projects Completed",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaHeadset size={34} />,
      number: 24,
      suffix: "/7",
      label: "AI Support",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <FaAward size={34} />,
      number: 99,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#08101f] py-24 text-white"
      data-aos="fade-up"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          className="mx-auto mb-16 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Trusted By
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Businesses Worldwide
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            We help companies automate workflows, increase productivity
            and accelerate growth through Artificial Intelligence.
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

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
              text-center
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-500
              hover:shadow-[0_0_40px_rgba(6,182,212,.25)]
              "
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition group-hover:bg-cyan-500/40"></div>

              {/* Icon */}

              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3 className="mt-8 text-5xl font-extrabold text-white">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              {/* Label */}

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}