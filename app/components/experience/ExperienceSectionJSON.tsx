"use client";

import { useState, useEffect } from "react";
import ExperienceCardJSON from "./ExperienceCardJSON";

interface ExperienceSectionJSONProps {
  locale?: string;
}

export default function ExperienceSectionJSON({ locale = "es" }: ExperienceSectionJSONProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/experience-translations.json')
      .then(res => res.json())
      .then(json => {
        setData(json[locale] || json.es);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#aa60c8]"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-500">
        {locale === "es" ? "No se encontraron datos de experiencia" : "No experience data found"}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {data.experiences.map((experience: any) => (
        <ExperienceCardJSON
          key={experience.id}
          experience={experience}
          translations={data.translations}
        />
      ))}
    </div>
  );
}