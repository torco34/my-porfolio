"use client";

import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("title")}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">{t("paragraph1")}</p>
      <p className="text-gray-700 leading-relaxed">{t("paragraph2")}</p>
    </div>
  );
}