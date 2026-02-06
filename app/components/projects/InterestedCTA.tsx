/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useTranslations } from "next-intl";

export default function InterestedCTA() {
  const t = useTranslations("Projects.interested");

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl mx-4 md:mx-8 lg:mx-12 border border-gray-800">
      {/* Elementos decorativos sutiles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#aa60c8]/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#8a40a8]/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">
            {t("title")}
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] rounded-full mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
        
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#aa60c8] to-[#8a40a8] text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-[#aa60c8]/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>{t("button")}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        
        {/* Texto decorativo sutil */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            <span className="text-[#aa60c8]">●</span> Respuesta en menos de 24 horas 
            <span className="mx-3">•</span>
            <span className="text-[#ca80e8]">●</span> Sin compromiso inicial
          </p>
        </div>
      </div>
    </div>
  );
}
