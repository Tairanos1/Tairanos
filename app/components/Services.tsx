import {
  FaRobot,
  FaGlobe,
  FaBolt,
  FaMicrophone,
  FaChartLine,
  FaCogs,
  FaPenNib,
  FaDatabase,
  FaLanguage,
  FaPalette,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaRobot size={36} />,
      title: "AI & Automation",
      category: "AI Solutions",
      description:
        "AI chatbots, intelligent assistants and business automation systems that help companies save time, reduce workload and serve customers 24/7.",
    },

    {
      icon: <FaGlobe size={36} />,
      title: "Web & E-commerce",
      category: "Web Development",
      description:
        "Modern, responsive and SEO-friendly websites, landing pages and e-commerce stores designed for businesses, startups and entrepreneurs worldwide.",
    },

    {
      icon: <FaPenNib size={36} />,
      title: "Content & Blog Writing",
      category: "Content Services",
      description:
        "High-quality blog articles, website content, product descriptions and business content written to engage your audience and support your goals.",
    },

    {
      icon: <FaDatabase size={36} />,
      title: "Data Entry & Virtual Assistant",
      category: "Virtual Assistance",
      description:
        "Accurate data entry, Excel and Google Sheets management, web research, data organization and reliable virtual assistant support.",
    },

    {
      icon: <FaLanguage size={36} />,
      title: "Bengali ↔ English Translation",
      category: "Translation",
      description:
        "Clear and natural Bengali-English translation for websites, documents, articles, business communication, subtitles and digital content.",
    },

    {
      icon: <FaPalette size={36} />,
      title: "Canva & Graphic Design",
      category: "Design Services",
      description:
        "Professional Canva designs, social media posts, banners, promotional graphics, presentations and simple logo concepts.",
    },

    {
      icon: <FaFileAlt size={36} />,
      title: "Resume & Cover Letter",
      category: "Career Services",
      description:
        "Professional resumes, CVs, cover letters and LinkedIn content designed to present your skills clearly and professionally.",
    },

    {
      icon: <FaSearch size={36} />,
      title: "SEO & Keyword Research",
      category: "SEO Services",
      description:
        "Keyword research, content optimization, on-page SEO and practical strategies designed to improve your website's search visibility.",
    },

    {
      icon: <FaChartLine size={36} />,
      title: "Digital Marketing",
      category: "Marketing Services",
      description:
        "Digital marketing strategies, social media content ideas, campaign planning and online growth solutions for businesses and brands.",
    },

    {
      icon: <FaBolt size={36} />,
      title: "Business Process Automation",
      category: "Business Solutions",
      description:
        "Automate repetitive workflows, lead management, customer support and everyday business processes to improve productivity.",
    },

    {
      icon: <FaMicrophone size={36} />,
      title: "AI Voice Agent",
      category: "AI Communication",
      description:
        "AI-powered voice assistants designed to handle calls, answer customer questions, collect information and support business communication.",
    },

    {
      icon: <FaCogs size={36} />,
      title: "Custom Digital Solutions",
      category: "Custom Services",
      description:
        "Tailored digital solutions built around your specific requirements, workflow, business model and long-term growth objectives.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1220] px-4 py-24 text-white sm:px-6"
      data-aos="fade-up"
    >
      {/* Background Glow */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        top-40
        h-96
        w-96
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-20
        h-96
        w-96
        rounded-full
        bg-blue-600/10
        blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-500/40
            bg-cyan-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-cyan-400
            "
            data-aos="fade-down"
          >
            🌍 Our Services
          </span>


          <h2
            className="
            mt-6
            text-3xl
            font-extrabold
            leading-tight
            sm:text-4xl
            md:text-5xl
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Digital Services for
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >
              Clients Worldwide
            </span>
          </h2>


          <p
            className="
            mt-6
            text-base
            leading-8
            text-gray-300
            sm:text-lg
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From AI and website development to content, design, SEO,
            translation and virtual assistance — Tairanos provides
            practical digital services for businesses, entrepreneurs
            and individuals around the world.
          </p>

        </div>


        {/* ================= SERVICES GRID ================= */}

        <div
          className="
          mt-16
          grid
          gap-7
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          "
        >

          {services.map((service, index) => (

            <div
              key={service.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 60}
              className="
              group
              relative
              flex
              min-h-[390px]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-7
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-500/50
              hover:bg-white/[0.08]
              hover:shadow-[0_20px_70px_rgba(6,182,212,.14)]
              "
            >

              {/* Card Glow */}

              <div
                className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-cyan-500/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-cyan-500/25
                "
              />


              {/* Number */}

              <div
                className="
                absolute
                right-5
                top-5
                text-xs
                font-bold
                text-white/20
                transition
                group-hover:text-cyan-400/40
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Icon */}

              <div
                className="
                relative
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-600/20
                text-cyan-400
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:bg-cyan-500/25
                "
              >
                {service.icon}
              </div>


              {/* Category */}

              <p
                className="
                mt-6
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-cyan-400
                "
              >
                {service.category}
              </p>


              {/* Title */}

              <h3
                className="
                mt-2
                text-xl
                font-bold
                leading-snug
                "
              >
                {service.title}
              </h3>


              {/* Description */}

              <p
                className="
                mt-4
                text-sm
                leading-7
                text-gray-300
                "
              >
                {service.description}
              </p>


              {/* CTA */}

              <div className="mt-auto pt-7">

                <a
                  href="/#contact"
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
                  Get Started
                  <span>→</span>
                </a>

              </div>

            </div>

          ))}

        </div>


        {/* ================= GLOBAL SERVICE CTA ================= */}

        <div
          className="
          relative
          mt-20
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-r
          from-cyan-500/10
          via-blue-500/10
          to-indigo-600/10
          p-8
          text-center
          sm:p-12
          "
          data-aos="fade-up"
        >

          {/* CTA Glow */}

          <div
            className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-40
            w-72
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-3xl
            "
          />


          <div className="relative">

            <div
              className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
              text-2xl
              "
            >
              🌍
            </div>


            <h3
              className="
              mt-6
              text-2xl
              font-bold
              sm:text-3xl
              "
            >
              Need a Service Not Listed Here?
            </h3>


            <p
              className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-gray-300
              "
            >
              Every project is different. Tell us what you need,
              and we'll discuss a practical solution for your
              business or personal project.
            </p>


            <a
              href="#contact"
              className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-7
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(6,182,212,.35)]
              "
            >
              Discuss Your Project →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}