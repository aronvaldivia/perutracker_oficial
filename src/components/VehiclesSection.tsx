import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const VehiclesSection = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const vehicles = [
    {
    type: 'moto',
    image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/c7da2f4b-8a82-2b39-e051-ee396ab17e16.png',
    buttonImage: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/a935f0a6-b857-e561-6cfb-9372a5c8b516.png',
    title: 'Motocicletas',
    description: [
      'Historial de recorridos.',
      'Alerta de encendido y apagado.',
      'Alerta de movimiento.',
      'Bloqueo de motor.'
    ]
  },
    {
      type: 'carro',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/fccb6b15-91a9-0e7d-55c4-ecf727c51460.png',
      buttonImage: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/6151997e-8e09-5ea0-a35e-07252812e098.png',
      title: 'Automóviles',
      description: [
        'Historial de recorridos.',
        'Reporte de kilometrajes diarios.',
        'Reporte de velocidades.',
        'Bloqueo de motor.'
      ]
    },
    {
      type: 'camioneta',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/874d6f45-3912-7087-d76d-c0256ddd0175.png',
      buttonImage: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/05580367-1a5d-d88d-3f8a-29c4a5163424.png',
      title: 'Camionetas',
      description: [
        'Historial de recorridos.',
        'Reporte de kilometrajes diarios.',
        'Reporte de velocidades.',
        'Alerta de mantenimientos programados.'
      
      ]
    },
    {
      type: 'camion',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/4d659912-9c18-c762-b2bd-1ce1f8a974a4.png', 
      buttonImage: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/b136b1b5-5df3-6d4a-47cc-4f77b572962f.png',
      title: 'Camiones',
      description: [
        'Reporte de kilometrajes diarios.',
        'Reporte de velocidades.',
        'Reporte de horas diarias trabajadas.',
        'Botón de pánico.',
        'Homologado con La Sutran y Osinergmin.'
      ]
    }
  ];

  const handleConsultarServicio = () => {
    const message = `Hola! Me interesa el servicio GPS para ${vehicles[activeVehicle].title.toLowerCase()}. ¿Podrían brindarme más información?`;
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="vehiculos" className="min-h-screen bg-gray-100 flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <img
              src={vehicles[activeVehicle].image}
              alt={vehicles[activeVehicle].title}
              className="w-full h-96 lg:h-[500px] object-fit rounded-2xl shadow-lg transition-all duration-500"
            />
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 lg:h-[500px] flex flex-col justify-between">
            {/* Botones de vehículos */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {vehicles.map((vehicle, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVehicle(index)}
                  className={`aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                    activeVehicle === index
                      ? 'shadow-green-900/50 bg-white shadow-lg scale-105' 
                      : ' bg-white hover:border-green-900/20 hover:bg-green-50'    
                  }`}
                >
                  <img
                    src={vehicle.buttonImage}
                    alt={vehicle.title}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Información del vehículo */}
            <div className="backdrop-blur-md bg-black/80 rounded-2xl border border-white/20 p-8 text-white flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-green-400">
                  {vehicles[activeVehicle].title}
                </h3>
                <ul className="text-base lg:text-lg leading-relaxed text-gray-200 mb-6 space-y-2">
                  {vehicles[activeVehicle].description.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={handleConsultarServicio}
                className="bg-green-900 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2 self-start"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Consultar Servicio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;