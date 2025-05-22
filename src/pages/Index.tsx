import React from 'react';
import Festoon from '@/components/Festoon';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { services } from '@/data/services';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      {/* Festoon decoration at top */}
      <div className="-mb-6">
        <Festoon />
      </div>
      
      {/* Main content with padding */}
      <div className="flex-1 px-4 pb-6">
        {/* Header with Krishna image */}
        <Header />
        
        {/* Featured Service: Home Decoration */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-600">जन्माष्टमी होम डेकोरेशन</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image and features in flex layout */}
            <div className="md:flex">
              {/* Image container - maintain aspect ratio but limit height on mobile */}
              <div className="md:w-1/2 h-48 md:h-auto overflow-hidden relative">
                <img 
                  src="/home_decor.jpg" 
                  alt="Home Decoration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Features list */}
              <div className="p-4 md:w-1/2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>लाइटिंग, फुलांची तोरणं, रांगोळी, पालखी, झुला सजावट </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>पारंपरिक आणि आधुनिक थीम्स तुमच्या पसंतीनुसार </span>
                  </li>
                  <button className="border border-gray-800 px-6 py-1 text-sm uppercase ml-8">
  BOOK NOW
</button>

                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Services section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-600">इतर सेवा</h2>
          <div className="space-y-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
