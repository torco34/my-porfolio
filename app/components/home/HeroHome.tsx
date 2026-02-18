"use client";

import { HERO_BUTTONS, HERO_STATS } from "@/app/data/getHeroData";
import { useTranslations } from "next-intl";

export default function HeroHome() {
  const t = useTranslations("HeroHome");

  return (
    <section className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
      {/* Fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/80" />

      {/* Contenido */}
      <div className="relative p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {t("greeting")}{" "}
                <span className="bg-linear-to-r ">{t("name")}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {t("role")}
              </p>
              <div className="flex flex-wrap gap-4">
                {HERO_BUTTONS.map((btn, index) => (
                  <button
                    key={index}
                    className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      btn.variant === "primary" ?
                        "bg-linear-to-r bg-[#574964] text-white hover:shadow-2xl hover:shadow-[#aa60c8]/30"
                      : "bg-gray-900/80 backdrop-blur-sm text-white border border-gray-700 hover:bg-gray-800 hover:border-gray-600"
                    }`}
                  >
                    {t(`buttons.${btn.key}`)}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {HERO_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-md rounded-xl p-5 border border-gray-700/50 hover:border-[#aa60c8]/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {t(`stats.${stat.key}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
