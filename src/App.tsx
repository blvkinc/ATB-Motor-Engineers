import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Car, Wrench, Clock, Shield, Phone, MapPin, Mail, Facebook, ChevronDown } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MOTTesting from './pages/MOTService';
import CarServicing from './pages/CarServicing';
import TimingBelt from './pages/TimingBelt';
import Welding from './pages/WeldingService';
import MechanicalRepairs from './pages/MechanicalRepairs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/mot" element={<MOTTesting />} />
        <Route path="/services/car-servicing" element={<CarServicing />} />
        <Route path="/services/timing-belt" element={<TimingBelt />} />
        <Route path="/services/welding" element={<Welding />} />
        <Route path="/services/mechanical-repairs" element={<MechanicalRepairs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;