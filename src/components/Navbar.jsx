import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate, activePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent touchmove to ensure total lock on some mobile browsers
      const preventDefault = (e) => e.preventDefault();
      document.addEventListener('touchmove', preventDefault, { passive: false });
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isMenuOpen]);


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
    <nav 
      className={`glass main-nav ${isScrolled ? 'scrolled' : ''}`} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 9999, 
        backgroundColor: 'rgba(5, 5, 5, 0.95)', // Permanent solid for visibility
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1200px', 
        width: '95%',
        margin: '0 auto',
        height: '70px',
        padding: '0 15px' // Reduced padding for mobile breathing room
      }}>
        <div 
          className="nav-logo-container"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} 
          onClick={() => { handleNavigate('home'); setIsMenuOpen(false); }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`}
            alt="Logo" 
            width="254"
            height="120"
            style={{ height: '120px', width: 'auto', display: 'block', marginLeft: '5px', transition: 'height 0.3s ease' }} 
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
