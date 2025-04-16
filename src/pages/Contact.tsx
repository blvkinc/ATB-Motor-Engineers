import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import FullLogo from '../components/FullLogo';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background with effects */}
        <div className="absolute inset-0 z-0">
          {/* Image background with advanced filter */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")'
            }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff3f3f\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.41l2.83-2.83 1.41 1.41L1.41 4.41H0V3.41zM17.41 40l2.83-2.83 1.41 1.41L18.83 40h-1.41zM17.41 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.41 4.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V4.41zM34.83 40l2.83-2.83 1.41 1.41L36.24 40h-1.41zM34.83 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM34.83 4.41l2.83-2.83L39.07.17l-2.83 2.83h-1.41V4.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Glowing horizontal lines */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/3 opacity-50"></div>
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent bottom-1/3 opacity-50"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient-automotive"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            We're here to help with all your automotive needs
          </motion.p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-16">
            <FullLogo />
          </div> */}
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gradient-automotive">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a question or need assistance? Contact our friendly team and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-gray-600/20 border border-blue-500/30">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-400">01332 224229</p>
                    <p className="text-gray-400 text-sm mt-1">Mon-Fri: 8am-6pm, Sat: 9am-2pm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-gray-600/20 border border-blue-500/30">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                    <p className="text-gray-400">12 Wild St, Derby DE1 1GN</p>
                    <p className="text-gray-400 text-sm mt-1">Easy access from Derby city center</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-gray-600/20 border border-blue-500/30">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-400">atbmotorengineers@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[300px] rounded-xl overflow-hidden border border-gray-700/50 automotive-glass-effect">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.957853763249!2d-1.4746818839671516!3d52.92341697989271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e5b2a7b732e1%3A0x8b2f0d7c0b5b2b0a!2sDerby%20DE1%201GN%2C%20UK!5e0!3m2!1sen!2sus!4v1629789012345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Form Card with Automotive Glass Effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-gray-600/50 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative automotive-glass-effect rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-8 text-gradient-automotive">Send Us a Message</h2>
                  
                  {/* Form Success Message */}
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center"
                    >
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      <span className="text-green-200">Your message has been sent successfully!</span>
                    </motion.div>
                  )}
                  
                  {/* Form Error Message */}
                  {formStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center"
                    >
                      <AlertCircle className="text-red-400 mr-3 w-5 h-5" />
                      <span className="text-red-200">There was an error sending your message. Please try again.</span>
                    </motion.div>
                  )}
                  
                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        >
                          <option value="">Select a service</option>
                          <option value="mot">MOT Testing</option>
                          <option value="servicing">Car Servicing</option>
                          <option value="timing-belt">Timing Belt Service</option>
                          <option value="welding">Welding Services</option>
                          <option value="mechanical">Mechanical Repairs</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 text-white font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 