import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const slides = [
    {
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/f797a5ce-5bb6-8622-3fae-b4d87e67e6e3.png',
      title: 'Ubicación y monitoreo en tiempo real 24/7',
      subtitle: 'Plataforma Web y App móvil.',
      description: 'Desarrollados para satisfacer las necesidades de los clientes. De uso dinámico, práctico y amigable.'
    },
    {
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/4b873959-50f1-d3b2-66aa-221dd66c6981.png',
      title: 'Instalación a domicilio',
      subtitle: 'Técnicos especializados.',
      description: 'Contamos con un staff de instaladores a nivel nacional.' 
    },
     {
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/7c349bd3-30df-0ee0-105b-f416ea6cbda2.png',
      title: 'Alerta inmediata a la policía en caso de robo.',
      subtitle: 'Mantenemos comunicación directa y permanente con la Diprove.',
      description: 'Acelerando el recupero, otorgándole la información precisa y adecuada de la ubicación del vehículo.' 
    },
    {
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/6e9fdd30-8a8e-3bc9-15e2-1c1756b5d240.jpg',
      title: 'Tranquilidad Garantizada',
      subtitle: 'Cobertura a nivel nacional e internacional.',
      description: 'Trabajamos con Tecnología de Red 4G a través de un SimCard M2M MultiOperador.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Mi nombre es ${formData.nombre}, mi correo es ${formData.correo}. ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="inicio" className="relative min-h-[800px] overflow-hidden ">
      {/* Slider */}
      <div className="absolute inset-0 bg-black/60 "> 
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 min-h-full lg:min-h-[600px]  ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover " 
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
        ))}
      </div>

      {/* Contenido alineado */}
      <div className="absolute inset-0 flex items-start pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            {/* Texto principal - visible en todas las pantallas */}
            <div className="text-white max-w-2xl w-full lg:w-auto min-h-[180px] lg:min-h-[250px]">
              <div className="transition-opacity duration-1000">
                <h1 className="text-3xl lg:text-6xl font-bold mb-2 lg:mb-4 leading-tight text-center lg:text-left">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-6 text-green-400 text-center lg:text-left">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-base lg:text-xl leading-relaxed text-gray-200 text-center lg:text-left">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="w-full sm:w-80 lg:w-[420px]">
              <div className="backdrop-blur-md bg-black/60 rounded-2xl border border-white/20 p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Contactanos</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  />
                  <textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-green-500 outline-none resize-none transition-all"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar por WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores del slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:hidden ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-green-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;