import { render, screen, fireEvent } from "@testing-library/react";
import AboutContent from "./AboutContent";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "About.content.aboutMe": "About Me",
      "About.content.experience": "Experience",
      "About.content.skills": "Skills",
      "About.content.education": "Education",
      "About.content.achievements": "Main Achievements",
      "About.content.technicalSkills": "Technical Skills",
      "About.content.tools": "Tools",
      "About.content.softSkills": "Soft Skills"
    };
    return translations[key] || key;
  }
}));

describe("AboutContent", () => {
  const defaultProps = {
    personalInfo: {
      bio: "Passionate frontend developer with 5+ years of experience.",
      about: "My passion for technology started at a young age.",
      philosophy: "Good code is maintainable, scalable and understandable."
    },
    experience: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2022 - Present",
        description: "Lead development of web applications with React and Next.js.",
        achievements: [
          "Reduced load time by 40% through code optimization",
          "Implemented micro-frontends architecture",
          "Mentored 3 junior developers"
        ]
      }
    ],
    skills: {
      frontend: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 85 }
      ],
      tools: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 }
      ],
      softSkills: [
        "Effective communication",
        "Problem solving"
      ]
    },
    education: [
      {
        id: 1,
        degree: "Computer Science",
        institution: "University of Technology",
        period: "2015 - 2019",
        description: "Specialization in software development and system architecture."
      }
    ]
  };

  it("should render About Me section correctly", () => {
    render(<AboutContent {...defaultProps} />);
    
    const aboutMeTitle = screen.getByText("Sobre Mí");
    expect(aboutMeTitle).toBeInTheDocument();
    
    expect(screen.getByText("Passionate frontend developer with 5+ years of experience.")).toBeInTheDocument();
    expect(screen.getByText("My passion for technology started at a young age.")).toBeInTheDocument();
    expect(screen.getByText(/Good code is maintainable/)).toBeInTheDocument();
  });

  it("should render tabs correctly", () => {
    render(<AboutContent {...defaultProps} />);
    
    expect(screen.getByText("Experiencia")).toBeInTheDocument();
    expect(screen.getByText("Habilidades")).toBeInTheDocument();
    expect(screen.getByText("Educación")).toBeInTheDocument();
  });

  it("should show Experience tab content by default", () => {
    render(<AboutContent {...defaultProps} />);
    
    expect(screen.getByText("Senior Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Tech Solutions Inc.")).toBeInTheDocument();
    expect(screen.getByText("2022 - Present")).toBeInTheDocument();
    expect(screen.getByText("Lead development of web applications with React and Next.js.")).toBeInTheDocument();
    expect(screen.getByText("Logros Principales")).toBeInTheDocument();
    expect(screen.getByText("Reduced load time by 40% through code optimization")).toBeInTheDocument();
  });

  it("should switch to Skills tab when clicked", () => {
    render(<AboutContent {...defaultProps} />);
    
    const skillsTab = screen.getByText("Habilidades");
    fireEvent.click(skillsTab);
    
    expect(screen.getByText("Habilidades Técnicas")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("95%")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("85%")).toBeInTheDocument();
    expect(screen.getByText("Herramientas")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("VS Code")).toBeInTheDocument();
    expect(screen.getByText("Habilidades Blandas")).toBeInTheDocument();
    expect(screen.getByText("Effective communication")).toBeInTheDocument();
    expect(screen.getByText("Problem solving")).toBeInTheDocument();
  });

  it("should switch to Education tab when clicked", () => {
    render(<AboutContent {...defaultProps} />);
    
    const educationTab = screen.getByText("Educación");
    fireEvent.click(educationTab);
    
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("University of Technology")).toBeInTheDocument();
    expect(screen.getByText("2015 - 2019")).toBeInTheDocument();
    expect(screen.getByText("Specialization in software development and system architecture.")).toBeInTheDocument();
  });

  it("should have correct CSS classes for tabs", () => {
    render(<AboutContent {...defaultProps} />);
    
    const experienceTab = screen.getByText("Experiencia");
    expect(experienceTab).toHaveClass("text-blue-600");
    expect(experienceTab).toHaveClass("border-b-2");
    expect(experienceTab).toHaveClass("border-blue-600");
  });

  it("should render progress bars for skills", () => {
    render(<AboutContent {...defaultProps} />);
    
    const skillsTab = screen.getByText("Habilidades");
    fireEvent.click(skillsTab);
    
    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBeGreaterThan(0);
    
    const reactProgressBar = progressBars[0];
    expect(reactProgressBar).toHaveClass("bg-gradient-to-r");
    expect(reactProgressBar).toHaveClass("from-blue-500");
    expect(reactProgressBar).toHaveClass("to-purple-500");
  });

  it("should have correct CSS classes for education items", () => {
    render(<AboutContent {...defaultProps} />);
    
    const educationTab = screen.getByText("Educación");
    fireEvent.click(educationTab);
    
    const educationItem = screen.getByText("Computer Science").closest("div.bg-white");
    expect(educationItem).toHaveClass("border-l-4");
    expect(educationItem).toHaveClass("border-green-500");
    expect(educationItem).toHaveClass("rounded-xl");
    expect(educationItem).toHaveClass("shadow-lg");
  });

  it("should render progress bars for skills", () => {
    render(<AboutContent {...defaultProps} />);
    
    const skillsTab = screen.getByText("Skills");
    fireEvent.click(skillsTab);
    
    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBeGreaterThan(0);
    
    const reactProgressBar = progressBars[0];
    expect(reactProgressBar).toHaveClass("bg-gradient-to-r");
    expect(reactProgressBar).toHaveClass("from-blue-500");
    expect(reactProgressBar).toHaveClass("to-purple-500");
  });

  it("should have correct CSS classes for experience items", () => {
    render(<AboutContent {...defaultProps} />);
    
    const experienceItem = screen.getByText("Senior Frontend Developer").closest("div.bg-white");
    expect(experienceItem).toHaveClass("border-l-4");
    expect(experienceItem).toHaveClass("border-blue-500");
    expect(experienceItem).toHaveClass("rounded-xl");
    expect(experienceItem).toHaveClass("shadow-lg");
  });

  it("should have correct CSS classes for education items", () => {
    render(<AboutContent {...defaultProps} />);
    
    const educationTab = screen.getByText("Education");
    fireEvent.click(educationTab);
    
    const educationItem = screen.getByText("Computer Science").closest("div.bg-white");
    expect(educationItem).toHaveClass("border-l-4");
    expect(educationItem).toHaveClass("border-green-500");
    expect(educationItem).toHaveClass("rounded-xl");
    expect(educationItem).toHaveClass("shadow-lg");
  });
});