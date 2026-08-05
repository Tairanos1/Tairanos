import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
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
    </main>
  );
}