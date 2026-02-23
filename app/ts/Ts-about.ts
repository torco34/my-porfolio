import { ElementType } from "react";
// modelo de datos.
export interface SocialLink {
  platform: string;
  url: string;
  icon: ElementType;
  color: string;
}

export interface SocialLinksProps {
  title?: string;
  socialLinks: SocialLink[];
  className?: string;
}
