import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar = "/img/fotomia.jpg",
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src={avatar}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-xs text-gray-500">{company}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">&quot;{content}&quot;</p>
    </div>
  );
}
