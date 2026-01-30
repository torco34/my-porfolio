#!/bin/bash

# AboutCard
cat > app/components/home/AboutCard.tsx << 'CONTENT'
export default function AboutCard() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre Mí</h2>
      <p className="text-gray-700 leading-relaxed">Desarrolladora Frontend con experiencia en la creación de aplicaciones web modernas. Especializada en React, Next.js y TypeScript, con enfoque en rendimiento, accesibilidad y experiencia de usuario.</p>
    </section>
  );
}
CONTENT

# ServicesCard
cat > app/components/home/servicesCard.tsx << 'CONTENT'
import { Code, Globe, Users } from "lucide-react";

export default function ServicesCard() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios</h2>

      <div className="space-y-4">
        {/* Desarrollo Web */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Code className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Desarrollo Web</h3>
            <p className="text-sm text-gray-600">Aplicaciones web personalizadas con tecnologías modernas</p>
          </div>
        </div>

        {/* WordPress */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Globe className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">WordPress</h3>
            <p className="text-sm text-gray-600">Desarrollo de temas y plugins personalizados</p>
          </div>
        </div>

        {/* Consultoría */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Users className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Consultoría</h3>
            <p className="text-sm text-gray-600">Asesoría técnica y revisiones de código</p>
          </div>
        </div>
      </div>
    </section>
  );
}
CONTENT

# TechStackCard
cat > app/components/home/TechStackCard.tsx << 'CONTENT'
export default function TechStackCard() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
        <p className="text-gray-600">Tecnologías con las que trabajo</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "Node.js",
          "WordPress",
        ].map((tech) => (
          <div
            key={tech}
            className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-[#aa60c8] transition-colors"
          >
            <div className="text-lg font-semibold text-gray-900">{tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
CONTENT

# CTACard
cat > app/components/home/CTACard.tsx << 'CONTENT'
export default function CTACard() {
  return (
    <section className="bg-gradient-to-r from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
      <h3 className="text-xl font-bold mb-2">Trabajemos Juntos</h3>
      <p className="mb-6 opacity-90">¿Listo para comenzar tu próximo proyecto?</p>

      <div className="space-y-3">
        <button className="w-full bg-white text-[#aa60c8] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Contáctame
        </button>

        <button className="w-full bg-transparent border-2 border-white text-white font-medium py-3 rounded-lg hover:bg-white/10 transition-colors">
          Enviar Email
        </button>
      </div>
    </section>
  );
}
CONTENT

# TestimonialsSection
cat > app/components/home/TestimonialsSection.tsx << 'CONTENT'
import { Award } from "lucide-react";
import TestimonialCard from "../TestimonialCard";

const testimonials = [
  {
    name: "María González",
    role: "Product Manager",
    company: "TechCorp",
    content: "Excelente trabajo, entregado a tiempo y superó expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "StartupXYZ",
    content: "Profesional y altamente capacitada.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Design Lead",
    company: "Creative Agency",
    content: "Gran comunicación y experiencia técnica.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Testimonios</h2>
          <p className="text-gray-600">Lo que dicen los clientes</p>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">
            5.0 Calificación
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.name}
            name={item.name}
            role={item.role}
            company={item.company}
            content={item.content}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
}
CONTENT

echo "Todos los componentes del home han sido arreglados con texto estático"
