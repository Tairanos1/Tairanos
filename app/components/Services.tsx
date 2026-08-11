"use client";

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

import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const isBangla = language === "bn";

  const services = [
    {
      icon: <FaRobot size={36} />,
      title: isBangla ? "AI ও অটোমেশন" : "AI & Automation",
      category: isBangla ? "AI সমাধান" : "AI Solutions",
      description: isBangla
        ? "AI চ্যাটবট, ইন্টেলিজেন্ট অ্যাসিস্ট্যান্ট এবং বিজনেস অটোমেশন সিস্টেমের মাধ্যমে সময় বাঁচান, কাজের চাপ কমান এবং ২৪/৭ কাস্টমার সাপোর্ট প্রদান করুন।"
        : "AI chatbots, intelligent assistants and business automation systems that help companies save time, reduce workload and serve customers 24/7.",
    },

    {
      icon: <FaGlobe size={36} />,
      title: isBangla ? "ওয়েব ও ই-কমার্স" : "Web & E-commerce",
      category: isBangla ? "ওয়েব ডেভেলপমেন্ট" : "Web Development",
      description: isBangla
        ? "ব্যবসা, স্টার্টআপ এবং উদ্যোক্তাদের জন্য আধুনিক, রেসপন্সিভ এবং SEO-friendly ওয়েবসাইট, ল্যান্ডিং পেজ ও ই-কমার্স স্টোর তৈরি করি।"
        : "Modern, responsive and SEO-friendly websites, landing pages and e-commerce stores designed for businesses, startups and entrepreneurs worldwide.",
    },

    {
      icon: <FaPenNib size={36} />,
      title: isBangla ? "কনটেন্ট ও ব্লগ রাইটিং" : "Content & Blog Writing",
      category: isBangla ? "কনটেন্ট সার্ভিস" : "Content Services",
      description: isBangla
        ? "আপনার অডিয়েন্সকে আকৃষ্ট করতে এবং ব্যবসার লক্ষ্য পূরণে সহায়তা করার জন্য মানসম্মত ব্লগ, ওয়েবসাইট কনটেন্ট, প্রোডাক্ট ডেসক্রিপশন ও ব্যবসায়িক লেখা তৈরি করি।"
        : "High-quality blog articles, website content, product descriptions and business content written to engage your audience and support your goals.",
    },

    {
      icon: <FaDatabase size={36} />,
      title: isBangla
        ? "ডাটা এন্ট্রি ও ভার্চুয়াল অ্যাসিস্ট্যান্ট"
        : "Data Entry & Virtual Assistant",
      category: isBangla
        ? "ভার্চুয়াল অ্যাসিস্ট্যান্স"
        : "Virtual Assistance",
      description: isBangla
        ? "নির্ভুল ডাটা এন্ট্রি, Excel ও Google Sheets ম্যানেজমেন্ট, ওয়েব রিসার্চ, ডাটা অর্গানাইজেশন এবং নির্ভরযোগ্য ভার্চুয়াল অ্যাসিস্ট্যান্ট সাপোর্ট।"
        : "Accurate data entry, Excel and Google Sheets management, web research, data organization and reliable virtual assistant support.",
    },

    {
      icon: <FaLanguage size={36} />,
      title: isBangla
        ? "বাংলা ↔ ইংরেজি অনুবাদ"
        : "Bengali ↔ English Translation",
      category: isBangla ? "অনুবাদ" : "Translation",
      description: isBangla
        ? "ওয়েবসাইট, ডকুমেন্ট, আর্টিকেল, ব্যবসায়িক যোগাযোগ, সাবটাইটেল এবং ডিজিটাল কনটেন্টের জন্য পরিষ্কার ও স্বাভাবিক বাংলা-ইংরেজি অনুবাদ।"
        : "Clear and natural Bengali-English translation for websites, documents, articles, business communication, subtitles and digital content.",
    },

    {
      icon: <FaPalette size={36} />,
      title: isBangla
        ? "Canva ও গ্রাফিক ডিজাইন"
        : "Canva & Graphic Design",
      category: isBangla ? "ডিজাইন সার্ভিস" : "Design Services",
      description: isBangla
        ? "সোশ্যাল মিডিয়া পোস্ট, ব্যানার, প্রমোশনাল গ্রাফিক্স, প্রেজেন্টেশন এবং সাধারণ লোগো কনসেপ্টের জন্য প্রফেশনাল Canva ডিজাইন।"
        : "Professional Canva designs, social media posts, banners, promotional graphics, presentations and simple logo concepts.",
    },

    {
      icon: <FaFileAlt size={36} />,
      title: isBangla
        ? "রিজিউমে ও কভার লেটার"
        : "Resume & Cover Letter",
      category: isBangla ? "ক্যারিয়ার সার্ভিস" : "Career Services",
      description: isBangla
        ? "আপনার দক্ষতা ও অভিজ্ঞতাকে সুন্দরভাবে উপস্থাপন করার জন্য প্রফেশনাল Resume, CV, Cover Letter এবং LinkedIn কনটেন্ট তৈরি করি।"
        : "Professional resumes, CVs, cover letters and LinkedIn content designed to present your skills clearly and professionally.",
    },

    {
      icon: <FaSearch size={36} />,
      title: isBangla
        ? "SEO ও কীওয়ার্ড রিসার্চ"
        : "SEO & Keyword Research",
      category: isBangla ? "SEO সার্ভিস" : "SEO Services",
      description: isBangla
        ? "ওয়েবসাইটের সার্চ ভিজিবিলিটি বাড়ানোর জন্য কীওয়ার্ড রিসার্চ, কনটেন্ট অপটিমাইজেশন, অন-পেজ SEO এবং কার্যকর SEO কৌশল।"
        : "Keyword research, content optimization, on-page SEO and practical strategies designed to improve your website's search visibility.",
    },

    {
      icon: <FaChartLine size={36} />,
      title: isBangla ? "ডিজিটাল মার্কেটিং" : "Digital Marketing",
      category: isBangla ? "মার্কেটিং সার্ভিস" : "Marketing Services",
      description: isBangla
        ? "ব্যবসা ও ব্র্যান্ডের জন্য ডিজিটাল মার্কেটিং স্ট্র্যাটেজি, সোশ্যাল মিডিয়া কনটেন্ট আইডিয়া, ক্যাম্পেইন প্ল্যানিং এবং অনলাইন গ্রোথ সলিউশন।"
        : "Digital marketing strategies, social media content ideas, campaign planning and online growth solutions for businesses and brands.",
    },

    {
      icon: <FaBolt size={36} />,
      title: isBangla
        ? "বিজনেস প্রসেস অটোমেশন"
        : "Business Process Automation",
      category: isBangla
        ? "বিজনেস সলিউশন"
        : "Business Solutions",
      description: isBangla
        ? "রিপিটিটিভ ওয়ার্কফ্লো, লিড ম্যানেজমেন্ট, কাস্টমার সাপোর্ট এবং দৈনন্দিন ব্যবসায়িক কাজ অটোমেট করে উৎপাদনশীলতা বাড়াতে সাহায্য করি।"
        : "Automate repetitive workflows, lead management, customer support and everyday business processes to improve productivity.",
    },

    {
      icon: <FaMicrophone size={36} />,
      title: isBangla ? "AI ভয়েস এজেন্ট" : "AI Voice Agent",
      category: isBangla
        ? "AI কমিউনিকেশন"
        : "AI Communication",
      description: isBangla
        ? "কল পরিচালনা, কাস্টমারের প্রশ্নের উত্তর, তথ্য সংগ্রহ এবং ব্যবসায়িক যোগাযোগে সহায়তার জন্য AI-powered voice assistant।"
        : "AI-powered voice assistants designed to handle calls, answer customer questions, collect information and support business communication.",
    },

    {
      icon: <FaCogs size={36} />,
      title: isBangla
        ? "কাস্টম ডিজিটাল সলিউশন"
        : "Custom Digital Solutions",
      category: isBangla ? "কাস্টম সার্ভিস" : "Custom Services",
      description: isBangla
        ? "আপনার নির্দিষ্ট প্রয়োজন, ওয়ার্কফ্লো, ব্যবসায়িক মডেল এবং দীর্ঘমেয়াদি গ্রোথ লক্ষ্য অনুযায়ী কাস্টম ডিজিটাল সমাধান তৈরি করি।"
        : "Tailored digital solutions built around your specific requirements, workflow, business model and long-term growth objectives.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B1220] px-4 py-24 text-white sm:px-6"
      data-aos="fade-up"
    >
      {/* ================= BACKGROUND GLOW ================= */}

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
            🌍 {isBangla ? "আমাদের সার্ভিসসমূহ" : "Our Services"}
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
            {isBangla ? (
              <>
                বিশ্বব্যাপী ক্লায়েন্টদের জন্য
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
                  ডিজিটাল সার্ভিস
                </span>
              </>
            ) : (
              <>
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
              </>
            )}
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
            {isBangla
              ? "AI, ওয়েব ডেভেলপমেন্ট, কনটেন্ট, ডিজাইন, SEO, অনুবাদ এবং ভার্চুয়াল অ্যাসিস্ট্যান্স থেকে শুরু করে Tairanos ব্যবসা, উদ্যোক্তা ও ব্যক্তিদের জন্য ব্যবহারিক ডিজিটাল সার্ভিস প্রদান করে।"
              : "From AI and website development to content, design, SEO, translation and virtual assistance — Tairanos provides practical digital services for businesses, entrepreneurs and individuals around the world."}
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
                  {isBangla ? "শুরু করুন" : "Get Started"}

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
              {isBangla
                ? "আপনার প্রয়োজনীয় সার্ভিস এখানে নেই?"
                : "Need a Service Not Listed Here?"}
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
              {isBangla
                ? "প্রতিটি প্রজেক্ট আলাদা। আপনার কী প্রয়োজন তা আমাদের জানান। আমরা আপনার ব্যবসা বা ব্যক্তিগত প্রজেক্টের জন্য একটি কার্যকর সমাধান নিয়ে আলোচনা করব।"
                : "Every project is different. Tell us what you need, and we'll discuss a practical solution for your business or personal project."}
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
              {isBangla
                ? "আপনার প্রজেক্ট নিয়ে আলোচনা করুন →"
                : "Discuss Your Project →"}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}