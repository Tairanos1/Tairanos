"use client";

import { useEffect, useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isBangla = language === "bn";

  // ================================
  // CLOSE MENU
  // ================================

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ================================
  // ESC KEY
  // ================================

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ================================
  // PREVENT BODY SCROLL
  // WHEN MOBILE MENU IS OPEN
  // ================================

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ================================
  // NAVIGATION ITEMS
  // ================================

  const navItems = [
    {
      href: "#home",
      en: "Home",
      bn: "হোম",
    },
    {
      href: "#services",
      en: "Services",
      bn: "সার্ভিস",
    },
    {
      href: "#portfolio",
      en: "Portfolio",
      bn: "পোর্টফোলিও",
    },
    {
      href: "#pricing",
      en: "Pricing",
      bn: "প্রাইসিং",
    },
    {
      href: "#contact",
      en: "Contact",
      bn: "যোগাযোগ",
    },
  ];

  // ================================
  // LANGUAGE CHANGE
  // ================================

  const changeLanguage = (lang: "en" | "bn") => {
    setLanguage(lang);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP + MOBILE NAVBAR
      ========================================================= */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[9999]
          w-full
          border-b
          border-white/10
          bg-[#0B1220]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <a
            href="#home"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-2
              select-none
            "
          >
            <img
              src="/tairanos-logo.png"
              alt="Tairanos"
              className="
                h-7
                w-auto
                object-contain
                sm:h-8
              "
            />

            <span
              className="
                text-2xl
                font-extrabold
                tracking-tight
                sm:text-3xl
              "
            >
              <span className="text-cyan-400">T</span>
              <span className="text-white">airanos</span>
            </span>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                "
              >
                {isBangla ? item.bn : item.en}
              </a>
            ))}
          </nav>

          {/* =====================================================
              DESKTOP RIGHT SIDE
          ===================================================== */}

          <div
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            {/* Language */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-1
              "
            >
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`
                  rounded-lg
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    language === "en"
                      ? "bg-cyan-500 text-black"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                GB English
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("bn")}
                className={`
                  rounded-lg
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    language === "bn"
                      ? "bg-cyan-500 text-black"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                BD বাংলা
              </button>
            </div>

            {/* Get Started */}

            <a
              href="#contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(6,182,212,.30)]
              "
            >
              {isBangla ? "শুরু করুন" : "Get Started"}
            </a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:bg-cyan-500/10
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}

      {isMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9998]
            bg-black/70
            backdrop-blur-sm
            lg:hidden
          "
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* =========================================================
          MOBILE FULL SCREEN MENU
      ========================================================= */}

      <div
        className={`
          fixed
          left-0
          top-[72px]
          z-[9998]
          h-[calc(100dvh-72px)]
          w-full
          overflow-y-auto
          overscroll-contain
          bg-[#0B1220]
          lg:hidden
          ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
          transition-all
          duration-300
        `}
      >
        <div className="mx-auto min-h-full max-w-xl px-5 py-7">
          {/* =====================================================
              MOBILE LANGUAGE BOX
          ===================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                px-2
                pb-3
                text-sm
                font-medium
                text-gray-400
              "
            >
              <FaGlobe className="text-cyan-400" />

              <span>
                {isBangla
                  ? "ভাষা নির্বাচন করুন"
                  : "Choose Language"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* English */}

              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  px-4
                  py-4
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  ${
                    language === "en"
                      ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                      : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.10]"
                  }
                `}
              >
                GB English
              </button>

              {/* Bangla */}

              <button
                type="button"
                onClick={() => changeLanguage("bn")}
                className={`
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  px-4
                  py-4
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  ${
                    language === "bn"
                      ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                      : "bg-white/[0.06] text-gray-300 hover:bg-white/[0.10]"
                  }
                `}
              >
                BD বাংলা
              </button>
            </div>
          </div>

          {/* =====================================================
              MOBILE NAVIGATION LINKS
          ===================================================== */}

          <nav className="mt-6">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    rounded-xl
                    px-5
                    text-lg
                    font-medium
                    text-gray-200
                    transition-all
                    duration-300
                    hover:bg-white/[0.05]
                    hover:pl-7
                    hover:text-cyan-400
                  "
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  {isBangla ? item.bn : item.en}
                </a>
              ))}
            </div>
          </nav>

          {/* =====================================================
              MOBILE GLOBAL TEXT
          ===================================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              px-5
              text-sm
              text-gray-400
            "
          >
            <FaGlobe className="text-cyan-400" />

            <span>
              {isBangla
                ? "বিশ্বব্যাপী ক্লায়েন্টদের জন্য"
                : "Serving Clients Worldwide"}
            </span>
          </div>

          {/* =====================================================
              MOBILE GET STARTED
          ===================================================== */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-6
              flex
              min-h-[60px]
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              text-lg
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(6,182,212,.30)]
            "
          >
            {isBangla
              ? "শুরু করুন →"
              : "Get Started →"}
          </a>

          {/* =====================================================
              MOBILE BOTTOM SPACE
          ===================================================== */}

          <div className="h-10" />
        </div>
      </div>
    </>
  );
}