"use client";

import { User } from "lucide-react";
import { useTranslations } from "next-intl";

interface PersonalInfo {
  bio: string;
  about: string;
  philosophy: string;
}

interface AboutMainContentProps {
  personalInfo: PersonalInfo;
}

export default function AboutMainContent({ personalInfo }: AboutMainContentProps) {
  const t = useTranslations("About.content");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <User className="w-6 h-6 text-purple-500" />
        {t("aboutMe")}
      </h2>
      <div className="space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          {personalInfo.bio}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {personalInfo.about}
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <p className="text-gray-800 italic">
            &quot;{personalInfo.philosophy}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}