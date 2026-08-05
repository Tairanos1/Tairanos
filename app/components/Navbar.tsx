"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

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
      fixed top-0 left-0 z-50 w-full
      border-b border-white/10
      bg-[#070D18]/80
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
            Tairanos
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">

          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
              relative
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

        {/* CTA Button */}
        <a
          href="#contact"
          className="
          hidden lg:inline-flex
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
          Free Consultation
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-300
        ${
          open
            ? "max-h-[500px] border-t border-white/10"
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

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
            mt-4
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
            "
          >
            Free Consultation
          </a>

        </div>
      </div>
    </nav>
  );
}