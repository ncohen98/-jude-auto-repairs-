import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book, Zap, Disc, Compass, CheckCircle, Wind } from 'lucide-react';

type ServiceCardProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  compact?: boolean;
};

const getIcon = (iconName: string, size: number, className: string) => {
  switch (iconName) {
    case 'tool':
      return <Book size={size} className={className} />;
    case 'zap':
      return <Zap size={size} className={className} />;
    case 'disc':
      return <Disc size={size} className={className} />;
    case 'compass':
      return <Compass size={size} className={className} />;
    case 'check-circle':
      return <CheckCircle size={size} className={className} />;
    case 'wind':
      return <Wind size={size} className={className} />;
    default:
      return <Book size={size} className={className} />;
  }
};

export default function ServiceCard({ id, title, description, icon, image, compact }: ServiceCardProps) {
  if (compact) {
    return (
      <Link href={`/service/${id}`} className="flex bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-700 flex-shrink-0">
          {getIcon(icon, 24, 'text-blue-700')}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/service/${id}`} className="group relative block h-48 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Image 
        src={image} 
        alt={title}
        width={800}
        height={600}
        className="absolute inset-0 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-60"></div>
      <div className="p-4 flex flex-col justify-end h-full relative z-10">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 text-blue-700">
          {getIcon(icon, 24, 'text-blue-700')}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-sm line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}