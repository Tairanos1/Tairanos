export default function Testimonials() {
  const reviews = [
    {
      name: "Rahim Ahmed",
      role: "Business Owner",
      text: "Tairanos আমাদের ব্যবসার customer support অনেক সহজ করে দিয়েছে। AI chatbot খুব ভালো কাজ করছে।",
    },
    {
      name: "Nusrat Jahan",
      role: "Startup Founder",
      text: "Professional website এবং automation solution পেয়ে আমাদের কাজের গতি অনেক বেড়েছে।",
    },
    {
      name: "Karim Hasan",
      role: "Company Director",
      text: "AI technology ব্যবহার করে business growth এর জন্য Tairanos একটি দারুণ partner।",
    },
  ];

  return (
    <section className="bg-[#0B1220] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-400 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            আমাদের ক্লায়েন্টরা কী বলেন
          </h2>

          <p className="mt-5 text-gray-400">
            সফল ব্যবসার জন্য আমাদের AI সমাধানের অভিজ্ঞতা।
          </p>
        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-[#111827] p-8 hover:-translate-y-2 transition"
            >

              <div className="text-4xl text-blue-400">
                "
              </div>

              <p className="mt-4 text-gray-300 leading-7">
                {review.text}
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <p className="text-gray-400">
                  {review.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}