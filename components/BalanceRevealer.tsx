import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

interface BalanceRevealerProps {
  amount: number;
}

const BalanceRevealer: React.FC<BalanceRevealerProps> = ({ amount }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("****");
  
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);

  const handleToggle = () => {
    if (!isVisible) {
      // Reveal animation
      setIsVisible(true);
      let chars = "****".split('');
      const target = formattedAmount.split('');
      let iterations = 0;
      
      const interval = setInterval(() => {
        setDisplayValue(
          target.map((char, index) => {
             if (index < iterations) return target[index];
             return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random char
          }).join('')
        );
        
        if (iterations >= target.length) {
          clearInterval(interval);
          setDisplayValue(formattedAmount);
        }
        iterations += 1/3; 
      }, 50);
    } else {
      setIsVisible(false);
      setDisplayValue("****");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6" onClick={handleToggle}>
      <motion.div 
        className="text-gray-400 text-sm font-medium mb-1 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Total Balance
      </motion.div>
      <div className="flex items-center space-x-3 cursor-pointer">
         <motion.h2 
            key={isVisible ? 'visible' : 'hidden'}
            initial={{ scale: 0.9, filter: 'blur(4px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            className="text-5xl font-bold text-white tracking-tight"
         >
            {displayValue}
         </motion.h2>
         <div className="text-accent/50">
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
         </div>
      </div>
    </div>
  );
};

export default BalanceRevealer;