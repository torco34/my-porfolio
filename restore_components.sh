#!/bin/bash

# Restaurar AboutCard
cat > app/components/home/AboutCard.tsx << 'CONTENT'
"use client";

import { useTranslations } from "next-intl";

export default function AboutCard() {
  const t = useTranslations("Home.about");

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("title")}</h2>
      <p className="text-gray-700 leading-relaxed">{t("description")}</p>
    </section>
  );
}
CONTENT

# Restaurar ServicesCard
cat > app/components/home/servicesCard.tsx << 'CONTENT'
"use client";

import { Code, Globe, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesCard() {
  const t = useTranslations("Home.services");

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("title")}</h2>

      <div className="space-y-4">
        {/* Desarrollo Web */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Code className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{t("web.title")}</h3>
            <p className="text-sm text-gray-600">{t("web.description")}</p>
          </div>
        </div>

        {/* WordPress */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Globe className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {t("wordpress.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("wordpress.description")}
            </p>
          </div>
        </div>

        {/* Consultoría */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#aa60c8]/10 rounded-lg">
            <Users className="w-6 h-6 text-[#aa60c8]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {t("consulting.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("consulting.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
CONTENT

# Restaurar TechStackCard
cat > app/components/home/TechStackCard.tsx << 'CONTENT'
"use client";

import { useTranslations } from "next-intl";

export default function TechStackCard() {
  const t = useTranslations("Home.tech");

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
        <p className="text-gray-600">{t("subtitle")}</p>
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

# Restaurar CTACard
cat > app/components/home/CTACard.tsx << 'CONTENT'
"use client";

import { useTranslations } from "next-intl";

export default function CTACard() {
  const t = useTranslations("Home.cta");

  return (
    <section className="bg-gradient-to-r from-[#aa60c8] to-purple-600 rounded-2xl shadow-lg p-8 text-white">
      <h3 className="text-xl font-bold mb-2">{t("title")}</h3>
      <p className="mb-6 opacity-90">{t("description")}</p>

      <div className="space-y-3">
        <button className="w-full bg-white text-[#aa60c8] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors">
          {t("buttons.call")}
        </button>

        <button className="w-full bg-transparent border-2 border-white text-white font-medium py-3 rounded-lg hover:bg-white/10 transition-colors">
          {t("buttons.email")}
        </button>
      </div>
    </section>
  );
}
CONTENT

# Restaurar TestimonialsSection
cat > app/components/home/TestimonialsSection.tsx << 'CONTENT'
"use client";

import { Award } from "lucide-react";
import { useTranslations } from "next-intl";
import TestimonialCard from "../TestimonialCard";

const testimonials = [
  {
    name: "María González",
    role: "Product Manager",
    company: "TechCorp",
    contentKey: "one",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "StartupXYZ",
    contentKey: "two",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Design Lead",
    company: "Creative Agency",
    contentKey: "three",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("Home.testimonials");

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">
            {t("rating")}
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
            content={t(`content.${item.contentKey}`)}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
}
CONTENT

echo "Componentes restaurados a su estado original con next-intl"
