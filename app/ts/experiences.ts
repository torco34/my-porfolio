import type { ElementType } from "react";

import { ExperienceTranslations, ExperienceType } from "./tipeHook";
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
// ExperienceExpanded components
export type Props = {
  experience: Experience;
  translations: ExperienceTranslations;
  isExpanded: boolean;
  showAllSkills: boolean;
  setShowAllSkills: (value: boolean) => void;
};

// ExperienceHeader components
export type ExperienceTypeConfig = {
  color: string;
  icon: React.ReactNode;
  label: string;
};

export type experienceProps = {
  role: string;
  company: string;
  type?: ExperienceType;
  isExpanded: boolean;
  onToggle: () => void;
  translations: ExperienceTranslations;
  getTypeConfig: (type?: ExperienceType) => ExperienceTypeConfig;
};

// ExperienceMeta components
export type metaProps = {
  period: string;
  location?: string;
  projectsCount?: number;
  translations: ExperienceTranslations;
};

// ExperienceSkills components

export type skillsProps = {
  skills: Skill[];
  translations: ExperienceTranslations;
  showAllSkills: boolean;
  onShowAll: () => void;
};
