import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';

// Real Social Media SVGs
const SocialLogos = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
};

const SVGSocialBtn = ({ bg, icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      pointerEvents: 'auto',
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '4px solid #071822',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
      boxSizing: 'border-box'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  >
    {icon}
  </a>
);

const Footer = ({ onNavigate, scrollTo }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    if (scrollTo) scrollTo('hero');
    else if (onNavigate) onNavigate('home');
  };

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  // Ensure "footer.map.title" doesn't render literally if translation is missing
  const mapTitleRaw = t('footer.map.title', 'Ubicación');
  const mapTitle = mapTitleRaw === 'footer.map.title' ? 'Ubicación' : mapTitleRaw;

  return (
    <footer style={{ position: 'relative', backgroundColor: '#071822', color: 'white', marginTop: '250px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Wave + Social Icons container */}
      <div style={{ position: 'absolute', top: '-249px', left: 0, width: '100%', height: '250px', overflow: 'visible', zIndex: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 250" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
          
          {/* Solid fill matching the footer background */}
          <path fill="#071822" d="M0,200 C 200,250 400,100 720,150 C 1040,200 1200,50 1440,50 L1440,250 L0,250 Z" />
          
          {/* Floating Social Icons — desktop only (hidden via opacity on mobile via CSS) */}
          <foreignObject x={386 - 40} y={160 - 40} width="80" height="80" style={{ overflow: 'visible' }} className="footer-social-wave-icon">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SVGSocialBtn bg="#0A66C2" icon={<SocialLogos.LinkedIn />} href="https://www.linkedin.com/company/111633194/admin/dashboard/" />
            </div>
          </foreignObject>
          
          <foreignObject x={627 - 40} y={140 - 40} width="80" height="80" style={{ overflow: 'visible' }} className="footer-social-wave-icon">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SVGSocialBtn bg="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" icon={<SocialLogos.Instagram />} href="https://www.instagram.com/f5networking_group?igsh=Z2k3aXd2MnUxeTR4" />
            </div>
          </foreignObject>
          
          <foreignObject x={1042 - 40} y={136 - 40} width="80" height="80" style={{ overflow: 'visible' }} className="footer-social-wave-icon">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SVGSocialBtn bg="#1877F2" icon={<SocialLogos.Facebook />} href="https://www.facebook.com/profile.php?id=100088109847354&locale=es_LA" />
            </div>
          </foreignObject>
          
          <foreignObject x={1303 - 40} y={65 - 40} width="80" height="80" style={{ overflow: 'visible' }} className="footer-social-wave-icon">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SVGSocialBtn bg="#FF0000" icon={<SocialLogos.YouTube />} href="https://www.youtube.com/channel/UCPEkvrT12WPJz7OpfuLEFYQ" />
            </div>
          </foreignObject>

        </svg>
      </div>

      {/* ── Mobile social row (shown only on mobile) ── */}
      <div className="footer-social-mobile" style={{
        display: 'none', /* overridden by CSS on mobile */
        justifyContent: 'center',
        gap: '16px',
        paddingTop: '16px',
        paddingBottom: '8px',
        position: 'relative',
        zIndex: 2
      }}>
        <SVGSocialBtn bg="#0A66C2" icon={<SocialLogos.LinkedIn />} href="https://www.linkedin.com/company/111633194/admin/dashboard/" />
        <SVGSocialBtn bg="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" icon={<SocialLogos.Instagram />} href="https://www.instagram.com/f5networking_group?igsh=Z2k3aXd2MnUxeTR4" />
        <SVGSocialBtn bg="#1877F2" icon={<SocialLogos.Facebook />} href="https://www.facebook.com/profile.php?id=100088109847354&locale=es_LA" />
        <SVGSocialBtn bg="#FF0000" icon={<SocialLogos.YouTube />} href="https://www.youtube.com/channel/UCPEkvrT12WPJz7OpfuLEFYQ" />
      </div>

      {/* 
        ========================================================
        DISCREET AND ELEGANT COLUMNS (NO MASSIVE NEON CTAS)
        ========================================================
      */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '40px 5% 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '50px' }}>
        
        {/* Column 1: Brand & Primary Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`} 
            alt="F5 Networking" 
            style={{ height: '70px', width: 'fit-content', cursor: 'pointer' }} 
            onClick={handleLogoClick}
          />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
            Facilitando crecimiento a través de infraestructura tecnológica de primer nivel y soluciones empresariales.
          </p>
          <a 
            href="https://wa.me/5213341701107" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block', 
              padding: '12px 28px', 
              backgroundColor: '#00B4FF', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '30px', 
              fontWeight: '500', 
              width: 'fit-content', 
              marginTop: '10px',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0090cc'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00B4FF'}
          >
            {t('footer.cta.chat', 'Iniciar conversación')}
          </a>
        </div>

        {/* Column 2: Servicios / CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>Servicios</h4>
          
          <button 
            onClick={(e) => handleNavigation('soporte', e)} 
            style={{ 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.2)', 
              padding: '10px 20px', 
              borderRadius: '20px', 
              color: 'white', 
              textAlign: 'left', 
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '0.95rem'
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
          >
            {t('footer.cta.support', 'Soporte técnico')}
          </button>
          
          <button 
            onClick={(e) => handleNavigation('alianzas', e)} 
            style={{ 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.2)', 
              padding: '10px 20px', 
              borderRadius: '20px', 
              color: 'white', 
              textAlign: 'left', 
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '0.95rem'
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
          >
            {t('footer.cta.alliances', 'Alianzas Estratégicas')}
          </button>

          <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '0.5px', marginTop: '15px' }}>
            {t('footer.legal.title', 'Legal')}
          </h4>
          <a href="#" onClick={(e) => handleNavigation('terminos', e)} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
            {t('footer.legal.terms', 'Términos y condiciones')}
          </a>
          <a href="#" onClick={(e) => handleNavigation('privacidad', e)} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
            {t('footer.legal.privacy', 'Aviso de privacidad')}
          </a>
          <a href="#" onClick={(e) => handleNavigation('pua', e)} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
            {t('footer.legal.pua', 'PUA')}
          </a>
        </div>

        {/* Column 3: Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>{t('footer.contact.title', 'Contáctanos')}</h4>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            {t('footer.address.street', 'C. Miguel Blanco 1440')}<br/>
            {t('footer.address.colony', 'Col Americana, Americana')}<br/>
            {t('footer.address.city', '44160 Guadalajara, Jal.')}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="tel:+5213341701107" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              <img src="https://flagcdn.com/mx.svg" width="20" alt="MX" style={{ marginRight: '10px', borderRadius: '2px' }} />
              +52 1 33 4170 1107
            </a>
            <a href="tel:+12545058090" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>
              <img src="https://flagcdn.com/us.svg" width="20" alt="US" style={{ marginRight: '10px', borderRadius: '2px' }} />
              +1 254 505 8090
            </a>
          </div>
          <div style={{ marginTop: '5px' }}>
            <a href="mailto:sales@f5networking.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}>sales@f5networking.com</a>
          </div>
        </div>

        {/* Column 4: Mapa */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>{mapTitle}</h4>
          <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <MapFooter />
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
        © {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}
      </div>
        
    </footer>
  );
};

export default Footer;
