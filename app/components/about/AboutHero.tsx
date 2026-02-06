import { User, MapPin, Mail, Calendar, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface AboutHeroProps {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    email: string;
    experience: string;
  };
  socialLinks: SocialLink[];
}

export default function AboutHero({ personalInfo, socialLinks }: AboutHeroProps) {
  const t = useTranslations("About.hero");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full flex items-center justify-center';
                const userIcon = document.createElement('div');
                userIcon.innerHTML = '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>';
                fallback.appendChild(userIcon);
                target.parentNode?.appendChild(fallback);
              }}
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
        <p className="text-lg text-purple-600 font-medium mt-2">{personalInfo.title}</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-gray-700">
           <MapPin className="w-5 h-5 text-purple-500" />
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
           <Mail className="w-5 h-5 text-purple-500" />
          <span>{personalInfo.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
           <Calendar className="w-5 h-5 text-purple-500" />
          <span>{personalInfo.experience}</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">{t("connect")}</h3>
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

      <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        <ExternalLink className="w-5 h-5" />
        {t("downloadCV")}
      </button>
    </div>
  );
}