import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate, activePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.nav-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [isDropdownOpen, closeTimer]);

  const handleMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      setCloseTimer(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setCloseTimer(timer);
  };

  // Close dropdown when navigating
  const handleNavigate = (page) => {
    onNavigate(page);
    setIsDropdownOpen(false);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate home first
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="glass main-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
          onClick={() => { handleNavigate('home'); setIsMenuOpen(false); }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`}
            alt="F5 Networking" 
            style={{ height: 'auto', width: '150px', display: 'block' }} 
          />
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <span 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`} 
            style={{ cursor: 'pointer' }} 
            onClick={() => handleNavigate('home')}
          >
            Inicio
          </span>
          
          <span 
            className={`nav-link ${activePage === 'nosotros' ? 'active' : ''}`} 
            style={{ cursor: 'pointer' }} 
            onClick={() => handleNavigate('nosotros')}
          >
            Nosotros
          </span>
          
          <div 
            className={`nav-dropdown ${isDropdownOpen ? 'active' : ''}`}
            onMouseLeave={handleMouseLeave}
          >
            <span 
              className="nav-link" 
              style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
              onMouseEnter={handleMouseEnter}
              onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}
            >
              Soluciones <ChevronDown size={16} />
            </span>
            <div className="nav-dropdown-content glass" onMouseEnter={handleMouseEnter}>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('axia'); }} className={activePage === 'axia' ? 'active' : ''}>AXIA</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('nova-core'); }} className={activePage === 'nova-core' ? 'active' : ''}>NOVA CORE</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('desarrollo'); }} className={activePage === 'desarrollo' ? 'active' : ''}>Desarrollo de Software</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('cableado'); }} className={activePage === 'cableado' ? 'active' : ''}>Cableado Estructurado</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('echo'); }} className={activePage === 'echo' ? 'active' : ''}>ECHO CRM</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('bpo'); }} className={activePage === 'bpo' ? 'active' : ''}>BPO SERVICES</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('voxis'); }} className={activePage === 'voxis' ? 'active' : ''}>VOXIS</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('pbx'); }} className={activePage === 'pbx' ? 'active' : ''}>PBX DIDS & SMS</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('equipamiento'); }} className={activePage === 'equipamiento' ? 'active' : ''}>VENTA DE EQUIPOS</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <span onClick={() => { handleNavigate('home'); setIsMenuOpen(false); }} className={activePage === 'home' ? 'active' : ''}>Inicio</span>
          <span onClick={() => { handleNavigate('nosotros'); setIsMenuOpen(false); }} className={activePage === 'nosotros' ? 'active' : ''}>Nosotros</span>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 'bold', marginBottom: '15px', fontSize: '1.2rem' }}>Soluciones</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <span onClick={() => { handleNavigate('axia'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'axia' ? 'active' : ''}>AXIA</span>
              <span onClick={() => { handleNavigate('nova-core'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'nova-core' ? 'active' : ''}>NOVA CORE</span>
              <span onClick={() => { handleNavigate('desarrollo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'desarrollo' ? 'active' : ''}>Desarrollo</span>
              <span onClick={() => { handleNavigate('cableado'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'cableado' ? 'active' : ''}>Cableado</span>
              <span onClick={() => { handleNavigate('echo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'echo' ? 'active' : ''}>ECHO CRM</span>
              <span onClick={() => { handleNavigate('bpo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'bpo' ? 'active' : ''}>BPO SERVICES</span>
              <span onClick={() => { handleNavigate('voxis'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'voxis' ? 'active' : ''}>VOXIS</span>
              <span onClick={() => { handleNavigate('pbx'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'pbx' ? 'active' : ''}>PBX DIDS</span>
              <span onClick={() => { handleNavigate('equipamiento'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'equipamiento' ? 'active' : ''}>VENTA EQUIPOS</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
