"use client";

import { useState } from "react";
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Award, 
  Mail, 
  MapPin, 
  Calendar,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");

  const personalInfo = {
    name: "Torcoroma Arias",
    title: "Desarrollador Frontend",
    location: "Colombia",
    email: "torcoroma.arias@example.com",
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-700" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
                  <p className="text-lg text-blue-600 font-medium mt-2">{personalInfo.title}</p>
                </div>

                {/* Personal Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>3+ años de experiencia</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Conéctate conmigo</h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                          aria-label={social.platform}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Download CV */}
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Descargar CV
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Bio Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-500" />
                  Sobre Mí
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {personalInfo.about}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-800 italic">
                      "{personalInfo.philosophy}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                    activeTab === "experience"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  Experiencia
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                    activeTab === "skills"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Code className="w-5 h-5" />
                  Habilidades
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                    activeTab === "education"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                  Educación
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {/* Experience Tab */}
                {activeTab === "experience" && (
                  <div className="space-y-8">
                    {experience.map((exp) => (
                      <div key={exp.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{exp.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Award className="w-5 h-5 text-blue-500" />
                            Logros Principales
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === "skills" && (
                  <div className="space-y-8">
                    {/* Frontend Skills */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Habilidades Técnicas</h3>
                      <div className="space-y-6">
                        {skills.frontend.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-gray-900">{skill.name}</span>
                              <span className="text-blue-600 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Soft Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Herramientas</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.tools.map((tool) => (
                            <span
                              key={tool.name}
                              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                            >
                              {tool.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Habilidades Blandas</h4>
                        <div className="space-y-3">
                          {skills.softSkills.map((skill) => (
                            <div key={skill} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <div className="space-y-6">
                    {education.map((edu) => (
                      <div key={edu.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                            <p className="text-lg text-green-600 font-medium">{edu.institution}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mt-2 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-700">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">¿Listo para trabajar juntos?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Si estás buscando un desarrollador frontend comprometido y apasionado por crear experiencias digitales excepcionales, ¡hablemos!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contactar Ahora
                  </a>
                  <a
                    href="/projects"
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Ver Mis Proyectos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}