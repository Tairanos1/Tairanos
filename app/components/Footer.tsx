"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const isBangla = language === "bn";

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#070D18] text-white"
      data-aos="fade-up"
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/tairanos-logo.png"
                alt="Tairanos"
                width={45}
                height={45}
              />

              <h2 className="text-3xl font-bold">
                <span className="text-cyan-400">T</span>
                airanos
              </h2>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              {isBangla
                ? "Tairanos AI, ডিজিটাল এবং ব্যবসায়িক সমাধান প্রদান করে, যা সারা বিশ্বের ব্যবসাগুলোকে বৃদ্ধি, অটোমেশন এবং অনলাইনে সফল হতে সাহায্য করে।"
                : "Tairanos provides AI, digital and business solutions that help businesses around the world grow, automate and succeed online."}
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-4 text-gray-400">

              {/* Email */}

              <a
                href="mailto:tairanos8@gmail.com"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaEnvelope className="text-cyan-400" />

                <span>
                  tairanos8@gmail.com
                </span>
              </a>

              {/* Phone */}

              <a
                href="tel:+8801341133374"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaPhoneAlt className="text-cyan-400" />

                <span>
                  +8801341133374
                </span>
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/8801341133374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-green-400"
              >
                <FaWhatsapp className="text-green-400" />

                <span>
                  {isBangla ? "হোয়াটসঅ্যাপ" : "WhatsApp"}
                </span>
              </a>

              {/* Location */}

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-cyan-400" />

                <span>
                  {isBangla
                    ? "বাংলাদেশ • বিশ্বব্যাপী সেবা"
                    : "Bangladesh • Serving Worldwide"}
                </span>

              </div>

              {/* Worldwide */}

              <div className="flex items-center gap-3">

                <FaGlobe className="text-cyan-400" />

                <span>
                  {isBangla
                    ? "বিশ্বব্যাপী ডিজিটাল সেবা"
                    : "Worldwide Services"}
                </span>

              </div>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              {isBangla ? "দ্রুত লিংক" : "Quick Links"}
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-cyan-400"
                >
                  {isBangla ? "হোম" : "Home"}
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-cyan-400"
                >
                  {isBangla ? "সেবাসমূহ" : "Services"}
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="transition hover:text-cyan-400"
                >
                  {isBangla ? "পোর্টফোলিও" : "Portfolio"}
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-cyan-400"
                >
                  {isBangla ? "মূল্য" : "Pricing"}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-cyan-400"
                >
                  {isBangla ? "যোগাযোগ" : "Contact"}
                </a>
              </li>

            </ul>

          </div>


          {/* ================= SERVICES ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              {isBangla ? "আমাদের সেবাসমূহ" : "Our Services"}
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="transition hover:text-cyan-400">
                {isBangla ? "AI ও অটোমেশন" : "AI & Automation"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla ? "ওয়েবসাইট ডেভেলপমেন্ট" : "Website Development"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla
                  ? "কনটেন্ট ও ব্লগ রাইটিং"
                  : "Content & Blog Writing"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla
                  ? "ডাটা এন্ট্রি ও ভার্চুয়াল অ্যাসিস্ট্যান্ট"
                  : "Data Entry & Virtual Assistant"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla
                  ? "বাংলা ↔ ইংরেজি অনুবাদ"
                  : "Bengali ↔ English Translation"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla ? "গ্রাফিক ডিজাইন" : "Graphic Design"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla
                  ? "রেজুমে ও কভার লেটার"
                  : "Resume & Cover Letter"}
              </li>

              <li className="transition hover:text-cyan-400">
                {isBangla
                  ? "SEO ও কীওয়ার্ড রিসার্চ"
                  : "SEO & Keyword Research"}
              </li>

            </ul>

          </div>


          {/* ================= SOCIAL ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              {isBangla
                ? "আমাদের সাথে যুক্ত থাকুন"
                : "Connect With Us"}
            </h3>

            <p className="mb-6 leading-7 text-gray-400">
              {isBangla
                ? "Tairanos-কে ফলো করুন এবং আমাদের সর্বশেষ AI, ডিজিটাল ও ব্যবসায়িক সমাধান সম্পর্কে আপডেট থাকুন।"
                : "Follow Tairanos and stay updated with our latest AI, digital and business solutions."}
            </p>


            <div className="flex flex-wrap gap-4">

              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/1CdNaQ9wX4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  transition-all
                  hover:-translate-y-1
                  hover:bg-blue-600
                "
              >
                <FaFacebookF />
              </a>


              {/* GitHub */}

              <a
                href="https://github.com/Tairanos1/Tairanos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  transition-all
                  hover:-translate-y-1
                  hover:bg-gray-700
                "
              >
                <FaGithub />
              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/8801341133374"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  transition-all
                  hover:-translate-y-1
                  hover:bg-green-500
                "
              >
                <FaWhatsapp />
              </a>

            </div>


            {/* CTA */}

            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(6,182,212,.3)]
              "
            >
              {isBangla
                ? "প্রজেক্ট শুরু করুন →"
                : "Start a Project →"}
            </a>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-8
            text-center
          "
        >

          <p className="text-gray-500">

            © 2026{" "}

            <span className="text-cyan-400">
              Tairanos
            </span>

            {isBangla
              ? "। সর্বস্বত্ব সংরক্ষিত।"
              : ". All Rights Reserved."}

          </p>


          <p className="mt-2 text-sm text-gray-600">

            {isBangla
              ? "AI • ডিজিটাল • ব্যবসায়িক সমাধান • বিশ্বব্যাপী"
              : "AI • Digital • Business Solutions • Worldwide"}

          </p>


          {/* Legal Links */}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm">

            <a
              href="/terms"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              {isBangla
                ? "শর্তাবলি"
                : "Terms & Conditions"}
            </a>

            <span className="text-gray-700">
              •
            </span>

            <a
              href="/privacy"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              {isBangla
                ? "গোপনীয়তা নীতি"
                : "Privacy Policy"}
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}