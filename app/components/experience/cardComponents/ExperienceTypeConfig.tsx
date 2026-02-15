import { Award, Briefcase, Code } from "lucide-react";

export const getExperienceTypeConfig = (translations: any) =>
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
