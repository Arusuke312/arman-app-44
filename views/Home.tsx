import React from 'react';
import { motion } from 'framer-motion';
import { Scan, ArrowRight, Zap, Bell } from 'lucide-react';
import BalanceRevealer from '../components/BalanceRevealer';
import { MOCK_FRIENDS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-10 px-4 min-h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-primary p-[2px]">
            <img src="https://picsum.photos/seed/user/100" alt="Profile" className="w-full h-full rounded-full border-2 border-background" />
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide">Good Evening</p>
            <h3 className="font-bold text-lg">Arjun</h3>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-white">
          <Bell size={20} />
        </button>
      </div>

      {/* Balance Section */}
      <section className="mb-10 relative">
        <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        <BalanceRevealer amount={5400} />
      </section>

      {/* Main Actions */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        {/* Scan QR - Major FAB */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="col-span-2 bg-gradient-to-r from-primary to-[#00695C] h-16 rounded-2xl flex items-center justify-center space-x-3 shadow-[0_0_20px_rgba(0,77,64,0.4)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Scan className="text-white" size={24} />
          <span className="text-white font-bold text-lg tracking-wide">Scan QR</span>
        </motion.button>
        
        <button className="glass-panel h-14 rounded-xl flex items-center justify-center space-x-2 text-sm font-medium hover:bg-white/5 transition-colors">
            <Zap size={18} className="text-gold" />
            <span>Pay ID</span>
        </button>
        <button className="glass-panel h-14 rounded-xl flex items-center justify-center space-x-2 text-sm font-medium hover:bg-white/5 transition-colors">
            <ArrowRight size={18} className="text-accent" />
            <span>Transfer</span>
        </button>
      </section>

      {/* P2P Circle */}
      <section className="mb-8">
        <h4 className="text-sm font-semibold text-gray-400 mb-4 px-1">Send to Friends</h4>
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4">
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <button className="w-14 h-14 rounded-full border border-dashed border-gray-600 flex items-center justify-center text-gray-400">
                <span className="text-2xl">+</span>
            </button>
            <span className="text-xs text-gray-500">New</span>
          </div>
          {MOCK_FRIENDS.map((friend) => (
            <motion.div 
              key={friend.id}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full p-[2px] hover:bg-accent transition-colors duration-300">
                <img src={friend.avatarUrl} alt={friend.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="text-xs text-gray-300 font-medium">{friend.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <div className="h-32 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 flex items-center px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
        <div className="z-10">
            <span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded-md mb-2 inline-block">Premium</span>
            <h4 className="font-bold text-lg leading-tight">Get the <br/>Metal Card</h4>
        </div>
        <img src="https://picsum.photos/seed/card/200" className="absolute -right-8 -bottom-8 w-32 h-32 object-contain opacity-80 rotate-12" alt="Card" />
      </div>
    </div>
  );
};

export default Home;