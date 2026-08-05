import {
  FaRobot,
  FaGlobe,
  FaBolt,
  FaMicrophone,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
export default function Services() {
  const services = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Chatbot Development",
    description:
      "Smart AI assistants that handle customer queries and improve your support system.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "AI Website Creation",
    description:
      "Modern fast websites with intelligent features designed for business growth.",
  },
  {
    icon: <FaBolt size={40} />,
    title: "Business Automation",
    description:
      "Automate daily tasks, reduce workload and increase productivity.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "AI Marketing Analytics",
    description:
      "Powerful AI insights to understand customers and make better decisions.",
  },
  {
    icon: <FaMicrophone size={40} />,
    title: "AI Voice Agent",
    description:
      "Natural AI voice assistants for calls and customer support.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Custom AI Solutions",
    description:
      "Tailored AI systems built specifically for your business needs.",
  },
];

  return (
    <section 
       id="services"
       className="bg-[#0B1220] px-4 py-16 text-white sm:px-6"
       data-aos="fade-up"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full border border-blue-500/50 bg-blue-500/10 px-5 py-2 text-sm text-blue-400"
                data-aos="fade-down"
          >
            Our Services
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              data-aos="fade-up"
              data-aos-delay="100"
          >
            AI Solutions That
            <br />
            <span className="text-blue-500">
              Grow Your Business
            </span>
          </h2>

          <p className="mt-5 text-gray-300"
             data-aos="fade-up"
             data-aos-delay="200" 
          >
            We build intelligent digital solutions that help businesses
            automate, grow and compete in the AI era.
          </p>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <div
              key={index} 
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              
              className="
              group relative overflow-hidden rounded-3xl
              border border-white/10
              bg-white/5 
              hover:bg-white/10
              p-8
              min-h-[350px] 
              cursor-pointer
              transition-all duration-300
              hover:-translate-y-3 
              hover:scale-[1.02]
              hover:border-cyan-500
              hover:shadow-2xl
              hover:shadow-cyan-500/20
              "
            >

              {/* Glow */}
              <div className="
              absolute -right-10 -top-10
              h-32 w-32 rounded-full
              bg-blue-500/20 blur-3xl
              group-hover:bg-blue-500/40
              ">
              </div>


              {/* Icon */}
              <div className="
               flex h-16 w-16 items-center justify-center
               rounded-2xl
               bg-gradient-to-br from-cyan-500/20 to-blue-600/20
               text-cyan-400
               transition duration-300
               group-hover:scale-125
               group-hover:rotate-12  
               group-hover:bg-cyan-500/20  
               "       
              >
                {service.icon}
              </div>


              <h3 className="mt-6 text-xl font-bold">
                {service.title}
              </h3>


              <p className="mt-4 text-sm leading-7 text-gray-300">
                {service.description}
              </p>


              <button 
                className="
                mt-6 inline-flex items-center gap-2
                text-sm font-semibold
                text-cyan-400
                transition-all duration-300
                hover:gap-3
                hover:text-cyan-300
                "
              >
                Learn More →
              </button>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}