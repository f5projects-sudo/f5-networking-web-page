import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Axia from './pages/Axia';
import NovaCore from './pages/NovaCore';
import Desarrollo from './pages/Desarrollo';
import Cableado from './pages/Cableado';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
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

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Load ElevenLabs Widget Script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  // ── Page routing ───────────────────────────────
  if (currentPage === 'nosotros') {
    return <Nosotros onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'axia') {
    return <Axia onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'nova-core') {
    return <NovaCore onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'desarrollo') {
    return <Desarrollo onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'cableado') {
    return <Cableado onNavigate={setCurrentPage} />;
  }
  // ─────────────────────────────────────────────

  if (currentPage === 'home') {
    return (
      <Home onNavigate={setCurrentPage} />
    );
  }

  return (
    <div className="app">
      {/* ── Navbar ── */}
      <nav className="glass">
        <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`} 
              alt="F5 Networking" 
              style={{ height: '110px', width: 'auto', display: 'block' }}
            />
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Inicio</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentPage('nosotros'); }}>Nosotros</a>
            <div className="nav-dropdown">
              <span className="nav-link">Soluciones <ChevronDown size={16} /></span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('axia'); }} style={{ color: 'var(--color-accent)' }}>AXIA</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('nova-core'); }}>NOVA CORE</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('desarrollo'); }}>Desarrollo de Software</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('cableado'); }}>Cableado Estructurado</a>
                <a href="#echo" onClick={(e) => { e.preventDefault(); scrollTo('echo'); }}>ECHO CRM</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>BPO SERVICES</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>VOXIS</a>
              </div>
            </div>
            <a href="#contact" className="nav-link" onClick={() => scrollTo('contact')}>Contacto</a>
          </div>
        </div>
      </nav>

      {/* ... (rest of App.jsx) ... */}
    </div>
  );
};

export default App;
