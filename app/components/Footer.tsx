export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-blue-500">Tai</span>ranos
            </h2>

            <p className="mt-4 text-gray-400">
              AI technology দিয়ে ব্যবসাকে আরও স্মার্ট ও দ্রুত করুন।
            </p>
          </div>


          <div>
            <h3 className="mb-4 text-xl font-bold">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>AI Chatbot</li>
              <li>Website Development</li>
              <li>Automation</li>
              <li>Digital Marketing</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-xl font-bold">
              Follow Us
            </h3>

            <p className="text-gray-400">
              Facebook
            </p>

            <p className="mt-2 text-gray-400">
              LinkedIn
            </p>

            <p className="mt-2 text-gray-400">
              YouTube
            </p>
          </div>

        </div>


        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 Tairanos. All rights reserved.
        </div>

      </div>
    </footer>
  );
}