import React, { useEffect, useState } from 'react';
import Nosotros from './pages/Nosotros';
import Axia from './pages/Axia';
import NovaCore from './pages/NovaCore';
import Desarrollo from './pages/Desarrollo';
import Cableado from './pages/Cableado';
import { motion } from 'framer-motion';
import {
  Headset,
  Bot,
  MessageSquare,
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Globe,
  Cpu,
  Activity,
  Zap,
  Network
} from 'lucide-react';
import BubbleBackground from './components/BubbleBackground';
import MapFooter from './components/MapFooter';
import Navbar from './components/Navbar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // ... (rest of App.jsx)

  return (
    <div className="app">
      <BubbleBackground />
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      
      {/* ... (Home page content) */}
    </div>
  );
};

export default App;
