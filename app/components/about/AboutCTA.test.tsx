import { render, screen } from "@testing-library/react";
import AboutCTA from "./AboutCTA";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "About.cta.title": "Ready to work together?",
      "About.cta.description": "If you're looking for a committed frontend developer passionate about creating exceptional digital experiences, let's talk!",
      "About.cta.contactNow": "Contact Now",
      "About.cta.viewProjects": "View My Projects"
    };
    return translations[key] || key;
  }
}));

describe("AboutCTA", () => {
  it("should render the title correctly", () => {
    render(<AboutCTA />);
    
    const title = screen.getByText("¿Listo para trabajar juntos?");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-2xl");
  });

  it("should render the description correctly", () => {
    render(<AboutCTA />);
    
    const description = screen.getByText("Si estás buscando un desarrollador frontend comprometido y apasionado por crear experiencias digitales excepcionales, ¡hablemos!");
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-blue-100");
  });

  it("should render both buttons correctly", () => {
    render(<AboutCTA />);
    
    const contactButton = screen.getByText("Contactar Ahora");
    const viewProjectsButton = screen.getByText("Ver Mis Proyectos");
    
    expect(contactButton).toBeInTheDocument();
    expect(viewProjectsButton).toBeInTheDocument();
    
    expect(contactButton).toHaveAttribute("href", "/contact");
    expect(viewProjectsButton).toHaveAttribute("href", "/projects");
  });

  it("should have correct CSS classes for the container", () => {
    render(<AboutCTA />);
    
    const container = screen.getByText("Ready to work together?").closest("div");
    expect(container).toHaveClass("bg-gradient-to-r");
    expect(container).toHaveClass("from-blue-600");
    expect(container).toHaveClass("to-purple-600");
    expect(container).toHaveClass("rounded-2xl");
    expect(container).toHaveClass("text-white");
  });

  it("should have correct CSS classes for contact button", () => {
    render(<AboutCTA />);
    
    const contactButton = screen.getByText("Contact Now");
    expect(contactButton).toHaveClass("bg-white");
    expect(contactButton).toHaveClass("text-blue-600");
    expect(contactButton).toHaveClass("rounded-lg");
    expect(contactButton).toHaveClass("hover:bg-gray-100");
  });

  it("should have correct CSS classes for view projects button", () => {
    render(<AboutCTA />);
    
    const viewProjectsButton = screen.getByText("View My Projects");
    expect(viewProjectsButton).toHaveClass("bg-transparent");
    expect(viewProjectsButton).toHaveClass("border-2");
    expect(viewProjectsButton).toHaveClass("border-white");
    expect(viewProjectsButton).toHaveClass("text-white");
    expect(viewProjectsButton).toHaveClass("rounded-lg");
    expect(viewProjectsButton).toHaveClass("hover:bg-white/10");
  });

  it("should have responsive layout for buttons", () => {
    render(<AboutCTA />);
    
    const buttonsContainer = screen.getByText("Contact Now").closest("div.flex");
    expect(buttonsContainer).toHaveClass("flex-col");
    expect(buttonsContainer).toHaveClass("sm:flex-row");
  });

  it("should have max width for description", () => {
    render(<AboutCTA />);
    
    const description = screen.getByText(/If you're looking for a committed frontend developer/);
    expect(description).toHaveClass("max-w-2xl");
    expect(description).toHaveClass("mx-auto");
  });
});