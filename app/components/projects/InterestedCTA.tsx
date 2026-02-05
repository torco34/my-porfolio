"use client";

import { useTranslations } from "next-intl";

export default function InterestedCTA() {
  const t = useTranslations("Projects.interested");

  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t("title")}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {t("description")}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          {t("button")}
        </a>
      </div>
    </div>
  );
}