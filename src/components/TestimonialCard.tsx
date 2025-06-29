import React from 'react';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  text: string;
  rating: number;
  id?: number;
};

export default function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 w-72 flex-shrink-0">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center mr-3 text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}