import React from 'react';
import { MessageCircle } from 'lucide-react';

const AboutSection = () => {
  const handleConsultar = () => {
    const message = "Hola! Me gustaría conocer más sobre su empresa y servicios GPS.";
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="nosotros" className="min-h-screen bg-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div>
            <img
              src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/3442dd65-171e-c06d-5cba-c7d4447e7b41.jpeg"
              alt="Sobre nosotros"
              className="w-full h-80 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Contenido */}
          <div>
            <div className="backdrop-blur-md bg-black/80 rounded-2xl border border-white/20 p-10 text-white">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6">
                Sobre <span className="text-green-800">Nosotros</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-gray-200 mb-6">
               Somos una empresa cien por ciento peruana, que brinda principalmente el servicio de ubicación, monitoreo y recupero en caso de robo. 
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-200 mb-8">
                Conocedores del mercado dónde nos desarrollamos y cumpliendo los requerimientos de las instituciones de transporte del estado peruano.
Garantizando seguridad, profesionalismo y confianza a cada uno de nuestros clientes usuarios.

              </p>
              <button
                onClick={handleConsultar}
                className="bg-green-800 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Consultar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;