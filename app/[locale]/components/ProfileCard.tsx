import { CodeXml } from "lucide-react";
import Link from "next/link";

import { profileData } from "../../data/dataperfil";
import Button from "./Button";

export type ProfileData = {
  name: string;
  role: string;
  description: string;
  buttons: ProfileButton[];
};
export type ProfileButton = {
  text: string;
  href: string;
  icon: string;
};

export default function ProfileCard() {
  return (
    <div className="w-full relative max-w-3xl background-base background-base-show rounded-2xl shadow p-8">
      <div className="absolute inset-0 rounded-2xl bg-[#aa60c8]/6"></div>
      <h1 className="text-2xl font-bold">¡Hola! 👋</h1>

      <h2 className="text-5xl font-bold mt-2 mb-4">Soy {profileData.name}</h2>
      <span className="background-primary  backdrop-blur-sm rounded-full  flex w-xs gap-2 font-bold px-3 py-1 text-gray-100">
        <CodeXml />
        {profileData.role}
      </span>
      <p className="mt-4 leading-relaxed whitespace-pre-line">
        {profileData.description}
      </p>

      <div className="flex gap-4 mt-6 flex-wrap">
        {profileData.buttons.map((button, index) => {
          const Icon = button.icon;
          return (
            <Link key={index} href={button.href}>
              <Button className="flex items-center gap-2 ">
                <Icon size={18} />
                {button.text}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
