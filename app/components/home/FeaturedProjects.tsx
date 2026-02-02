import { useTranslations } from "next-intl";
import Link from "next/link";

import { slides } from "@/app/data/dataperfil";
import Slider from "../Slider";

interface FeaturedProjectsProps {
  locale: string;
}

export default function FeaturedProjects({ locale }: FeaturedProjectsProps) {
  const t = useTranslations("Home.featuredProjects");

  return (
    <div className="bg-purple-50 rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
        <Link
          href="/projects"
          className="text-[#aa60c8] font-medium hover:underline"
        >
          {t("viewAll")}
        </Link>
      </div>
      <Slider slides={slides} />
    </div>
  );
}
