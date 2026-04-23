import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ onNavigate, activePage }) => {
  const { t, language, toggleLanguage } = useLanguage();
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
        backgroundColor: 'rgba(26, 26, 31, 0.97)', // Graphite — matches new dark palette
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
          style={{ 
            cursor: 'pointer',
            height: '70px',
            width: '239px',
            flexShrink: 0,
            overflow: 'hidden',
            position: 'relative'
          }} 
          onClick={() => { handleNavigate('home'); setIsMenuOpen(false); }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`}
            alt="F5 Networking Logo"
            style={{
              position: 'absolute',
              height: '134px',
              width: '239px',
              top: '-18px',
              left: '0px',
              filter: 'drop-shadow(0 0 10px rgba(0, 180, 255, 0.1))',
              transition: 'filter 0.3s ease'
            }}
          />
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <span 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`} 
            style={{ cursor: 'pointer' }} 
            onClick={() => handleNavigate('home')}
          >
            {t('nav.home', 'Inicio')}
          </span>
          
          <span 
            className={`nav-link ${activePage === 'nosotros' ? 'active' : ''}`} 
            style={{ cursor: 'pointer' }} 
            onClick={() => handleNavigate('nosotros')}
          >
            {t('nav.about', 'Nosotros')}
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
              {t('nav.solutions', 'Soluciones')} <ChevronDown size={16} />
            </span>
            <div className="nav-dropdown-content glass" onMouseEnter={handleMouseEnter}>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('axia'); }} className={activePage === 'axia' ? 'active' : ''}>{t('nav.axia', 'AXIA')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('nova-core'); }} className={activePage === 'nova-core' ? 'active' : ''}>{t('nav.nova', 'NOVA CORE')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('desarrollo'); }} className={activePage === 'desarrollo' ? 'active' : ''}>{t('nav.dev', 'Desarrollo de Software')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('cableado'); }} className={activePage === 'cableado' ? 'active' : ''}>{t('nav.cabling', 'Cableado Estructurado')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('echo'); }} className={activePage === 'echo' ? 'active' : ''}>{t('nav.echo', 'ECHO CRM')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('bpo'); }} className={activePage === 'bpo' ? 'active' : ''}>{t('nav.bpo', 'BPO SERVICES')}</span>
              {/* <span onClick={(e) => { e.stopPropagation(); handleNavigate('voxis'); }} className={activePage === 'voxis' ? 'active' : ''}>VOXIS</span> */}
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('pbx'); }} className={activePage === 'pbx' ? 'active' : ''}>{t('nav.pbx', 'TELEFONÍA PBX')}</span>
              <span onClick={(e) => { e.stopPropagation(); handleNavigate('equipamiento'); }} className={activePage === 'equipamiento' ? 'active' : ''}>{t('nav.equipment', 'VENTA DE EQUIPOS')}</span>
            </div>
          </div>
          
          {/* Desktop Language Toggle — Flag Selector */}
          <button
            onClick={toggleLanguage}
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px',
              padding: '5px 12px 5px 8px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              transition: 'background 0.25s, transform 0.15s, box-shadow 0.25s',
              marginLeft: '10px',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {language === 'es' ? (
              <>
                <img src="https://flagcdn.com/w20/mx.png" width="20" height="14" alt="México" style={{ borderRadius: '2px', display: 'block' }} />
                <span style={{ opacity: 0.9 }}>ES</span>
              </>
            ) : (
              <>
                <img src="https://flagcdn.com/w20/us.png" width="20" height="14" alt="USA" style={{ borderRadius: '2px', display: 'block' }} />
                <img src="https://flagcdn.com/w20/ca.png" width="20" height="14" alt="Canada" style={{ borderRadius: '2px', display: 'block', marginLeft: '3px' }} />
                <span style={{ opacity: 0.9, marginLeft: '2px' }}>EN</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <span onClick={() => { handleNavigate('home'); setIsMenuOpen(false); }} className={activePage === 'home' ? 'active' : ''}>{t('nav.home', 'Inicio')}</span>
          <span onClick={() => { handleNavigate('nosotros'); setIsMenuOpen(false); }} className={activePage === 'nosotros' ? 'active' : ''}>{t('nav.about', 'Nosotros')}</span>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 'bold', marginBottom: '15px', fontSize: '1.2rem' }}>{t('nav.solutions', 'Soluciones')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <span onClick={() => { handleNavigate('axia'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'axia' ? 'active' : ''}>{t('nav.axia', 'AXIA')}</span>
              <span onClick={() => { handleNavigate('nova-core'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'nova-core' ? 'active' : ''}>{t('nav.nova', 'NOVA CORE')}</span>
              <span onClick={() => { handleNavigate('desarrollo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'desarrollo' ? 'active' : ''}>{t('nav.devMobile', 'Desarrollo')}</span>
              <span onClick={() => { handleNavigate('cableado'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'cableado' ? 'active' : ''}>{t('nav.cablingMobile', 'Cableado')}</span>
              <span onClick={() => { handleNavigate('echo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'echo' ? 'active' : ''}>{t('nav.echo', 'ECHO CRM')}</span>
              <span onClick={() => { handleNavigate('bpo'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'bpo' ? 'active' : ''}>{t('nav.bpo', 'BPO SERVICES')}</span>
              {/* <span onClick={() => { handleNavigate('voxis'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'voxis' ? 'active' : ''}>VOXIS</span> */}
              <span onClick={() => { handleNavigate('pbx'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'pbx' ? 'active' : ''}>{t('nav.pbx', 'TELEFONÍA PBX')}</span>
              <span onClick={() => { handleNavigate('equipamiento'); setIsMenuOpen(false); }} style={{ fontSize: '1rem' }} className={activePage === 'equipamiento' ? 'active' : ''}>{t('nav.equipmentMobile', 'VENTA EQUIPOS')}</span>
            </div>
          </div>
          
          {/* Mobile Language Toggle — Flag Selector */}
          <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '20px' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {language === 'es' ? 'Idioma actual' : 'Current language'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              {/* ES Option */}
              <button
                onClick={() => { if (language !== 'es') { toggleLanguage(); } setIsMenuOpen(false); }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  background: language === 'es' ? 'rgba(0,180,255,0.15)' : 'rgba(255,255,255,0.06)',
                  border: language === 'es' ? '1px solid rgba(0,180,255,0.5)' : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  minWidth: '90px'
                }}
              >
                <img src="https://flagcdn.com/w40/mx.png" width="40" height="27" alt="México" style={{ borderRadius: '4px', display: 'block' }} />
                <span>Español</span>
              </button>
              {/* EN Option — US + CA */}
              <button
                onClick={() => { if (language !== 'en') { toggleLanguage(); } setIsMenuOpen(false); }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  background: language === 'en' ? 'rgba(0,180,255,0.15)' : 'rgba(255,255,255,0.06)',
                  border: language === 'en' ? '1px solid rgba(0,180,255,0.5)' : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '14px',
                  padding: '12px 18px',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  minWidth: '90px'
                }}
              >
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <img src="https://flagcdn.com/w40/us.png" width="32" height="21" alt="USA" style={{ borderRadius: '3px', display: 'block' }} />
                  <img src="https://flagcdn.com/w40/ca.png" width="32" height="21" alt="Canada" style={{ borderRadius: '3px', display: 'block' }} />
                </div>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
