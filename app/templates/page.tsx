const templates = [
  {
    title: "Corporate / Agency",
    description: "Professional website for agencies, IT companies and service businesses.",
    href: "/templates/corporate",
  },
  {
    title: "Restaurant",
    description: "Modern restaurant website with menu, offers and contact sections.",
    href: "/templates/restaurant",
  },
  {
    title: "Furniture",
    description: "Elegant furniture and interior business website.",
    href: "/templates/furniture",
  },
  {
    title: "Fashion",
    description: "Modern fashion brand website for products and collections.",
    href: "/templates/fashion",
  },
  {
    title: "Real Estate",
    description: "Property listing website for real estate businesses.",
    href: "/templates/real-estate",
  },
  {
    title: "Salon / Beauty",
    description: "Beautiful website for salons, beauty studios and spas.",
    href: "/templates/salon",
  },
  {
    title: "Travel",
    description: "Travel agency website for tours, packages and destinations.",
    href: "/templates/travel",
  },
  {
    title: "Education / Coaching",
    description: "Website for schools, courses, coaching and training businesses.",
    href: "/templates/education",
  },
  {
    title: "Electronics",
    description: "Modern electronics store website for products and categories.",
    href: "/templates/electronics",
  },
  {
    title: "E-commerce",
    description: "Complete online shop layout for selling products online.",
    href: "/templates/ecommerce",
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Tairanos Website Templates
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Choose a layout.
            <br />
            <span className="text-cyan-400">Make it yours.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Choose a professional website template for your business.
            We can customize the design, logo, colors, content, products,
            services and contact information for your client.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <article
              key={template.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400">
                ✦
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                {template.title}
              </h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                {template.description}
              </p>

              <a
                href={template.href}
                className="mt-6 inline-flex items-center rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              >
                Open live preview →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl font-bold">
            Need a custom website?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            We can customize any template for your business and add
            AI chatbot, WhatsApp automation, business automation and
            other features.
          </p>

          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
          >
            Request a Custom Site
          </a>
        </div>
      </div>
    </main>
  );
}