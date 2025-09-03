import React from 'react';
import { MessageCircle } from 'lucide-react';

const CallToActionSection = () => {
  const handleConsultar = () => {
    const message = "Hola! Me interesa conocer más sobre sus sistemas GPS. ¿Podrían brindarme más información?";
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://mcusercontent.com/17635adc15e4488859eb5650d/files/aca69c7f-5f5d-8c5c-99a8-2a14e2da4ac1/PinDown.io__asta_tech_1755742526.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cuadro de texto */}
          <div className="backdrop-blur-md bg-black/70 rounded-2xl border border-white/20 p-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para <span className="text-green-400">proteger</span> tu vehículo?
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Protege tu inversión con nuestro servicio de monitoreo y ubicación de tu vehículo. Escríbenos a través de nuestros medios de información y solicita una cotización para que conozca el detalle del servicio que brindamos.
            </p>
            <button
              onClick={handleConsultar}
              className="bg-green-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Consultar Ahora</span>
            </button>
          </div>

          {/* Imagen */}
          <div className="order-2 lg:order-2">
            <img
              src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/cfc34751-7046-e4cd-df9f-4c43f7a6818a.png"
              alt="Tecnología GPS"
              className="w-full h-100 lg:h-96 object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;