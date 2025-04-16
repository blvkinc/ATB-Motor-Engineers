import React from 'react';
import { Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHeader({ title, description, image }: ServiceHeaderProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect and overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image background with advanced filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${image})`
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.41l2.83-2.83 1.41 1.41L1.41 4.41H0V3.41zM17.41 40l2.83-2.83 1.41 1.41L18.83 40h-1.41zM17.41 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.41 4.41l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V4.41zM34.83 40l2.83-2.83 1.41 1.41L36.24 40h-1.41zM34.83 22.24l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM34.83 4.41l2.83-2.83L39.07.17l-2.83 2.83h-1.41V4.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-blue-900/20 via-gray-900 to-gray-800/20" />
        
        {/* Glowing horizontal lines */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent top-1/3 opacity-50"></div>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent bottom-1/3 opacity-50"></div>
      </div>

      {/* Content with staggered animation */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <div className="text-center relative">
          {/* Optional decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-gray-600 mx-auto mb-10"
          />
          
          {/* Title with animated badge */}
          <div className="relative inline-block mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gradient-automotive">
                {title}
              </h1>
              
              <motion.div
                className="absolute -top-6 -right-6 hidden md:flex items-center justify-center" 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-gray-600/20 backdrop-blur-sm border border-white/10">
                  <Gauge className="w-6 h-6 text-blue-400" />
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Description with enhanced container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="automotive-glass-effect p-6 rounded-2xl border border-white/5 max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-300">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 h-20 w-1 opacity-50"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="h-full w-full bg-gradient-to-b from-blue-500 to-gray-600 rounded-full"></div>
      </motion.div>
    </section>
  );
}