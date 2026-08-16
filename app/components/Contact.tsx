"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const isBangla = language === "bn";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSubmitting(true);
  setSubmitted(false);
  setError("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to send message.");
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Failed to send message.";

    setError(
      isBangla
        ? `মেসেজ পাঠানো যায়নি। ${message}`
        : `Your message could not be sent. ${message}`
    );
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1220] py-24 text-white"
      data-aos="fade-up"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            <FaGlobe />

            {isBangla
              ? "চলুন একসাথে কাজ করি"
              : "Let's Work Together"}
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {isBangla ? (
              <>
                আপনার প্রজেক্ট নিয়ে
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  আজই কথা বলুন
                </span>
              </>
            ) : (
              <>
                Let&apos;s Build Something
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {isBangla
              ? "আপনার business, website, AI automation অথবা digital project সম্পর্কে আমাদের জানান। আপনার প্রয়োজন অনুযায়ী practical solution নিয়ে আমরা আলোচনা করব।"
              : "Tell us about your business, website, AI automation or digital project. We will discuss a practical solution based on your requirements."}
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* ================= LEFT INFO ================= */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-xl
              sm:p-10
            "
            data-aos="fade-right"
          >

            <h3 className="text-2xl font-bold">
              {isBangla
                ? "যোগাযোগের তথ্য"
                : "Contact Information"}
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              {isBangla
                ? "আপনার সুবিধামতো যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"
                : "Contact us through any of the channels below at your convenience."}
            </p>

            {/* Email */}

            <a
              href="mailto:hello@tairanos.com"
              className="
                mt-8
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/50
                hover:bg-white/10
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  {isBangla ? "ইমেইল" : "Email"}
                </p>

                <p className="mt-1 font-semibold text-white">
                  tairanos8@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/8801341133374"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-500/50
                hover:bg-white/10
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                <FaWhatsapp />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  WhatsApp
                </p>

                <p className="mt-1 font-semibold text-white">
                  +880 1341-133374
                </p>
              </div>
            </a>

            {/* Facebook */}

            <a
              href="https://www.facebook.com/share/1CdNaQ9wX4/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/50
                hover:bg-white/10
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                <FaFacebookF />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Facebook
                </p>

                <p className="mt-1 font-semibold text-white">
                  Tairanos
                </p>
              </div>
            </a>

            {/* Worldwide */}

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <FaGlobe className="text-cyan-400" />

              <span>
                {isBangla
                  ? "বিশ্বব্যাপী ক্লায়েন্টদের জন্য সেবা"
                  : "Serving Clients Worldwide"}
              </span>
            </div>

          </div>

          {/* ================= FORM ================= */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-xl
              sm:p-10
            "
            data-aos="fade-left"
          >

            <h3 className="text-2xl font-bold">
              {isBangla
                ? "আপনার মেসেজ পাঠান"
                : "Send Us a Message"}
            </h3>

            <p className="mt-3 text-gray-400">
              {isBangla
                ? "ফর্মটি পূরণ করুন এবং আমরা আপনার সাথে যোগাযোগ করব।"
                : "Fill out the form and we will get back to you."}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {isBangla ? "আপনার নাম" : "Your Name"}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={
                    isBangla
                      ? "আপনার নাম লিখুন"
                      : "Enter your name"
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3.5
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-cyan-500
                    focus:bg-white/[0.08]
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {isBangla
                    ? "ইমেইল ঠিকানা"
                    : "Email Address"}
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={
                    isBangla
                      ? "আপনার ইমেইল লিখুন"
                      : "Enter your email"
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3.5
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-cyan-500
                    focus:bg-white/[0.08]
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  {isBangla
                    ? "আপনার মেসেজ"
                    : "Your Message"}
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={
                    isBangla
                      ? "আপনার প্রজেক্ট সম্পর্কে লিখুন..."
                      : "Tell us about your project..."
                  }
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3.5
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-500
                    focus:border-cyan-500
                    focus:bg-white/[0.08]
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={submitting}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(6,182,212,.30)]
                "
              >
                <FaPaperPlane />

                {submitting
                  ? isBangla
                    ? "পাঠানো হচ্ছে..."
                    : "Sending..."
                  : isBangla
                    ? "মেসেজ পাঠান"
                    : "Send Message"}
              </button>

              {/* Status Message */}

              {submitted && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
                  {isBangla
                    ? "আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শিগগিরই যোগাযোগ করব।"
                    : "Your message has been sent successfully. We will contact you soon."}
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                  {error}
                </div>
              )}

            </form>

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-r
            from-cyan-500/10
            via-blue-500/10
            to-purple-500/10
            p-8
            text-center
            sm:p-10
          "
          data-aos="fade-up"
        >

          <h3 className="text-2xl font-bold sm:text-3xl">
            {isBangla
              ? "আপনার আইডিয়া প্রস্তুত?"
              : "Ready to Turn Your Idea Into Reality?"}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            {isBangla
              ? "আজই Tairanos-এর সাথে যোগাযোগ করুন এবং আপনার পরবর্তী digital project শুরু করুন।"
              : "Contact Tairanos today and let&apos;s start building your next digital project."}
          </p>

          <a
            href="https://wa.me/8801341133374"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-green-500
              px-7
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-green-400
              hover:shadow-[0_0_30px_rgba(34,197,94,.30)]
            "
          >
            <FaWhatsapp />

            {isBangla
              ? "WhatsApp-এ যোগাযোগ করুন"
              : "Contact on WhatsApp"}
          </a>

        </div>

      </div>
    </section>
  );
}
