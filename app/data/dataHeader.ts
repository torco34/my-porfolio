import { Home, FolderKanban, User, Briefcase, BookOpen } from "lucide-react";

export const navItems = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/experience", key: "experience" },
  { href: "/course", key: "courses" },
] as const;

export const menuItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/projects", label: "Proyectos", icon: FolderKanban },
  { href: "/about", label: "Acerca de", icon: User },
  { href: "/experience", label: "Experiencia", icon: Briefcase },
  { href: "/course", label: "Cursos", icon: BookOpen },
] as const;
