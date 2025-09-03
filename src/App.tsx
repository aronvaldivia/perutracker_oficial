import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesBar from './components/FeaturesBar';
import VehiclesSection from './components/VehiclesSection';
import CallToActionSection from './components/CallToActionSection';
import ServicesSection from './components/ServicesSection';
import LogoCarousel from './components/LogoCarousel';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceDetail from './components/ServiceDetail';
import PartnerDetail from './components/PartnerDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <FeaturesBar />
              <VehiclesSection />
              <CallToActionSection />
               {/* <ServicesSection />  */}
              <LogoCarousel />
              <AboutSection />
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/servicio/:serviceType" element={<ServiceDetail />} />
          <Route path="/socio/:partnerId" element={<PartnerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;