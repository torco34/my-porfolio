export type Course = {
  id: number;
  title: string;
  description: string;
  platform: string;
  year: string;
  technologies: string[];
  level?: "beginner" | "intermediate" | "advanced";
  duration?: string;
  certificateUrl?: string | null;
  progress?: number;
  category?: "frontend" | "backend" | "devops" | "tools" | "ux";
  completed?: boolean;
};
