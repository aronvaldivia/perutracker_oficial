import React from 'react';

// Configuración de la imagen del botón WhatsApp - cambia esta URL para usar tu propia imagen
const WHATSAPP_IMAGE_URL = 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/018fd89e-6851-6093-f42e-d3b49d87708b.png';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre sus sistemas GPS.";
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6  text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={WHATSAPP_IMAGE_URL}
        alt="WhatsApp"
        className="h-20 w-20 object-fit" 
      />
    </button>
  );
};

export default WhatsAppButton;