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
