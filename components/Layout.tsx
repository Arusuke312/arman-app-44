import React from 'react';
import { Home, PieChart, Target, BookOpen, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.Home, icon: Home, label: 'Home' },
    { id: Tab.Spend, icon: PieChart, label: 'Spend' },
    { id: Tab.Goals, icon: Target, label: 'Goals' },
    { id: Tab.Learn, icon: BookOpen, label: 'Learn' },
    { id: Tab.Controls, icon: Settings, label: 'Controls' },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-background text-white overflow-hidden max-w-md mx-auto relative shadow-2xl">
      <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24 relative z-10">
        {children}
      </main>

      {/* Floating Bottom Nav */}
      <div className="absolute bottom-6 left-4 right-4 z-50">
        <div className="bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/5 rounded-2xl h-16 px-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative flex-1 h-full flex items-center justify-center"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-2 bg-primary/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`relative flex flex-col items-center justify-center transition-colors duration-300 ${isActive ? 'text-accent' : 'text-gray-500'}`}>
                  <tab.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {/* <span className="text-[10px] mt-1 font-medium">{tab.label}</span> */}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;