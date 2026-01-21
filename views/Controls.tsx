import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock } from 'lucide-react';

const Toggle: React.FC<{ label: string; locked?: boolean }> = ({ label, locked }) => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-white/5 mb-3">
            <span className="font-medium text-sm">{label}</span>
            <div 
                onClick={() => !locked && setIsOn(!isOn)}
                className={`w-12 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-accent' : 'bg-gray-700'} ${locked ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <motion.div 
                    layout 
                    className="w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{ x: isOn ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </div>
        </div>
    )
}

const Controls: React.FC = () => {
  return (
    <div className="pt-10 px-4 pb-20">
      <h2 className="text-2xl font-bold mb-6">Allowance</h2>

      {/* Countdown Timer */}
      <div className="bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-2xl p-6 text-center mb-8 relative overflow-hidden">
        <div className="relative z-10">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Next Payout</p>
            <div className="text-4xl font-mono font-bold text-accent mb-1">04:12:30:05</div>
            <p className="text-[10px] text-gray-500">Days : Hours : Mins : Secs</p>
            <div className="mt-4 inline-flex items-center text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                <Clock size={12} className="mr-1" /> 2 Feb 2026
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-4 flex items-center justify-between">
         <h3 className="font-bold text-lg">Card Controls</h3>
         <div className="flex items-center text-xs text-gray-500 bg-surface px-2 py-1 rounded-md border border-white/5">
            <Lock size={10} className="mr-1" />
            Parent Managed
         </div>
      </div>

      <div className="opacity-80">
        <Toggle label="ATM Withdrawal" locked />
        <Toggle label="International Usage" locked />
        <Toggle label="Gaming Limit (> ₹500)" locked />
        <Toggle label="Online Shopping" locked />
      </div>
      
      <p className="text-center text-[10px] text-gray-600 mt-6">
        Ask your parent to update these settings.
      </p>
    </div>
  );
};

export default Controls;