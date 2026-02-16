import type { ElementType } from "react";
// experiencia hero habilidades
export interface ExperienceStatsProps {
  stats: {
    totalYears: number;
    totalProjects: number;
    totalAchievements: number;
    skillsCount: number;
  };
}
// experiencia data json
export type Skill = {
  name: string;
  icon: ElementType;
};
export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  skills: Skill[];
  description: string;
  type?: "professional" | "freelance" | "education";
  location?: string;
  achievements?: string[];
  impact?: string;
  projectsCount?: number;
};
export interface ExperienceSectionProps {
  experiences: Experience[];
}
// experiencia card

export interface ExperienceCardProps {
  experience: Experience & {
    type?: "professional" | "freelance" | "education";
    location?: string;
    achievements?: string[];
    impact?: string;
    projectsCount?: number;
  };
}
// experience components
