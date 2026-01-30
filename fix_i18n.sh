#!/bin/bash

# ServicesCard
sed -i 's/const t = useTranslations("Home.services");//' app/components/home/servicesCard.tsx
sed -i 's/{t("title")}/Servicios/' app/components/home/servicesCard.tsx
sed -i 's/{t("web.title")}/Desarrollo Web/' app/components/home/servicesCard.tsx
sed -i 's/{t("web.description")}/Aplicaciones web personalizadas con tecnologías modernas/' app/components/home/servicesCard.tsx
sed -i 's/{t("wordpress.title")}/WordPress/' app/components/home/servicesCard.tsx
sed -i 's/{t("wordpress.description")}/Desarrollo de temas y plugins personalizados/' app/components/home/servicesCard.tsx
sed -i 's/{t("consulting.title")}/Consultoría/' app/components/home/servicesCard.tsx
sed -i 's/{t("consulting.description")}/Asesoría técnica y revisiones de código/' app/components/home/servicesCard.tsx

# TechStackCard
sed -i 's/const t = useTranslations("Home.tech");//' app/components/home/TechStackCard.tsx
sed -i 's/{t("title")}/Tech Stack/' app/components/home/TechStackCard.tsx
sed -i 's/{t("subtitle")}/Tecnologías con las que trabajo/' app/components/home/TechStackCard.tsx

# CTACard
sed -i 's/const t = useTranslations("Home.cta");//' app/components/home/CTACard.tsx
sed -i 's/{t("title")}/Trabajemos Juntos/' app/components/home/CTACard.tsx
sed -i 's/{t("description")}/¿Listo para comenzar tu próximo proyecto?/' app/components/home/CTACard.tsx
sed -i 's/{t("button")}/Contáctame/' app/components/home/CTACard.tsx

# TestimonialsSection
sed -i 's/const t = useTranslations("Home.testimonials");//' app/components/home/TestimonialsSection.tsx
sed -i 's/{t("title")}/Testimonios/' app/components/home/TestimonialsSection.tsx
sed -i 's/{t("subtitle")}/Lo que dicen los clientes/' app/components/home/TestimonialsSection.tsx
sed -i 's/{t("rating")}/5.0 Calificación/' app/components/home/TestimonialsSection.tsx
sed -i "s/{t(\`content.\${item.contentKey}\`)}/\${item.contentKey === 'one' ? 'Excelente trabajo, entregado a tiempo y superó expectativas.' : item.contentKey === 'two' ? 'Profesional y altamente capacitada.' : 'Gran comunicación y experiencia técnica.'}/" app/components/home/TestimonialsSection.tsx
