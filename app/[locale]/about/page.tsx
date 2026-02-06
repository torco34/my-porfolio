"use client";

import AboutContent from "@/app/components/about/AboutContent";
import AboutControlBar from "@/app/components/about/AboutControlBar";
import AboutCTA from "@/app/components/about/AboutCTA";
import AboutHero from "@/app/components/about/AboutHero";
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
    "about" | "experience" | "skills" | "education"
  >("about");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
      <div className="relative overflow-hidden bg-linear-to-b  to-white">
        <div className="absolute inset-0 bg-linear-to-r from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AboutHero personalInfo={personalInfo} socialLinks={socialLinks} />

            <div className="lg:col-span-2">
              {/* Empty space for content area */}
              <div className="h-full flex  justify-center">
                <AboutContent
                  personalInfo={personalInfo}
                  experience={experience}
                  skills={skills}
                  skillsByLevel={skillsByLevel}
                  education={education}
                  activeTab={activeTab}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl sm:px-6 lg:px-8 py-6">
        <AboutCTA />
      </div>
    </div>
  );
}
