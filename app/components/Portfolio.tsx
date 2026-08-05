import {
  FaRobot,
  FaGlobe,
  FaMicrophone,
  FaCogs,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      icon: <FaRobot size={40} />,
      title: "AI Chatbot",
      desc: "Intelligent chatbot for customer support and lead generation.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Smart Website",
      desc: "Fast, responsive and SEO-friendly business websites.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaMicrophone size={40} />,
      title: "AI Voice Agent",
      desc: "Human-like voice assistants for calls and automation.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Business Automation",
      desc: "Automate repetitive workflows and save valuable time.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "SEO & Marketing",
      desc: "Boost rankings and grow your online visibility.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaBrain size={40} />,
      title: "Custom AI Solution",
      desc: "Tailor-made AI systems built for your business.",
      color: "from-pink-500 to-violet-600",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#08101f] py-24 text-white"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Our Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            AI Projects That
            <br />
            <span className="text-cyan-400">
              Deliver Real Results
            </span>
          </h2>

          <p className="mt-5 text-gray-400">
            Discover some of the intelligent digital solutions we build for
            businesses worldwide.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
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
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-cyan-500
              hover:shadow-[0_0_40px_rgba(6,182,212,.25)]
              "
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl group-hover:bg-cyan-500/40 transition"></div>

              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                {project.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {project.desc}
              </p>

              <button
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-cyan-500/40
                px-5
                py-3
                font-semibold
                text-cyan-400
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-white
                hover:gap-4
                "
              >
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}