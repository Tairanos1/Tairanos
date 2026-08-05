"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.message);

    setLoading(false);

    if (res.ok) {
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1220] py-24 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Tell us about your project and we'll help you build powerful AI
            solutions that grow your business.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div
            data-aos="fade-right"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              We'd love to hear about your project.
              Contact us anytime and let's build something amazing together.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email
                  </p>

                  <p className="font-semibold">
                    tairanos8@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +8801746460832
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="font-semibold">
                    Bangladesh
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Form */}

          <div
            data-aos="fade-left"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                <FaPaperPlane />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}