import ProfileCard from "./components/ProfileCard";
import Slider from "./components/Slider";
import { slides } from "./data/dataperfil";
export default function Home() {
  return (
    <section className="min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna izquierda */}
        <div className="w-full col-span-2">
          <ProfileCard />
        </div>

        {/* Columna derecha */}
        <div className=" flex w-full rounded-2xl justify-center pb-10 background">
          <Slider slides={slides} />
        </div>
      </div>
    </section>
  );
}
