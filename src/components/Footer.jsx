import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onNavigate, scrollTo }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL;

  const handleLogoClick = () => {
    if (scrollTo) {
      scrollTo('hero');
    } else if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <footer style={{ padding: '60px 5% 40px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px', color: 'var(--color-text-muted)' }}>
        {/* Column 1: Contáctanos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>{t('footer.contact.title', 'Contáctanos')}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>🇲🇽</span>
            <a href="tel:+5213341701107" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color='var(--color-primary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+52 1 33 4170 1107</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>🇺🇸</span>
            <a href="tel:+12545058090" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.95rem' }} onMouseOver={e => e.target.style.color='var(--color-secondary)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>+1 254 505 8090</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>✉</span>
            <a href="mailto:sales@f5networking.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--color-accent)'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>sales@f5networking.com</a>
          </div>
        </div>

        {/* Column 2: Información Legal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>{t('footer.legal.title', 'Información legal')}</h4>
          <a href="#terminos" onClick={(e) => { e.preventDefault(); if(onNavigate) onNavigate('terminos'); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>{t('footer.legal.terms', 'Términos y condiciones')}</a>
          <a href="#privacidad" onClick={(e) => { e.preventDefault(); if(onNavigate) onNavigate('privacidad'); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>{t('footer.legal.privacy', 'Aviso de privacidad')}</a>
          <a href="#pua" onClick={(e) => { e.preventDefault(); if(onNavigate) onNavigate('pua'); }} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='white'} onMouseOut={e => e.target.style.color='var(--color-text-muted)'}>{t('footer.legal.pua', 'PUA')}</a>
        </div>

        {/* Column 3: Dirección */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>{t('footer.address.title', 'Dirección')}</h4>
          <p style={{ margin: 0, lineHeight: '1.6' }}>
            {t('footer.address.street', 'C. Miguel Blanco 1440')}<br />
            {t('footer.address.colony', 'Col Americana, Americana')}<br />
            {t('footer.address.city', '44160 Guadalajara, Jal.')}
          </p>
          <div style={{ marginTop: '10px', height: '200px', width: '100%', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <MapFooter />
          </div>
        </div>
      </div>

      {/* Bottom Logo & Copyright */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleLogoClick}>
          <img 
            src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`} 
            alt="F5 Networking" 
            width="225"
            height="100"
            style={{ 
              height: '100px', 
              width: 'auto', 
              display: 'block', 
              opacity: 0.9,
              filter: 'drop-shadow(0 0 8px rgba(0, 180, 255, 0.15))',
              transition: 'all 0.3s ease'
            }} 
          />
        </div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          © {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
