"use client";

import AboutContent from "@/app/components/about/AboutContent";
import AboutControlBar from "@/app/components/about/AboutControlBar";
import AboutCTA from "@/app/components/about/AboutCTA";
import AboutHero from "@/app/components/about/AboutHero";
import AboutMainContent from "@/app/components/about/AboutMainContent";
import { useState } from "react";
import {
  education,
  experience,
  personalInfo,
  skills,
  skillsByLevel,
  socialLinks,
} from "../../data/dataAbout";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "skills" | "education"
  >("experience");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AboutHero personalInfo={personalInfo} socialLinks={socialLinks} />

            <div className="lg:col-span-2">
              <AboutMainContent personalInfo={personalInfo} />
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <AboutControlBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        experienceCount={experience.length}
        skillsCount={
          skills.frontend.length +
          skills.tools.length +
          skills.softSkills.length
        }
        educationCount={education.length}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AboutContent
            experience={experience}
            skills={skills}
            skillsByLevel={skillsByLevel}
            education={education}
            activeTab={activeTab}
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AboutCTA />
      </div>
    </div>
  );
}
