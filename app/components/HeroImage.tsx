import Image from "next/image";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

type HeroImageProps = {
  title: string;
  subtitle?: string;
  stats: Stat[];
};

export default function HeroImage({ title, subtitle, stats }: HeroImageProps) {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-xl">
      <Image
        src="/img/fondo1.jpg"
        alt="Imagen de fondo"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Texto */}
      <div className="absolute  background-base-show inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-white mt-4 text-lg md:text-2xl max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Stats abajo */}
      <div className="absolute bottom-6 left-0 right-0 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="p-4 backgroundShow backdrop-blur-sm rounded-xl
                 border border-white/15 flex items-center gap-3"
              >
                <Icon className="background-text w-6 h-6" />
                <div>
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
