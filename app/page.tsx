import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.tairanos.com/#website",
      url: "https://www.tairanos.com/",
      name: "Tairanos",
      description:
        "AI automation, websites, chatbots, SEO, digital marketing and custom digital solutions for businesses worldwide.",
      publisher: {
        "@id": "https://www.tairanos.com/#organization",
      },
      inLanguage: "en",
    },

    {
      "@type": "Organization",
      "@id": "https://www.tairanos.com/#organization",
      name: "Tairanos",
      url: "https://www.tairanos.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tairanos.com/tairanos-logo.png",
      },
      email: "tairanos8@gmail.com",
      telephone: "+8801341133374",
      description:
        "Tairanos provides AI automation, AI chatbots, website development, SEO, digital marketing, content services and custom digital solutions.",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61592556667994",
        "https://github.com/Tairanos1/Tairanos",
      ],
    },

    {
      "@type": "WebPage",
      "@id": "https://www.tairanos.com/#webpage",
      url: "https://www.tairanos.com/",
      name: "Tairanos | AI Automation & Digital Business Solutions",
      description:
        "Tairanos provides AI automation, AI chatbots, website development, SEO, digital marketing, content services and custom digital solutions for businesses worldwide.",
      isPartOf: {
        "@id": "https://www.tairanos.com/#website",
      },
      about: {
        "@id": "https://www.tairanos.com/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.tairanos.com/tairanos-logo.png",
      },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <Features />

      <Portfolio />

      <Pricing />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      {/* AI Chatbot */}
      <AIChat />

    </main>
  );
}