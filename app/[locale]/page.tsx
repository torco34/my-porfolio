import AboutSection from "../components/home/AboutSection";
import CompactFinalCTA from "../components/home/CompactFinalCTA";
import CtaCard from "../components/home/CtaCard";
import FeaturedProjects from "../components/home/FeaturedProjects";
import HeroHome from "../components/home/HeroHome";
import Services from "../components/home/Services";
import SimpleTechStack from "../components/home/SimpleTechStack";
import Testimonials from "../components/home/Testimonials";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen space-y-8">
      {/* sección de hero img fondo */}
      <HeroHome />

      {/*bloque debajo todo  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/*columna izquierda*/}
        <div className="lg:col-span-2 space-y-8">
          {/* sección sobre mí */}
          <AboutSection />

          {/* sección slider de proyectos destacados */}
          <FeaturedProjects locale={params.locale} />
        </div>
        {/* columna derecha  */}
        <div className="space-y-8">
          {/* sección de servicios */}
          <Services />

          {/* sección de llamada a la acción */}
          <CtaCard />
        </div>
      </div>

      {/* Habilidades */}
      <SimpleTechStack />

      {/* Testimonios */}
      <Testimonials />

      {/* sección de llamada a la acción final */}
      <CompactFinalCTA />
    </div>
  );
}
