import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = ({ onNavigate, activePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

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
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '5px 5%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
          onClick={() => handleNavigate('home')}
        >
          <img 
            src={`${import.meta.env.BASE_URL}f5networking_logo_original_safe.png`}
            alt="F5 Networking" 
            style={{ height: '110px', width: 'auto', display: 'block' }} 
          />
        </div>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
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
              <span onClick={(e) => { e.stopPropagation(); scrollTo('services'); }}>VOXIS</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('pbx'); }} className={activePage === 'pbx' ? 'active' : ''}>PBX DIDS & SMS</span>
              <span onClick={(e) => { e.stopPropagation(); scrollTo('services'); }}>VENTA DE EQUIPOS</span>
            </div>
          </div>
          
          <span 
            className="nav-link" 
            style={{ cursor: 'pointer' }} 
            onClick={() => scrollTo('contact')}
          >
            Contacto
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
