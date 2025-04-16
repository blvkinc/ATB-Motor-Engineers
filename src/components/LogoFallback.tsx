import React from 'react';

interface LogoFallbackProps {
  className?: string;
}

export default function LogoFallback({ className = 'w-full h-full' }: LogoFallbackProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="248" fill="url(#logo-gradient)" stroke="#ffffff" strokeWidth="8"/>
      <g fill="#ffffff" transform="translate(128, 146) scale(1.6)">
        <path d="M16,6L19,10L16,14L6,14L3,10L6,6L16,6M17,5L5,5L1,10L5,15L17,15L21,10L17,5M11,7L13,7L13,12L11,12L11,7M9,9L11,9L11,10L9,10L9,9M13,9L15,9L15,10L13,10L13,9Z" />
      </g>
      <text x="256" y="380" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#ffffff" textAnchor="middle">ATB</text>
    </svg>
  );
} 