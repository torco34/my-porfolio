"use client";

import { useTranslations } from "next-intl";

export default function CtaCard() {
  const t = useTranslations("Home.cta");

  return (
    <section className="bg-linear-to-br from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
      <p className="mb-6 opacity-90">{t("description")}</p>
      <button className="w-full bg-white text-[#aa60c8] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
        {t("button")}
      </button>
    </section>
  );
}
