import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import CardSwap from '../components/CardSwap';
import MapFooter from '../components/MapFooter';

export default function Desarrollo({ onNavigate }) {
  // Asegurar que la vista inicie arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <div className="app bg-[#050505] min-h-screen">
      
      {/* ── Navbar ── */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '5px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => onNavigate('home')}
          >
            <img
              src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`}
              alt="F5 Networking"
              style={{ height: '110px', width: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Inicio</span>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('nosotros')}>Nosotros</span>
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                Soluciones <ChevronDown size={16} />
              </span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <span onClick={() => onNavigate('axia')} style={{ cursor: 'pointer' }}>AXIA</span>
                <span onClick={() => onNavigate('nova-core')} style={{ cursor: 'pointer' }}>NOVA CORE</span>
                <span onClick={() => onNavigate('desarrollo')} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>Desarrollo de Software</span>
                <span onClick={() => onNavigate('cableado')} style={{ cursor: 'pointer' }}>Cableado Estructurado</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>ECHO CRM</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>BPO SERVICES</span>
                <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>VOXIS</span>
              </div>
            </div>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Contacto</span>
          </div>
        </div>
      </nav>

      {/* ... (rest of Desarrollo.jsx) ... */}
    </div>
  );
}
