import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RECENT_TRANSACTIONS } from '../constants';
import confetti from 'canvas-confetti';

const Spend: React.FC = () => {
  const [meterValue, setMeterValue] = useState(0);

  useEffect(() => {
    // Animate meter on load
    setTimeout(() => setMeterValue(65), 300);
  }, []);

  const handleClearDebt = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00E676', '#FFD700', '#ffffff']
    });
  };

  return (
    <div className="pt-10 px-4 pb-20">
      <h2 className="text-2xl font-bold mb-6">Spending</h2>

      {/* Circular Visualizer */}
      <div className="flex justify-center mb-8 relative">
        <div className="w-64 h-64 relative flex items-center justify-center">
            {/* SVG Gauge */}
            <svg className="w-full h-full transform -rotate-90">
                <circle cx="128" cy="128" r="110" stroke="#1E1E1E" strokeWidth="12" fill="none" />
                <motion.circle 
                    cx="128" 
                    cy="128" 
                    r="110" 
                    stroke="#00E676" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeDasharray="691" // 2 * pi * 110
                    strokeDashoffset={691 - (691 * meterValue) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-bold text-white">{meterValue}%</span>
                <span className="text-accent text-sm tracking-widest uppercase mt-1">Safe</span>
            </div>
        </div>
      </div>

      {/* Debt Manager */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-surface border border-danger/30 rounded-2xl p-5 mb-8 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-20 h-20 bg-danger/10 blur-2xl rounded-full" />
        <div className="flex justify-between items-start mb-4">
            <div>
                <h4 className="text-gray-400 text-xs uppercase mb-1">Credit Card Pending</h4>
                <div className="text-2xl font-bold text-white">₹12,450</div>
                <div className="text-danger text-xs font-semibold mt-1">Due in 2 days</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center text-danger">
                !
            </div>
        </div>
        <button 
            onClick={handleClearDebt}
            className="w-full py-3 bg-danger text-white font-bold rounded-xl active:scale-95 transition-transform"
        >
            Clear Debt
        </button>
      </motion.div>

      {/* Recent Activity */}
      <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {RECENT_TRANSACTIONS.map((t, idx) => (
            <motion.div 
                key={t.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center space-x-4">
                    <img src={t.logoUrl} alt={t.merchant} className="w-10 h-10 rounded-full bg-gray-800 object-cover" />
                    <div>
                        <p className="font-bold text-sm">{t.merchant}</p>
                        <p className="text-xs text-gray-500">{t.date}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-bold text-white">-₹{t.amount}</p>
                    <p className="text-[10px] text-gray-500">{t.category}</p>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Spend;