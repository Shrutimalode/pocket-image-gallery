
import React from 'react';
import { Button } from './ui/button';

interface ServiceCardProps {
  title: string;
  description: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="w-full mb-8">
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      {description.map((line, index) => (
        <p key={index} className="text-sm text-gray-600 mb-1">— {line}</p>
      ))}
      <Button 
        className="mt-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md text-sm font-medium"
      >
        BOOK NOW
      </Button>
    </div>
  );
};

export default ServiceCard;
