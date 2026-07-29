export default function FAQ() {
  const questions = [
    {
      q: "Tairanos কী ধরনের সেবা দেয়?",
      a: "আমরা AI chatbot, website development, business automation এবং digital solutions প্রদান করি।",
    },
    {
      q: "ছোট ব্যবসার জন্য AI ব্যবহার করা যাবে?",
      a: "হ্যাঁ, ছোট থেকে বড় সব ধরনের ব্যবসার জন্য AI solution তৈরি করা যায়।",
    },
    {
      q: "একটি website তৈরি করতে কত সময় লাগে?",
      a: "Project-এর ধরন অনুযায়ী সাধারণত কয়েক দিন থেকে কয়েক সপ্তাহ সময় লাগতে পারে।",
    },
    {
      q: "আপনারা কি custom AI solution তৈরি করেন?",
      a: "হ্যাঁ, ব্যবসার প্রয়োজন অনুযায়ী custom AI automation তৈরি করা হয়।",
    },
  ];

  return (
    <section className="bg-[#08101f] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {questions.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6"
            >
              <h3 className="text-xl font-bold">
                {item.q}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}