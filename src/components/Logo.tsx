import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LogoFallback from './LogoFallback';
import logo from '../assets/logo.png';

interface LogoProps {
  variant?: 'full' | 'icon-only';
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  variant = 'full', 
  size = 'medium',
  showText = true,
  className = '' 
}: LogoProps) {
  const [imageError, setImageError] = useState(false);
  
  // Size mappings
  const sizeClasses = {
    small: {
      container: 'w-9 h-9',
      text: 'text-lg'
    },
    medium: {
      container: 'w-11 h-11',
      text: 'text-2xl'
    },
    large: {
      container: 'w-14 h-14',
      text: 'text-3xl'
    }
  };
  
  const currentSize = sizeClasses[size];

  const handleImageError = () => {
    console.warn('Logo image not found. Using fallback logo.');
    setImageError(true);
  };

  const LogoImage = () => (
    !imageError ? (
      <img 
        src={logo}
        alt="ATB Motor Engineers" 
        className="w-full h-full object-cover"
        onError={handleImageError}
      />
    ) : (
      <LogoFallback />
    )
  );

  // Icon-only version
  if (variant === 'icon-only') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full opacity-70 blur-sm"></div>
        <div className={`relative ${currentSize.container} rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-600 to-gray-900`}>
          <LogoImage />
        </div>
      </div>
    );
  }

  // Full logo with text
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full opacity-70 blur-sm"></div>
        <div className={`relative ${currentSize.container} rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-600 to-gray-900`}>
          <LogoImage />
        </div>
      </div>
      
      {showText && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <span className={`${currentSize.text} font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-300`}>
            ATB Motor Engineers
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-gray-500 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
        </motion.div>
      )}
    </div>
  );
} 