"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const isBangla = language === "bn";

  const menu = [
    {
      name: isBangla ? "হোম" : "Home",
      href: "#home",
    },
    {
      name: isBangla ? "সেবাসমূহ" : "Services",
      href: "#services",
    },
    {
      name: isBangla ? "পোর্টফোলিও" : "Portfolio",
      href: "#portfolio",
    },
    {
      name: isBangla ? "মূল্য" : "Pricing",
      href: "#pricing",
    },
    {
      name: isBangla ? "যোগাযোগ" : "Contact",
      href: "#contact",
    },
  ];

  const handleLanguageChange = (lang: "en" | "bn") => {
    setLanguage(lang);
  };

  return (
    <nav
      className="
        fixed left-0 top-0 z-50 w-full
        border-b border-white/10
        bg-[#070D18]/85
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/tairanos-logo.png"
            alt="Tairanos"
            width={42}
            height={42}
            className="rounded-xl"
          />

          <span className="text-2xl font-bold tracking-wide text-white">
            <span className="text-cyan-400">T</span>airanos
          </span>
        </a>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-7 lg:flex">

          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-gray-300
                transition
                duration-300
                hover:text-cyan-400

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* Desktop Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          {/* Language Switcher */}

          <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">

            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`
                rounded-lg px-3 py-2 text-sm font-semibold
                transition-all duration-300
                ${
                  language === "en"
                    ? "bg-cyan-500 text-black"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => handleLanguageChange("bn")}
              className={`
                rounded-lg px-3 py-2 text-sm font-semibold
                transition-all duration-300
                ${
                  language === "bn"
                    ? "bg-cyan-500 text-black"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              বাংলা
            </button>

          </div>

          {/* Worldwide */}

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaGlobe className="text-cyan-400" />

            <span>
              {isBangla ? "বিশ্বব্যাপী" : "Worldwide"}
            </span>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(6,182,212,.45)]
            "
          >
            {isBangla ? "শুরু করুন" : "Get Started"}
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="
            text-2xl
            text-white
            transition
            hover:text-cyan-400
            lg:hidden
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          lg:hidden

          ${
            open
              ? "max-h-[700px] border-t border-white/10"
              : "max-h-0"
          }
        `}
      >

        <div className="space-y-2 bg-[#08101f] px-6 py-6">

          {/* Mobile Language Switcher */}

          <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-2">

            <div className="mb-2 flex items-center gap-2 px-2 text-sm text-gray-400">
              <FaGlobe className="text-cyan-400" />

              <span>
                {isBangla
                  ? "ভাষা নির্বাচন করুন"
                  : "Choose Language"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">

              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  ${
                    language === "en"
                      ? "bg-cyan-500 text-black"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                  }
                `}
              >
                🇬🇧 English
              </button>

              <button
                type="button"
                onClick={() => handleLanguageChange("bn")}
                className={`
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  ${
                    language === "bn"
                      ? "bg-cyan-500 text-black"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-cyan-400"
                  }
                `}
              >
                🇧🇩 বাংলা
              </button>

            </div>

          </div>

          {/* Mobile Navigation */}

          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                block
                rounded-xl
                px-4
                py-3
                text-gray-300
                transition
                hover:bg-white/5
                hover:text-cyan-400
              "
            >
              {item.name}
            </a>
          ))}

          {/* Worldwide */}

          <div className="flex items-center gap-2 px-4 py-3 text-sm text-gray-400">

            <FaGlobe className="text-cyan-400" />

            <span>
              {isBangla
                ? "বিশ্বব্যাপী ক্লায়েন্টদের জন্য সেবা"
                : "Serving Clients Worldwide"}
            </span>

          </div>

          {/* Mobile CTA */}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              mt-3
              flex
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
            "
          >
            {isBangla
              ? "শুরু করুন"
              : "Get Started"}
          </a>

        </div>

      </div>

    </nav>
  );
}