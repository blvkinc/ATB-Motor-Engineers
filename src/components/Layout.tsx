import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Wrench, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'MOT Testing', path: '/services/mot' },
    { name: 'Car Servicing', path: '/services/car-servicing' },
    { name: 'Timing Belt', path: '/services/timing-belt' },
    { name: 'Welding', path: '/services/welding' },
    { name: 'Mechanical Repairs', path: '/services/mechanical-repairs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white">
      {/* Floating Navigation - Automotive Design */}
      <motion.nav 
        className="fixed top-4 w-full z-50 transition-all duration-300 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`max-w-7xl mx-auto backdrop-blur-lg bg-gray-900/60 border border-gray-700/30 hover:border-blue-500/20 transition-all duration-500 rounded-full p-3 px-6 flex justify-between items-center ${
          isScrolled ? 'shadow-lg shadow-blue-500/10' : ''
        }`}>
          <Link to="/" className="flex items-center space-x-3 relative group py-1">
            <Logo size="medium" />
          </Link>

          {/* Desktop Navigation - Automotive Theme */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group flex items-center"
              >
                <span className="relative z-10">Services</span>
                <ChevronDown className="w-4 h-4 ml-1" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Services Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg border border-gray-700/30 rounded-xl overflow-hidden shadow-xl"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-gray-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
            
            {/* Call button with automotive style */}
            <motion.a
              href="tel:01332224229"
              className="relative overflow-hidden group rounded-full bg-gradient-to-r from-blue-600 to-gray-800 px-5 py-2 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="relative z-10 text-white font-medium flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </motion.a>
          </div>

          {/* Mobile Menu Button - Automotive Design */}
          <motion.button
            className="md:hidden relative p-2 overflow-hidden group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="relative z-10 block">
              {isMobileMenuOpen ? 
                <X size={24} className="text-blue-400" /> : 
                <Menu size={24} className="text-blue-400" />
              }
            </span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Automotive Design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 right-0 px-4 z-40"
          >
            <div className="max-w-7xl mx-auto backdrop-blur-xl bg-gray-900/80 border border-gray-700/30 rounded-2xl p-6 md:hidden">
              <div className="flex flex-col space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0 }}
                >
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 p-2 hover:bg-white/5 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-gray-600 opacity-0 group-hover:opacity-100"></div>
                    <span>Home</span>
                  </Link>
                </motion.div>

                {/* Mobile Services Menu */}
                {services.map((service, index) => (
                  <motion.div
                    key={service.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 p-2 hover:bg-white/5 rounded-lg pl-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-gray-600 opacity-0 group-hover:opacity-100"></div>
                      <span>{service.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 p-2 hover:bg-white/5 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-gray-600 opacity-0 group-hover:opacity-100"></div>
                    <span>About</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 p-2 hover:bg-white/5 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-gray-600 opacity-0 group-hover:opacity-100"></div>
                    <span>Contact</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/60 backdrop-blur-lg border-t border-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="large" />
            <p className="mt-4 text-gray-400">Derby's trusted motor engineering company, providing quality service since establishment.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:01332224229" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                01332 224229
              </a>
              <a href="mailto:info@atbmotorengineers.co.uk" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                info@atbmotorengineers.co.uk
              </a>
              <p className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                Derby, UK
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} ATB Motor Engineers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}