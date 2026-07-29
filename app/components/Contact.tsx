export default function Contact() {
  return (
    <section className="bg-[#0B1220] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-400 font-semibold">
            CONTACT US
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            আপনার প্রজেক্ট শুরু করুন
          </h2>

          <p className="mt-5 text-gray-400">
            আপনার ব্যবসার জন্য AI solution নিয়ে আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>📧 Email: hello@tairanos.com</p>
              <p>📞 Phone: +880 1XXXXXXXXX</p>
              <p>📍 Location: Bangladesh</p>
            </div>

          </div>


          <form className="rounded-3xl border border-white/10 bg-[#111827] p-8">

            <input
              className="mb-4 w-full rounded-xl bg-[#0B1220] p-4 text-white outline-none"
              placeholder="Your Name"
            />

            <input
              className="mb-4 w-full rounded-xl bg-[#0B1220] p-4 text-white outline-none"
              placeholder="Email Address"
            />

            <textarea
              className="mb-4 h-32 w-full rounded-xl bg-[#0B1220] p-4 text-white outline-none"
              placeholder="Your Message"
            />

            <button
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}