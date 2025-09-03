import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Phone, Mail } from 'lucide-react';

const PartnerDetail = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const partnerData: { [key: string]: any } = {
    'partner-1': {
      name: '',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/d3d58128-941b-db2d-2557-941cf62747bc.png',
      description: `
      La Autoridad de Transporte Urbano para Lima y Callao (ATU)

Exige a ciertas modalidades de transporte un dispositivo GPS certificado y aprobado por la ATU para su uso en vehículos de transporte público. Que le permita conocer la ubicación exacta de los vehículos, sus rutas, velocidades y otros datos relevantes

      `,
      contact: {
        website: 'www.atu.com.pe',
        phone: '-',
        email: '-'
      }
    },
    'partner-2': {
      name: '',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/38f82de5-6589-8089-dbbc-d85d28795697.png',
      description: `
      SIPCOP, que significa Sistema Informático de Planificación y Control del Patrullaje Policial, es un sistema informático que utiliza tecnología GPS para monitorear patrulleros y motocicletas policiales en tiempo real. Permite rastrear la ubicación, velocidad y kilómetros recorridos de los vehículos, facilitando la gestión y optimización del patrullaje policial. 
      `,
      contact: {
        website: 'www.sipcop.com.pe',
        phone: '-',
        email: '-'
      }
    },
    'partner-3': {
      name: '',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/3f9c4626-69ed-40c4-3d55-3027698f3203.png',
      description: `
      La homologación MTC GPS se refiere al proceso de certificación de equipos GPS por parte del Ministerio de Transportes y Comunicaciones (MTC) de Perú. Este proceso asegura que los dispositivos GPS cumplen con los requisitos técnicos y de seguridad establecidos para su uso en vehículos.
      `,
      contact: {
        website: 'https://www.gob.pe/mtc',
        phone: '-',
        email: '-'
      }
    },
    'partner-4': {
      name: '',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/633b342c-b0ba-18de-c72b-049a31c86930.png',
      description: `
      La SUTRAN se encarga de promover el cumplimiento de las normas a través del control, supervisión de los agentes intervinientes en el transporte de tránsito terrestre con el objetivo de reducir el índice de accidentes en carreteras y a través del GPS puede controlar la velocidad.
El Reglamento Nacional de Administración de Transporte (RENAT) y la Resolución Directoral N° 1811-2014-MTC
Indica la transmisión obligatoria de velocidades a:
Empresas de transportes de carga por carretera
Buses interprovinciales de pasajeros
Vehículos que brindan servicio de turismo.


Los límites de velocidad en carretera son: 

80 km/h para vehículos de carga
70 km/h para materiales peligrosos (MATPEL)
35 km/h en zonas comerciales
55 km/h en zonas residenciales
30 km/h en zonas escolares.

Evita pagar multas a la SUTRAN por falta de tu certificado de Gps homologado.

      `,
      contact: {
        website: 'https://gis.sutran.gob.pe',
        phone: '-',
        email: '-'
      }
    },
    'partner-5': {
      name: '',
      image: 'https://mcusercontent.com/17635adc15e4488859eb5650d/images/ae2cc8e4-5d79-1af6-48be-b6a9880b82b7.png',
      description: `La SUTRAN se encarga de promover el cumplimiento de las normas a través del control, supervisión de los agentes intervinientes en el transporte de tránsito terrestre con el objetivo de reducir el índice de accidentes en carreteras y a través del GPS puede controlar la velocidad.
El Reglamento Nacional de Administración de Transporte (RENAT) y la Resolución Directoral N° 1811-2014-MTC
Indica la transmisión obligatoria de velocidades a:
-	Empresas de transportes de carga por carretera
-	Buses interprovinciales de pasajeros
-	Vehículos que brindan servicio de turismo.
Los límites de velocidad en carretera son: 
-	80 km/h para vehículos de carga
-	70 km/h para materiales peligrosos (MATPEL)
-	35 km/h en zonas comerciales
-	55 km/h en zonas residenciales
-	30 km/h en zonas escolares.
Evita pagar multas a la SUTRAN por falta de tu certificado de Gps homologado.

`,
      contact: {
        website: 'https://www.osinergmin.gob.pe/',
        phone: '-',
        email: '-'
      }
    },
    'partner-6': {
      name: '',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=1200',
      description: `Future Systems es nuestro socio visionario especializado en tecnologías emergentes y soluciones del futuro para GPS.

      Servicios que ofrece:
      • Desarrollo de tecnologías de realidad aumentada
      • Integración con vehículos autónomos
      • Sistemas de navegación por inteligencia artificial
      • Blockchain para seguridad de datos
      • Computación cuántica aplicada
      • Consultoría en tecnologías disruptivas

      Future Systems nos mantiene a la vanguardia de las tecnologías emergentes, asegurando que nuestros sistemas GPS estén preparados para el futuro del transporte y la movilidad.

      Su visión futurista y capacidad de innovación nos permite anticipar las necesidades del mañana, desarrollando soluciones que no solo resuelven los problemas actuales, sino que preparan a nuestros clientes para los desafíos futuros.`,
      contact: {
        website: 'www.future-systems.com',
        phone: '+1 (555) 678-9012',
        email: 'future@future-systems.com'
      }
    }
  };

  const partner = partnerData[partnerId || ''];

  if (!partner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Socio no encontrado</h1>
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
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white text-center">
            {partner.name}
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none mb-8">
            {partner.description.split('\n').map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Información de contacto */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Sitio Web</p>
                  <p className="text-gray-600">{partner.contact.website}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">{partner.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">{partner.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetail;