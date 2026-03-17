import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  PhoneOutgoing, 
  Filter, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';
import NovaParticles from '../components/NovaParticles';

export default function NovaCore({ onNavigate }) {
  const [targetShape, setTargetShape] = useState('text'); // 'text', 'scatter', 'card'
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  // Asegurar que la vista inicie arriba ANTES del render mediante useLayoutEffect
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Top sections observer (Hero, Info, Features, Cash Particles)
    const upperObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const lowerObserverOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const handleUpperIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'hero-section' || entry.target.id === 'info-section') {
            setTargetShape('text');
          } else if (entry.target.id === 'nova-cash-particles') {
            setTargetShape('card');
          } else if (entry.target.id === 'nova-features') {
            setTargetShape('scatter');
          }
        }
      });
    };

    const handleLowerIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'nova-cash-info' || entry.target.id === 'nova-cta' || entry.target.id === 'nova-footer') {
            setTargetShape('scatter');
          }
        }
      });
    };

    const upperObserver = new IntersectionObserver(handleUpperIntersect, upperObserverOptions);
    const lowerObserver = new IntersectionObserver(handleLowerIntersect, lowerObserverOptions);

    const upperSections = [
      document.getElementById('hero-section'),
      document.getElementById('info-section'),
      document.getElementById('nova-features'),
      document.getElementById('nova-cash-particles')
    ];

    const lowerSections = [
      document.getElementById('nova-cash-info'),
      document.getElementById('nova-cta'),
      document.getElementById('nova-footer')
    ];

    upperSections.forEach(sec => sec && upperObserver.observe(sec));
    lowerSections.forEach(sec => sec && lowerObserver.observe(sec));

    return () => {
      upperObserver.disconnect();
      lowerObserver.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="app">
      <NovaParticles targetShape={targetShape} />
      
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
                <span onClick={() => onNavigate('nova-core')} style={{ cursor: 'pointer', color: 'var(--color-accent)' }}>NOVA CORE</span>
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

      {/* ── Hero Section (Solo para trigger the observer) ── */}
      <section id="hero-section" style={{ height: '100vh', marginBottom: '5vh', position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        {/* Las partículas dibujarán "NOVA CORE" aquí */}
      </section>

      {/* ... (rest of NovaCore.jsx) ... */}
    </div>
  );
}
