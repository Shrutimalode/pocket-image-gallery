import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("pt-0 relative flex flex-col items-center", className)}>
      {/* Top - Krishna Image with peacock feathers */}
      <div className="relative mb-4">
        <div className="h-40 w-40 relative rounded-full bg-white overflow-hidden shadow-lg">
          <img 
            src="/krishna.jpeg" 
            alt="Lord Krishna" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Peacock feather decoration */}
        <div className="absolute inset-0 scale-[1.6] -z-10">
          {Array.from({ length: 16 }).map((_, index) => (
            <div 
              key={index}
              className="absolute w-6 h-14 bg-gradient-to-t from-blue-500 to-green-500 rounded-full"
              style={{ 
                left: '50%', 
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${index * 22.5}deg) translateY(-32px)` 
              }}
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-2 border-yellow-400"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Text content - Center aligned */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-1">
          जय श्री कृष्णा
        </h1>
        <p className="text-lg text-gray-700">
          जन्माष्टमी स्पेशल पॅकेज
        </p>
        <p className="text-sm text-gray-600 mb-4">
          तयारी आम्ही करू, उत्सव तुम्ही साजरा करा! 
        </p>
        <button className="border border-gray-800 px-6 py-1 text-sm uppercase">
          BOOK NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
