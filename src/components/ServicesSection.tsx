import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'motocicletas',
      title: 'Motocicletas',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/b587eb51-e436-5146-3f09-6e456f3d1b97.png',
      message: 'Solicito información sobre el servicio GPS para motocicletas'
    },
    {
      id: 'camionetas',
      title: 'Camionetas',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/e56b7388-9913-9545-e183-61461b987043.png',
      message: 'Solicito información sobre el servicio GPS para camionetas'
    },
    {
      id: 'autos',
      title: 'Autos',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/e3015fb0-bf99-0627-864f-270f20ac8e34.png',
      message: 'Solicito información sobre el servicio GPS para autos'
    },
    {
      id: 'camiones',
      title: 'Camiones',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/81a3f350-347e-60f0-bcf1-9f83dac4c0ef.png',
      message: 'Solicito información sobre el servicio GPS para camiones'
    },
    {
      id: 'autobuses',
      title: 'Autobuses',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/b6693f43-a440-50da-87a4-c8344387baf7.png',
      message: 'Solicito información sobre el servicio GPS para autobuses'
    },
    {
      id: 'minivan',
      title: 'Minivan',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/97c0560d-1250-39e0-4fca-ec6281129bf5.png',
      message: 'Solicito información sobre el servicio GPS para minivan'
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servicio/${serviceId}`);
  };

  return (
    <section id="servicios" className="min-h-screen bg-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-green-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones GPS especializadas para todo tipo de vehículos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[300px]"
              onClick={() => handleServiceClick(service.id)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white  hover:bg-black/70">
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{service.title}</h3>
                <button className="backdrop-blur-md bg-black/50 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2 hover:bg-black/70">
                  <MessageCircle className="h-5 w-5" />
                  <span>Consultar Servicio</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;