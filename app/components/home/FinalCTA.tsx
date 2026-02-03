"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail, MessageSquare, Calendar } from "lucide-react";

export default function FinalCTA() {
  const t = useTranslations("Home.finalCta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-[#aa60c8] rounded-3xl shadow-2xl p-8 md:p-12 text-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Contenido principal */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Paso 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{t("step1.title")}</h3>
              </div>
              <p className="opacity-80">{t("step1.description")}</p>
            </div>

            {/* Paso 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{t("step2.title")}</h3>
              </div>
              <p className="opacity-80">{t("step2.description")}</p>
            </div>

            {/* Paso 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{t("step3.title")}</h3>
              </div>
              <p className="opacity-80">{t("step3.description")}</p>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="text-center">
            <div className="mb-8">
              <p className="text-lg opacity-90 mb-6">
                {t("ctaText")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl flex items-center justify-center gap-3 text-lg">
                  {t("primaryButton")}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl">
                  {t("secondaryButton")}
                </button>
              </div>
            </div>

            {/* Información adicional */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm opacity-70">
                {t("footerText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}