import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutCTA() {
  const t = useTranslations("About.cta");

  return (
    <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white">
      <h3 className="text-2xl font-bold mb-4">{t("title")}</h3>
      <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
        {t("description")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          {t("contactNow")}
        </Link>
        <Link
          href="/projects"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
        >
          {t("viewProjects")}
        </Link>
      </div>
    </div>
  );
}