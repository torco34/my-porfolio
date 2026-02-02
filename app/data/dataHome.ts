import { Code, Globe, Users } from "lucide-react";
// api de servicios
export const services = [
  {
    icon: Code,
    titleKey: "web.title",
    descriptionKey: "web.description",
  },
  {
    icon: Globe,
    titleKey: "wordpress.title",
    descriptionKey: "wordpress.description",
  },
  {
    icon: Users,
    titleKey: "consulting.title",
    descriptionKey: "consulting.description",
  },
] as const;
