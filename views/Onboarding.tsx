import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShimmerLogo from '../components/ShimmerLogo';
import { ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'splash' | 'login'>('splash');

  useEffect(() => {
    // Simulate Splash Screen delay
    const timer = setTimeout(() => {
        setStep('login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-background z-0">
         <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-accent/5 blur-[80px] rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        {step === 'splash' ? (
             <motion.div 
                key="splash"
                className="z-10 flex flex-col items-center"
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
             >
                <ShimmerLogo size="xl" />
             </motion.div>
        ) : (
            <motion.div 
                key="login"
                className="z-10 w-full max-w-sm flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <div className="mb-12 text-center">
                    <ShimmerLogo size="lg" isHero />
                    <p className="text-gray-400 mt-4 text-lg">Spending, Made Responsible.</p>
                </div>

                <div className="w-full space-y-4">
                    <button 
                        onClick={onComplete}
                        className="w-full h-14 bg-white text-black font-bold rounded-xl flex items-center justify-center space-x-2 relative overflow-hidden active:scale-95 transition-transform"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5" />
                        <span>Continue with Google</span>
                    </button>

                    <button className="w-full h-14 bg-surface border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
                        Use Mobile Number
                    </button>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-sm text-gray-500 cursor-pointer flex items-center hover:text-accent transition-colors"
                >
                    <span>New User?</span>
                    <ArrowRight size={14} className="ml-1" />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;