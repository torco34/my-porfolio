import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/projects" },
    { label: "Experiencia", href: "/experience" },
    { label: "Cursos", href: "/course" },
    { label: "Sobre Mí", href: "/about" },
  ];

  const serviceLinks = [
    { label: "Desarrollo Web", href: "/services/web" },
    { label: "WordPress", href: "/services/wordpress" },
    { label: "Consultoría", href: "/services/consulting" },
    { label: "Mantenimiento", href: "/services/maintenance" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Torcoroma Arias</h2>
               <p className="text-[#aa60c8] font-semibold bg-gradient-to-r from-[#aa60c8] to-[#ca80e8] bg-clip-text text-transparent">
                  Desarrollador Frontend
                </p>
            </div>
            <p className="text-gray-400 text-sm">
              Transformo ideas en experiencias digitales excepcionales con tecnologías modernas y código limpio.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="p-2.5 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-[#aa60c8] hover:to-[#8a40a8] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#aa60c8]/20"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
               {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#aa60c8] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
               {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#aa60c8] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                 <Mail className="w-5 h-5 text-[#aa60c8] mt-0.5" />
                <span className="text-gray-400 hover:text-gray-300 transition-colors">torcoroma@email.com</span>
              </li>
              <li className="flex items-start gap-3">
                 <Phone className="w-5 h-5 text-[#aa60c8] mt-0.5" />
                <span className="text-gray-400 hover:text-gray-300 transition-colors">+57 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-[#aa60c8] mt-0.5" />
                <span className="text-gray-400 hover:text-gray-300 transition-colors">Colombia</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Suscríbete al newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                   className="flex-1 px-3 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#aa60c8] focus:border-transparent"
                />
                 <button className="px-5 py-2.5 bg-gradient-to-r from-[#aa60c8] to-[#8a40a8] text-white rounded-r-xl hover:shadow-lg hover:shadow-[#aa60c8]/30 transition-all duration-300 text-sm font-semibold">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {currentYear} Torcoroma Arias. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#aa60c8] text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#aa60c8] text-sm transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#aa60c8] text-sm transition-colors">
              Mapa del Sitio
            </Link>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WordPress'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}