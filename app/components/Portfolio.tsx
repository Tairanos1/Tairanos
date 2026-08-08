import {
  FaRobot,
  FaGlobe,
  FaPenNib,
  FaDatabase,
  FaLanguage,
  FaPalette,
  FaFileAlt,
  FaSearch,
  FaChartLine,
  FaMicrophone,
} from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      icon: <FaRobot size={38} />,
      category: "AI SOLUTIONS",
      title: "AI Chatbot & Automation",
      desc: "AI-powered chatbots and business automation solutions designed to save time and improve customer support.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaGlobe size={38} />,
      category: "WEB DEVELOPMENT",
      title: "Business Websites",
      desc: "Modern, responsive and SEO-friendly websites built for businesses, startups and entrepreneurs worldwide.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaPenNib size={38} />,
      category: "CONTENT SERVICES",
      title: "Content & Blog Writing",
      desc: "Professional articles, blog posts, website content and product descriptions created for your audience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaDatabase size={38} />,
      category: "VIRTUAL ASSISTANCE",
      title: "Data Entry & Research",
      desc: "Accurate data entry, Excel, Google Sheets, web research and organized virtual assistant support.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaLanguage size={38} />,
      category: "TRANSLATION",
      title: "Bengali ↔ English",
      desc: "Clear and natural Bengali-English translation for websites, documents, articles and business content.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaPalette size={38} />,
      category: "DESIGN SERVICES",
      title: "Canva & Graphic Design",
      desc: "Professional social media posts, banners, promotional graphics and simple logo concepts.",
      color: "from-pink-500 to-violet-600",
    },
    {
      icon: <FaFileAlt size={38} />,
      category: "CAREER SERVICES",
      title: "Resume & Cover Letter",
      desc: "Professional resumes, CVs, cover letters and LinkedIn content designed to present your skills effectively.",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      icon: <FaSearch size={38} />,
      category: "SEO SERVICES",
      title: "SEO & Keyword Research",
      desc: "Keyword research and content optimization strategies designed to improve search visibility.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaChartLine size={38} />,
      category: "MARKETING",
      title: "Digital Marketing",
      desc: "Practical digital marketing strategies, content planning and online growth solutions.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaMicrophone size={38} />,
      category: "AI COMMUNICATION",
      title: "AI Voice Agent",
      desc: "AI-powered voice assistants designed to handle calls, inquiries and customer communication.",
      color: "from-cyan-500 to-violet-600",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#08101f] py-24 text-white"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            What We Can Deliver
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Digital Services Built
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              For Your Goals
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            From AI and web development to content, design, SEO and virtual
            assistance — choose the service that fits your needs.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={project.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 70}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-500/50
                hover:bg-white/[0.08]
                hover:shadow-[0_0_40px_rgba(6,182,212,.15)]
              "
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/30" />

              {/* Icon */}

              <div
                className={`
                  relative
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${project.color}
                  text-white
                  shadow-xl
                  transition
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                `}
              >
                {project.icon}
              </div>

              {/* Category */}

              <p className="mt-7 text-xs font-bold tracking-widest text-cyan-400">
                {project.category}
              </p>

              {/* Title */}

              <h3 className="mt-3 text-2xl font-bold">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-4 min-h-[90px] leading-7 text-gray-300">
                {project.desc}
              </p>

              {/* CTA */}

              <a
                href="#contact"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-cyan-400
                  transition-all
                  duration-300
                  hover:gap-4
                  hover:text-cyan-300
                "
              >
                Start a Project →
              </a>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-r
            from-cyan-500/10
            to-blue-600/10
            p-8
            text-center
          "
          data-aos="fade-up"
        >

          <h3 className="text-2xl font-bold sm:text-3xl">
            Have a different project in mind?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Tell us what you need. We can discuss a custom solution
            based on your goals, budget and requirements.
          </p>

          <a
            href="#contact"
            className="
              mt-6
              inline-flex
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-7
              py-3
              font-semibold
              text-white
              transition
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(6,182,212,.35)]
            "
          >
            Discuss Your Project →
          </a>

        </div>

      </div>
    </section>
  );
}