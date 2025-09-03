import React, { useState, useEffect } from 'react';
import { Satellite } from 'lucide-react';

// Configuración del logo - cambia esta URL para usar tu propio logo
const LOGO_CONFIG = {
  imageUrl: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/af1dbf8c-a99f-3247-decb-736efd279d5f.png', // Cambia esta URL por tu logo
  altText: 'GPS Pro Log',
  showIcon: true, // Cambiar a false para ocultar el ícono cuando hay imagen
  
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoError = () => {
    setLogoError(true);
  };
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {LOGO_CONFIG.imageUrl && !logoError ? (
              <img
                src={LOGO_CONFIG.imageUrl}
                alt={LOGO_CONFIG.altText}
                onError={handleLogoError}
                className="h-20 w-80 object-contain rounded-lg"
              />
            ) : LOGO_CONFIG.showIcon ? (
              <Satellite className="h-8 w-8 text-green-800" />
            ) : null}
            
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('vehiculos')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium"
            >
              Nosotros
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;