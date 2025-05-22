
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("pt-8 pb-6 mt-6 border-t border-gray-200", className)}>
      <h3 className="text-center text-lg font-medium mb-4">लोकप्रिय सर्व्हिस आमचे</h3>
      <div className="grid grid-cols-3 gap-2">
        {['Wall Painting', 'मूर्ती डेकोरेशन', 'Door देव दरवाजा'].map((service, index) => (
          <div key={index} className="aspect-square">
            <img
              src={`/service-${index + 1}.jpg`}
              alt={service}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-xs mt-1 text-center">{service}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-6 text-gray-500">
        © 2024 Temple Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
