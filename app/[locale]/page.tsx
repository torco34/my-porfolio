import { Award } from "lucide-react";
import { useTranslations } from "next-intl";

import AboutSection from "../components/home/AboutSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import HeroHome from "../components/home/HeroHome";
import Services from "../components/home/Services";
import TestimonialCard from "../components/TestimonialCard";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("Home");
  return (
    <div className="min-h-screen space-y-8">
      {/* Hero Section */}
      <HeroHome />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile & Skills */}
        <div className="lg:col-span-2 space-y-8">
          <AboutSection />

          {/* Featured Projects */}
          <FeaturedProjects locale={params.locale} />
        </div>
        {/* Right Column - Services & CTA */}
        <div className="space-y-8">
          {/* Services */}
          <Services />

          {/* CTA Card */}
          <div className="bg-linear-to-br from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="mb-6 opacity-90">{t("cta.description")}</p>
            <button className="w-full bg-white text-[#aa60c8] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
              {t("cta.button")}
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {t("tech.title")}
        </h2>
        <p className="text-gray-600 text-center mb-6">{t("tech.subtitle")}</p>
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
            <h2 className="text-2xl font-bold text-gray-900">
              {t("testimonials.title")}
            </h2>
            <p className="text-gray-600">{t("testimonials.subtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              {t("testimonials.rating")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="María González"
            role="Product Manager"
            company="TechCorp"
            content={t("testimonials.content.one")}
            rating={5}
          />
          <TestimonialCard
            name="Carlos Rodríguez"
            role="CEO"
            company="StartupXYZ"
            content={t("testimonials.content.two")}
            rating={5}
          />
          <TestimonialCard
            name="Ana Martínez"
            role="Design Lead"
            company="Creative Agency"
            content={t("testimonials.content.three")}
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
