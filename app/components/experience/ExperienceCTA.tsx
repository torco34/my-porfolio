"use client";

import { useExperienceTranslations } from "@/app/hooks/useExperienceTranslations";
import Link from "next/link";

export default function ExperienceCTA() {
  const translations = useExperienceTranslations();

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
      {/* card abajo azul */}
      <h3 className="text-2xl font-bold mb-4">{translations.cta.title}</h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        {translations.cta.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          {translations.cta.contactNow}
        </Link>
        <Link
          href="/projects"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
        >
          {translations.cta.viewProjects}
        </Link>
      </div>
    </div>
  );
}
