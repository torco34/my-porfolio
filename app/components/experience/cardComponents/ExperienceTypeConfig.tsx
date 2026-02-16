import { Award, Briefcase, Code, Users } from "lucide-react";

import { ExperienceTranslations } from "@/app/ts/tipeHook";

export const getExperienceTypeConfig = (translations: ExperienceTranslations) =>
  ({
    professional: {
      color: "badge-professional",
      icon: <Briefcase className="w-4 h-4" />,
      label: translations.content.types.professional,
    },
    freelance: {
      color: "badge-freelance",
      icon: <Code className="w-4 h-4" />,
      label: translations.content.types.freelance,
    },
    education: {
      color: "badge-education",
      icon: <Award className="w-4 h-4" />,
      label: translations.content.types.education,
    },
    default: {
      color: "badge-default",
      icon: <Briefcase className="w-4 h-4" />,
      label: "Experiencia",
    },
  }) as const;
export const typeIconMap = {
  professional: <Briefcase className="w-4 h-4" />,
  freelance: <Users className="w-4 h-4" />,
  education: <Award className="w-4 h-4" />,
  default: <Briefcase className="w-4 h-4" />,
} as const;
