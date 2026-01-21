import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVE_GOALS } from '../constants';
import ScratchCard from '../components/ScratchCard';

const Goals: React.FC = () => {
  return (
    <div className="pt-10 px-4 pb-20">
      <h2 className="text-2xl font-bold mb-2">Goals</h2>
      <p className="text-gray-400 text-sm mb-6">Save smarter, play harder.</p>

      {/* Monthly Progress */}
      <div className="glass-panel p-4 rounded-xl mb-8 flex items-center justify-between">
         <div>
            <p className="text-xs text-gray-400 uppercase">This Month</p>
            <p className="text-xl font-bold text-accent">+ ₹3,000 <span className="text-white text-base font-normal">saved</span></p>
         </div>
         <div className="h-10 w-10">
            {/* Mini Trend Icon */}
            <svg viewBox="0 0 24 24" className="text-accent w-full h-full">
                <path fill="currentColor" d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
            </svg>
         </div>
      </div>

      {/* Active Goals List */}
      <div className="space-y-4 mb-10">
        {ACTIVE_GOALS.map((goal) => {
            const percentage = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100);
            return (
                <div key={goal.id} className="bg-surface rounded-2xl p-4 border border-white/5 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-3 relative z-10">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl p-2 bg-background rounded-lg">{goal.image}</div>
                            <div>
                                <h4 className="font-bold text-sm">{goal.title}</h4>
                                <p className="text-xs text-gray-500">Target: ₹{goal.targetAmount.toLocaleString()}</p>
                            </div>
                        </div>
                        <span className="font-bold text-accent">{percentage.toFixed(0)}%</span>
                    </div>
                    
                    {/* Liquid Progress Bar Background */}
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative z-10">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                    </div>
                </div>
            )
        })}
      </div>

      {/* Rewards Section */}
      <h3 className="font-bold text-lg mb-4 flex items-center">
        Rewards 
        <span className="ml-2 px-2 py-0.5 bg-gold text-black text-[10px] font-bold rounded-full">NEW</span>
      </h3>
      
      <div className="flex overflow-x-auto no-scrollbar pb-6 -mx-4 px-4">
        <ScratchCard logoUrl="🍔" offerText="Free Burger" color="bg-red-500" />
        <ScratchCard logoUrl="👟" offerText="20% Off Nike" color="bg-black" />
        <ScratchCard logoUrl="💄" offerText="₹500 Voucher" color="bg-pink-500" />
      </div>
    </div>
  );
};

export default Goals;