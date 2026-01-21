import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isHero?: boolean;
}

const ShimmerLogo: React.FC<ShimmerLogoProps> = ({ size = 'md', className = '', isHero = false }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-7xl',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Base Logo */}
      <motion.h1 
        layoutId={isHero ? "logo-text" : undefined}
        className={`${sizeClasses[size]} font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400`}
        style={{
          filter: 'drop-shadow(0px 4px 10px rgba(0, 230, 118, 0.2))'
        }}
      >
        NEXPAY
      </motion.h1>

      {/* Glare/Shimmer Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer-slide opacity-50" 
             style={{ width: '50%', filter: 'blur(5px)' }} 
        />
      </div>
    </div>
  );
};

export default ShimmerLogo;