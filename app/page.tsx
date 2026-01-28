import { Award, Code, Globe, Users } from "lucide-react";

import HeroHome from "./components/home/HeroHome";
import Slider from "./components/Slider";
import TestimonialCard from "./components/TestimonialCard";
import { heroData, slides } from "./data/dataperfil";

export default function Home() {
  return (
    <div className="min-h-screen space-y-8">
      {/* Hero Section */}

      <HeroHome {...heroData} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile & Skills */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre Mí</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Desarrollador Frontend con experiencia en proyectos reales,
              incluyendo trabajos freelance. Especializado en crear interfaces
              responsivas con React.js, Next.js y TypeScript, además de
              experiencia en WordPress y PHP.
            </p>
            <p className="text-gray-700 leading-relaxed">
              También cuento con experiencia en integración frontend-backend y
              conocimientos básicos en la creación de endpoints con Node.js y
              Express.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Proyectos Destacados
              </h2>
              <a
                href="/projects"
                className="text-[#aa60c8] font-medium hover:underline"
              >
                Ver todos →
              </a>
            </div>
            <Slider slides={slides} />
          </div>
        </div>
        {/* Right Column - Services & Contact */}
        <div className="space-y-8">
          {/* Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
                  <Code className="w-6 h-6 text-[#aa60c8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Desarrollo Web
                  </h3>
                  <p className="text-sm text-gray-600">
                    Aplicaciones modernas con React y Next.js
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
                  <Globe className="w-6 h-6 text-[#aa60c8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WordPress</h3>
                  <p className="text-sm text-gray-600">
                    Sitios web y temas personalizados
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
                  <Users className="w-6 h-6 text-[#aa60c8]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Consultoría</h3>
                  <p className="text-sm text-gray-600">
                    Optimización y mejores prácticas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-linear-to-br from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="mb-6 opacity-90">
              Transformemos tus ideas en experiencias digitales excepcionales.
            </p>
            <button className="w-full bg-white text-[#aa60c8] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Stack Tecnológico
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "React", color: "bg-blue-50 text-blue-700" },
            { name: "Next.js", color: "bg-gray-50 text-gray-900" },
            { name: "TypeScript", color: "bg-blue-50 text-blue-700" },
            { name: "Tailwind", color: "bg-teal-50 text-teal-700" },
            { name: "Node.js", color: "bg-green-50 text-green-700" },
            { name: "WordPress", color: "bg-blue-50 text-blue-700" },
          ].map((tech) => (
            <div key={tech.name} className="text-center">
              <div
                className={`${tech.color} rounded-xl p-4 font-semibold hover-lift cursor-pointer`}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}

      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Testimonios</h2>
            <p className="text-gray-600">Lo que dicen clientes y colegas</p>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              4.9/5 Rating
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="María González"
            role="Product Manager"
            company="TechCorp"
            content="Excelente trabajo en nuestro dashboard. Entregó a tiempo y superó expectativas."
            rating={5}
          />
          <TestimonialCard
            name="Carlos Rodríguez"
            role="CEO"
            company="StartupXYZ"
            content="Profesional y detallista. Su código es limpio y bien documentado."
            rating={5}
          />
          <TestimonialCard
            name="Ana Martínez"
            role="Design Lead"
            company="Creative Agency"
            content="Gran colaborador. Entiende rápido los requerimientos y propone mejoras."
            rating={4}
          />
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para comenzar tu proyecto?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Transformemos tus ideas en una experiencia digital memorable.
          Trabajemos juntos para crear algo extraordinario.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-[#aa60c8] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Solicitar Presupuesto
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Agenda una Llamada
          </button>
        </div>
      </div>
    </div>
  );
}
