import React from 'react';
import Festoon from '@/components/Festoon';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { services } from '@/data/services';

// Get base path from environment
const basePath = import.meta.env.BASE_URL || '/pocket-image-gallery/';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      {/* Festoon decoration at top */}
      <div className="-mb-20">
        <Festoon />
      </div>
      
      {/* Main content with padding */}
      <div className="flex-1 px-4 pb-6 pt-0">
        {/* Header with Krishna image */}
        <div className="-mt-20">
          <Header />
        </div>
        
        {/* Featured Service: Home Decoration */}
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-center mb-4 text-black-600">जन्माष्टमी होम डेकोरेशन</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image and features in flex layout */}
            <div className="md:flex">
              {/* Image container - fixed height for consistency */}
              <div className="md:w-1/2 h-48 md:h-64 overflow-hidden relative">
                <img 
                  src={`${basePath}home_decor.jpg`}
                  alt="Home Decoration" 
                  className="w-full h-full object-cover object-center"
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
        
        {/* Dinner Meal Package Section */}
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-center mb-4 text-black-600">डिनर मील पैकेज</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image and features in flex layout */}
            <div className="md:flex">
              {/* Image container - fixed height for consistency */}
              <div className="md:w-1/2 h-48 md:h-64 overflow-hidden relative">
                <img 
                  src={`${basePath}dinner.jpg`}
                  alt="Dinner Meal Package" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Features list */}
              <div className="p-4 md:w-1/2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>स्वादिष्ट शाकाहारी भोजन</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>मेनू मध्ये श्रीखंड, पुरी, वासुंदी, पिठले-भाकरी व इतर पारंपरिक पदार्थ</span>
                  </li>
                  <div className="mt-4 text-center">
                    <button className="border border-gray-800 px-6 py-1 text-sm uppercase">
                      BOOK NOW
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wall Painting / Home Cleaning Section */}
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-center mb-4 text-black-600">WALL PAINTING / होम क्लिनिंग</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image and features in flex layout */}
            <div className="md:flex">
              {/* Image container - fixed height for consistency */}
              <div className="md:w-1/2 h-48 md:h-64 overflow-hidden relative">
                <img 
                  src={`${basePath}wallpainter.jpeg`}
                  alt="Wall Painting and Home Cleaning" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Features list */}
              <div className="p-4 md:w-1/2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>सणनिमित्त घराची खोलीसाठर संपूर्ण स्वच्छता</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>बाथरूम, किचन, फ्लोअर, खिडक्या - सर्व काही झळझळीत!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>प्रोफेशनल टूल्स आणि अनुभव असलेली टीम</span>
                  </li>
                  <div className="mt-4 text-center">
                    <button className="border border-gray-800 px-6 py-1 text-sm uppercase">
                      BOOK NOW
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Included in Package Section */}
        <div className="mt-10 mb-8">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">पॅकेजमध्ये समाविष्ट आहे</h2>
          
          {/* Grid of Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Wall Painting / Home Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={`${basePath}wallpainter.jpeg`}
                  alt="Wall Painting / Home Cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium">Wall Painting / होम क्लिनिंग</p>
              </div>
            </div>
            
            {/* Home Decoration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={`${basePath}home_decor.jpg`}
                  alt="Home Decoration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium">होम डेकोरेशन</p>
              </div>
            </div>
            
            {/* Dinner Meal Package */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={`${basePath}dinner.jpg`}
                  alt="Dinner Meal Package" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium">डिनर मील पॅकेज</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
