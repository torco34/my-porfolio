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
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-linear-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200/80 shadow-sm h-full flex flex-col">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
             <div className="relative w-11 h-11">
               <div className="absolute inset-0 bg-linear-to-r from-[#aa60c8] to-purple-600 rounded-full p-0.5 animate-gradient">
                 <div className="relative w-full h-full bg-white rounded-full p-0.5">
                   {avatar ? (
                     <Image
                       src={avatar}
                       alt={name}
                       fill
                       className="rounded-full object-cover"
                     />
                   ) : (
                     <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                       <span className="text-xs font-bold text-gray-600">
                         {name.charAt(0)}
                       </span>
                     </div>
                   )}
                 </div>
               </div>
             </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
              <p className="text-xs text-gray-600 font-medium">{role}</p>
              <p className="text-xs text-gray-500">{company}</p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-1 bg-linear-to-r from-[#aa60c8]/10 to-purple-600/10 px-3 py-1.5 rounded-full w-fit">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating ?
                    "text-yellow-500 fill-yellow-500"
                  : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-xs font-bold text-gray-800">
              {rating}.0
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative pl-4">
            <div className="absolute left-0 top-0 text-lg text-[#aa60c8]/40 font-serif">
              &quot;
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic line-clamp-3">
              {content}
            </p>
            <div className="absolute right-0 bottom-0 text-lg text-[#aa60c8]/40 font-serif rotate-180">
              &quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
