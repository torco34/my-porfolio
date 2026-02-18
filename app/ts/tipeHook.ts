export type ExperienceTranslations = {
  stats: any;
  hero: {
    stats: {
      years: string;
      projects: string;
      achievements: string;
      skills: string;
    };
  };

  filters: {
    title: string;
    experienceType: string;
    all: string;
    professional: string;
    freelance: string;
    education: string;
  };

  sort: {
    title: string;
    date: string;
    relevance: string;
  };

  dataSource: {
    title: string;
    static: string;
    dynamic: string;
  };

  summary: {
    title: string;
    experiencesShown: string;
    activeFilter: string;
    source: string;
  };

  timeline: {
    title: string;
    description: string;
    legend: {
      title: string;
      professionalDescription: string;
      freelanceDescription: string;
      educationDescription: string;
    };
  };

  content: {
    types: {
      professional: string;
      freelance: string;
      education: string;
    };
    achievements: string;
    impact: string;
    projects: string;
    projectsCount: string;
  };

  card: {
    showLess: string;
    showMore: string;
    experienceDetails: string;
    skillsApplied: string;
    location: string;
    period: string;
    viewLess: string;
    viewDetails: string;
    more: string;
    projectsCount: string;
    projectsSummary: string;
    completedProjects: string;
    viewRelatedProjects: string;
  };

  cta: {
    title: string;
    description: string;
    contactNow: string;
    viewProjects: string;
  };

  noResults: {
    title: string;
    description: string;
  };
};
export type ExperienceType = "professional" | "freelance" | "education";
