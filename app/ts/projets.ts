export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};
// component: ProjectsHero
export interface ProjectsHeroProps {
  totalProjects: number;
  totalTechnologies: number;
  showingProjects: number;
}
// ts en controlBar
export interface ControlBarProps {
  filteredProjects: number;
  totalProjects: number;
  selectedTechs: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}
