import { useTranslations } from "next-intl";

export function useExperienceTranslations() {
  const t = useTranslations("Experience");

  return {
    // Hero
    hero: {
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      stats: {
        years: t("hero.stats.years"),
        projects: t("hero.stats.projects"),
        achievements: t("hero.stats.achievements"),
        skills: t("hero.stats.skills"),
      },
    },

    // Filters
    filters: {
      title: t("controlBar.filters.title"),
      experienceType: t("controlBar.filters.experienceType"),
      all: t("controlBar.filters.all"),
      professional: t("controlBar.filters.professional"),
      freelance: t("controlBar.filters.freelance"),
      education: t("content.types.education"),
    },

    // Sort
    sort: {
      title: t("controlBar.sort.title"),
      date: t("controlBar.sort.date"),
      relevance: t("controlBar.sort.relevance"),
    },

    // Data Source
    dataSource: {
      title: t("controlBar.dataSource.title"),
      static: t("controlBar.dataSource.static"),
      dynamic: t("controlBar.dataSource.dynamic"),
    },

    // Summary
    summary: {
      title: t("controlBar.summary.title"),
      experiencesShown: t("controlBar.summary.experiencesShown"),
      activeFilter: t("controlBar.summary.activeFilter"),
      source: t("controlBar.summary.source"),
    },

    // Timeline
    timeline: {
      title: t("timeline.title"),
      description: t("timeline.description"),
      legend: {
        title: t("timeline.legend.title"),
        professionalDescription: t("timeline.legend.professionalDescription"),
        freelanceDescription: t("timeline.legend.freelanceDescription"),
        educationDescription: t("timeline.legend.educationDescription"),
      },
    },

    // Content
    content: {
      types: {
        professional: t("content.types.professional"),
        freelance: t("content.types.freelance"),
        education: t("content.types.education"),
      },
      achievements: t("content.achievements"),
      impact: t("content.impact"),
      projects: t("content.projects"),
      projectsCount: t("content.projectsCount"),
    },

    // Card
    card: {
      showLess: t("card.showLess"),
      showMore: t("card.showMore"),
      experienceDetails: t("card.experienceDetails"),
      skillsApplied: t("card.skillsApplied"),
      location: t("card.location"),
      period: t("card.period"),
      viewLess: t("card.viewLess"),
      viewDetails: t("card.viewDetails"),
      more: t("card.more"),
      projectsCount: t("card.projectsCount"),
      projectsSummary: t("card.projectsSummary"),
      completedProjects: t("card.completedProjects"),
      viewRelatedProjects: t("card.viewRelatedProjects"),
    },

    // CTA
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      contactNow: t("cta.contactNow"),
      viewProjects: t("cta.viewProjects"),
    },

    // No results
    noResults: {
      title: t("noResults.title"),
      description: t("noResults.description"),
    },
  };
}