import React from 'react';

const FeaturesBar = () => {
  // Configuración de imágenes - cambia estas URLs para usar tus propias imágenes
  const FEATURE_IMAGES = {
    monitoring: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/855ce8dc-49e2-81c3-d4f3-6364f276abd9.png', // Cambia por tu imagen de monitoreo 24/7
    multiplatform: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/b350a605-f366-c81b-2967-eaaf2290c6dc.png', // Cambia por tu imagen de sistema multiplataforma
    security: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/e60187ba-1960-ff77-351c-e3b70ad00b9f.png' // Cambia por tu imagen de bloqueo de motor
  };

  const features = [
    { image: FEATURE_IMAGES.monitoring, text: 'Monitorea tu vehiculo 24/7', alt: 'Monitoreo de tu auto 24/7' }, 
    { image: FEATURE_IMAGES.multiplatform, text: 'Sistema Multiplataforma', alt: 'Sistema Multiplataforma' },
    { image: FEATURE_IMAGES.security, text: 'Bloqueo de Motor Automático', alt: 'Bloqueo de Motor Automático' }
  ];

  return (
    <div className="bg-black/95 py-10  min-h-[15vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 text-white">
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-20 w-20 rounded-lg object-cover "
              />
              <span className="font-medium text-2xl">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;