"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "573124633147"; // 👈 tu número con código país (57 Colombia)
  const message = "Hola! Vi tu portafolio y me gustaría contactarte.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-2 py-2 text-white shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
