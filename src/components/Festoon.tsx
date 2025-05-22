import React from 'react';

// Get base path from environment
const basePath = import.meta.env.BASE_URL || '/pocket-image-gallery/';
const festoonImagePath = `${basePath}festoon.png`;

const Festoon: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={festoonImagePath} 
        alt="Festoon Decoration" 
        className="mx-auto w-full max-w-md"
      />
    </div>
  );
};

export default Festoon;
