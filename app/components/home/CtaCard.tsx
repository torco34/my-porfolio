"use client";

import { useTranslations } from "next-intl";

export default function CtaCard() {
  const t = useTranslations("Home.cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#aa60c8] via-[#9a50b8] to-[#8a40a8] rounded-2xl shadow-xl p-8 text-white">
      {/* Elementos decorativos */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
        <p className="mb-8 opacity-95 text-gray-100">{t("description")}</p>
        <button className="w-full bg-white text-[#8a40a8] font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
          {t("button")}
        </button>
      </div>
    </section>
  );
}
