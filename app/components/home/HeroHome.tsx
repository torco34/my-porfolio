"use client";

import { HERO_BUTTONS, HERO_STATS } from "@/app/data/getHeroData";
import { useTranslations } from "next-intl";

export default function HeroHome() {
  const t = useTranslations("HeroHome");

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
      />
      <div className="relative p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t("greeting")}{" "}
                <span className="text-[#aa60c8]">{t("name")}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">{t("role")}</p>
              <div className="flex flex-wrap gap-4">
                {HERO_BUTTONS.map((btn, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                      btn.variant === "primary" ?
                        "bg-[#aa60c8] text-white hover:bg-[#9a50b8]"
                      : "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
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
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {" "}
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
