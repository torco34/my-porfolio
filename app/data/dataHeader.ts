import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Home,
} from "lucide-react";

import { MenuItem } from "../ts/header";

// ts header<BriefcaseBusiness />

export const menuItems: MenuItem[] = [
  {
    label: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    label: "Experiencia",
    href: "/experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "Proyectos",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Educación & Certificados",
    href: "/course",
    icon: GraduationCap,
  },
];
