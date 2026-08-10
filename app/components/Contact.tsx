"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGlobe,
  FaBriefcase,
  FaDollarSign,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setForm({
          name: "",
          email: "",
          country: "",
          service: "",
          budget: "",
          message: "",
        });

        setSubmitted(true);
      } else {
        alert(
          data.message ||
            "❌ Failed to send your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1220] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            <FaGlobe />
            Work With Us Worldwide
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Let's Build Something
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tell us about your project, business or idea.
            Tairanos provides digital services for clients worldwide.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div
            data-aos="fade-right"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Whether you need a website, AI solution, content,
              SEO, design, translation or virtual assistance,
              tell us what you need and we'll help you find the right solution.
            </p>

            <div className="mt-10 space-y-5">

              {/* Email */}
              <a
                href="mailto:tairanos8@gmail.com"
                className="flex items-center gap-5 rounded-2xl bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
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
              </a>

              {/* Phone */}
              <a
                href="tel:+8801341133374"
                className="flex items-center gap-5 rounded-2xl bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +8801341133374
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801341133374"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-2xl bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaWhatsapp size={23} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    WhatsApp
                  </p>

                  <p className="font-semibold">
                    +8801341133374
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Based In
                  </p>

                  <p className="font-semibold">
                    Bangladesh • Serving Worldwide
                  </p>
                </div>
              </div>

              {/* Worldwide */}
              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-6">

                <div className="flex items-center gap-3 text-cyan-400">
                  <FaGlobe />

                  <span className="font-semibold">
                    Serving Clients Worldwide
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  We work with businesses, entrepreneurs and individuals
                  from different countries and time zones.
                </p>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-left"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            {submitted ? (

              /* SUCCESS SCREEN */
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 shadow-[0_0_40px_rgba(6,182,212,.20)]">
                  <FaCheckCircle size={52} />
                </div>

                <h3 className="mt-8 text-3xl font-extrabold sm:text-4xl">
                  Request Received!
                </h3>

                <p className="mt-5 max-w-md text-lg leading-8 text-gray-300">
                  Thank you for contacting Tairanos.
                  Your project request has been received successfully.
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                  We'll review your requirements and get back to you
                  as soon as possible.
                </p>

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4 text-sm text-cyan-300">
                  📩 Please check your email for our response.
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,.30)]"
                >
                  Send Another Request
                </button>

              </div>

            ) : (

              /* CONTACT FORM */
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500"
                />

                {/* Email */}
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500"
                />

                {/* Country */}
                <div className="relative">
                  <FaGlobe className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />

                  <input
                    type="text"
                    required
                    placeholder="Country"
                    value={form.country}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        country: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/20 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <FaBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />

                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#101827] py-4 pl-12 pr-5 text-white outline-none transition focus:border-cyan-500"
                  >
                    <option value="">
                      Select a Service
                    </option>

                    <option value="AI & Automation">
                      AI & Automation
                    </option>

                    <option value="Web & E-commerce">
                      Web & E-commerce
                    </option>

                    <option value="Content & Blog Writing">
                      Content & Blog Writing
                    </option>

                    <option value="Virtual Assistant & Data Entry">
                      Virtual Assistant & Data Entry
                    </option>

                    <option value="Translation">
                      Bengali ↔ English Translation
                    </option>

                    <option value="Graphic Design">
                      Canva & Graphic Design
                    </option>

                    <option value="Resume & Cover Letter">
                      Resume & Cover Letter
                    </option>

                    <option value="SEO">
                      SEO & Keyword Research
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="AI Voice Agent">
                      AI Voice Agent
                    </option>

                    <option value="Other">
                      Other / Custom Service
                    </option>
                  </select>
                </div>

                {/* Budget */}
                <div className="relative">
                  <FaDollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />

                  <select
                    required
                    value={form.budget}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        budget: e.target.value,
                      })
                    }
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#101827] py-4 pl-12 pr-5 text-white outline-none transition focus:border-cyan-500"
                  >
                    <option value="">
                      Estimated Project Budget
                    </option>

                    <option value="$50 - $100">
                      $50 - $100
                    </option>

                    <option value="$100 - $300">
                      $100 - $300
                    </option>

                    <option value="$300 - $500">
                      $300 - $500
                    </option>

                    <option value="$500 - $1,000">
                      $500 - $1,000
                    </option>

                    <option value="$1,000+">
                      $1,000+
                    </option>

                    <option value="Not Sure">
                      I'm Not Sure
                    </option>
                  </select>
                </div>

                {/* Message */}
                <textarea
                  rows={6}
                  required
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,.25)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FaPaperPlane />

                  {loading
                    ? "Sending Request..."
                    : "Send Project Request"}
                </button>

                {/* Privacy */}
                <p className="text-center text-xs leading-5 text-gray-500">
                  We respect your privacy and will only use your information
                  to respond to your project request.
                </p>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}