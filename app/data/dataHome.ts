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
// card testimonio

export const testimonials = [
  {
    name: "María González",
    role: "Product Manager",
    company: "TechCorp",
    content: "content.one",
    rating: 5,
    avatar: "/img/img1.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "StartupXYZ",
    content: "content.two",
    rating: 5,
    avatar: "/img/img2.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Design Lead",
    company: "Creative Agency",
    content: "content.three",
    rating: 4,
    avatar: "/img/img3.jpg",
  },
  {
    name: "Luis Fernández",
    role: "CTO",
    company: "InnovateTech",
    content: "Excelente trabajo en nuestro proyecto de e-commerce.",
    rating: 5,
    avatar: "/img/fondo1.jpg",
  },
  {
    name: "Sofía Ramírez",
    role: "Marketing Director",
    company: "DigitalBoost",
    content: "La landing page aumentó nuestras conversiones un 40%.",
    rating: 5,
    avatar: "/img/imfondo.jpg",
  },
  {
    name: "Javier López",
    role: "Frontend Lead",
    company: "WebSolutions",
    content: "Código limpio y bien estructurado.",
    rating: 4,
    avatar: "/img/fotomia.jpg",
  },
  {
    name: "Elena Torres",
    role: "UX Designer",
    company: "CreativeMinds",
    content: "Colaboración excepcional en el diseño de interfaces.",
    rating: 5,
    avatar: "/img/leo-hijo.jpeg",
  },
  {
    name: "David Castro",
    role: "Project Manager",
    company: "AgileDev",
    content: "Entregas puntuales y comunicación constante.",
    rating: 4,
    avatar: "/img/img1.jpg",
  },
] as const;
