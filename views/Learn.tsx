import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Play, Trophy } from 'lucide-react';
import { LEADERBOARD } from '../constants';

const Learn: React.FC = () => {
  return (
    <div className="pt-10 px-4 pb-20">
      <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold">Learn</h2>
          <div className="flex items-center space-x-1 text-orange-500">
             <Flame className="fill-orange-500 animate-pulse" size={20} />
             <span className="font-bold">21 Days</span>
          </div>
      </div>

      {/* Quiz Prompt */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl p-5 mb-8 flex items-center justify-between relative overflow-hidden group cursor-pointer">
         <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1">Daily Finance Quiz</h3>
            <p className="text-xs text-blue-200 mb-3">Earn +10 XP instantly</p>
            <button className="px-4 py-2 bg-white text-blue-900 text-xs font-bold rounded-full">Start Quiz</button>
         </div>
         <div className="text-6xl opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-500">🎓</div>
      </div>

      {/* Leaderboard */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4 flex items-center">
            <Trophy size={18} className="text-gold mr-2" />
            Leaderboard
        </h3>
        <div className="bg-surface rounded-2xl p-2 border border-white/5">
            {LEADERBOARD.map((user, idx) => (
                <div 
                    key={user.id} 
                    className={`flex items-center justify-between p-3 rounded-xl mb-1 ${user.isUser ? 'bg-primary/20 border border-primary/30' : ''}`}
                >
                    <div className="flex items-center space-x-4">
                        <span className={`font-bold w-6 text-center ${idx === 0 ? 'text-gold text-xl' : idx === 1 ? 'text-gray-300' : idx === 2 ? 'text-orange-400' : 'text-gray-600'}`}>
                            {user.rank}
                        </span>
                        <div className="font-medium text-sm text-white">{user.name} {user.isUser && '(You)'}</div>
                    </div>
                    <div className="font-bold text-accent text-sm">{user.points} XP</div>
                </div>
            ))}
        </div>
      </div>

      {/* Video Feed */}
      <h3 className="font-bold text-lg mb-4">For You</h3>
      <div className="space-y-4">
        {[1, 2].map((i) => (
            <div key={i} className="flex space-x-4 items-center bg-surface p-2 rounded-xl border border-white/5">
                <div className="w-24 h-16 bg-gray-800 rounded-lg relative overflow-hidden flex-shrink-0">
                    <img src={`https://picsum.photos/seed/video${i}/200/150`} className="w-full h-full object-cover opacity-60" alt="Thumb" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Play size={20} className="fill-white" />
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-bold leading-tight mb-1">How to Invest as a Teenager</h4>
                    <p className="text-[10px] text-gray-500">5 min watch • Finance Made Easy</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;