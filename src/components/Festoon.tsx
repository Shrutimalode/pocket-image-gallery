import React from 'react';
import festoonImage from '/festoon.png'; // Make sure this path is correct based on your project structure

const Festoon: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={festoonImage} 
        alt="Festoon Decoration" 
        className="mx-auto w-full max-w-md"
      />
    </div>
  );
};

export default Festoon;
