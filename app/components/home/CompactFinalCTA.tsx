"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CompactFinalCTA() {
  const t = useTranslations("Home.finalCta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-[#aa60c8] rounded-2xl shadow-xl p-6 md:p-8 text-white">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
      
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Encabezado compacto */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("title")}
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Pasos simplificados en una línea */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-bold">1</span>
              </div>
              <span className="text-sm font-medium">{t("step1.title")}</span>
            </div>
            
            <div className="hidden md:block text-white/30">→</div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-bold">2</span>
              </div>
              <span className="text-sm font-medium">{t("step2.title")}</span>
            </div>
            
            <div className="hidden md:block text-white/30">→</div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <span className="text-sm font-medium">{t("step3.title")}</span>
            </div>
          </div>

          {/* Llamada a la acción compacta */}
          <div className="text-center">
            <p className="text-base opacity-90 mb-6 max-w-lg mx-auto">
              {t("ctaText")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg flex items-center justify-center gap-2">
                {t("primaryButton")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg">
                {t("secondaryButton")}
              </button>
            </div>

            {/* Footer minimalista */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs opacity-70">
                {t("footerText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}