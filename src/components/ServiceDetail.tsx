import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const navigate = useNavigate();

  const serviceData: { [key: string]: any } = {
    motocicletas: {
      title: 'GPS para Motocicletas',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Nuestro sistema GPS especializado para motocicletas ofrece la máxima protección para tu vehículo de dos ruedas. 

      Características principales:
      • Rastreo GPS en tiempo real con precisión de hasta 3 metros
      • Sistema anti-robo con alertas inmediatas de movimiento
      • Función de pánico con botón de emergencia
      • Bloqueo remoto del motor desde tu smartphone
      • Historial completo de rutas y ubicaciones
      • Batería de respaldo de hasta 72 horas
      • Resistente al agua IP67
      • Aplicación móvil intuitiva y fácil de usar
      • Soporte técnico 24/7
      • Instalación profesional incluida

      Ideal para motocicletas de trabajo, deportivas, scooters y cualquier vehículo de dos ruedas que necesite protección avanzada.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para motocicletas. ¿Podrían brindarme más información sobre precios e instalación?'
    },
    camionetas: {
      title: 'GPS para Camionetas',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/25ada220-8680-e34d-e04e-e09150fd1a1d.jpg',
      description: `Sistema GPS robusto diseñado específicamente para camionetas y SUVs, ideal para uso comercial y personal.

      Características principales:
      • Monitoreo de combustible en tiempo real
      • Control de temperatura del motor
      • Seguimiento de carga y peso
      • Geofencing con alertas personalizadas
      • Reportes detallados de conducción
      • Control de velocidad y frenado brusco
      • Mantenimiento predictivo
      • Integración con sistemas de flota
      • Cámara de seguridad opcional
      • Sensor de apertura de puertas

      Perfecto para empresas de transporte, servicios de entrega, y propietarios que buscan máxima seguridad y control.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para camionetas. ¿Podrían brindarme más información sobre precios e instalación?'
    },
    autos: {
      title: 'GPS para Automóviles',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: `Solución GPS completa para automóviles particulares y comerciales con tecnología de última generación.

      Características principales:
      • Localización GPS precisa las 24 horas
      • Historial completo de rutas y paradas
      • Alertas de velocidad personalizables
      • Notificaciones inteligentes en tiempo real
      • Modo valet para protección adicional
      • Integración con seguros vehiculares
      • Diagnóstico del vehículo
      • Recordatorios de mantenimiento
      • Compartir ubicación con familiares
      • Botón de emergencia SOS

      La elección perfecta para familias y profesionales que valoran la seguridad y tranquilidad.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para automóviles. ¿Podrían brindarme más información sobre precios e instalación?'
    },
    camiones: {
      title: 'GPS para Camiones',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/ab91f4a0-5950-716b-f3ce-74096a695525.jpg',
      description: `Sistema GPS industrial para camiones de carga pesada y transporte comercial con funciones avanzadas de gestión de flota.

      Características principales:
      • Monitoreo de carga y peso en tiempo real
      • Control de horas de conducción (HOS)
      • Optimización de rutas para ahorro de combustible
      • Monitoreo de temperatura para carga refrigerada
      • Sistema de comunicación bidireccional
      • Alertas de mantenimiento preventivo
      • Cumplimiento de regulaciones de transporte
      • Reportes detallados de eficiencia
      • Integración con sistemas ERP
      • Cámaras de seguridad múltiples

      Esencial para empresas de logística, transporte de carga y operadores de flota comercial.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para camiones. ¿Podrían brindarme más información sobre precios e instalación?'
    },
    autobuses: {
      title: 'GPS para Autobuses',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/a232a432-7a05-ab8c-d74a-5aa8e62eead7.jpg',
      description: `Solución GPS especializada para transporte público y privado de pasajeros con enfoque en seguridad y eficiencia.

      Características principales:
      • Control de pasajeros y aforo
      • Rutas optimizadas y horarios precisos
      • Botón de pánico para conductor y pasajeros
      • Monitoreo de comportamiento del conductor
      • Sistema de audio y video integrado
      • Alertas de velocidad y frenado
      • Comunicación con central de control
      • Reportes de puntualidad y eficiencia
      • Integración con sistemas de pago
      • Mantenimiento predictivo del vehículo

      Ideal para empresas de transporte público, escolar, turístico y servicios especiales de pasajeros.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para autobuses. ¿Podrían brindarme más información sobre precios e instalación?'
    },
    minivan: {
      title: 'GPS para Minivan',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/2a06d398-520d-837d-43e6-e7f0978c3e15.jpeg',
      description: `Sistema GPS versátil para minivans, perfecto para uso familiar, comercial y servicios de transporte especializado.

      Características principales:
      • Rastreo familiar con múltiples usuarios
      • Alertas de llegada y salida
      • Control parental avanzado
      • Monitoreo de velocidad y conducción
      • Historial de ubicaciones visitadas
      • Geofencing para zonas seguras
      • Notificaciones de emergencia
      • Compartir ubicación en tiempo real
      • Reportes de uso del vehículo
      • Integración con aplicaciones familiares

      Perfecto para familias numerosas, servicios de transporte escolar, turismo y empresas de servicios.`,
      whatsappMessage: 'Hola! Me interesa el servicio GPS para minivan. ¿Podrían brindarme más información sobre precios e instalación?'
    }
  };

  const service = serviceData[serviceType || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/941872087?text=${encodeURIComponent(service.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="relative h-64 lg:h-96">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        /> 
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            {service.description.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-3 mx-auto text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Solicitar Servicio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;