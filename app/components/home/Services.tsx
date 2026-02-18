import { useTranslations } from "next-intl";

import { services } from "@/app/data/dataHome";

export default function Services() {
  const t = useTranslations("Home.services");

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-[#574964] mb-6">{t("title")}</h2>

      <div className="space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-[#574964]/10 rounded-lg">
                <Icon className="w-6 h-6 text-[#574964]" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
