"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const questions = [
    {
      q: "What services does Tairanos provide?",
      a: "We provide AI Chatbots, AI Website Development, Business Automation, AI Voice Agents, SEO Optimization and custom AI solutions tailored to your business.",
    },
    {
      q: "Can small businesses use AI?",
      a: "Absolutely. Our AI solutions are designed for startups, small businesses and enterprises to improve efficiency and reduce operational costs.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most projects are completed within a few days to a few weeks depending on complexity and required features.",
    },
    {
      q: "Do you build custom AI solutions?",
      a: "Yes. We develop fully customized AI systems, automations and integrations based on your business requirements.",
    },
    {
      q: "Do you provide support after delivery?",
      a: "Yes. We offer ongoing maintenance, updates and technical support to ensure your solution continues running smoothly.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#08101f] py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            <FaQuestionCircle />
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Everything you need to know about our AI solutions and services.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-6">

          {questions.map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500
                hover:bg-white/10
              "
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-7
                  text-left
                "
              >
                <h3 className="text-lg font-semibold md:text-xl">
                  {item.q}
                </h3>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                  "
                >
                  {open === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    open === index
                      ? "max-h-96 pb-7 px-7"
                      : "max-h-0"
                  }
                `}
              >
                <p className="leading-8 text-gray-300">
                  {item.a}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}