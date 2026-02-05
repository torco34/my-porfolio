"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import AboutHero from "@/app/components/about/AboutHero";
import AboutContent from "@/app/components/about/AboutContent";
import AboutCTA from "@/app/components/about/AboutCTA";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");

  const personalInfo = {
    name: "Torcoroma Arias",
    title: "Desarrollador Frontend",
    location: "Colombia",
    email: "torcoroma.arias@example.com",
    experience: "3+ años de experiencia",
    bio: "Apasionado desarrollador frontend con más de 3 años de experiencia creando interfaces modernas y responsivas. Especializado en React, Next.js y TypeScript, me enfoco en entregar experiencias de usuario excepcionales y código de alta calidad.",
    about: "Mi pasión por la tecnología comenzó desde muy joven, y he dedicado mi carrera a dominar las mejores prácticas del desarrollo web moderno. Creo en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias tecnológicas.",
    philosophy: "Creo que el buen código no solo funciona, sino que también es mantenible, escalable y comprensible. Me esfuerzo por escribir código limpio y documentado que facilite la colaboración en equipo."
  };

  const experience = [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description: "Lidero el desarrollo de aplicaciones web con React y Next.js, implementando mejores prácticas y mentorizando a desarrolladores junior.",
      achievements: [
        "Reducción del tiempo de carga en 40% mediante optimización de código",
        "Implementación de arquitectura de micro-frontends",
        "Mentoría a 3 desarrolladores junior"
      ]
    },
    {
      id: 2,
      title: "Desarrollador Frontend",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Desarrollo de sitios web y aplicaciones para clientes internacionales, trabajando con equipos multidisciplinarios.",
      achievements: [
        "Desarrollo de 15+ proyectos exitosos",
        "Implementación de diseño responsive",
        "Integración con APIs REST y GraphQL"
      ]
    },
    {
      id: 3,
      title: "Desarrollador Web Junior",
      company: "Startup Innovadora",
      period: "2019 - 2020",
      description: "Primera experiencia profesional, enfocada en aprendizaje y crecimiento en desarrollo frontend.",
      achievements: [
        "Aprendizaje de React y TypeScript",
        "Contribución a proyectos open source",
        "Certificación en desarrollo web"
      ]
    }
  ];

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 90 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 85 }
    ],
    softSkills: [
      "Comunicación efectiva",
      "Trabajo en equipo",
      "Resolución de problemas",
      "Gestión del tiempo",
      "Aprendizaje continuo",
      "Pensamiento crítico"
    ]
  };

  const education = [
    {
      id: 1,
      degree: "Ingeniería de Sistemas",
      institution: "Universidad Nacional",
      period: "2015 - 2019",
      description: "Especialización en desarrollo de software y arquitectura de sistemas."
    },
    {
      id: 2,
      degree: "Certificación en React Avanzado",
      institution: "Platzi",
      period: "2021",
      description: "Curso avanzado de React con hooks, context y patrones avanzados."
    },
    {
      id: 3,
      degree: "Certificación en TypeScript",
      institution: "Udemy",
      period: "2022",
      description: "Masterclass en TypeScript para desarrollo frontend y backend."
    }
  ];

  const socialLinks = [
    { platform: "GitHub", url: "https://github.com/torco34", icon: Github, color: "bg-gray-900" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/torcoroma", icon: Linkedin, color: "bg-blue-700" },
    { platform: "Twitter", url: "https://twitter.com/torcoroma", icon: Twitter, color: "bg-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AboutHero 
              personalInfo={personalInfo}
              socialLinks={socialLinks}
            />
            
            <AboutContent 
              personalInfo={personalInfo}
              experience={experience}
              skills={skills}
              education={education}
            />
          </div>
          
          <AboutCTA />
        </div>
      </div>
    </div>
  );
}