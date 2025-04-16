import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import LogoFallback from './LogoFallback';

export default function FullLogo() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div 
      className="inline-flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Logo Icon with Glow and Animation */}
      <div className="relative mb-4">
        {/* Outer glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-full blur-xl"></div>
        
        {/* Inner circle with gradient */}
        <motion.div 
          className="relative z-10 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!imageError ? (
            <img 
              src="./logo.png" 
              alt="ATB Motor Engineers Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.warn('Logo image not found. Please add a logo.png file to the public directory.');
                setImageError(true);
              }}
            />
          ) : (
            <LogoFallback />
          )}
        </motion.div>
        
        {/* Animated sparkles */}
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-blue-400" />
        </motion.div>
        
        {/* Animated sparkles 2 */}
        <motion.div
          className="absolute bottom-0 -left-2"
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
        </motion.div>
        
        {/* Rotating gradient border */}
        <div className="absolute inset-0 rounded-full p-1">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-gradient-rotate"></div>
        </div>
      </div>
      
      {/* Text Logo */}
      <div className="text-center">
        <motion.h1 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          ATB Motor Engineers
        </motion.h1>
        <motion.p 
          className="text-gray-400 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Derby's Trusted Automotive Specialists
        </motion.p>
      </div>
    </motion.div>
  );
} 