import React, { useState } from 'react';
import { Tab } from './types';
import Layout from './components/Layout';
import Onboarding from './views/Onboarding';
import Home from './views/Home';
import Spend from './views/Spend';
import Goals from './views/Goals';
import Learn from './views/Learn';
import Controls from './views/Controls';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);

  if (!isAuthenticated) {
    return <Onboarding onComplete={() => setIsAuthenticated(true)} />;
  }

  const renderTab = () => {
    switch (activeTab) {
      case Tab.Home: return <Home />;
      case Tab.Spend: return <Spend />;
      case Tab.Goals: return <Goals />;
      case Tab.Learn: return <Learn />;
      case Tab.Controls: return <Controls />;
      default: return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="h-full"
        >
          {renderTab()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;