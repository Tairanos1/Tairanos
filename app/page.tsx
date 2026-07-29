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
      <Services /> 
      <Features />
       <Pricing />
       <Testimonials />
       <FAQ />
       <Contact />
       <Footer />
    </main>
  );
}