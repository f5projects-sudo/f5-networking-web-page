import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Bot, Zap, Globe, MessageSquareText, Clock, ChevronDown } from 'lucide-react';
import BubbleBackground from '../components/BubbleBackground';

export default function Axia({ onNavigate }) {
  // ...

  return (
    <div className="app">
      <BubbleBackground />

      {/* ── Navbar ── */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '5px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* ... */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('home')}>Inicio</span>
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => onNavigate('nosotros')}>Nosotros</span>
            <div className="nav-dropdown">
              <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                Soluciones <ChevronDown size={16} />
              </span>
              <div className="nav-dropdown-content glass" style={{ minWidth: '220px', left: '0' }}>
                <span onClick={() => onNavigate('axia')} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>AXIA</span>
                <span onClick={() => onNavigate('nova-core')} style={{ cursor: 'pointer' }}>NOVA CORE</span>
                <span onClick={() => onNavigate('desarrollo')} style={{ cursor: 'pointer' }}>Desarrollo de Software</span>
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

      {/* ... */}
    </div>
  );
}
