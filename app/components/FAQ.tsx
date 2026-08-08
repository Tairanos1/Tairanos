"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const questions = [
    {
      q: "What services does Tairanos provide?",
      a: "Tairanos provides AI automation, AI chatbots, website development, SEO, digital marketing, content services, translation, virtual assistance, AI voice solutions and custom digital services.",
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. Our services are designed for individuals, startups, small businesses and growing companies. We can recommend a solution based on your goals, budget and requirements.",
    },
    {
      q: "How long does a project take?",
      a: "Project timelines depend on the type, size and complexity of the work. After understanding your requirements, we can provide an estimated delivery timeline.",
    },
    {
      q: "Can you build custom AI solutions?",
      a: "Yes. We can develop customized AI chatbots, automation workflows, AI voice solutions and other digital systems based on your specific business requirements.",
    },
    {
      q: "Do you provide support after delivery?",
      a: "Support and maintenance can be arranged depending on the project and service requirements. We can discuss the appropriate support option before starting the project.",
    },
    {
      q: "How do I get started?",
      a: "Simply contact Tairanos through the Contact section and tell us about your project, goals and requirements. We will review your request and discuss the next steps with you.",
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

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Everything you need to know about Tairanos and our digital
            services.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-6">

          {questions.map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/60
                hover:bg-white/10
              "
            >

              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                aria-expanded={open === index}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
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
                    shrink-0
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
                      ? "max-h-96 px-7 pb-7"
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