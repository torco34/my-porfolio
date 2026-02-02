import { HeroData } from "@/app/ts/inicio";

export default function HeroHome({ name, role, buttons, stats }: HeroData) {
  return (
    <>
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800">
        <div className="absolute inset-0 bg-[url('/img/fondo1.jpg')] bg-cover bg-center opacity-35" />

        <div className="relative p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Hola, soy <span className="text-[#aa60c8]">{name}</span>
                </h1>

                <p className="text-xl text-gray-300 mb-6">{role}</p>

                <div className="flex flex-wrap gap-4">
                  {buttons.map((btn, index) => (
                    <button
                      key={index}
                      className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                        btn.variant === "primary" ?
                          "bg-[#aa60c8] text-white hover:bg-[#9a50b8]"
                        : "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
