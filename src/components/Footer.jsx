import React from 'react';
import MapFooter from './MapFooter';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Wrench, Handshake, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Real Social Media SVGs
const SocialLogos = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
};

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
      
      {/* 
        ========================================================
        MASSIVE GROWING GRAPH SVG (GRÁFICA CRECIENTE)
        ========================================================
      */}
      <div style={{ position: 'absolute', top: '-249px', left: 0, width: '100%', height: '250px', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 250" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4FF" />
              <stop offset="100%" stopColor="#FF8C00" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,180,255,0.15)" />
              <stop offset="100%" stopColor="rgba(0,180,255,0)" />
            </linearGradient>
          </defs>

          {/* Solid fill matching the footer background */}
          <path fill="#071822" d="M0,230 Q 300,230 700,150 T 1440,30 L1440,250 L0,250 Z" />
          
          {/* Subtle area gradient under the curve */}
          <path fill="url(#areaGrad)" d="M0,230 Q 300,230 700,150 T 1440,30 L1440,250 L0,250 Z" />

          {/* Thick glowing graph line */}
          <path fill="none" stroke="url(#lineGrad)" strokeWidth="6" d="M0,230 Q 300,230 700,150 T 1440,30" style={{ filter: 'drop-shadow(0 8px 15px rgba(0, 180, 255, 0.7))' }} />
        </svg>

        {/* Nodes (Points on the Graph) overlayed with HTML so they don't deform on wide screens */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {/* Point 1 */}
          <div style={{ position: 'absolute', bottom: '20px', left: '15%', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#071822', border: '5px solid #00B4FF', transform: 'translate(-50%, 50%)', boxShadow: '0 0 20px #00B4FF', zIndex: 2 }} />
          {/* Point 2 */}
          <div style={{ position: 'absolute', bottom: '60px', left: '45%', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#071822', border: '5px solid #00B4FF', transform: 'translate(-50%, 50%)', boxShadow: '0 0 20px #00B4FF', zIndex: 2 }} />
          {/* Point 3 */}
          <div style={{ position: 'absolute', bottom: '135px', left: '75%', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#071822', border: '6px solid #FF8C00', transform: 'translate(-50%, 50%)', boxShadow: '0 0 25px #FF8C00', zIndex: 2 }} />
          {/* Point 4 */}
          <div style={{ position: 'absolute', bottom: '205px', left: '95%', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#071822', border: '7px solid #FF8C00', transform: 'translate(-50%, 50%)', boxShadow: '0 0 30px #FF8C00', zIndex: 2 }} />
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '40px 5% 60px' }}>
        
        {/* 
          ========================================================
          TOP ROW: LOGO & REAL BRAND SOCIAL ICONS
          ========================================================
        */}
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '30px', marginBottom: '80px' }}>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
            onClick={handleLogoClick}
          >
            <img 
              src={`${import.meta.env.BASE_URL}F5 finalizado 2.png`} 
              alt="F5 Networking" 
              style={{ height: '110px', width: 'auto', display: 'block', filter: 'drop-shadow(0 0 20px rgba(0, 180, 255, 0.3))' }} 
            />
          </motion.div>

          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <SocialBtn bg="#0A66C2" icon={<SocialLogos.LinkedIn />} href="#" />
            <SocialBtn bg="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" icon={<SocialLogos.Instagram />} href="#" />
            <SocialBtn bg="#1877F2" icon={<SocialLogos.Facebook />} href="#" />
            <SocialBtn bg="#FF0000" icon={<SocialLogos.YouTube />} href="#" />
          </div>
        </div>

        {/* 
          ========================================================
          MIDDLE ROW: HUGE GLASS CTAS (WOW FACTOR)
          ========================================================
        */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          
          <CTAGlassCard 
            icon={<MessageCircle size={45} strokeWidth={1.5} />} 
            title={t('footer.cta.chat', 'Iniciar conversación')} 
            color="0, 180, 255" 
            href="https://wa.me/5213341701107" 
            external 
          />
          <CTAGlassCard 
            icon={<Wrench size={45} strokeWidth={1.5} />} 
            title={t('footer.cta.support', 'Soporte técnico')} 
            color="255, 140, 0" 
            onClick={(e) => handleNavigation('soporte', e)} 
          />
          <CTAGlassCard 
            icon={<Handshake size={45} strokeWidth={1.5} />} 
            title={t('footer.cta.alliances', 'Alianzas Estratégicas')} 
            color="0, 180, 255" 
            onClick={(e) => handleNavigation('alianzas', e)} 
          />
        </div>

        {/* 
          ========================================================
          BOTTOM ROW: CONTACT, LEGAL, MAP
          ========================================================
        */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold' }}>{t('footer.contact.title', 'Contáctanos')}</h4>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <MapPin size={22} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
              <span style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
                {t('footer.address.street', 'C. Miguel Blanco 1440')}<br/>
                {t('footer.address.colony', 'Col Americana, Americana')}<br/>
                {t('footer.address.city', '44160 Guadalajara, Jal.')}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <Phone size={22} style={{ color: 'var(--color-secondary)', flexShrink: 0, marginTop: '3px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1.05rem' }}>
                <HoverLink href="tel:+5213341701107">🇲🇽 +52 1 33 4170 1107</HoverLink>
                <HoverLink href="tel:+12545058090">🇺🇸 +1 254 505 8090</HoverLink>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Mail size={22} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <HoverLink href="mailto:sales@f5networking.com">sales@f5networking.com</HoverLink>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold' }}>{t('footer.legal.title', 'Información legal')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem' }}>
              <HoverLink onClick={(e) => handleNavigation('terminos', e)}>
                <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>•</span> {t('footer.legal.terms', 'Términos y condiciones')}
              </HoverLink>
              <HoverLink onClick={(e) => handleNavigation('privacidad', e)}>
                <span style={{ color: 'var(--color-secondary)', marginRight: '10px' }}>•</span> {t('footer.legal.privacy', 'Aviso de privacidad')}
              </HoverLink>
              <HoverLink onClick={(e) => handleNavigation('pua', e)}>
                <span style={{ color: 'var(--color-accent)', marginRight: '10px' }}>•</span> {t('footer.legal.pua', 'Política de Uso Aceptable (PUA)')}
              </HoverLink>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold' }}>{mapTitle}</h4>
            <div style={{ width: '100%', height: '220px', borderRadius: '24px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <MapFooter />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
          © {currentYear} F5 Networking. {t('footer.copyright', 'Todos los derechos reservados.')}
        </div>
        
      </div>
    </footer>
  );
};

// Social Button Component (Real Colors)
const SocialBtn = ({ bg, icon, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.1, boxShadow: '0 15px 25px rgba(0,0,0,0.5)' }}
    whileTap={{ scale: 0.95 }}
    style={{
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      border: '2px solid rgba(255,255,255,0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Subtle inner highlight */}
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0))' }} />
    <div style={{ position: 'relative', zIndex: 1, display: 'flex' }}>{icon}</div>
  </motion.a>
);

// Massive Glass Card CTA Component
const CTAGlassCard = ({ icon, title, color, href, onClick, external }) => {
  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px 20px', zIndex: 1, position: 'relative' }}>
      <div style={{ 
        width: '90px', 
        height: '90px', 
        borderRadius: '50%', 
        background: `linear-gradient(135deg, rgba(${color}, 0.3), rgba(${color}, 0.05))`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: `rgb(${color})`,
        border: `1px solid rgba(${color}, 0.3)`,
        boxShadow: `0 0 30px rgba(${color}, 0.2)`
      }}>
        {icon}
      </div>
      <h3 style={{ color: 'white', fontSize: '1.6rem', margin: 0, fontWeight: 'bold', textAlign: 'center', letterSpacing: '0.5px' }}>{title}</h3>
    </div>
  );

  const style = {
    borderRadius: '32px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s'
  };

  const hoverStyle = {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderColor: `rgba(${color}, 0.5)`,
    transform: 'translateY(-10px)',
    boxShadow: `0 20px 40px rgba(${color}, 0.15)`
  };

  const BgGlow = () => (
    <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: `radial-gradient(circle, rgba(${color},0.1) 0%, rgba(0,0,0,0) 50%)`, opacity: 0.5, pointerEvents: 'none' }} />
  );

  if (external) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" style={style} whileHover={hoverStyle} whileTap={{ scale: 0.98 }}>
        <BgGlow />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div onClick={onClick} style={style} whileHover={hoverStyle} whileTap={{ scale: 0.98 }}>
      <BgGlow />
      {content}
    </motion.div>
  );
};

// Subcomponent for Hover Links
const HoverLink = ({ children, href, onClick }) => {
  if (href) {
    return (
      <motion.a 
        href={href} 
        style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        whileHover={{ color: '#fff', x: 5 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.a 
      href="#" 
      onClick={(e) => { e.preventDefault(); onClick && onClick(e); }} 
      style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      whileHover={{ color: '#fff', x: 5 }}
    >
      {children}
    </motion.a>
  );
};

export default Footer;
