import { render, screen } from "@testing-library/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import AboutHero from "./AboutHero";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "About.hero.connect": "Connect with me",
      "About.hero.downloadCV": "Download CV"
    };
    return translations[key] || key;
  }
}));

describe("AboutHero", () => {
  const defaultProps = {
    personalInfo: {
      name: "John Doe",
      title: "Frontend Developer",
      location: "New York",
      email: "john@example.com",
      experience: "5+ years experience"
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/john", icon: Github, color: "bg-gray-900" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/john", icon: Linkedin, color: "bg-blue-700" },
      { platform: "Twitter", url: "https://twitter.com/john", icon: Twitter, color: "bg-blue-400" }
    ]
  };

  it("should render the name correctly", () => {
    render(<AboutHero {...defaultProps} />);
    
    const name = screen.getByText("John Doe");
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass("text-3xl");
  });

  it("should render the title correctly", () => {
    render(<AboutHero {...defaultProps} />);
    
    const title = screen.getByText("Frontend Developer");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-blue-600");
  });

  it("should render personal information correctly", () => {
    render(<AboutHero {...defaultProps} />);
    
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("5+ years experience")).toBeInTheDocument();
  });

  it("should render social links correctly", () => {
    render(<AboutHero {...defaultProps} />);
    
    const socialLinksTitle = screen.getByText("connect");
    expect(socialLinksTitle).toBeInTheDocument();
    
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(3);
    
    expect(socialLinks[0]).toHaveAttribute("href", "https://github.com/john");
    expect(socialLinks[1]).toHaveAttribute("href", "https://linkedin.com/in/john");
    expect(socialLinks[2]).toHaveAttribute("href", "https://twitter.com/john");
  });

  it("should render download CV button", () => {
    render(<AboutHero {...defaultProps} />);
    
    const downloadButton = screen.getByText("downloadCV");
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveClass("bg-gradient-to-r");
    expect(downloadButton).toHaveClass("from-blue-600");
    expect(downloadButton).toHaveClass("to-purple-600");
  });

  it("should have correct CSS classes for the container", () => {
    render(<AboutHero {...defaultProps} />);
    
    const container = screen.getByText("John Doe").closest("div.bg-white");
    expect(container).toHaveClass("bg-white");
    expect(container).toHaveClass("rounded-2xl");
    expect(container).toHaveClass("shadow-xl");
  });

  it("should have profile image placeholder", () => {
    render(<AboutHero {...defaultProps} />);
    
    const profileContainer = screen.getByText("John Doe").closest("div.text-center");
    expect(profileContainer).toBeInTheDocument();
    
    const gradientCircle = profileContainer?.querySelector("div.bg-gradient-to-r");
    expect(gradientCircle).toHaveClass("from-blue-500");
    expect(gradientCircle).toHaveClass("to-purple-500");
  });
});