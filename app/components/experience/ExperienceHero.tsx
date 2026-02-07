"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";

export default function ExperienceHero() {
  const translations = useExperienceTranslations();

  return (
    <div className="bg-linear-to-r text-[#574964]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
            {/* <Briefcase className="w-6 h-6" /> */}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {translations.hero.title}
          </h1>
          <p className="text-lg text-[#574964] max-w-2xl mx-auto">
            {translations.hero.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
