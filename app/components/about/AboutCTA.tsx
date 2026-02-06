import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutCTA() {
  const t = useTranslations("About.cta");

  return (
    <div className="bg-linear-to-r from-gray-50 to-white rounded-xl shadow-primary p-6 text-center border border-gray-200">
      <h3 className="text-xl font-bold mb-3 text-gray-900">{t("title")}</h3>
      <p className="text-gray-700 mb-4 max-w-2xl mx-auto text-sm">
        {t("description")}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          className="px-6 py-2.5 bg-[#574964] text-white font-medium rounded-lg hover:bg-gray-700 transition-colors text-sm"
        >
          {t("contactNow")}
        </Link>
        <Link
          href="/projects"
          className="px-6 py-2.5 bg-transparent border border-[#574964] text-[#574964] font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          {t("viewProjects")}
        </Link>
      </div>
    </div>
  );
}
