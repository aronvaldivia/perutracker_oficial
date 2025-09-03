import React from 'react';
import { Satellite, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 min-h-[40vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-2xl font-bold">PERUTRACKER</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Líderes en tecnología GPS y sistemas de rastreo vehicular. 
              Tu seguridad es nuestra prioridad.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-900">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-900" />
                <span className="text-gray-300">941-872-087</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-900" />
                <span className="text-gray-300">-</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-900" />
                <span className="text-gray-300">-</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-900">Horarios</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-900" />
                <div className="text-gray-300">
                  <p>Lun - Vie: 8:00 - 18:00</p>
                  <p>Sáb: 9:00 - 16:00</p>
                  <p>Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="border-t border-green-900 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 PERUTRACKER. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;