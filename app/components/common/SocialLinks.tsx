import { SocialLinksProps } from "@/app/ts/Ts-about";

export default function SocialLinks({
  title,
  socialLinks,
  className,
}: SocialLinksProps) {
  return (
    <div className={` ${className ?? ""}`}>
      {title && <h3 className="font-semibold mb-3 ">{title}</h3>}

      <div className="flex justify-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
              aria-label={social.platform}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
