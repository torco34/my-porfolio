import { render, screen } from "@testing-library/react";

import ProjectsHero from "./ProjectsHero";

describe("ProjectsHero", () => {
  const defaultProps = {
    totalProjects: 10,
    totalTechnologies: 15,
    showingProjects: 8,
  };

  it("debería renderer el título correctamente", () => {
    render(<ProjectsHero {...defaultProps} />);

    const title = screen.getByText("Mis Proyectos");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-4xl");
  });

  it("debería renderizar la descripción correctamente", () => {
    render(<ProjectsHero {...defaultProps} />);

    const description = screen.getByText(/Explora mi portafolio de proyectos/);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-xl");
  });

  it("debería mostrar las estadísticas correctas", () => {
    render(<ProjectsHero {...defaultProps} />);

    // Verificar que se muestren los números correctos
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();

    // Verificar las etiquetas de las estadísticas
    expect(screen.getByText("Proyectos Totales")).toBeInTheDocument();
    expect(screen.getByText("Tecnologías")).toBeInTheDocument();
    expect(screen.getByText("Mostrando")).toBeInTheDocument();
  });

  it("debería tener las clases CSS correctas para el contenedor principal", () => {
    render(<ProjectsHero {...defaultProps} />);

    const container = screen
      .getByText("Mis Proyectos")
      .closest("div.bg-linear-to-r");
    expect(container).toHaveClass("bg-linear-to-r");
    expect(container).toHaveClass("from-[#aa60c8]");
    expect(container).toHaveClass("to-[#030000]");
    expect(container).toHaveClass("text-white");
  });

  it("debería tener el contenedor de estadísticas con backdrop blur", () => {
    render(<ProjectsHero {...defaultProps} />);

    const statsContainer = screen
      .getByText("Proyectos Totales")
      .closest("div.bg-white\\/10");
    expect(statsContainer).toHaveClass("bg-white/10");
    expect(statsContainer).toHaveClass("backdrop-blur-sm");
    expect(statsContainer).toHaveClass("rounded-xl");
  });

  it("debería renderizar correctamente con diferentes props", () => {
    const customProps = {
      totalProjects: 5,
      totalTechnologies: 12,
      showingProjects: 3,
    };

    render(<ProjectsHero {...customProps} />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("debería tener separadores visibles entre estadísticas en pantallas medianas", () => {
    render(<ProjectsHero {...defaultProps} />);

    // Los separadores son divs, no elementos con role="separator"
    const separators = screen.getAllByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "div" &&
        element?.className?.includes("hidden md:block w-px h-12 bg-white/30")
      );
    });

    expect(separators).toHaveLength(2);

    separators.forEach((separator) => {
      expect(separator).toHaveClass("bg-white/30");
      expect(separator).toHaveClass("hidden");
      expect(separator).toHaveClass("md:block");
    });
  });
});
