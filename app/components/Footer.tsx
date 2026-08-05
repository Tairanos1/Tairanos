import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#070D18] text-white"
      data-aos="fade-up"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/tairanos-logo.png"
                alt="Tairanos"
                width={45}
                height={45}
              />

              <h2 className="text-3xl font-bold">
                <span className="text-cyan-400">T</span>airanos
              </h2>
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Empowering businesses with AI Automation, Smart Websites,
              Chatbots and intelligent digital solutions for the future.
            </p>

            <div className="mt-8 space-y-3 text-gray-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>tairanos8@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>+8801746460832</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Bangladesh</span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-cyan-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#pricing" className="transition hover:text-cyan-400">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="transition hover:text-cyan-400">
                AI Chatbots
              </li>

              <li className="transition hover:text-cyan-400">
                Smart Websites
              </li>

              <li className="transition hover:text-cyan-400">
                Business Automation
              </li>

              <li className="transition hover:text-cyan-400">
                Voice Agents
              </li>

              <li className="transition hover:text-cyan-400">
                SEO Optimization
              </li>

              <li className="transition hover:text-cyan-400">
                Custom AI Solutions
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Follow Us
            </h3>

            <p className="mb-6 text-gray-400">
              Stay connected with us through social media.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 <span className="text-cyan-400">Tairanos</span>. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Designed & Developed with ❤️ by Tairanos
          </p>

        </div>
      </div>
    </footer>
  );
}