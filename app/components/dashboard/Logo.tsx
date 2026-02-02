"use client";

import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations("Header.logo");

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <h1 className="text-md font-semibold text-gray-900">{t("title")}</h1>
        <p className="text-sm text-purple-600">{t("subtitle")}</p>
      </div>
      <div className="md:hidden">
        <h1 className="text-sm font-semibold text-gray-900">Portfolio</h1>
      </div>
    </div>
  );
}
