"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

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
              key={item.name}
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


        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          {/* Worldwide */}

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaGlobe className="text-cyan-400" />
            <span>Worldwide</span>
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
            Get Started
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
              ? "max-h-[600px] border-t border-white/10"
              : "max-h-0"
          }
        `}
      >

        <div className="space-y-2 bg-[#08101f] px-6 py-6">

          {menu.map((item) => (
            <a
              key={item.name}
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
              Serving Clients Worldwide
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
            Get Started
          </a>

        </div>

      </div>

    </nav>
  );
}