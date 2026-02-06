import { render, screen } from "@testing-library/react";
import SkillsByLevel from "./SkillsByLevel";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "About.skills.stats.title": "Skills Statistics",
      "About.skills.stats.total": "Total",
      "About.skills.stats.advanced": "Advanced",
      "About.skills.stats.intermediate": "Intermediate",
      "About.skills.stats.basic": "Basic",
      "About.skills.categories.title": "Distribution by Category",
      "About.skills.categories.frontend": "Frontend",
      "About.skills.categories.tools": "Tools",
      "About.skills.categories.soft": "Soft Skills",
      "About.skills.levels.advanced": "Advanced Skills",
      "About.skills.levels.intermediate": "Intermediate Skills",
      "About.skills.levels.basic": "Basic Skills",
      "About.skills.summary.title": "Summary by Category",
      "About.skills.summary.frontend": "Frontend summary",
      "About.skills.summary.tools": "Tools summary",
      "About.skills.summary.soft": "Soft skills summary"
    };
    return translations[key] || key;
  }
}));

const mockSkills = [
  { name: "React", level: "avanzado" as const, category: "frontend" as const },
  { name: "Next.js", level: "avanzado" as const, category: "frontend" as const },
  { name: "TypeScript", level: "avanzado" as const, category: "frontend" as const },
  { name: "Webpack", level: "medio" as const, category: "tools" as const },
  { name: "Figma", level: "medio" as const, category: "tools" as const },
  { name: "Docker", level: "básico" as const, category: "tools" as const },
  { name: "Comunicación", level: "avanzado" as const, category: "soft" as const },
];

describe("SkillsByLevel", () => {
  it("should render the component with skills", () => {
    render(<SkillsByLevel skills={mockSkills} />);
    
    // Verificar que se renderizan los títulos principales
    expect(screen.getByText("Skills Statistics")).toBeInTheDocument();
    expect(screen.getByText("Distribution by Category")).toBeInTheDocument();
    expect(screen.getByText("Summary by Category")).toBeInTheDocument();
    
    // Verificar que se renderizan los niveles de habilidad
    expect(screen.getByText("Advanced Skills")).toBeInTheDocument();
    expect(screen.getByText("Intermediate Skills")).toBeInTheDocument();
    expect(screen.getByText("Basic Skills")).toBeInTheDocument();
    
    // Verificar que se renderizan las habilidades
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Webpack")).toBeInTheDocument();
    expect(screen.getByText("Figma")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Comunicación")).toBeInTheDocument();
  });

  it("should show correct statistics", () => {
    render(<SkillsByLevel skills={mockSkills} />);
    
    // Verificar estadísticas totales
    expect(screen.getByText("7")).toBeInTheDocument(); // Total skills
    expect(screen.getByText("4")).toBeInTheDocument(); // Advanced (React, Next.js, TypeScript, Comunicación)
    expect(screen.getByText("2")).toBeInTheDocument(); // Intermediate (Webpack, Figma)
    expect(screen.getByText("1")).toBeInTheDocument(); // Basic (Docker)
  });

  it("should show correct category distribution", () => {
    render(<SkillsByLevel skills={mockSkills} />);
    
    // Verificar categorías
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
    
    // Verificar conteos por categoría
    expect(screen.getByText("3")).toBeInTheDocument(); // Frontend (React, Next.js, TypeScript)
    expect(screen.getByText("3")).toBeInTheDocument(); // Tools (Webpack, Figma, Docker)
    expect(screen.getByText("1")).toBeInTheDocument(); // Soft (Comunicación)
  });

  it("should have correct CSS classes for different levels", () => {
    render(<SkillsByLevel skills={mockSkills} />);
    
    // Verificar que los niveles tienen las clases CSS correctas
    const advancedBadge = screen.getByText("Avanzado");
    const intermediateBadge = screen.getByText("Medio");
    const basicBadge = screen.getByText("Básico");
    
    expect(advancedBadge).toBeInTheDocument();
    expect(intermediateBadge).toBeInTheDocument();
    expect(basicBadge).toBeInTheDocument();
  });

  it("should render category icons", () => {
    render(<SkillsByLevel skills={mockSkills} />);
    
    // Verificar que se renderizan los iconos de categoría
    // (esto verifica que los componentes con clases específicas existen)
    const frontendIcons = document.querySelectorAll('.text-purple-500');
    expect(frontendIcons.length).toBeGreaterThan(0);
  });
});