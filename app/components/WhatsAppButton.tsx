"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801746460832?text=Hello%20Tairanos!%20I%20am%20interested%20in%20your%20AI%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}