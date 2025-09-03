import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoCarousel = () => {
  const navigate = useNavigate();

  const logos = [
    { id: 'partner-1', name: 'TechCorp Solutions', image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/d3d58128-941b-db2d-2557-941cf62747bc.png' },
    { id: 'partner-2', name: 'Global Systems', image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/38f82de5-6589-8089-dbbc-d85d28795697.png' },
    { id: 'partner-3', name: 'Innovation Labs', image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/3f9c4626-69ed-40c4-3d55-3027698f3203.png' },
    { id: 'partner-4', name: 'Digital Partners', image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/633b342c-b0ba-18de-c72b-049a31c86930.png' },
    { id: 'partner-5', name: 'Smart Technologies', image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/ae2cc8e4-5d79-1af6-48be-b6a9880b82b7.png' },
  
  ];

  const handleLogoClick = (partnerId: string) => {
    navigate(`/socio/${partnerId}`);
  };

  return (
    <section className="py-8 lg:py-16 bg-white min-h-[15vh] lg:min-h-[30vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-6 lg:mb-12">
          <h3 className="text-xl lg:text-4xl font-bold text-gray-900">Homologaciones</h3>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-3 lg:space-x-12">
            {/* Primera secuencia */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 lg:hover:scale-110"
                onClick={() => handleLogoClick(logo.id)}
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-6 w-12 lg:h-20 lg:w-40 object-cover rounded-sm lg:rounded-lg grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
            {/* Segunda secuencia para efecto continuo */}
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 lg:hover:scale-110"
                onClick={() => handleLogoClick(logo.id)}
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-6 w-12 lg:h-20 lg:w-40 object-cover rounded-sm lg:rounded-lg grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;