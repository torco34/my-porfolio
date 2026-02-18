"use client";

import { useTranslations } from "next-intl";

export default function ContactButton() {
  const t = useTranslations("Header");

  return (
    <button className="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
      <span className="text-xs md:text-sm font-medium text-gray-700">
        📧 {t("contact")}
      </span>
    </button>
  );
}
