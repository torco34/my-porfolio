import type { ElementType } from "react";

import {
  Atom,
  Braces,
  Code,
  FileCode2,
  GitBranch,
  Globe,
  Wind,
} from "lucide-react";

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
};

export const experiencia: Experience[] = [
  {
    id: 1,
    role: "Desarrollador Web Front-End",
    company: "Empresa Intuition Business",
    period: "2025 - Presente",
    description:
      "Formo parte de esta empresa, donde adquirí experiencia trabajando con WordPress y desarrollando proyectos con Next.js.",

    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Code },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Tailwind", icon: Wind },
      { name: "WordPress", icon: Globe },
    ],
  },
  {
    id: 2,
    role: "Desarrollador Web Front-End",
    company: "freelances",
    period: "2025 - Presente",
    description:
      "He trabajado en nproyectos reales econ dos companeros lo cual agrega experiencia",
    skills: [
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Wind },
      { name: "Git", icon: GitBranch },
    ],
  },
];
