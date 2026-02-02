import { AboutContent } from "@/app/ts/inicio";

interface AboutSectionProps {
  data: AboutContent;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.title}</h2>

      {data.paragraphs.map((text, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
          {text}
        </p>
      ))} */}
    </section>
  );
}
